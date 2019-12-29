<template>
  <div class="noticediv">
    <div class="titlediv">
      <p>消息通知</p>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          {{sortWay}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="全部分类">全部分类</el-dropdown-item>
          <el-dropdown-item command="系统通知">系统通知</el-dropdown-item>
          <el-dropdown-item command="评论">评论</el-dropdown-item>
          <el-dropdown-item command="回复">回复</el-dropdown-item>
          <el-dropdown-item command="点赞">点赞</el-dropdown-item>
          <el-dropdown-item command="关注">关注</el-dropdown-item>
          
        </el-dropdown-menu>
      </el-dropdown>
      <div class="line"></div>
    </div>
    <div class="noticeList">
      <div class="list" v-for="(notice,index) in showNoticeList" :key="index">
        <div class="icon" v-if="notice.type == 1"></div>
        <div class="icon icon2" v-if="notice.type == 2"></div>
        <div class="icon icon3" v-if="notice.type == 3"></div>
        <div class="icon icon4" v-if="notice.type == 4"></div>
        <div class="icon icon5" v-if="notice.type == 5"></div>
        <div class="notice tongzhi" v-if="notice.type == 1">
          <span class="title">系统通知</span><br>
          <span class="mess">您发布违规信息，已被投诉</span>
          <span class="time">2019.07.26</span>
        </div>
        <div class="notice gzhu" v-if="notice.type != 1 && notice.type == 5">
          <div class="gzhu">
            <span>{{notice.fromUser}}</span>
            <span>关注了你</span>
          </div>
           
           <span class="time gzhutime">{{notice.time}}</span>
        </div>
        <div class="notice tongzhi" v-if="notice.type != 1 && notice.type != 5">
          <span class="title">
            <span>{{notice.fromUser}}</span>
            <!-- 2：评论，3回复，4点钟，5关注 -->
            <span v-if="notice.type == 2">评论了你的</span>
            <span v-if="notice.type == 3">回复了你的</span>
            <span v-if="notice.type == 4">点赞了你的</span>
            <!-- <span class="gzhu" v-if="notice.type == 5">关注了你</span> -->

            <span v-if="notice.totype == 1">文章</span>
            <span v-if="notice.totype == 2">评论</span>
            <span v-if="notice.totype == 3">提问</span>
          </span>
          <br>
          <span class="mess">{{notice.title}}</span>
          <span class="time">{{notice.time}}</span>
        </div>
      </div>
      <p class="tobuttom" >没有更多了~</p>
      <!-- <div class="list">
        <div class="icon"></div>
        <div class="notice tongzhi">
          <span class="title">
            <span>我家猫主子</span>
            <span>评论了你的</span>
            <span>文章</span>
          </span>
          <br>
          <span class="mess">您发布违规信息，已被投诉</span>
          <span class="time">2019.07.26</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sortWay:'全部分类',
      showNoticeList:[],
      noticeList:[
        {
          type:1,//1:系统通知，2：评论，3回复，4点钟，5关注
          fromUser:'我家主子',
          // totype:1,//1文章，2评论，3提问
          title:'你知道猫有几条命吗',
          time:'2019.06.22'
        },
        {
          type:2,//1:系统通知，2：评论，3回复，4点钟，5关注
          fromUser:'我家主子',
          totype:2,
          title:'你知道猫有几条命吗',
          time:'2019.06.22'
        },
        {
          type:1,//1:系统通知，2：评论，3回复，4点钟，5关注
          fromUser:'我家主子',
          // totype:1,
          title:'你知道猫有几条命吗',
          time:'2019.06.22'
        },
        {
          type:3,//1:系统通知，2：评论，3回复，4点钟，5关注
          fromUser:'我家主子',
          totype:2,
          title:'你知道猫有几条命吗',
          time:'2019.06.22'
        },
        {
          type:4,//1:系统通知，2：评论，3回复，4点钟，5关注
          fromUser:'我家主子',
          totype:3,
          title:'你知道猫有几条命吗',
          time:'2019.06.22'
        },
        {
          type:5,//1:系统通知，2：评论，3回复，4点钟，5关注
          fromUser:'我家主子',
          time:'2019.06.22'
        },
      ]
    }
  },
  methods: {
    // 选择排序方法
    handleCommand(command) {
      // this.$message('click on item ' + command);
      this.sortWay = command;
      var list = [];
      if(command == '全部分类'){
        list = this.noticeList;
      }
      if(command == '系统通知'){
        list = this.noticeList.filter(function(notice){
          return notice.type == 1;
        })
      }
      if(command == '评论'){
        list = this.noticeList.filter(function(notice){
          return notice.type == 2;
        })
      }
      if(command == '回复'){
        list = this.noticeList.filter(function(notice){
          return notice.type == 3;
        })
      }
      if(command == '点赞'){
        list = this.noticeList.filter(function(notice){
          return notice.type == 4;
        })
      }
      if(command == '关注'){
        list = this.noticeList.filter(function(notice){
          return notice.type == 5;
        })
      }

      this.showNoticeList = list;
    },
  },
  mounted () {
    this.showNoticeList = this.noticeList;
  }
}
</script>

<style lang='scss' scoped>
.noticediv{
  min-height: calc(100vh - 101px);
  padding-bottom: 100px;
  box-sizing: border-box;
}
  .titlediv{
    height: 64px;
    p{
      line-height: 64px;
      font-size: 16px;
      color: #666;
      display: inline-block;
      
    }
    .el-dropdown{
      float: right;
      margin-top: 24px;
      color: #999999;
    }
    .line{
      height: 1px;
      background-color: #dddddd;
      // margin-bottom: 20px;
    }
  }
  .noticeList{
    .list{

      margin-top: 24px;
      .icon{
        background-image: url('../../../static/icon/圆icon.png');
        width: 50px;
        height: 50px;
        display: inline-block;
        // background-position-x: 50px;
      }
      .icon2{
        background-position-x: -50px;
      }
      .icon3{
        background-position-x: -100px;
      }
      .icon4{
        background-position-x: -150px;
      }
      .icon5{
        background-position-x: -200px;
      }
      .notice{
        height: 50px;
        vertical-align: top;
        display: inline-block;
        width: calc(100% - 55px);
        padding-left: 10px;
        box-sizing: border-box;
        .gzhu{
            // line-height: 48px;
            // margin-top: 10px;
            display: inline-block;
            font-size: 14px;
            line-height: 50px;
            // font-weight: 600;
            color: #666;
            
            span{
              &:nth-child(1){
                font-weight: 600;
                cursor: pointer;
              }
            }
          }
        .title{
          font-size: 14px;
          line-height: 20px;
          // font-weight: 600;
          color: #666;
          
          span{
            &:nth-child(1){
              font-weight: 600;
              cursor: pointer;
            }
          }
          
        }
        .mess{
          font-size: 15px;
          font-weight: bold;
          color: #333;
          line-height: 30px;
          cursor: pointer;
        }
        .time{
          // line-height: 40px;
          // height: 50px;
          margin-top: -6px;
          vertical-align: text-top;
          float: right;
          font-size: 14px;
          color: #333;
          
        }
        .gzhutime{
          line-height: 50px;
          margin-top: 0;
        }
      }
    }

  }
</style>
