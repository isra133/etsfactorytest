<template lang="html">

  <section class="home">
    <h1>home Component</h1>
  </section>

</template>

<script lang="js">

  import {mapActions} from 'vuex';

  export default  {
    name: 'home',
    props: [],
    mounted() {
      this.getAllSymbols();
    },
    data() {
      return {

      }
    },
    methods: {
        ...mapActions(['getAllSymbols'])
    },
    computed: {

    }
  }
</script>

<style scoped lang="scss">
.home {

}
</style>
