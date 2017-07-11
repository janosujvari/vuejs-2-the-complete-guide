<template>
	<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
    	<router-link to="/" class="navbar-brand">Stock Trader APP</router-link>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
      	<router-link to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
      	<router-link to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{funds | currency}}</strong>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" @click="endDay">End of Day!</a></li>
        <li class="dropdown" :class="{open : isDropOpen}">
          <a href="#" class="dropdown-toggle"
             data-toggle="dropdown" role="button"
             aria-haspopup="true" aria-expanded="false"
             @click="openDrop" >Save Or Load <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li @click="saveData"><a href="#">Save</a></li>
            <li @click="loadData"><a href="#">Load</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>
<script>
    import {mapActions} from 'vuex'
    export default{
        data(){
          return {
              isDropOpen: false
          }
        },
        computed:{
            funds(){
                return this.$store.getters.founds
            }
        },
        methods: {
            ...mapActions({
                randomizeStocks: 'randomizeStocks',
                loadHttpData: 'loadData'
            }),
            endDay(){
                this.randomizeStocks();
            },
            openDrop(){
                this.isDropOpen = !this.isDropOpen;
            },
            saveData(){
                const data = {
                    funds: this.$store.getters.founds,
                    stockPortfolio: this.$store.getters.stockPortfolio,
                    stocks: this.$store.getters.stocks
                }
                this.$http.put('dailyData.json', data);
                this.openDrop();
            },
            loadData(){
              this.loadHttpData();
              this.openDrop();
            }
        }
    }
</script>