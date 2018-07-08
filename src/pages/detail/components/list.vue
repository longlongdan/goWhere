<template>
	<div class="list">
		<div v-for='item of list'>
			<div class="list-item">
				<span class="iconfont">&#xe652;</span>
				{{item.title}}
			</div>
			<div v-show = 'item.children' class="itemChildren">	
			<detaile-list :list='item.children'></detaile-list>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'detaile-list',
		props: ['list']
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
	background-color: $bgColor
	.list-item 
		padding: 0 0 0 0.4rem
		line-height: .8rem
		border-bottom: 1px solid #eee
	.itemChildren
		padding: 0 0 0 .4rem
		text-indent: .4rem	
</style>