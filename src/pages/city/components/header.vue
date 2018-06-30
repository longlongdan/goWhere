<template>
	<div class="header">
		<router-link to='/'>
			<span class="iconfont">&#xe624;</span>
		</router-link>
		<span>城市选择</span>
	</div>
</template>
<script>
	export default {
		name: 'Cityheader'
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.header
		height: .86rem
		line-height: .86rem
		background-color $bgColor
		text-align: center
		color: #fff
		a
			color: #fff
		.iconfont
			position: absolute
			left:0
			top:0
</style>