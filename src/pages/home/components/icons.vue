<template>
	<div class="icons">
		<div class='icon' v-for = "item of list" :key = 'item.id'>
			<img :src="item.imgUrl">
			<p>{{item.content}}</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'homeIcon',
		data (){
			return {
				list: [
				{id:'001',imgUrl:'../../../../static/pic1.png',content:'签证.WIFI'},
				{id:'002',imgUrl:'../../../../static/pic2.png',content:'出境游'},
				{id:'003',imgUrl:'../../../../static/pic3.png',content:'一日游'},
				{id:'004',imgUrl:'../../../../static/pic4.png',content:'美食林'},
				{id:'005',imgUrl:'../../../../static/pic5.png',content:'汽车票'},
				{id:'006',imgUrl:'../../../../static/pic6.png',content:'国内游'},
				{id:'007',imgUrl:'../../../../static/pic7.png',content:'超级巴士'},
				{id:'008',imgUrl:'../../../../static/pic8.png',content:'攻略'}
				]
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.icons
		width: 100%
		height: 0
		padding-bottom: 50%
		.icon
			float:left
			width:25%
			height:0
			padding-bottom:25%
			img
				display: block
				margin: 0 auto
			p
				text-align: center
</style>