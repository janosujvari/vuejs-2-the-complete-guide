<template>
	<div class="col-sm-6 col-md-4">
		<div class="panel panel-info">
			<div class="panel-heading">
				<h3 class="panel-title">
					{{stock.name}}
					<small>(Price: {{stock.price}} | Quantity: {{stock.quantity}})</small>
				</h3>
			</div>
			<div class="panel-body">
				<div class="pull-left">
					<input class="form-control"
						   type="number"
						   placeholder="Quantity"
						   v-model.number="quantity"
						   :class="{danger: notEnoughStock}" />
				</div>
				<div class="pull-right">
					<button class="btn btn-info" @click="sellIt"
							:disabled=" notEnoughStock || quantity <= 0 || !Number.isInteger(quantity)">
						{{notEnoughStock ? 'That\'s too much' : 'Sell' }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
	.danger{
		border: solid yellowgreen 1px;
	}
</style>
<script>
	import {mapActions} from 'vuex'

    export default{
        props: ['stock'],
        data(){
            return{
                quantity: 0
            }
        },
		computed:{
          notEnoughStock(){
              return this.quantity > this.stock.quantity
		  }
		},
		methods: {
			...mapActions(['sellStock']),
            sellIt(){
                const order = {
                    stockId : this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				}
				this.sellStock(order)
				this.quantity = 0
			}
		}
    }
</script>