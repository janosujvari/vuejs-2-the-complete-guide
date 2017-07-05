<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="setSelectedComponent('appBlue')">Load Blue Template</button>
                <button class="btn btn-success" @click="setSelectedComponent('appGreen')">Load Green Template</button>
                <button class="btn btn-danger"  @click="setSelectedComponent('app-red')">Load Red Template</button>
                <hr>
                <keep-alive>
                    <component :is="selectedComponent">
                        <!-- None selected! -->
                    </component>
                </keep-alive>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data(){
            return {
                selectedComponent: 'appBlue'
            }
        },
        methods:{
            setSelectedComponent(comp){
                this.selectedComponent = comp;
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        }
    }
</script>

<style>
</style>
