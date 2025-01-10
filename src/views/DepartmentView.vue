<template>
  <div class="department">
    <div class="table_nav">
      <el-button type="primary" @click="editDepartment('新建部门')">新建</el-button>
      <el-button type="danger" plain style="margin-left: 1rem;">停用</el-button>
      <div class="spacer"></div>
      <el-select style="margin-right:0.4rem;width: 162px;flex-shrink: 0;" :placeholder="search_attr"
        v-model="search_attr">
        <el-option v-for="item in props" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <el-input v-model="search" style="margin-right:1rem;width: 260px; flex-shrink: 0;" placeholder="请输入名称"
        :suffix-icon="Search" />
      <el-button type="primary">查询</el-button>
    </div>
    <el-table :data="departments" style="width: 100%" row-key="id" :border="true" lazy>
      <el-table-column type="selection" />
      <el-table-column prop="name" label="部门名称" />
      <el-table-column prop="id" label="部门代码" />
      <el-table-column prop="description" label="部门描述" />
      <el-table-column fixed="right" label="操作" min-width="120">
        <template #default>
          <el-button link type="primary" size="small" @click="editDepartment('')">编辑</el-button>
          <el-button link type="primary" size="small" @click="editStaff">调整人员</el-button>
          <el-button link type="primary" size="small" @click="modifyDepartment">新建子部门</el-button>
          <el-button link type="danger" size="small">停用</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Dialog :show="showDepartmentInfoDialog" 
        :title="departmentInfoDialogTitle" 
        width="522" 
        @onCancel="showDepartmentInfoDialog = false"
        @onConfirm="checkForm">
      <el-form :model="newDepartmentForm" label-position="left" :label-width="'80px'" class="new_department_form">
        <el-form-item label="部门名称">
          <el-input v-model="newDepartmentForm.name" autocomplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="部门代码">
          <el-input v-model="newDepartmentForm.id" autocomplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="部门描述">
          <el-input v-model="newDepartmentForm.description" autocomplete="off" placeholder="请输入内容"></el-input>
        </el-form-item>
      </el-form>
    </Dialog>

    <!-- <el-dialog v-model="showNewDepartmentDialog" class="new_department" :show-close="false" width='522'>
      <template #header="{ close, titleId, titleClass }">
        <div class="dialog_header">
          <h4 :id="titleId" :class="titleClass">新建部门</h4>
          <el-icon class="el-icon--left" @click="close">
            <CircleCloseFilled />
          </el-icon>
        </div>
      </template>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showStaffDialog = false">取消</el-button>
          <el-button type="primary" @click="checkForm">确认</el-button>
        </span>
      </template>
    </el-dialog> -->
    <Dialog :show="showStaffEditDialog"
        :title="`人员调整 - ${department}`" 
        width="80%" 
        :hascancel="false"
        @onConfirm="showStaffEditDialog = false">
      <StaffView :department="department"></StaffView>
    </Dialog>
    <!-- <el-dialog :model="showStaffEditDialog" width="70%">
      <template #header="{ close, titleId, titleClass }">
        <div class="dialog_header">
          <h4 :id="titleId" :class="titleClass">人员调整 - {{ department }}</h4>
          <el-icon class="el-icon--left" @click="close">
            <CircleCloseFilled />
          </el-icon>
        </div>
      </template>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="showStaffDialog = false">取消</el-button>
          <el-button type="primary" @click="checkForm">确认</el-button>
        </span>
      </template>
    </el-dialog> -->
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

import { Search } from '@element-plus/icons-vue'
import  StaffView  from './StaffView.vue'
import Dialog from '@/components/Dialog.vue';

const departments = reactive([
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    description: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    description: 'No. 189, Grove St, Los Angeles',
  },
  {
    id: 3,
    date: '2016-05-01',
    name: 'wangxiaohu',
    description: 'No. 189, Grove St, Los Angeles',
    children: [
      {
        id: 31,
        date: '2016-05-01',
        name: 'wangxiaohu',
        description: 'No. 189, Grove St, Los Angeles',
      },
      {
        id: 32,
        date: '2016-05-01',
        name: 'wangxiaohu',
        description: 'No. 189, Grove St, Los Angeles',
      },
    ],
  },
  {
    id: 4,
    date: '2016-05-03',
    name: 'wangxiaohu',
    description: 'No. 189, Grove St, Los Angeles',
  },
])
const props = [
  {
    value: 'name',
    label: '部门名称',
  },
  {
    value: 'id',
    label: '部门代码',
  },
  {
    value: 'description',
    label: '部门描述',
  },
]
const search = ref('');
const search_attr = ref(props[0].value);
const showStaffEditDialog = ref(false)
const department = ref('')
const showDepartmentInfoDialog = ref(false)
const departmentInfoDialogTitle = ref('新建部门')
const newDepartmentForm = reactive({
  id: '',
  name: '',
  description: ''
})
const editDepartment = (title: string) => {
  departmentInfoDialogTitle.value = title
  showDepartmentInfoDialog.value = true
}


const checkForm = () => {
  showDepartmentInfoDialog.value = false
}
const editStaff = ()=>{
  showStaffEditDialog.value = true
}
</script>

<style lang="scss" scoped>
.department {
  padding: 20px 53px;

  .table_nav {
    padding-bottom: 1rem;
    display: flex;

    .spacer {
      width: 100%;
      flex-shrink: 1;
    }
  }

  .new_department {
    .new_department_form {
      padding: 0 1rem;
    }
  }
}
</style>