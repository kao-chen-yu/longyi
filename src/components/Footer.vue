<template>

<div>
   
     <footer>
        <div class="footer">
            <div class="container">
                <img class="logo" src="./../assets/logo.png">
                <div>
                    <div class="footer-text">
                    <p>龍儀科技 Longyi .</p>
                    <p>高雄市路竹區路科五路92號4樓A室.</p>
                    <p>Tel. +886-7-6955698.</p>
                    <p>Mobile. +886-968391792.</p>
                    <p>Email. +886-968391792.</p>
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
   height: 350px;
   background-color: rgb(3, 91, 162);
   color: white;
   
}

.footer .logo {
    margin-top : 30px;

}

.footer .footer-text{
  padding-top:10px;
  width:50%;
  margin-right:0px;
  float: left;
}

.footer .footer-icon{
  padding-top:10px;
  width:30%;
  margin-right:0px;
  float: right;
}

.footer-icon .icon{
      margin-right:5px;
}
</style>