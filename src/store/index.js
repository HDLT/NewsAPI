import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    news:[],
    user: JSON.parse(localStorage.getItem('user') || '[]')
  },
  mutations: {
    SET_NEWS_TO_STATE: (state,news) => {
      state.news = news;
    },

    SETAUTH(state,user) {
      state.user = user

      localStorage.setItem('user',JSON.stringify(state.user))
    },
    SETOUT(state,user) {
      state.user = user

      localStorage.setItem('user',JSON.stringify(state.user))
    }
  },
  actions: {
    GET_NEWS({commit}) {
      return axios('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?' + 'country=ru&' + 'apiKey=f278f5ae687f40f0aee3e3992f57694f', {
        method: "GET"
      })
      .then((news)=>{
        commit ('SET_NEWS_TO_STATE', news.data.articles);
        return news;
      })
      .catch((error)=>{
        console.log(error)
        return error;
      })
    },

    AUTH({commit},user) {
      commit('SETAUTH',user)
    },
    LOGOUT({commit},user) {
      commit('SETOUT',user)
    }
  },
  getters: {
    NEWS(state) {
      return state.news;
    },
    USER(state) {
      return state.user;
    }
  },
  modules: {
  }
})
