<template>
  <div class="Home">
    主页
    <Pageone></Pageone>
  </div>
</template>
<script lang="ts" setup name="app">
import { defineAsyncComponent } from 'vue/dist/vue'
import './Home.less'
const Pageone = defineAsyncComponent(() => import('@/views/Pageone/Pageone.vue'))
</script>
