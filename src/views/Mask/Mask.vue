<template>
  <input type="text" v-model="val1" @input="finishFn" />
  <input type="text" v-model="val2" />
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'
import './Mask.less'
export default defineComponent({
  name: 'App',
  setup() {
    const data = reactive({
      val1: '',
      val2: ''
    })

    const finishFn = () => {
      data.val2 = data.val1
    }

    return {
      ...toRefs(data),
      finishFn
    }
  }
})
</script>
