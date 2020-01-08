
<template>
       <button class="large-btn">
           <font-awesome-icon class="icon" :icon="buttonIcon" size="2x"/>
           <h3>{{buttonText}}</h3>
       </button>
</template>

<script>
export default {
  name: 'LargeButton',
  props: [
     "buttonText",
     "buttonIcon",
  ],
}
</script>

<style scoped lang='scss'>
@import '@/assets/css/main.scss';

.large-btn {
    display: flex;
    border: none;
    background-color: #FEFEFA;
    // box-shadow: $base-discret-shadow;
    align-items: center;
    padding: 0 10px;
    padding-left: 10%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    
}

.large-btn:hover {
    background-color: $base-color-faded;
}

.icon{
    margin-right: 30px;
}

.large-btn h3 {
    margin: .5em 0;
    font-size: 26px;
    
}
</style>
