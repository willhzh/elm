<template>
  <section id='foot_guide'>
    <section @click="gotoAddress('/home')" class="guide_item">
      <div class="icon iconfont elm">&#xfad8;</div>
    </section>
    <section @click="gotoAddress('/search')" class="guide_item">
      <div class="icon iconfont search">&#xe8d6;</div>
      <span>搜索</span>
    </section>
    <section @click="gotoAddress('/order')" class="guide_item">
      <div class="icon iconfont order">&#xe604;</div>
      <span>订单</span>
    </section>
    <section @click="gotoAddress('/user')" class="guide_item">
      <div class="icon iconfont sig">&#xe704;</div>
      <span>我的</span>
    </section>
  </section>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {

    gotoAddress(path) {
      if (path == this.$route.path)
        return
      this.$router.push(path)

    }
  },

}

</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';

#foot_guide {
  background-color: #fff;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  @include wh(100%, 6rem);
  display: flex;
  // box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, .1);
}

.guide_item {
  flex: 1;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  span {
    @include sc(1rem, #666);
    margin-top: 0.6rem;
    font-weight: bold;
  }

  .elm {
    @include ct;
    color: rgb(31, 139, 227);
    font-size: 3.5rem;
  }

  .sig {
    margin-top: 0.6rem;
    font-size: 2rem;
    font-weight: bold;
  }

  .order {
    margin-top: 0.6rem;
    font-size: 2.1rem;
    font-weight: bold;
  }

  .search {
    margin-top: 0.8rem;
    font-size: 1.8rem;
    font-weight: bold;
  }
}
</style>
