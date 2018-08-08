<template lang="html">

  <section class="wrapper -symbol-view">


    <template v-if="!!data">

      <div class="container -big">

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


        <div class="data-container">
          <span class="assistant">Familia de riesgo</span>
          <p class="breadcrumb row-start" v-if="data.risk_family">
            <h2 v-html="data.risk_family.name"></h2>
            <h2 v-html="data.risk_family.sub_family.name"></h2>
          </p>
        </div>
        

      </div>


   <!--    <p class="region" v-if="!!data.region">
        
        <span v-if="!!data.region.name" v-html="data.region.name"></span>
        <span v-if="!!data.region.region_level2" v-html="data.region.region_level2.name"></span>
        <span v-if="!!data.region.region_level3" v-html="data.region.name"></span>

      </p> -->



      <!-- TODO SECTOR -->


      <!-- TODO GRAFICO -->
      <chart :datasets="data.prices" v-if="!!data"></chart>

    </template>

    <!-- <comments-form :id="47868"></comments-form>
    <comments-list :id="47868"></comments-list>
  -->



</section>

</template>

<script lang="js">

  import {mapActions} from 'vuex';

  import commentsForm from '@/components/parts/comments-form';
  import commentsList from '@/components/parts/comments-list';
  import chart from '@/components/parts/chart-visualizer';

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
      'comments-form' : commentsForm,
      'comments-list' : commentsList,
      'chart' : chart
    }
  }
</script>

<style scoped lang="scss">
.assistant{
  width: 100%;
  text-align: left;
  display: inline-block;
  font-size: 12px;
  color: #333;
}

.data-container{
  margin-bottom: 40px;
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
}

.breadcrumb h2::before{
  content: '/';
  display: inline-block;
  
}

</style>
