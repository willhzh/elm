const SAVE_GEOHASH = 'SAVE_GEOHASH'
const SAVE_ADDRESS = 'SAVE_ADDRESS'

export default {

  //保存geohash
  [SAVE_GEOHASH](state, geohash) {
    state.geohash = geohash;
  },

  //保存地址
  [SAVE_ADDRESS](state, address) {
    state.address = address;
  },


}