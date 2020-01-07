import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    strict: debug,
    state: {
        query: {}
    },
    mutations: {
        saveQuery(state, queryKV) {
            Vue.set(state.query, queryKV.key, queryKV.value)
        }
    }
})