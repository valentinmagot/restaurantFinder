
<template>
    <div class="container" >
        <div class="input-container">
            <div class="icon-div" >
                <font-awesome-icon class="location" icon="map-marker-alt" size="2x"/>
            </div>
                <input v-model="searchTerm"
                :placeholder="placeholder"
                style="{'full-height': takeFullHiehgt}"
                @keyup.enter="search(searchTerm)"/>
            </div>

        <button style="{'full-height': takeFullHiehgt}" @click="search(searchTerm)">{{ buttonContent }}</button>
    </div>
</template>

<script>
export default {
  name: 'SearchInput',
  props: [
     "placeholder",
     "buttonContent",
     "takeFullHeight"
  ],
  data(){
      return {
          searchTerm: ""
      }
  },
  methods:{
      search: function(searchTerm){
          if(searchTerm == ''){
            this.$toasted.error("Please Specify location!");
            return;
          }
          this.$emit("search", searchTerm);
      }
  }
}
</script>

<style scoped lang='scss'>
@import '@/assets/css/main.scss';
*{
    box-sizing: border-box;
}
.container{
    display: flex;
    flex-direction: column;
    // padding: 10px;
    box-shadow: $base-shadow;
    border-radius: 8px;
    width: 70%;
}
.input-container {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;

}
.icon-div{
    width: 10%;
    height: 100%;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid $base-color;
    border-top: 1px solid $base-color;
    border-right: 1px solid $base-color;
    border-top-left-radius: 8px;

}
.input-div{
    width: 90%;
    height: 100%;
    background-color: $base-color;
    border-top-right-radius: 8px;
}
input{
    font-size: 17px;
    float: left;
    border-top-right-radius: 8px;
    border: none;
    padding-left: 10px;
    width: 100%;
    color: black;
    height: 100%;
    border-top: 1px solid $base-color;
    border-right: 1px solid $base-color;
}
button{
    // align-self: flex-end;
    width: 100%;
    height: 50%;
    padding: 10px;
    background: $base-color;
    color: white;
    font-size: 17px;
    font-weight: bold;
    border: none;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    cursor: pointer;
    &:hover{
        background-color: $base-color-focused;
    }
}
.full-height{
    height: 100%;
}
</style>
