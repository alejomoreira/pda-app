<template>

    <section class="white">
        <div class="container clearfix">
            <div class="video-wrapper ">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/-ljtpKfwt4c?controls=0&amp;start=10" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="history">
                <h4 class="header">{{ $t('restauracion.titulo') }}</h4>
                <p v-html="$t('restauracion.texto')"></p>
            </div>
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
import ClientsFooter from '@/components/ClientsFooter.vue';
  
export default {
    name: 'RestorationView',
    components: {
        ClientsFooter
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
.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 */
  padding-top: 25px;
  height: 0;
}

.video-wrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.no-padding {
    padding-top: 0px !important;
}
.history {
    text-align: justify;
}
</style>