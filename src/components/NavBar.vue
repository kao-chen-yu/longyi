<template>

<div>
   
   <b-navbar toggleable="lg" type="light" variant="light" :sticky="true" >
    <a href="#" @click="goHome">
      <img src="./../assets/logo.png" width="134px" height="63px">
     </a>
    <div class = "all-navbar">
        <b-navbar-brand href="#" @click="goNews" class = "navb" >最新消息 <br>  News </b-navbar-brand>
        <b-navbar-brand href="#" @click="goAboutLongyi" class = "navb">關於瀧儀 <br>  About us</b-navbar-brand>
        <b-navbar-brand href="#" @click="goProducts" class = "navb">產品一覽 <br>  Products</b-navbar-brand>
        <b-navbar-brand href="#" @click="goTech" class = "navb">核心技術<br>  Technology</b-navbar-brand>
        <b-navbar-brand href="#" @click="goInvest" class = "navb">投資人專區<br>  Invest</b-navbar-brand>
        <b-navbar-brand href="#" @click="goContact" class = "navb">聯絡我們<br>  Contact us</b-navbar-brand>

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
      this.$router.push({ name : 'LongyiNews'})
    },
    goContact(){
      this.$router.push({ name : 'ContactUs'})
    },
    goTech(){
      this.$router.push({ name : 'Technology'})
    },
    goHome(){
      this.$router.push({ name : 'Home'})
    },
    goProducts(){
      this.$router.push({ name : 'Products'})
    },
    goAboutLongyi(){
      this.$router.push({ name : 'AboutLongyi'})
    },
    goInvest(){
      this.$router.push({ name : 'Invest'})
    }
	
	
	} 
	}
</script>

<style>

.all-navbar .navb{
  position: relative;
  left: 0px;
  font-size :medium;
  text-align:center;
}

.all-navbar{
    position: relative;
    font-family:'微軟正黑體', Open Sans;
    left: 50px;
    margin-left:20px;
}

.sticky-top{
    position: relative;
  left: 0px;
  font-size :medium;
  text-align:center;
}
</style>