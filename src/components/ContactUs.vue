<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">聯絡我們</span>
        </div>
    </div>
  
    <div class="contacts">

        <b-card bg-variant="light" class="contact_right">
                    <div class="contact_information">

                        <div style="float: left;margin-left: 10%;margin-top: 5%;">
                        <div style="width: 100%;margin-left: 20%;">
                          <p style="text-align: center;">喬威建築師事務所-臺南事務所</p>
                          <p class = "information">地址 : 台南市北區大興街192巷28號</p>
                          <p class = "information">電話 : 06-2503927</p>
                        </div>                      
                        
                        <div style="width: 100%;margin-left: 20%;">
                          <p style="text-align: center;">喬威建築師事務所-臺中事務所</p>
                          <p class = "information">地址 : 臺中市西屯區臺灣大道四段671巷28號</p>
                          <p class = "information">電話 : 04-23505561</p>
                        </div>               
                        </div>
                        </div>

        </b-card>


    </div>

</div>
</template>

<script>

import Bread from '@/components/BreadCrumb'
export default {
  name: 'ContactUs',
  data(){
    return {
		banner: {
            backgroundImage:"url(" + require("./../assets/banner.jpg") + ")"
        },
        form: {
          email: '',
          name: '',
          message: '',
          contractNumber : '',
        },

        markers: [
        {
          position: { lat: 22.827961, lng: 120.257980 },
          infoText: '瀧儀生醫科股份有限公司',
          location: '高雄市路竹區北嶺里路科五路92號4樓B室'
        }
      ],
      distance: 0,
          infoContent: '',
          infolocation: '',
          infoWindowPos: null,
          infoWinOpen: false,
          currentMidx: null,
          //optional: offset infowindow so it visually sits nicely on top of our marker
          infoOptions: {
            pixelOffset: {
              width: 0,
              height: -35
            }
          }

      
	}
  },
  components: {
       
        Bread
  },
  computed: {
      state() {
        return this.form.name.length >= 1
      },
      invalidFeedback() {
        if (this.form.name.length > 0) {
          return ''
        }
        return '必填'
      },
            state1() {
        return this.form.contractNumber.length >= 1
      },
      invalidFeedback1() {
        if (this.form.contractNumber.length > 0) {
          return ''
        }
        return '必填'
      },
            state2() {
        return this.form.email.length >= 1
      },
      invalidFeedback2() {
        if (this.form.email.length > 0) {
          return ''
        }
        return '必填'
      }
  },
  methods:{
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      toggleInfoWindow: function(marker, idx) {
            this.infoWindowPos = marker.position;
            this.infoContent = marker.infoText;
            this.infolocation = marker.location;
            //check if its the same marker that was selected if yes toggle
            if (this.currentMidx == idx) {
              this.infoWinOpen = !this.infoWinOpen;
            }
            //if different marker set infowindow to open and reset current marker index
            else {
              this.infoWinOpen = true;
              this.currentMidx = idx;

            }
        },
        openMap(){
            window.open('https://reurl.cc/a5N65Q');
        }
        
  }
}
</script>


<style>
.contacts{
    height:500px;
}
#contact_card{
    width:50%;
    border:brown;
    float: left;
    height:inherit;
    border:brown;
}

.contact{
    font-size: xx-large;
}

.form-row {
    margin-top:20px;
}

.contact_right{
    height:inherit;
    border:brown;
}

.contact_information{
    font-size: 40px;
        
}

.contact_information p{
    padding-top: 10px;
    margin-bottom: 0px;
}

.map_info p{
    text-align: left;
    margin-bottom: 10px;
    padding-top :0px;
    font-size: large;
    
}



.company_info{
  padding-top:50px;
}



.contact_information .information{
  font-size: large;
  color:gray;
  text-align: center;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
