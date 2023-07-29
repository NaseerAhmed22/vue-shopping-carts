import HomeView from './views/HomeView.vue'
import AddToCart from './views/AddToCart.vue'
import CartView from './views/CartView.vue'

 export default [

    {path:"/",  component:HomeView},  
    {path:'/add-cart', name:'add-cart', component:AddToCart},  
    {path:"/cart", component:CartView},  

  ]

