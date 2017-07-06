import Vue from 'vue'
import App from './App.vue'

Vue.filter('to-lowercase', function(value) {
    return value.toLowerCase();
});

Vue.filter('appendLength', function(value) {
    return value + ' (' + value.length + ')'
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    },
    computed: {
        reverseTextComputed(){
            return this.someText.split('').reverse().join('')
        }
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
