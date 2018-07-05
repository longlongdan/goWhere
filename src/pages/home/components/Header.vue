<template>
	<div class="header">
	  	<div class='header-left'>
			<span class="iconfont">&#xe624;</span>
	  	</div>
	  	<input type="text" class='header-input' placeholder="请输入城市/景点/游玩主题">
	    </input>
	    <span class="iconfont sousuo">&#xe653;</span>
	    <router-link to='/city' class='citychoose'>
		    <div class='header-right'>
		      {{this.city}}<span class="iconfont">&#xe64a;</span>
			</div>
		</router-link>
	</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'homeHeader',
  computed: {
  	...mapState(['city'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header 
	line-height: .86rem
	display: flex
	background: $bgColor
	color: #fff
	.header-left
		width: .64rem
		float: left
		text-align: center
	.header-input
		flex: 1
		background-color #fff
		margin: .12rem
		border-radius: .3rem
		text-indent: .3rem
		position: relative
	.sousuo
		position: absolute
		left: .8rem
		// right: .2rem
		top: .05rem
		color: $bgColor
	.citychoose
		color: #fff
	.header-right
		// width: 1.24rem
		margin-right: .2rem
		float: right
		text-align: center
</style>
