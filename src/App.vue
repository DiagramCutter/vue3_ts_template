<template>
  <component :is="component"></component>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs, watch } from "vue";
import MenuLayout from "@/layout/MenuLayout";
import SimpLayout from "@/layout/SimpLayout";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "App",
  setup() {
    const data = reactive({
      component: SimpLayout,
    });

    const route = useRoute();

    if (route.meta.layout === "menuLayout") {
      data.component = MenuLayout;
    } else if (route.meta.layout === "simpLayout") {
      data.component = SimpLayout;
    }

    const routeData = computed(() => {
      return route.meta.layout;
    });

    watch(routeData, (val) => {
      if (val === "menuLayout") {
        data.component = MenuLayout;
      } else if (val === "simpLayout") {
        data.component = SimpLayout;
      }
    });

    return {
      ...toRefs(data),
    };
  },
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
