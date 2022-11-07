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
          <div class="full-height">
            <div class="fixed">
              <figure class="background-image1 "></figure>
            </div>
            <div class="full-height-wrapper white-text">
              <div class="custom-caption">2017, Castle Neuschwanstein</div>
              <div class="parent">
                <div class="bottom">
                  <div class="container">
                    <div class="col-lg-3 col-lg-offset-8 col-md-5 col-sm-offset-6 col-sm-6">
                      <div class="banner-textblock">
                        <h1>Photography &amp; {{ $t('home.welcome', {company : "Apple"}) }}</h1>
                        <p class="large">A sensorial experience that embodies the Apple lifestyle and fuses together the many ways, in which the brand effortlessly fits into consumer’s lives.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="overlay"></div>
            </div>
          </div>
        </div>
        <section class="white">
          <div class="container clearfix">
            <div class="col-md-10 col-md-offset-1">
              <div class="row">
                <div class="col-sm-6 extra-padding-right">
                  <div class="icons palette alignleft"></div>
                  <div class="next-to-icon">
                    <h4 class="header">Black & White</h4>
                    <p>We are known for our unparalleled use of technology and deliver unsurpassed designs, that we are very proud of. Comes with several header options.</p>
                  </div>
                </div>
                <div class="col-sm-6 extra-padding-right">
                  <div class="icons adjust alignleft"></div>
                  <div class="next-to-icon">
                    <h4 class="header">Responsive</h4>
                    <p>Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nutella.</p>
                  </div>
                </div>
                <div class="clear"></div>
                <div class="col-sm-6 extra-padding-right">
                  <div class="icons winner alignleft"></div>
                  <div class="next-to-icon">
                    <h4 class="header">Award-winning design</h4>
                    <p>These words are here to provide the reader with a basic impression of how actual text will appear in its final. He who searches for meaning here will be disappointed.</p>
                  </div>
                </div>
                <div class="col-sm-6 extra-padding-right">
                  <div class="icons pencil alignleft"></div>
                  <div class="next-to-icon">
                    <h4 class="header">6 Months Support</h4>
                    <p>Each purchase of Belton includes six months of complimentary support, as well as lifetime updates, including new demos, detail pages and bug-fixes. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container clearfix">
            <div class="col-md-12 white-text centered extra-padding-bottom">
              <h2 class="header">Recent jobs</h2>
              <ul id="options" class="clearfix">
                <li> <a href="#home">Show All</a> </li>
                <li> <a href="#nature">Nature</a> </li>
                <li> <a href="#wedding">Wedding</a> </li>
                <li> <a href="#travel">Travel</a></li>
              </ul>
            </div>
          </div>
          <div class="container clearfix">
            <div id="container">
              <div class="element clearfix col-md-4 col-sm-6 home travel"> <a href="../assets/images/fullscreen12.jpg" data-title="Image 01" data-fancybox-group="group1" class="popup transition-link"> <img src="../assets/images/image07-lg.jpg" alt="" />
                <div class="title-holder">
                  <h3>Multiple Images</h3>
                  <p class="large">Travel</p>
                </div>
                <div class="overlay"></div>
                </a> <a href="../assets/images/fullscreen15.jpg" data-title="Image 02" data-fancybox-group="group1" class="popup transition-link hidden"></a> </div>
              <div class="element clearfix col-md-4 col-sm-6 home travel"> <a href="http://player.vimeo.com/video/175629655?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" data-title="About Us" class="video-popup transition-link"> <img src="../assets/images/image02.jpg" alt="" />
                <div class="title-holder">
                  <h3>Video</h3>
                  <p class="large">Travel</p>
                </div>
                <div class="overlay"></div>
                </a> </div>
              <div class="element clearfix col-md-4 col-sm-6 home wedding"><a href="../assets/images/lifestyle08-lg.jpg" data-title="Newlyweds" class="popup transition-link"> <img src="../assets/images/lifestyle08.jpg" alt="" />
                <div class="title-holder">
                  <h3>Newlyweds</h3>
                  <p class="large">Wedding</p>
                </div>
                <div class="overlay"></div>
                </a> </div>
              <div class="element clearfix col-md-4 col-sm-6 home wedding"><a href="../assets/images/blog-5.jpg" data-title="Buffet" class="popup transition-link"> <img src="../assets/images/blog-5.jpg" alt="" />
                <div class="title-holder">
                  <h3>Buffet</h3>
                  <p class="large">Wedding</p>
                </div>
                <div class="overlay"></div>
                </a> </div>
              <div class="element clearfix col-md-4 col-sm-6 home nature"><a href="../assets/images/image05.jpg" data-title="Live Vulcano" class="popup transition-link"> <img src="../assets/images/image05.jpg" alt="" />
                <div class="title-holder">
                  <h3>Live Vulcano</h3>
                  <p class="large">Nature</p>
                </div>
                <div class="overlay"></div>
                </a> </div>
              <div class="element clearfix col-md-4 col-sm-6 home nature"><a href="../assets/images/image06-lg.jpg" data-title="Flowers" class="popup transition-link"> <img src="../assets/images/image06.jpg" alt="" />
                <div class="title-holder">
                  <h3>Flowers</h3>
                  <p class="large">Nature</p>
                </div>
                <div class="overlay"></div>
                </a> </div>
              <div class="element clearfix col-md-4 col-sm-6 home nature"><a href="../assets/images/travel03.jpg" data-title="Buffalo" class="popup transition-link"> <img src="../assets/images/travel03.jpg" alt="" />
                <div class="title-holder">
                  <h3>Buffalo</h3>
                  <p class="large">Nature</p>
                </div>
                <div class="overlay"></div>
                </a> </div>
              <div class="element clearfix col-md-4 col-sm-6 home nature"><a href="../assets/images/image10.jpg" data-title="Tree Family" class="popup transition-link"> <img src="../assets/images/image10.jpg" alt="" />
                <div class="title-holder">
                  <h3>Tree Family</h3>
                  <p class="large">Nature</p>
                </div>
                <div class="overlay"></div>
                </a> </div>
            </div>
          </div>
          <div class="container clearfix">
            <div class="col-md-12 centered white-text">
              <h5>Interested in Working with me?</h5>
              <p><a href="mailto:mail@belton.com">Send me an email</a></p>
            </div>
          </div>
        </section>
        <section class="white">
          <div class="container clearfix">
            <div class="col-md-10 col-md-offset-1">
              <div class="row">
                <div class="col-sm-6 extra-padding-right">
                  <h2 class="header">I love photography</h2>
                  <p class="large">A passionate Wedding &amp; Nature Photographer, aiming to capture the moment. My focus lies on delivering unsurpassed designs &amp; photographs, that are known for innovative use of technology.</p>
                  <p class="large">This is not meant to be read. He who searches for meaning here will be sorely disappointed. These words are here to provide the reader with a basic impression of how actual text will appear in its final.</p>
                  <div class="signature"></div>
                </div>
                <div class="col-sm-6 extra-padding-top"> <img src="../assets/images/image09.jpg" alt="" class="extra-padding-top-on-xs" /> </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div class="container clearfix">
            <div class="col-md-12 centered extra-padding-bottom white-text">
              <h2 class="header">Stories</h2>
              <p class="large">My travel experiences documented.</p>
            </div>
            <div class="element clearfix col-md-4 col-sm-6 home travel"> <a href="#" title="" class="transition-link"> <img src="../assets/images/lifestyle04.jpg" alt="" />
              <div class="greyed">
                <h4 class="header">Gone Fishing in Måløy, Norway</h4>
                <div class="blog-line"></div>
                <p class="details">Aug 24, 2017<span class="alignright">by Marie Belton</span></p>
                <p>It's Greek to you. Unless, of course, you're Greek, in which case, it really makes no sense. Why, you can't even read it! It is strictly for mock-ups. You may mock it up as strictly as you wish.</p>
              </div>
              </a> </div>
            <div class="element clearfix col-md-4 col-sm-6 home travel"> <a href="#" title="" class="transition-link"> <img src="../assets/images/contact-2.jpg" alt="" />
              <div class="greyed">
                <h4 class="header">Packaging Up</h4>
                <div class="blog-line"></div>
                <p class="details">Nov 3, 2017<span class="alignright">by Marie Belton</span></p>
                <p>It has been placed here solely to demonstrate the look and feel of finished. He who searches for meaning here will be sorely disappointed.</p>
              </div>
              </a> </div>
            <div class="element clearfix col-md-4 col-sm-6 home travel"> <a href="#" title="" class="transition-link"> <img src="../assets/images/fullscreen15.jpg" alt="" />
              <div class="greyed">
                <h4 class="header">Strangest Plant Growing in 'White Sands'</h4>
                <div class="blog-line"></div>
                <p class="details">Dec 18, 2017<span class="alignright">by Marie Belton</span></p>
                <p>This is not meant to be read. It has been placed here solely to demonstrate the look and feel of finished. He who searches for meaning here will be sorely disappointed.</p>
              </div>
              </a> </div>
          </div>
        </section>
      </div>
      <!-- end content -->
      
      <!-- start footer -->
      <PageFooter />
      <!-- end footer -->

    </div>
    <!-- end wrap --> 
</template>

<!--
<template>
  <div class="home">
    <img alt="Vue logo" src=".../assets/logo.png">
    <p>{{ $t('home.welcome', {company: 'Lokalise'}) }}</p>
    <p>Paja</p>
    <HelloWorld msg="Heello" />
  </div>

</template>
-->

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
//import HelloI18n from '@/components/HelloI18n.vue'

/*
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
*/

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
        document.body.classList.add('amiri');
    },
    unmounted() {
        document.body.classList.remove('amiri');
    }
}

</script>
