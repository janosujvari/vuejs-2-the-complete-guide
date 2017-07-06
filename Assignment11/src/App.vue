<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                {{ someText | reverse-text }}

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <hr width="80%">
                {{ otherText | appendLength}}

                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <hr width="80%">
                {{ reverseTextComputed }}
                <br>
                {{ appendLengthComputed }}


                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                someText : 'Here come some text',
                otherText:  'Exercise 2'
            }
        },
        filters: {
            reverseText(text){
                return text.split('').reverse().join('')
            }
        },
        computed: {
            // reverseTextComputed(){
            //     return this.someText.split('').reverse().join('')
            // },
            appendLengthComputed(){
                return this.otherText + ' (' + this.otherText.length + ')'
            }
        }
    }
</script>

<style>
</style>
