<template>
	<div class="top">
		<router-link tag='div' class="goBack" to='/' v-show = '!showDetails'><span class="iconfont">&#xe624;</span></router-link>
		<div class="showDetail" v-show = 'showDetails' :style='"opacity:"+opacity'>显示详情</div>
	</div>
</template>
<script>
	export default {
		name: 'detaile-top',
		data () {
			return {
				showDetails: false,
				opacity : 0
			}
		},
		methods: {
			handleScroll () {
				console.log(1)
				if (window.scrollY >= 20 ) {
					this.showDetails = true
					if (window.scrollY <=150) {
						this.opacity = (window.scrollY-20)/130
					}
				}
				else {
					if (this.opacity <= 0.1) {
						this.opacity = 0
						this.showDetails = false
					}
					
				}
			}
		},
		activated () {
			window.addEventListener('scroll',this.handleScroll)
		},
		deactivated () {
			window.removeEventListener('scroll',this.handleScroll)
		}
	}
</script>
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.top
	min-height: 900px
	.goBack
		position: absolute
		left: .16rem
		top: .16rem
		width: .8rem
		height: .8rem
		background-color: #555
		border-radius: 50%
		text-align: center
		.iconfont
			line-height: .8rem
			font-size: .5rem
			color: #fff
	.showDetail
		width: 100%
		text-align: center
		position: fixed
		left: 0
		top: 0
		line-height: .86rem
		background: $bgColor
		color: #fff
</style>