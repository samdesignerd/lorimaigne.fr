<template>
  <nav class="o-nav fix flex center">
    <ul class="flex">
      <a-nav-item v-for="route in routes" :route="route"/>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "o-nav",
  components: {
    'a-nav-item': require('./a-nav-item.vue').default,

  },
  props: ['routes'],
}
</script>
<style lang="less" scoped>
@import url("./o-nav.less");
</style>
