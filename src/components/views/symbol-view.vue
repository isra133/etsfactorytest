<template lang="html">

  <section class="symbol-view">


    <template v-if="!!data">

      <h1 v-if="!!data.name" v-html="data.name"></h1>
      <h2 v-if="!!data.currency" v-html="data.currency.name"></h2>
      <h3 v-if="!!data.issuer" v-html="data.issuer.name"></h3>

      <p v-if="!!data.isin" v-html="data.isin"></p>

   <!--    <p class="region" v-if="!!data.region">
        
        <span v-if="!!data.region.name" v-html="data.region.name"></span>
        <span v-if="!!data.region.region_level2" v-html="data.region.region_level2.name"></span>
        <span v-if="!!data.region.region_level3" v-html="data.region.name"></span>

      </p> -->

      <p class="risk-family" v-if="data.risk_family">
          <a v-html="data.risk_family.name"></a>
          <a v-html="data.risk_family.sub_family.name"></a>
      </p>

      <!-- TODO SECTOR -->


      <!-- TODO GRAFICO -->

    </template>

      <comments-form :id="47868"></comments-form>




  </section>

</template>

<script lang="js">

  import {mapActions} from 'vuex';

  import commentsForm from '@/components/parts/comments-form';

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
      'comments-form' : commentsForm
    }
  }
</script>

<style scoped lang="scss">
.symbol-view {

}
</style>
