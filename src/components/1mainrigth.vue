<template>
  <div>
    <div class="right">
      <!-- 搜索栏 -->
      <div class="search" >
        <input type="text" :placeholder="hotsearch" v-model="searchData" @keyup.enter="searchFun()">
        <button @click="searchFun()"><i></i></button>
      </div>
      <!-- 快捷按钮 -->
      <div class="shortcutButton">
        <div class="wenzhang Btn" @click="shaleFun()"><i></i><p>我要分享</p></div>
        <div class="tiwen Btn" @click="dialogFormVisible = true"><i></i><p>我要提问</p></div>
        <!-- 我要提问表单 -->
        <el-dialog title="填写问题" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="问题：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="描述" :label-width="formLabelWidth">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="askFun">确 定</el-button>
          </div>
        </el-dialog>

        <div class="lingyang Btn" @click="findFun()"><i></i><p>寻找铲屎官</p></div>
        <div class="liulangmao Btn" @click="llmFun()"><i></i><p>流浪猫救助</p></div>
      </div>
      <!-- 热议 -->
      <div class="hotlist" id="hotlist">
        <p class="title">铲屎官热议</p>
        <div class="block">
          <el-timeline id="el-timeline">
            <el-timeline-item 
              v-for="(activity, index) in activities"
              :key="index"
              :icon="activity.icon"
              :type="activity.type"
              :color="activity.color"
              :size="activity.size"
              :timestamp="activity.timestamp">
              {{activity.content}}
            </el-timeline-item>
          </el-timeline>
        </div>

      </div>
      <!-- 固定定位按钮 -->
      <div class="shortcutButton2" id="shortcutButton2">
        <div class="btn1" title="我要分享" @click="shaleFun()"></div>
        <div class="btn2" title="我要提问" @click="askFun()"></div>
        <div class="totop" title="返回顶部" @click="returnTop"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        // 搜索框
      hotsearch:'猫窝打造'
      , searchData:''
      // 热议时间线
      , activities: [{
          content: '为什么猫被抓住后颈就会瞬间安静？',
          timestamp: '2018-04-12 20:46',
          // size: 'large',
          // type: 'primary',
          // icon: 'el-icon-more'
        }, {
          content: '你家猫的名字有什么寓意？',
          timestamp: '2018-04-03 20:46',
          // color: '#f58b47'
        }, {
          content: '多年疑问：猫吸猫薄荷会上瘾吗？人能吃猫薄',
          timestamp: '2018-04-03 20:46',
        }, {
          content: '新一代的国民狗粮，你知道是谁吗？',
          timestamp: '2018-04-03 20:46',
        }, {
          content: '新一代的国民代的国民狗粮，你知道是谁吗？',
          timestamp: '2018-04-03 20:46',
        }, {
          content: '新一代的国民狗粮，你知道是谁吗？',
          timestamp: '2018-04-03 20:46',
        }, {
          content: '新一代的国民狗粮，你知道是谁吗？',
          timestamp: '2018-04-03 20:46',
        }, {
          content: '新一代的国民狗粮，你知道是谁吗？',
          timestamp: '2018-04-03 20:46'
        }],
      // 我要提问按钮
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '80px'
    }
  },
  methods: {
    searchFun(){
      if(this.searchData != ''){
        console.log("提交的数据是："+this.searchData);
      }else{
        console.log("提交的数据是："+this.hotsearch);
      }
    },
    // 点击分享按钮
    shaleFun(){
      console.log("点击分享按钮");
    },
    // 点击提问按钮
    askFun(){
      this.dialogFormVisible = false;
      // console.log("点击提问按钮");
      // alert("tijiao")
    },
    // 点击寻找铲屎官按钮
    findFun(){
      console.log("点击寻找铲屎官按钮");
    },
    // 点击流浪猫救助按钮
    llmFun(){
      console.log("点击流浪猫救助按钮");

    },
    // 滚动事件
    handleScroll(){
      var des = document.documentElement.scrollTop;
      var doc = document.getElementById("hotlist");
      var shortcutButton2 = document.getElementById("shortcutButton2");
      // console.log(document.documentElement.scrollTop);
      if(des >= 400){
        doc.style.position = 'fixed';
        doc.style.top = '0';
        // 显示shortcutButton2
        shortcutButton2.style.display = 'unset';

      }else{
        doc.style.position = 'unset';
        doc.style.top = '0';
        // 隐藏
        shortcutButton2.style.display = 'none';
      }
      // if()
    },
    // 点击返回顶部
    returnTop() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      var doc = document.getElementById("hotlist");
      var shortcutButton2 = document.getElementById("shortcutButton2");
      doc.style.position = 'unset';
      doc.style.top = '0';
      // 隐藏
      shortcutButton2.style.display = 'none';
    }
  },
  mounted(){
    // 热议时间线
    var lists = document.getElementById("el-timeline").children;
    var maxheight = document.getElementById("hotlist").offsetHeight;
    for(var x=0; x<lists.length; x++){
      maxheight -= lists[x].offsetHeight;
      if(maxheight<0){
        lists[x].style.display = 'none';
      }
    }
    // 滚动事件
    window.addEventListener('mousewheel',this.handleScroll,false)
  },
}
</script>

