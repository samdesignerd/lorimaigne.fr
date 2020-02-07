<template>
  <li>
    <router-link :to="route.path">{{route.name}}</router-link>
  </li>
</template>
<script>
export default{
  name: "a-nav-item",
  props: ["route"],
}
</script>
<style lang="less" scoped>
@import url("./a-nav-item.less");
</style>
