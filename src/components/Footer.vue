<template>

<div>
   
     <footer>
        <div class="footer">
            <div class="container">
                <img class="logo" src="./../assets/logo.png">
                <div>
                    <div class="footer-text">
                    <p>瀧儀生醫科股份有限公司© 2020 ALL RIGHTS RESERVED</p>
                    <p>82151高雄市路竹區北嶺里路科五路92號4樓B室｜</p>
                    <p>Tel：07-695-5080｜Fax:07-695-5082 </p>
                    <p>Email:OOXXOOX@gmail.com</p>
                    </div>
                  <div class="footer-icon">
                        <font-awesome-icon class="icon" :icon="['fab', 'facebook']" size="2x" />
                        <font-awesome-icon class="icon" :icon="['fab', 'instagram']" size="2x"/>
                        <font-awesome-icon class="icon" :icon="['fab', 'youtube']" size="2x" style = "color:red;"/>
                  </div>
                </div>
            </div>
        </div>
    </footer>

</div>

</template>
<script>
    export default 
	{}
</script>

<style>

.footer {
   
   left: 0;
   bottom: 0;
   width: 100%;
   height: 200px;
   background-color: rgb(3, 91, 162);
   color: white;
   
}

.footer .logo {
    margin-top : 30px;
    float:left;

}

.footer .footer-text{
  padding-top:30px;
  width:50%;
  margin-left:100px;
  margin-right:0px;
  float: left;
}

.footer .footer-icon{
  padding-top:30px;
  width:15%;
  margin-right:0px;
  float: right;
}

.footer-icon .icon{
      margin-right:5px;
}
</style>