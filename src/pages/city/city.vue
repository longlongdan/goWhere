<template>
	<div class="city">
		<city-header></city-header>
		<city-search></city-search>
		<city-list></city-list>
	</div>
</template>
<script>
	import cityHeader from './components/header.vue'
	import citySearch from './components/search.vue'
	import cityList from './components/list.vue'
	export default {
		name: 'city',
		components: {cityHeader,citySearch,cityList}
	}
</script>
<style scoped></style>