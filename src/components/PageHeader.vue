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
        <h1 id="logo"><a href="/">{{ $t('home.welcome', {company : "Apple"}) }}</a></h1>
    
    <!-- <ul class="social-list clearfix">
        <li> <a href="#"><i class="fa fa-behance"></i></a> </li>
        <li> <a href="#"><i class="fa fa-dribbble"></i></a> </li>
        <li> <a href="#"><i class="fa fa-xing"></i></a> </li>
        <LocaleSwitcher />

    </ul>-->
    <LocaleSwitcher />
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
    }
}
</script>
