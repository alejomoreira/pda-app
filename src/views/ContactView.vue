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
    <div class="full-width intro">
      <div class="full-height not-completely-full">
        <div class="fixed">
          <div id="map" class="parallax parallax-banner"></div>
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
        </div>
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
  </div>
  <!-- end content -->

  <!-- footer -->   
  <PageFooter />
  <!-- end footer -->   
</div>
<!-- end wrap --> 

<!--
<script src="js/jquery-1.12.4.min.js" type="text/javascript"></script> 
<script src="js/jquery-easing-1.3.js" type="text/javascript"></script> 
<script src="js/jquery.touchSwipe.min.js" type="text/javascript"></script> 
<script src="js/jquery.isotope2.min.js" type="text/javascript"></script> 
<script src="js/jquery.ba-bbq.min.js" type="text/javascript"></script> 
<script src="js/packery-mode.pkgd.min.js" type="text/javascript"></script> 
<script src="js/jquery.isotope.load.js" type="text/javascript"></script> 
<script src="js/main.js" type="text/javascript"></script> 
<script src="js/jquery.form.js" type="text/javascript"></script> 
<script src="js/input.fields.js" type="text/javascript"></script> 
<script src="js/preloader.js" type="text/javascript"></script> 
<script src="js/bootstrap.min.js" type="text/javascript"></script> 
<script src="js/jquery.fancybox.pack.js" type="text/javascript"></script> 
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCI9Xh0ihB2u4E0-vnpXgtyjaDCHxrfgik&sensor=false" type="text/javascript"></script> 
<script src="js/googlemaps.js" type="text/javascript"></script>
-->

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
    mounted () {
        document.body.classList.add('contact-page', 'lato');
    },
    unmounted() {
        document.body.classList.remove('contact-page', 'lato');
    }
}

</script>

<style scoped>
@import '@/assets/css/contact.css';

</style>
