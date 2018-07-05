<template>
	<div class="recommend">
		<div class="title">热销推荐</div>
		<ul class="content">
			<router-link tag='li' to='/detail' class="item" v-for='item of list' :key="item.id">
				<img :src="item.imgUrl" alt="">
				<h3>{{item.title}}</h3>
				<p>{{item.desc}}</p>
				<button>查看详情</button>			
			</router-link>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'recommend',
		props:{
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
			padding: 0.14rem
			border-bottom: .01rem solid #eee
			img
				float: left
				width: 1.3rem
				margin-right: 0.2rem
			h3
				font-weight: 700
				line-height: .4rem
				ellipsis()
			p
				font-size: .2rem
				line-height .56rem
				color: #aaa
				ellipsis()
			button
				font-size: .2rem
				background-color: #fff
				color: $bgColor
</style>