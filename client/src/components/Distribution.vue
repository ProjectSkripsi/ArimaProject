<template>
    <div>
        <div class="modal fade" id="addInvoice" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="row">
                        <div class="col-lg-12">
                            <section class="panel">
                                <header class="panel-heading">
                                    <div class="panel-actions">
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    </div>
                                    <h2 class="panel-title">New Invoice</h2>
                                </header>
                                <div class="panel-body">
                                    <section role="main" >
                                        <form class="form-horizontal form-bordered text-center">
                                            <div class="form-group">
												<label class="col-md-4 control-label">Tanggal</label>
												<div class="col-md-5">
													<div class="input-group">
														<span class="input-group-addon">
															<i class="fa fa-calendar"></i>
														</span>
														<input class="form-control" type="date" v-model="dueDate" pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}" id="example-date-input">
													</div>
												</div>
											</div>
                                            <div class="form-group">
												<label class="col-md-4 control-label">Agent</label>
												<div class="col-md-5">
													<select class="form-control" v-model="agent">
                                                        <option v-for="agent in agents" :key="agent._id" :value="agent._id">{{ agent.name }}</option>
													</select>
												</div>
											</div>
                                            <table class="table table-bordered table-striped mb-none" id="datatable-editable">
                                                <thead>
                                                    <tr>
                                                        <th>Product Name</th>
                                                        <th width="15%">Quantity</th>
                                                        <th width="25%">Price</th>
                                                        <th width="15%">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(row , k) in data" :key="k">
                                                        <td>
                                                            <select class="form-control" v-model="row.product" >
                                                                <option v-for="product in products" :key="product._id" :value="product._id"> {{ product.productName }} </option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                            <input type="number" min="1" class="form-control" v-model="row.quantity"> 
                                                        </td>
                                                        <td>
                                                            <h5>arul</h5> 
                                                        </td>
                                                        <td scope="row" >
                                                            <i class="far fa-trash-alt" @click="deleteRow(k, row)"></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tfoot>
                                                    <tr>
                                                        <td colspan="2"></td>
                                                        <td><strong>TOTAL: </strong></td>
                                                        <td><strong></strong></td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            <br>
                                            <div class="col text-center">
                                                <button class="btn btn-primary fa fa-plus" @click.prevent="add()"></button> &nbsp; &nbsp;
                                                <button type="button" data-dismiss="modal" class="mb-xs mt-xs mr-xs btn btn-success" @click.prevent="save">Save</button>
                                            </div>
                                        </form>
                                        
                                    </section><br>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <navheader></navheader>
        <div class="inner-wrapper">
            <sideagent></sideagent>
            <section role="main" class="content-body">
                <bread :title="title" :href="href"></bread>
                <div  id="alert"></div>
                <router-view></router-view>
                <section class="panel">
                    <header class="panel-heading">
                        <div class="panel-actions">
                            <a href="#" class="fa fa-caret-down"></a>
                            <a href="#" class="fa fa-times"></a>
                        </div>
                        <h2 class="panel-title">Distribution</h2>
                    </header>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="mb-md">
                                    <button class="btn btn-primary btn-sm" data-toggle="modal" data data-target="#addInvoice"> New invoice <i class="fas fa-file-invoice"></i></button>
                                </div>
                            </div>
                        </div>
                        <table class="table table-bordered table-striped" id="datatable-ajax" data-url="assets/ajax/ajax-datatables-sample.json">
                        <!-- <table class="table table-bordered table-striped mb-none" id="datatable-default"> -->
                            <thead>
                                <tr>
                                    <th>Invoice ID</th>
                                    <th>Issue Date</th>
                                    <th>Invoice Date</th>
                                    <th>Agent</th>
                                    <th>Total Item</th>
                                    <th>Total Transaction</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr v-for="invoice in invoices" :key="invoice._id">
                                    <td>{{ invoice.invoice }}</td>
                                    <td>{{ formatDate(invoice.createdAt) }}</td>
                                    <td>{{ formatDate(invoice.dueDate) }} </td>
                                    <td>{{ invoice.agent.name }}</td>
                                    <td class="text-center">{{ invoice.cart.length }}</td>
                                    <td>Actions</td>
                                    <td class="actions text-center">
                                        <a href="#"><router-link :to="{ name: 'invoice', params: { id: invoice._id }}"> <i class="fas fa-eye"></i></router-link> </a>
                                        <a href="#"><i class="fas fa-edit"></i> </a>
                                        <a href="#" @click.prevent="deleteInvoice(invoice._id)"><i class="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                        
                    </div>
                        
                </section>
            </section>
        </div>
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import bread from '@/components/breadcrumbs.vue'
import sideagent from '@/components/sidebar.vue'
import navheader from '@/components/navheader.vue'
import axios from 'axios'
const baseUrl = `http://localhost:3000`
const newRowGen = () => ({
    product: '',
    quantity: ''
})

function success(msg) {
    $("#alert").append(`
        <div class="alert alert-success" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <p>Successfully, ${msg}</p>
        </div>
    `)
    setTimeout(() => {
        $("#alert").text("")
    }, 2000);
}

export default {
    name: 'Distribution',
    components: {
        bread, sideagent, navheader
    },
    data() {
        return {
            title: 'Distribusi',
            href: 'distribution',
            form: false,
            dueDate: '',
            agent:'',
            data: [{
                product: '',
                quantity: ''
            }],
            agent: '',
            docs : {},
            newRow: newRowGen(),
        }
    },
    computed: {
        ...mapState(['agents', 'products', 'invoices']),
    },
    methods: {
        ...mapActions(['addInvoice']),
        
        add: function() {
            this.data.push({
                product: '',
                quantity: ''
            })
        },

        save(){
            let invoice = {
                dueDate: this.dueDate,
                agent: this.agent,
                cart: this.data
            }
            this.addInvoice(invoice)
            this.dueDate = ''
            this.agent = ''
            this.cart = ''
            success(`Add new Invoice`)
        },
        
        deleteRow(index, row) {
            var idx = this.data.indexOf(row);
            // console.log(idx, index);
            if (idx > -1) {
                this.data.splice(idx, 1);
            }
            
        },

        formatDate(tgl) {
            var monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];
            var year = tgl.substring(0, 4)
            var monthIndex = tgl.substring(5, 6)
            var day = tgl.substring(8, 10)
            return day + '-' + monthNames[monthIndex] + '-' + year;
        },

        deleteInvoice(id){
            swal({
                title: "Are you sure!",
                text: "remove this Invoice?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then(willDelete => {
                if (willDelete) {
                    axios({
                        url: baseUrl + `/api/distribution/${id}`,
                        method: 'DELETE',
                        headers: {
                            token: localStorage.getItem('token')
                        }
                    })
                    .then(response =>{
                        this.$store.dispatch('getAllInvoice')
                        swal("Invoice has been removed!", {
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
                

    watch: {
        
    },

    created() {
        this.$store.dispatch('getAgents')
        this.$store.dispatch('getProducts')
        this.$store.dispatch('getAllInvoice')
    },
}
</script>

<style>

</style>
                                                            
