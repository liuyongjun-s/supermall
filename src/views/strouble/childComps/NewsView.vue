<template>
  <div  class="tp">
      <h5>您当前的位置是：网站首页>>新闻中心>>公司新闻</h5>

      <div  class="cont">
        <!-- <div class="btn btn1" @click="GsNews()" >公司新闻</div>
        <div class="btn btn2" @click="HyNews()" >行业新闻</div> -->
        <div class="login-wrap">
            <ul class="menu-tab">
                <li :class="{'current': item.current}" v-for="item in menuTab" :key="item.id" @click="toggleMenu(item)">{{ item.txt }}</li>
            </ul>
        </div>

        <div  class="news">
          <ul>
            <li v-for=" item in newsInfo" :key="item.pageIndex">
              <div  class="time">
                <h2>{{item.createTime | formatDate2}}</h2>
                <h6>{{item.createTime | formatDate}}</h6>
              </div>
              <div  class="text">
                <h3>{{item.title}}</h3>
                <h6>
                  {{item.content}}
                </h6>
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>



        </div>


        <ul class="page"  >
            <!-- <li >1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>>></li> -->
            <!-- <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="newsInfo" /> -->
              <!-- <pagination v-model="page" :records="records" :per-page="perPage"   @pagination="newsInfo" :options="options"/> -->

               <!-- <el-pagination
                  :total="total"
                  :current-page="currentPage"
                  :page-size="pageSize"
                  :page-sizes="[1, 20, 30, 50]"
                  :pager-count="5"
                  @current-change="handleCurrentChange"
                  @size-change="handleSizeChange"
                  background
                  layout="total, sizes, prev, pager, next">
              </el-pagination> -->

              <el-pagination
                @current-change="getNewsInfo"
                background
                layout="prev, pager, next"
                :page-size="pageSize"
                :total="totalCount">
              </el-pagination>
        </ul>
         


      </div>
      
    
  </div>
    
       
     
  
</template>

<script>
  import {getRegistrationFindAll, getNewsInfo} from "network/home";
  import { formatDate } from "@/common/date.js";
  // import Pagination from '@/components/Pagination' // secondary package based on el-pagination
  export default {
    name: "NewsView",
    // components: { Pagination },
       data() {        
          return {   
              menuTab: [
                  { txt: '公司新闻',current: true ,type:'1'},
                  { txt: '行业新闻',current: false ,type:'2'}                  
              ] ,       
             formData:{
              company:'',
              mobile:'',
              name:'',
              title:'',
              isActive: true
            },

            //  total: 0,
            // currentPage: 1,
            // pageSize:1,
            // loading: false,
            // searUser: {},
            // tableData:[],
            
            // page:1,
            // perPage:1,
            // records: 0,
            // pageNo: 1,
            // options: {
            //   chunk:5,
            //   edgeNavigation: true,

            // },
            // listQuery: {
            //   page: 1,
            //   limit: 2,
              
            // },
            params: {
                type: 1,
                currentPage: 1,
                pageIndex:1,
                pageSize: this.pageSize,
                size:2
                
            },
            findInfo: [

            ],
            callInfo: [

            ],
            aboutInfo: [

            ],
            newsInfo: [

            ],
            data: {},
            mobile: {},
            title: {},



            // 默认显示第几页
           currentPage:1,
           // 总条数，根据接口获取数据长度(注意：这里不能为空)
           totalCount:10,
           // 个数选择器（可修改）
           pageSizes:[5,10],
           // 默认每页显示的条数（可修改）
           PageSize:4,
           //定义的总数
           total:10,
           //用来存放后台返回来的列表数据
           list:[],
           pageSize:4

        
        }     
    },
    filters: {
    // 时间格式自定义 只需把字符串里面的改成自己所需的格式
    formatDate(time) {
      let date = new Date(time);
      // return formatDate(date, 'yyyy.MM.dd');
      return formatDate(date, 'yyyy.MM');
    },
    formatDate2(time) {
      let date = new Date(time);
      // return formatDate(date, 'hh:mm:ss');
      return formatDate(date, 'dd');
    },
    formatDate3(time) {
      let date = new Date(time);
      return formatDate(date, 'yyyy年MM月dd日 hh:mm:ss');
    }
  },

    created() {
        this.getNewsInfo()
        // this.getList()
        // select_user()
    },

    methods: {
      // getList() {
      //   // 得到一个PageInfo对象
      //   var vm = this;
      //   this.axios({
      //     method: 'GET',
      //     url:'http://www.shdejia.cn/api/journalism/findAll?pageNum='+vm.listQuery.page+'&pageSize='+vm.listQuery.limit
      //   }).then(function(response){
      //     // 得到一个pageinfo对象
      //     vm.total = response.data.total;//
      //     vm.list = reponse.data.list;
      //   })
      // },

      //  select_user(){
      //       this.loading = true;

      //       this.searUser.currentPage = this.currentPage; 
      //       this.searUser.pageSize = this.pageSize;

      //       //  this.$axios.get('/api/users/search',{params:this.searUser})
      //           // this.getNewsInfo(params.this.searUser)
      //            getNewsInfo({params:this.searUser}).then(res => {
      //             //  this.newsInfo = res.data;
      //               this.loading = false;

      //               window.console.log(JSON.stringify(res));

      //               this.tableData = res.data.records;

      //               this.total = res.data.total;

      //           }).catch(err => {
      //               this.loading = false;
      //               this.$message.error(err);
      //           });
      //   },

      //   handleCurrentChange(val){
      //       this.currentPage = val;

      //       this.select_user();
      //   },

      //   handleSizeChange(val){
      //       this.pageSize = val;
      //   },


      //   getMoreFindInfo() {
      //       this.params.currentPage++;
      //       this.getFindInfo()
      //   },
        // GsNews(){
        //     this.params.type=1;
        //     this.getNewsInfo()
        // },
        // HyNews(){
        //     this.params.type=2;
        //     this.getNewsInfo()
        // },
        toggleMenu(data){
          this.menuTab.forEach(elem => {
            elem.current = false
          });
          data.current = true

          this.params.type = data.type
          // console.log(data.type)
          this.getNewsInfo()
        },
        getNewsInfo(pageIndex) {
          console.log(pageIndex)
          
            getNewsInfo(this.params)
                  .then((res) => {
                    this.newsInfo = res.data;
                    // this.totalCount = res.data.length;
                    // this.currentPage = this.pageIndex;
                  })
        },


         

        
    
  }
    
  }
