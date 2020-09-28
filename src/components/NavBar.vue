<template>
    <nav class="blue accent-4">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Название</router-link>
      <ul class="right hide-on-med-and-down">
        <router-link
            tag="li"
            to="/"
            exact
            active-class="active"
        >
            <a href="#">Главная</a>
        </router-link>
        <router-link
            tag="li"
            to="/News"
            active-class="active"
        >
            <a href="#">Новости</a>
        </router-link>
        <router-link 
          tag="li"
          to="/profile"
          active-class="active"
        >
            <a href="#">Профиль</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters} from 'vuex'
export default {
    components: {
    },
    computed: {
      ...mapGetters([
        'USER'
      ])
    }
}
</script>

<style lang="scss" scoped>
</style>