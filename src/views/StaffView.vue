<template>
  <div class="staff">
    <div class="table_nav">
      <el-button type="primary" @click="newStaff">新建</el-button>
      <el-button type="danger" plain style="margin-left: 1rem;">停用</el-button>
      <div class="spacer"></div>
      <el-select style="margin-right:0.4rem;width: 162px;flex-shrink: 0;" :placeholder="search_attr" v-model="search_attr">
        <el-option v-for="item in props" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-input v-model="search" style="margin-right:1rem;width: 260px; flex-shrink: 0;" placeholder="请输入名称"
        :suffix-icon="Search" />
      <el-button type="primary">查询</el-button>
    </div>
    <el-table :data="data" style="width: 100%" stripe>
      <el-table-column type="selection" width="55" />
      <el-table-column prop="username" label="登录名称" />
      <el-table-column prop="name" label="姓名" />
      <el-table-column prop="department" label="部门" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="create_time" label="创建时间" />
      <el-table-column prop="login_time" label="上次登录时间" />
      <el-table-column prop="status" label="状态" :formatter="(row:any, column:any, cellValue:any, index:any) => {return cellValue ? '启用' : '禁用' }" />
      <el-table-column fixed="right" label="操作" min-width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="modifyForm">编辑</el-button>
          <el-button link type="danger" size="small">停用</el-button>
          <el-button link type="primary" size="small">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog v-model="showStaffDialog" class="create_staff" :show-close="false">
      <template #header="{ close, titleId, titleClass }">
        <div class="staff_header">
          <h4 :id="titleId" :class="titleClass">{{ createStaffForm.from == 'new' ? '创建' : '编辑' }}用户</h4>
          <el-icon class="el-icon--left" @click="close">
            <CircleCloseFilled />
          </el-icon>
        </div>
      </template>
      <el-form :model="createStaffForm" label-position="left" :label-width="'80px'" class="staff_form">
        <div class="basic_info">
          <h3>基本信息</h3>
          <div class="basic_info_items">
            <el-form-item label="登陆名称">
              <el-input v-model="createStaffForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名">
              <el-input v-model="createStaffForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="createStaffForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input v-model="createStaffForm.repassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="createStaffForm.email" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
              <el-input v-model="createStaffForm.contact" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="部门">
              <el-input v-model="createStaffForm.department" autocomplete="off"></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="permission">
          <h3>权限管理</h3>
          <el-table :data="permission" @select="handleSelect" @selectAll="handleSelectAll" stripe ref="permissionTable">
            <el-table-column type="selection"  />
            <el-table-column prop="permission" label="权限名称" />
          </el-table>
        </div>
        <div class="modify" v-show="createStaffForm.from == 'modify'">
          <h3>修改密码</h3>
          <el-form-item label="旧密码">
              <el-input v-model="createStaffForm.username" autocomplete="off"></el-input>
            </el-form-item>
          <el-form-item label="新密码">
              <el-input v-model="createStaffForm.username" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
              <el-input v-model="createStaffForm.username" autocomplete="off"></el-input>
            </el-form-item>
        </div>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showStaffDialog = false">取消</el-button>
          <el-button type="primary" @click="checkForm">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import type { Reactive } from 'vue'
import { ElNotification } from 'element-plus'
import type { TableInstance } from 'element-plus'


interface createStaff {
  username: string,
  name: String,
  password: String,
  repassword: string,
  email: String,
  contact: String,
  department: string,
  permission: number,
  from: 'new' | 'modify'
}


const props = [
  {
    label: '登录名称',
    value: 'username',
  },
  {
    label: '姓名',
    value: 'name',
  },
  {
    label: '部门',
    value: 'department'
  },
  {
    label: '邮箱',
    value: 'email'
  },
  {
    label: '上次登录时间',
    value: 'login_time'
  },
  {
    label: '创建时间',
    value: 'create_time'
  },
  {
    label: '状态',
    value: 'status'
  },
]

