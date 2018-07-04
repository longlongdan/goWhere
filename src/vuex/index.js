import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		city: localStorage.city || '北京'
	},
	mutations: {
		changecity (state,cityName) {
			if (this.city == cityName) {
				return 
			}
			state.city = cityName
			localStorage.city = cityName
		}
  	}
})