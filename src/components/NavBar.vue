<template>

<div>
   
   <b-navbar toggleable="lg" type="light" variant="light" :sticky="true" >

    <img src="./../assets/logo.png" width="134px" height="63px">

    <div class = "all-navbar">
        <b-navbar-brand href="#" @click="goNews" class = "navb" >最新消息 <br>  News </b-navbar-brand>
        <b-navbar-brand href="#" class = "navb">關於瀧儀 <br>  About us</b-navbar-brand>
        <b-navbar-brand href="#" class = "navb">產品一覽 <br>  Products</b-navbar-brand>
        <b-navbar-brand href="#" class = "navb">核心技術<br>  Technology</b-navbar-brand>
        <b-navbar-brand href="#" class = "navb">投資人專區<br>  Invest</b-navbar-brand>
        <b-navbar-brand href="#" class = "navb">聯絡我們<br>  Contact us</b-navbar-brand>

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