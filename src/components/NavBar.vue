<template>

<div>
   
   <b-navbar toggleable="lg" type="light" variant="light" :sticky="true" >

    <img src="./../assets/logo.png" width="100px" height="50px">

    <div class = "all-navbar">
        <b-navbar-brand href="#" class = "navbar" >最新消息 <br>  News </b-navbar-brand>
        <b-navbar-brand href="#" class = "navbar">關於瀧儀 <br>  About us</b-navbar-brand>
        <b-navbar-brand href="#" class = "navbar">產品一覽 <br>  Products</b-navbar-brand>
        <b-navbar-brand href="#" class = "navbar">核心技術<br>  Technology</b-navbar-brand>
        <b-navbar-brand href="#" class = "navbar">投資人專區<br>  Invest</b-navbar-brand>
        <b-navbar-brand href="#" class = "navbar">聯絡我們<br>  Contact us</b-navbar-brand>

    </div>
  </b-navbar>
</div>

</template>
<script>
    export default 
	{}
</script>

<style>

.navbar{
  position: relative;
  left: 30px;
  
  text-align:center;
}

.all-navbar{
    position: relative;
    font-family:'微軟正黑體', Open Sans;
    left: 50px;
    margin-left:20px;
}
</style>