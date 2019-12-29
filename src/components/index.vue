<template>
  <div>
    <div class="nav">
      <div class="w">
        <!-- <img class="logo1" src="../../static/icon/图层4.png" alt=""> -->
        <img class="logo" src="../../static/icon/铲屎官.png" alt="">
        <div class="nav-list">
          <ul >
            <li><a href="" @click.prevent="navfun(0)" :class="navclass[0]">首页</a></li>
            <li><a href="" @click.prevent="navfun(1)" :class="navclass[1]">养猫101问</a></li>
            <li><a href="" @click.prevent="navfun(2)" :class="navclass[2]">猫咪品种</a></li>
            <li><a href="" @click.prevent="navfun(3)" :class="navclass[3]">寻找铲屎官</a></li>
            <li><a href="" @click.prevent="navfun(4)" :class="navclass[4]">流浪猫救助</a></li>
          </ul>
          <div class="chosse-buttom" ref="choosebuttom"></div>
        </div>
        <div class="right">
          <!-- 未登录 -->
          <div class="tologindiv" :class="{displayNone:isLogin}">
            <span @click="tologin(0)">登录</span>
            <el-divider direction="vertical"></el-divider>
            <span @click="tologin(1)">注册</span>
          </div>
          <!-- 已登录 -->
          <!-- 消息 -->
          <div class="mess" :class="{displayNone:!isLogin}" @mouseenter="messCardFunY()" @mouseleave="messCardFunN()"><img src="../../static/icon/消息(1).png" alt="">
            <div class="prompt" v-if="prompt != 0">
              <p >{{prompt}}</p>
            </div>
          </div>
          <!-- 头像 -->
          <div class="headdiv "  @click="gotoPersonalHomePage()" :class="{displayNone:!isLogin}" @mouseenter="userCardFunY()" @mouseleave="userCardFunN()" >
            <div class="head" >
              <img src="../../static/icon/头像.jpg" alt="">
            </div>
          </div>
          
        </div>
        <!-- 消息卡片 -->
        <!-- <transition> -->
        <div class="messCard" ref="messCard" @mouseenter="messCardFunY()" @mouseleave="messCardFunN()">
          <p  v-for="item in mess.slice(0,6)" :key="item.id" >
            
            <span class="title-name">{{item.name}}</span>
            <span class="title-action" v-if="item.type == 1">评论了你</span>
            <span class="title-action" v-if="item.type == 2">回复了你</span>
            <span class="title-time">{{item.time}}</span>
          </p>
          <div @click="tosetPage3">更多消息</div>
        </div>
        <!-- </transition> -->
        <!-- 用户信息卡片 -->
        <div class="userCard" ref="userCard" @mouseenter="userCardFunY()" @mouseleave="userCardFunN()">
          <div class="pic"><img src="../../static/icon/头像.jpg" alt="" @click="gotoPersonalHomePage()"></div>
          <div class="basemess">
            <p class="username" @click="gotoPersonalHomePage()">{{userMess.name}}</p>
            <p class="userleove" @click="gotoPersonalHomePage()">初级铲屎官</p>
          </div>
          <div class="userNum">
            <div class="li">
              <p>45</p>
              <p>我的文章</p>
            </div>
            <div class="li">
              <p>6</p>
              <p>我的收藏</p>
            </div>
            <div class="li">
              <p>8</p>
              <p>我的关注</p>
            </div>
            <div class="li">
              <p>4</p>
              <p>草稿</p>
            </div>
            <div class="li">
              <p>45</p>
              <p>浏览记录</p>
            </div>
            <div class="li">
              <p>5</p>
              <p>评论</p>
            </div>
          </div>
          <div class="btnli">
            <div class="setbtn" @click="tosetPage">设置</div>
            <div class="outbtn" @click="loginout">退出</div>
          </div>
        </div>
      </div>
      
    </div>
    <component :is="middDivName" @func="tosetPage" :tonotice="istosetPage3"></component>
  </div>
</template>

