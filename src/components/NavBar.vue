<template>

<div>
   
   <b-navbar toggleable="lg" type="light" variant="light" :sticky="true" >
    <a href="#" @click="goHome">
      <img src="./../assets/logo.png" width="134px" height="63px">
     </a>
    <div class = "all-navbar">
        <b-navbar-brand href="#" @click="goNews" class = "navb" >最新消息  </b-navbar-brand>
        <b-navbar-brand href="#" @click="goAboutLongyi" class = "navb">關於瀧儀</b-navbar-brand>
        <b-navbar-brand href="#" @click="goProducts" class = "navb">產品一覽 </b-navbar-brand>
        <b-navbar-brand href="#" @click="goTech" class = "navb">核心技術</b-navbar-brand>
        <b-navbar-brand href="#" @click="goInvest" class = "navb">投資人專區</b-navbar-brand>
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

<style scope>

.all-navbar .navb{
  position: relative;
  left: 0px;
  font-size :large;
  text-align:center;
}

.all-navbar{
    position: relative;
    font-family:'微軟正黑體', Open Sans;
    left: 50px;
    margin-left:300px;
}

.sticky-top{
    position: relative;
    left: 0px;
    font-size :medium;
    text-align:center;
}
</style>