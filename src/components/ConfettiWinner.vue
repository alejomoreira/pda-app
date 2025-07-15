<template>
    <main>
        <button @click="start">Start</button>
        <button @click="stop">Stop</button>
        <button @click="love">Show some love</button>
    </main>
</template>
  
<script>
    import Vue from 'vue'
    import VueConfetti from 'vue-confetti'
  
    Vue.use(VueConfetti)
  
    export default {
      methods: {
        start() {
          this.$confetti.start();
        },
        stop() {
          this.$confetti.stop();
        },
        love() {
          this.$confetti.update({
            particles: [
              {
                type: 'heart',
              },
              {
                type: 'circle',
              },
            ],
            defaultColors: [
              'red',
              'pink',
              '#ba0000'
            ],
          });
        }
      }
    }
</script>