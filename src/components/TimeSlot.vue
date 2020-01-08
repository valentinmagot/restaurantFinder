
<template>
       <button class="time">{{time}}</button>
</template>

<script>
export default {
  name: 'TimeSlot',
  props: [
     "time",
  ],
}
</script>

<style scoped lang='scss'>
@import '@/assets/css/main.scss';

.time{
    font-family: $roboto-font;
    color: white;
    border: none;
    background-color: $base-color;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    
}

.time:hover {
    background-color: $base-color-faded;
     cursor: pointer;
}


</style>

