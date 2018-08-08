<template>
	<div id="app">
		<app-header></app-header>
		<router-view/>
	</div>
</template>

<script>

	import {mapActions} from 'vuex';

	import header from '@/components/parts/header'

	
	export default  {
		name: 'app',
		props: [],
		created() {
			 this.requestAllSymbols();
		},
		methods :{
			 ...mapActions(['requestAllSymbols'])
		},
		components : {
			'app-header' : header
		}
	}
</script>

<style lang="scss">
@import './assets/css/style.css';
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,500,700');
</style>
