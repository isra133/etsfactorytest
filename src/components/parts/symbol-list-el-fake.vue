<template lang="html">

  <article class="symbol-list-el-fake">
    <span class="name"><figure></figure></span>
    <span class="currency"><figure></figure></span>
    <span class="risk_family"><figure></figure></span>
  </article>

</template>

<script lang="js">
  export default  {
    name: 'symbol-list-el-fake',
    props: [],
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
article{
 width: 100%;
 padding: 20px;
 border-bottom: 1px solid #efefef;
 text-align: left;
 position: relative;
 transition: .3s;
 overflow: hidden;
}

article span{
  height: 24px;
  display: inline-block;
  width: 100%;
  text-align: center;
}

article span figure{
  width: 80%;
  display: inline-block;
  height: 24px;
  -webkit-animation: loadAnimation 2s ease infinite;
  -moz-animation: loadAnimation 2s ease infinite;
  animation: loadAnimation 2s ease infinite;
  background: linear-gradient(274deg, #efefef, #f8f9fa);
  background-size: 400% 400%;
}

article .name{
  width: 70%;
  text-align: left;
}

article .name figure{
  width: 90%; 
}

article .currency{
  width: 10%;
}

article .risk_family{
  width: 20%;
}

</style>
