<template>
	<swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for = 'item of list' :key= 'list.id'><img :src="item.imgUrl" alt=""></swiper-slide>
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
					autoplay: {autoplay:true, disableOnInteraction: false}
				}
			}
		},
		props:{
			list: Array
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