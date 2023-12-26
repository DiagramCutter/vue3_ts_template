<template>
  <div style="display: flex" v-for="item in listNum">
    <div :class="{ text: true, active: active }" ref="textRef">
      <div class="btnshouqi" @click="openList">{{ btnText }} ^</div>
      浮动元素是如何定位的
      正如我们前面提到的那样，当一个元素浮动之后，它会被移出正常的文档流，然后向左或者向右平移，一直平移直到碰到了所处的容器的边框，或者碰到另外一个浮动的元素。
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, toRefs, defineComponent, ref } from 'vue'
import './TextOverflow.less'
export default defineComponent({
  name: 'TextOverflow',
  setup() {
    const data = reactive({
      btnText: '展开',
      listNum: 6,
      active: true
    })

    const textRef = ref()

    const openList = () => {
      data.active = !data.active
      if (data.btnText === '展开') {
        data.btnText = '收起'
      } else {
        data.btnText = '展开'
      }
    }

    return {
      ...toRefs(data),
      textRef,
      openList
    }
  }
})
</script>
