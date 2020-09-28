<template>
  <div class="news">
    <div class="somenews" v-for="news in NEWS" v-bind:key="news.description">
        <div class="news">
            <h4>{{news.title}}</h4>
            <a>{{news.description}}</a>
            <br>
            <a :href=news.url class="more">Подробнее</a>
        </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'News',
    componetnts: {
    },

  computed:{
      ...mapGetters([
          'NEWS'
      ]),
  },
  methods: {
    ...mapActions([
      'GET_NEWS'
    ])
  },
  mounted(){
    JSON.stringify(this.GET_NEWS())
  }
}
</script>

<style scoped lang="scss">
    .somenews {
        flex-basis:25%;
        box-shadow: 0 0 8px 0;
        padding: 10px;
        margin-bottom: 10px;
        margin-top: 10px;
    }
    .news{
        font-size: 15pt;
    }
    .more {
        color: red;
    }
</style>
