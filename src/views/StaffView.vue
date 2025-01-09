<template>
  <div class="staff">
    <div class="table_nav">
      <el-button type="primary">新建</el-button>
      <el-button type="danger" plain style="margin-left: 1rem;">停用</el-button>
      <div class="spacer"></div>
      <el-select style="margin-right:0.4rem;width: 162px;flex-shrink: 0;" placeholder="登录名称">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
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
      <el-table-column prop="status" label="状态" :formatter="format_status" />
      <el-table-column fixed="right" label="操作" min-width="120">
        <template #default>
          <el-button link type="primary" size="small">编辑</el-button>
          <el-button link type="danger" size="small">停用</el-button>
          <el-button link type="primary" size="small">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>


</template>

<script setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const search = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
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
const format_status = (row, column, cellValue, index) => {
  return cellValue ? '启用' : '禁用'
}


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

}
</style>