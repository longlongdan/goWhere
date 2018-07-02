<template>
<ul class="cityGuid" @touchstart = 'handleTS' @touchmove = 'handleTM' @touchend = 'handleTE'>
	<li class="cityGuide" v-for='(item,key) of cities' @click='handleCilck' :ref='key'>{{key}}</li>
</ul>
</template>
<script>
	export default {
		name: 'cityGuid',
		props: {
			cities: Object
		},
		data () {
			return {
				startY: 0
			}
		},
		methods: {
			handleCilck (e) {
				this.$emit('change',e.target.innerText)
			},
			handleTS () {

			},
			handleTM (e) {
				let height = e.targetTouches[0].clientY - this.startY -74;
				let index = Math.floor(height/20)
				if (index>=0 && index<Object.keys(this.cities).length) {
					let els = document.querySelectorAll('.cityGuide');
					this.$emit('change',els[index].innerText)
				}
			},
			handleTE () {}
		},
		updated () {
			this.startY = this.$refs.A[0].offsetTop
		}
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.cityGuid
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 1.58rem
		right: 0
		bottom: 0
		width: .4rem
		li
			padding: .02rem
			color: $bgColor
</style>