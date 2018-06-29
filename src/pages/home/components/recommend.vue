<template>
	<div class="recommend">
		<div class="title">热销推荐</div>
		<ul class="content">
			<li class="item" v-for='item of recommends' :key="item.id">
				<img :src="item.imgUrl" alt="">
				<h3>{{item.title}}</h3>
				<p>{{item.content}}</p>
				<button>查看详情</button>			
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'recommend',
		data () {
			return {
				recommends: [
				{id:'0001',imgUrl:'https://imgs.qunarzz.com/p/tts7/1706/30/da1269a660646302.jpg_180x120_5346d5ed.jpg',title: '大连圣亚海洋馆',content:'浪漫大连首战，浪漫的大连海洋博物馆'},{id:'0002',imgUrl:'https://imgs.qunarzz.com/p/tts2/1803/a8/0d574009d3bf8a02.jpg_180x120_0bb829ed.jpg',title: '大连圣亚海洋馆',content:'浪漫大连首战，浪漫的大连海洋博物馆'},{id:'0003',imgUrl:'https://imgs.qunarzz.com/p/tts2/1604/f3/7a7eb635181a95f7.jpg_180x120_9e8b3787.jpg',title: '大连圣亚海洋馆',content:'浪漫大连首战，浪漫的大连海洋博物馆'},{id:'0004',imgUrl:'https://imgs.qunarzz.com/p/tts1/1804/36/f63b434d475e4d02.jpg_180x120_4581e1f3.jpg',title: '大连圣亚海洋馆',content:'浪漫大连首战，浪漫的大连海洋博物馆'}
				]
			}
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
				width: 2rem
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