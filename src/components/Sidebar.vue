<template>
  <el-menu :collapse="LayOutSettingStore.fold ? true : false" :default-active="getIndex()" class="sidebar">
    <template v-for="(item, index) in menuList" :key="item.path">
      <!-- 一级，展开菜单，默认业务和系统-->
      <el-sub-menu :index="item.path" v-if="item.children && !item.meta.hidden">
        <template #title>
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
        <!--二级，下面的项-->
        <template v-for="(item2, index2) in item.children" :key="item2.path">
          <el-menu-item :index="item2.path" v-if="!item2.meta.hidden" @click="goRoute">
            <el-icon>
              <component :is="item2.meta.icon"></component>
            </el-icon>
            <template #title>
              <span>{{ item2.meta.title }}</span>
            </template>
          </el-menu-item>
        </template>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
//获取路由对象
import { useRoute } from 'vue-router'
import useLayOutSettingStore from '@/stores/setting'
//获取父组件传递过来的全部路由数组
defineProps(['menuList'])

let LayOutSettingStore = useLayOutSettingStore()

//获取路由器对象
let $router = useRouter()
//点击菜单的回调
const goRoute = (vc: any) => {
  //路由跳转
  $router.push(vc.index)
}

//获取路由对象
let $route = useRoute()

// 用路径的前两个元素构造index
const getIndex = () => {
  let b = $route.path.split('/')
  if (b.length > 3) {
    //只保留前三个元素
    return b.slice(0, 3).join('/')
  }
  return $route.path
}
</script>


<style scoped lang="scss">
.sidebar {
  --el-menu-text-color: #{$menuTextColor};
  --el-menu-active-color: #{$menuActiveTextColor};
  --el-menu-hover-bg-color: #{$mainShallowColor};
  --el-menu-border-color: transparent;
  .el-menu-item{
    height: 56px;
  }
  .el-menu-item.is-active {
    background-color: #{$mainShallowColor};
    border-right: solid 4px #{$mainColor};
  }
}
</style>