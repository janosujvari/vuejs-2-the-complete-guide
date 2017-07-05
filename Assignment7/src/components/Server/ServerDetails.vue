<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server === null"> Server Details are currently not updated</p>
        <p v-else>Server #{{server.id}} status is: {{server.status}}</p>
        <button v-if="server !== null && server.status && server.status !== 'Normal'" @click="setNormal(server)"> Set status to normal!</button>
    </div>

</template>

<script>
	import { eventBus } from './../../main.js';
	export default {
		data() {
			return {
				server: null
			}
		},
		methods:{
			setNormal(server){
				server.status = 'Normal';
				// console.log('server', server);
			}
		},
		created() {
			eventBus.$on('setServer', (server) => {
				this.server = server;
			});
		}
	}
</script>
	
<style>

</style>
