<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>

	import {mapActions} from 'vuex';

	
	export default  {
		name: 'app',
		props: [],
		created() {
			 this.requestAllSymbols();
		},
		methods :{
			 ...mapActions(['requestAllSymbols'])
		}
	}
</script>

<style>
@import './assets/css/style.css';
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
</style>
