<template lang="html">

  <form class="comments-form" @submit.prevent="validateBeforeSubmit">

    <div class="input--container">
      <textarea v-model="text" v-validate="'required'" name="text" placeholder="Escribe aquí tus notas"></textarea>
      <span :class="['error']" v-if="!!clicked">{{ errors.first('text') }}</span>
    </div>

      <button class="btn-action">Añadir</button>


  </form>

</template>



<script lang="js">

  import Vue from 'vue';
  import VeeValidate from 'vee-validate';

  import {mapActions} from 'vuex';

  Vue.use(VeeValidate);

  export default  {
    name: 'comments-form',
    props: ['id'],
    mounted() {

    },
    data() {
      return {
        text : '',
        clicked : ''
      }
    },
    methods: {
      ...mapActions(['sendComment']),
      validateBeforeSubmit : function(){

        this.clicked = true;

        this.$validator.validateAll().then(canSend => {
          if(canSend){

            let data = {
              text : this.text,
              id : this.id
            };

            this.sendComment(data).then(response => {
              if(response){
                this.clicked = false;
                this.text = '';
              }
            });

          }
        });
      }
    },
    computed: {

    }
  }
</script>

<style scoped lang="scss">

.comments-form{
  margin-top: 40px;
}

textarea{
  width: 100%;
  resize:none;
  height: 30vh;
  padding: 15px;
  outline: none;
  background:#f8f9fa;
  border: 1px solid #ededed;
  font-size: 16px;
}


</style>
