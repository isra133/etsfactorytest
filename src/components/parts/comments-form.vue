<template lang="html">

  <form class="comments-form">
    
    <div class="input--container">
      
      <textarea v-model="texto"></textarea>

      <button class="btn">Añadir</button>

    </div>

  </form>

</template>

<script lang="js">
  export default  {
    name: 'comments-form',
    props: [],
    mounted() {

    },
    data() {
      return {
        texto : ''
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .comments-form {

  }
</style>
