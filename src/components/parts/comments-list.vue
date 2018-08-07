<template lang="html">

  <div>

    <template v-for="(comment, key) in comments(id)">
      <comment :data="comment"></comment>
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
.comments-list {

}
</style>
