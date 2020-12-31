import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LongyiNews from '@/components/LongyiNews'
import LongyiNew from '@/components/LongyiNew'
import ContactUs from '@/components/ContactUs'
import Technology from '@/components/Technology'
import Products from '@/components/Products'
import AboutLongyi from '@/components/AboutLongyi'
import Invest from '@/components/Invest'

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

	},
	{ 
		path: '/contact_us',  
		name: 'ContactUs',
		component: ContactUs,
		afterEach:() => {
						document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
		},
		meta: {
			breadcrumb: '聯絡我們'
		}

	},
	{ 
		path: '/technology',  
		name: 'Technology',
		component: Technology,
		afterEach:() => {
						document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
		},
		meta: {
			breadcrumb: '核心技術'
		}

	},
	{ 
		path: '/products',  
		name: 'Products',
		component: Products,
		afterEach:() => {
						document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
		},
		meta: {
			breadcrumb: '產品介紹'
		}

	},
	{ 
		path: '/about_longyi',  
		name: 'AboutLongyi',
		component: AboutLongyi,
		afterEach:() => {
						document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
		},
		meta: {
			breadcrumb: '關於瀧儀'
		}

	},
	{ 
		path: '/invest',  
		name: 'Invest',
		component: Invest,
		afterEach:() => {
						document.body.scrollTop = 0;
						document.documentElement.scrollTop = 0;
		},
		meta: {
			breadcrumb: '投資人專區'
		}

	}
  ]
})
