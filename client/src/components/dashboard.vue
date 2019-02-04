<template>
<div>
    <navheader/>
    <div class="inner-wrapper">
        <sideagent/>
        <section role="main" class="content-body">
            <bread :title="title" :href="href"/>
            <div  id="alert"></div>
            <section role="main" class="content-body">
                <section class="panel">
                    <img src="http://pge.pertamina.com/Images/image_logo_PGE_merah-14.png" class="img-fluid" alt="Responsive image">
                </section>
            </section>
        </section>
    </div>
</div>
</template>

<script>

import bread from '@/components/breadcrumbs.vue'
import sideagent from '@/components/sidebar.vue'
import navheader from '@/components/navheader.vue'
export default {
    name: 'dashboard',
    components: {
        bread, sideagent, navheader
    },
    data() {
        return {
            title: 'Dashboard',
            href: '/',
        }
    },

}
</script>

<style>
.img-fluid {
    width: 100%;
    height: auto;
}
</style>
