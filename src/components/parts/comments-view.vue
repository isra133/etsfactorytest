<template lang="html">

  <section class="comments-view">
    <comments-list></comments-list>
    <comments-form></comments-form>
  </section>

</template>

<script lang="js">

 import commentsForm from '@/components/parts/comments-form';
 import commentsList from '@/components/parts/comments-list';

 export default  {
  name: 'comments-view',
  props: [],
  mounted() {

  },
  data() {
    return {

    }
  },
  components: {
    'comments-form' : commentsForm,
    'comments-list' : commentsList,
  },
  computed: {

  }
}
</script>

<style scoped lang="scss">
.comments-view {
  width: 100%;
  max-width: 330px;
  background: white;
  padding: 40px 20px;
}
</style>
