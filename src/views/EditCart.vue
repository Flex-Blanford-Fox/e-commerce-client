<template>
  <div>
    <Navbar />
    <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Item</th>
        <th scope="col">Basket</th>
        <th scope="col">Price</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody style="background-color:white">
      <tr v-for="cart in carts" :key="cart.id">
        <td>{{cart.Product.id}}</td>
        <td>{{cart.Product.name}}</td>
        <td>
          <img width="50" :src="cart.Product.image_url" alt="">
        </td>
        <!-- <td>{{product.image_url}}</td> -->
        <td><input v-model="cart.quantity" type="text" class="form-control form-control-lg" /></td>
        <td>Rp. {{numberWithCommas(cart.Product.price)}}</td>
        <td>
          <!-- <div> -->
            <button class="btn btn-outline-primary" @click="updateCart({id:cart.id, ProductId:cart.Product.id, quantity:cart.quantity})">Update</button>
          <!-- </div> -->
        </td>
      </tr>
    </tbody>
  </table>
  <button class="btn btn-danger" @click="$router.push('/')">Back to Home</button>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: 'EditCart',
  components: {
    Navbar
  },
  created () {
    this.$store.dispatch('getAll')
    this.$store.dispatch('getKeranjang')
  },
  methods: {
    numberWithCommas (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    updateCart (payload) {
      this.$store.dispatch('updateCart', payload)
    }
  },
  computed: {
    carts () {
      return this.$store.state.cart
    }
  }
}
</script>

<style>

</style>
