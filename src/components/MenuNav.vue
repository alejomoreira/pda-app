<template>
    <div id="nav-wrapper">
        <nav id="main-nav">
            <ul class="clearfix">
                <li><router-link to="/">{{ $t('menu.home') }}</router-link></li>
                <li><router-link to="/sobre-pda">{{ $t('menu.sobre-pda') }}</router-link></li>
                <li><router-link to="/restauracion">{{ $t('menu.restauracion') }}</router-link></li>
                <li><a href="#" class="sub-nav-toggle">{{ $t('menu.esculturas') }}</a>
                    <ul class="sub-nav hidden">
                        <li v-for="(item, index) in data" :key="index">
                            <router-link :to="'/' + item.path">{{ item.name }}</router-link>
                        </li>
                    </ul>
                </li>
                <li><router-link to="/juguemos">{{ $t('menu.juguemos') }}</router-link></li>
                <li><router-link to="/contacto">{{ $t('menu.contacto') }}</router-link></li>
            </ul>
        </nav>
    </div>
    <div id="content-overlay"></div>
</template>

<script>
import Sculptures from '@/stores/sculptures';

export default {
    name: 'PageHeader',
    data: () => {
        return {
            data: Sculptures
        };
    },
    props: {
        
    }
}
</script>
