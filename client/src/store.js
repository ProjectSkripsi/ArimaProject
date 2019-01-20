import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert';
const baseUrl = `http://localhost:3000`

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {},
		status: '',
		token: localStorage.getItem('token') || '',
	},
	mutations: {
		auth_request(state){
	    	state.status = 'loading'
		},
		logout(state){
	    	state.status = ''
	    	state.token = ''
		},
		auth_success(state, token, user){
			state.status = 'success'
			state.token = token
			state.user = user
		},
		auth_error(state){
	    	state.status = 'error'
	  	},

	},
	actions: {
		// loginIn({commit}, payload){
		// 	axios({
		// 		url: baseUrl+ `/api/users/signin`,
		// 		method: `POST`,
		// 		data: {
		// 			user: payload.user,
		// 			password: payload.password
		// 		}
		// 	})
		// 	.then(response =>{
		// 		localStorage.setItem('token', response.data.token)
		// 		commit('changeIsLoginAndMakeToken', true)
		// 		window.location = '/'
		// 	})
		// 	.catch(err =>{
		// 		if(err.response.status === 400){
		// 			swal({
		// 				title: "Notice",
		// 				text: "Wrong password",
		// 				icon: "error",
		// 			});
		// 		} else if (err.response.status === 500) {
		// 			swal({
		// 				title: "Notice",
		// 				text: `User Not Registered`,
		// 				icon: "error",
		// 			});
		// 		}
		// 	})
		// },
		
		login({commit}, user){
	        return new Promise((resolve, reject) => {
	            commit('auth_request')
	            axios({
					url: baseUrl+ `/api/users/signin`, 
					method: 'POST',
					data: user
				})
	            .then(resp => {
	                const token = resp.data.token
	                const user = resp.data.user
	                localStorage.setItem('token', token)
	                axios.defaults.headers.common['Authorization'] = token
					commit('auth_success', token, user)
	                resolve(resp)
	            })
	            .catch(err => {
					if(err.response.status === 400){
						commit('auth_error')
						localStorage.removeItem('token')
						reject(err)
						swal({
							title: "Notice",
							text: "Wrong Password",
							icon: "error",
						});
					} else if (err.response.status === 500) {
						swal({
							title: "Notice",
							text: `User Not Registered`,
							icon: "error",
						});
					}
	            })
	        })
	    },

		cekLogin({commit}){
			axios({
				url: baseUrl + `/api/users/getuser`,
				method: 'GET',
				headers: {
					token: localStorage.getItem('token')
				}
			})
			.then(response => {
				// commit('setUser', response.data)
				console.log(`cek data`,response.data);
				// commit('changeIsLoginAndMakeToken', true)
			})
			.catch(err =>{
				commit('setUser', {})
				
			})
		},

		logout({commit}){
			return new Promise((resolve, reject) => {
				commit('logout')
				localStorage.removeItem('token')
				delete axios.defaults.headers.common['Authorization']
				resolve()
		  	})
		}
	},
	getters : {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
	}
})
