<template>
    <!-- start main nav -->
    <MenuNav />
    <!-- end main nav -->

    <!-- start wrap -->
    <div id="wrap">
        <!-- start header -->
        <PageHeader @changeLocale="changeLocale" />
        <!-- end header --> 
        
        <!-- start content -->
        <div id="content">
            <router-view :locale="locale" class="content" />
        </div>
        <!-- end content -->

        <!-- footer -->   
        <PageFooter />
        <!-- end footer -->   
    </div>
<!-- end wrap --> 
</template>

<script>

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
    data() {
        return {
            locale: 'es'
        }
    },
    mounted () {
    },
    unmounted() {
    },
    methods: {
        changeLocale(lang) {
            this.locale = lang;
           console.log("Changed Location 2" + lang)
        },
  
    }
}
</script>
