<template lang="html">

  <section class="container -big symbols-related">
    <h2 class="title">Otros activos</h2>

    <template v-if="!!symbols">

      <template v-for="(symbol, key) in symbols">
        <symbol-el :data="symbol" :key="key"></symbol-el>
      </template>

    </template>

    <template v-else>
      <symbol-el-fake v-for="n in 16"></symbol-el-fake>
    </template>


  </section>

</template>

<script lang="js">

  import {mapActions, mapGetters} from 'vuex';

  import symbol_el from '@/components/parts/symbol-list-el';
  import symbol_el_fake from '@/components/parts/symbol-list-el-fake';


  export default  {
    name: 'symbols-related',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters({
        symbols : 'getAllSymbols'
      }), 
    },
    components: {
      'symbol-el' : symbol_el,
      'symbol-el-fake' : symbol_el_fake
    }
  }
</script>

<style scoped lang="scss">
.symbols-related {
  background: white;
  margin-top: 40px;
  padding: 40px;
}

.title{
  font-size: 30px;
}

</style>
