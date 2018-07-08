<template>
	<transition name='fade'>
		<slot></slot>
	</transition>
</template>
<script>
	export default {
		name: 'fadeAnimation'
	}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
	.fade-enter,.fade-leave-to
		opacity: 0
	.fade-enter-active,	.fade-leave-active
		transition: all .5s
</style>