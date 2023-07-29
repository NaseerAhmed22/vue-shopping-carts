<template>
    <div class="flex justify-between items-center py-4 shadow-sm px-5">
        <router-link class="text-2xl font-bold cursor-pointer" to="/">Shop</router-link>
        <router-link class="flex gap-2 text-gray-500 hover:text-black cursor-pointer " to="/cart">
            <i class="bi bi-bag-heart-fill text-2xl"></i>
            <span class="text-black">{{ count }}</span>
        </router-link>
    </div>
</template>
<script>

export default {
    name: 'Header',
    computed: {
        count() {
            return this.$store.state.count;
        }
    },
}
</script>

<style></style>