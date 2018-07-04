<template>
	<div class="list" ref="wrapper">
			<div >
				<div>
					<p class="cityTitle">所在城市</p>
					<ul class="loction citylist">
						<li class="cityItem">{{cityName}}</li>
					</ul>
				</div>
				<div>
					<p class="cityTitle">热门城市</p>
					<ul class="hotCity citylist">
						<li class="cityItem" v-for='item of hotcities' :key='item.id' @click='handleCityClick(item.name)'>{{item.name}}</li>
					</ul>
				</div>
				<div v-for='(city,key) of cities' :key='key' :ref='key'>
					<p class="cityTitle">{{key}}</p>
					<ul class="allCity citylist">
						<li class="allcityItem" v-for='item of city' :key='item.id' @click='handleCityClick(item.name)'>{{item.name}}</li>
					</ul>
				</div>
			</div>
	</div>
</template>
<script>
	import BScroll from 'better-scroll'
	import {mapState} from 'vuex'
	export default {
		name: 'cityList',
		props: {
			hotcities: Array,
			cities: Object,
			index: String
		},
		methods: {
			handleCityClick (cityname) {
				this.$store.commit('changecity', cityname)
				this.$router.push({ path: '/' })

			}
		},
		mounted () {
			this.scroll = new BScroll(this.$refs.wrapper,{
				click: true
			})
		},
		watch: {
			index () {
				this.scroll.scrollToElement(this.$refs[this.index][0])
			}
		},
		computed: {
			...mapState({'cityName':'city'})
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
	overflow: hidden
	position: absolute
	left: 0
	top: 1.5rem
	right: 0
	bottom: 0rem
	.cityTitle
		height: .64rem
		line-height: .44rem
		background-color #eee
		box-sizing: border-box
		padding: .1rem
	.citylist
		padding-right: .3rem
		overflow: hidden
		.cityItem
			height: .5rem
			line-height .5rem
			float: left
			border: 0.02rem solid #888
			border-radius: .1rem
			padding: 0 .3rem
			margin: .1rem
	.allCity
		padding: 0
		.allcityItem
			padding: 0 .3rem 0 .1rem
			width: 100%
			border-bottom: .01rem solid #ccc
			height: .6rem
			line-height .6rem
</style>