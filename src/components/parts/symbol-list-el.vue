<template lang="html">

 <article class="symbol">

  <div class="text-container row-between">
    <span class="assistant">Nombre</span>
    <h2 class="title-list">{{data.name}}</h2>
    <h3 class="comments" v-html="comments(data.id).length"></h3>
    <span class="assistant">Divisa</span>
    <h3 class="currency">{{data.currency}}</h3>
    <span class="assistant">Familia de riesgo</span>
    <h3 class="family-risk">{{data.risk_family}}</h3>
    <router-link class="cover-link" :to="`/activo/${data.id}`"></router-link>
    <img src="/img/right-arrow.svg" class="open-arrow">
    
  </div>

</article>

</template>

<script lang="js">

  import {mapGetters} from 'vuex'

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
      ...mapGetters({
        comments : 'getComments'
      })
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
  width: 60%;
  display: inline-block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.currency{
  width: 10%;
  display: inline-block;
  font-weight: 600;
  text-align: center;
}

.family-risk{
  width: 15%;
  display: inline-block;
  text-align: center;
}

.comments{
  width: 15%;
  color: #333;
  font-size: 14px;
  text-align: center;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  -ms-align-items: center;
  align-items: center;
}

.comments::after{
  content: '';
  width: 16px;
  height: 20px;
  display: inline-block;
  margin-left: 5px;
  background: url(/img/write-letter.svg) center right/16px no-repeat;
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

.assistant{
  display: none;
}

@media screen and (max-width: 1023px){
  .title-list{
    width: 100%;
    margin-bottom: 10px;
    white-space: initial;
  }

  .family-risk{
    width: 100%;
    text-align: left;
  }

  .currency{
    width: 100%;
    text-align: left;
    margin-bottom: 10px;

  }
  
  .symbol{
    width: calc(50% - 10px);
    border: 1px solid #efefef;
    padding-right: 40px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .symbol:hover{
    box-shadow: none;
  }

  .symbol:nth-child(2n-1){
    margin-right: 0;
  }

  .assistant{
    display: inline-block;
  }
  
  .comments{
    position: absolute;
    right: 20px;
    bottom:20px;
    font-size: 18px;
    justify-content: flex-end;
  }
}

@media screen and (max-width: 767px){
  .symbol{
    width: 100%;
    margin-right: 0;
  }
}

</style>
