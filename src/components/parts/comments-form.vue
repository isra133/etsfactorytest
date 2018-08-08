<template lang="html">

  <form class="comments-form" @submit.prevent="validateBeforeSubmit">

    <div class="input--container">
      <textarea v-model="text" v-validate="'required'" name="text" placeholder="Escribe aquí tus notas"></textarea>
      <span :class="['error']" v-if="!!clicked">{{ errors.first('text') }}</span>
    </div>

      <button class="btn">Añadir</button>


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
  padding: 0 20px;
  margin-top: 40px;
}

textarea{
  width: 100%;
  resize:none;
  resize: vertical;
  height: 40vh;
  padding: 10px;
  outline: none;
  border: 1px solid #efefef;
  font-size: 16px;
}
</style>
