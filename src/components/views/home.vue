<template lang="html">

  <div class="wrapper -home">


    

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
      })
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
