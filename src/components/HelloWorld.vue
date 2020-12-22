<template>

<div>

   <hooper :settings="hooperSettings">
      <slide>
        <div class="images">
          <img src="./../assets/logo.png">
        </div>
      </slide>
      <slide>          
        <div class="images">
          <img src="./../assets/1.jpg">
        </div> 
      </slide>
      <slide>          
        <div class="images">
          <img src="./../assets/2.jpg">
        </div>       
      </slide>
      <slide>  
        <div class="images">
          <img src="./../assets/1.jpg">
        </div> 
      </slide>
      <slide>     
        <div class="images">
          <img src="./../assets/1.jpg">
        </div>
      </slide>
        <hooper-navigation slot="hooper-addons"></hooper-navigation>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper>

    <FooterSample />

</div>
</template>
<script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+" crossorigin="anonymous"></script>

<script>
 import { Hooper, Slide , Pagination as HooperPagination , Navigation as HooperNavigation} from 'hooper';
 import 'hooper/dist/hooper.css';
  import FooterSample from './Footer.vue';

export default {
  name: 'HelloWorld',
  components: {
      Hooper,
      Slide,
      HooperPagination,
      HooperNavigation,
      FooterSample
    },
  data () {
    return {
      hooperSettings: {
          infiniteScroll: true,
          centerMode: true,
          autoPlay: true,
          playSpeed: 1000,
          wheelControl:false,
          
      },
      
      
    }

    
  }
}
</script>

<style>
.images {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
}
h2 {
  color: #fff
}
.hooper {
  height: 80vh;
}

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
