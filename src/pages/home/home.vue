<template>
<div class="hello">
	<home-header></home-header>
	<home-swiper></home-swiper>
</div>
</template>

<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
export default {
  name: 'home',
  components: {homeHeader,homeSwiper}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
