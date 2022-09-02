<template>
  <div>
    <nav>
      <van-icon name="cross" class="back" size="2.4rem" @click="goback" />
      <section>
        <div class="title">密码登录</div>
        <form class="input">
          <section class="input_common">
            <input type="text" placeholder="手机/用户名" v-model="username">
          </section>

          <section class="input_common">
            <input v-if="!showPassword" type="password" placeholder="密码" v-model="password">
            <input v-else type="text" placeholder="密码" v-model="password">
            <van-icon :name="signalPassword" class="sig" size="2rem" color="#8b8b8b" @click="changeShow" />
          </section>

          <section class="input_common">
            <input type="text" placeholder="验证码" v-model="code">
            <img :src="codeImage" class="codeimg">
          </section>

          <alert-tip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alert-tip>

        </form>
        <div class="log_button" ref="btnlog" @click="login">登录</div>
      </section>

      <div class="forget">
        忘记密码
      </div>

    </nav>


  </div>


</template>

<script>
import alertTip from '@/components/alertTip.vue'
import { getCode, accountLogin } from '@/service/getdata'

export default {
  data() {
    return {
      showPassword: false,
      signalPassword: 'closed-eye',
      password: null,
      username: null,
      showAlert: false, //显示提示组件
      alertText: null, //提示的内容
      code: null,
      codeImage: null,
    }
  },

  created() {
    this.getCodeImg();
  },
  components: {
    alertTip,
  },

  computed: {
    check() {
      let { username, password } = this;
      return { username, password };
    }
  },

  watch: {
    check: function (val) {
      let { username, password } = val
      if (username && password) {
        this.$refs.btnlog.style = 'background:#60a8dc;color:black';
      } else {
        this.$refs.btnlog.style = 'background:#e1e1e1;color:#8b8b8b';
      }
    }
  },
  methods: {
    async getCodeImg() {
      let request = await getCode();
      this.codeImage = request.data.code;
    },

    goback() {
      this.$router.go(-1);
    },

    changeShow() {
      this.showPassword = !this.showPassword;
      if (this.signalPassword === 'closed-eye') {
        this.signalPassword = 'eye-o';
      } else {
        this.signalPassword = 'closed-eye';
      }
    },

    async login() {
      if (!this.username) {
        this.showAlert = true;
        this.alertText = '请输入手机/用户名';
        return
      } else if (!this.password) {
        this.showAlert = true;
        this.alertText = '请输入密码';
        return
      }
      //用户名登录
      this.userInfo = await accountLogin(this.username, this.password, this.code);
      console.log(this.userInfo.data);
    },
    closeTip() {
      this.showAlert = false;
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';

.back {
  @include wh(100%, 4rem);
  text-align: left;
  padding: 1.2rem 0rem 0rem 1.6rem;
}

.title {
  @include wh(100%, 10rem);
  text-align: left;
  font: bolder 2.5rem "微软雅黑";
  padding: 4.2rem 0 1rem 2rem;
}

.input {
  padding: 0 2.4rem;
  @include wh(auto, 15rem);

  input {
    @include wh(100%, 4rem);

  }

  .input_common {
    margin: 0.6rem;
    border-bottom: 0.1rem solid #e1e1e1;
    text-align: left;
    color: #8b8b8b;
    font-weight: bolder;
    position: relative;

    .codeimg {
      position: absolute;
      right: 0;

    }

    .sig {
      position: absolute;
      right: 0rem;
      top: 1.2rem;
    }

  }

}

.log_button {
  margin: 2rem auto;
  @include wh(95%, 4rem);
  background-color: #e1e1e1;
  border-radius: 2rem;
  color: #8e8d8d;
  font: bolder 1.4rem/4rem "黑体";
}

.forget {
  text-align: right;
  color: #60a8dc;
  margin-right: 1.4rem;
  font: bolder 1.4rem "微软雅黑";
}
</style>