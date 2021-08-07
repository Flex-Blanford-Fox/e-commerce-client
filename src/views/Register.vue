<template>
  <div class="App">
    <div class="vertical-center">
      <div class="inner-block">
        <div class="vue-tempalte">
            <form @submit.prevent="register">
                <h3>Create your account here</h3>

                <!-- <div class="form-group">
                    <label>Full Name</label>
                    <input type="text" class="form-control form-control-lg"/>
                </div> -->

                <div class="form-group">
                    <label>Email address</label>
                    <input v-model="email" type="email" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input v-model="password" type="password" class="form-control form-control-lg" />
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">Sign Up</button>

                <p class="forgot-password text-right">
                  Already registered
                  <router-link :to="{name: 'Login'}">sign in?</router-link>
                </p>
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', { email: this.email, password: this.password })
    }
  }
}
</script>
