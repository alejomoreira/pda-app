<template>
    <section class="white">
      <div class="container clearfix">
        <div class="col-md-7">
          <p class="large">{{ authorName }}</p>
          <h1 class="header">{{ data.name }}</h1>
        </div>
      </div>
    </section>
    <section class="white same-color-as-previous-section carousel">
      <div class="container clearfix white">
        <div class="col-lg-12">
            <Carousel :autoplay="3000" :wrap-around="true" ref="myCarousel" :key="carouselKey">
                <Slide v-for="(image, index) in data.slides" :key="index" >
                    <div class="carousel__item">
                        <img :src="image" />
                    </div>
                </Slide>
                <template #addons>
                    <Navigation :data="data.slides" />
                    <Pagination :data="data.slides" />
                </template>
            </Carousel>
        </div>
      </div>
    </section>
    <section class="white same-color-as-previous-section">
      <div class="container clearfix">
        <div class="col-md-3 author-data">
            <h5 class="header">{{ $t('esculturas.autor') }}</h5>
            <p>{{ authorName }} ({{ data.birth }})</p>
            <h5 class="header more-margin">{{ $t('esculturas.ano') }}</h5>
            <p>{{ $t('esculturas.' + data.path + '.ano') }}</p>
            <h5 class="header more-margin">{{ $t('esculturas.materiales') }}</h5>
            <p>{{ $t('esculturas.' + data.path + '.materiales') }}</p>
            <h5 class="header more-margin">{{ $t('esculturas.audio') }}</h5>
            <p>
                <audio controls id="myAudio">
                    <source :src="`/audios/${this.data.path}-${this.$i18n.locale}.mp3`" type="audio/mpeg" id="mySource">
                    Your browser does not support the audio tag.
                </audio>
                <i class="audio-author" v-html="$t('esculturas.' + data.path + '.audio-author')"></i>
            </p>
            <h5 v-if="data.website" class="header more-margin">{{ $t('esculturas.website') }}</h5>
            <p v-if="data.website" style="word-wrap: break-word;">
                <a :href="data.website" target="__blank">{{ data.website }}</a>
            </p>
        </div>
        <div class="col-md-9 text-justify">
            <h5 class="header">{{ $t('esculturas.sobre-obra') }}</h5>
            <p v-html="$t('esculturas.' + data.path + '.sobre-obra')"></p>
            <br />
            <h5 class="header">{{ $t('esculturas.sobre-artista') }}</h5>
            <p v-html="$t('esculturas.' + data.path + '.sobre-artista')"></p>
            <p class="next-author"><a :href="nextArtist(false)" @click.prevent="nextArtist(true)" class="arrow">{{ $t('esculturas.proximo-artista')}}</a></p>
        </div>
      </div>
    </section>
</template>
<script>
import 'vue3-carousel/dist/carousel.css'
import 'vue3-audio-player/dist/style.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Sculptures from '@/stores/sculptures';
import { ref } from 'vue';

export default {
    name: 'SculptureView',
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    props: 
        { data: Object , locale: String }
    ,
    computed: {
        audioOptions() {
            return {
                src: `/audios/${this.data.path}.mp3`,
                title: `${this.$t('esculturas.' + this.data.path + '.audio-author')}`,
                coverImage: '',
                coverRotate: ''
            }
        },
        authorName() {
            return `${this.data.author}`;
        }
    },
    methods: {
        reloadCarousel() {
            console.log("Reload carousel")
            this.carouselKey += 1
            this.myCarousel.restartCarousel();
            //console.log(this.carouselKey)
        },
        pauseAudio() {
            let a = document.getElementById("myAudio");
            if (a) {
                a.pause();
            }
        },
        reloadAudio() {
            console.log("Reload audio file")
            let a = document.getElementById("myAudio");
            let s = document.getElementById("mySource");
            s.src = this.audio
            if (a) {
                a.load();
                a.pause();
            }
        },
        nextArtist(redirect) {
            let objIndex = Sculptures.findIndex(o => o.path === this.data.path);
            let nextArtistIndex = objIndex + 1 > Sculptures.length - 1 ? 0 : objIndex + 1;
            if (redirect) {
                return this.$router.push(Sculptures[nextArtistIndex].path)
            }
            //Just get a href link url for google.
            return "/" + Sculptures[nextArtistIndex].path;
        }
    },
    data() {
        return {
            audio: `/audios/${this.data.path}-${this.locale}.mp3`,
            carouselKey: 1
        }
    },
    watch: { 
        // When changing locale
        locale: function() {
            //this.reloadCarousel();
            this.reloadAudio();
        },
        // when changing route
        $route (){
            //this.$router.go(0);
            //location.reload()
            this.reloadAudio();
            this.reloadCarousel();
        }
    },
    setup(props) {
        // Crea una referencia para el componente Vue3Carousel
        const myCarousel = ref(null);
        // Convert the data prop to a reactive reference
        const dataRef = ref(props.data);
        //console.log(dataRef);
        return {
            myCarousel,
            dataRef
        };
    },
    mounted () {
        this.pauseAudio();
        document.body.classList.add('no-intro', 'white-header', 'amiri');
    },
    unmounted() {
        this.pauseAudio();
        document.body.classList.remove('no-intro', 'white-header', 'amiri');
    }
}

</script>

<style>

.audio-author {
    font-size: 14px;
}

.audio__player-title {
    text-align: left !important;
}
.audio__player-progress-container {
    width: 95% !important;
}

section.carousel {
    padding: 0px;
    background: #fff;
    padding-bottom: 20px;
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

/*
.carousel__slide {
  padding: 10px;
}*/

.carousel li {
     margin-right:0px;
}

button.carousel__prev,
button.carousel__next {
  box-sizing: content-box;
  color: #fff;
  /*border: 5px solid white;*/
}

button.carousel__prev:hover,
button.carousel__next:hover {
  box-sizing: content-box;
  color:lightgrey;
  /*border: 5px solid white;*/
}

@media only screen and (max-width: 992px) {
    .author-data {
        margin-bottom: 50px;
    }
}

.next-author {
    margin-top: 30px;
}

section {
    padding: 180px 0 50px 0;
}

audio {
    width: 100%;
}
</style>
