<template>
<div>
        <!-- start: page modal register product -->
    <div class="modal fade" id="addProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="row">
                    <div class="col-lg-12">
                        <section class="panel">
                            <header class="panel-heading">
                                <div class="panel-actions">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <h2 class="panel-title">Add New Product</h2>
                            </header>
                            <div class="panel-body">
                                <section role="main" >
                                    <form class="form-horizontal form-bordered">
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" >Kode Product</label>
                                            <div class="col-md-6">
                                                <input type="number" class="form-control" v-model="productCode" id="inputDefault" placeholder="Masukkan Kode Product">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputDefault">Nama Product</label>
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" v-model="productName" id="inputDefault" placeholder="Masukkan Nama Product">
                                            </div>
                                        </div>
                    
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputDefault">Harga</label>
                                            <div class="col-md-6">
                                                <input class="form-control" id="inputDefault1" v-model="price" type="number" placeholder="Masukkan Harga">
                                            </div>
                                        </div>
                    
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputReadOnly">Deskripsi</label>
                                            <div class="col-md-6">
                                                <textarea class="form-control" rows="3" v-model="description" id="textareaAutosize" data-plugin-textarea-autosize placeholder="Masukkan Deskripsi Product"></textarea>
                                            </div>
                                        </div>
                                        
                                        <div class="col text-center">
                                            <button type="button" class="mb-xs mt-xs mr-xs btn btn-success" data-dismiss="modal" @click.prevent="createProduct">Save Product</button>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- end: page modal register -->

    <!-- Modal Edit Agen -->
    <div class="modal fade" id="editProduct" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="row">
                    <div class="col-lg-12">
                        <section class="panel">
                            <header class="panel-heading">
                                <div class="panel-actions">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <h2 class="panel-title">Update Data Product</h2>
                            </header>
                            <div class="panel-body">
                                <section role="main" >
                                    <form class="form-horizontal form-bordered">
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputDefault">Kode Product</label>
                                            <div class="col-md-6">
                                                <input type="number" class="form-control"  v-model="upProduct.productCode">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputDefault">Nama Product</label>
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" id="inputDefault" v-model="upProduct.productName">
                                            </div>
                                        </div>
                    
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputDefault">Harga</label>
                                            <div class="col-md-6">
                                                <input type="number" class="form-control"  v-model="upProduct.price">
                                            </div>
                                        </div>
                    
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputReadOnly">Deskripsi</label>
                                            <div class="col-md-6">
                                                <textarea class="form-control" rows="3" id="textareaAutosize" data-plugin-textarea-autosize v-model="upProduct.description"></textarea>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <button type="button" class="mb-xs mt-xs mr-xs btn btn-success" data-dismiss="modal" @click.prevent="saveUpdate">Update Product</button>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!-- end modal edit agen -->
    <navheader></navheader>
        <div class="inner-wrapper">
            <sideagent></sideagent>
            <section role="main" class="content-body">
                <bread :title="title" :href="href"></bread>
                    <div  id="alert"></div>
                <!-- <section role="main" class="content-body"> -->
                    <section class="panel">
                        <header class="panel-heading">
                            <div class="panel-actions">
                                <a href="#" class="fa fa-caret-down"></a>
                                <a href="#" class="fa fa-times"></a>
                            </div>
                            <h2 class="panel-title">Data Product</h2>
                        </header>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-md">
                                        <button data-toggle="modal" data-target="#addProduct" class="btn btn-primary btn-sm">Add <i class="fa fa-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                            <table class="table table-bordered table-striped mb-none" id="datatable-editable">
                                <thead>
                                    <tr>
                                        <th>Kode Product</th>
                                        <th>Nama Product</th>
                                        <th>Harga</th>
                                        <th>Deskripsi</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr v-for="product in products" :key="product._id" class="gradeA">
                                        <td>{{ product.productCode }}</td>
                                        <td>{{ product.productName }}</td>
                                        <td>{{ toIdr(product.price) }}</td>
                                        <td> {{ product.description }}</td>
                                        <td class="actions">
                                            <a href="" @click.prevent="editProduct(product)" data-toggle="modal" data-target="#editProduct" > <i class="fas fa-pencil-alt"></i></a>
                                            <a href="" @click.prevent="deleteProduct(product._id)" > <i class="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                <!-- </section> -->
            </section>
        </div>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import axios from 'axios'
