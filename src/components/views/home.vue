<template lang="html">

  <div class="wrapper -home">

    <section class="filters" v-if="!!filterOptions">

      <template v-for="(filter, key) in filterOptions">

        <select v-model="filtersValues[key]" :name="key">
          <option value="" selected="true">{{key | selectPlaceholder}}</option>
          <option :value="option" v-for="option in filter">{{option}}</option>
        </select>

      </template>

    </section>

    <section class="symbol-list">

      <template v-for="(symbol, key) in symbolsFiltered">
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
        filtersValues : {
          currency : '',
          risk_family : '',
        }
      }
    },
    computed : {
      ...mapGetters({
        symbols : 'getAllSymbols'
      }), 
      filterOptions : function(){

       let filterOptions = {
        'currency' : [],
        'risk_family' : []
      };

      if(!!this.symbols){

        this.symbols.forEach(symbol => {
          for(let i in filterOptions){
            (!filterOptions[i].some(filter => filter == symbol[i])) ? filterOptions[i].push(symbol[i]) : '';
          }
        });
      }

      return filterOptions;
    },
    symbolsFiltered : function (){

      if(!!this.symbols){

        let symbols = this.symbols.slice();

        symbols = symbols.filter(symbol => {

          let can = true; 

          for(let i in this.filtersValues){
            (can && !!this.filtersValues[i]) ? can = (symbol[i] == this.filtersValues[i]) : '';
          }

          return can;

        });

        return symbols;

      }

    }
  },
  filters : {
    selectPlaceholder : function(value){
      let strings = {
        'currency' : 'Filtrar por divisa',
        'risk_family' : 'Filtrar por familia de riesgo'
      }; 

      return strings[value];
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
