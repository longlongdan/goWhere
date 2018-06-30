<template>
	<div class="search">
		<input type="text" placeholder="请输入城市名称">
	</div>
</template>
<script>
	export default {
		name: 'citySearch'
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
	height:.64rem
	background-color $bgColor
	padding: .1rem
	box-sizing: border-box
	input
		width:100%
		border-radius: .1rem
		text-align: center
</style>