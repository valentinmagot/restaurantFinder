<template>
    <div>
        <BreadcrumbBar/>
        <router-view class="router-view"/>
    </div>
</template>

<script>
import BreadcrumbBar from '@/components/BreadcrumbBar.vue'
import FilterComponent from '@/components/FilterComponent.vue'
export default{
    name: "reservation",
    components:{
        BreadcrumbBar,
        FilterComponent
    }
}
</script>

<style scoped lang="scss">
@import '@/assets/css/main.scss';
*{
    box-sizing: border-box;
}
html{
    padding: 0;
}
body{
    margin: 0;
}
.router-view{
    padding: 20px;
}
</style>
