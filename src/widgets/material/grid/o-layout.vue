<template>
  <ul class="flex row wrap">
    <li v-if="type == 'video'" v-for="(item, index) in data"
        class="a-grid-card"
        @click="$hub.$emit('media-overlay', { open: true, index: index, playlist: data, type: 'video'})"
        :style="{backgroundImage: `url(${$mediaSrc}${item.src}snap.jpg)`}">
        <div class="abs" :style="{backgroundImage: `url(${$mediaSrc}${item.src}snap.jpg)`}">

        </div>
    </li>

    <li v-if="type == 'img'" class="a-grid-card yahe" v-for="(item, index) in data"
      @click="$hub.$emit('media-overlay', { open: true, index: index, playlist: data, type: 'img'})"
      :style="{backgroundImage: `url(${$mediaSrc}${item.src})`}"></li>
  </ul>
</template>
<script>
export default {
  name: "",
  components: {
    // 'a-grid-card': require('./a-grid-card').default
  },
  props: ['data', 'type'],
  mounted(){
    console.log("DATA", this.data, this.type)
  }
}
</script>
<style lang="less" scoped>
.a-grid-card{
  // margin-left: 4vw;
}
@media screen and (max-width: 900px) {
  ul{
    width: 84vw;
  }
  .a-grid-card{
    width: 40vw;
    height: 40vw;
    margin-left: 4vw;
  }
  .a-grid-card:nth-of-type(2n+1){
    margin-left: 0;
  }
}
@media screen and (max-width: 600px) {
  ul{
    width: 70vw;
  }
  .a-grid-card{
    width: 70vw;
    height: 70vw;
    margin-left: 0;
  }
}

@media screen and (min-width: 900px) {
  ul{
    width: 92vw;
  }
  .a-grid-card{
    width: 20vw;
    height: 20vw;
    margin-left: 4vw;
  }
  .a-grid-card:nth-of-type(4n+1){
    margin-left: 0;
  }
}



.a-grid-card{

  // height: 305px;
  border-radius: 1px;
  box-shadow: 0 10px 10px 1px rgba(0,0,0,.1);
  background-color: #fff;
  margin-bottom: 64px;


  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
