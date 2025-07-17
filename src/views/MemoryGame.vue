<template>
    <div class="game-container">
        <div class="game-menu">
            <div class="option tiempo"><span class="btn btn-info">{{ $t('juguemos.tiempo') }}: <span class="badge" :class="finish ? 'badge-success' : 'badge-light'">{{min}} : {{sec}}</span></span></div>
            <div class="option"><span class="btn btn-info">{{ $t('juguemos.turnos') }}: <span class="badge" :class="finish ? 'badge-success' : 'badge-light'">{{turns}}</span> </span></div>
            <div class="option"><button class="btn btn-info" @click="reset" :disabled="!start">{{ $t('juguemos.reset') }}</button></div>
        </div>
        <section class="game-board">     
            <div v-for="(card, index) in memoryCards" class="flip-container card img-circle" :class="{ 'flipped': card.isFlipped, 'matched' : card.isMatched }" @click="flipCard(card)" :key="index">
                <div class="front rounded shadow"><img src="/img/juego/base.png" class="img-circle"></div>
                <div class="back rounded"><img :src="'/img/juego/' + card.img" class="img-circle"></div>
            </div>
        </section>
    </div>
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
import Sculptures from '@/stores/sculptures';
import _ from 'lodash';

// Load Cards from Sculptures
let sculptureCards = [];
Sculptures.forEach((sculpture) => {
    sculptureCards.push({ name: sculpture.name, img: sculpture.path + '.jpg', isMatched: false, isFlipped: false});
});

sculptureCards.push({ name: 'Pda', img: 'logo_white.png', isMatched: false, isFlipped: false});

export default {
    name: 'MemoryGameView',
    components: {
        ClientsFooter
    },
    computed:{
        sec(){
            if(this.totalTime.seconds < 10){
                return '0'+this.totalTime.seconds;
            }
            return this.totalTime.seconds;
        },
        min(){
            if(this.totalTime.minutes < 10){
                return '0'+this.totalTime.minutes;
            }
            return this.totalTime.minutes;
        }
    },
    data() { 
        return {
            memoryCards: [],
            flippedCards: [],
            finish: false,
            start: false,
            turns: 0,
            totalTime: {
                minutes: 0,
                seconds: 0,
            },
            cards: sculptureCards
        }
    },
    mounted () {
        document.body.classList.add('no-intro', 'white-header', 'amiri');
    },
    unmounted() {
        this.confettiStop();
        document.body.classList.remove('no-intro', 'white-header', 'amiri');
    },
    created(){
        this.reset();
    },
    methods:{
        confettiStart() {
            this.$confetti.start({
                particles: [
                    {
                        type: 'heart',
                    },
                    {
                        type: 'circle',
                    },
                    {
                        type: 'rect',
                    }
                ],
            });
        },
        confettiStop() {
            this.$confetti.stop();
        },
        flipCard(card){

            if (card.isMatched || card.isFlipped || this.flippedCards.length === 2)
                return;

            if(!this.start){
                this._startGame();
            }

            card.isFlipped = true;

            if (this.flippedCards.length < 2)
                this.flippedCards.push(card);

            if (this.flippedCards.length === 2)    
                this._match(card);
        },
        _match(){
            this.turns++;
            if (this.flippedCards[0].name === this.flippedCards[1].name){

                setTimeout(() => {
                    this.flippedCards.forEach(card => card.isMatched = true);
                    this.flippedCards = [];

                    //All cards matched ?
                    if (this.memoryCards.every(card => card.isMatched === true)){
                        clearInterval(this.interval);
                        this.finish = true;
                        this.confettiStart();
                        setTimeout(() => this.confettiStop(), 3000)
                    }

                }, 400);

            } else {
                setTimeout(() => {
                    this.flippedCards.forEach((card) => {card.isFlipped = false});
                    this.flippedCards = [];
                }, 800);
            }

        },
        _startGame(){
            this._tick();
            this.interval = setInterval(this._tick, 1000);
            this.start = true;
        },
        _tick(){
            if(this.totalTime.seconds !== 59){
                this.totalTime.seconds++;
                return
            }

            this.totalTime.minutes++;
            this.totalTime.seconds = 0;
        },
        reset(){
            clearInterval(this.interval);
            this.cards.forEach(card => {
                card.isFlipped = false
                card.isMatched = false
            })

            setTimeout(() => {
                this.memoryCards = [];
                this.memoryCards = _.shuffle(this.memoryCards.concat(_.cloneDeep(this.cards), _.cloneDeep(this.cards)));
                this.totalTime.minutes = 0;
                this.totalTime.seconds = 0;
                this.start = false;
                this.finish = false;
                this.turns = 0;
                this.flippedCards = [];
            }, 600);
            
        },
    }
}
</script>
<style>
    #content {
        z-index: 0;       
    }
    .game-container {
        padding-top: 120px;
        background: #fff;
        z-index: 56;
    }
    .game-board {
        display: grid;
        grid-template-columns: repeat(4,55px);
        grid-template-rows: repeat(4,55px);
        grid-column-gap: 12px;
        grid-row-gap: 12px;
        justify-content: center;
        background: #fff;
        padding: 50px 0;;
    }
    .game-menu {
        text-align: center;
        padding: 10px 5px 5px 5px;
    }
    .game-menu .option {
        display: inline-block;
        margin: 10px;
    }
    .card {
        position: relative;
        transition: transform .5s ease-in;
        transform-style: preserve-3d;
    }
    .flip-container {
        -webkit-perspective: 1000;
        -moz-perspective: 1000;
        -o-perspective: 1000;
        perspective: 1000;
        min-height: 120px;
        cursor: pointer;
    }
    .front,
    .back {
        -webkit-backface-visibility: hidden;
        -moz-backface-visibility: hidden;
        -o-backface-visibility: hidden;
        backface-visibility: hidden;
        -webkit-transition: 0.6s;
        -webkit-transform-style: preserve-3d;
        -moz-transition: 0.6s;
        -moz-transform-style: preserve-3d;
        -o-transition: 0.6s;
        -o-transform-style: preserve-3d;
        -ms-transition: 0.6s;
        -ms-transform-style: preserve-3d;
        transition: 0.6s;
        transform-style: preserve-3d;
        top: 0;
        left: 0;
        width: 100%;
    }
    .back {
        -webkit-transform: rotateY(-180deg);
        -moz-transform: rotateY(-180deg);
        -o-transform: rotateY(-180deg);
        -ms-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
        position: absolute;
    }
    .flip-container.flipped .back {
        -webkit-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        -ms-transform: rotateY(0deg);
        transform: rotateY(0deg);
    }
    .flip-container.flipped .front {
        -webkit-transform: rotateY(180deg);
        -moz-transform: rotateY(180deg);
        -o-transform: rotateY(180deg);
        -ms-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }
    .matched{
        opacity: 0.3;
    }
    @media only screen and (max-width: 480px) {
        section {
            padding: 40px 0;
        }
    }
    @media screen and (max-width: 500px) {
        .game-menu .tiempo {
            display: block;
            margin: 0px;
        }
    }
    @media screen and (min-width: 375px) {
        .game-board {
            grid-template-columns: repeat(4,70px);
            grid-template-rows: repeat(4,70px);
        }
    }
    @media screen and (min-width: 500px) {
        .game-board {
            grid-template-columns: repeat(4,90px);
            grid-template-rows: repeat(4,90px);
        }
    }
    @media screen and (min-width: 600px) {
        .game-board {
            grid-template-columns: repeat(4,120px);
            grid-template-rows: repeat(4,120px);
        }
    }
</style>