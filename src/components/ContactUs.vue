<template>

<div>

    <div class = "nav" >

    </div>
    <div class="contacts">
        <div class="footer-icon">
              <font-awesome-icon :icon="['fas', 'phone']" size="5x"/>
              </br></br><span class = "icon-title">服務專線 (上班時間)</span>
              </br><span class = "icon-info"> 0932450984 </span>
        </div><div class="footer-icon">
              <font-awesome-icon class="icon" :icon="['fas', 'pen-square']" size="5x"/>
              </br></br><span class = "icon-title">專員紀錄</span>
              </br><span class = "icon-info">將有專員紀錄 與您預約最佳時間</span>
        </div><div class="footer-icon">
              <font-awesome-icon class="icon" :icon="['fas', 'user']" size="5x"/>
              </br></br><span class = "icon-title">到府預約估價</span>
              </br><span class = "icon-info">當天將有師傅再次聯絡確認，到府免費估價</span>
        </div>

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
          position: { lat: 23.03988442119841, lng: 120.1871286515133 },
          infoText: '瀚升建設開發有限公司',
          location: '海環街6巷7號'
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
.icon-title{
  font-weight: bolder;
  font-size: 1.25rem;
}

.icon-info{
  
  font-size: 1rem;
}
.footer-icon{
    width: 10%;
    height: 10%;
    float: left;
    margin: 10% 10% 10% 10%;
}
.contacts{
    margin-left: 10%;
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
