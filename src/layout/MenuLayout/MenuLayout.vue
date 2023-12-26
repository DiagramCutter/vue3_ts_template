<template>
  <a-layout style="min-height: 100vh">
    <a-layout-sider
      v-model="collapsed"
      collapsible
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        zIndex: 20
      }"
    >
      <div class="logo" />
      <a-menu theme="dark" v-model="selectedKeys" mode="inline">
        <a-menu-item v-for="menu in menuList" :key="menu.name" @click="jumpRoute(menu)">
          <a-icon :type="menu.meta!.icon"></a-icon>
          <span>{{ menu.meta!.title }}</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header
        style="background: #fff; padding: 0; position: fixed; width: 100%; z-index: 10"
      >
        <div style="display: flex; justify-content: flex-end">
          <user-info></user-info>
        </div>
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <router-view v-slot="{ Component, route }">
          <transition :name="route.meta.transition as string || 'fade'">
            <component :is="Component" />
          </transition>
        </router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center"> </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import './MenuLayout.less'
import { routes } from '@/router/router-link'
import { defineComponent, reactive, toRefs, computed, watch, Ref, ref } from 'vue'
import { RouteRecordRaw, useRoute, useRouter, RouteRecordName } from 'vue-router'
type RouteData = RouteRecordName | null | undefined
export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const data = reactive({
      collapsed: true,
      routerName: '',
      selectedKeys: ['']
    })

    const route = useRoute()

    // 实列化总路由
    const router = useRouter()

    const menuList = computed(() => {
      return routes.filter((item) => item.meta && item.meta.title)
    })

    const jumpRoute = (routerInfo: RouteRecordRaw) => {
      router.push(routerInfo.path)
    }

    const routeData = computed(() => {
      return route.name
    })

    // 设置menu选中默认值
    const selectedKeys: Ref<string[]> = ref([''])
    selectedKeys.value = [route.name ? route.name.toString() : '']

    watch(routeData, (val: RouteData) => {
      selectedKeys.value = val ? [val.toString()] : []
      data.routerName = (route.meta.routerName as string) || ''
    })

    return {
      ...toRefs(data),
      menuList,
      jumpRoute
    }
  }
})
</script>
