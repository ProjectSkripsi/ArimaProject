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
														<input class="form-control" type="date" v-model="dueDate" id="example-date-input">
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
                                            <table class="table table-bordered table-striped mb-none" >
                                                <thead>
                                                    <tr>
                                                        <th>Product Name</th>
                                                        <th width="15%">Quantity</th>
                                                        <th width="20%">Action</th>
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
                                                        <td scope="row" class="trashIconContainer">
                                                            <i class="far fa-trash-alt" @click="deleteRow(k, row)"></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <br>
                                            <div class="col text-center">
                                                <button class="btn btn-primary fa fa-plus" @click.prevent="add()"></button>
                                                <button type="button" class="mb-xs mt-xs mr-xs btn btn-success" @click="save">Save</button>
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
                                    <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#addInvoice"> New invoice <i class="fas fa-file-invoice"></i></button>
                                </div>
                            </div>
                        </div>
                        <table class="table table-bordered table-striped mb-none" id="datatable-default">
                            <thead>
                                <tr>
                                    <th>No. Invoice</th>
                                    <th>Agent</th>
                                    <th>Issue Date</th>
                                    <th>Product</th>
                                    <th>Jumlah</th>
                                    <th>Total</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr>
                                    <td>Kode Product</td>
                                    <td>Nama Product</td>
                                    <td>Harga</td>
                                    <td>Deskripsi</td>
                                    <td>Actions</td>
                                    <td>Total</td>
                                    <td class="actions">
                                        <a href="#"> <i class="fas fa-eye"></i> </a>
                                        <a href="#"><i class="fas fa-edit"></i> </a>
                                        <a href="#"><i class="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr>
                                <!-- <tr v-for="product in products" :key="product._id" class="gradeA">
                                    <td>{{ product.productCode }}</td>
                                    <td>{{ product.productName }}</td>
                                    <td>{{ toIdr(product.price) }}</td>
                                    <td> {{ product.description }}</td>
                                    <td class="actions">
                                        <a href="" @click.prevent="editProduct(product)" data-toggle="modal" data-target="#editProduct" > <i class="fas fa-pencil-alt"></i></a>
                                        <a href="" @click.prevent="deleteProduct(product._id)" > <i class="fas fa-trash-alt"></i></a>
                                    </td>
                                </tr> -->
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
// import invoice from '@/components/NewInvoice.vue'

const newRowGen = () => ({
    product: '',
    quantity: ''
})

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
            invoices : []
        }
    },
    computed: {
        ...mapState(['agents', 'products']),
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
            
            console.log(JSON.stringify(this.data))
        },
        
        deleteRow(index, row) {
            var idx = this.data.indexOf(row);
            console.log(idx, index);
            if (idx > -1) {
                this.data.splice(idx, 1);
            }
            
        },
    },
                

    watch: {
        
    },

    created() {
        this.$store.dispatch('getAgents')
        this.$store.dispatch('getProducts')
    },
}
</script>

<style>

</style>
                                                            
