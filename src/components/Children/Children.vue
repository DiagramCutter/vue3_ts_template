<template>
  <div class="Children">我是about的子页面</div>
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'
import './Children.less'
export default defineComponent({
  name: 'App',
  setup() {
    const data = reactive({})

    return {
      ...toRefs(data)
    }
  }
})
</script>
