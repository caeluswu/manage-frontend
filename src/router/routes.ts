import { Chicken } from "@element-plus/icons-vue";
import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";

// TODO: 给不同的路由添加权限
export const constantRoute = [
  {
    //登录
    path: "/login",
    component: () => import("@/views/LoginView.vue"),
    name: "login",
    meta: {
      title: "登录", //菜单标题
      hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: "Promotion", //菜单文字左侧的图标,支持element-plus全部图标
    },
  },
  {
    //登录成功以后展示数据的路由
    path: "/",
    component: () => import("@/layout/index.vue"),
    name: "layout",
    meta: {
      title: "home",
      hidden: true,
      icon: "Home",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/HomeView.vue"),
        meta: {
          title: "首页",
          hidden: true,
          icon: "HomeFilled",
        },
      },
    ],
  },
  {
    //404
    path: "/404",
    component: () => import("@/views/404.vue"),
    name: "404",
    meta: {
      title: "404",
      hidden: true,
      icon: "DocumentDelete",
    },
  },
];

//异步路由
export const asnycRoute = [
  {
    path: "/bus",
    component: () => import("@/layout/index.vue"),
    redirect: "/bus/machine/maintain",
    meta: {
      title: "业务管理",
      icon: "Monitor",
    },
    children: [
      {
        path: "/bus/machine",
        component: () => import("@/views/machine/index.vue"),
        name: "machine",
        meta: {
          title: "机组维护",
          icon: "Monitor",
        },
        redirect: '/bus/machine/maintain',
        children: [
          {
            path: "/bus/machine/maintain",
            component: () => import("@/views/machine/maintain.vue"),
            name: "machine maintainance",
            meta: {
              title: "机组维护",
              icon: "Monitor",
            },
          },
          {
            path:"/bus/machine/electromagnetism",
            component: () => import("@/views/machine/electromagnetism.vue"),
            name: "electromagnetism machine",
            meta: {
              title: "电磁机组",
              icon: "Monitor",
            }
          },
          {
            path:"/bus/machine/electromechanical",
            component: () => import("@/views/machine/electromechanical.vue"),
            name: "electromechanical machine",
            meta: {
              title: "机电机组",
              icon: "Monitor",
            }
          }
        ],
      },
      {
        path: "/bus/station",
        component: () => import("@/views/station/index.vue"),
        name: "station",
        meta: {
          title: "场站管理",
          icon: "Monitor",
        },
        redirect: '/bus/station/maintain',
        children: [
          {
            path: "/bus/station/maintain",
            component: () => import("@/views/station/maintain.vue"),
            name: "station maintainance",
            meta: {
              title: "场站管理",
              icon: "Monitor",
            },
          },
          {
            path:"/bus/station/electromagnetism",
            component: () => import("@/views/station/electromagnetism.vue"),
            name: "electromagnetism station",
            meta: {
              title: "电磁场站",
              icon: "Monitor",
            }
          },
          {
            path:"/bus/station/electromechanical",
            component: () => import("@/views/station/electromechanical.vue"),
            name: "electromechanical station",
            meta: {
              title: "机电场站",
              icon: "Monitor",
            }
          }
        ],
      },
      {
        path: "/bus/proofread",
        component: () => import("@/views/ProofreadView.vue"),
        name: "proofread",
        meta: {
          title: "校核审批",
          icon: "Monitor",
        }
      },
    ]
  },
  
  {
    path: "/sys",
    component: () => import("@/layout/index.vue"),
    meta: {
      title: '系统管理',
      icon: 'Monitor'
    },
    children: [
      
      {
        path: "/sys/template",
        component: () => import("@/views/TemplateView.vue"),
        name: "template",
        meta: {
          title: "模板管理",
          icon: "Monitor",
        }
      },
      {
        path: "/sys/department",
        component: () => import("@/views/DepartmentView.vue"),
        name: "department",
        meta: {
          title: "部门管理",
          icon: "Monitor",
        }
      },
      {
        path: "/sys/staff",
        component: () => import("@/views/StaffView.vue"),
        name: "staff",
        meta: {
          title: "人员管理",
          icon: "Monitor",
        }
      },
      {
        path: "/sys/menu",
        component: () => import("@/views/MenuView.vue"),
        name: "menu",
        meta: {
          title: "菜单管理",
          icon: "Monitor",
        }
      },
      {
        path: "/sys/role",
        component: () => import("@/views/RoleView.vue"),
        name: "role",
        meta: {
          title: "角色管理",
          icon: "Monitor",
        }
      },
      
    ]
  },
];

//任意路由
export const anyRoute = {
  //任意路由
  path: "/:pathMatch(.*)*",
  redirect: "/404",
  name: "Any",
  meta: {
    title: "任意路由",
    hidden: true,
    icon: "DataLine",
  },
};
