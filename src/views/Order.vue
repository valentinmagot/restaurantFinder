<template>
    <div class="container">
        <h1>This is the order page!</h1>
        <Menu class="menu"></Menu>
    </div>
</template>

<script>
import MenuItemCard from '@/components/MenuItemCard.vue'
import Menu from '@/components/Menu.vue'

export default{
    name: "Order",
    components: {
        MenuItemCard,
        Menu
    }
}
</script>

<style scoped lang="scss">
.menu{
    height: 200px;
}
</style>
