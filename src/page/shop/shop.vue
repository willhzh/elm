<template>
  <div>
    <div class="backimg">
      <img :src="imageBaseUrl + '/' + shoptitile.image_path" alt="">
    </div>
    <van-sticky>
      <div class="shop_background">
        <nav class="shop_nav">
          <van-icon name="arrow-left" class="back" size="1.8rem" @click="goback" />
          <span class="icon iconfont search">&#xe8d6;</span>
          <div>
            <span class="icon iconfont focus">&#xe662;</span>
            <span class="focusword">关注</span>
          </div>
          <span class="icon iconfont more">&#xeb10;</span>
        </nav>
      </div>
    </van-sticky>


    <section class="fhead">
      <div class="shop_head">
        <h1 class="title">{{ shoptitile.name }}</h1>

        <img :src="imageBaseUrl + '/' + shoptitile.image_path" alt="" class="title_img">

        <span class="rate">{{ shoptitile.rating }}分</span>
        <span class="time">商家配送约{{ shoptitile.order_lead_time }}</span>
        <span class="sell">月售{{ shoptitile.recent_order_num }}</span>
        <p>{{ shoptitile.promotion_info }}</p>
        <span class="cost" v-for="(items, index) in shoptitile.activities" :key="index">
          {{ items.description }}
        </span>
      </div>
    </section>

    <section class="food">

      <van-tabs v-model="active" color="#49bbff" line-width="2.4rem">
        <van-tab title="点餐" name="order">
          <div class="main_info">
            <div class="left_nav">
              <li v-for="(items, index) in menuList" :key="index" class="foodclass" @click="chooseclass(index)">
                {{ items.name }}</li>
            </div>

            <div class="food_detail">
              <section v-for="(items1, index1) in menuList" :key="index1">
                <div class="catfood">{{ items1.name }}</div>

                <div v-for="(items2, index2) in items1.foods" :key="index2" class="food_block">
                  <img :src="imageBaseUrl + '/' + items2.image_path" class="food_img">
                  <h1 class="food_title">{{ items2.name }}</h1>
                  <span class="description">{{ items2.description }}</span>
                  <span class="fsell">{{ items2.tips }}</span>
                  <span class="fcost">￥{{ items2.specfoods[0].price }}</span>


                  <van-icon name="add" color="#60a8dc" size="1.8rem" class="add" @click="addfood(items2.item_id)" />
                  <span v-if="ifaddcart(items2.item_id).state" class="ifaddcart">
                    <van-icon name="minus" class="micon" />
                    <p>{{ ifaddcart(items2.item_id).number }}</p>
                  </span>

                </div>
              </section>

              <section>
                <footer>

                </footer>
              </section>

            </div>
          </div>

        </van-tab>

        <van-tab title="评价" name="comment">内容 2</van-tab>
        <van-tab title="商家" name="shop">内容 3</van-tab>

      </van-tabs>
      <alertTip v-if="showAlert" :showHide="showAlert" @closeTip="closeTip" :alertText="alertText"></alertTip>

    </section>

    <cart :money="totalPrice"></cart>

  </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex'
import { getMenu, getShop } from '@/service/getdata';
import cart from './cart.vue';
import alertTip from '@/components/alertTip.vue'
import buyCart from '@/components/buyCart'

export default {
  name: 'shop',
  data() {
    return {
      geohash: '',//geohash位置信息
      shopId: null,//商店id值
      showLoading: true, //显示加载动画
      menuList: [],//食品列表
      active: 'order',
      imageBaseUrl: 'https://elm.cangdu.org/img',
      showAlert: false,
      alertText: '',
      shoptitile: [],
      cartFoodList: [], //购物车商品列表
      showCartList: false,//显示购物车列表
      specsIndex: 0, //当前选中的规格索引值
    }
  },
  computed: {
    totalPrice: function () {//总共价格
      let sum = 0;
      for (let index = 0; index < this.cartFoodList.length; index++) {
        if (this.cartFoodList[index].number > 0) {
          sum += this.cartFoodList[index].number * this.cartFoodList[index].price;
        }
      }
      return sum;
    }
  },


  components: {
    cart,
    alertTip,
    buyCart,
  },
  created() {
    this.INIT_BUYCART();
    this.geohash = this.$route.query.geohash;
    this.shopId = this.$route.query.id;

  },
  async beforeMount() {
    let shop = await getMenu(this.shopId);
    this.menuList = shop.data;
    console.log(this.menuList);
    for (let i = 0; i < this.menuList.length; i++) {
      for (let j = 0; j < this.menuList[i].foods.length; j++) {
        let temp = {
          'id': this.menuList[i].foods[j].item_id,
          'number': 0,
          'price': this.menuList[i].foods[j].specfoods[0].price,
        }
        this.cartFoodList.push(temp);
      }
    }
    console.log(this.cartFoodList);


    let arr = this.geohash.split(',');
    let shopt = await getShop(arr[0], arr[1]);

    for (let i = 0; i < shopt.data.length; i++) {
      if (shopt.data[i].id == this.shopId) {
        this.shoptitile = shopt.data[i];
        break;
      }
    }


  },

  methods: {


    ...mapMutations([
      'RECORD_ADDRESS', 'ADD_CART', 'REDUCE_CART', 'INIT_BUYCART', 'CLEAR_CART', 'RECORD_SHOPDETAIL'
    ]),
    goback() {
      this.$router.go(-1);
    },
    chooseclass(index) {
      console.log(index);

    },
    addfood(id) {
      for (let i = 0; i < this.cartFoodList.length; i++) {
        if (this.cartFoodList[i].id == id) {

          this.cartFoodList[i].number += 1;
        }
      }
      console.log(this.totalPrice);
      console.log(this.cartFoodList);

    },

    ifaddcart(id) {
      for (let i = 0; i < this.cartFoodList.length; i++) {
        if (this.cartFoodList[i].id == id) {
          let temp = this.cartFoodList[i].number;
          return {
            state: true,
            number: temp
          };
        }
      }
      return {
        state: false,
        number: 0
      };
    }
  },

  closeTip() {
    this.showAlert = false;
  },

}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';