<script>
import Main from '@/components/1main.vue'
import Maintenance from '../components/2maintenance.vue'
import varieties from '../components/3varieties'
import adopt from '../components/4adopt'
import straycat from '../components/5straycat'
import personalHomePage from '../components/user/PersonalHomePage'
import setPage from '../components/user/setPage'
export default {
  data () {
    return {
      // 新消息数量
      isLogin:true
      ,prompt:1
      ,navclass:['chosse','','','','']
      ,middDivName:'Main'
      // 消息卡片
      ,mess:[
        {name:'喵喵喵',type:1,time:'昨天'},
        {name:'哈哈哈',type:2,time:'两天前'},
        {name:'我家主子我家主子我家主子',type:1,time:'昨天'},
        {name:'我家主子我家主子我家主子',type:1,time:'昨天'},
        {name:'我家主子我家主子我家主子',type:1,time:'昨天'},
      ]
      // 个人信息
      ,userMess:[
        {}
      ],
      istosetPage3:false
    }
  },
  components: {
    Main,
    Maintenance,
    varieties,
    adopt,
    straycat,
    personalHomePage,
    setPage
  },
  created () {
    if(this.$store.getters.getUser != null){
      this.isLogin = true;
      this.userMess = this.$store.getters.getUser;

    }else{
      this.isLogin = false;
    }
  },
  methods: {
    // 转到到个人首页
    gotoPersonalHomePage(){
      var doc = this.$refs.choosebuttom;
      doc.style.display = 'none';
      this.navclass = ['','','','',''];
      this.middDivName = 'personalHomePage';
      this.$refs.userCard.style.display = 'none';
    },
    // 导航条移动
    navfun(x){
      console.log(x);
      this.navclass = ['','','','',''];
      this.navclass[x] = 'chosse';
      console.log(this.navclass[x]);
      var doc = this.$refs.choosebuttom;
      doc.style.display = 'unset';
      switch(x)
      {
          case 0:
            doc.style.left = '8px';
            doc.style.width = '60px';       
            this.middDivName = 'Main';
            break;
          case 1:
            doc.style.left = '84px';
            doc.style.width = '107px';  
            this.middDivName = 'Maintenance';
            break;
          case 2:
            doc.style.left = '209px';
            doc.style.width = '94px';  
            this.middDivName = 'varieties';
            break;
          case 3:
            doc.style.left = '321px';
            doc.style.width = '113px';  
            this.middDivName = 'adopt';
            break;
          case 4:
            doc.style.left = '452px';
            doc.style.width = '113px';  
            this.middDivName = 'straycat';
            break;
          default:
      }
    },
    messCardFunY(){
      // console.log("显示messCard");
      this.$refs.messCard.style.display = 'unset';
    },
    messCardFunN(){
      // console.log("显示messCard");
      this.$refs.messCard.style.display = 'none';
    },
    userCardFunY(){
      // console.log("显示userCard");
      this.$refs.userCard.style.display = 'unset';
    },
    userCardFunN(){
      // console.log("显示userCard");
      this.$refs.userCard.style.display = 'none';
    },
    // 退出登录
    loginout(){
      // var user ={};
      console.log('退出登录')
      this.$store.commit('setUser', null);
      this.$router.push({
        path:this.$route.fullPath, // 获取当前连接，重新跳转
        query:{
          _time:new Date().getTime()/1000  // 时间戳，刷新当前router
        }
      })

    },
    // 去登录
    tologin(flag){
      if(flag==1){
        this.$router.push('/login?islogin=false');
      }else{
        this.$router.push('/login');  
      }
    },
    // 接收子组件参数，
    tosetPage(data){
      // 转到消息设置页
      // console.log(data);
      var doc = this.$refs.choosebuttom;
      doc.style.display = 'none';
      this.navclass = ['','','','',''];
      this.middDivName = 'setPage';
      this.$refs.userCard.style.display = 'none';
      //转到个人页面
      if(data == 'fromSetPage'){
        this.gotoPersonalHomePage();
      }
    },
    // 转到消息设置页,进入消息tab
    tosetPage3(){
      this.prompt =0;
       var doc = this.$refs.choosebuttom;
      doc.style.display = 'none';
      this.istosetPage3 = true;
      this.navclass = ['','','','',''];
      this.middDivName = 'setPage';
      this.$refs.messCard.style.display = 'none';
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav{
    height: 88px;
    background-color: #ffffff;
    box-shadow:0px 0px 8px 1px rgba(0,0,0,0.1);
    .w{
      position: relative;
      .messCard{
        position: absolute;
        display: none;
        // width: 240px;
        // height: 206px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 7px 24px 2px rgba(0,0,0,0.2);
        right: 70px;
        top: 89px;
        padding: 6px 20px 18px 20px;
        box-sizing: border-box;
        min-height: 100px;
        min-width: 200px;
        z-index: 3;
        p{
          // display: block;
          cursor: pointer;
          margin-top: 14px;
          font-size: 14px;
          line-height: 16px;
          :first-child{
            // float: left;
            color: #333333;
            max-width: 30px;
            overflow: hidden;
          }
          :nth-child(2){
            // float: left;
            color: #666666;
          }
          :nth-child(3){
            float: right;
            font-size: 12px;
            color: #999999;
            padding-left: 12px;
          }
        }
        p:hover span{
          color: #f58b54;
        }
        div{
          margin-top: 18px;
          float: right;
          color: #666666;
          font-size: 14px;
        }
        div:hover{
          cursor: pointer;
          color: #f58b54;
        }
      }
      .userCard{
        position: absolute;
        display: none;
        width: 240px;
        // height: 206px;
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 7px 24px 2px rgba(0,0,0,0.2);
        right: 0px;
        top: 89px;
        padding: 14px;
        box-sizing: border-box;
        // vertical-align: middle;
        // display: flex;
        // justify-content: center;
        // vertical-align: top;
        z-index: 3;

        .pic{
          cursor: pointer;
          height: 55px;
          width: 55px;
          border-radius: 55px;
          overflow: hidden;
          display: inline-block;
          img{
            height: 55px;
            width: 55px;
          }
        }
        .basemess{
          // background-color: red;
          display: inline-block;
          height: 55px;
          margin-left: 12px;
          vertical-align: top;
            cursor: pointer;

          // width: 100%;
          // margin-top: 5px;
          // padding: 5px 0;
          // p{
          //   line-height: 22px;
          // }
          :nth-child(1){
            size: 14px;
            font-weight: bold;
            line-height: 26px;
            color: #333333;
            margin-top: 2px;
            // cursor: pointer;
          }
          :nth-child(2){
            margin-top: 2px;
            size: 14px;
            color: #666666;
            line-height: 22px;
          }
        }
        .userNum{
          width: 100%;
          // background-color: yellow;
          height: 118px;
          margin-top: 14px;
          border-top: 1px solid #eeeeee;
          padding-top: 12px;
          display: flex;
          justify-content: space-between;
          align-content: space-between;
          flex-wrap: wrap;
          .li{
            
            width: 64px;
            height: 56px;
            // background-color: red;
            :nth-child(1){
              padding-bottom: 4px;
            } 
            p{
              text-align: center;
              cursor: pointer;
            }
            
          }
          .li:hover p{
            color: #f58b54;
          }
        }
        .btnli{
          margin-top: 12px;
          margin-left: 37px;
          div{
            display: inline-block;
            height: 24px;
            width: 58px;
            // background-color: #f58b54;
            border-radius: 4px;
            text-align: center; 
            font-size: 14px;
            color: #fff;
            line-height: 24px;
            cursor: pointer;
          }
          .setbtn{
            background-color: #f58b54;
          }
          .outbtn{
            background-color: #bbbbbb;
            margin-left: 14px;
          }
        }
      }
    }
    .logo{
      margin-top: 23px;
      // vertical-align: ;
      float: left;
    }
    .logo1{
      margin-top: 23px;
      height: 50px;
      width: 50px;
      margin-right: 20px;
      float: left;

    }
    .nav-list{
      display: inline-block;
      height: 100%;
      margin-left: 132px;
      position: relative;
      .chosse-buttom{
        position: absolute;
        width: 60px;
        height: 6px;
        background-color: #f58b54;
        border-radius: 3px;
        top: 64px;
        left: 8px;
        transition: left 500ms;
      }
      .chosse{
        color: #f58b54;
      }
      li{
        float: left;
        a{
          line-height: 88px;
          padding: 0 20px;
          font-size: 18px;
          color: #333333;

        }
        a:hover{
          color: #f58b54;
        }
      }
    }
    .right{
      float: right;
      div.displayNone{
        display: none;
      }
      .tologindiv{
        vertical-align: middle;
        margin-top: 32px;
        span{
          color: #333;
          font-size: 16px;
          &:nth-child(1){
            color: #f58b54;
          }
          cursor: pointer;
        }
      }
      .mess{
        cursor: pointer;
        display: inline-block;
        position: relative;
        top: 30px;
        vertical-align: top;
        height: 60px;
        padding: 0 15px;
        .prompt{
          position: absolute;
          background-color: #f58b54;
          width: 16px;
          height: 16px;
          border-radius: 16px;
          border: 2px solid white;
          top: -6px;
          right: 7px;
          p{
            font-weight: bold;
            color: white;
            font-size: 11px;
            text-align: center;
            line-height: 16px;
          }
        }
      }
      .headdiv{
          margin-top: 21px;
          padding-left: 19px;
          padding-bottom: 21px;
          cursor: pointer;
          display: inline-block;
        .head{
          height: 47px;
          width: 47px;
          border-radius: 47px;
          overflow: hidden;
          img{
            height: 47px;
            width: 47px;
          }
        }
      }
    }
  }
  .v-enter{
    opacity: 0;
  }
  .v-enter-to
  {
    opacity: 1;
  }
  .v-enter-active{
    transition: all 0.5s ease;
  }
  .v-leave{
    opacity: 1;
  }
  .v-leave-to
  {
    opacity: 2;
  }
  .v-leave-active{
    transition: all 0.5s ease;
  }
</style>