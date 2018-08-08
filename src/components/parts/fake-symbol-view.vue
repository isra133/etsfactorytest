<template lang="html">

  <section class="fake-symbol-view">


    <router-link to="/" class="btn-action volver">< Volver</router-link>

    <div class="container -big row-between ais">

      <div class="info-container">
    
      </div>

      <div class="comments-view"></div>

    </div>


  </section>

</template>

<script lang="js">
  export default  {
    name: 'fake-symbol-view',
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

.title{
  width: 60%;
  display: inline-block;
   -webkit-animation: loadAnimation 2s ease infinite;
  -moz-animation: loadAnimation 2s ease infinite;
  animation: loadAnimation 2s ease infinite;
  background: linear-gradient(274deg, #efefef, #f8f9fa);
  background-size: 400% 400%;
  height: 49px;
}

.info-container{
  width: 100%;
  max-width: 900px;
  background: white;
  padding: 40px 40px;
  height: 80vh;
  text-align: left;
}

.comments-view {
  width: 100%;
  max-width: 330px;
  background: white;
  padding: 40px 20px;
  height: 80vh;
}

</style>
