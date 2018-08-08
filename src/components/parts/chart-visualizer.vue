<template lang="html">

  <section class="chart-visualizer">
    <nav class="row-start btn-container">

      <button class="btn-action" :active="when == 'all'" @click="when = 'all'">Todo</button>
      <button class="btn-action" :active="when == '3years'" @click="when = '3years'">Últimos 3 años</button>
      <button class="btn-action" :active="when == '1year'" @click="when = '1year'">Último año</button>
      <button class="btn-action" :active="when == '6months'" @click="when = '6months'">Últimos 6 meses</button>
      <button class="btn-action" :active="when == '3months'" @click="when = '3months'">Últimos 3 meses</button>
      <button class="btn-action" :active="when == 'lastmonth'" @click="when = 'lastmonth'">Último mes</button>

    </nav>

    <line-chart :data="data"></line-chart>
    
    <p v-if="data.length == 0" class="no-results">No hay resultados en ese periodo de tiempo</p>

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
    },  
    data() {
      return {
        when : 'all'
      }
    },
    methods: {

    },
    computed: {
      data : function(){

        let data = new Array();

        let limit = new Date();

        switch (this.when) {
          case 'all':
          limit = 0;
          break;
          case '3years':
          limit.setFullYear(limit.getFullYear() - 3);
          limit = limit.getTime();
          break;
          case '1year':
          limit.setFullYear(limit.getFullYear() - 1);
          limit = limit.getTime();
          break;
          case '6months':
          limit.setMonth(limit.getMonth() - 6);
          limit = limit.getTime();
          break;
          case '3months':
          limit.setMonth(limit.getMonth() - 3);
          limit = limit.getTime();
          break;
          case 'lastmonth':
          limit.setMonth(limit.getMonth() - 1);
          limit = limit.getTime();
          break;
        }

        this.datasets.forEach(d => {

          let temporalDate = new Date(d.date);

          if(temporalDate.getTime() >= limit){

            let temporal = [ d.date , d.value];

            data.push(temporal);

          }

        });

        return data;

      }
    }
  }
</script>

<style scoped lang="scss">
.chart-visualizer {
  position: relative;
  width: 100%;
}

.btn-action{
  margin-right: 15px;
}

.btn-action[active=true]{
  font-weight: 700;
}

.btn-action:last-of-type{
  margin-right: 0;
}

.btn-container{
  margin-bottom: 20px;
}

.no-results{
  width: 100%;
  top: 110px;
  left: 0;
  position: absolute;
  text-align: center;
  display: inline-block;
}

</style>
