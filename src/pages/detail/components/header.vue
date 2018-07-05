<template>
	<div class="header">
		<img src="https://img1.qunarzz.com/p/tts3/1802/8a/f8e33ac6d5a94402.jpg_r_640x420x90_e08cfd92.jpg" alt="" class="header-img">
		<div class="bottom">
			<p class="des">产品编号 0101023</p>
			<span class="album"><span class="iconfont">&#xe6eb; </span>1/8</span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'detaile-header'
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