<template>
<!-- Thanks to https://www.w3schools.com/css/css3_images.asp -->
  <div class="card">
    <img :src="imgSrc" style="width:100%">
    <p class="restaurantName">{{ restaurantName }}</p>
    <div class="container">
      <p>{{ cuisineType }} - {{ priceIndex }} - Rating: {{ score }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItemCard',
  props: [
    "restaurantName",
    "cuisineType",
    "priceIndex",
    "score",
    "imgSrc"
  ]
}
</script>

<style scoped lang='scss'>
@import '@/assets/css/main.scss';
*{
    box-sizing: border-box;
}
// .container{
//     display: inline-block;
//     padding: 10px;
// }
div.container {
  text-align: center;
}
.restaurantName {
  position: absolute;
  top: -10px;
  left: 18px;
  font-size: 30px;
  font-weight: bold;
}
div.card {
  position: relative;
  width: 30%;
  float: left;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 25px;
}
img {
  width: 100%;
  height: 100px;
  object-fit: cover;
  opacity: 0.5;
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
