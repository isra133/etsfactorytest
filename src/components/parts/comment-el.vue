<template lang="html">

  <article class="comment-el" :fav="data.fav">

    <p class="fecha">{{data.date | dateToString}}</p>
    <h2 v-if="!!!editing">{{data.text}}</h2>  
    <div v-else class="contenedor-input">
      <textarea v-model="text"></textarea>
      <button @click="submitEdit">Guardar</button>
    </div>

    <button @click="requestEraseComment(data)">Borrar</button>

    <button @click="toggleEditing">Editar</button>

    <button class="favorito" :fav="data.fav" @click="toggleFav(data)">Marcar como favorito</button>

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
  border-bottom: 1px solid #efefef;
  width: 100%;
  padding: 20px;
  text-align: left;
  position: relative;
}
.comment-el[fav="true"]{
  -webkit-order: -1;
  -moz-order: -1;
  -ms-order: -1;
  -o-order: -1;
  order: -1;
}

.fecha{
  font-size: 13px;
  width: 100%;
  display: inline-block;
  margin-bottom: 2px;
}


h2{
  line-height: 30px;
  font-size: 20px;
}

.contenedor-input textarea{
  line-height: 30px;
  padding: 0 10px;
  border: 1px solid #efefef;
  font-size: 16px;
  width: 100%;
  display: inline-block;
  outline: none;
}

.favorito{
  width: 100px;
  height: 100px;
  background: url("/img/heart.png") no-repeat;
  background-position: 0 0;
  cursor: pointer;
  transition: background-position 1s steps(28);
  transition-duration: 0s;
  position: absolute;
  right: -20px;
  top: -20px;
  z-index: 10;
  border: none;
  outline: none;
  transform: scale(.7);
  opacity: .5;
  font-size: 0;
}

.comment-el:hover .favorito{
  opacity: 1;
}

.favorito[fav="true"]{
  transition-duration: 1s;
  background-position: -2800px 0;
  opacity: 1;
}

</style>
