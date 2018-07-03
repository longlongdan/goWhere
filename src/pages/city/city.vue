<template>
	<div class="city">
		<city-header></city-header>
		<city-search :cities='cities'></city-search>
		<city-list :hotcities='hotcities' :cities='cities' :index='index'></city-list>
		<city-ahplabet :cities='cities' @change='changeArea'></city-ahplabet>
	</div>
</template>
<script>
	import axios from 'axios'
	import cityHeader from './components/header.vue'
	import citySearch from './components/search.vue'
	import cityList from './components/list.vue'
	import cityAhplabet from './components/Ahplabet.vue'

	export default {
		name: 'city',
		components: {cityHeader,citySearch,cityList,cityAhplabet},
		data () {
			return{
				hotcities: [],
				cities: {},
				index: 'A'
			}
		},
		methods:{
			getCityInfo () {
				axios.get('/api/city.json').then(this.handleCityInfo)
			},
			handleCityInfo (info) {
				info = info.data
				if (info.ret && info.data) {
					this.hotcities = info.data.hotCities
					this.cities = info.data.cities
				}
			},
			changeArea (index) {
				this.index = index
			}
		},
		mounted () {
			this.getCityInfo()
		}
	}
</script>
<style scoped></style>