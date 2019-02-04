<template>
    <section class="body">
        <navheader/>
        <div class="inner-wrapper">
            <sideagent/>
            <section role="main" class="content-body">
                <bread :title="title"></bread>
                <router-view/>
            </section>   
        </div>
        
	</section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import FormAgent from '@/components/Agent.vue'
import bread from '@/components/breadcrumbs.vue'
import sideagent from '@/components/sidebar.vue'
import navheader from '@/components/navheader.vue'
import dashboard from '@/components/dashboard.vue'
import invoice from '@/components/NewInvoice.vue'


// $(document).ready(function () {
//     var dT = $('#datatable-default').DataTable();
//     dT.destroy();
//     setTimeout(function(){
//         $('#datatable-default').DataTable();
//     }, 0);
// });
// $(document).ready(function () {
// var dTb = $('#datatable-editable').DataTable();
//     dTb.destroy();
//     setTimeout(function(){
//         $('#datatable-editable').DataTable();
// 	}, 0);
// });

export default {
    name: 'home',
    data() {
        return {
            title: 'Dashboard'
        }
    },
    components: {
        bread, sideagent, navheader, dashboard, invoice
    },
    
    created() {
        this.cekLogin()
    },

	methods: {
        cekLogin() {
            let token = localStorage.getItem('token')
            if(!token) {
                this.$router.push('/login')
            } 
        },
	},

	

}
</script>

<style>

</style>
