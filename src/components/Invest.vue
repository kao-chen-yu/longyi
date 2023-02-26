<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">服務項目</span>
        </div>
    </div>
    <div class="invest">
        <div>
            <b-list-group horizontal>
                <b-list-group-item href="#" @click="change('1')" id="button">建築設計/監造</b-list-group-item>
                <b-list-group-item href="#" @click="change('2')" id="button">危老重建</b-list-group-item>
                <b-list-group-item href="#" @click="change('3')" id="button">整建維護</b-list-group-item>
                <b-list-group-item href="#" @click="change('4')" id="button">室內裝修</b-list-group-item>
                <b-list-group-item href="#" @click="change('5')" id="button">室裝審查</b-list-group-item>
                </b-list-group>
        

        </div>

        
        <div class ="about_content1" v-show="show === '1'">
            
            <div class="contacts">
        
                <div class="footer-icon">
                    <b-icon icon="telephone-forward-fill" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">1.初步接洽</span>                  
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="chat-dots-fill" animation="fade" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">2.初步討論</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="chat-dots" animation="fade" font-scale="5"  ></b-icon> 
                    </br></br><span class = "icon-title">3.討論設計</span>
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="clipboard-check" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">4.簽約</span>
                    
                </div>

                <div class="footer-icon">
                
                    <b-icon icon="check2-circle"  font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">5.確認設計</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                   <b-icon icon="file-earmark-text-fill" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">6.請照</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="house-fill" animation="throb" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">7.施工/監造</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>                
                <div class="footer-icon">
                    <b-icon icon="house-fill" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">8.竣工，驗收</span>
                    
                </div>

            </div>
        </div>

        
        <div class ="about_content1" v-show="show === '2'">
            
            <div class="contacts">
        
                <div class="footer-icon">
                    <b-icon icon="telephone-forward-fill" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">1.初步接洽</span>                  
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="chat-dots-fill" animation="fade" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">2.重建說明會(一)</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="clipboard-check" font-scale="5"  ></b-icon> 
                    </br></br><span class = "icon-title">3.耐震評估送件/完成</span>
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="chat-dots-fill" animation="fade" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">4.重建說明會(二)</span>
                    
                </div>

                <div class="footer-icon">
                
                    <b-icon icon="check2-circle"  font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">5.重建計畫送件/核定</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                   <b-icon icon="house-door" font-scale="5"></b-icon>
                    </br></br><span class = "icon-title">6.正式重建</span>
                    
                </div>
                

            </div>
        </div>

        
        <div class ="about_content1" v-show="show === '3'">
            
            <div class="contacts">
        
                <div class="footer-icon">
                    <b-icon icon="telephone-forward-fill" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">1.初步接洽</span>                  
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="chat-dots-fill" animation="fade" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">2.初步溝通</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="chat-dots" animation="fade" font-scale="5"  ></b-icon> 
                    </br></br><span class = "icon-title">3.討論設計草案</span>
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="clipboard-check" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">4.簽約</span>
                    
                </div>

                <div class="footer-icon">
                
                    <b-icon icon="check2-circle"  font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">5.確認設計</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                   <b-icon icon="file-earmark-text-fill" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">6.請照</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="house-fill" animation="throb" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">7.施工/監造</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>                
                <div class="footer-icon">
                    <b-icon icon="house-fill" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">8.竣工，驗收</span>
                    
                </div>

            </div>
        </div>

        
        <div class ="about_content1" v-show="show === '4'">
            
            <div class="contacts">
        
                <div class="footer-icon">
                    <b-icon icon="telephone-forward-fill" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">1.初步接洽</span>                  
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="chat-dots-fill" animation="fade" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">2.丈量，溝通，提供設計方案</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="chat-dots" animation="fade" font-scale="5"  ></b-icon> 
                    </br></br><span class = "icon-title">3.討論設計方案</span>
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="clipboard-check" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">4.簽約</span>
                    
                </div>

                <div class="footer-icon">
                
                    <b-icon icon="check2-circle"  font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">5.合約服務內容</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                   <b-icon icon="house" animation="throb" font-scale="5"></b-icon>
                    </br></br><span class = "icon-title">6.施工/監造</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="house-fill"  font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">7.竣工，驗收</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>                
                <div class="footer-icon">
                    <b-icon icon="hammer" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">8.一年保固，售後服務</span>
                    
                </div>

            </div>
        </div>

        
        <div class ="about_content1" v-show="show === '5'">
            
            <div class="contacts">
        
                <div class="footer-icon">
                    <b-icon icon="telephone-forward-fill" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">1.初步接洽</span>                  
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="chat-dots-fill" animation="fade" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">2.提出報價單</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="chat-dots" animation="fade" font-scale="5"  ></b-icon> 
                    </br></br><span class = "icon-title">3.簽認報價單</span>
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                    <b-icon icon="clipboard-check" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">4.請圖與諮詢</span>
                    
                </div>

                <div class="footer-icon">
                
                    <b-icon icon="check2-circle"  font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">5.取得施工許可證</span>
                    
                </div>
                <div class="footer-icon">
                    <b-iconstack font-scale="5">
                    <b-icon stacked icon="caret-right-fill" shift-h="3"></b-icon>
                    </b-iconstack>                 
                </div>
                <div class="footer-icon">
                   <b-icon icon="file-earmark-text-fill" font-scale="5"  ></b-icon>
                    </br></br><span class = "icon-title">6.取得竣工合格證</span>
                    
                </div>
            

            </div>
        </div>

    
        </div>
    </div>


   

</div>
</template>

<script>



import Bread from '@/components/BreadCrumb'
export default {
  name: 'AboutLongyi',
  data(){
    return {
		banner: {
            backgroundImage:"url(" + require("./../assets/banner.jpg") + ")"
        },
        about:{
            backgroundImage:"url(" + require("./../assets/background.jpg") + ")"
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
.icon-title{
  font-weight: bolder;
  font-size: 1rem;
  text-align:center;
}
.icon-info{
  
  font-size: 1rem;
}
.banner_title .title{
    font-family: '微軟正黑體, "Microsoft JhengHei", Arial, Helvetica;';
}

.invest{
    
    height:500px;
}

.invest_menu #button_title{

    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:30px;
    font-weight:bold;
    padding-left:30px;

}

#button{

    background-color: gainsboro;
    font-size: xx-large;
    font-weight: bolder;
    text-align:center;
}
.invest h1{

    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}
.contacts{
    margin-left: 10%;
    height:500px;
}
.footer-icon{
    width: 10%;
    height: 10%;
    float: left;
    margin: 5% 2% 5% 2%;
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
    margin-top:10px;
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
