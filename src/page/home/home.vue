<template>
  <div class="home">

    <div class="fix">
      <div class="home_head">
        <div class="address">
          <div class="address_font">{{ address }}</div>

          <van-icon class="icon iconfont arrow" size="0.1rem">&#xee1c;</van-icon>
        </div>

        <van-icon class="icon iconfont shop" size="2.0rem">&#xee16;</van-icon>
        <van-icon class="icon iconfont info" dot size="2.0rem">&#xee17;</van-icon>

        <div class="home_search">

          <div class="search_board">
            <div class="icon iconfont ">&#xe63b;</div>
            <div class="line"></div>
            <input class="search_box" type="text" placeholder="江南叫花鸡 | 留夫鸭">

            <div class="search_tag">搜索</div>
          </div>

        </div>
      </div>
    </div>


    <div class="home_promotions">
      <img src="@/images/promotion.png" class="img_pro" />
    </div>
    <div class="home_application">

      <div class="catalog" v-for="(item, i) in foodcat" :key="i">
        <figure>
          <img class="app_cat" :src="require('@/images/app/' + item.id + '.jpeg')">
          <figcaption>{{ item.title }}</figcaption>
        </figure>


      </div>
    </div>

    <van-swipe class="home_swipe" indicator-color="white">
      <van-swipe-item><img src="@/images/tips1.png"></van-swipe-item>
    </van-swipe>

    <div class="home_filter">
      <button>减配送费</button>
      <button>无门槛红包</button>
      <button>吃货联盟</button>
      <button>百亿补贴</button>
      <div class="icon iconfont">&#xe976;</div>
    </div>

    <div class="home_store">
      <router-link :to="{ path: '/shop', query: { geohash, id: item.id } }" class="cat_store"
        v-for="(item, i) in stores" :key="i">
        <img class="cat_img" :src="imageBaseUrl + '/' + item.image_path">
        <h1 class="store_title">{{ item.name }}</h1>
        <p class="store_rate">{{ item.rating }}分</p>
        <p class="store_order">月售{{ item.recent_order_num }}</p>
        <p class="store_time">
          {{ item.order_lead_time }}
          {{ item.distance }}
        </p>
        <p class="store_deliver">起送￥{{ item.float_minimum_order_amount }} 配送￥{{ item.float_delivery_fee }}</p>
        <p class="store_tips" v-if="item.activities.length > 0">{{ item.activities[0].description }}</p>
      </router-link>

    </div>
    <footguide></footguide>
  </div>

</template>

<script>
import { getCity, getFoodCat, getGeo, getShop } from '@/service/getdata'
import footguide from '@/components/footguide.vue'
import { mapMutations } from 'vuex'


export default {
  name: 'home',
  props: {
    msg: String,
    loc_address: String
  },
  data() {
    return {
      search_value: '',
      geohash: '',
      geo_address: '',
      address: '',
      stores: [],
      imageBaseUrl: 'https://elm.cangdu.org/img',
      foodcat: [],
      test: [],
    }
  },

  async beforeMount() {

    let request = await getCity('guess');
    this.geohash = request.data.latitude + ',' + request.data.longitude;
    this.SAVE_GEOHASH(this.geohash);

    let res = await getGeo(this.geohash);
    this.SAVE_ADDRESS(res.data.address);
    if (res.data.status === 0) {
      this.address = '获取数据失败';
    } else {
      this.address = res.data.address;
    }

    let shop = await getShop(request.data.latitude, request.data.longitude);
    this.stores = shop.data;
    let foodcat = await getFoodCat();

    this.foodcat = foodcat.data;
    this.foodcat.pop();
  },

  mounted() {


  },

  components: {
    footguide,
  },


  methods: {
    ...mapMutations([
      'SAVE_ADDRESS', 'SAVE_GEOHASH'
    ]),

  }
}
</script>

<style lang="scss" scoped>
@import '@/style/mixin.scss';

.fix {
  width: 100%;
  height: 4.8rem;
}

