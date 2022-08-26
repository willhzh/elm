<template>
  <div>
    <van-icon class="icon iconfont arrow" size="0.1rem">&#xee1c;</van-icon>
    <van-icon name="chat-o" dot />
    <van-icon name="chat-o" class="a123" size="100rem" />
    <h1>order</h1>
    <footguide></footguide>
  </div>
</template>

<script>
import footguide from '@/components/footguide.vue'
export default {
  components: {
    footguide
  }
}
</script>

<style lang="scss" scoped>
.a123 {
  background-color: blue;

}
</style>