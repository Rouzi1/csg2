<template>
  <div >
    <!-- 个人主页 -->
    <div class="top">
      <div class="w">
        <div class="messdiv">
          <el-avatar :size="94" src="../../../static/icon/头像2.png"></el-avatar>
          <div class="nameandlevel"> 
            <p class="name">{{userMess.name}}
              <i v-if="userMess.gender == '男'" class="el-icon-male"></i>
              <i v-if="userMess.gender == '女'" class="el-icon-female"></i>
            </p>
            <p class="level">等级：初级铲屎官</p>
          </div>
          <div class="focuson">
            <p>关注</p>
            <p>12</p>
          </div>
          <div class="focuson">
            <p>粉丝</p>
            <p>32</p>
          </div>
          <div class="setbtn" @click="tosetPage">设置</div>
        </div>
      </div>
      <div class="nav" id="nav">
        <ul>
          <li><a href="" :class="navclass[0]" @click.prevent="navfun(0)">文章</a></li>
          <li><a href="" :class="navclass[1]" @click.prevent="navfun(1)">问题</a></li>
          <li><a href="" :class="navclass[2]" @click.prevent="navfun(2)">回答</a></li>
          <li><a href="" :class="navclass[3]" @click.prevent="navfun(3)">领养</a></li>
          <li><a href="" :class="navclass[4]" @click.prevent="navfun(4)">流浪猫</a></li>
          <li><a href="" :class="navclass[5]" @click.prevent="navfun(5)">点赞</a></li>
          <li><a href="" :class="navclass[6]" @click.prevent="navfun(6)">关注</a></li>
          <li><a href="" :class="navclass[7]" @click.prevent="navfun(7)">收藏</a></li>
          <!-- <li><a href="" :class="navclass[8]" @click.prevent="navfun(8)">资料</a></li> -->
        </ul>
      </div>
      
    </div>
    <div class="listdiv w">
      <!-- 文章 -->
      <div class="list" :class="{listIsDisplayNone:choosenav[0]}">
        <div class="titlediv">
          <p>我发布的文章</p>
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              {{sortWay}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="按发布时间排序">按发布时间排序</el-dropdown-item>
              <el-dropdown-item command="按点赞数排序">按点赞数排序</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <div class="line"></div>
        </div>
        <div class="isListNull" v-if="wenzhangList.length == 0">暂无发布文章</div>
         <!-- 列表 -->
         <div class="wenzhanglist" v-for="(wenzhang,index) in wenzhangList" :key="index">
           <p class="title">{{wenzhang.title}}</p>
           <div class="bottom-left">
              <div class="zan" @click="zanfun(1,index)" v-if="!wenzhang.iszan">
                <i></i>
                <span>{{wenzhang.zan}}赞</span>
              </div>
              <div class="zan zanL" @click="zanfun(1,index)" v-if="wenzhang.iszan">
                <i></i>
                <span>{{wenzhang.zan}}赞</span>
              </div>
              <div class="pinglun">
                <i></i>
                <span>{{wenzhang.pinglun}}评论</span>
              </div>
              <div class="yuedu">
                <i></i>
                <span>{{wenzhang.yuedu}}阅读</span>
              </div>
           </div>
           <div class="line"></div>
         </div>
         <p class="tobuttom"  v-if="wenzhangList.length != 0">没有更多了~</p>
      </div>
      <!-- 问题 -->
      <div class="list" :class="{listIsDisplayNone:choosenav[1]}">
        <div class="titlediv">
          <p>我发布的问题</p>
          <div class="line"></div>
        </div>
        <div class="isListNull" v-if="questionList.length == 0">暂无发布问题</div>
        <div class="wenzhanglist " v-for="(wenzhang,index) in questionList" :key="index">
          <div class="list-title">
            <p class="title">{{wenzhang.title}}</p>
          </div>
          <div class="bottom clearfix">
            <div class="bottom-left">
              <div class="writeAnswer">
                <i class="el-icon-edit"></i>
                <span>写回答</span>
              </div>
              <div class="pinglun">
                <i></i>
                <span>{{wenzhang.huida}}回答</span>
              </div>
              <div class="yuedu">
                <i></i>
                <span>{{wenzhang.liulan}}阅读</span>
              </div>
            </div>
          </div>
           <div class="line"></div>
        </div>
         <p class="tobuttom" v-if="questionList.length != 0">没有更多了~</p>
      </div>
      <!-- 回答 -->
      <div class="list" :class="{listIsDisplayNone:choosenav[2]}">
          <div class="titlediv">
          <p>我发布的回答</p>
          <div class="line"></div>
        </div>
        <div class="isListNull" v-if="huidaList.length == 0">暂无回答</div>
        <div class="wenzhanglist" v-for="(wenzhang,index) in huidaList" :key="index">
           <div class="list-title">
            <p class="title">{{wenzhang.title}}</p>
          </div>
          <!-- <div class="comtentdiv" v-if="wenzhang.imgs.length != 0">
            <div class="comtent">
              <p><span class="athor">{{wenzhang.athor}}</span><span>回答：</span>{{wenzhang.content}}</p>
            </div>
            <el-image 
                style="width: 226px; height: 124px"
                :src="wenzhang.imgs[0]" 
                >
              </el-image>
          </div> -->
          <div class="comtentdiv contentdiv2">
            <div class="comtent comtent2">
              <p><span>回答：</span>{{wenzhang.content}}</p>
            </div>
          </div>

          <div class="bottom clearfix">
            <div class="bottom-left">
              <div class="zan" @click="zanfun(index)" v-if="!wenzhang.iszan">
                <i></i>
                <span>{{wenzhang.zan}}赞</span>
              </div>
              <div class="zan zanL" @click="zanfun(index)" v-if="wenzhang.iszan">
                <i></i>
                <span>{{wenzhang.zan}}赞</span>
              </div>
              <div class="pinglun">
                <i></i>
                <span>{{wenzhang.pinglun}}评论</span>
              </div>
              <div class="yuedu">
                <i></i>
                <span>{{wenzhang.yuedu}}阅读</span>
              </div>
            </div>
          </div>
          <div class="line "></div>
        </div>
         <p class="tobuttom"  v-if="huidaList.length != 0">没有更多了~</p>
      </div>
      <!-- 领养 -->
      <div class="list" :class="{listIsDisplayNone:choosenav[3]}">
        <div class="titlediv">
          <p>我发布的领养信息</p>
          <div class="line"></div>
        </div>
        <div class="isListNull" v-if="adoptList.length == 0">暂无发布领养信息</div>
         <!-- 列表 -->
         <div class="wenzhanglist" v-for="(wenzhang,index) in adoptList" :key="index">
           <p class="title">{{wenzhang.title}}</p>
           <div class="bottom-left">
              <div class="zan" @click="zanfun(1,index)" v-if="!wenzhang.iszan">
                <i></i>
                <span>{{wenzhang.zan}}赞</span>
              </div>
              <div class="zan zanL" @click="zanfun(1,index)" v-if="wenzhang.iszan">
                <i></i>
                <span>{{wenzhang.zan}}赞</span>
              </div>
              <div class="pinglun">
                <i></i>
                <span>{{wenzhang.pinglun}}评论</span>
              </div>
              <div class="yuedu">
                <i></i>
                <span>{{wenzhang.yuedu}}阅读</span>
              </div>
           </div>
           <div class="line"></div>
         </div>
         <p class="tobuttom"  v-if="adoptList.length != 0">没有更多了~</p>
      </div>
      <!-- 流浪猫 -->
      <div class="list" :class="{listIsDisplayNone:choosenav[4]}">
        <div class="titlediv">
          <p>我发布的流浪猫信息</p>
          <div class="line"></div>
        </div>
        <div class="isListNull" v-if="straycatList.length == 0">暂无发布流浪猫信息</div>
         <!-- 列表 -->
         <div class="wenzhanglist" v-for="(wenzhang,index) in straycatList" :key="index">
           <p class="title">{{wenzhang.title}}</p>
           <div class="bottom-left">
              <div class="zan" @click="zanfun(1,index)" v-if="!wenzhang.iszan">
                <i></i>
                <span>{{wenzhang.zan}}赞</span>
              </div>
              <div class="zan zanL" @click="zanfun(1,index)" v-if="wenzhang.iszan">
                <i></i>
                <span>{{wenzhang.zan}}赞</span>
              </div>
              <div class="pinglun">
                <i></i>
                <span>{{wenzhang.pinglun}}评论</span>
              </div>
              <div class="yuedu">
                <i></i>
                <span>{{wenzhang.yuedu}}阅读</span>
              </div>
           </div>
           <div class="line"></div>
         </div>
         <p class="tobuttom"  v-if="straycatList.length != 0">没有更多了~</p>
      </div>
      <!-- 点赞 -->
      <div class="list" :class="{listIsDisplayNone:choosenav[5]}">
        <!-- <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="文章" name="first">文章</el-tab-pane>
          <el-tab-pane label="问题" name="second">问题</el-tab-pane>
          <el-tab-pane label="回答" name="third">回答</el-tab-pane>
          <el-tab-pane label="领养" name="fourth">领养</el-tab-pane>
          <el-tab-pane label="流浪猫" name="five">流浪猫</el-tab-pane>
        </el-tabs> -->
        <div class="titlediv">
          <p>我的点赞</p>
          <div class="line"></div>
        </div>
        <div class="isListNull" v-if="shoucangList.length == 0">暂无点赞</div>
         <!-- 列表 -->
         <div class="wenzhanglist" v-for="(wenzhang,index) in shoucangList" :key="index">
           <p class="titlediv">点赞了 <span class="type">文章 </span><span class="title">{{wenzhang.title}}</span></p>
           <div class="bottom-left">
              <!-- <div class="zan" @click="zanfun(1,index)" v-if="!wenzhang.iszan">
                <i></i>
                <span>{{wenzhang.zan}}赞</span>
              </div>
              <div class="zan zanL" @click="zanfun(1,index)" v-if="wenzhang.iszan">
                <i></i>
                <span>{{wenzhang.zan}}赞</span>
              </div>
              <div class="pinglun">
                <i></i>
                <span>{{wenzhang.pinglun}}评论</span>
              </div>
              <div class="yuedu">
                <i></i>
                <span>{{wenzhang.yuedu}}阅读</span>
              </div> -->
           </div>
           <div class="line"></div>
         </div>
         <p class="tobuttom"  v-if="straycatList.length != 0">没有更多了~</p>
      </div>
      <!-- 关注 -->
      <!-- 点赞 -->
      <!-- 资料 -->
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      userMess:null,
      navclass:['choose','','','','','','','',''],
      choosenav:[false,true,true,true,true,true,true,true,true],
      sortWay:'按发布时间排序',
      wenzhangList:[
        {
          title:'关于猫到底有几条命。',
          zan:12,
          iszan:false,
          pinglun:22,
          yuedu:124
        },
        {
          title:'关于猫到底有几条命。',
          zan:12,
          iszan:false,
          pinglun:22,
          yuedu:124
        },
        {
          title:'关于猫到底有几条命。',
          zan:12,
          iszan:false,
          pinglun:22,
          yuedu:124
        },
        {
          title:'关于猫到底有几条命。',
          zan:12,
          iszan:false,
          pinglun:22,
          yuedu:124
        },
        {
          title:'关于猫到底有几条命。',
          zan:12,
          iszan:false,
          pinglun:22,
          yuedu:124
        },
        {
          title:'关于猫到底有几条命。',
          zan:12,
          iszan:false,
          pinglun:22,
          yuedu:124
        },
        {
          title:'关于猫到底有几条命。',
          zan:12,
          iszan:false,
          pinglun:22,
          yuedu:124
        },
        {
          title:'关于猫到底有几条命。',
          zan:12,
          iszan:false,
          pinglun:22,
          yuedu:124
        },
        {
          title:'关于猫到底有几条命。',
          zan:12,
          iszan:true,
          pinglun:22,
          yuedu:124
        },
        {
          title:'关于猫到底有几条命。',
          zan:12,
          iszan:false,
          pinglun:22,
          yuedu:124
        },
        {
          title:'关于猫到底有几条命。',
          zan:12,
          iszan:false,
          pinglun:22,
          yuedu:124
        },
      ],
      questionList:[
        {
          title:'11给猫起什么名字？',
          huida:12,
          liulan:1112,
        },
        {
          title:'11给猫起什么名字？',
          huida:12,
          liulan:1112,
        },
        {
          title:'11给猫起什么名字？',
          huida:12,
          liulan:1112,
        },
        {
          title:'11给猫起什么名字？',
          huida:12,
          liulan:1112,
        },
        {
          title:'11给猫起什么名字？',
          huida:12,
          liulan:1112,
        },
        {
          title:'11给猫起什么名字？',
          huida:12,
          liulan:1112,
        },
        {
          title:'11给猫起什么名字？',
          huida:12,
          liulan:1112,
        },
        {
          title:'11给猫起什么名字？',
          huida:12,
          liulan:1112,
        },
        {
          title:'11给猫起什么名字？',
          huida:12,
          liulan:1112,
        },
        {
          title:'11给猫起什么名字？',
          huida:12,
          liulan:1112,
        },
        {
          title:'11给猫起什么名字？',
          huida:12,
          liulan:1112,
        },
        {
          title:'11给猫起什么名字？',
          huida:12,
          liulan:1112,
        },
      ],
      huidaList:[
        {
          id:1,
          title:'来说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          zan:111,
          iszan:false,
          pinglun:233,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2019.05.26',
          place:'东莞松山'
        },
        {
          id:1,
          title:'来说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          zan:111,
          iszan:false,
          pinglun:233,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2019.05.26',
          place:'东莞松山'
        },
        {
          id:1,
          title:'来说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          zan:111,
          iszan:false,
          pinglun:233,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2019.05.26',
          place:'东莞松山'
        },
        {
          id:1,
          title:'来说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          zan:111,
          iszan:false,
          pinglun:233,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2019.05.26',
          place:'东莞松山'
        },
        {
          id:1,
          title:'来说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          zan:111,
          iszan:false,
          pinglun:233,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2019.05.26',
          place:'东莞松山'
        },
      ],
      adoptList:[],
      straycatList:[],
      shoucangList:[
        {
          type:1,
          title:'ddddddddddd',
          time:'2019.02.23'
        }
      ]
    }
  },
  methods: {
    // 个人页导航
    navfun(x){
      this.navclass = ['','','','','','','','',''];
      this.navclass[x] = 'choose';
      this.choosenav = [true,true,true,true,true,true,true,true,true];
      this.choosenav[x] = false;
    },
    // 选择排序方法
    handleCommand(command) {
      // this.$message('click on item ' + command);
      this.sortWay = command;
    },
    zanfun(x,index){
      console.log('11');
      if(x==1){
        if(this.wenzhangList[index].iszan){
          this.wenzhangList[index].zan -=1;
        }else{
          this.wenzhangList[index].zan +=1;
        }
        this.wenzhangList[index].iszan = !this.wenzhangList[index].iszan;
      }else{
         if(this.guanzhuList[index].iszan){
          this.guanzhuList[index].zan -=1;
        }else{
          this.guanzhuList[index].zan +=1;
        }
        this.guanzhuList[index].iszan = !this.guanzhuList[index].iszan;
      }
     

    },
    // 滚动事件
    scroll(){
      var des = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      console.log(des)
      var doc = document.getElementById("nav");
      if(des >= 228){
        console.log('11')
        doc.style.position = 'fixed';
        doc.style.top = '0px';
        doc.style.zIndex = '1'
        doc.style.boxShadow = '0 2px 12px 0 rgba(0, 0, 0, 0.1)';
      //   // 显示shortcutButton2
      //   // shortcutButton2.style.display = 'unset';

      }else{
         console.log('22')
        doc.style.position = 'unset';
        doc.style.boxShadow = 'none'
        // doc.style.top = '0px';
      //   // 隐藏
      //   // shortcutButton2.style.display = 'none';
      }
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    tosetPage(){
      this.$emit("func",'1');
    }
  },
  created () {
    this.userMess = this.$store.getters.getUser;
  },
  mounted(){
    // 滚动事件
    console.log('addEventListener')
    window.addEventListener('mousewheel',this.scroll,false);
   
  },
  destroyed () {
    window.removeEventListener('mousewheel',this.scroll,false);
  },
  watch: {
    // 导航栏改变
    "choosenav":function(newVal,oldVal){
      var des = document.documentElement.scrollTop;
       var doc = document.getElementById("nav");
      if(des > 228){
        document.documentElement.scrollTop=228;
        doc.style.position = 'unset';
        doc.style.boxShadow = 'none'
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.listIsDisplayNone{
  display: none;
}
.top{
  background-color: #ffffff;
  // height: 183px;
  width: 100%;
  margin-top: 1px;
  .messdiv{
    padding-top: 28px;
    padding-bottom: 18px;
    .nameandlevel{
      display: inline-block;
      padding-left: 20px;
      vertical-align: middle;
      margin-right: 50px;
      .name{
        font-size: 18px;
        color: #333;
        font-weight: bold;
        padding-bottom: 10px;
        .el-icon-female{
          padding-left: 10px;
          color: #ce0045
        }
        .el-icon-male{
          padding-left: 10px;
          color: #003fc7
        }
      }
      .level{
        font-size: 14px;
        color: #666;
      }
    }
    .focuson{
      color: #555555;
      font-size: 14px;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      margin-right: 30px;
      :nth-child(1){
        padding-bottom: 6px;
      }
      :nth-child(2){
        font-size: 16px;
        font-weight: bold;
      }
    }
    .setbtn{
      height: 28px;
      width: 58px;
      background-color: #f58b54;
      border-radius: 4px;
      font-size: 16px;
      color: #ffffff;
      text-align: center;
      font-weight: bold;
      line-height: 28px;
      float: right;
      // vertical-align: middle;
      margin-top: 28px;
      cursor: pointer;
    }
  }
  .nav{
    background-color: #fff;
    width: 100%;
    height: 44px;
    // margin-left: 20px;
    margin: 0 auto;
    // margin-top: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ul li{
      float: left;
      a{
        padding: 10px 14px;
        font-size: 16px;
        color: #666;
        font-weight: bold;
        margin-right: 30px;
      }
      .choose{
        color: #f58b54;
        border-bottom: 2px solid #f58b54;
      }
    }
  }
}
.listdiv{
  margin-top: 14px;
  .list{
    background-color: #fff;
    border-radius: 4px;
    padding: 0 32px;
    padding-bottom: 20px;
    margin-bottom: 80px;
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
      }
    }
    .wenzhanglist{
      .comtentdiv{
      margin-top: -6px;
      &:hover .comtent{
          color: #777777;
          // cursor: pointer;
        }
      .comtent{
        color: #444444;
        font-size: 15px;
        // margin: 4px 0px;
        max-height:130px;
        overflow: hidden;
        width: 473px;
        text-align: justify;
        cursor: pointer;
        line-height: 24px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;

        float: left;
        box-sizing: border-box;
        padding-right: 10px;
        .athor{
          font-weight: 600;
        }
        
      }
      
    }
      .contentdiv2{
      .comtent{
        width: 100%;
        padding-right: 0px;
        max-height:72px;
        -webkit-line-clamp: 3;
        float: none;
        margin-bottom: 18px;
      }
    }
    .titlediv{
      color: #999999;
      .type{
        font-weight: bold;
      }
    }
      .title{
        display: inline-block;
        margin-top: 22px;
        margin-bottom: 16px;
        color: #333;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        &:hover{
          color: #f58b54;
        }
      }
      .line{
        height: 1px;
        background-color: #dddddd;
      }
      .bottom-left{
        // float: left;
        font-size: 12px;
        line-height: 26px;
        color: #999999;
        margin-bottom: 22px;
        div{
          display: inline-block;
          margin-right: 12px;
        }
        i{
          display: inline-block;
        }
        span{
          margin-left: 3px;
        }
        .writeAnswer{
           height: 26px;
          // background-color: #f1d1bb;
          border: 1px solid #f58b54;
          padding: 0 7px;
          box-sizing: border-box;
          border-radius: 4px;
          color: #f58b54;
          cursor: pointer;
          font-weight: bold;
          line-height: 26px;
        }
        .zan{
          height: 26px;
          background-color: #f1d1bb;
          padding: 0 7px;
          box-sizing: border-box;
          border-radius: 4px;
          cursor: pointer;
          i{
            background-image: url('../../../static/icon/赞_nor.png');
            background-position: center;
            height: 12px;
            width: 12px;
            margin-bottom: -2px;
          }
          span{
            color: #f58b54;
            line-height: 26px;
            margin: 0px;
          }
        }
        .zanL{
          background-color: #f58b54;
          span{
            color: white;

          }
          i{
            background-image: url('../../../static/icon/赞了.png');
          }
        }
        .pinglun{
          i{
            background-image: url('../../../static/icon/评论.png');
            background-position: 0 0;
            width: 20px;
            height: 18px;
            margin-bottom: -6px;
          }
        }
        .yuedu{
          i{
            background-image: url('../../../static/icon/阅读.png');
            width: 22px;
            height: 15px;
            margin-bottom: -3px;
          }
        }
        .el-icon-more{
          font-size: 16px;
          color: #999999;
          cursor: pointer;

        }
      }
    }
  }
}
</style>