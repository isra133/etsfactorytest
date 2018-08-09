<template lang="html">

  <div class="wrapper -home">

    <div class="container -big">

      <div class="home-container">

        <h1 class="title">Tus activos</h1>

        <section class="filters row-between" v-if="!!filterOptions">

          <div class="input-text--container row-start">

            <input type="text" v-model="filterParams.searchText" class="input-text" placeholder="Escribe para buscar en la tabla...">

            <button class="show-filters" :open="showMoreFilters" @click="showMoreFilters = !showMoreFilters"></button>

            <p class="results" v-if="!!filterParams.searchText">Se han encontrado {{symbolsFiltered(filterParams).length}} {{results_string}}  <button class="btn-action" @click="eraseFiltersValues">Borrar</button></p>


            <div class="options-container" :open="showMoreFilters">
              
              <template v-for="(option, key) in filterOptions">

                <button :active="filterParams.searchIn.includes(option)" @click="toggleSearchIn(option)">{{option | nameOfCategory}}</button>

              </template>

            </div>

          </div>

        </section>

        <section class="symbol-list row-start ais">

          <header class="symbol-list-header row-start">
            <h3 class="name">Nombre del activo</h3>
            <h3 class="comments">Comentarios</h3>
            <h3 class="currency">Divisa</h3>
            <h3 class="risk_family">Familia de riesgo</h3>
          </header>

          <template v-if="!!symbolsFiltered(filterParams)">

            <template v-for="(symbol, key) in symbolsFiltered(filterParams)">
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
      this.filterParams.searchIn = this.filterOptions.slice();
    },
    data() {
      return {
        showMoreFilters : false,
        filterParams : {
          searchText : '',
          searchIn : ''
        },
      }
    },
    computed : {
      ...mapGetters({
        symbols : 'getAllSymbols',
        symbolsFiltered : 'getSymbolsfiltered',
        filterOptions : 'getCategoriesToFilter'
      }), 
      results_string : function(){
        let string = (this.symbolsFiltered(this.filterParams).length == 1) ? 'coincidencia' : 'coincidencias';
        return string;
      },
    },
     filters : {
    nameOfCategory : function(value){
      let strings = {
        'name' : 'Filtrar por nombre',
        'currency' : 'Filtrar por divisa',
        'risk_family' : 'Filtrar por familia de riesgo'
      }; 

      return strings[value];
    }
  },
    methods: {
      eraseFiltersValues : function(){
        this.filterParams.searchText = '';
        for(let i in this.filtersValues){
          this.filtersValues[i] = '';
        }
      },
      toggleSearchIn : function(value){
        if(this.filterParams.searchIn.includes(value)){
          this.filterParams.searchIn.splice(this.filterParams.searchIn.indexOf(value), 1);
        }else{
          this.filterParams.searchIn.push(value);
        }  
      },
      searchInActive : function(value){
       let flag = (this.filterParams.searchIn.some(s => s == value)) ? true : false;
       return flag;
     }
   },
   components: {
    'symbol-el' : symbol_el,
    'symbol-el-fake' : symbol_el_fake,
  }
}
</script>

<style scoped lang="scss">

.home-container{
  background: white;
  padding: 40px;
}

@media screen and (max-width: 1023px){
  .home-container{
    padding: 20px;
  }
}


</style>