<style lang="scss" scoped>
.right{
      // display: inline-block;
      // background-color: red;
      height: 299px;
      float: right;
      width: 245px;
      position: absolute;
      right: 0;
      top: 14px;
      .search{
        width: 245px;
        height: 42px;
        // background-color: #;
        position: relative;
        margin-bottom: 12px;
        input{
          height: 100%;
          width: 100%;
          border-radius: 4px;
          font-size: 14px;
          padding-left: 12px;
          box-sizing: border-box;
          color: #333;
        }
        input:focus{
          border: 1px solid #f58b54
        }
        button{
          position: absolute;
          height: 40px;
          width: 40px;
          margin-top: 1px;
          margin-right: 1px;
          // background-color: red;
          top: 0px;          
          right: 0px;;
          border-radius: 4px;
          background-color: #fff;
          cursor: pointer;
          i{
            background-image: url('../../static/icon/搜索.png');
            height: 22px;
            width: 22px;
            display: inline-block;
            background-size: contain;
          }
        }
        
      }
      .shortcutButton{
        width: 245px;
        height: 245px;
        background-color: #fff;
        border-radius: 4px;
        display: flex;
         align-content:center;
         flex-wrap: wrap;
        .Btn{
          display: inline-block;
          width: 122px;
          height: 122px;
          // background-color: #eee;
          cursor: pointer;
          i{
            height: 50px;
            width: 50px;
            // background-color: green;
            display: block;
            margin: 0 auto;
            margin-top: 21px;
          }
          p{
            width: 100%;
            text-align: center;
            color: #333;
            font-size: 14px;
            margin-top: 9px;
          }
        }
        // .Btn:hover p{
        //   color: #f58b54;
        // }
        .wenzhang{
          // border-radius: 0 0 4px 0;
          border-right: 1px solid #f4f4f4;
          border-bottom: 1px solid #f4f4f4;
          i{
            background-image: url('../../static/icon/写文章.png');
          }
        }
        .wenzhang:hover p{
          color: #f58b54;
          
        }
        .wenzhang:hover i{
          background-image: url('../../static/icon/写文章选中.png');            
        }
        .tiwen{
          // border-radius:  0 4px 0 0;
          i{
            background-image: url('../../static/icon/提问.png');
          }
        }
        .tiwen:hover p{
          color: #f58b54;
          
        }
        .tiwen:hover i{
          background-image: url('../../static/icon/分享选中.png');            
        }
        .lingyang{
          // border-radius:  0 0 0 4px;
          i{
            background-image: url('../../static/icon/寻找铲屎官.png');
          }
        }
        
        .lingyang:hover p{
          color: #f58b54;
          
        }
        .lingyang:hover i{
          background-image: url('../../static/icon/寻找铲屎官选中.png');            
        }
        .liulangmao{
          // border-radius: 4px 0 0 0;
          i{
            background-image: url('../../static/icon/流浪猫救助.png');
          }
          border-top: 1px solid #f4f4f4;
          border-left: 1px solid #f4f4f4;
        }
        .liulangmao:hover p{
          color: #f58b54;
          
        }
        .liulangmao:hover i{
          background-image: url('../../static/icon/流浪猫救助选中.png');            
        }
        
      }
      .hotlist{
        height: 96.5vh;
        background-color: #fff;
        border-radius: 4px;
        margin-top: 12px;
        // margin-bottom: 12px;
        position: unset;
        width: 245px;
        // top: 0;
        // overflow: hidden;
        .title{
          padding: 18px 0;
          width: 100%;
          color: #333;
          text-align: center;
          font-size: 15px;
          font-weight: bold;
        }
        .block{
          padding:0  14px;
        }
      }
      .shortcutButton2{
        position: fixed;
        bottom: 120px;
        right: 200px;
        display: none;
        div{
          background-position: center center;
          background-color: #f4cfbc;
          border-radius: 4px;
          width: 40px;
          height: 40px;
          margin-bottom: 18px;
          background-repeat: no-repeat;
          cursor: pointer;
        }
        .totop{
          background-image: url('../../static/icon/顶部.png');
        }
        .btn1{
          background-image: url('../../static/icon/写文章选中.png');
          background-size: 25px 25px;
        }
        .btn2{
          background-image: url('../../static/icon/分享选中.png');
          background-size: 25px 25px;
        }
      }
    }
</style>