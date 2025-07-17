<template>

    <div class="full-width intro">
      <div class="full-height not-completely-full">
        <div class="fixed">
          <figure class="background-image4 parallax parallax-banner"></figure>
        </div>
        <!--<div class="full-height-wrapper">
          <div class="parent">
            <div class="bottom">
              <div class="container">
                <div class="animatedblock delay2 animatedUp">
                  <div class="col-lg-6 col-md-offset-1 col-md-7 col-sm-6">
                    <div class="banner-textblock">
                      <p class="large">About</p>
                      <h1 class="header">Competitive advantage starts with a vision rooted in purpose.</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>-->
      </div>
    </div>
    <section class="white about-pda">
        <div class="container clearfix no-header history">
            <h4 class="header">{{ $t('sobre-pda.titulo') }}</h4>
             <p v-html="$t('sobre-pda.texto')"></p>
        </div>
    </section>
    <section class="white same-color-as-previous-section">
        <div class="container clearfix">
            <!--<div id="container">-->
            <div v-for="(sculpture, index) in sculptures" class="element clearfix col-md-4 col-sm-6 home" :key="index">
                <a :href="'/'+ sculpture.path" :data-title="sculpture.name" class="transition-link">
                    <img :src="'/img/esculturas/'+ sculpture.path + '-1.jpg'" alt="" />
                    <div class="title-holder">
                        <p>{{ sculpture.author }}</p>
                        <h4 style="white-space:normal;text-align:left;">{{ sculpture.name }}</h4>
                    </div>
                    <div class="overlay"></div>
                </a> 
            </div>
            <!--</div>-->
        </div>
                        <!--
                <div class="element clearfix col-md-4 col-sm-6 home"> 
                    <a href="#" data-title="Image 01" class="transition-link">
                        <img src="images/work-single-15.jpg" alt="" />
                        <div class="title-holder">
                            <p>Interior Design</p>
                            <h4>Deutsche Bank</h4>
                        </div>
                        <div class="overlay"></div>
                    </a> 
                </div>-->
        <!--
        <div class="container clearfix">
            <div class="col-md-12 centered"> <a href="portfolio.html" title="" class="button">View All</a> </div>
        </div>
        -->
    </section>
    <!--
    <section class="white">
      <div class="container clearfix no-header">
        <div class="col-md-10 col-md-offset-1">
          <ul class="nav nav-tabs" role="tablist">
            <li role="presentation" class="active"><a href="#first" id="first-tab" role="tab" data-toggle="tab" aria-controls="first" aria-expanded="true">Strategy & Insights</a></li>
            <li role="presentation"><a href="#second" role="tab" id="second-tab" data-toggle="tab" aria-controls="second">Digital</a></li>
            <li role="presentation"><a href="#third" role="tab" id="third-tab" data-toggle="tab" aria-controls="second">Art Direction</a></li>
          </ul>
          <div class="tab-content">
            <div role="tabpanel" class="tab-pane fade in active" id="first" aria-labelledBy="first-tab">
              <div class="row">
                <div class="col-sm-6 extra-padding-right">
                  <h2 class="header">Expert Knowledge tailored to our clients needs.</h2>
                </div>
                <div class="col-sm-6">
                  <p>Cross-agency coordination clean water rural, promising dev turmoil. Similique fugit repellendus expedita excepturi iure perferendis provident quia eaque. </p>
                  <p>It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense. Why, you can't even read it! Repellendus, vero numquam?</p>
                  <p>We strive to deliver extraordinary experiences for leading brands. Our dedicated designers and developers love to relax, but get s#!t done. It is strictly for mock-ups. You may mock it up as strictly as you wish.</p>
                  <p class="extra-padding-top"><a href="http://player.vimeo.com/video/175629655?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" data-title="About Us" class="video-popup arrow">Play Video</a></p>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="second" aria-labelledBy="second-tab">
              <div class="row">
                <div class="col-sm-6 extra-padding-right">
                  <h2 class="header">brand storytelling at a new level.</h2>
                </div>
                <div class="col-sm-6">
                  <p>Mine synthest Coca-Cola, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.</p>
                  <ul class="unordered-list">
                    <li>We are set on earning a reputation for our award winning work.</li>
                    <li>We strive to deliver extraordinary experiences for leading brands.</li>
                    <li>Our dedicated designers and developers love to relax, but get s#!t done.</li>
                  </ul>
                  <p>Repellendus, vero numquam? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                </div>
              </div>
            </div>
            <div role="tabpanel" class="tab-pane fade" id="third" aria-labelledBy="third-tab">
              <div class="row">
                <div class="col-sm-6 extra-padding-right">
                  <h2 class="header">in-house 9,500 sqft photographic studio.</h2>
                </div>
                <div class="col-sm-6">
                  <p>This is not meant to be read. He who searches for meaning here will be sorely disappointed. These words are here to provide the reader with a basic impression of how actual text will appear in its final.</p>
                  <ul class="unordered-list">
                    <li>We are set on earning a reputation for our award winning work.</li>
                    <li>We strive to deliver extraordinary experiences for leading brands.</li>
                    <li>Our dedicated designers and developers love to relax, but get s#!t done.</li>
                  </ul>
                  <p>Repellendus, vero numquam? Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula felis euismod semper. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style="padding-top: 70px;">
      <div class="container clearfix">
        <div class="col-md-12 white-text centered extra-padding-bottom">
          <h2>The Team</h2>
        </div>
        <div class="element clearfix col-md-4 col-sm-6"> <img src="../assets/images/about-1.jpg" alt="" />
          <div class="greyed">
            <p class="details">Managing Partner</p>
            <h3 class="header with-details-above with-line">James McDougal</h3>
            <p>Mine synthest Coca-Cola, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.</p>
            <ul class="social-list clearfix">
              <li> <a href="#"><i class="fa fa-instagram"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-envelope"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-500px"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-linkedin-square"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-soundcloud"></i> </a> </li>
            </ul>
          </div>
        </div>
        <div class="element clearfix col-md-4 col-sm-6"> <img src="../assets/images/about-1.jpg" alt="" />
          <div class="greyed">
            <p class="details">Managing Partner</p>
            <h3 class="header with-details-above with-line">James McDougal</h3>
            <p>Mine synthest Coca-Cola, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.</p>
            <ul class="social-list clearfix">
              <li> <a href="#"><i class="fa fa-instagram"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-envelope"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-500px"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-linkedin-square"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-soundcloud"></i> </a> </li>
            </ul>
          </div>
        </div>
        <div class="element clearfix col-md-4 col-sm-6"> <img src="../assets/images/about-1.jpg" alt="" />
          <div class="greyed">
            <p class="details">Managing Partner</p>
            <h3 class="header with-details-above with-line">James McDougal</h3>
            <p>Mine synthest Coca-Cola, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.</p>
            <ul class="social-list clearfix">
              <li> <a href="#"><i class="fa fa-instagram"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-envelope"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-500px"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-linkedin-square"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-soundcloud"></i> </a> </li>
            </ul>
          </div>
        </div>
        <div class="element clearfix col-md-4 col-sm-6"> <img src="../assets/images/about-1.jpg" alt="" />
          <div class="greyed">
            <p class="details">Managing Partner</p>
            <h3 class="header with-details-above with-line">James McDougal</h3>
            <p>Mine synthest Coca-Cola, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.</p>
            <ul class="social-list clearfix">
              <li> <a href="#"><i class="fa fa-instagram"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-envelope"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-500px"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-linkedin-square"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-soundcloud"></i> </a> </li>
            </ul>
          </div>
        </div>
        <div class="element clearfix col-md-4 col-sm-6"> <img src="../assets/images/about-2.jpg" alt="" />
          <div class="greyed">
            <p class="details">Designer</p>
            <h3 class="header with-details-above with-line">Tobias Schmied</h3>
            <p>Mine synthest Coca-Cola, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.</p>
            <ul class="social-list clearfix">
              <li> <a href="#"><i class="fa fa-behance"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-vk"></i> </a> </li>
            </ul>
          </div>
        </div>
        <div class="element clearfix col-md-4 col-sm-6"> <img src="../assets/images/about-3.jpg" alt="" />
          <div class="greyed">
            <p class="details">Front-end Coder</p>
            <h3 class="header with-details-above with-line">Johnathan Doe</h3>
            <p>Mine synthest Coca-Cola, tempor duis single-origin coffee ea next level ethnic fingerstache fanny pack nostrud.</p>
            <ul class="social-list clearfix">
              <li> <a href="#"><i class="fa fa-facebook"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-twitter"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-dribbble"></i> </a> </li>
              <li> <a href="#"><i class="fa fa-xing"></i> </a> </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    -->
    <section class="white" style="padding-top:0px">
        <div class="container clearfix no-header">
            <div class="col-md-10 col-md-offset-1 centered">
                <ClientsFooter />
                <div class="clear"></div>
                <div class="borderline"></div>
                <div class="break"></div>
            </div>
        </div>
      <!--
      <div class="container clearfix">
        <div class="col-md-2 col-md-offset-1">
          <h2 class="header">Clients</h2>
        </div>
        <div class="col-md-5">
          <p class="large">Great things happen when building long-lasting relationships. By now, you are hopefully impressed and dying to work with us.</p>
        </div>
        <div class="col-md-3">
          <p class="alignright"><a href="/contacto" title="" class="arrow">Contact Us</a></p>
        </div>
      </div>-->
    </section>

</template>

<script>
import Sculptures from '@/stores/sculptures';
import ClientsFooter from '@/components/ClientsFooter.vue';

export default {
    name: 'AboutView',
    components: {
        ClientsFooter
    },
    data() { 
        return {
            sculptures: Sculptures
        }
    },
    mounted () {
        document.body.classList.add('no-intro', 'white-header', 'amiri');
    },
    unmounted() {
        document.body.classList.remove('no-intro', 'white-header', 'amiri');
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

.history {
    text-align: justify;
    padding: 0px 15px;
} 

.about-pda {
    padding: 50px 0;
}
</style>