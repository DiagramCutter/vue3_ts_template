<template>
  <div class="HigherOrderFunction">sdfd</div>
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent } from 'vue'
import './HigherOrderFunction.less'
export default defineComponent({
  name: 'App',
  setup() {
    const data = reactive({})

    // const sum = (a: number, b: number, c: number) => {
    //   return a + b + c
    // }

    // const currySum = curry(sum)

    // console.log(currySum(1)(2)(3))

    const curry = (a: number) => {
      return (b: any) => {
        console.log(a + b)
      }
    }

    const sum = curry(1)

    sum(2) //输出3
    sum(3) //输出4

    return {
      ...toRefs(data)
    }
  }
})
</script>