.home_head {

  width: 100%;
  height: 4.8rem;
  position: fixed;

  top: 0;
  z-index: 1;
  background-color: #fff;

  .address {
    max-width: 25rem;
    display: inline-block;
    position: absolute;
    text-align: left;
    left: 0rem;
    padding: 1.3rem;


    .address_font {
      max-width: 18rem;
      font-size: 1.5rem;
      font-weight: bold;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

    }

    .arrow {
      left: 0.6rem;
      bottom: 0.4rem;
    }
  }



  .shop {
    font-size: 1.5rem;
    position: absolute;
    right: 2.4rem;
    margin: 1.2rem 3.5rem 1.2rem 1.2rem;
  }


  .info {
    font-size: 1.5rem;
    position: absolute;
    right: 0rem;
    margin: 1.2rem 2rem 1.2rem 1.2rem;
  }

  .home_search {
    position: absolute;
    top: 4.8rem;
    @include wh(100%, 3.2rem);
    padding: 0.2rem 1.2rem;
    background-color: #fff;


    .search_board {

      @include wh(100%, 100%);
      position: relative;
      border: 1px solid;
      border-color: rgb(71, 178, 248);
      border-radius: 2.4rem;
      background-color: rgb(255, 255, 255);


      .icon {
        width: 2.4rem;
        font-size: 1.4rem;
        position: absolute;
        display: inline-block;
        top: 50%;
        transform: translateY(-45%);
        left: 0.8rem;
        color: rgb(71, 178, 248);
      }

      .line {
        @include wh(100%, 1.8rem);
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 3.2rem;
        transform: translateY(-50%);
        border-left: 0.1rem solid rgb(221, 221, 221);
      }
    }

    .search_box {
      @include wh(80%, 100%);
      display: inline-block;
      left: 0;
      padding-left: 0.4rem;
      font-size: 1.1rem;
      color: rgb(139, 117, 117);
    }

    .search_tag {
      @include wh(6.4rem, 2.8rem);
      border-radius: 2.4rem;
      position: absolute;
      display: inline-block;
      top: -0.1rem;
      right: 0;
      background-color: rgb(71, 178, 248);
      line-height: 2.8rem;
      color: rgb(255, 255, 255);
      font-weight: 500;
      font-size: 1.2rem;
    }
  }
}


.home_promotions {
  @include wh(auto, 5.4rem);
  margin: 4.8rem 0 0 0;
  background-color: #fff;

  .img_pro {
    width: 35.5rem;
  }
}

.home_application {
  position: relative;
  margin: 0.6rem 0.6rem 0.6rem 0.6rem;


  .catalog {
    @include wh(4.8rem, 4.8rem);
    display: inline-block;
    margin: 0 1.2rem;


    .app_cat {
      @include wh(100%, 100%);
    }

  }

}

.home_swipe {
  margin: auto 1.2rem;

  img {
    @include wh(100%, 15rem);
  }
}

.home_filter {
  // background-color: blue;
  @include fj(space-around);
  @include wh(100%, 2.4rem);
  padding: 0rem 1.2rem;

  div {
    display: inline-block;
    padding: 0.4rem 0 0 0;
  }

  button {
    border-radius: 10%;
    @include wh(7.8rem, 100%);
    font-size: 1.0rem;
    font-weight: bold;
    color: rgb(99, 99, 99);
    background-color: #fff;
  }
}

.home_store {
  width: 100%;
  background-color: #F5F5F5;
  padding: 0.6rem 0.6rem 7rem 0.6rem;


  .cat_store {
    display: block;
    position: relative;
    @include wh(100%, 12rem);
    padding: 0.8rem;
    margin-top: 0.6rem;
    background-color: rgb(255, 255, 255);
    border-radius: 1.2rem;

    .cat_img {
      @include wh(10rem, 10rem);
      border-radius: 10%;
      position: absolute;
      left: 1rem;
    }

    .store_title {
      width: 12rem;
      height: 2.4rem;
      font-weight: bolder;
      position: absolute;
      left: 12rem;
      text-align: left;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .store_rate {
      position: absolute;
      left: 12rem;
      top: 4rem;
      font-size: 1.4rem;
      font-weight: bold;
      color: #db5a1a;
    }

    .store_order {
      position: absolute;
      left: 16.3rem;
      top: 4.2rem;
    }

    .store_time {
      position: absolute;
      right: 0.6rem;
      top: 4.2rem;
    }

    .store_deliver {
      position: absolute;
      left: 12rem;
      top: 6.8rem;
    }

    .store_tips {
      position: absolute;
      left: 12rem;
      bottom: 0.6rem;
      color: #ae4c59;
      border: 0.2rem solid #e7e3e4;
      border-radius: 0.6rem;
      padding: 0.2rem;
    }
  }

}
</style>

