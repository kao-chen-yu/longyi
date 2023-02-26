<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">精選作品</span>
        </div>
    </div>
    
    <div class="technologies">
        <div class="tech_menu">
            <b-list-group>
                <b-list-group-item href="#"  id="button_title">精選作品</b-list-group-item>
                <b-list-group-item href="#" v-b-toggle="'collapse-1'" @click="change('1')" id="button">住宅</b-list-group-item>
                <b-collapse  visible id="collapse-1" accordion="my-accordion">
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('1')" id="sub_button">實績</b-list-group-item>
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('2')" id="sub_button">規劃中</b-list-group-item>
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('3')" id="sub_button">完工</b-list-group-item>
                </b-collapse>
                <b-list-group-item href="#" v-b-toggle="'collapse-2'" @click="change('2')" id="button">店鋪住宅</b-list-group-item>
                <b-collapse   id="collapse-2" accordion="my-accordion">
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('1')" id="sub_button">實績</b-list-group-item>
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('2')" id="sub_button">規劃中</b-list-group-item>
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('3')" id="sub_button">完工</b-list-group-item>
                </b-collapse>
                <b-list-group-item href="#" v-b-toggle="'collapse-3'" @click="change('3')" id="button">店鋪</b-list-group-item>
                <b-collapse   id="collapse-3" accordion="my-accordion">
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('1')" id="sub_button">實績</b-list-group-item>
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('2')" id="sub_button">規劃中</b-list-group-item>
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('3')" id="sub_button">完工</b-list-group-item>
                </b-collapse>
                <b-list-group-item href="#" v-b-toggle="'collapse-4'" @click="change('4')" id="button">宗教</b-list-group-item>
                <b-collapse   id="collapse-4" accordion="my-accordion">
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('1')" id="sub_button">實績</b-list-group-item>
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('2')" id="sub_button">規劃中</b-list-group-item>
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('3')" id="sub_button">完工</b-list-group-item>
                </b-collapse>             
                <b-list-group-item href="#" v-b-toggle="'collapse-5'" @click="change('5')" id="button">廠房 & 辦公大樓</b-list-group-item>
                <b-collapse   id="collapse-5" accordion="my-accordion">
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('1')" id="sub_button">實績</b-list-group-item>
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('2')" id="sub_button">規劃中</b-list-group-item>
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('3')" id="sub_button">完工</b-list-group-item>
                </b-collapse>               
                <b-list-group-item href="#" v-b-toggle="'collapse-6'" @click="change('6')" id="button">其他</b-list-group-item>
                <b-collapse   id="collapse-6" accordion="my-accordion">
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('1')" id="sub_button">實績</b-list-group-item>
                    <b-list-group-item class = "sub"  href="#" @click="change_sub('2')" id="sub_button">規劃中</b-list-group-item>
                    <b-list-group-item class = "sub" href="#"  @click="change_sub('3')" id="sub_button">完工</b-list-group-item>
                </b-collapse>               
                </b-list-group>
        

        </div>


        <div class ="tech_content1" v-show="show === '1'">

            <h1 v-show="sub_show === '1'">實績</h1>

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
                    caption="First slide"
                    text="Nulla vitae elit libero, a pharetra augue mollis interdum."
                    img-src="https://picsum.photos/1024/480/?image=52"
                ></b-carousel-slide>

                <!-- Slides with custom text -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
                    <h1>Hello world!</h1>
                </b-carousel-slide>

                <!-- Slides with image only -->
                <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

                <!-- Slides with img slot -->
                <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
                <b-carousel-slide>
                    <template #img>
                    <img
                        class="d-block img-fluid w-100"
                        width="1024"
                        height="480"
                        src="https://picsum.photos/1024/480/?image=55"
                        alt="image slot"
                    >
                    </template>
                </b-carousel-slide>

                <!-- Slide with blank fluid image to maintain slide aspect ratio -->
                <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
                    a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
                    </p>
                </b-carousel-slide>
                </b-carousel>

                <p class="mt-4" v-show="sub_show === '1'">
                Slide #: {{ slide }}<br>
                Sliding: {{ sliding }}
                </p>
            <h1 v-show="sub_show === '2'">規劃中</h1>
            <h1 v-show="sub_show === '3'">完工</h1>
        </div>

        <div class ="tech_content1" v-show="show === '2'">
            
            <h1>規劃中</h1>
            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            
            <img src="https://picsum.photos/600/300/?image=19">

            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            
        </div>

                <div class ="tech_content1" v-show="show === '3'">
            
            <h1>寵物精準大健康平台</h1>
            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            
            <img src="https://picsum.photos/600/300/?image=21">

            <b-card-text>
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
                Some quick example text to build on the card and make up the bulk of the card's content.
            </b-card-text>
            
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
  }
}
</script>


<style scope>


.technologies{   
    height:1000px;
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
    margin:60px;
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
