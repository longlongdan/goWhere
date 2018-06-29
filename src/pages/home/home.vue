<template>
<div class="hello">
	<home-header></home-header>
	<home-swiper></home-swiper>
	<home-icon></home-icon>
	<home-recommend></home-recommend>
	<home-weekend></home-weekend>
</div>
</template>

<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
import homeIcon from './components/icons.vue'
import homeRecommend from './components/recommend.vue'
import homeWeekend from './components/weekend.vue'
export default {
  name: 'home',
  components: {homeHeader,homeSwiper,homeIcon,homeRecommend,homeWeekend}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
