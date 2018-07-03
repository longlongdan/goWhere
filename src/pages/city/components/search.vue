<template>
	<div>
		<div class="search">
			<input type="text" placeholder="请输入城市名称" v-model='keyword'>
		</div>
		<ul class="search-list" v-show='show'>	
			<li v-for='item of data' @click='handleCityClick(item.name)'>{{item.name}}</li>
			<li v-show='noData'>没有搜索到匹配项</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'citySearch',
		props: {
			cities: Object
		},
		data () {
			return {
				show: false,
				keyword: '',
				data: []
			}
		},
		methods: {
			handleCityClick (cityname) {
				this.$store.commit('changecity', cityname)
				this.$router.push({ path: '/' })

			}
		},
		watch: {
			keyword () {
				if (!this.keyword) {
					this.show = false
					return
				}
				if (this.keyword) {
					let list = []
					this.show = true
					for (var item in this.cities) {
						this.cities[item].forEach((city)=> {
							if (city.name.indexOf(this.keyword) >-1 || city.spell.indexOf(this.keyword) >-1) {
								list.push(city)
							}
						})
					}
					this.data = list
				}
			}
		},
		computed: {
			noData () {
				return !this.data.length
			}
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.search
	height:.64rem
	background-color $bgColor
	padding: .1rem
	box-sizing: border-box
	input
		width:100%
		border-radius: .1rem
		text-align: center
.search-list
	position: absolute
	z-index: 1
	left: 0
	top: 1.58rem
	bottom: 0
	width: 100%
	background-color: #eee
	li
		height: .4rem
		line-height: .4rem
		padding-left: .15rem
		background-color: #fff
		border-bottom: .02rem solid #eee
</style>