<template>
  <svg viewBox="0 0 24 24" class="abs icon sound">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path class="p1" d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    <path class="p2" d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
svg.sound{
  z-index: 10;
  width: 24px;
  height: 24px;
  stroke: #fff;
  bottom: 0; right:0;
  margin: 32px 42px;
  transform: rotate(-2deg);
  polygon{
    stroke-width: 0;
    fill: #fff;
    opacity: .4;
  }
  .p1,.p2{
    opacity: .1
  }
  .p2{

  }
}
</style>
