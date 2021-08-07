import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios.js'
import router from '../router/index.js'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations: {
    GET_PRODUCTS (state, payload) {
      state.products = payload
    },
    ADD_TO_CART (state, object) {
      state.cart.push(object)
    }
  },
  actions: {
    login (context, payload) {
      axios.post('/login', payload)
        .then(data => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Logged in',
            showConfirmButton: false,
            timer: 1000
          })
          localStorage.setItem('access_token', data.data.access_token)
          router.push('/test2')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            text: 'Username/password salah'
          })
          console.log(err)
        })
    },

    register (context, payload) {
      axios.post('/register', payload)
        .then(data => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Account created, please sign in',
            showConfirmButton: false,
            timer: 1000
          })
          router.push('/login')
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            text: 'Registration Failed'
          })
          router.push('/register')
          console.log(err)
        })
    },

    getAll (context) {
      axios.get('/products', { headers: { access_token: localStorage.getItem('access_token') } })
        .then(data => {
          context.commit('GET_PRODUCTS', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    addToCart (context, id) {
      axios.get(`/products/${id}`, { headers: { access_token: localStorage.getItem('access_token') } })
        .then(data => {
          const inCart = (this.state.cart.filter(product => product.id === id)).length
          const limit = data.data.stock
          console.log(limit)
          if (limit > inCart) {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Product added to Basket',
              showConfirmButton: false,
              timer: 1000
            })
            context.commit('ADD_TO_CART', data.data)
          } else {
            Swal.fire({
              icon: 'error',
              text: 'Stock tidak mencukupi'
            })
            console.log('stock unavailable')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
