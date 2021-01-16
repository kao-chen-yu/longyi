<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">最新消息</span>
        </div>
    </div>
    <b-tabs content-class="mt-3" style="margin: 20px;">
        <b-tab  title="產品訊息" active>
            <b-card-group deck>
              <b-card  v-for="(item,index) in 4" :key="index"
                :title="news[index].title"
                :img-src="news[index].image"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; height:450px;"
                class="mb-5"
                img-height="50%"
                @click="goNew"
            >
            <a href="#" class="new_link">
                <b-card-text>
                    
                {{news[index].content_info}}
                </b-card-text>

            </a>    
            </b-card>
            </b-card-group>
            <b-card-group deck>
              <b-card  v-for="(item,index) in 4" :key="index"
                title="Card Title1"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; height:350px;"
                class="mb-5"
                img-height="60%"
                @click="goNew"
            >
            <a href="#" class="new_link">
                <b-card-text>
                    {{item}}
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

            </a>    
            </b-card>
            </b-card-group>
        </b-tab>
        <b-tab title="近期活動">
            <b-card-group deck>
              <b-card  v-for="(item,index) in 4" :key="index"
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=26"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; height:350px;"
                img-height="60%"
                class="mb-5"
                @click="goNew"
            >

            <a href="#" class="new_link">
                <b-card-text>
                    {{item}}
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                
            </a>
            </b-card>
            </b-card-group>
        </b-tab>
        <b-tab title="典範案例">
                        <b-card-group deck>
              <b-card  v-for="(item,index) in 4" :key="index"
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=27"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; height:350px;"
                img-height="60%"
                class="mb-5"
                @click="goNew"
            >

            <a href="#" class="new_link">
                <b-card-text>
                    {{item}}
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                
            </a>
            </b-card>
            </b-card-group>
        </b-tab>
        <b-tab title="產業新聞">
                        <b-card-group deck>
              <b-card  v-for="(item,index) in 4" :key="index"
                title="Card Title"
                img-src="https://picsum.photos/600/300/?image=28"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem; height:350px;"
                img-height="60%"
                class="mb-5"
                @click="goNew"
            >

            <a href="#" class="new_link">
                <b-card-text>
                    {{item}}
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

            </a>    
            </b-card>
            </b-card-group>
        </b-tab>
    </b-tabs>


    <FooterSample />

</div>
</template>

<script>


import FooterSample from '@/components/Footer.vue'
//import Bread from '@/components/BreadCrumb'
export default {
  name: 'LongyiNews',
  data(){
    return {
		banner: {
            backgroundImage:"url(" + require("./../assets/banner.jpg") + ")"
        },
        news: [{
                "image":"",
                "title":"",
                "content_info" : ""
            }]
	}
  },
  components: {
        FooterSample,
        //Bread
  },
  methods:{
      goNew(){
          //alert('test');
           this.$router.push({ name : 'LongyiNew'})
      }
  },
  created (){
    this.$axios
      .get('http://localhost:8081/news')
      .then(response => {
        console.log(response.data);
        this.news = response.data;
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
}
</script>

<style scope>

.container_news{
    margin : 40px;
    height : 900px;
}
.new_case{

    width:calc(100%/4 - 22px);
    margin:10px;
    float: left;
    padding-bottom: 0px;
    background-color:rgba(128, 128, 128, 0.1);
    height: calc(100%/3 - 22px);
}

.container_news .new_picture{
    width:100%;
    height: 60%;
    padding: 10px;
}

.new_case .news_date{
    font-size:15px;
    color:gray;
    list-style: none;
    margin-left : 10px;
    margin-top:10px;
}

.new_case .news_title{
    font-size:1.1em;
    color:blue;
    list-style: none;
    margin-left : 10px;
}

.nav-tabs .nav-link{
    color:gray;
}



.card-deck{
    margin:40px;
}

.new_link{
    color:gray;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
