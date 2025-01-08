<template>
  <div class="navbar">
    <div class="navbar_logo">
      TITLE & LOGO
    </div>
    <el-menu :default-active="$router.currentRoute.value.path" 
    class="navbar_menu" mode="horizontal" 
    >
      <NavMenu :menuList="navList"></NavMenu>
    </el-menu>

    <div class="navbar_info">
      <div>
        USER
      </div>
      <div>
        EXIT
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch} from 'vue'
import { useRouter } from 'vue-router'
//引入深拷贝方法
//@ts-expect-error
import cloneDeep from "lodash/cloneDeep";
import NavMenu from './NavMenu.vue';

const activeIndex = ref('1')

//获取父组件传递过来的全部路由数组
const props = defineProps(['menuItems'])

let navList: any = ref([])

//获取路由器对象
let $router = useRouter()

watch(() =>
  $router.currentRoute.value.path,
  (toPath) => {
    //要执行的方法
    navList.value.length = 0;
    if (!toPath) { return }
    //先递归到两层以下
    props.menuItems.forEach((element: any) => {
      if (element.children && element.children.length > 0) {
        element.children.forEach((childItem: any) => {
          if (childItem.children && childItem.children.length > 0) {
            childItem.children.forEach((grandchildItem: any) => {
              // console.log(grandchildItem.path,toPath);
              if (grandchildItem.path === toPath) {
                // 返回子路由
                navList.value = cloneDeep(childItem.children)
                return
              }
            })
          }
        });
      }
    });
  }, { immediate: true, deep: true })

// //点击菜单的回调
// const goRoute = (vc: any) => {
//   //路由跳转
//   $router.push(vc.index)
// }

</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: $mainColor;
  color: white;
  .navbar_menu {
    width: 100%;
    height: 100%;
    flex-shrink: 1;
    --el-menu-bg-color: $mainColor;
    --el-menu-text-color: white;
    --el-menu-active-text-color: white;
    --el-menu-hover-bg-color: $mainColor;
    --el-menu-hover-text-color: white;
    --el-menu-active-color: white;
  }

  .navbar_info {
    display: flex;
    justify-content: space-between;
    width: 300px;
    flex-shrink: 0;
  }

  .navbar_logo {
    width: 200px;
    flex-shrink: 0;
  }
}
</style>