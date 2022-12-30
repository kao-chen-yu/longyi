<template>

<div class="back">

        <div class="images" style=" width: inherit;height: 750px; margin-left: 30%;">
        <p class = "text"> <span class = "title">在地人的堅持 台南人專屬尊榮建築公司<br> </span>
        <br> 建築是一種長期的承諾
        <br> 瀚升建設用最好的服務 最好的材料 最優惠的價值 把客戶當成家人 
        <br> 處理好每一間房子</p>    

        <div>
        </div>      
        </div>



</div>
</template>
<script defer src="https://use.fontawesome.com/releases/v5.0.10/js/all.js" integrity="sha384-slN8GvtUJGnv6ca26v8EzVaR9DC58QEwsIk9q1QXdCU8Yu8ck/tL/5szYlBbqmS+" crossorigin="anonymous"></script>

<script>
 import { Hooper, Slide , Pagination as HooperPagination , Navigation as HooperNavigation} from 'hooper';
 import 'hooper/dist/hooper.css';
  

export default {
  name: 'Home',
  components: {
      Hooper,
      Slide,
      HooperPagination,
      HooperNavigation
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
.text {
  font-family : '微軟正黑體';
  font-weight : bold;
  font-size: medium;
  color : white;
}
.title {
  font-size: 1.5rem;
  font-family : '微軟正黑體';
  font-weight : bold;
  font-style : normal;
}
.back{
  background: url('~@/assets/21289.jpg') center center no-repeat;
}
.images {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 20px;
}
h2 {
  color: #fff
}
#hoopers {
  height: 95vh;
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