import swal from 'sweetalert'
import bread from '@/components/breadcrumbs.vue'
import sideagent from '@/components/sidebar.vue'
import navheader from '@/components/navheader.vue'

const baseUrl = `http://localhost:3000`
function success(msg) {
    $("#alert").append(`
        <div class="alert alert-success" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <p><h4>Successfully, ${msg} 👍🏻 </h4></p>
        </div>
    `)
    setTimeout(() => {
        $("#alert").text("")
    }, 2000);
}
function error(msg) {
    $("#alert").append(`
        <div class="alert alert-danger" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <p><h4>Sorry! ${msg} 👎🏻</h4></p>
        </div>
    `)
    setTimeout(() => {
        $("#alert").text("")
    }, 2000);
}
// $(document).ready(function () {
//     var dT = $('#datatable-editable').DataTable();
//     dT.destroy();
//     setTimeout(function(){
//         $('#datatable-editable').DataTable();
// 	}, 0);
	
//     var dTb = $('#datatable-default').DataTable();
//     dTb.destroy();
//     setTimeout(function(){
//         $('#datatable-default').DataTable();
//     }, 0);
// });


export default {
    name: 'Product',
    components: {
        bread, sideagent, navheader
    },
    data() {
        return {
            title: 'Product',
            href: 'product',
            productCode: '',
            productName: '',
            price: '',
            description: '',
            upProduct: {}
        }
    },

    methods: {
        ...mapActions(['addProduct', 'updateProduct']),
        createProduct(){
            if(this.productCode === '' || this.productName === '' || this.price === '' || this.description === ''){
                error(`Please input inccorect`)
            } else {
                axios({
                    url: baseUrl + `/api/product`,
                    method: `POST`,
                    data: {
                        productCode: this.productCode,
                        productName: this.productName,
                        price: this.price,
                        description: this.description
                    },
                    headers: {
                        token: localStorage.getItem('token')
                    }
                })
                .then(response =>{
                    success(`added ${this.productName} `  )
                    this.$store.dispatch('getProducts')
                    this.productCode = ''
                    this.productName = ''
                    this.price = '',
                    this.description = ''
                })
                .catch(err =>{
                    if(err.response.status === 400){
                        swal({
                            title: "Notice",
                            text: "Product already registered, try again!",
                            icon: "error",
                        });
                    }
                })
            }
		},

        editProduct(payload){
            this.upProduct = payload
        },

        saveUpdate(){
            let data = {
                id: this.upProduct._id,
                productCode: this.upProduct.productCode,
                productName: this.upProduct.productName,
                price: this.upProduct.price,
                description: this.upProduct.description
            }
            this.updateProduct(data)
            success(`update ${this.productName}`)
        },

        deleteProduct(id){
            swal({
                title: "Are you sure!",
                text: "remove this product?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then(willDelete => {
                if (willDelete) {
                    axios({
                        url: baseUrl + `/api/product/${id}`,
                        method: 'DELETE',
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then(response =>{
                        this.$store.dispatch('getProducts')
                        swal("Data has been removed!", {
                            icon: "success",
                        })
                    })
                    .catch(err =>{
                        console.log(err);
                    })
                } else {
                    swal(`Data is safe!`);
                }
            })
            .catch(err =>{
                console.log(err);
            })   
        },

        toIdr(nominal){
            let rupiah = ''
            let angkarev = nominal.toString().split('').reverse().join('');
            for(let i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
            return 'Rp. '+rupiah.split('',rupiah.length-1).reverse().join('');
        }

        
    },

    computed: {
        ...mapState(['products'])
    },
    
    created() {
        this.$store.dispatch('getProducts')
    },
}





</script>

<style>
      

</style>
        
                           
        
                           
        
                            
        
                           
        
                            
        
        
                            
                                
