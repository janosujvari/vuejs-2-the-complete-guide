<template>
	<div>
		<h1>Trade or View your Portfolio</h1>
		<h6>You may save and load data</h6>
		<h6>Click on 'End day' to reset</h6>
		<hr>
		<p>your funds: {{funds | currency}}</p>
	</div>
</template>
<script>
	export default{
	    computed:{
            funds(){
                return this.$store.getters.founds
			}
		}
	}
</script>