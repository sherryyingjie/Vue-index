<template>
    <div>
        <div id="postcomment">
            <h3>提交评论</h3>
            <p class="p"></p>
            <textarea placeholder="请输入您要评论的内容..." v-model="content"></textarea>
            <mt-button type="primary" size="large" @click="postComment">发表</mt-button>
        </div>

        <div id="list">
            <h3>评论列表</h3>
            <p class="p"></p>
            <div v-for="(item,index) in commentList">
                <div class="title">
                    <span>第{{index + 1}}楼:</span>
                    <span>用户：{{item.user_name}}</span>
                    <span>发表时间：{{item.add_time | dataFmt("YYYY-MM-DD HH:mm:ss")}}</span>
                </div>
                <ul class="mui-table-view">
                    <li class="mui-table-view-cell" v-text="item.content"></li>
                </ul>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>

    import { Toast } from 'mint-ui';
    export default{
        props:["id"],
        data:function(){
            return {
                content:"",
                commentList:[],
                pageIndex:1
            }
        },
        methods:{
            postComment:function(){
                if(this.content.trim().length<=0){
                    Toast("评论不能为空");
                    return;
                }
                var url=this.$urlPrefix+'/api/postcomment/ '+ this.id;
                this.$http.post(url,{content:this.content},{emulateJSON:true}).then(function(response){
                    Toast(response.body.message);
                    this.commentList=[{
                        "user_name": "匿名用户",
                        "add_time": new Date(),
                        "content": this.content
                    }].concat(this.commentList);
                    this.content="";
                })
            },
            getCommentList:function(){
                var url=this.$urlPrefix+'/api/getcomments/ '+ this.id+'?pageindex='+this.pageIndex;
                this.$http.get(url).then(function(response){
                    if(response.body.status!=0){
                        alert(response.body.message);
                        return ;
                    }
//                    this.commentList=response.body.message;
                    this.commentList=this.commentList.concat(response.body.message);
                })
            },
            getMore:function(){
                this.pageIndex++;
                this.getCommentList();
            }
        },
        created:function(){
            this.getCommentList();
        }
    }
</script>

<style scoped>
    #postcomment{
        padding: 5px;
    }
    .p{
        height: 1px;
        width: 100%;
        border-bottom: 1px solid rgba(0,0,0,0.3);
    }
    #list{
        padding: 5px;
    }
    .title{
        padding: 5px;
        color: #6d6d72;
        font-size: 15px;
        background-color: rgba(0,0,0,0.1);
    }

</style>                                                                                                                  