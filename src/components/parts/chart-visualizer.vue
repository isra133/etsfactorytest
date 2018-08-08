<template lang="html">

  <section class="chart-visualizer">
 <line-chart :data="data"></line-chart>
  
</section>

</template>

<script lang="js">

import Vue from 'vue'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(VueChartkick, {adapter: Chart})


  export default  {
    name: 'chart-visualizer',
    props: ['datasets'],
    mounted() {

      this.datasets.forEach(d => {
        let data = [ d.date , d.value];
        this.data.push(data);
      });

    },  
    data() {
      return {
         data : []
      }
    },
    methods: {

    },
    computed: {

    }
  }
</script>

<style scoped lang="scss">
.chart-visualizer {
  position: relative;
  width: 100%;
}
</style>
