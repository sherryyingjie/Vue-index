<template>
	<div class="temp">
		<mt-swipe :auto="4000">
	  		<mt-swipe-item v-for="item in slideList" :key="item.img">
				<img :src="item.img"/>
			</mt-swipe-item>
		</mt-swipe>

		<div class="mui-content">
			<ul class="mui-table-view mui-grid-view mui-grid-9">
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/news/newlist">
					<span class="mui-icon mui-icon-home"></span>
					<div class="mui-media-body">新闻资讯</div></router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/photo/photolist">
					<span class="mui-icon mui-icon-email"></span>
					<div class="mui-media-body">图片分享</div></router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/goods/goodslist">
					<span class="mui-icon mui-icon-chatbubble"></span>
					<div class="mui-media-body">商品购买</div></router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/feekback">
					<span class="mui-icon mui-icon-location"></span>
					<div class="mui-media-body">留言反馈</div></router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/video">
					<span class="mui-icon mui-icon-search"></span>
					<div class="mui-media-body">视频专区</div></router-link></li>
				<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/callme">
					<span class="mui-icon mui-icon-phone"></span>
					<div class="mui-media-body">练习我们</div></router-link></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		data:function(){
			return {
				slideList:{}
			}
		},
		created:function(){
			this.getList();
		},
		methods:{
			getList:function(){
				var url=this.$urlPrefix+"/api/getlunbo";
				this.$http.get(url).then(function(response){
					if(response.body.status!=0){
						alert(response.body.message);
						return;
					}
					this.slideList=response.body.message;
				})
			}
		}
	}
</script>

<style scoped>
	.mint-swipe{
		height: 240px;
	}
	.mint-swipe-item img{
		width: 100%;
		height: 100%;
	}
	.mint-swipe-item{
		width: 100%;
		height: 100%;
	}
	.mui-grid-view.mui-grid-9{
		background-color: #fff;
		border-top: 0px;
		border-left: 0px;
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell{
		border-right: 0;
		border-bottom: 0;
	}
	.mui-icon-email:before,
	.mui-icon-chatbubble:before,
	.mui-icon-location:before,
	.mui-icon-search:before,
	.mui-icon-phone:before,
	.mui-icon-home:before{
		content: "";
		width: 40px;
		height: 40px;
		display: block;
		background-size: 40px 40px;
	}
	.mui-icon-home:before{
		background-image: url("../../statics/imgs/1.png");
	}
	.mui-icon-email:before{
		background-image: url("../../statics/imgs/2.png");
	}
	.mui-icon-chatbubble:before{
		background-image: url("../../statics/imgs/3.png");
	}
	.mui-icon-location:before{
		background-image: url("../../statics/imgs/4.png");
	}
	.mui-icon-search:before{
		background-image: url("../../statics/imgs/5.png");
	}
	.mui-icon-phone:before{
		background-image: url("../../statics/imgs/6.png");
	}
</style>