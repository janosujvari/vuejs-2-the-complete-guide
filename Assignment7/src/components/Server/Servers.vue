<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
        	<server v-for="s in servers" :server="s"></server>
        </ul>
    </div>
</template>

<script>
	import Server from './Server.vue';
	export default{
		data: function () {
			return {
				servers: [
					{id: 1, status: 'Normal'},
					{id: 2, status: 'Critical'},
					{id: 3, status: 'Uknown'},
					{id: 4, status: 'Normal'},
					{id: 5, status: 'Normal'},
				]
			};
		},
		components:{
			server: Server
		},
		// just to prove it works...
		watch:{
		    servers: {
		      handler: function (val, oldVal) {
		        console.log('a thing changed', this.servers);
		      },
		      deep: true
		    }

		}
	};
</script>

<style>

</style>
