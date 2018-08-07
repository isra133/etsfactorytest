<template lang="html">

 <article class="symbol">
   
    <h2>{{data.name}}</h2>
    <h3>{{data.currency}}</h3>
    <h4>{{data.risk_family}}</h4>
    <router-link :to="`/activo/${data.id}`">Ver</router-link>

 </article>

</template>

<script lang="js">
  export default  {
    name: 'symbol-list-el',
    props: ['data'],
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
  .symbol-list-el {

  }
</style>
