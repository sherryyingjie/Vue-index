<template>
    <div class="temp">
        <div class="category">
            <ul v-bind="{style:'width:'+ulWidth+'px'}">
                <li @click="getPicList(0)">全部</li>
                <li v-for="item in categories" @click="getPicList(item.id)">{{item.title}}</li>
            </ul>
        </div>

        <div class="imglist">
            <ul>
                <li v-for="item in picList">
                    <router-link v-bind="{to:'/photo/photoinfo/'+item.id}">
                        <img v-lazy="tempUrl">
                        <div class="desc">
                            <h5 v-text="item.title"></h5>
                            <p v-text="item.zhaiyao"></p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default{
        data: function () {
            return {
                categories: [],
                ulWidth: 0,
                picList: [],
                tempUrl:"http://fuss10.elemecdn.com/7/85/e478e4b26af74f4539c79f31fde80jpeg.jpeg"
            }
        },
        methods: {
            getCategory: function () {
                var url = this.$urlPrefix + '/api/getimgcategory';
                this.$http.get(url).then(function (response) {
                    if (response.body.status != 0) {
                        alert(response.body.message);
                        return
                    }
                    this.categories = response.body.message;
                    this.ulWidth = (response.body.message.length + 1) * 66;
                })
            },
            getPicList: function (id) {
//                console.log(id);
                var url = this.$urlPrefix + '/api/getimages/' + id;
                this.$http.get(url).then(function (response) {
                    this.picList = response.body.message;
                })
            }
        },
        created:function(){
            this.getCategory();
            this.getPicList(0);
        }
    }
</script>

<style scoped>
    .category{
        width: 100%;
        overflow: auto;
        /*overflow: hidden;*/
    }
    .category ul{
        margin: 0px;
        padding-left: 10px;
        list-style: none;
        width: 2000px;
    }
    .category li{
        cursor: pointer;
        color:#0094ff;
        display: inline-block;
        font-size: 14px;
        padding-left: 5px;
        padding-right: 5px;
    }
    .imglist ul {
        padding-left: 0px;
        list-style:none;
    }
    .imglist li{
        position: relative ;
    }
    .imglist img{
        width:100%;
        height: 300px;
    }
    .desc{
        width: 100%;
        background-color: rgba(0,0,0,0.2);
        position: absolute;
        bottom: 2px;
        left: 0px;
    }
    .desc h5{
        color: #ffffff;
        font-weight: bold;
    }
    .desc p{
        color:#fff;
    }
    img[lazy=loading] {
        width: 40px;
        height: 300px;
        margin: auto;
    }
</style>                                                                                                                  