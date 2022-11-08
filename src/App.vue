<template>
    <!-- start main nav -->
    <MenuNav />
    <!-- end main nav -->

    <!-- start wrap -->
    <div id="wrap">
    <!-- start header -->
    <PageHeader />
    <!-- end header --> 
    
    <!-- start content -->
    <div id="content">
        <router-view/>
    </div>
    <!-- end content -->

    <!-- footer -->   
    <PageFooter />
    <!-- end footer -->   
    </div>
<!-- end wrap --> 
</template>

<script>
/*
export default {
    name: "App",
    mounted() {
     console.log("Mounted")   
    }
}
*/

import PageHeader from '@/components/PageHeader.vue';
import PageFooter from '@/components/PageFooter.vue';
import MenuNav from '@/components/MenuNav.vue';

export default {
    name: 'App',
    components: {
        PageHeader,
        PageFooter,
        MenuNav
    },   
    mounted () {
        //document.body.classList.add('contact-page', 'lato');
        //console.log("Mounted Contact");
        //$(document).trigger('vue-loaded');
    },
    unmounted() {
        //document.body.classList.remove('contact-page', 'lato');
    }
}
</script>
