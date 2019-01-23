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
		agents: [],
		msg: '',
		products: []
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
		agentsList(state, payload){
			state.agents = payload
		},
		auth_msg(state, payload){
			state.msg = ``
		},
		listProduct(state, payload){
			state.products = payload
		}


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
					console.log(user, token);
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
		},

		getAgents({commit}, payload){
			axios({
				url: baseUrl + `/api/agent`,
				method: 'GET',
				headers: {
					token: localStorage.getItem('token')
				}
			})
			.then(response =>{
				// console.log(`ini agen`, response);
				commit('agentsList', response.data)
			})
			.catch(err =>{
				console.log(`data no found`);
			})
		},

		addAgent({commit, dispatch}, payload){
			axios({
				url: baseUrl+ `/api/agent/add`,
				method: 'POST',
				data: {
					name: payload.name,
					notelp: payload.notelp,
					address: payload.address
				},
				headers: {
					token: localStorage.getItem('token')
				}
			})
			.then(response =>{
				dispatch('getAgents')
			})
			.catch(err =>{
				console.log(err);
			})
		},

		updateAgent({commit, dispatch}, payload){
			axios({
				url: baseUrl+ `/api/agent/${payload.id}`,
				method: `PUT`,
				data: {
					name: payload.name,
					notelp: payload.notelp,
					address: payload.address
				}
			})
			.then(response =>{
				dispatch('getAgents')
			})
			.catch(err =>{
				console.log(err);
			})
		},

		updateProduct({commit, dispatch}, payload){
			axios({
				url: baseUrl+ `/api/product/${payload.id}`,
				method: `PUT`,
				data: {
					productCode: payload.productCode,
					productName: payload.productName,
					price: payload.price,
					description: payload.description
				}
			})
			.then(response =>{
				dispatch('getProducts')
			})
			.catch(err =>{
				console.log(err);
			})
		},

		getProducts({commit}, payload){
			axios({
				url: baseUrl + `/api/product`,
				method: 'GET',
				headers: {
					token: localStorage.getItem('token')
				}
			})
			.then(response =>{
				// console.log(`iniii`, res);
				commit('listProduct', response.data)
			})
			.catch(err =>{
				console.log(err);
			})
		},

		// addProduct({commit, dispatch}, payload){
		// 	axios({
		// 		url: baseUrl + `/api/product`,
		// 		method: `POST`,
		// 		data: {
		// 			productCode: payload.productCode,
		// 			productName: payload.productName,
		// 			price: payload.price,
		// 			description: payload.description
		// 		},
		// 		headers: {
		// 			token: localStorage.getItem('token')
		// 		}
		// 	})
		// 	.then(response =>{
		// 		dispatch('getProducts')
		// 	})
		// 	.catch(err =>{
		// 		if(err.response.status === 400){
		// 			swal({
		// 				title: "Notice",
		// 				text: "Product already registered, try again!",
		// 				icon: "error",
		// 			});
		// 		}
		// 	})
		// }

	},
	getters : {
		isLoggedIn: state => !!state.token,
		authStatus: state => state.status,
	}
})
