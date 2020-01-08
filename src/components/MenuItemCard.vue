<template>
<!-- Thanks to https://www.w3schools.com/css/css3_images.asp -->
  <div class="card">
    <img :src="imgSrc" style="width:100%">
    <div class="container">
      <p>{{ foodName }}</p>
      <p>{{ foodPrice }} - {{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItemCard',
  props: [
    "foodName",
    "foodPrice",
    "description",
    "imgSrc"
  ],

}
</script>

<style scoped lang='scss'>
@import '@/assets/css/main.scss';
*{
    box-sizing: border-box;
}

div.container {
  text-align: center;
  color: white; 
}

.container p {
  margin: .5em;
}
// .restaurantName {
//   position: relative;
//   top: -100px;
//   left: 18px;
//   font-size: 16px;
//   font-weight: bold;
//   margin: 0;
// }
div.card {
  position: relative;
  min-width: 40%;
  max-width: 40%;
  float: left;
  background-color: $base-color;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 25px;
  border-radius: 8px;
}
img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  // opacity: 0.5;
  background-color: white;
}
button{
    width: 100%;
    height: 100%;
    padding: 15px;
    background: $base-color;
    color: white;
    font-size: 17px;
    border: 1px solid $base-color;
    border-left: none;
    cursor: pointer;
    &:hover{
        background-color: $base-color-focused;
    }
}
</style>

