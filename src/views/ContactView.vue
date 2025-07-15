<template>

    <div class="full-width intro">
      <div class="full-height not-completely-full">
        <div class="fixed">
            <div id="map" class="parallax parallax-banner"></div>
            <div class="fondo igual-relacion"></div>
            <div class="fixed"><figure class="background-image-map"></figure></div>
            
            <!--<GMapMap 
                <img  class="img-fluid" src="@/assets/images/mapa.png" />
                ref="myMarker"
                :center="{lat: -34.9572869, lng: -54.937589}"
                :options="options"
                :zoom="14"
                :disableDefaultUI="true"
                map-type-id="terrain"
                style="width: 100vw; height: 900px"
            >
                <GMapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="false"
                :draggable="false"
                style="width:48px; height:48px"
                />
            </GMapMap>-->
            
        </div>
        
        <div class="full-height-wrapper white-text">
          <div class="parent">
            <div class="bottom">
              <div class="container">
                <div class="animatedblock delay2 animatedUp">
                  <div class="col-md-7 col-md-offset-1">
                    <div class="banner-textblock">
                      <p class="large">{{ $t('contacto.ubicacion-titulo') }}</p>
                      <h1 class="header" v-html="$t('contacto.ubicacion-direccion')" style="font-size: 38px;"></h1>
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
        <!--
        <div class="col-md-7 col-md-offset-1 col-sm-6 extra-padding-right">
          <form class="form-part" method="post" action="contact.php" name="contactform" id="contactform" autocomplete="off">
            <input name="name" type="text" id="name" size="30" title="Name" />
            <input name="email" type="text" id="email" size="30" title="Email" />
            <textarea name="comments" cols="40" rows="3" id="comments" title="Tell us what you think!"></textarea>
            <div class="input-wrapper clearfix"> <span id="message"></span>
              <div class="clear"></div>
              <input type="submit" class="button" value="Submit" id="submit" name="Submit" />
            </div>
          </form>
        </div>-->
        <div class="row">
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
        <!--<div class="col-md-3 col-sm-6">
          <h2 class="header">Enquiries</h2>
          <p>Visit us in Cologne or drop us a message. We'll get back to you as soon as possible. </p>
          <div class="break"></div>
          <p class="large">business@belton.com</p>
          <p class="small below-text">New Business</p>
          <p class="large">+49 (0)221 3644 800</p>
          <p class="small below-text">phone</p>
        </div>-->
      </div>
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
/*
let gMapStyles = [{
    featureType: "administrative",
    elementType: "all",
    stylers: [{
        visibility: "off"
    }]
}, {
    featureType: "landscape",
    elementType: "all",
    stylers: [{
        color: '#aaaaaa'
    }, {
        visibility: "on"
    }]
}, {
    featureType: "poi",
    elementType: "all",
    stylers: [{
        visibility: "off"
    }]
}, {
    featureType: "road",
    elementType: "all",
    stylers: [{
        visibility: "on"
    }, {
        lightness: -30
    }]
}, {
    featureType: "transit",
    elementType: "all",
    stylers: [{
        visibility: "off"
    }]
}, {
    featureType: "water",
    elementType: "all",
    stylers: [{
        color: '#cccccc'
    }]
}];
*/
import ClientsFooter from '@/components/ClientsFooter.vue';

export default {
    name: 'ContactView',
    components: {
        ClientsFooter
    },
    data() {
       /* return {
            center: {lat: -34.9572869, lng: -54.9375891},
            options: {
                styles: gMapStyles,
                zoomControl: false,
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false
            },
            markers: [
                {
                    position: {
                        lat: -34.9572869, lng: -54.9375891
                    }
                }
            ]
        }*/
    },
    mounted () {
        document.body.classList.add('no-intro', 'white-header', 'lato');
    },
    unmounted() {
        document.body.classList.remove('no-intro', 'white-header', 'lato');
    }
    /*mounted () {
        document.body.classList.add('contact-page', 'lato');
    },
    unmounted() {
        document.body.classList.remove('contact-page', 'lato');
    }*/
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
