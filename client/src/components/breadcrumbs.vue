<template>
    <header class="page-header">
        <h2>{{ title }}</h2>
    
        <div class="right-wrapper pull-right">
            <ol class="breadcrumbs">
                <li>
                    <a href="/">
                        <i class="fa fa-home"></i>
                    </a>
                </li>
                <li><a :href="href"> <span>{{ title }}</span></a></li>
            </ol>
    
            <a class="sidebar-right-toggle"><i class="fa fa-chevron-left"></i></a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'bread',
    props: ['title','href']
}
</script>

<style>

</style>