</script>

<style scoped>
    .tp {
        width: 100%;
        height: 950px;
        min-width: 1080px;
    }
    .tp>img {
        width: 100%;
        
    }
    h5 {
      margin-left: 200px;
      line-height: 80px;
    }

    .cont {
      border-top: 2px solid #eee;
      position: relative;
      height: 850px;
      /* background-color: red; */
    }

    .btn {
      width: 100px;
      height: 30px;
      line-height: 30px;
      background-color: #eee;
      /* color: #fff; */
      margin-top: 20px;
    }

    .btn1 {
      position: absolute;
      left: 41%;
      text-align: center;
    }
    .btn2 {
      position: absolute;
      left: 51%;
      text-align:center;
    }

    .news {
      position: absolute;
      /* background-color: #eee; */
      height: 500px;
      width: 60%;
      left: 20%;
      top: 100px;
    }
    .news>ul {
      list-style-type: none;
    }
    .news li {
      position: relative;
      margin: 10px;
      height: 120px;
      /* background-color: blue; */
      border-bottom: 2px dashed #eee;

    }
    .time {
      display: inline-block;
      background-color: rgb(188, 160, 113);
      height: 60px;
      width: 60px;
      border-radius: 5px;
      margin: 15px;
    }
    h2 {
      text-align: center;
      line-height: 50px;
      color: #fff;
      margin-top: 5px;
    }
    .time>h6 {
      text-align: center;
      color: #fff;
      background-color: rgb(162, 137, 96);
      border-radius: 0 0 5px 5px;
      margin-top: -5px ;
    }
    .text {
      position: absolute;
      display: inline-block;
      
      /* margin: 20px; */
      height: 60px;
      top: 20px;
      /* background-color: red; */
    }
    h3 {
      /* display: inline-block; */
      /* line-height: 10px; */
      margin-bottom: 10px;
      color: rgb(188, 160, 113);


    }
    .text>h6 {
      line-height: 15px;
      color: rgb(153, 153, 153);
    }

    .page {
      list-style-type: none;
      position: absolute;
      bottom: 10px;
      left: 38%;
    }

    .page>li {
      float: left;
      background-color: #eee;
      text-align: center;
      line-height: 30px;
      margin: 5px;
      height: 30px;
      width: 50px;
    }

    /* .current {
      background-color: rgb(188, 160, 113);
    } */


    .login-wrap {
    width: 330px;
    margin: auto;
    }
    .menu-tab {
        text-align:center;
        
    }

    .menu-tab>li {
            display: inline-block;
            width: 88px;
            line-height: 36px;
            font-size: 14px;
            /* color: #fff; */
            border-radius: 2px;
            /* background-color: rgba(221, 221, 221, .1); */
            margin: 10px;
        }

        .current{
          background-color: rgb(188, 160, 113);
        }

   
  

 
 
</style>
