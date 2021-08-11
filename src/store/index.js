import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios/axios.js'
import router from '../router/index.js'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    totalCart: 0,
    userLiked: []
  },
  mutations: {
    GET_PRODUCTS (state, payload) {
      state.products = payload
      // harus pake many to many relationship?
      state.userLiked.forEach(id => {
        state.products.forEach(product => {
          if (product.id === id) {
            product.liked = true
          }
        })
      })
    },
    GET_KERANJANG (state, object) {
      state.cart = object
      let total = 0
      object.forEach(item => {
        total = total + Number(item.quantity)
      })
      state.totalCart = total
    },

    WISHLIST (state, id) {
      if (state.userLiked.indexOf(id) > -1) {
        state.userLiked.splice(state.userLiked.indexOf(id), 1)
      } else {
        state.userLiked.push(id)
      }
      // state.products.forEach(product => {
      //   if (product.id === id) {
      //     product.liked = !product.liked
      //   }
      // })
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
          router.push('/')
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
    getKeranjang (context) {
      axios.get('/keranjang', { headers: { access_token: localStorage.getItem('access_token') } })
        .then(data => {
          console.log(data.data)
          context.commit('GET_KERANJANG', data.data)
        })
        .catch(err => {
          console.log(err)
        })
    },

    addToCart (context, id) {
      axios.post(`/keranjang/${id}`, {}, { headers: { access_token: localStorage.getItem('access_token') } })
        .then(response => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Product added to Basket',
            showConfirmButton: false,
            timer: 1000
          })
          context.dispatch('getKeranjang')
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            text: 'Stock tidak mencukupi'
          })
        })
      // axios.get(`/products/${id}`, { headers: { access_token: localStorage.getItem('access_token') } })
      //   .then(data => {
      //     const inCart = (this.state.cart.filter(product => product.id === id)).length
      //     const limit = data.data.stock
      //     console.log(limit)
      //     if (limit > inCart) {
      //       Swal.fire({
      //         position: 'top-end',
      //         icon: 'success',
      //         title: 'Product added to Basket',
      //         showConfirmButton: false,
      //         timer: 1000
      //       })
      //       context.commit('ADD_TO_CART', data.data)
      //     } else {
      //       Swal.fire({
      //         icon: 'error',
      //         text: 'Stock tidak mencukupi'
      //       })
      //       console.log('stock unavailable')
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
    },

    wishlist (context, id) {
      context.commit('WISHLIST', id)
    },

    updateCart (context, payload) {
      const { id, ProductId, quantity } = payload
      axios.put(`/keranjang/${id}`, { id, ProductId, quantity }, { headers: { access_token: localStorage.getItem('access_token') } })
        .then(data => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Basket Updated',
            showConfirmButton: false,
            timer: 1000
          })
        })
        .catch(err => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            text: 'Stock tidak mencukupi'
          })
        })
    },

    deleteCart (context, payload) {
      axios.delete('/keranjang', { headers: { access_token: localStorage.getItem('access_token') } })
        .then(data => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Basket Emptied!',
            showConfirmButton: false,
            timer: 1000
          })
          router.push('/')
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  modules: {
  }
})
