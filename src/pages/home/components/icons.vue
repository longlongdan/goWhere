<template>
	<div class="icons">
		<swiper>
			<swiper-slide v-for = '(page,index) of pages' :key= 'index'>
				<div class='icon' v-for = "item of page" :key = 'item.id'>
					<img :src="item.imgUrl">
					<p>{{item.desc}}</p>
				</div>
			</swiper-slide>
		</swiper>
	</div>
</template>
<script>
	export default {
		name: 'homeIcon',
		props:{
			list:Array
		},
		data (){
			return {
			}
		},
		computed: {
			pages :function(){
				var page = [];//[[],[]]
				this.list.forEach((value,index)=>{
					let i = Math.floor(index/8);
					if (!page[i]) {
						page[i] = []
					}
					page[i].push(value)
				})
				return page
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
				margin: .1rem auto
				width: 1rem
			p
				text-align: center
</style>