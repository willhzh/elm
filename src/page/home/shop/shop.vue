<template>
  <div id='shop'>
    <div class="son" v-for="(item, index) in articles" :key="index" @click="emitIndex(index)">{{ item }}</div>
    <h1>shop</h1>
  </div>
</template>

<script>
export default {
  name: 'son',
  props: [
    'articles'
  ],
  methods: {
    emitIndex(index) {
      this.$emit('onEmitIndex', index) // 触发父组件的方法，并传递参数index
    }
  }
}
</script>

<style lang="scss" scoped>
.shop {
  .son {
    font-size: 18rem;
  }
}
</style>