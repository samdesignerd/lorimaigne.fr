<template>
  <div is="style">
    main{
      background-image: {{backgroundColorString}};
    }
  </div>
</template>
<script>
const background = require("@/store/static/design.js").default.colors.background
export default {
  name: "a-background",
  computed: {
    backgroundColorString: function(){
      return `linear-gradient(${background.angle},${background.gradient[0]},${background.gradient[1]})`
    }
  }
}
</script>
<style lang="less" scoped>

</style>
