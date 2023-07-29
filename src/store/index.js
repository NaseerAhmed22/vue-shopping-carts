import Vue from "vue";
import Vuex from "vuex";
import coatImage from "../assets/coat_600.png";
import heelsImage from "../assets/heels_600.png";
import hoodieImage from "../assets/hoodie_600.png";
import jacketImage from "../assets/jacket_600.png";
import shirtImage from "../assets/shirt_600.png";
import sneakersImage from "../assets/sneakers_600.png";

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      cardDetail: [
        {
          id: "coat",
          title: "Coat",
          price: 29,
          photo: coatImage,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh. Varius duis at consectetur lorem donec massa sapien faucibus.",
        },
        {
          id: "heels",
          title: "Heels",
          price: 21,
          photo: heelsImage,
          description: "Pellentesque sit amet porttitor eget dolor morbi. Cras pulvinar mattis nunc sed blandit. Sem fringilla ut morbi tincidunt.",
        },
        {
          id: "hoodie",
          title: "Hoodie",
          price: 24,
          photo: hoodieImage,
          description: "Urna porttitor rhoncus dolor purus non enim praesent elementum. Morbi non arcu risus quis varius quam quisque id diam. Volutpat commodo sed egestas egestas fringilla phasellus faucibus.",
        },
        {
          id: "jacket",
          title: "Jacket",
          price: 28,
          photo: jacketImage,
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh. Varius duis at consectetur lorem donec massa sapien faucibus.",
        },
        {
          id: "shirt",
          title: "Shirt",
          price: 11,
          photo: shirtImage,
          description: "Pellentesque sit amet porttitor eget dolor morbi. Cras pulvinar mattis nunc sed blandit. Sem fringilla ut morbi tincidunt.",
        },
        {
          id: "sneakers",
          title: "Sneakers",
          price: 60,
          photo: sneakersImage,
          description: "Urna porttitor rhoncus dolor purus non enim praesent elementum. Morbi non arcu risus quis varius quam quisque id diam. Volutpat commodo sed egestas egestas fringilla phasellus faucibus.",
        },
      ],

      count: 0,
      cartItems: []
    }
  }, //

  getters: {
    showData(state) {
      return state.cardDetail.filter(todo => todo.id)
    }
  }, //

  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart", payload)
    },

    removeItem: (context, payload) => {
      context.commit("removeItem", payload)
    },
  }, //

  mutations: {
    addToCart(state, payload) {
      let item = payload;
      item = { ...item, quantity: 1 };
      if (state.cartItems.length > 0) {
        let exist = state.cartItems.some(i => i.id === item.id)
        if (exist) {
          let ind = state.cartItems.findIndex(el => el.id === item.id)
          state.cartItems[ind]["quantity"] += 1;
        } else {
          state.cartItems.push(item)
        }
      } else {
        state.cartItems.push(item)

      }
      state.count++
      localStorage.setItem("count", JSON.stringify(state.count));
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeItem(state, payload) {

      if (state.cartItems.length > 0) {
        let exist = state.cartItems.some(i => i.id === payload.id)
        if (exist) {
          let index = state.cartItems.findIndex(el => el.id === payload.id)
          if (state.cartItems[index]["quantity"] !== 0) {
            state.cartItems[index]["quantity"] -= 1
            state.count--

          }
          if (state.cartItems[index]['quantity'] === 0) {
            state.cartItems.splice(index, 1)
            localStorage.removeItem("count", JSON.stringify(state.count));
            localStorage.removeItem("cartItems", JSON.stringify(state.cartItems));
          }
        }

      }


    },


  }, //
})

