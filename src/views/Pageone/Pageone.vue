<template>
  <div class="Pageone"></div>
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'
import './Pageone.less'
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
