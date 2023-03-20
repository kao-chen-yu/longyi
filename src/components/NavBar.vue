<template>

<div>
   
   <b-navbar fixed = "top" toggleable="lg"   style="background-color: rgb(69 65 92);">
    <a href="#" @click="goHome">
      <img src="./../assets/logo.png" width="100px" height="100px">
     </a>
     <div>
     <h3 style="color: white;margin: 20px 60px 10px 0px;">喬威建築師事務所</h3>
     </div>
    <div class = "all-navbar">
        
        <b-navbar-brand href="#" @click="goAboutLongyi" class = "navb">關於喬威</b-navbar-brand>
        <b-navbar-brand href="#" @click="goTech" class = "navb">精選作品</b-navbar-brand>
        <b-navbar-brand href="#" @click="goInvest" class = "navb">服務項目</b-navbar-brand>
        <b-navbar-brand href="#" @click="goContact" class = "navb">聯絡我們</b-navbar-brand>

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

.all-navbar .navb{
  position: relative;
  left: 0px;
  color:#063456;
  font-weight: bold;
  text-align:center;
}

.navbar-light .navbar-brand{
  color:white !important;
  font-size:20px;
  margin-left:12px;
}

.all-navbar{
    position: relative;
    font-family:'微軟正黑體, "Microsoft JhengHei", Arial, Helvetica;';
    left: 5vw;
    margin-left:20vw;
    color:#063456;
}

.sticky-top{
    position: relative;
    left: 0px;
    font-size :medium;
    text-align:center;
    height:100vh;
}

.bg-light {
   height : 100px;
}

</style>