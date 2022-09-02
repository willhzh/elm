<template>
  <div>

    <div class="title">
      <router-link to="/login" class="login_pass">登录</router-link>
    </div>


    <footguide></footguide>
  </div>
</template>

<script>
import footguide from '@/components/footguide.vue'
export default {
  components: {
    footguide,
  },

}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';

.title {
  position: relative;
  padding: 1.2rem;

  .login_pass {
    position: absolute;
    left: 1.2rem;
    font: bold 2.2rem "微软雅黑";
  }
}
</style>