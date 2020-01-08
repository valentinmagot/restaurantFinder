<template>
    <div class="home_text_container">
          <h1>{{ websiteTitle }}</h1>
          <p>{{ description }}</p>
      </div>
</template>

<script>
export default {
    name: 'HomeText',
    props: [
        "websiteTitle",
        "description"
    ],
    
}
</script>

<style scoped <style lang="scss">
@import '@/assets/css/main.scss';
.home_text_container {
    // font-family: $francois-font;
    // font-family: $roboto-font;
    font-family: $open-font;
    // font-family: $righteous-font;
    // font-family: $patua-font;
    // font-family: $kanit-font;
    text-align: center;
    font-size: 1.5em;
}
</style>


