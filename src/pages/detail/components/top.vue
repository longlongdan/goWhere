<template>
	<div class="header">
	</div>
</template>
<script>
	export default {
		name: 'detaile-top'
	}
</script>
<style lang="stylus" scoped>
	.header
		width: 100%
		height: 4.5rem
		position: relative
		color: #fff
		.header-img
			width: 100%
			height: 100%
		.bottom
			width: 100%
			position: absolute
			bottom: 0
			left: 0
			background: linear-gradient(top, rgba(0,0,0,0) , rgba(0,0,0,.8))
			.des
				float: left
				padding: .1rem
			.album
				float:right
				padding: .1rem
</style>