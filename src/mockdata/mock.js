import Mock from 'mockjs'

Mock.mock('city.com', {
  "id": 1,
  "name": "@cname",
  "abbr": "SH",
  "area_code": "021",
  "sort": 1,
  "latitude": 31.23037,
  "longitude": 121.473701,
  "is_map": true,
  "pinyin": "shanghai"

});

Mock.mock('geo.com', {
  "address": "上海市黄浦区西藏中路",
  "city": "上海市",
  "geohash": "31.22967,121.4762",
  "latitude": "31.22967",
  "longitude": "121.4762",
  "name": "黄浦区上海人民广场"
});


Mock.mock('entry', {
  id: 1,
  is_in_serving: true,
  description: "0元早餐0起送，每天都有新花样。",
  title: "预订早餐",
  link: "",
  image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
  icon_url: "",
  title_color: "",
  __v: 0
}, {
  id: 65,
  is_in_serving: true,
  description: "",
  title: "土豪推荐",
  image_url: "/d/49/7757ff22e8ab28e7dfa5f7e2c2692jpeg.jpeg",
  link: "",
  icon_url: "",
  title_color: "",
  __v: 0
}, );

Mock.mock('menu', {
    name: "热销榜",
    description: "大家喜欢吃，才叫真好吃。",
    id: 1,
    restaurant_id: 3,
    foods: [{
      name: "好似懂非",
      image_path: "/img/food/15c1ab95e7620.jpg",
      activity: {
        image_text_color: "f1884f",
        icon_color: "f07373",
        image_text: "实行政策支持支持支持"
      },
      restaurant_id: 3,
      category_id: 1,
      item_id: 1,
      tips: "626评价 月售713份",
      _id: "591d5ea243f73a7dbdc97c6b",
      specfoods: [{
        name: "好似懂非",
        item_id: 1,
        sku_id: 1,
        food_id: 1,
        restaurant_id: 3,
        _id: "591d5ea243f73a7dbdc97c6c",
        specs: [],
        stock: 1000,
        checkout_mode: 1,
        is_essential: false,
        recent_popularity: 941,
        sold_out: false,
        price: 21,
        promotion_stock: -1,
        recent_rating: 0.6,
        packing_fee: 1,
        pinyin_name: "",
        original_price: 0
      }],
      satisfy_rate: 79,
      satisfy_count: 461,
      attributes: [{
          icon_color: "5ec452",
          icon_name: "新"
        },
        {
          icon_color: "f07373",
          icon_name: "招牌"
        }
      ],
      is_essential: false,
      server_utc: "2017-05-18T08:37:10.963Z",
      specifications: [],
      rating_count: 626,
      month_sales: 713,
      description: "中小城镇创新政策中",
      attrs: [],
      display_times: [],
      pinyin_name: "",
      is_featured: 0,
      rating: 3.2
    }],
    type: 1,
    icon_url: "5da3872d782f707b4c82ce4607c73d1ajpeg",
    is_selected: true,
    __v: 1
  },

);