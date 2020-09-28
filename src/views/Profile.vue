<template>
  <div class="news">
      <p class="info">Вы вошли как {{this.$store.state.user.name}}</p>
      <br>
      <button class="btn" @click ="logout()">Выйти</button>
  </div>
</template>

<script>
import user from '@/views/Login'
export default {
    name: 'Profile',
    componetnts: {
        user
    },

  computed:{
  },
  methods: {
      logout(){
          if (confirm("Вы точно хотите выйти?"))
          {
              const user = {
                  auth: false,
                  name: ''
              }
              this.$store.dispatch('LOGOUT',user)
              this.$router.push('/')
          }
      }
  },
  mounted(){
  }
}
</script>

<style scoped lang="scss">
    .info {
        margin-bottom: 100px;
    }
</style>
