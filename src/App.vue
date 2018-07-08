<template>
  <div id="app">
  	<keep-alive exclude='detaile'>
	    <router-view/>
	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