.backimg {
  @include wh(100%, 12rem);
  position: absolute;

  overflow: hidden;

  img {
    @include wh(100%, 12rem);
    background-size: 100%;
    background-repeat: no-repeat;
    opacity: 0.5;
  }
}


.shop_background {
  background-color: #FFF;
}

.shop_nav {
  @include wh(100%, 4.5rem);
  position: sticky;

  .back {
    position: absolute;
    left: 1.2rem;
    top: 50%;
    transform: translateY(-50%);
  }

  span {
    font-weight: bolder;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .search {
    right: 12.8rem;
  }

  .focus {
    font-size: large;
    right: 8.5rem;
  }

  .focusword {

    right: 5.5rem;
  }

  .more {
    font-size: large;
    right: 1.5rem;
  }
}

.fhead {
  @include wh(93%, 12rem);
  background-color: #FFF;
  margin: 0 auto;
  position: relative;
  border-radius: 1.2rem;

  .title_img {
    position: absolute;
    right: 1.6rem;
    @include wh(6rem, 6rem);
    border-radius: 0.6rem;
    // z-index: -1;
  }

  .shop_head {
    text-align: left;
    position: relative;
    padding: 1.2rem;

    span {
      position: absolute;
      top: 4.4rem;
    }

    p {
      position: absolute;
      top: 7.2rem;
    }

    .title {
      font: bolder 2rem "微软雅黑";
      position: absolute;
      top: 1.2rem;
      left: 1.2rem;
    }

    .rate {
      color: orange;
      font-weight: bolder;
      font-size: 1.6rem;
    }

    .time {
      left: 6.2rem;
      top: 5rem
    }

    .sell {
      left: 18.8rem;
      top: 5rem
    }

    .cost {
      position: relative;
      top: 8.8rem;
      margin-left: 0.6rem;
      align-content: center;
      color: red;
      border: 0.1rem solid;
      border-radius: 0.3rem;
      text-align: center;
    }

  }


}

.food {
  padding-bottom: 12rem;

}

.main_info {
  position: relative;

  .left_nav {
    height: 100%;
    position: absolute;
    padding: 1.2rem;
    background-color: #f1f1f1;


    li {
      width: 7rem;
      font: bolder 1.2rem "微软雅黑";
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .foodclass {
      padding: 1.2rem 0;
      text-align: center;

    }
  }

  .food_detail {
    position: relative;
    right: 0;

    .catfood {
      height: 2rem;

    }

    .food_block {
      @include wh(26rem, 12rem);
      position: relative;
      left: 10rem;
      right: 0.6rem;
      padding: 0.6rem;


      .food_img {
        @include wh(8rem, 8rem);
        position: absolute;
        left: 0.6rem;
        border-radius: 0.6rem;
        border: 0.1rem #b4b4b4 solid;
      }

      .food_title {
        max-width: 10rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: absolute;
        font: bolder 1.6rem "微软雅黑";
        left: 9.2rem;
      }

      .description {
        position: absolute;
        left: 9.2rem;
        top: 3rem;
        color: #9b9388;
      }

      .fsell {
        position: absolute;
        left: 9.2rem;
        top: 4.6rem;
        color: #9b9388;
      }

      .fcost {
        position: absolute;
        left: 9.2rem;
        top: 7.6rem;
        font: bolder 1.6rem "微软雅黑";
        color: red;
      }

      .ifaddcart {
        position: absolute;
        right: 5.4rem;
        top: 7.6rem;
        font-size: 1.6rem;

        p {
          position: absolute;
          top: 0rem;
          right: -2.1rem;
        }
      }

      .add {
        position: absolute;
        right: 0.6rem;
        top: 7.8rem;

      }
    }

  }
}
</style>