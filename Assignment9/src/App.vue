<template>
    <div class="container">
        <form v-if="!isSubmited">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- <div class="form-group">
                        <label for="FirstName">First Name
                            <input class="form-control" type="text" id="FirstName"
                                   v-model="fullName.firstName">
                        </label>
                        
                    </div>
                    <div class="form-group">
                        <label for="LastName">Last Name
                            <input class="form-control" type="text" id="LastName"
                                   v-model="fullName.lastName">
                        </label>
                        
                    </div> -->

                    <full-name v-model="fullName"></full-name>

                    <div class="form-group">
                        <label for="Email">Email
                            <input class="form-control" type="email" id="Email"
                                   v-model="email">
                        </label>
                        
                    </div>
                    <div class="form-group">
                        <label for="Password">Password
                            <input class="form-control" type="password" id="Password"
                                   v-model="password">
                        </label>
                        
                    </div>
                    <div class="form-group">
                        <label for="yes">Yes
                            <input type="radio" id="yes" value="Yes" v-model="storeData">
                        </label>
                        <label for="no">No
                            <input type="radio" id="no" value="No" v-model="storeData">
                        </label>
                    </div>
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                </div>
            </div>
            <!-- submit button -->
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <button class="btn btn-primary form-control input-block-level"
                        @click.prevent="subitForm">
                    Submit
                </button>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="isSubmited">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <p>Full Name: {{fullName.firstName}} {{fullName.lastName}}</p>
                        <p>Mail: {{email}}</p>
                        <p>Password: {{password}}</p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FullName from './components/FullName.vue';
    export default {
        data() {
            return {
                fullName: {firstName: '',
                           lastName: ''},
                email: '',
                password: '',
                storeData: 'Yes',
                isSubmited: false
            }
        },
        methods:{
            subitForm(){
                this.isSubmited = !this.isSubmited;
            }
        },
        components: {
            fullName : FullName
        }
    }
</script>

<style>
</style>
