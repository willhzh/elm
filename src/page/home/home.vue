<template>
  <div>
    <router-view></router-view>
    <h1>Home</h1>
  </div>
</template>

<script>
import { getData } from '@/service/getdata'

export default {
  props:{
    msg: String
  },
  mounted(){
    getData().then()

  }
}
</script>

<style>

</style>