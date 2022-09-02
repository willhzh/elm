<template>
  <div id="cart">

    <div class="tips">

    </div>

    <div class="footnav">
      <span class="icon iconfont logo">&#xe65b;</span>
      <div>
        <div class="data">
          ￥<span class="money">{{ money }}</span>
        </div>

        <span class="deliver">配送费</span>
      </div>

      <span class="comfirm">￥60 起送</span>

    </div>


  </div>
</template>

<script>
export default {
  props: {
    money: 0,
  },

  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';

#cart {
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  @include wh(100%, 6rem);
  display: flex;
  background-color: #FFF;
}

.footnav {
  @include wh(100%, 6rem);
  position: relative;


  .logo {
    position: absolute;
    color: #34bdfd;
    font-size: 4rem;
    margin-left: 1.2rem;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .data {
    position: absolute;
    font: bold 1.2rem "微软雅黑";
    left: 6.8rem;
    top: 50%;
    transform: translateY(-90%);

    .money {
      font: bold 1.8rem "微软雅黑";
    }
  }

  .deliver {
    position: absolute;
    font: bold 1.2rem "微软雅黑";
    left: 6.8rem;
    top: 50%;
    transform: translateY(0%);
  }

  .comfirm {
    @include wh(10.8rem, 4.2rem);
    position: absolute;
    font: bold 1.5rem/4.2rem "微软雅黑";
    color: #FFF;
    right: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
    background-color: #34bdfd;
    border-radius: 3.4rem;
  }

}
</style>