<template>
  <div>

    <section class="head">
      <van-icon name="arrow-left" class="back" size="1.8rem" @click="goback" />
      <input class="search_box" type="text" placeholder="江南叫花鸡 | 留夫鸭">
      <span class="word">搜索</span>
    </section>

    <footguide></footguide>
  </div>
</template>

<script>
import footguide from '@/components/footguide.vue'
export default {
  data() {
    return {

    }
  },
  methods: {
    goback() {
      this.$router.push('/home')
    }
  },

  components: {
    footguide
  },

}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';

.head {
  position: relative;
  @include wh(100%, 4rem);
  background-color: rgb(239, 239, 239);

  .back {
    position: absolute;
    left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .search_box {
    @include wh(78%, 80%);
    position: absolute;
    left: 4rem;
    display: inline-block;
    font-size: 1.1rem;
    border-radius: 1.5rem;
    padding-left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .word {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font: bolder 1.4rem "微软雅黑";
  }


}
</style>