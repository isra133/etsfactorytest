<template lang="html">

  <section class="fake-symbol-view">


    <router-link to="/" class="btn-action volver">< Volver</router-link>

    <div class="container -big row-between ais">

      <div class="info-container  column-center">

       <orbit-spinner
       :animation-duration="1200"
       :size="80"
       color="#333333"
       />

       <h2 class="title">Cargando</h2>

     </div>

     <div class="comments-view"></div>

   </div>


 </section>

</template>

<script lang="js">
  
  import { OrbitSpinner } from 'epic-spinners'


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
    components: {
      OrbitSpinner
    }
  }
</script>

<style scoped lang="scss">

.title{
  width: 100%;
  text-align: center;
  display: inline-block;
  height: 49px;
  margin-top: 30px;
}

.info-container{
  width: 100%;
  max-width: 900px;
  background: white;
  padding: 40px 40px;
  height: 80vh;
  text-align:center;
}

.comments-view {
  width: 100%;
  max-width: 330px;
  background: white;
  padding: 40px 20px;
  height: 80vh;
}

</style>
