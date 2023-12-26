<template>
  <!-- <div class="About">
    <div>pos: {{ x }}, {{ y }}</div>
  </div> -->
  <div v-if="isSupported">
    <button @click="copy(source)">
      <!-- by default, `copied` will be reset in 1.5s -->
      <span v-if="!copied">Copy</span>
      <span v-else>Copied!</span>
    </button>
    <p>
      Current copied: <code>{{ text || 'none' }}</code>
    </p>
  </div>
  <p v-else>Your browser does not support Clipboard API</p>
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent, ref } from 'vue'
import './About.less'
import { useMouse, useClipboard } from '@vueuse/core'
export default defineComponent({
  name: 'App',
  setup() {
    const data = reactive({})
    const { x, y } = useMouse()
    const source = ref('Hello')
    const { text, copy, copied, isSupported } = useClipboard({ source })

    return {
      ...toRefs(data),
      copy,
      x,
      y,
      source,
      text,
      copied,
      isSupported
    }
  }
})
</script>
