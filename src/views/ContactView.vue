<template>

    <div class="full-width intro">
      <div class="full-height not-completely-full">
        <div class="fixed">
            <div id="map" class="parallax parallax-banner"></div>
            <div class="fondo igual-relacion"></div>
            <div class="fixed"><figure class="background-image-map"></figure></div>
        </div>
        
        <div class="full-height-wrapper white-text">
          <div class="parent">
            <div class="bottom">
              <div class="container">
                <div class="animatedblock delay2 animatedUp">
                  <div class="col-md-7 col-md-offset-1">
                    <div class="banner-textblock">
                      <p class="large">{{ $t('contacto.ubicacion-titulo') }}</p>
                      <h1 class="header contact-address-text" v-html="$t('contacto.ubicacion-direccion')"></h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--<div class="overlay contact-map-overlay"></div>-->
        </div>

      </div>
    </div>
    <section class="white contact-padding-top">
      <div class="container clearfix">
        <!--<div class="row">-->
            <div class="col-sm-6 extra-padding-right">
                <h2 class="header">{{ $t('contacto.contacto-titulo') }}</h2>
                <p v-html="$t('contacto.contacto-descripcion')"></p>
                <div class="break"></div>
            </div>
            <div class="col-sm-6">
                <p class="large">info@maldonado.gub.uy<br>contacto@centroculturalkavlin.org</p>
                <p class="small below-text">Email</p>
                <p class="large"><a href="https://www.instagram.com/paseodelasamericas_/" target="__blank"><i style="font-size:150%;vertical-align:bottom;" class="fa fa-instagram"></i>paseodelasamericas_</a></p>
                <p class="small below-text">Instagram</p>
            </div>
        </div>
      <!--</div>-->
    </section>
    <section class="white" style="padding-top:0px">
      <div class="container clearfix no-header">
        <div class="col-md-12 centered">
            <ClientsFooter />
          <div class="clear"></div>
          <div class="borderline"></div>
          <div class="break"></div>
        </div>
      </div>
    </section>

</template>

<script>

import ClientsFooter from '@/components/ClientsFooter.vue';

export default {
    name: 'ContactView',
    components: {
        ClientsFooter
    },
    data() {
    },
    mounted () {
        document.body.classList.add('no-intro', 'white-header', 'lato');
    },
    unmounted() {
        document.body.classList.remove('no-intro', 'white-header', 'lato');
    }
}

</script>

<style scoped>
@import '@/assets/css/contact.css';

.vue-map-container,
.vue-map-container .vue-map {
    width: 100%;
    height: 100%;
}

.background-image-map {
    background: url('@/assets/images/mapa.png') no-repeat center;
    height: 100%;
    display: block;
    width: 100%;
    background-size: 100% auto;
    background-size: cover;
    position: absolute;
    left: 0;
    top: 0;
}

.contact-padding-top {
    padding-top: 80px;
}
</style>
