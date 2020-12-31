<template>

<div>

    <div class = "banner" :style ="banner">
        <div class="banner_title">
        <span class="title">聯絡我們</span>
        </div>
    </div>
    
    <div class="contacts">
      <b-card bg-variant="light" class="contact_card">
        <div class="contact">
            <span>聯絡我們</span>
        </div>
        <b-form @submit="onSubmit">    
            <b-form-group
                label="姓名 : "
                label-for="nested-street"
                label-cols-sm="1"
                
            >
                <b-form-input id="nested-street" v-model="form.name"></b-form-input>
            </b-form-group>

            <b-form-group
                label="E-mail: "
                label-for="nested-city"
                label-cols-sm="1"
                
            >
                <b-form-input id="nested-city" v-model="form.email"></b-form-input>
            </b-form-group>

            <b-form-group
                label="訊息:"
                label-for="nested-state"
                label-cols-sm="1"
               
            >
            <b-form-textarea
            id="textarea"
            v-model="form.message"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
            ></b-form-textarea>

            
            </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
        </b-card>
        <b-card bg-variant="light" class="contact_right">
                    <div class="contact_information">
                    <h3>瀧儀生醫科股份有限公司</h3>
                    <p>(82151)高雄市路竹區北嶺里路科五路92號4樓B室</p>
                    <p>電話：(07)695-5080</p>
                    <p>Fax : (07)695-5082</p>
                    <p>Email : OOXXOOX@gmail.com</p>
                    
                    
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
      }
  }
}
</script>


<style>
.contacts{
    height:400px;
}
.contact_card{
    width:50%;
    border:brown;
    float: left;
    height:inherit;
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
    padding-top:50px;
    text-align:center;
}

.contact_information p{
    padding-top: 10px;
    margin-bottom: 0px;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
