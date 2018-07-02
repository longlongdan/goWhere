<template>
	<div class="city">
		<city-header></city-header>
		<city-search></city-search>
		<city-list></city-list>
		<city-ahplabet></city-ahplabet>
	</div>
</template>
<script>
	import cityHeader from './components/header.vue'
	import citySearch from './components/search.vue'
	import cityList from './components/list.vue'
	import cityAhplabet from './components/Ahplabet.vue'
	export default {
		name: 'city',
		components: {cityHeader,citySearch,cityList,cityAhplabet}
	}
</script>
<style scoped></style>