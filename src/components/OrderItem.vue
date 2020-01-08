<template>
<!-- Thanks to https://www.w3schools.com/css/css3_images.asp -->
  <div class="container">
      <div class="label-container">
          <h3 style="color:white">Order</h3>
      </div>
      <div class="item-list" >
          <div
          :class="['items', interactive ? 'hoverable' : '']"
          v-bind:key="index"
          v-for="(item, index) in value">
              <p>{{item.name}} - {{item.price}} </p>
              <font-awesome-icon v-if="interactive" @click="value.splice(index, 1)" class="location" icon="times-circle" size="1x"/>
          </div>
      </div>

      <div class="subtotal-container">
          <p>Subtotal: ${{subtotal}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'OrderItem',
  props: {
    value: {}, // no defaults for this!
    interactive: {
        default: true,
        type: Boolean
    }
  },
  computed: {
      subtotal: function(){
          return this.value.reduce(function(total, currentValue){
              return total + currentValue.price;
          }, 0).toFixed(2);
      }
  }
}
</script>

<style scoped lang='scss'>
@import '@/assets/css/main.scss';
*{
    box-sizing: border-box;
}

.container {
    background-color: white;
    border: 1px solid black;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    width: 100%;
    // height: 100%;
    border:none;
    box-shadow: $base-discret-shadow;
}

.label-container {
    background-color: $base-color;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 10%;

}

.label-container h3 {
    margin: .5em 0;

}

.subtotal-container{
    padding: 0 10px;
    background-color: $base-color;
    display: flex;
    justify-content: left;
    // border-top: 1px solid black;
    // box-shadow: $base-discret-shadow-reverse;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    height: 10%;
    color: white;
}

.item-list {
    height: 80%;
    overflow-y: auto;
    min-height: 275px;
    max-height: 275px;
}

.items {
    display: flex;
    padding-top: 0px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 0px;
    justify-content: space-between;
    align-items: center;
    // border-top: 1px solid black;
    border-bottom: 1px solid black;
}

.hoverable:hover{
    background-color: gray; //this color need to be changed
}

</style>
