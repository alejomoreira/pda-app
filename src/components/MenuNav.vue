<template>
    <div id="nav-wrapper"> 
        <nav id="main-nav">
            <ul class="clearfix">
                <li><router-link to="/">{{ $t('menu.home') }}</router-link></li>
                <li><router-link to="/sobre-pda">{{ $t('menu.sobrepda') }}</router-link></li>
                <li><router-link to="/restauracion">{{ $t('menu.restauracion') }}</router-link></li>
                <li><a href="#" class="sub-nav-toggle">{{ $t('menu.esculturas') }}</a>
                    <ul class="sub-nav hidden">
                        <li> <router-link to="/metamorfosis">Metamorfosis</router-link> </li>
                        <li> <a href="/escultura2">Escultura 2</a> </li>
                        <li> <a href="case-study-1.html">Escultura 1</a> </li>
                        <li> <a href="case-study-1.html">Escultura 1</a> </li>
                        <li> <a href="case-study-1.html">Escultura 1</a> </li>
                    </ul>
                </li>
                <li><router-link to="/mediacion">{{ $t('menu.mediacion') }}</router-link></li>
                <li><router-link to="/contacto">{{ $t('menu.contacto') }}</router-link></li>
            </ul>
        </nav>
    </div>
    <div id="content-overlay"></div>
</template>
