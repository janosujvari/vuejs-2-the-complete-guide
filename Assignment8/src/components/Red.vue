<template>
    <div>
    	<!-- default slot -->
    	<slot></slot>
    	<hr>
    	<slot name="named"></slot>
    	<hr width="80%">
    	<slot name="notdeclared">Not declared one. Red</slot>

    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>