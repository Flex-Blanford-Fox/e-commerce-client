<template>
  <div class="App">
    <div class="vertical-center">
      <div class="inner-block">
        <div class="vue-tempalte">
            <form @submit.prevent="login">
                <h3>Sign In</h3>

                <div class="form-group">
                    <label>Email address</label>
                    <input v-model="email" type="email" class="form-control form-control-lg" />
                </div>

                <div class="form-group">
                    <label>Password</label>
                    <input v-model="password" type="password" class="form-control form-control-lg" />
                </div>

                <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
                <p class="forgot-password text-right">
                  Dont have an account?
                  <router-link :to="{name: 'Register'}">sign up!</router-link>
                </p>
    <!--
                <p class="forgot-password text-right mt-2 mb-4">
                    <router-link to="/forgot-password">Forgot password ?</router-link>
                </p> -->

                <!-- <div class="social-icons">
                    <ul>
                        <li><a href="#"><i class="fa fa-google"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    </ul>
                </div> -->
            </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
    }
  }
}
</script>
