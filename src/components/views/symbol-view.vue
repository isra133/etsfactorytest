<template lang="html">

  <section class="symbol-view">
    <h1>symbol-view Component</h1>
  </section>

</template>

<script lang="js">

  import {mapActions} from 'vuex';

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
    }
  }
</script>

<style scoped lang="scss">
.symbol-view {

}
</style>
