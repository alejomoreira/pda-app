<template>

    <div class="full-width intro">
      <div class="full-height not-completely-full">
        <div class="fixed">
            <div id="map" class="parallax parallax-banner">


                <!--
                <GoogleMap
                api-key="AIzaSyCI9Xh0ihB2u4E0-vnpXgtyjaDCHxrfgik"
                style="width: 100%; height: 500px"
                :center="center"
                :scrollwheel="false"
                :panControl="false"
                :mapTypeControl="false"
                :streetViewControl="false"
                :disableDefaultUI="false"
                :zoomControl="false"
                :zoom="15"
                :styles="styles"
                >
                    <CustomMarker :options="{ position: center, anchorPoint: 'BOTTOM_CENTER' }">
                        <img src="@/assets/images/icons/location-pin-3.png" width="48" height="48" style="margin-top: 8px" />
                    </CustomMarker>
                </GoogleMap>
                -->


            </div>
            <GMapMap 
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
            </GMapMap>
            
        </div>
        
        <div class="full-height-wrapper white-text">
          <div class="parent">
            <div class="bottom">
              <div class="container">
                <div class="animatedblock delay2 animatedUp">
                  <div class="col-md-7 col-md-offset-1">
                    <div class="banner-textblock">
                      <p class="large">Contact</p>
                      <h1 class="header">Belton Creative Group<br />
                        Neusser Str. 255<br />
                        Köln</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="overlay contact-map-overlay"></div>
        </div>
      </div>
    </div>
    <section class="white">
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
        <div class="col-md-3 col-sm-6">
          <h2 class="header">Enquiries</h2>
          <p>Visit us in Cologne or drop us a message. We'll get back to you as soon as possible. </p>
          <div class="break"></div>
          <p class="large">business@belton.com</p>
          <p class="small below-text">New Business</p>
          <p class="large">+49 (0)221 3644 800</p>
          <p class="small below-text">phone</p>
        </div>
      </div>
    </section>

</template>

<script>
//import { GoogleMap, CustomMarker } from 'vue3-google-map'
//import {toRaw} from 'vue';
//this.markers.map((marker) => toRaw(marker).setMap(null))
//key: "AIzaSyCI9Xh0ihB2u4E0-vnpXgtyjaDCHxrfgik",

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

export default {
  name: 'ContactView',
  components: {
  },
  data() {
    return {
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
          },
        }
      ]
    }
  },
  mounted () {
        document.body.classList.add('contact-page', 'lato');
        console.log("Mounted Contact");
        //$(document).trigger('vue-loaded');
    },
    unmounted() {
        document.body.classList.remove('contact-page', 'lato');
    }
}

/*
export default {
    name: 'ContactView',
    components: {
    },   
    mounted () {
        document.body.classList.add('contact-page', 'lato');
        console.log("Mounted Contact");
        //$(document).trigger('vue-loaded');
    },
    unmounted() {
        document.body.classList.remove('contact-page', 'lato');
    }
}
*/
</script>

<style scoped>
@import '@/assets/css/contact.css';

.vue-map-container,
.vue-map-container .vue-map {
    width: 100%;
    height: 100%;
}

</style>
