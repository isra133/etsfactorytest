<template lang="html">

  <div>

    <h2 class="title">Notas guardadas</h2>
    <div class="comment-list column-start">
      <template v-for="(comment, key) in comments(id)">
        <comment :data="comment"></comment>
      </template>
    </div>
    <template v-if="comments(id).length == 0">
      <p class="no-comments">No tienes nada guardado en este activo</p>
    </template>

  </div>

</template>

<script lang="js">

  import {mapGetters} from 'vuex';

  import comment from '@/components/parts/comment-el';

  export default  {
    name: 'comments-list',
    props: ['id'],
    mounted() {

    },
    data() {
      return {

      }
    },
    components: {
      'comment' : comment
    },
    computed: {
      ...mapGetters({
        comments : 'getComments'
      })
    }
  }
</script>

<style scoped lang="scss">
.title{
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
}

.comment-list{
  max-height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 0 10px;
}

.comment-list::-webkit-scrollbar-track
{
  background-color: #F5F5F5;
  border-radius: 20px;
}

.comment-list::-webkit-scrollbar
{
  width: 10px;
  background-color: #d0d0d0;
  border-radius: 20px;
}

.comment-list::-webkit-scrollbar-thumb
{
  background-color: #d0d0d0;
  border-radius: 20px;
}


.no-comments{
  width: 100%;
  text-align: center;
  font-size: 12px;
  margin: 0 auto;
  margin-bottom: 50px;
  color: #333;
  opacity: .7;
  max-width: 200px;
}

</style>
