<template>
    <section class="body">
        <header class="header">
            <div class="logo-container">
                <a href="../" class="logo">
                    <img src="assets/img/pertamina.png" height="35" alt="JSOFT Admin" />
                </a>
                <div class="visible-xs toggle-sidebar-left" data-toggle-class="sidebar-left-opened" data-target="html" data-fire-event="sidebar-left-opened">
                    <i class="fa fa-bars" aria-label="Toggle sidebar"></i>
                </div>
            </div>
        
            <!-- start: search & user box -->
            <div class="header-right">
        
                <form action="pages-search-results.html" class="search nav-form">
                    <div class="input-group input-search">
                        <input type="text" class="form-control" name="q" id="q" placeholder="Search...">
                        <span class="input-group-btn">
                            <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
                        </span>
                    </div>
                </form>
        
                <span class="separator"></span>
        
                <div id="userbox" class="userbox">
                    <a href="#" data-toggle="dropdown">
                        <figure class="profile-picture">
                            <img src="assets/img/user.png" alt="Joseph Doe" class="img-circle" data-lock-picture="assets/images/!logged-user.jpg" />
                        </figure>
                        <div class="profile-info" data-lock-name="John Doe" data-lock-email="johndoe@JSOFT.com">
                            <span class="name">djaduls</span>
                            <span class="role">administrator</span>
                        </div>
        
                        <i class="fa custom-caret"></i>
                    </a>
        
                    <div class="dropdown-menu">
                        <ul class="list-unstyled">
                            <li class="divider"></li>
                            <li>
                                <a role="menuitem" tabindex="-1" href="pages-user-profile.html"><i class="fa fa-user"></i> My Profile</a>
                            </li>
                            <li>
                                <a role="menuitem" tabindex="-1" href="#" data-lock-screen="true"><i class="fa fa-lock"></i> Lock Screen</a>
                            </li>
                            <li>
                                <a role="menuitem" tabindex="-1" @click.prevent="doLogout"><i class="fa fa-power-off" ></i> Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- end: search & user box -->
        </header>

        <div class="inner-wrapper">
            <!-- start: sidebar -->
            <aside id="sidebar-left" class="sidebar-left">
            
                <div class="sidebar-header">
                    <div class="sidebar-title">
                        Navigation
                    </div>
                    <div class="sidebar-toggle hidden-xs" data-toggle-class="sidebar-left-collapsed" data-target="html" data-fire-event="sidebar-left-toggle">
                        <i class="fa fa-bars" aria-label="Toggle sidebar"></i>
                    </div>
                </div>
            
                <div class="nano">
                    <div class="nano-content">
                        <nav id="menu" class="nav-main" role="navigation">
                            <ul class="nav nav-main">
                                <li class="nav-active">
                                    <a href="/">
                                        <i class="fa fa-home" aria-hidden="true"></i>
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="add-maps.html">
                                        <i class="fas fa-warehouse" aria-hidden="true"></i>
                                        <span>Agent</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="add-maps.html">
                                        <i class="fab fa-product-hunt" aria-hidden="true"></i>
                                        <span>Product</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="add-maps.html">
                                        <i class="fas fa-dolly-flatbed" aria-hidden="true"></i>
                                        <span>Distribusi</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="add-maps.html">
                                        <i class="fas fa-chart-line" aria-hidden="true"></i>
                                        <span>Analisis</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" @click.prevent="doLogout">
                                        <i class="fa fa-sign-out-alt"></i>
                                        <span>Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
            
                </div>
            </aside>
            <!-- end: sidebar -->

            <section role="main" class="content-body">
                <header class="page-header">
                    <h2>Dashboard</h2>
                
                    <div class="right-wrapper pull-right">
                        <ol class="breadcrumbs">
                            <li>
                                <a href="/">
                                    <i class="fa fa-home"></i>
                                </a>
                            </li>
                            <li><a href="/"> <span>Dashboard</span></a></li>
                        </ol>
                
                        <a class="sidebar-right-toggle"><i class="fa fa-chevron-left"></i></a>
                    </div>
                </header>

                <!-- start: page -->
                <div class="row">
                    <router-view></router-view>
                </div>  
            </section>   
        </div>
        
	</section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
    name: 'home',
    computed : {
    },
    created() {
        this.cekLogin()
    },

	methods: {
        doLogout: function(){
            this.$store.dispatch('logout')
            .then(()=>{
                this.$router.push('/login')
            })
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
