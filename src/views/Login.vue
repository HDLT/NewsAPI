<template>
  <div class="row">
    <div class="col s8 offset-s3">
      <form @submit.prevent="submitU">
        <div class="input-field col s12">
          <input id="login" v-model="login" type="text" class="validate">
          <label class="active" for="login">Логин</label>
        </div>
        <div class="input-field col s12">
          <input id="password" v-model="pass" type="password" class="validate">
          <label  class="active" for="password">Пароль</label>
        </div>

        <button class="btn" type="submit"> Войти</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Profile',
    data:() => ({
      login: '',
      pass: ''
    }),

  computed:{
  },
  methods: {
    submitU() {
      if (this.login=="admin" && this.pass=="12345") {
        const user = {
          auth: true,
          name: this.login
        }
        
        this.$store.dispatch('AUTH',user)
        this.$router.push('/profile')
      }
      else
        alert("Имя пользователя или пароль введены не верно")
      
    }
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
</style>
