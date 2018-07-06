<template>
	<div>
		<detail-header></detail-header>
		<detail-top></detail-top>
	</div>
</template>
<script>
	import detailHeader from './components/header.vue'
	import detailTop from './components/top.vue'
	export default {
		name: 'detaile',
		components: {
			detailHeader,
			detailTop
		}
	}
</script>
<style></style>