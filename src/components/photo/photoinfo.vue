<template>
    <div class="temp">
        <div class="tempDiv">
            <div class="title">
                <h4>{{photoinfo.title}}</h4>
                <p>{{photoinfo.add_time | dataFmt('YYYY-MM-DD HH:mm:ss')}}  {{photoinfo.click}}次浏览</p>
                <p class="line"></p>
            </div>
            <!--九宫格-->
            <div class="mui-content">
                <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">Home</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">Email</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">Chat</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-location"></span>
                        <div class="mui-media-body">location</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <span class="mui-icon mui-icon-search"></span>
                        <div class="mui-media-body">Search</div></a></li>
                </ul>
            </div>
            <p v-html="photoinfo.content"></p>
        </div>

        <!--引入评论组件-->
        <common :id="id"></common>
    </div>
</template>

<script>
    import Common from '../subcom/comment.vue'
    export default{
        data:function(){
            return {
                id:0,
                photoinfo:{}
            }
        },
        created:function(){
            this.id=this.$route.params.id;
            this.getContent();
        },
        methods: {
            getContent:function(){
                var url = this.$urlPrefix + '/api/getimageInfo/' + this.id;
                this.$http.get(url).then(function(response){
                    if(response.body.status!=0){
                        alert(response.body.message);
                        return
                    }
                    this.photoinfo=response.body.message[0];
                })
            }
        },
        components:{
            common:Common
        }
    }
</script>

<style scoped>
    .title h4{
        color: #0094ff;
    }
    .title p{
        color:rgba(0,0,0,0.4);
        margin-top: 10px;
    }
    .title .line{
        width: 100%;
        height: 1px;
        border-bottom: 1px solid rgba(0,0,0,0.4);
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
</style>                                                                                                                  