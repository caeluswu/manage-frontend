<template>
  <div class="layout_container">
    <!-- 顶部导航 -->
    <Navbar class="layout_navbar" :menuItems="userStore.menuRoutes" />
    <div class="sidebar_container">
      <!-- 左侧菜单 -->
      <div class="layout_sidebar">
        <!-- 展示菜单 -->
        <!-- 滚动组件 -->
        <el-scrollbar class="scrollbar">
          <!-- 菜单组件-->

          <!--根据路由动态生成菜单-->
          <Sidebar :menuList="userStore.menuRoutes" />

        </el-scrollbar>
      </div>
      <!-- 内容展示区域 -->
      <div class="layout_main">
        <!-- 路由组件出口的位置 -->
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <!-- 渲染layout一级路由组件的子路由 -->
            <component :is="Component" v-if="flag" />
          </transition>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, nextTick, computed } from 'vue'
//获取路由对象
import { useRoute } from 'vue-router'
//引入菜单组件
import Sidebar from '@/components/Sidebar.vue'
//引入顶部Navbar组件
import Navbar from '@/components/Navbar.vue'
//获取用户相关的小仓库
import useUserStore from '@/stores/user'
import useLayOutSettingStore from '@/stores/setting'
let userStore = useUserStore()
userStore.userInfo()
//获取layout配置仓库
let LayOutSettingStore = useLayOutSettingStore()



//控制当前组件是否销毁重建
let flag = ref(true)


//监听仓库内部数据是否发生变化,如果发生变化，说明用户点击过刷新按钮
watch(
  () => LayOutSettingStore.refsh,
  () => {
    //点击刷新按钮:路由组件销毁
    flag.value = false
    nextTick(() => {
      flag.value = true
    })
  },
)


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

<script lang="ts">
export default {
  name: 'Layout',
}
</script>
<style lang="scss" scoped>
$base-menu-width: 208px;
$base-menu-min-width: 50px;
$base-menu-background: white;
$base-navbar-height: 65px;


.layout_container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: $backgroundColor;

  .sidebar_container {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    margin-top: $base-navbar-height;
  }

  .layout_sidebar {
    width: $base-menu-width;
    background: $base-menu-background;
    transition: all 0.3s;
    box-shadow: 2px 0px 4px 0px rgba(34,90,80,0.05);

    .scrollbar {
      width: 100%;
      height: calc(100vh - 48px);
    }
  }

  .layout_navbar {
    position: fixed;
    width: 100%;
    height: $base-navbar-height;
    top: 0px;

    transition: all 0.3s;
  }

  .layout_main {
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-navbar-height);
    overflow: auto;
    transition: all 0.3s;

  }
}
</style>
