<template>
	<div>
		<div class="form-group">
            <label for="FirstName">First Name
                <input class="form-control" type="text" id="FirstName"
                       v-model.lazy="value.firstName">
            </label>
            
        </div>
        <div class="form-group">
            <label for="LastName">Last Name
                <input class="form-control" type="text" id="LastName"
                       v-model.lazy="value.lastName">
            </label>
            
        </div>
	</div>
</template>

<script>
	/* please note that since value prop is an array, 
	   there is no need for $emit event
	*/
	export default{
		props: ['value']	
	}
</script>

