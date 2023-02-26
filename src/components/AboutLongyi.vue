<template>

<div >

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">關於喬威</span>
        </div>
    </div>
    
    
    <div class="abouts">
                        
        <div class="about_menu">
            <b-list-group>
                <b-list-group-item href="#" @click="change('1')" id="button">事務所介紹</b-list-group-item>
                <b-list-group-item href="#" @click="change('2')" id="button">喬威團隊成員</b-list-group-item>
                </b-list-group>
        

        </div>

        <div class ="about_content2" v-if="show === '1'">
            <div class="about_content">
                <h3>喬威事務所簡介</h3>
                <span style="font-size: larger;font-weight: bolder;">王金城建築師為本所主持建築師，其個人擁有30年建築規劃設計與監造管理之經驗，其工作團隊人員主要來自國內多所知名建築師事務所規劃設計人才、營造廠的資深專業人員，除了專擅於各類公共工程之工程規劃、設計、監造及專業管理等技術服務外，本事務所特別著重各階段之行政程序與業主需求，適時提供執行方案，以確保計畫均能「如期、如質、如價」的完成，提供最完整的專業服務。本工作團隊曾執行各類型工程服務工作，包括有學校、活動中心、文創園區、體育館、飯店及住宅大樓等規劃、設計及監造服務工作。</span>
            </div>
        </div>

        <div class ="about_content1" v-if="show === '2'">
            <div class="about_content">
                <h3>喬威事務所營運團隊</h3>
                
            
            <b-card 
            title="主持建築師：王金城"
            img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                現職：開業建築師
                建築物室內裝修專業技術人員 
                臺南市建築師公會會員
                土木技師
            </b-card-text>
            <b-card-text>
                專長：土木建築規劃設計
                工程監造
                建物安全鑑定
                專案管理(PCM)
            </b-card-text>
            </b-card>

            <b-card 
            title="建築師：王政荃"
            img-src="https://placekitten.com/300/300" img-alt="Card image" img-right class="mb-3">
            <b-card-text>
                現職：建築師
                建築物室內裝修專業技術人員 

            </b-card-text>
            <b-card-text>
                專長：建築規劃設計
                室內設計
                估價
                預算編列
            </b-card-text>
            </b-card>
            <b-card 
            title="設計兼品管工程師：王炳欽"
            img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                現職：建築師
                建築物室內裝修專業技術人員 

            </b-card-text>
            <b-card-text>
            專長：建築規劃設計
            室內設計
            估價
            預算編列
            </b-card-text>
            </b-card>

            <b-card 
            title="設計兼品管工程師：王炳欽"
            img-src="https://placekitten.com/300/300" img-alt="Card image" img-right class="mb-3">
            <b-card-text>
                現職：公共工程品管工程師 
                公共建築物設計身心障礙者行動與使用之設施及設備勘檢人員
                安全衛生管理人員

            </b-card-text>
            <b-card-text>
               專長：建築規劃設計
                工程監造
                估價預算
                進度編列
            </b-card-text>
            </b-card>
            <b-card 
            title="設計工程師：王錦雲"
            img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                現職：
            </b-card-text>
            <b-card-text>
                專長：建築規劃設計
                估價
            </b-card-text>
            </b-card>

            <b-card 
            title="設計工程師：楊子漩"
            img-src="https://placekitten.com/300/300" img-alt="Card image" img-right class="mb-3">
            <b-card-text>
                現職：

            </b-card-text>
            <b-card-text>
                專長：建築規劃設計
                電腦文書處理

            </b-card-text>
            </b-card>
                        </b-card>
            <b-card 
            title="設計工程師：林子翔 "
            img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                現職：專案經理
            </b-card-text>
            <b-card-text>
               專長：建築規劃設計
                工程監造
            </b-card-text>
            </b-card>

            <b-card 
            title="設計工程師：王紫姍"
            img-src="https://placekitten.com/300/300" img-alt="Card image" img-right class="mb-3">
            <b-card-text>
                現職：

            </b-card-text>
            <b-card-text>
                專長：建築規劃設計
                室內設計

            </b-card-text>
            </b-card>
                        </b-card>
            <b-card 
            title="行政管理：葉秋仙"
            img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                現職：
            </b-card-text>
            <b-card-text>
                專長：內部行政管理
                電腦文書處理

            </b-card-text>
            </b-card>

            <b-card 
            title="行政管理：王政傑"
            img-src="https://placekitten.com/300/300" img-alt="Card image" img-right class="mb-3">
            <b-card-text>
                現職：

            </b-card-text>
            <b-card-text>
               專長：內部行政管理
                電腦文書處理

            </b-card-text>
            </b-card>
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
.banner_title .title{
    font-family: '微軟正黑體, "Microsoft JhengHei", Arial, Helvetica;';
}



.about_content1{
    height:4000px;
} 

.about_content2{
    height:500px;
}
.about_menu #button_title{

    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:30px;
    font-weight:bold;
    padding-left:30px;

}
.about_menu #button{
    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:20px;
    font-weight:bold;
    margin-left:10px;
}

.abouts h1{

    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}

.abouts h3{
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

.about_menu{
    width:25%;
    float: left;
    height:inherit;
    margin-top:10px;
}

.tech_content{
    float: left;
    
    height: 500px;
}

.tech_content h3{
    text-align:left;
    padding-top:0px;

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

.tech_content .text-white{
    width:200px;
    height: 100px;
    float:left;
    margin:130px 20px 10px 20px;
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
    margin-top : 50px;
    background:rgba(255,0,0,0);
}

.about_content1 .about_content{
    float: left;
    padding:0px 80px  !important;
    width:70%;
}

.about_content2 .card{
    margin-top : 50px;
    background:rgba(255,0,0,0);
}

.about_content2 .about_content{
    float: left;
    padding:0px 80px  !important;
    width:70%;
}
.card-title {
    font-weight: 1000;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
