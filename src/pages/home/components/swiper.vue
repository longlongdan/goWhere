<template>
	<swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for = 'item of list' :key= 'list.id'><img :src="item.imgUrl" alt=""></swiper-slide>
    <!-- <swiper-slide><img src="https://img1.qunarzz.com/vc/19/70/66/8c54d8f3830e0f09cd3f060809.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="https://img1.qunarzz.com/vc/44/3e/ec/591b009e8d0fdee7183bd696d0.jpg" alt=""></swiper-slide> -->
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
	export default {
		name: "homeSwiper",
		data () {
			return {
				swiperOption: {
					pagination:{el:'.swiper-pagination'},
					loop: true,
					autoplay: {autoplay:true, disableOnInteraction: false,}
				},
				list:[
					{id:'001',imgUrl:'https://img1.qunarzz.com/vc/60/81/e4/5c9d8886fc2739988b097026cc.jpg'},
					{id:'002',imgUrl:'https://img1.qunarzz.com/vc/19/70/66/8c54d8f3830e0f09cd3f060809.jpg'},
					{id:'003',imgUrl:'https://img1.qunarzz.com/vc/44/3e/ec/591b009e8d0fdee7183bd696d0.jpg'}
				]
			}
		}
	}
</script>
<style lang="stylus" scoped>
	img
		width: 100%
	>>> .swiper-pagination-bullet-active {
		background: #fff
	}
</style>