<template>
  <div class="page-wrap flex col">
    <o-grid :data="content" :type="'img'"></o-grid>
  </div>
</template>
<script>
export default {
  name: "",
  components: {
    "o-grid": require("@/widgets/material/grid/o-layout.vue").default
  },
  created(){
    this.content = [...this.$content.illustration].map((item)=>{
      if (item.src.split("/").length == 1) item.src = `illustration/${item.src}.jpg`
      return item
    })
  },
  props: []
}
</script>
<style lang="less" scoped>

</style>
