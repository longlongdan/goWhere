<template>
	<div>
		<div class="header">
			<img :src="bannerImg" alt="" class="header-img" @click='showAlbus'>
			<div class="bottom">
				<p class="des">{{sightName}}</p>
				<span class="album"><span class="iconfont">&#xe6eb; </span>{{imgs.length}}</span>
			</div>
		</div>
		<fade-animation>
			<div class="albums" v-show='showAlbum' @click='showAlbus'>
				<swiper :options="swiperOption">
				    <!-- slides -->
				    <swiper-slide v-for='img of imgs'><img :src="img" alt="" class="albumImg"></swiper-slide>
				    <div class="swiper-pagination"  slot="pagination"></div>
				</swiper>
			</div>
		</fade-animation>
	</div>
</template>
<script>
	import fadeAnimation from '../../commons/fade.vue'
	export default {
		name: 'detaile-header',
		components: {fadeAnimation},
		props: {
			sightName: String,
			bannerImg: String,
			imgs: Array
		},
		data () {
			return {
				showAlbum: false,
				swiperOption: {
					pagination: {
						el: '.swiper-pagination',
						type: 'fraction'
					}
		        }
			}
		},
		methods: {
			showAlbus () {
				this.showAlbum = this.showAlbum ? false: true;
			}
		}
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
	.albums 
		z-index: 1
		overflow: hidden
		position:absolute
		left: 0
		right: 0
		top: 0
		bottom: 0
		background-color #000
		color: #fff
		>>> .swiper-container
			margin-top: 50%
			.albumImg
				width: 100%
				
</style>