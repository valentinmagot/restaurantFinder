<template>
    <div class="container">
        <div class="top">
            Menu
        </div>
        <div class="pages">
            <div class="left-page">
                <MenuItemCard
                    img-src="./assets/logo.png"
                    item-name="HELLO"
                    price=100
                />
            </div>
            <div class="right-page">
                right
            </div>
        </div>
    </div>
</template>

<script>
import MenuItemCard from '@/components/MenuItemCard.vue';
export default{
    name: "Menu",
    components: {
        MenuItemCard
    }
}
</script>

<style scoped lang="scss">
@import '../assets/css/main.scss';

.container{
    border: $base-color;
    border-style: solid;
    border-width: 1px;
    border-radius: 8px;
}
.top{
    box-sizing: border-box;
    height: 20%;
    text-align: center;
    border: $base-color;
    border-bottom-style: solid;
    border-bottom-width: 1px;
}
.pages{
    height: 80%;
    text-align: center;
}
.left-page{
    box-sizing: border-box;
    display: inline-block;
    height: 100%;
    width: 50%;
    padding: 10px;
    border: $base-color;
    border-right-style: solid;
    border-right-width: 1px;
}
.right-page{
    box-sizing: border-box;
    display: inline-block;
    height: 100%;
    width: 50%;
    padding: 10px;
}
</style>
