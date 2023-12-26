<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition as string || 'fade'">
      <component :is="Component" />
    </transition>
  </router-view>
</template>
<script lang="ts">
import './SimpLayout.less'
import { defineComponent, reactive, toRefs } from 'vue'
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
