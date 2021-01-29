<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">產品介紹</span>
        </div>
    </div>
    
    <div class="products">
        <div class="prod_menu">
            <b-list-group>
                <b-list-group-item href="#" @click="change('1')" id="button">客製化低溫常壓電漿應用設計</b-list-group-item>
                <b-list-group-item href="#" @click="change('2')" id="button">醫療器材批發/製造</b-list-group-item>
                <b-list-group-item href="#" @click="change('3')" id="button">寵物精準大健康平台</b-list-group-item>
                </b-list-group>
        

        </div>

        <div class ="tech_content" v-if="show === '0'" style="margin-left: 50px;">
            <div >
                <h3>產品介紹</h3>
                這是一個測試用的網頁專門拿來看文字顯示是不是正確的
            </div>
            <a href="#">
            <b-card
                overlay
                img-src="https://picsum.photos/900/250/?image=1"
                img-alt="Card Image"
                text-variant="white"
                class = "tech_icon"
                @click="change('1')"
            >
                <b-card-text>
                客製化低溫常壓電漿應用設計
                </b-card-text>
            </b-card>
            </a>
            <a href="#">
            <b-card
                overlay
                img-src="https://picsum.photos/900/250/?image=2"
                img-alt="Card Image"
                text-variant="white"
                class = "tech_icon1"
                @click="change('2')"
            >
                <b-card-text>
                醫療器材批發/製造
                </b-card-text>
            </b-card>
            </a>
            <a href="#">
            <b-card
                overlay
                img-src="https://picsum.photos/900/250/?image=3"
                img-alt="Card Image"
                text-variant="white"
                class = "tech_icon2"
                @click="change('3')"
            >
                <b-card-text>
                寵物精準大健康平台
                </b-card-text>
            </b-card>
            </a>
        </div>
        <div class ="tech_content1" v-if="show === '1'">
            <b-card
                overlay
                img-src="https://picsum.photos/900/250/?image=3"
                img-alt="Card Image"
                text-variant="white"
                title="客製化低溫常壓電漿應用設計"
                img-height="400px"
            >
                <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
        </div>

        <div class ="tech_content1" v-if="show === '2'">
            <b-card
                overlay
                img-src="https://picsum.photos/900/250/?image=3"
                img-alt="Card Image"
                text-variant="white"
                title="醫療器材批發/製造"
                img-height="400px"
            >
                <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
        </div>

                <div class ="tech_content1" v-if="show === '3'">
            <b-card
                overlay
                img-src="https://picsum.photos/900/250/?image=3"
                img-alt="Card Image"
                text-variant="white"
                title="寵物精準大健康平台"
                img-height="400px"
            >
                <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                </b-card-text>
            </b-card>
        </div>
    </div>


    <FooterSample />

</div>
</template>

<script>


import FooterSample from '@/components/Footer.vue'
//import Bread from '@/components/BreadCrumb'
export default {
  name: 'Products',
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
        show:'0'
	}
  },
  components: {
        FooterSample,
        //Bread
  },
  methods:{
     change(change_num){
         
         this.show = change_num;
     }
  }
}
</script>


<style scope>



.products{
    
    height:500px;
}

.products h1{

    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}

.products h3{

    text-align: center;
    padding-top: 20px;
    
}
.text-center{
    background: rgb(202, 202, 202);
    border:brown;
    width:50%;
    margin:0 350px 0 400px;
}

.prod_menu{
    width:25%;
    float: left;
    height:inherit;
    margin-top:90px;
}

.prod_menu #button{
    background-color: unset;
}

.tech_content{
    float: left;
    height: 500px;
}

.tech_content h3{
    text-align:left;
    padding-top:50px;

}

.tech_content1 .text-white{
    width:600px;
    height: 100px;
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
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
