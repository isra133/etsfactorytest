<template lang="html">

      <header class="row-start">
      <nav class="row-start">
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </nav>
    </header>

</template>

<script lang="js">
  export default  {
    name: 'app-header',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  header{
    width: 100%;
    height: 75px;
    background: white;
    padding: 0 20px;
  }

  nav a{
    width: 100px;
    height: 20px;
    display: inline-block;
    background: #efefef;
    margin-left: 20px;
  }
</style>
