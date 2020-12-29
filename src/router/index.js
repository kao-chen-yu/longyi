import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LongyiNews from '@/components/LongyiNews'
import LongyiNew from '@/components/LongyiNew'
Vue.use(Router)

export default new Router({
  routes: [
    {
		  path: '/',
		  name: 'Home',
		  component: Home,

		  meta: {
			breadcrumb: '首頁'
		  },
		  
    },
	{ 
			path: '/longyi_news',  
			name: 'LongyiNews',
			component: LongyiNews,
			afterEach:() => {
							document.body.scrollTop = 0;
							document.documentElement.scrollTop = 0;
			},
			meta: {
				breadcrumb: '最新消息'
			}

	},
	{ 
		path: '/longyi_new',  
		name: 'LongyiNew',
		component: LongyiNew,
		afterEach:() => {
						document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
		},
		meta: {
			breadcrumb: '最新消息'
		}

}
  ]
})
