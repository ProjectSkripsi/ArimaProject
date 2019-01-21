<template>
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
                            <a href="">
                                <i class="fas fa-warehouse" aria-hidden="true"></i>
                                <router-link to="/agent"><span>Agent</span></router-link>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fab fa-product-hunt" aria-hidden="true"></i>
                                <router-link to="/product"><span>Product</span></router-link>
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
</template>

<script>
export default {
    name: 'sidebar-agent'
}
</script>

<style>

</style>
