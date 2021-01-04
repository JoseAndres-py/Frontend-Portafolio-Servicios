import Vue from 'vue'
import Vuex from 'vuex'
import jwtdecode from 'jwt-decode'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    token: null,
    user: null,
  },
  mutations: {
    setToken(state, token){
        state.token = token;
    },
    setUsuario(state, user){
        state.user = user;
    }
  },
  actions: {
    guardarToken({commit}, token){
        commit('setToken', token);
        commit('setUsuario', jwtdecode(token));
        localStorage.setItem('token', token);
    },
    autoLogin({commit}){
        const token = localStorage.getItem('token');
        if(token){
            commit('setToken', token);
            commit('setUsuario', jwtdecode(token));
        }
    },
    salir({commit}){
        commit('setToken', null);
        commit('setUsuario', null);
        localStorage.removeItem('token');
        router.push({name: 'Home'});
    }

  }
})