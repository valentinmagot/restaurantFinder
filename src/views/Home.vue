<template>
  <div class="home">
      <div class="home-content">
          <HomeText
            class="home_text"
            websiteTitle="In 'n Out"
            description="Eating out made Easy!"></HomeText>
            <SearchInput
            class="input"
            placeholder="Enter your location..."
            button-content="Search Restaurants"
            v-on:search="search"></SearchInput>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchInput from '@/components/SearchInput.vue'
import HomeText from '@/components/HomeText.vue'

export default {
    name: 'home',
    components: {
        SearchInput,
        HomeText
    },
    methods:{
        search: function(term){
            localStorage.clear();
            localStorage.location = term;
            this.$router.push('reservation/restaurants');
        }
    }
}
</script>
<style scopded lang="scss">
html, body{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
}
.home{
    height:100%;
    background-image: url('../assets/img/home-wallpaper.jpg');
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
}

.input{
    min-height: 100px;
    max-height: 120px;
}

.input{
    position: absolute;
    width: 70%;
    min-height: 100px;
    max-height: 120px;
    height: 11%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.home_text {
    position: absolute;
    width: 100%;
    top: 15%;
    left: 0;
    right: 0;
}
</style>
