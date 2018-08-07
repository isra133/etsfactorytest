<template lang="html">

  <form class="comments-form" @submit.prevent="validateBeforeSubmit">

    <div class="input--container">
      <textarea v-model="text" v-validate="'required'" name="text"></textarea>
      <span :class="['error']">{{ errors.first('text') }}</span>
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
    props: [],
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
        this.$validator.validateAll().then(canSend => {
          (canSend) ? this.sendComment(this.text) : '';
        });
      }
    },
    computed: {

    }
  }
</script>

<style scoped lang="scss">
.comments-form {

}
</style>
