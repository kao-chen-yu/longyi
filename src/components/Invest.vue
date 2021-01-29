<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">投資人專區</span>
        </div>
    </div>
    
    <div class="invest">
        <div class="invest_menu">
            <b-list-group>
                <b-list-group-item href="#" @click="change('1')" id="button">營運方針</b-list-group-item>
                <b-list-group-item href="#" @click="change('2')" id="button">關係企業</b-list-group-item>
                </b-list-group>
        

        </div>

        <div class ="about_content1" v-if="show === '1'">
            <div class="about_content">
                <h3>營運方針</h3>
                <span>這是營運方針，很神奇的，快來看看</span>
            </div>
        </div>

        <div class ="about_content1" v-if="show === '2'">
            <div class="about_content">
                <h3>關係企業</h3>
                <span>這是關係企業，很神奇的，快來看看</span>
            </div>
        </div>


    </div>


    <FooterSample />

</div>
</template>

<script>


import FooterSample from '@/components/Footer.vue'
//import Bread from '@/components/BreadCrumb'
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

.banner_title .title{
    font-family: "TaipeiSansTCBeta-Regular";
}

.invest{
    
    height:500px;
}

.invest_menu #button{
    background-color: unset;
}
.invest h1{

    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
}

.invest h3{

    
    padding-top: 20px;
    
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
    margin-top:90px;
}

.tech_content{
    float: left;
    
    height: 500px;
}

.tech_content h3{
    text-align:left;
    padding-top:50px;

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
    background:rgba(255,0,0,0);
}

.about_content1 .about_content{
    float: left;
    padding:50px;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
