<template>
    
    <div id="menu-button">
        <div class="centralizer">
        <div class="cursor">
            <div id="nav-button"> <span class="nav-bar"></span> <span class="nav-bar"></span> <span class="nav-bar"></span> </div>
        </div>
        </div>
    </div>
    <!-- start header -->
    <header id="header" class="clearfix">
        <h1 id="logo"><a href="/"></a></h1>
    
    <LocaleSwitcher @changeLocale="changeLocale" />
    </header>
    <!-- end header --> 

</template>

<script>

import LocaleSwitcher from '@/components/LocaleSwitcher.vue';

export default {
    name: 'PageHeader',
    props: {
        msg: String
    }, 
    components: {
        LocaleSwitcher
    },
    methods: {
        changeLocale(lang) {
            this.$emit("changeLocale", lang)
            console.log("Changed Location 1")
        }
    }
}
</script>
