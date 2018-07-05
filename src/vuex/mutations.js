export default {
		changecity (state,cityName) {
			if (this.city == cityName) {
				return 
			}
			state.city = cityName
			localStorage.city = cityName
		}
  	
}