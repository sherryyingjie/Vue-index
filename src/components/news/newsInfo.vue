<template>
    <div class="temp">
        <div class="title">
            <h3>{{info.title}}</h3>
            <p>{{info.add_time | dataFmt("YYYY-MM-DD HH:mm:ss")}} {{info.click}}次浏览</p>
        </div>
        <div class="content" v-html="info.content"></div>

        <comment :id="newsid"></comment>
    </div>
</template>

<script>

    import Comment from '../subcom/comment.vue';
    export default{
        components:{
            comment:Comment
        },
        data:function(){
            return {
                info:[],
                newsid:''
            }
        },
        created:function(){
            var newsId = this.$route.params.id;
            this.newsid=newsId;
            var url = this.$urlPrefix+"/api/getnew/" + newsId;
            this.$http.get(url).then(function(response) {

                this.info = response.body.message[0];
            })
        }
    }
</script>

<style scoped>
    .title{
        color:#0094ff;
    }
</style>                                                                                                                  