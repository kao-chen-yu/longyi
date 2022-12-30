<template>

<div>
   
   <b-navbar fixed = "top" toggleable="lg" type="light" variant="light" >

    <div class = "all-navbar">
    <a href="#" @click="goHome">
      <font-awesome-icon :icon="['fas', 'house-user']" size="2x"  style = "color:black;"/>
      <span class= "nav-title">瀚升建設</span>
     </a>
        <b-navbar-brand href="#"  class = "navb">熱銷建案</b-navbar-brand>
        <b-navbar-brand href="#" @click="goInvest" class = "navb">建案一覽</b-navbar-brand>
        <b-navbar-brand href="#" @click="goContact" class = "navb">聯絡合作</b-navbar-brand>

    </div>
  </b-navbar>
</div>

</template>
<script>
    export default 
	{ 
	
	data() {return {}}, 
  
  methods: { 
	
		goNews(){
      this.$router.push({ path : '/longyi_news'})
    },
    goContact(){
      this.$router.push({ path : '/contact_us'})
    },
    goTech(){
      this.$router.push({ path : '/technology'})
    },
    goHome(){
      this.$router.push({ path : '/'})
    },
    goProducts(){
      this.$router.push({ path : '/products'})
    },
    goAboutLongyi(){
      this.$router.push({ path : '/about_longyi'})
    },
    goInvest(){
      this.$router.push({ path : '/invest'})
    }
	
	
	} 
	}
</script>

<style scope>
.nav-title {
    color: black;
    font-family: '微軟正黑體, "Microsoft JhengHei", Arial, Helvetica;' !important;
    font-weight: bold;
    font-size: x-large;
}
.all-navbar .navb{
  position: relative;
  left: 0px;
  color:#343a40;
  font-weight: bold;
  text-align:center;
}

.navbar-light .navbar-brand{
  color:#343a40 !important;
  font-size:15px;
  margin-left:20px;
}

.all-navbar{
    position: relative;
    font-family:'微軟正黑體, "Microsoft JhengHei", Arial, Helvetica;';
    left: 30%;
    margin-left:30%;
    color:#343a40;
}

.sticky-top{
    position: relative;
    left: 0px;
    font-size :medium;
    text-align:center;
    height:100px;
}

.bg-light {
   height : 100px;
   
}

</style>