<template>
    <div class="temp">
        <ul class="mui-table-view" v-for="item in list">
            <li class="mui-table-view-cell mui-media">
                <router-link v-bind="{to:'/news/newsInfo/'+item.id}">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <p class='mui-ellipsis'>{{item.zhaiyao}}</p>
                        <p class='ft'>
                            <span>{{item.add_time | dataFmt('YYYY-MM-DD HH:mm:ss')}}</span>
                            <span class="click-number">点击数{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    export default{
        data:function(){
            return {
                list:[]
            }
        },
        created:function(){
            this.getList();
        },
        methods:{
            getList:function(){
                var url=this.$urlPrefix+"/api/getnewslist";
                this.$http.get(url).then(function(response){
                    if(response.body.status!=0){
                        alert(response.body.message);
                        return;
                    }
                    this.list=response.body.message;
                })
            }
        }
    }
</script>

<style scoped>
    .mui-table-view .mui-media-object.mui-pull-left{
        width: 80px;
        height: 80px;
        max-width: 80px;
    }
    .ft{
        color: #0094ff;
        font-size: 12px;
        margin-top: 1em;
    }
    .click-number{
        margin-left: 10px;
    }
</style>                                                                                                                  