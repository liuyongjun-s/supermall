<template>
    <div class="step">
        <h1>最新政策与常见答疑</h1>
        
        

        <div class="center">
            <!-- <ul class="left"> -->
                <!-- <li v-for="item in findInfo" :key="item.id">
                    <img :src="item.image"/>
                    <h3 >{{item.title}}</h3>
                    <h5>{{item.content}}</h5>
                </li> -->

            <ul >
                <li   class="list"   v-for="item in findInfo" :key="item.id">
                    <img src="~assets/img/page1/dial.png"/>
                    <h3 >{{item.title}}</h3>
                    <h5>{{item.content}}</h5>
                </li>
<!--                 
                <li><img src="~assets/img/page1/dial.png"/>
                    <h3>公司注册完要多长时间?</h3>
                    <h5>一般以15-20个工作日。各地会有所不同，具体请与客服沟通确<br/>认。</h5>
                </li>
                <li><img src="~assets/img/page1/dial.png"/>
                    <h3>公司注册资本写多少合适?</h3>
                    <h5>建议参考行业内同类公司，主要考虑未来各类资质的要求，如：IC<br/>P经营许可证需要100万注册资本，视频网站牌照需要1000万注…</h5>
                </li> -->
               <!-- <div class="change"><img src="~assets/img/page1/change.png"/>换一换</div> -->
            </ul>

            <div class="change" @click="change"><img src="~assets/img/page1/change.png"/>换一换</div>

            <div  class="more" @click="getMoreFindInfo"> 更多</div>

            <!-- <ul class="right">
                <li><img src="~assets/img/page1/dial.png"/>
                    <h3>我没有注册地址怎么办？</h3>
                    <h5>我要创业可以为你介绍入驻集中办公室，提供安全、可靠、低价的<br/>注册地址。你也可以真实租赁一个可供注册的办公场所。</h5>
                </li>
                <li><img src="~assets/img/page1/dial.png"/>
                    <h3>注册100万的公，，需要一次缴清吗？</h3>
                    <h5>不用，2014年3月1日后，公司注册改革，注册资本从实缴到认<br/>缴。也就说，你现在只需拿1元，即可注册。</h5>
                </li>
                <li><img src="~assets/img/page1/dial.png"/>
                    <h3>什么是隐名股东？</h3>
                    <h5>处于融资的考虑，创业团队注册公司时，一般只设1-3个股东，其<br/>余团队成员可通过“隐名股东代持协议”由具名股东代持，享有同…</h5>
                </li>

                <div  class="more" @click="getMoreFindInfo"> 更多</div>
            </ul> -->

            
            


        </div>
        

    </div>
</template>

<script>
    import {getRegistrationFindAll, getFindInfo} from "network/home";
export default {
    name: "PolicyView",

    data() {        
          return {           
             formData:{
              company:'',
              mobile:'',
              name:'',
            },
            params: {
                currentPage: 1
            },
            findInfo: [

            ],
            data: {}
        
        }     
    },
    created() {
        this.getFindInfo()
    },

    methods: {
        getMoreFindInfo() {
            this.params.currentPage++;
            this.getFindInfo()
        },
        getFindInfo() {
            getFindInfo(this.params)
                  .then((res) => {
                    this.findInfo = res.data
                  })
        },
        //   submit() {
        //         getFindInfo(this.formData)
        //           .then((res) => {
        //             this.dialogFormVisible = false
        //             this.$notify({
        //               title: '成功',
        //               message: '上传成功',
        //               type: 'success',
        //               duration: 2000
        //             })
        //             // this.getList()
        //             // this.resetTemp()
        //           })
        //   },

            change() {
                this.params.currentPage++;
                this.getFindInfo();
                
            }
        }
    
}
</script>

<style scoped>
    
    .step {
        position: relative;
        height: 620px;
        width: 100%;
        /* margin-bottom: 120px; */
        /* padding-bottom: 120px; */
        border-bottom: #eee solid;
        min-width: 1080px;

    }
    

    .step>h1{
        position: absolute;
        left: 50%;
        margin-left: -10%;
        top:20px;
        text-align:center;
        font-weight: normal;
        color: black;
        z-index: 1;
    }

    

    

    .center {
        position: relative;
        height: 200px;
        width: 80%;
        background-color: #fff;
        position: absolute;
        left: 10%;
        top: 20%;
    }

    .list {
        width: 40%;
        display: inline-block;
        margin:0 5%;
        
    }

    .left {
        float: left;
    }

    .right {
        float: right;
    }
    li>h3 {
        color: rgb(111, 171, 197);
        display:inline-block;
        line-height: 50px;
        margin-top: 15px;
    }
    li>h5 {
        margin-left: 30px;
        margin-bottom: 30px;
    }

    li {
        list-style-type: none;
        border-bottom:2px solid #eee;
    }

    li>img {
        display: inline-block;
        height: 25px;
        top: 30px;
    }

    .change {
        position: absolute;
        left: 30%;
        border: #eee solid;
        margin: 10px;
        padding: 10px;
        width: 120px;
        border-radius: 10px;
        text-align: center;
    }
    .more {
        position: absolute;
        left: 55%;
        border: #eee solid;
        margin: 10px;
        padding: 10px;
        width: 120px;
        border-radius: 10px;
        text-align: center;
    }

    .change>img {
        height: 15px;

    }
 
    
</style>
