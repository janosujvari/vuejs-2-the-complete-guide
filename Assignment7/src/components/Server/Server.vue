<template>
            <li class="list-group-item" @click="setServer(server)">
                Server #{{ server.id }}, status: {{server.status}}
            </li>
</template>

<script>
	import {eventBus} from './../../main.js';
	export default{
		props: ['server'],
		methods:{
			setServer(server) {
				// console.log('server', server);
				eventBus.$emit('setServer', server);
			}
		}
	};
</script>

<style>

</style>
