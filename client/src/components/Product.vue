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
                                    <!-- <a class="fa fa-times close" data-dismiss="modal"></a> -->
                                    <!-- <a href="#" class="fa fa-caret-down"></a> -->
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
                                                <input type="text" class="form-control" v-model="kodeProduct" id="inputDefault" placeholder="Masukkan Kode Product">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputDefault">Nama Product</label>
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" v-model="nameProduct" id="inputDefault" placeholder="Masukkan Nama Product">
                                            </div>
                                        </div>
                    
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputDefault">Harga</label>
                                            <div class="col-md-6">
                                                <input class="form-control" id="inputDefault1" v-model="price" type="text" placeholder="Masukkan Harga">
                                            </div>
                                        </div>
                    
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputReadOnly">Deskripsi</label>
                                            <div class="col-md-6">
                                                <textarea class="form-control" rows="3" v-model="description" id="textareaAutosize" data-plugin-textarea-autosize placeholder="Masukkan Deskripsi Product"></textarea>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <button type="button" class="mb-xs mt-xs mr-xs btn btn-success" data-dismiss="modal" >Save Product</button>
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
    <!-- <div class="modal fade" id="editAgen" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="row">
                    <div class="col-lg-12">
                        <section class="panel">
                            <header class="panel-heading">
                                <div class="panel-actions">
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <h2 class="panel-title">Update Data Agent</h2>
                            </header>
                            <div class="panel-body">
                                <section role="main" >
                                    <form class="form-horizontal form-bordered">
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputDefault">Nama Agen</label>
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" v-model="datas.name" id="inputDefault" placeholder="Masukkan Nama Agen">
                                            </div>
                                        </div>
                    
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputDefault">No.Telepon</label>
                                            <div class="col-md-6">
                                                <input class="form-control" id="inputDefault1" v-model="datas.notelp" type="text" placeholder="Masukkan No.Telepon">
                                            </div>
                                        </div>
                    
                                        <div class="form-group">
                                            <label class="col-md-3 control-label" for="inputReadOnly">Alamat</label>
                                            <div class="col-md-6">
                                                <textarea class="form-control" rows="3" v-model="datas.address" id="textareaAutosize" data-plugin-textarea-autosize placeholder="Masukkan Alamat Agen"></textarea>
                                            </div>
                                        </div>
                                        <div class="col text-center">
                                            <button type="button" class="mb-xs mt-xs mr-xs btn btn-success" data-dismiss="modal" @click.prevent="saveUpdate">Update Agen</button>
                                        </div>
                                    </form>
                                </section>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
<!-- end modal edit agen -->
    <navheader></navheader>
        <div class="inner-wrapper">
            <sideagent></sideagent>
            <section role="main" class="content-body">
                <bread></bread>
                <section role="main" class="content-body">
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
                                    <!-- <tr v-for="agent in agents" :key="agent._id" class="gradeA">
                                        <td>{{ agent.name }}</td>
                                        <td>{{ agent.notelp }}</td>
                                        <td> {{ agent.address }}</td>
                                        <td class="actions">
                                            <a href="" @click.prevent="toUpdate(agent)" data-toggle="modal" data-target="#editAgen" > <i class="fas fa-pencil-alt"></i></a>
                                            <a href="" @click.prevent="deleteAgent(agent._id)" > <i class="fas fa-trash-alt"></i></a>
                                        </td>
                                    </tr> -->
                                </tbody>
                            </table>
                        </div>
                    </section>
                </section>
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

$(document).ready(function () {
    var dT = $('#datatable-editable').DataTable();
    dT.destroy();
    setTimeout(function(){
        $('#datatable-editable').DataTable();
    }, 1);
});


export default {
    name: 'Product',
    components: {
        bread, sideagent, navheader
    },
    data() {
        return {
            nameProduct: '',
            kodeProduct: '',
            price: '',
            description: ''
        }
    },

    methods: {
        ...mapActions(['addAgent', 'updateAgent']),
        createAgent(){
            let agent = {name: this.name, notelp: this.notelp, address: this.address}
            this.addAgent(agent)
            this.name = ''
            this.notelp = ''
            this.address = ''
        },

        toUpdate(payload){
            this.datas = payload
        },

        saveUpdate(){
            let data = {
                id: this.datas._id,
                name: this.datas.name,
                notelp: this.datas.notelp,
                address: this.datas.address
            }
            this.updateAgent(data)
        },

        deleteAgent(id){
            swal({
                title: "Are you sure!",
                text: "remove this data?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then(willDelete => {
                if (willDelete) {
                    axios({
                        url: baseUrl + `/api/agent/${id}`,
                        method: 'DELETE',
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then(response =>{
                        this.$store.dispatch('getAgents')
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
        }
    },

    computed: {
        ...mapState(['agents'])
    },
    
    created() {
        
        this.$store.dispatch('getAgents')
    },
}




</script>

<style>
      

</style>
        
                           
        
                           
        
                            
        
                           
        
                            
        
        
                            
                                
