<template>

<div>

    <div class = "nav" >

    </div>
    <div class="invest">
        <div class="invest_menu">
            <b-list-group>
                <b-list-group-item href="#" @click="change('1')" id="button_title">建案一覽</b-list-group-item>
                <b-list-group-item href="#" @click="change('1')" id="button">鑫滿意</b-list-group-item>
                </b-list-group>
        

        </div>

        <div class ="about_content1" v-show="show === '1'">
            <div class="about_content">

                <h3>建案 - 鑫滿意</h3><br>

                    <hooper id = "hoopers" :settings="hooperSettings">
                    <slide>
                        <div class="images">
                        <img src="./../assets/b1/1.jpg" style="height:110vh;width:100%">
                        </div>
                    </slide>
                    <slide>          
                        <div class="images">
                        <img src="./../assets/b1/2.jpg" style="height:110vh;width:100%">
                        </div> 
                    </slide>
                    <slide>          
                        <div class="images">
                        <img src="./../assets/b1/3.jpg" style="height:110vh;width:100%">
                        </div>       
                    </slide>
                    <slide>  
                        <div class="images">
                        <img src="./../assets/b1/4.jpg" style="height:110vh;width:100%">
                        </div> 
                    </slide>
                    <slide>     
                        <div class="images">
                        <img src="./../assets/b1/5.jpg" style="height:110vh;width:100%">
                        </div>
                    </slide>
                    <slide>     
                        <div class="images">
                        <img src="./../assets/b1/6.jpg" style="height:110vh;width:100%">
                        </div>
                    </slide>
                    <slide>     
                        <div class="images">
                        <img src="./../assets/b1/7.jpg" style="height:110vh;width:100%">
                        </div>
                    </slide>
                    <slide>     
                        <div class="images">
                        <img src="./../assets/b1/8.jpg" style="height:110vh;width:100%">
                        </div>
                    </slide>
                    <slide>     
                        <div class="images">
                        <img src="./../assets/b1/9.jpg" style="height:110vh;width:100%">
                        </div>
                    </slide>
                    <slide>     
                        <div class="images">
                        <img src="./../assets/b1/10.jpg" style="height:110vh;width:100%">
                        </div>
                    </slide>
                        <hooper-navigation slot="hooper-addons">
                <svg slot="hooper-prev" class="svg-icon" viewBox="0 0 20 20" width="30px" height="30px" fill="gray">
                    <path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path>
                </svg>
                <svg slot="hooper-next" class="svg-icon" viewBox="0 0 20 20" width="30px" height="30px" fill="gray">
                    <path d="M12.522,10.4l-3.559,3.562c-0.172,0.173-0.451,0.176-0.625,0c-0.173-0.173-0.173-0.451,0-0.624l3.248-3.25L8.161,6.662c-0.173-0.173-0.173-0.452,0-0.624c0.172-0.175,0.451-0.175,0.624,0l3.738,3.736C12.695,9.947,12.695,10.228,12.522,10.4 M18.406,10c0,4.644-3.764,8.406-8.406,8.406c-4.644,0-8.406-3.763-8.406-8.406S5.356,1.594,10,1.594C14.643,1.594,18.406,5.356,18.406,10M17.521,10c0-4.148-3.374-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.147,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.147,17.521,10"></path>
                </svg>
                        </hooper-navigation>
                        
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
                    </hooper>
                <br><hr style="border:2px double #e8e8e8"/>
                <h4>基本資料</h4>
                
                <b-container>
                  <b-row>
                    <b-col>建案規畫 : 透天別墅</b-col>
                    <b-col>房間規劃 : 4 ~ 5 房</b-col>
                </b-row>
                <b-row>
                    <b-col>地坪 : 32~37坪</b-col>
                    <b-col>建坪 : 53~67坪</b-col>
                </b-row>
                <b-row>
                    <b-col>面寬 : 5.25~5.85米</b-col>
                    <b-col>總戶數 : 5戶</b-col>
                </b-row>
                <b-row>
                    <b-col>坐向 : 坐西北朝東南</b-col>
                    <b-col>基地面積 : 約 171坪</b-col>
                </b-row>
                <b-row>
                    <b-col>地址 : 台南市安南區城安東街25巷2號</b-col>
                </b-row>
                </b-container>
                <br>
                <h4>車位規劃</h4>
                
                <b-container>
                  <b-row>
                    <b-col>停車方式 : 前院停車</b-col>
                    <b-col>車位總數 : 1~2個(每戶)</b-col>
                </b-row>
                </b-container>
                <br>
                <h4>特色描述</h4>
                
                <b-container>
                  <b-row>
                    <b-col>本案場位於土城重劃區內,經台江大道及濱海公路連接國8,國1高速公路到達台南科學園區及台南科技工業區,上班交通便利,建案附近有郵局,土城傳統市場,全聯福利中心,7-11超商,等等生活機能佳,</b-col>
                </b-row>
                </b-container>
            </div>
        </div>

        <div class ="about_content1" v-show="show === '2'">
            <div class="about_content">
                <h3>關係企業</h3>
                <span>這是關係企業，很神奇的，快來看看</span>
            </div>
        </div>


    </div>


   

</div>
</template>

<script>



import Bread from '@/components/BreadCrumb'
 import { Hooper, Slide , Pagination as HooperPagination , Navigation as HooperNavigation} from 'hooper';
 import 'hooper/dist/hooper.css';

export default {
  name: 'AboutLongyi',
  data(){
    return {
		 hooperSettings: {
          infiniteScroll: true,
          centerMode: true,

          wheelControl:false,
          
      },
        about:{
            backgroundImage:"url(" + require("./../assets/bg.png") + ")"
        },
        form: {
          email: '',
          name: '',
          message: ''
        },
        show:'1'
	}
  },
  components: {
        Hooper,
      Slide,
      HooperPagination,
      HooperNavigation,
        Bread
  },
  methods:{
     change(change_num){
         
         this.show = change_num;
     }
  }
}
</script>


<style scope>
.nav {
    height:100px;
}
.banner_title .title{
    font-family: '微軟正黑體, "Microsoft JhengHei", Arial, Helvetica;';
}
#hoopers {
  margin-left: 10%;
  width:  80%;
  height: 50%;
}
.invest{
    height:1000px;
}

.invest_menu #button_title{

    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:30px;
    font-weight:bold;
    padding-left:30px;

}

.invest_menu #button{
    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:20px;
    font-weight:bold;
    margin-left:10px;
}
.invest h1{

    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}

.invest h3{
    padding-bottom:20px;
    border-bottom:2px solid rgba(0, 0, 0, 0.125);
    padding-top: 20px;
    font-weight:bold;
    
}
.text-center{
    background: rgb(202, 202, 202);
    border:brown;
    width:50%;
    margin:0 350px 0 400px;
}

.invest_menu{
    width:25%;
    float: left;
    height:inherit;
    margin-top:1%;
}



.about_content1 .text-white{
    width:600px;
    height: 400px;
    float:left;
    margin:50px 20px 10px 20px;
}

.card-img{
    opacity: 0.8;
}





.tech_icon .card-img{
    width:200px;
    height: 100px;
    float:left;
}

.tech_icon1 .card-img{
    width:200px;
    height: 100px;
    float: left;
}

.tech_icon2 .card-img{
    width:200px;
    height: 100px;
    float: right;
} 

.about_content1 .card{
    background:rgba(255,0,0,0);
}

.about_content1 .about_content{
    float: left;
    padding:0px 80px  !important;
    width:70%;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
