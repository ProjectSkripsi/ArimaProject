<template>
    <div>
        <navheader></navheader>
        <div class="inner-wrapper">
            <sideagent></sideagent>
            <section role="main" class="content-body">
                <bread :title="title" :href="href"></bread>
                <div  id="alert"></div>

            </section>
        </div>
    </div>
</template>

<script>
import bread from '@/components/breadcrumbs.vue'
import sideagent from '@/components/sidebar.vue'
import navheader from '@/components/navheader.vue'
export default {
    name: 'Distribution',
    components: {
        bread, sideagent, navheader
    },
    data() {
        return {
            title: 'Distribusi',
            href: 'distribution'
        }
    },
}
</script>

<style>

</style>
