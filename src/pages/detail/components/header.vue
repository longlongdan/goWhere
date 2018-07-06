<template>
	<div>
		<div class="header">
			<img src="https://img1.qunarzz.com/p/tts3/1802/8a/f8e33ac6d5a94402.jpg_r_640x420x90_e08cfd92.jpg" alt="" class="header-img" @click='showAlbus'>
			<div class="bottom">
				<p class="des">产品编号 0101023</p>
				<span class="album"><span class="iconfont">&#xe6eb; </span>1/8</span>
			</div>
		</div>
		<div class="albums" v-show='showAlbum' @click='showAlbus'>
			<swiper :options="swiperOption">
			    <!-- slides -->
			    <swiper-slide><img src="https://img1.qunarzz.com/p/tts3/1802/8a/f8e33ac6d5a94402.jpg_r_640x420x90_e08cfd92.jpg" alt="" class="albumImg"></swiper-slide>
			    <swiper-slide><img src="https://img1.qunarzz.com/p/tts9/1806/68/8e0419c08cc5602.jpg_r_1280x840x90_7b656127.jpg" alt=""  class="albumImg"></swiper-slide>
			    <div class="swiper-pagination"  slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'detaile-header',
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