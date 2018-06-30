<template>
	<div class="list">
		<div>
			<p class="cityTitle">所在城市</p>
			<ul class="loction citylist">
				<li class="cityItem">绵阳</li>
				<li class="cityItem">绵阳</li>
				<li class="cityItem">绵阳</li>
				<li class="cityItem">绵阳</li>
				<li class="cityItem">绵阳</li>
				<li class="cityItem">绵阳</li>
				<li class="cityItem">绵阳</li>
			</ul>
		</div>
		<div>
			<p class="cityTitle">热门城市</p>
			<ul class="hotCity citylist">
				<li class="cityItem">北京</li>
			</ul>
		</div>
		<div>
			<p class="cityTitle">A</p>
			<ul class="allCity citylist">
				<li class="allcityItem">阿鲁及</li>
				<li class="allcityItem">阿鲁及</li>
				<li class="allcityItem">阿鲁及</li>
				<li class="allcityItem">阿鲁及</li>
			</ul>
		</div>
		<div class="cityGuid">
			<ul>
				<li>A</li>
				<li>B</li>
				<li>C</li>
				<li>D</li>
				<li>E</li>
				<li>F</li>
				<li>G</li>
				<li>H</li>
				<li>I</li>
				<li>J</li>
				<li>K</li>
				<li>L</li>
				<li>M</li>
				<li>N</li>
				<li>O</li>
				<li>P</li>
				<li>Q</li>
				<li>R</li>
				<li>S</li>
				<li>T</li>
				<li>U</li>
				<li>V</li>
				<li>W</li>
				<li>X</li>
				<li>Y</li>
				<li>Z</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'cityList'
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
	.cityTitle
		height: .64rem
		line-height: .44rem
		background-color #eee
		box-sizing: border-box
		padding: .1rem
	.citylist
		padding-right: .3rem
		overflow: hidden
		.cityItem
			height: .5rem
			line-height .5rem
			float: left
			border: 0.02rem solid #888
			border-radius: .1rem
			padding: 0 .3rem
			margin: .1rem
	.allCity
		padding: 0
		.allcityItem
			padding: 0 .3rem 0 .1rem
			width: 100%
			border-bottom: .01rem solid #ccc
			height: .6rem
			line-height .6rem
	.cityGuid
		position: fixed
		right: .1rem
		top: 3rem
		font-size: .2rem
		li
			padding: .02rem
</style>