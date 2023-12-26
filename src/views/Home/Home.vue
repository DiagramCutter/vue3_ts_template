<template>
  <div class="Home">
    <button @click="add">add</button>
    {{ count }}
    <button @click="gotoAbout">about</button>
    <button @click="gotoLottie">Lottie</button>
    <button @click="gotoTextOverflow">文本溢出</button>
    <button @click="gotoHigherOrderFn">高阶函数</button>
    <button @click="gotoMask">mask标签</button>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import './Home.less'
export default defineComponent({
  name: 'App',
  setup() {
    const data = reactive({})
    const router = useRouter()

    const { count } = storeToRefs(useCounterStore())
    const add = () => {
      useCounterStore().addFn()
    }
    const gotoAbout = () => {
      router.push('/about')
    }
    const gotoLottie = () => {
      router.push('/lottie')
    }
    const gotoTextOverflow = () => {
      router.push('/text')
    }
    const gotoHigherOrderFn = () => {
      router.push('/higherOrderFunction')
    }
    const gotoMask = () => {
      router.push('/mask')
    }

    return {
      ...toRefs(data),
      count,
      add,
      gotoAbout,
      gotoLottie,
      gotoTextOverflow,
      gotoHigherOrderFn,
      gotoMask
    }
  }
})
</script>
