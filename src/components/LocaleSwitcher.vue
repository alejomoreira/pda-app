<template>
    <!--<div class="clearfix lang-switcher social-list">
        <div v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
            <a href="#">{{locale}}</a>
        </div> 
    </div>-->
    <ul class="lang-list clearfix lang-switcher">
        <li v-for="locale in locales" :key="locale" @click.prevent="switchLocale(locale)">
            <a href="javascript:void(0)">{{locale}}</a>
        </li>
    </ul>
</template>

<script>
import AppConfig from '../app.config'

export default {
    name: 'LocaleSwitcher',
    methods: {
        switchLocale(locale) {
            if (this.$i18n.locale !== locale) {
                this.$i18n.locale = locale;
            }
            this.$emit('changeLocale', locale);
        }
    },
    data() {
        return {
            locales: AppConfig.locales.split(',')
        }
    }
}
</script>
<style scoped>
li {
    text-decoration: underline;
    color: #459CE7;
    cursor: pointer;
}
</style>