// const formLabelWidth = '80px'
const search = ref('');
const search_attr = ref(props[0].value);
const permissionTable = ref<TableInstance>();
const showStaffDialog = ref(false);
const createStaffForm: Reactive<createStaff> = reactive({
  username: '',
  name: '',
  password: '',
  repassword: '',
  email: '',
  contact: '',
  department: '',
  permission: 0,
  from: 'new'
});
const permission = [
  {
    permission: '上传',
  },
  {
    permission: '审核',
  },
  {
    permission: '管理员',
  }
]
const permissionValue = {
  '上传': 1,
  '审核': 2,
  '管理员': 4,
}
const handleSelect = (selection:any, row: any) => {
  createStaffForm.permission = 0
  selection.forEach((item: {permission:'上传' | '审核' | '管理员'}) => {
    createStaffForm.permission += permissionValue[item.permission]
  })
}
const handleSelectAll = (selection: any) => {
  createStaffForm.permission = 0
  selection.forEach((item: {permission:'上传' | '审核' | '管理员'}) => {
    createStaffForm.permission += permissionValue[item.permission]
  })
}
const newStaff = () => {
  createStaffForm.name = ''
  createStaffForm.username = ''
  createStaffForm.password = ''
  createStaffForm.repassword = ''
  createStaffForm.email = ''
  createStaffForm.contact = ''
  createStaffForm.department = ''
  createStaffForm.permission = 0
  createStaffForm.from='new'
  permissionTable.value?.clearSelection()
  
  showStaffDialog.value = true
}
const modifyForm = (staffInfo: any) => {
  createStaffForm.from = 'modify'
  showStaffDialog.value = true
}
const checkForm = () => {
  if(createStaffForm.username==='' || 
    createStaffForm.password==='' ||
    createStaffForm.repassword==='' ||
    createStaffForm.name==='' ||
    createStaffForm.email==='' ||
    createStaffForm.contact==='' ||
    createStaffForm.department===''||
    createStaffForm.permission===0
  ){
    ElNotification({
      type: 'warning',
      message: '用户信息不完整',
    })
    return
  }
  if(createStaffForm.password != createStaffForm.repassword){
    ElNotification({
      type: 'warning',
      message: '密码不一致',
    })
    createStaffForm.password = ''
    createStaffForm.repassword = ''
    return
  }
  // TODO: 对接后端
  console.log('createStaffForm:',createStaffForm);
  
  showStaffDialog.value = false
}

const data = [
  {
    username: 'wxh',
    name: '王小虎',
    department: '上海市普陀区金沙江路',
    email: '12345@qq.com',
    create_time: '2016-05-02',
    login_time: '2016-05-03',
    status: true,
  },
  {
    username: 'zs',
    name: '张三',
    department: '上海市普陀区金沙江路',
    email: '12345@qq.com',
    create_time: '2016-05-02',
    login_time: '2016-05-03',
    status: false,
  }
]




</script>

<style lang="scss" scoped>
.staff {
  padding: 20px 53px;

  .table_nav {
    padding-bottom: 1rem;
    display: flex;

    .spacer {
      width: 100%;
      flex-shrink: 1;
    }
  }

  .create_staff {

    // padding: 1rem;
    .staff_header {
      // background-color: $mainColor;
      // outline: solid $mainColor 2rem;
      margin-bottom: 1rem;
      position: relative;
      z-index: 20;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;

      h4 {
        color: white;
        padding-left: 1rem;
      }
    }

    .staff_header::before {
      content: '';
      position: absolute;
      top: -1rem;
      left: -1rem;
      bottom: -1rem;
      right: -1rem;
      background-color: $mainColor;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      z-index: -1;
    }
  }

  .staff_form {
    padding: 1rem;
    display: grid;
    grid-template-areas: 'a a' 'b c';
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    .basic_info {
      grid-area: a;
    }

    h3 {
      border-left: solid $mainColor 4px;
      padding-left: 0.25rem;
      margin-bottom: 1rem;
    }

    .basic_info_items {
      display: grid;
      grid-template-columns: auto auto;
      grid-column-gap: 2rem;
      grid-row-gap: 1rem;

      .el-form-item {
        margin-bottom: 0.5rem;
      }
    }

  }


}
</style>