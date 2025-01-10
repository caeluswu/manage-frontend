<template>
  <div>
    <el-dialog 
      v-model="props.show"
      :width="width"
      :show-close="false"
      @closed="emit(hascancel? 'onCancel':'onConfirm')"
    >
      <template #header="{ close, titleId, titleClass }">
        <div class="dialog_header">
          <h4 :id="titleId" :class="titleClass">{{ title }}</h4>
          <el-icon class="el-icon--left" @click="close">
            <CircleCloseFilled />
          </el-icon>
        </div>
      </template>

      <slot></slot>

      <template #footer>
        <span class="dialog-footer">
          <el-button v-if="hascancel" @click="emit('onCancel')">取消</el-button>
          <el-button type="primary" @click="emit('onConfirm')">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits} from 'vue'

const emit = defineEmits([
  'onCancel',
  'onConfirm'
])

const props = defineProps({
  show: {
    required: true
  },
  title: {
    type: String,
    default: '标题'
  },
  width: {
    type: String ,
    default: undefined
  },
  hascancel: {
    default: true,
    type: Boolean
  }
})
</script>

<style lang="scss" scoped>

</style>