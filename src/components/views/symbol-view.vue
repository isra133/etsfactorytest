<template lang="html">

  <section class="wrapper -symbol-view">


    <template v-if="!!data">


      <div class="container -big row-between ais">

        <router-link to="/" class="btn-action volver">< Volver</router-link>

        <section class="info-container">

          <h2 class="title">Datos del activo</h2>

          <div class="data-container" v-if="!!data.name">
            <span class="assistant">Nombre</span>
            <h1 v-html="data.name"></h1>
          </div>


          <div class="data-container" v-if="!!data.currency">
            <span class="assistant">Divisa</span>
            <h2 v-html="data.currency.name"></h2>
          </div>


          <div class="data-container" v-if="!!data.issuer">
            <span class="assistant">Emisor</span>
            <h2 v-html="data.issuer.name"></h2>
          </div>

          <div class="data-container" v-if="!!data.isin">
            <span class="assistant">ISIN</span>
            <h2 v-html="data.isin"></h2>
          </div>


          <div class="data-container" v-if="data.region">
            <span class="assistant">Región</span>
            <div class="breadcrumb row-start">
              <h2 v-html="data.region.name"></h2>
              <h2 v-if="data.region.region_level2" v-html="data.region.region_level2.name"></h2>
              <h2 v-if="data.region.region_level2.region_level3" v-html="data.region.region_level2.region_level3.name"></h2>
            </div>
          </div>


          <div class="data-container" v-if="data.sector">
            <span class="assistant">Sector</span>
            <div class="breadcrumb row-start">
              <h2 v-html="data.sector.name"></h2>
              <h2 v-if="data.sector.sector_level2" v-html="data.sector.sector_level2.name"></h2>
            </div>
          </div>


          <div class="data-container" v-if="data.risk_family">
            <span class="assistant">Familia de riesgo</span>
            <div class="breadcrumb row-start">
              <h2 v-html="data.risk_family.name"></h2>
              <h2 v-html="data.risk_family.sub_family.name"></h2>
            </div>
          </div>


          <div class="chart-container">
            <h2 class="title">Gráfica de precios</h2>
            <chart :datasets="data.prices" v-if="!!data"></chart>
          </div>

        </section>

        <comments-view></comments-view>

      </div>

      <symbols-related></symbols-related>

    </template>

    <template v-if="!!!data">

      <fake-symbol-view></fake-symbol-view>

    </template>



  </section>

</template>

<script lang="js">

  import {mapActions} from 'vuex';

  import fake_symbol_view from '@/components/parts/fake-symbol-view'

  import chart from '@/components/parts/chart-visualizer';
  import comments from '@/components/parts/comments-view';

  import symbols_related from '@/components/parts/symbols-related'

  export default  {
    name: 'symbol-view',
    props: [],
    mounted() {
      let that = this;

      this.requestSymbol(this.$route.params.id).then(response => {
        this.data = response;
      });
    },
    data() {
      return {
        data : ''
      }
    },
    methods: {
      ...mapActions(['requestSymbol'])
    },
    components : {
      'symbols-related' : symbols_related,
      'chart' : chart,
      'comments-view' : comments,
      'fake-symbol-view' : fake_symbol_view
    },
    watch : {
      '$route' : function(){
        this.data = '';
        this.requestSymbol(this.$route.params.id).then(response => {
          this.data = response;
        });
      }

    }
  }
</script>

<style scoped lang="scss">

.container{
  position: relative;
}

.info-container{
  width: 100%;
  max-width: 900px;
  background: white;
  padding: 40px 40px;
}

.title{
  font-size: 30px;
}

.data-container{
  margin-bottom: 30px;
}

.data-container h1{
  text-align: left;
  width: 100%;
  display: inline-block;
  font-weight: 700;
  color: #333;
  font-size: 28px;
}

.data-container h2{
  text-align: left;
  width: 100%;
  display: inline-block;
  font-weight: 700;
  color: #333;
  font-size: 24px;
}

.breadcrumb h2{
  width: auto;
  margin-right: 5px;
}

.breadcrumb h2::after{
  content: '/';
  margin-left: 5px;
  display: inline-block;
  opacity: .8;
}

.breadcrumb h2:last-of-type{
  margin-right: 0;
}

.breadcrumb h2:last-of-type::after{
  content: none;
}

.chart-container{
  margin-top: 80px;
}


</style>
