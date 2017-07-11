<template>
	<div>
		<my-stock v-for="stock in stocks" :stock="stock"></my-stock>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	import Stock from './Stock.vue'
	export default {
		computed: {
			...mapGetters({
				stocks: 'stockPortfolio'
			})
		},
		components: {
			myStock : Stock
		}
	}
</script>