<template>
<div id="app">		
		<Navbar />	
    <router-view/>
    
</div>
</template>

<script>

import Navbar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {Navbar,Footer},
}
</script>

