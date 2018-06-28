<template>
<div class="hello">
	<home-header></home-header>
	<home-swiper></home-swiper>
	<home-icon></home-icon>
</div>
</template>

<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
import homeIcon from './components/icons.vue'
export default {
  name: 'home',
  components: {homeHeader,homeSwiper,homeIcon}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
