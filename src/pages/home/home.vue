<template>
<div class="hello">
	<home-header></home-header>
	<home-swiper :list='swiperList'></home-swiper>
	<home-icon :list='iconList'></home-icon>
	<home-recommend :list='recommendList'></home-recommend>
	<home-weekend :list='weekendList'></home-weekend>
</div>
</template>

<script>
import homeHeader from './components/header.vue'
import homeSwiper from './components/swiper.vue'
import homeIcon from './components/icons.vue'
import homeRecommend from './components/recommend.vue'
import homeWeekend from './components/weekend.vue'

import axios from 'axios'
export default {
  name: 'home',
  components: {homeHeader,homeSwiper,homeIcon,homeRecommend,homeWeekend},
  data () {
  	return {
  		swiperList:[],
	  	iconList:[],
	  	recommendList:[],
	  	weekendList:[]
  	}
  },
  methods: {
  	  getHomeInfo (){
  	  	axios.get('/api/index.json').then(this.handleInfo)
  	  },
  	  handleInfo (info){
  	  	info = info.data
  	  	if (info.ret && info.data) {
  	  		this.swiperList = info.data.swiperList
  	  		this.iconList = info.data.iconList
  	  		this.recommendList = info.data.recommendList
  	  		this.weekendList = info.data.weekendList
  	  	}
  	  }

  },
  mounted (){
  	this.getHomeInfo()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
