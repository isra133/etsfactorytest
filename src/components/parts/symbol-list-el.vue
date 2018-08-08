<template lang="html">

 <article class="symbol">

  <div class="text-container row-between">
    <h2 class="title-list">{{data.name}}</h2>
    <h3 class="currency">{{data.currency}}</h3>
    <h4 class="family-risk">{{data.risk_family}}</h4>
    <router-link class="cover-link" :to="`/activo/${data.id}`"></router-link>
    <img src="/img/right-arrow.svg" class="open-arrow">
  </div>

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

.symbol{
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #efefef;
  text-align: left;
  position: relative;
  transition: .3s;
  overflow: hidden;
}
.symbol:hover{
  box-shadow: -2px 2px 7px 3px rgba(0, 0, 0, 0.05);
  z-index: 3;
}


.title-list{
  font-size: 18px;
  font-weight: 500;
  width: 70%;
  display: inline-block;
}

.currency{
  width: 10%;
  display: inline-block;
  font-weight: 600;
  text-align: center;
}

.family-risk{
  width: 20%;
  display: inline-block;
  text-align: center;
}

.open-arrow{
  width: 13px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%) translateX(100px);
  will-change:transform;
  transition: .3s;
  transition-delay: 0s;
}

.symbol:hover .open-arrow{
  transform: translateY(-50%) translateX(0);
  transition: .3s;
  transition-delay: .5s;
}

</style>
