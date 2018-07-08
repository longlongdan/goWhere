<template>
	<div>
		<detail-header :sightName='sightName' :bannerImg='bannerImg' :imgs = 'gallaryImgs'></detail-header>
		<detail-top></detail-top>
		<detail-list :list='list'></detail-list>
	</div>
</template>
<script>
	import detailHeader from './components/header.vue'
	import detailTop from './components/top.vue'
	import detailList from './components/list.vue'
	import axios from 'axios'
	export default {
		name: 'detaile',
		components: {
			detailHeader,
			detailTop,
			detailList
		},
		data () {
			return {
				sightName: '',
				bannerImg: '',
				gallaryImgs: [],
				list: []
			}
		},
		methods: {
			getDetailInfo () {
				axios.get('/api/detail.json',{
					params: { 'id': this.$route.params.id }
				}).then(this.handleDetailInfo)
			},
			handleDetailInfo (data) {
				data = data.data
				if (data.ret && data.data) {
					this.sightName = data.data.sightName
					this.bannerImg = data.data.bannerImg
					this.list = data.data.categoryList
					this.gallaryImgs = data.data.gallaryImgs
				}
			}
		},
		mounted () {
			this.getDetailInfo()
		}
	}
</script>
<style></style>