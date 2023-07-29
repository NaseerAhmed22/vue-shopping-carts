<template>
    <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center container mx-auto px-4 my-8">
        <div @click="itemsDetail(items)" class="w-70 cursor-pointer flex flex-col gap-2 shadow-md rounded-md" v-for="items in showCard">
            <img class="bg-stone-50 rounded-md hover:bg-stone-100 duration-200" :src="items.photo" alt="Card Photo" />

            <div class="flex justify-between px-2 py-2">
                <h2>{{ items.title }}</h2>
                <p class="font-bold">${{ items.price}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'home',
    computed: {
        showCard() {
            return this.$store.getters.showData;
        },
    }, //

    methods: {
        itemsDetail(item){
        this.$router.push({name: 'add-cart', params: item})
        }
    }, //
}
</script>
<style></style>