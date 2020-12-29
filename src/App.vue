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

<style>
nav.breadcrumbs ul {
            list-style: none;
            margin: 0;
            padding: 0;
}
nav.breadcrumbs ul li {
            display: inline-block;
}
nav.breadcrumbs ul li:before {
   content: ' | ';
            margin-left: 5px;
}
nav.breadcrumbs ul li:first-child:before {
            display: none;
}
body{font-family: arial,"Microsoft JhengHei","微軟正黑體",sans-serif !important;}

</style>

