<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">最新消息</span>
        </div>
    </div>
    
    <div class="new_list">
        <div class = "date_show">
            <span>{{new_show.date}}</span>
        </div>
        <div class = "new_title">
            <h1>{{new_show.title}}</h1>
        </div>
    </div>

    <div  v-html="new_show.text" class="new_content" >
     
    </div>

    <div class="some_news">
        <div>
            <h1>相關連結</h1>
        </div>

        <a href="#">
            經濟部中小企業處2020中小企業商機媒合交流會新聞
        </a>
    </div>
    <FooterSample />

</div>
</template>

<script>


import FooterSample from '@/components/Footer.vue'
import Bread from '@/components/BreadCrumb'
export default {
  name: 'LongyiNew',
  data(){
    return {
		banner: {
            backgroundImage:"url(" + require("./../assets/banner.jpg") + ")"
        },
        new_show:{
            date : '2020-12-29',
            title : 'Discovery專題介紹: 亞果生醫-角膜移植',
            text : "亞果生醫今年參展亞洲生技大展（BIO Asia-Taiwan Exhibition），展示研發成果與技術，執行長謝達仁表示，Discovery曾經前來採訪報導，用天然膠原蛋白支架為吉娃娃進行移植成功的案例，已經正式展開人體臨床試驗，並預計辦理現金增資，力拚年底興櫃登錄。<br>謝達仁表示，亞果生醫在2016年以天然膠原蛋白支架生醫組織工程材料，為一隻右眼失明的吉娃娃小型犬隻進行眼角膜移植，並在術後二個月成功讓吉娃娃重見光明，還吸引Discovery探索頻道前來進行專題報導，現在這項技術已經正式展開人體臨床試驗。 <br><img src='https://picsum.photos/600/300/?image=28'><br>亞果生醫今年參展亞洲生技大展（BIO Asia-Taiwan Exhibition），展示研發成果與技術，執行長謝達仁表示，Discovery曾經前來採訪報導，用天然膠原蛋白支架為吉娃娃進行移植成功的案例，已經正式展開人體臨床試驗，並預計辦理現金增資，力拚年底興櫃登錄。<br>謝達仁表示，亞果生醫在2016年以天然膠原蛋白支架生醫組織工程材料，為一隻右眼失明的吉娃娃小型犬隻進行眼角膜移植，並在術後二個月成功讓吉娃娃重見光明，還吸引Discovery探索頻道前來進行專題報導，現在這項技術已經正式展開人體臨床試驗。"
        }
    }
  },
  components: {
        FooterSample,
        Bread
  },
  methods:{
      goNew(){
          alert('test');
      }
  },
  computed:{

  }
}
</script>

<style>
.new_list{
    border-top: solid 2px #EBEBEB;
    border-block: solid 2px #EBEBEB;
}
.date_show{
    margin: 20px 40px 10px 20px;
    padding: 5px 10px 5px 10px;
    width:160px;
    background: lightblue;
}

.date_show span{
    padding-left: 20px;
    font-size: large;
    color:gray;
}

.new_title{
    margin-left: 20px;
}

.new_content{
    border-block: solid 2px #EBEBEB;
    padding:50px;
    font-size :x-large;
}

.some_news{
    padding: 10px 50px;
    border-block: solid 2px #EBEBEB;
    font-size :x-large;
    color:gray;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
