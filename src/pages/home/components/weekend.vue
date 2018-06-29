<template>
	<div class="recommend">
		<div class="title">周末去哪</div>
		<ul class="content">
			<li class="item" v-for='item of list' :key="item.id">
				<img :src="item.imgUrl" alt="">
				<h3>{{item.title}}</h3>
				<p>{{item.desc}}</p>			
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'weekend',
		props: {
			list:Array
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
	.title
		line-height: .8rem
		background-color: #eee
		text-indent: .2rem
	.content
		.item
			width: 100%
			box-sizing: border-box
			border-bottom: .01rem solid #eee
			img
				width: 100%
				height: 2rem
				margin-right: 0.2rem
			h3
				text-align: center
				font-weight: 700
				line-height: .4rem
				ellipsis()
			p
				font-size: .2rem
				line-height .56rem
				color: #aaa
				ellipsis()
</style>