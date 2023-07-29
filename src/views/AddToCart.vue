<template>
  <div class="flex flex-col items-center md:flex-wrap lg:flex-nowrap md:flex-row px-4 my-3 gap-6">
    <img class="rounded-xl bg-beige" :src="details.photo" alt="image" />

    <div class="flex flex-col gap-6  md:gap-8">
      <div class="flex flex-col gap-2">
        <h2 class="text-2xl font-bold">{{ details.title }}</h2>

        <p class="text-2xl">${{details.price }}</p>

        <p>{{ details.description }}</p>
      </div>

      <button
        class="flex justify-center bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-500 text-white rounded-md p-3 w-50"
        @click="addToCart">
        <div>Add to cart</div>
      </button>
    </div>
  </div>
</template>
  
<script>

export default {
  name: 'add-cart',

  data() {
    return {
      details: this.$route.params
      
    }
  },

  methods: {
    addToCart () {
    this.$store.dispatch("addToCart", this.details)
    }
  }, //


}
</script>
<style></style>