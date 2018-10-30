import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        adminUser_Info:null
      },
      mutations: {
        adminUser_Info(state, payload) {
          state.adminUser_Info = payload
        }
      },
      actions:{

      },
      plugins: [
        createPersistedState({
          storage: {
            getItem: key => localStorage.getItem(key),
            // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
            setItem: (key, value) =>
            localStorage.setItem(key, value, { expires: 3, secure: true }),
            removeItem: key => localStorage.removeItem(key),
          },
        }),
      ],
})
export default store