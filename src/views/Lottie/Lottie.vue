<template>
  <div class="Lottie" ref="LottieRef"></div>
  <button @click="playHandle" class="btn">播放</button>
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent, ref, onMounted } from 'vue'
import './Lottie.less'
import Lottie from 'lottie-web'
import animationData from '@/assets/trophy.json'
export default defineComponent({
  name: 'App',
  setup() {
    const data = reactive({})
    const LottieRef = ref()
    let trophyLottie: any = null
    onMounted(() => {
      const LottieDom = document.querySelector('.Lottie')
      trophyLottie = Lottie.loadAnimation({
        container: LottieDom!,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        animationData: animationData
      })
    })

    const playHandle = () => {
      Lottie.play()
      // setTimeout(() => {
      //   LottieRef.value.style.backgroundColor = '#FF2A76'
      // }, 4500)
    }

    return {
      ...toRefs(data),
      LottieRef,
      playHandle
    }
  }
})
</script>
