import Vue from 'vue';
import myApp from './App.vue';

import vueRouter from 'vue-router';
Vue.use(vueRouter);

import vueResource from 'vue-resource';
Vue.use(vueResource);

import moment from 'moment';
Vue.filter("dataFmt",function(input,fmtString){
	return moment(input).format(fmtString);
});

import common from '../statics/common.js';
Vue.use(common);

import home from './components/home.vue';
import shopcar from './components/shopcar.vue';
import member from './components/member.vue';
import search from './components/search.vue';
import newslist from './components/news/newslist.vue';
import photolist from './components/photo/photolist.vue';
import photoinfo from './components/photo/photoinfo.vue';
import goodslist from './components/goods/goodslist.vue';
import callme from './components/callme.vue';
import feekback from './components/feekback.vue';
import video from './components/video.vue';
import newsInfo from './components/news/newsInfo.vue';


import '../node_modules/mint-ui/lib/style.min.css';
import mintui from 'mint-ui';
Vue.use(mintui);

import '../statics/mui/css/mui.css'

import '../statics/css/site.css'

var route1=new vueRouter({
	linkActiveClass:'mui-active',
	routes:[
		{
			path:'/',
			redirect:'/home'
		},
		{
			path:'/home',
			component:home
		},
		{
			path:'/shopcar',
			component:shopcar
		},
		{
			path:'/member',
			component:member
		},
		{
			path:'/search',
			component:search
		},
		{
			path:'/news/newlist',
			component:newslist
		},
		{
			path:'/photo/photolist',
			component:photolist
		},
		{
			path:'/goods/goodslist',
			component:goodslist
		},
		{
			path:'/callme',
			component:callme
		},
		{
			path:'/feekback',
			component:feekback
		},
		{
			path:'/video',
			component:video
		},
		{
			path:'/news/newsInfo/:id',
			component:newsInfo
		},
		{
			path:'/photo/photoinfo/:id',
			component:photoinfo
		}
	]
});

new Vue({
    el:"#app",
    router:route1,
    render:c=>c(myApp)
})

