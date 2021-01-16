<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">聯絡我們</span>
        </div>
    </div>
    
    <div class="contacts">
      <b-card bg-variant="light" id="contact_card">
        <div class="contact">
            <span>聯絡我們</span>
        </div>
        <b-form @submit="onSubmit">    
            <b-form-group
                label="姓名 : "
                label-for="nested-street"
                label-cols-sm="2"
                
            >
                <b-form-input id="nested-street" v-model="form.name"></b-form-input>
            </b-form-group>

            <b-form-group
                label="E-mail: "
                label-for="nested-city"
                label-cols-sm="2"
                
            >
                <b-form-input id="nested-city" v-model="form.email"></b-form-input>
            </b-form-group>

            <b-form-group
                label="訊息:"
                label-for="nested-state"
                label-cols-sm="2"
               
            >
            <b-form-textarea
            id="textarea"
            v-model="form.message"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
            ></b-form-textarea>

            
            </b-form-group>
        <b-button type="submit" variant="primary" style="margin-top:20px;">送出</b-button>
        </b-form>
        <div class="company_info">
        </div>
        </b-card>
        <b-card bg-variant="light" class="contact_right">
                    <div class="contact_information">

                    
                    <GmapMap
                    :center="{lat:22.828341, lng:120.258601}"
                    :zoom="18"
                    style="width: 70%; height: 350px"
                    >


                    <GmapMarker
                        :key="index"
                        v-for="(m, index) in markers"
                        :position="m.position"
                        :clickable="true"
                        :draggable="true"
                        @click="toggleInfoWindow(m,i)"
                    />
                          <gmap-info-window 
                          :options="infoOptions" 
                          :position="infoWindowPos" 
                          :opened="infoWinOpen" 
                          @closeclick="infoWinOpen=false">
                            
                            <div class = "map_info">
                            <p>{{infoContent}}</p>
                            <p>{{infolocation}}</p>
                            <b-button @click="openMap()">打開地圖</b-button>
                            </div>
                        </gmap-info-window>

                    </GmapMap>
                    </div>
        </b-card>


    </div>
    <FooterSample />

</div>
</template>

<script>


import FooterSample from '@/components/Footer.vue'
//import Bread from '@/components/BreadCrumb'
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
          message: ''
        },

        markers: [
        {
          position: { lat: 22.828341, lng: 120.258601 },
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
        FooterSample,
        //Bread
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
            window.open('https://reurl.cc/e80QoQ');
        }
        
  }
}
</script>


<style>
.contacts{
    height:400px;
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
    font-size: larger;
    
    text-align:center;
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

#nested-street{
  width:200px;
}

#nested-city{
  width:250px;
}

#textarea{
  width:300px;
}

.company_info{
  padding-top:50px;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
