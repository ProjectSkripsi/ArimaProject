<template>
    <div>
        
    </div>
</template>

<script>
import bread from '@/components/breadcrumbs.vue'
import sideagent from '@/components/sidebar.vue'
import navheader from '@/components/navheader.vue'
export default {
    name: 'invoice',
    components: {
        bread, sideagent, navheader
    },
    data() {
        return {
            title: 'Invoice',
            href: 'Invoice',
            form: false
        }
    },
}
</script>

<style>

</style>
