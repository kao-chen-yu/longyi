<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">精選作品</span>
        </div>
    </div>
    
    <div class="technologies">

        <div class ="tech_content1" v-show="show === '1'">
            <h1 v-show="sub_show === '1'">精選作品</h1>
               <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="4000"
                controls
                indicators
                background="#ababab"
                img-width="1024"
                img-height="480"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
                v-show="sub_show === '1'"
                >
                <!-- Text slides with image -->
                
                <b-carousel-slide
                    v-for="item in carouselItems"
                    :key="item.id"
                    :caption="item.text"
                    :img-src="item.image"
                ></b-carousel-slide>

                <p  class="mt-4">
                    坪數 #: {{ slide }}<br>
                    Sliding: {{ sliding }}
                </p>
                </b-carousel>

                

        </div>




    </div>


</div>
</template>

<script>

export default {
  name: 'Technology',
  data(){
    return {
		banner: {
            backgroundImage:"url(" + require("./../assets/banner.jpg") + ")"
        },
        hooperSettings: {
          infiniteScroll: true,
          centerMode: true,
          autoPlay: false,
          playSpeed: 1000,
          wheelControl:false,
          
      },
        about:{
            backgroundImage:"url(" + require("./../assets/background.jpg") + ")"
        },
        form: {
          email: '',
          name: '',
          message: ''
        },
        show:'1',
        sub_show:'1',
        visible:[true,false,false,false,false,false],
        images : [
            require('@/assets/b1/1.jpg'),
            require('@/assets/b1/2.jpg'),
            require('@/assets/b1/3.jpg')
        ],
        carouselItems: [
        {
          id: 1,
          image: require('@/assets/b1/1.jpg'),
          text: "臺南市永康區塩南段-方氏-私人住宅",
          slide : "452㎡"
        },
        {
          id: 2,
          image: require('@/assets/b1/2.jpg'),
          text: "臺南市新化區頂山腳段-黃氏-私人住宅",
          slide : "229.54㎡"
        },
        {
          id: 3,
          image: require('@/assets/b1/3.jpg'),
          text: "臺南市安南區海中段-李氏-私人住宅",
          slide : "229.54㎡"
        }
      ],
	}
  },
  components: {
        
  },
  methods:{
     change(change_num){
         
         this.show = change_num;
         this.sub_show = '1';
         this.visible[change_num] = true;
     },
    change_sub(change_num){
         
         this.sub_show = change_num;
         
     },
     getImages(){
        
     }
  }
}
</script>


<style scope>


.technologies{   
    height:100vh;
    
}

.technologies h1{

    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom:2px solid gray;
}

.technologies h3{

    text-align: center;
    padding-top: 20px;
    
}
.text-center{
    background: rgb(202, 202, 202);
    border:brown;
    width:50%;
    margin:0 350px 0 400px;
}

.tech_menu{
    width:25%;
    float: left;
    height:inherit;
    margin-top:20px;
}

.tech_menu #button_title{

    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:30px;
    font-weight:bold;
    padding-left:30px;

}

.tech_menu #button{
    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:20px;
    font-weight:bold;
    margin-left:10px;
    text-align: left;
}

.tech_menu #sub_button{
    background-color: unset;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    font-size:15px;
    text-align: center;
    margin-left:10px;
}

.tech_content{
    float: left;
    
    height: 500px;
}

.tech_content h3{
    text-align:left;
    padding-top:0px;

}
.tech_content1{
    width:60%;
    float:left;
    margin-left:18vw;
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
   margin:80px 20px 10px 80px;
}



.tech_icon .card-img{
    opacity:0.5;
    color:black;
    width:200px;
    height: 100px;
    float:left;
}

.tech_icon1 .card-img{
    opacity:0.5;
    color:black;
    width:200px;
    height: 100px;
    float: left;
}

.tech_icon2 .card-img{
    opacity:0.5;
    color:black;
    width:200px;
    height: 100px;
    float: right;
}

.list-group-item.sub{
    background-color:inherit ;
    border:inherit ;
    
}
.list-group-item.sub{
    padding: 1.25rem 2.25rem ;
}

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
