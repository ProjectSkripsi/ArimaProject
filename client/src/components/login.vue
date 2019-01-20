<template>
    <div >
        <section class="body-sign">
			<div class="center-sign">
				<a href="/" class="logo pull-left">
					<img src="assets/img/pertamina.png" height="54" alt="Porto Admin" />
				</a>

				<div class="panel panel-sign">
					<div class="panel-title-sign mt-xl text-right">
						<h2 class="title text-uppercase text-bold m-none"><i class="fa fa-user mr-xs"></i> Sign In</h2>
					</div>
					<div class="panel-body">
						<form action="index.html" method="post">
							<div class="form-group mb-lg">
								<label>Username</label>
								<div class="input-group input-group-icon">
									<input name="username" type="text" class="form-control input-lg" v-model="user" />
									<span class="input-group-addon">
										<span class="icon icon-lg">
											<i class="fa fa-user"></i>
										</span>
									</span>
								</div>
							</div>

							<div class="form-group mb-lg">
								<div class="clearfix">
									<label class="pull-left">Password</label>
									<a class="pull-right"><router-link to="/recover-password">Lost Password?</router-link></a>
								</div>
								<div class="input-group input-group-icon">
									<input name="pwd" type="password" class="form-control input-lg" v-model="password" />
									<span class="input-group-addon">
										<span class="icon icon-lg">
											<i class="fa fa-lock"></i>
										</span>
									</span>
								</div>
							</div>

							<div class="row">
								<div class="col-sm-8">
									<div class="checkbox-custom checkbox-default">
										<input id="RememberMe" name="rememberme" type="checkbox"/>
										<label for="RememberMe">Remember Me</label>
									</div>
								</div>
								<div class="col-sm-4 text-right">
									<button type="submit" class="btn btn-primary hidden-xs" @click.prevent="doLogin" >Sign In</button>
									<button type="submit" class="btn btn-primary btn-block btn-lg visible-xs mt-lg" @click.prevent="doLogin">Sign In</button>
								</div>
							</div>

							<span class="mt-lg mb-lg line-thru text-center text-uppercase">
								<span>or</span>
							</span>

							<div class="mb-xs text-center">
								<a class="btn btn-facebook mb-md ml-xs mr-xs">Connect with  <i class="fab fa-facebook-square"></i></a>
								<a class="btn btn-twitter mb-md ml-xs mr-xs">Connect with  <i class="fab fa-google"></i></a>
							</div>
							<!-- <router-link to="/signup" >sign-up</router-link> -->
							<p class="text-center">Don't have an account yet? <router-link to="/signup">Sign Up! </router-link> </p>  

						</form>
					</div>
				</div>
				<p class="text-center text-muted mt-md mb-md">&copy; Copyright 2019. All rights reserved. Template by <a href="https://djaduls-e66e9.firebaseapp.com/" target="_blank">djaduls</a>.</p>
			</div>
		</section>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
	name: 'login',
	data() {
		return {
			user: '',
			password: ''
		}
	},
	computed: {
		isLoggedIn : function(){ 
			return this.$store.getters.isLoggedIn
		}
	},
	created() {
		this.cekLogin()
	},
	methods: {
		doLogin(){
			let user = this.user 
			let password = this.password
			this.$store.dispatch('login', { user, password })
			.then(() => this.$router.push('/'))
			.catch(err => console.log(err))
		},
		cekLogin() {
            let token = localStorage.getItem('token')
            if(token) {
                this.$router.push('/')
            } else {
				this.$router.push('/login')
			}
        },
	},

	
}


</script>

<style>

</style>

