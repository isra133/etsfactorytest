<template lang="html">

  <article class="comment-el">

    <h2 v-if="!!!editing">{{data.text}}</h2>  
    <div v-else class="contenedor-input">
      <input type="text" v-model="text">
      <button @click="submitEdit">Guardar</button>
    </div>
    <p>{{data.date | dateToString}}</p>
    <p>{{data.date}}</p>

    <button @click="requestEraseComment(data)">Borrar</button>

    <button @click="toggleEditing">Editar</button>

    <button @click="toggleFav(data)">Favorito {{data.fav}}</button>

  </article>

</template>

<script lang="js">

  import {mapActions} from 'vuex'

  export default  {
    name: 'comment-el',
    props: ['data'],
    mounted() {
      this.text = this.data.text;
    },
    data() {
      return {
        editing : false,
        text : ''
      }
    },
    methods: {
      ...mapActions(['requestEraseComment', 'editComment', 'toggleFav']),
      toggleEditing : function(){
        this.editing = !this.editing;
      }, 
      submitEdit : function(){

        let comment = this.data;

        comment.text = this.text;

        this.editComment(comment).then(response =>{
          (response) ? this.editing = false : '';
        });
      }
    },
    filters: {
      dateToString : function(value){
        let months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
        value = new Date(value);
        let dateString = `${value.getDate()} ${months[value.getMonth()]}, ${value.getFullYear()}`;
        return dateString;
      }
    }
  }
</script>

<style scoped lang="scss">
.comment-el {

}
</style>
