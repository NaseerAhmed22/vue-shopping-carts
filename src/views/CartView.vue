<template>
  <div>
    <h2 class="text-2xl mx-5 mt-3">Shopping Cart</h2>

    <div v-if="cartItems.length > 0" class="flex flex-col lg:flex-row lg:gap-6 container mx-auto">
      <div class="divide-y divide-gray-300 lg:w-2/3">
        <div v-for="items in cartItems" class="py-6 flex gap-4"> 
          <img class="w-32 bg-stone-200 rounded-md" :src="items.photo" />
          <div class="flex justify-around w-full  flex-wrap xl:nowrap lg:nowrap md:nowrap :sm:no-wrap">
            <div class="flex items-center gap-3">
              <div>{{ items.title }}</div>
              <div class="text-sm font-bold">${{ items.price }}</div>
            </div>

            <div class="flex gap-2 text-center items-center ">
             <button class="btn btn-primary rounded-full" @click="removeItem(items)">-</button>
             <span class="cart-quantity font-bold text-md">{{ items.quantity }}</span>
             <button class="btn btn-primary rounded-full" @click="addItem(items)">+</button>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-gray-100 rounded-md p-6 lg:w-1/3 lg:h-[350px] flex flex-col gap-6">
        <h3 class="text-lg">Order summary</h3>

        <div class="divide-y divide-gray-300">
          <div class="py-3 flex justify-between">
            <div>Tax</div>
            <div>0.0$</div>
          </div>

          <div class="py-3 flex justify-between font-bold">
            <div>Order total</div>
            <div>${{ totalPrice }}</div>
          </div>
        </div>
        <button
          class="flex justify-center bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-500 text-white rounded-md p-3 w-full">
          Checkout
        </button>
      </div>
    </div>

    <div v-else class="flex justify-center items-center mt-5">
      <h1 class="font-bold text-2xl">Your Cart Is Empty!</h1>
    </div>
  </div>
</template>
<script>

export default {
  name: 'cart',


  computed: {

    cartItems() {
      return this.$store.state.cartItems;
    },

    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map(el => {
        price += el["quantity"] * el["price"]
      })
      return price
    },
  }, //

  methods: {
  addItem(items) {
  this.$store.dispatch('addToCart', items)
  },
  
  removeItem(items) {
  this.$store.dispatch('removeItem', items)
  },

  }, //



}
</script>
<style></style>