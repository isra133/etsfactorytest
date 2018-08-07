<template lang="html">

  <div class="wrapper -home">


    <section class="filters">
      {{filterOptions}}

    </section>

    <section class="symbol-list">

      <template v-for="(symbol, key) in symbols">
        <symbol-el :data="symbol" :key="key"></symbol-el>
      </template>

    </section>

  </div>

</template>

<script lang="js">

  import {mapActions, mapGetters} from 'vuex';

  import symbol_el from '@/components/parts/symbol-list-el';

  export default  {
    name: 'home',
    props: [],
    mounted() {
      this.requestAllSymbols();
    },
    data() {
      return {

      }
    },
    computed : {
      ...mapGetters({
        symbols : 'getAllSymbols'
      }), 
      filterOptions : function(){

       let filterOptions = {
        'currency' : new Array(),
        'risk_family' : new Array()
      };

      if(!!this.symbols){

        this.symbols.forEach(symbol => {

          for(let i in filterOptions){
            (!filterOptions[i].some(filter => filter == symbol[i])) ? filterOptions[i].push(symbol[i]) : '';
          }

        });



      }

      return filterOptions;
    }
  },
  methods: {
    ...mapActions(['requestAllSymbols'])
  },
  components: {
    'symbol-el' : symbol_el
  }
}
</script>

<style scoped lang="scss">
.home {

}
</style>
