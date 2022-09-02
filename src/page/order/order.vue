<template>
  <div>
    <div class="head">
      <van-tabs v-model="active">
        <van-tab title="全部">内容 1</van-tab>
        <van-tab title="待消费">内容 2</van-tab>
        <van-tab title="待评价">内容 3</van-tab>
        <van-tab title="退款">内容 4</van-tab>
      </van-tabs>
    </div>


    <footguide></footguide>
  </div>
</template>

<script>
import footguide from '@/components/footguide.vue'
export default {
  components: {
    footguide
  },
  data() {
    return {
      active: 0,
    };
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
</style>