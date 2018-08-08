<template lang="html">

  <div class="wrapper -home">

    <div class="container">

      <h1 class="title">Tus activos</h1>

      <section class="filters row-between" v-if="!!filterOptions">

        <input type="text" v-model="searchText" class="input-text" placeholder="Escribe para buscar">


        <div class="filters-container">

          <template v-for="(filter, key) in filterOptions">

            <select v-model="filtersValues[key]" :name="key">
              <option value="" selected="true">{{key | selectPlaceholder}}</option>
              <option :value="option" v-for="option in filter">{{option}}</option>
            </select>

          </template>

        </div>


      </section>

      <section class="symbol-list row-start ais">

        <header class="symbol-list-header row-start">
          <h3 class="name">Nombre del activo</h3>
          <h3 class="currency">Divisa</h3>
          <h3 class="risk_family">Familia de riesgo</h3>
        </header>

        <template v-if="!!symbolsFiltered">

          <template v-for="(symbol, key) in symbolsFiltered">
            <symbol-el :data="symbol" :key="key"></symbol-el>
          </template>

          <div class="zero-results" v-if="symbolsFiltered.length == 0">
            <h3>No hemos encontrado ningún activo con esas características</h3>
            <button @click="eraseFiltersValues">Borrar filtros</button>
          </div>

        </template>

        <template v-else>
          <symbol-el-fake v-for="n in 16"></symbol-el-fake>
        </template>

      </section>

    </div>

  </div>

</template>

<script lang="js">

  import {mapActions, mapGetters} from 'vuex';

  import symbol_el from '@/components/parts/symbol-list-el';
  import symbol_el_fake from '@/components/parts/symbol-list-el-fake';

  export default  {
    name: 'home',
    props: [],
    mounted() {
    },
    data() {
      return {
        filtersValues : {
          currency : '',
          risk_family : '',
        }, 
        searchText : ''
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

      let searchIn = ['name','risk_family','currency'];

      if(!!this.symbols){

        let symbols = this.symbols.slice();

        symbols = symbols.filter(symbol => {

          let can = true; 

          for(let i in this.filtersValues){
            (can && !!this.filtersValues[i]) ? can = (symbol[i] == this.filtersValues[i]) : '';
          }

          if(can && !!this.searchText){
            searchIn.forEach(e =>{
              if(can){
                can = (symbol.name.toLowerCase().includes(this.searchText.toLowerCase()))
              }
            });
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
    ...mapActions(['requestAllSymbols']),
    eraseFiltersValues : function(){

      this.searchText = '';
      for(let i in this.filtersValues){
        this.filtersValues[i] = '';
      }

    }
  },
  components: {
    'symbol-el' : symbol_el,
    'symbol-el-fake' : symbol_el_fake
  }
}
</script>

<style scoped lang="scss">




</style>
