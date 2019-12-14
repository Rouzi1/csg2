<template>
  <div class="adopt w">
    <div class="left"> 
    
    <!-- 选择主题 -->
      <!-- <div class="search" >
        <input type="text" :placeholder="hotsearch" v-model="searchData" @keyup.enter="searchFun()">
        <button @click="searchFun()"><i></i></button>
      </div> -->
      <div class="themediv">
        <div class="title">排序:</div>
        <div class="choosetheme">
          <el-radio-group v-model="choosesortway">
            <el-radio-button v-for="(theme,index) in sortway" :label="theme" :key="index" ></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="themediv">
        <div class="title">类型:</div>
        <div class="choosetheme">
          <el-radio-group v-model="choosetype">
            <el-radio-button v-for="(theme,index) in type" :label="theme" :key="index" ></el-radio-button>
          </el-radio-group>
        </div>
      </div>
      <div class="themediv">
        <div class="title">地区:</div>
        <div class="choosetheme areadiv" ref="areadiv">
          <span class="showarea" ref="showarea">{{area}}</span>
          <areadata @area='getArea'></areadata>
        </div>
        <div class="bottomline "></div>
      </div>
    <!-- 列表 -->
      <div class="list" v-for="(adopt,index) in adoptList" :key="index" >
         <el-image
          style="width: 144px; height: 144px"
          :src="adopt.img"
          fit="scale-down"></el-image>
          <div class="listR " :class="{'isadopted':adopt.type}">
            <!-- <img class="isadopted" src="../../static/icon/印章.png" alt=""> -->
            <p class="title">{{adopt.title}}</p>
            <p class="catdescribe"><span>喵咪描述：</span>{{adopt.catdescribe}}</p>
            <p class="requirements"><span>领养要求：</span>{{adopt.requirements}}</p>
            <div class="listbottom">
              <img src="../../static/icon/地址(1).png" alt=""><span>{{adopt.area}}</span>
              <img src="../../static/icon/领养评论.png" style="margin-top: 3px;" alt=""><span>{{adopt.pinglun}}</span>
              <img src="../../static/icon/用户.png" alt=""><span>{{adopt.athor}}</span>
              <img src="../../static/icon/时间.png" alt=""><span>{{adopt.time}}</span>
            </div>
          </div>
          <div class="buttom"></div>
      </div>
    </div>
    <div class="right">
      <div class="fix" id="right">

        <!-- 搜索栏 -->
        <!-- <div class="search" >
          <input type="text" :placeholder="hotsearch" v-model="searchData" @keyup.enter="searchFun()">
          <button @click="searchFun()"><i></i></button>
        </div> -->
        <div class="adoptbtn">
          <div class="btn">猫咪送养</div>
        </div>
        <div class="instruction">
          <img src="../../static/icon/领养title脚印.png" alt="">
          <p class="title">领养须知</p>
          <div class="content">
            <p>如您有任何问题，请联系邮箱: 924324407@qq.com</p>
            <p>本平台只帮助发布无偿送养，送养人若以各种理由让领养人转账或付款请勿相信！</p>
            <p>如领养时发现为虚假信息、收费领养或不以送养为目的投稿的，</p>
            <p>请保留证据并联系我们的邮箱发送证据进行举报，核实后，我们将对其加入黑名单，且永不帮助发布！</p>
            <p>注：本网站只负责发布信息，不对填写人的行为及填写的内容真实性负责。</p>
            <p>如您有更好的建议也请与我们联系，我们将第一时间回复您，谢谢</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import areadata from '@/components/tool/element-china-area-data'

export default {
  components: {
    areadata,
  },
  data () {
    return {
        // 搜索框
      hotsearch:'猫窝打造'
      , searchData:''
      , oldName:"推荐"
      , activeName: 'first'
      // 选择主题
      , choosesortway: '最新发布'
      , sortway:['最新发布','最多评论']
      , choosetype: '全部'
      , type: ['全部','未被领养','已被领养']
      , area:'全部'
      // 领养文章列表
      , adoptList:[]
      , adoptListAll:[
        {
          type:0,
          img:'../../static/icon/var4.jpg',
          title:'橘猫送养，希望能有爱猫的人收养它',
          catdescribe:'是一只非常非常非常可爱的小奶猫要有爱心，',
          requirements:'要有爱心，喜欢猫，养过猫家里人不讨厌猫，要有爱心，养过猫家里人不讨厌猫，没有猫毛过敏',
          area:'广东省东莞市',
          pinglun:23,
          athor:'我家主子',
          time:'2019.03.06'
        },
        {
          type:1,
          img:'../../static/icon/var4.jpg',
          title:'橘猫送养，希望能有爱猫的人收养它',
          catdescribe:'是一只非常非常非常可爱的小奶猫要有爱心，喜欢猫，养没有猫毛过敏，要有爱心，',
          requirements:'要有爱心，喜欢猫，养过猫家里人不讨厌猫，没有猫毛过敏要有爱心，喜家里人不讨厌猫，没有猫毛过敏',
          area:'广东省东莞市',
          pinglun:1,
          athor:'我家主子',
          time:'2019.03.25'
        },
        {
          type:1,
          img:'../../static/icon/var4.jpg',
          title:'橘猫送养，希望能有爱猫的人收养它',
          catdescribe:'是一只非常非常非常可爱的小奶猫要有爱心，喜欢猫，养没有猫毛过敏，要有爱心，',
          requirements:'要有爱心，喜欢猫，养过猫家里人不讨厌猫，没有猫毛过敏要有爱心，喜家里人不讨厌猫，没有猫毛过敏',
          area:'广东省汕头市',
          pinglun:0,
          athor:'我家主子',
          time:'2019.02.22'
        },
        {
          type:1,
          img:'../../static/icon/var4.jpg',
          title:'橘猫送养，希望能有爱猫的人收养它',
          catdescribe:'是一只非常非常非常可爱的小奶猫要有爱心，喜欢猫，养没有猫毛过敏，要有爱心，',
          requirements:'要有爱心，喜欢猫，养过猫家里人不讨厌猫，没有猫毛过敏要有爱心，喜家里人不讨厌猫，没有猫毛过敏',
          area:'广东省汕头市',
          pinglun:7,
          athor:'我家主子',
          time:'2019.12.26'
        },
        {
          type:1,
          img:'../../static/icon/var4.jpg',
          title:'橘猫送养，希望能有爱猫的人收养它',
          catdescribe:'是一只非常非常非常可爱的小奶猫要有爱心，喜欢猫，养没有猫毛过敏，要有爱心，',
          requirements:'要有爱心，喜欢猫，养过猫家里人不讨厌猫，没有猫毛过敏要有爱心，喜家里人不讨厌猫，没有猫毛过敏',
          area:'广东省汕头市',
          pinglun:44,
          athor:'我家主子',
          time:'2019.03.13'
        },
        {
          type:0,
          img:'../../static/icon/var4.jpg',
          title:'橘猫送养，希望能有爱猫的人收养它',
          catdescribe:'是一只非常非常非常可爱的小奶猫要有爱心过敏，要有爱心，要有爱心，喜欢猫，养过猫家里人不讨厌猫，没有猫毛过敏，要有爱心，',
          requirements:'要有爱心，喜欢猫，养过猫家里人不讨厌猫，没有猫要有爱心，喜欢猫，讨厌猫，没有猫毛过敏要有爱心，喜欢猫，养过猫家里人不讨厌猫，没有猫毛过敏',
          area:'北京市',
          pinglun:758,
          athor:'我家主子',
          time:'2013.03.11'
        },
        {
          type:0,
          img:'../../static/icon/var4.jpg',
          title:'橘猫送养，希望能有爱猫的人收养它',
          catdescribe:'是一只非常非常非常可爱的小奶猫要有爱心讨厌猫，没有猫毛过敏，要有爱心，',
          requirements:'要有爱心，喜欢猫，养过猫家里人不没有猫毛过敏',
          area:'广东省广州市',
          pinglun:888,
          athor:'我家主子',
          time:'2009.04.26'
        },
      ]
    }
  },
  watch: {
    // 选择类型
    "choosetype":function(newVal,oldVal){
      // // 筛选类型
      // this.adoptList = this.choosetypeFun(newVal,this.adoptListAll)
      // // 再排序
      // this.sortfun(this.choosesortway,this.adoptList);
      this.adoptList = this.screenFun('choosetype',newVal,this.adoptList)
    },
    // 选择排序方式
    "choosesortway":function(newVal,oldVal){
      // this.sortfun(newVal,this.adoptList);
      this.adoptList = this.screenFun('choosesortway',newVal,this.adoptList)
    },
    // 选择地区
    "area":function(newVal,oldVal){
      // var area = this.area;
      // if(newVal != '全部'){
      //   this.adoptList = this.adoptListAll.filter(function(adopt){
      //     return  adopt.area == area;
      //   });
      // }else{
      //   this.adoptList = this.adoptListAll;
      // }
      // // 
      // this.adoptList = this.chooseareaFun(this.area,newVal,this.adoptListAll)
      this.adoptList = this.screenFun('area',newVal,this.adoptList)
      console.log("长度"+newVal.length);
      var we = this.$refs.showarea.style.width;
      console.log("we"+we);
      // if(newVal.length == 3){
        var left = newVal.length*16+24;
        console.log("left"+left);
        this.$refs.areadiv.style.paddingLeft = left+'px';
      // }else if(newVal.length == 2){

      // }
    }
  },
  methods: {
    // 排序方法
    sortfun(choosesortway,adoptList){
      if(choosesortway == '最多评论'){
        adoptList.sort(function(a,b){
          return b.pinglun - a.pinglun;
        });
      }else{
        adoptList.sort(function(a,b){
          return b.time.replace('.','') - a.time.replace('.','');
        });
      }
      // return adoptList;
    },
    // 类型筛选
    choosetypeFun(newVal,adoptListAll){
      var adoptList =[];
      if(newVal != '全部'){
        adoptList = adoptListAll.filter(function(adopt){
          return  newVal!='未被领养'?adopt.type==1:adopt.type==0;
        });
      }else{
        adoptList = adoptListAll;
      }
      return adoptList;
    },
    // 地区筛选
    chooseareaFun(area,newVal,adoptListAll){
      var list = [];
      if(newVal != '全部'){
        list = adoptListAll.filter(function(adopt){
          return  adopt.area == area;
        });
      }else{
        list = adoptListAll;
      }
      return list;
    },
    // 筛选方法：哪个修改了 就先筛选哪个，排序最后
    // 参数1：修改的是什么值，
    // 参数2：修改后的值是什么
    // 参数3：筛选原对象
    screenFun(changeParam,newVal,oldlist){
      var list = [];
      if(changeParam == 'choosetype'){
        list = this.choosetypeFun(newVal,this.adoptListAll);//筛选类型
        list = this.chooseareaFun(this.area,this.area,list);//筛选地区
        this.sortfun(this.choosesortway,list);//排序
      }else if(changeParam == 'area'){
        list = this.chooseareaFun(this.area,newVal,this.adoptListAll);//筛选地区
        list = this.choosetypeFun(this.choosetype,list);//筛选类型
        this.sortfun(this.choosesortway,list);//排序
      }else{
        list = oldlist;
        this.sortfun(newVal,list);//排序
      }
      return list;
    },



    // 推荐热议tab
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // searchFun(){
    //   if(this.searchData != ''){
    //     console.log("提交的数据是："+this.searchData);
    //   }else{
    //     console.log("提交的数据是："+this.hotsearch);
    //   }
    // },
    // 滚动事件
    scroll(){
      var des = document.documentElement.scrollTop || document.body.scrollTop;
      var doc = document.getElementById("right");
      if(des >= 100){
        console.log('11')
        doc.style.position = 'fixed';
        doc.style.top = '0px';
      //   // 显示shortcutButton2
      //   // shortcutButton2.style.display = 'unset';

      }else{
         console.log('22')
        doc.style.position = 'absolute';
        doc.style.top = '0px';
      //   // 隐藏
      //   // shortcutButton2.style.display = 'none';
      }
    },
    // 获得地区组件的地区值
    getArea(data){
      console.log("子组件传来的"+data);
      this.area = data;
      console.log("area"+this.area)
    }
    
 
  },
   mounted(){
    // 滚动事件
    console.log('addEventListener')
    window.addEventListener('mousewheel',this.scroll,false);
    // 列表最新发布排序
    console.log('排序')
    this.adoptList = this.adoptListAll;
    // 时间排序
    this.adoptList.sort(function(a,b){
      return b.time.replace('.','') - a.time.replace('.','');
    });
  },
  destroyed () {
    window.removeEventListener('mousewheel',this.scroll,false);
  }
}
</script>

<style lang="scss" scoped>
.w{
  position: relative;
  padding-top: 12px;
  .left{
    background-color: #fff;
    // height:2000px;
    width: 739px;
    border-radius: 4px;
    // margin-top: 12px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    .themediv{
      // vertical-align: top;
      margin-top: -10px;
      .title{
        color: #666666;
        font-weight: bold;
        display: inline-block;
        vertical-align: top;
        margin-top: 13px;
      }
      .choosetheme{
        width: 657px;
        display: inline-block;
      }
      .areadiv{
        margin-top: 8px;
        padding-left: 56px;
        box-sizing: border-box;
        position: relative;
        .showarea{
          position: absolute;
          left:19px;
          top: 4px;
          color: #f58b54;
          font-weight: bold;
          font-size: 16px;
        }
      }
      .bottomline{
        height: 1px;
        background-color: #dddddd;
        // clear: both;
        margin-top: 26px;
        margin-bottom: 18px;
      }
    }
    .list{
      el-image{
        display: inline-block;
      }
      .listR{
        display: inline-block;
        width: 550px;
        height: 144px;
        vertical-align: top;
        box-sizing: border-box;
        padding-left: 16px;
        position: relative;
        height: 144px;
        

        // .isadopted{
        //   position: absolute;
        //   bottom: 0px;
        //   right: 10px;
        // }
        p{
          width: 100%;
          color: #666666;
          font-size: 14px;
          margin-bottom: 6px;
          span{
            font-weight: bold;
            // color: #333;
          }
        }
        .title{
          margin-bottom: 8px;
          font-size: 16px;
          font-weight: bold;
          color: #333;
        }
        .catdescribe,.requirements{
          max-height:40px;
          text-align: justify;
          line-height: 20px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .listbottom{
          display: inline-block;
          position: absolute;
          bottom: 0px;
          img{
            vertical-align: middle;
            padding-right: 3px;
          }
          span{
            padding-right: 12px;
            color: #666666;
            font-size: 14px;
            // line-height: 20px;
            vertical-align: middle;
          }
        }
        
      }
      .isadopted{
        background-image: url('../../static/icon/印章.png');
        background-position: 419px 85px;
        background-repeat: no-repeat;
      }
      .buttom{
        height: 1px;
        width: 100%;
        background-color: #ddd;
        margin: 18px 0;
      }
    }
    .search{
      width: 245px;
      height: 42px;
      // background-color: #dddddd;
      position: absolute;
      margin-bottom: 12px;
      right: 17px;
      top: 23px;
      input{
        height: 100%;
        width: 100%;
        border-radius: 4px;
        font-size: 14px;
        padding-left: 12px;
        box-sizing: border-box;
        color: #333;
        background-color: #dddddd;
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
        background-color: #dddddd;
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
  }
  
  .right{
    // display: inline-block;
    // background-color: red;
    height: 299px;
    float: right;
    width: 245px;
    position: absolute;
    right: 0;
    top: 0px;
    height: 100vh;
    // position: fixed;
    .fix{
      position: unset;
      // top: 6px;
      margin-top: 6px;
    }
    .adoptbtn{
      height: 245px;
      width: 245px;
      background-image: url('../../static/icon/01395759f433caa801216a4b4d9b04.png');
      background-position: center center;
      // padding-top: 20px;
      position: relative;
      cursor: pointer;
      .btn{
        width: 167px;
        height: 50px;
        border: 4px solid #fff;
        border-radius: 8px;
        font-family: '喵小姐简';
        font-size: 36px;
        color: #fff;
        text-align: center;
        line-height: 50px;
        margin: 0 auto;
        // margin-top: 20px;
        position: absolute;
        top: 40px;
        left: 34px;
      }
    }
    .instruction{
      width: 245px;
      height: calc(100% - 245px);
      border-radius: 4px;
      background-color: #fff;
      margin-top: 12px;
      position: relative;
      img{
        position: absolute;
        top: 16px;
        left: 57px;
      }
      p{
        text-align: center;
      }
      .title{
        font-size: 16px;
        color: #f58b54;
        padding: 20px 0;
        font-weight: bold;

      }
      .content{
        padding: 0 14px;
        font-size: 14px;
        color: #666666;
        line-height: 21px;
        p{
          padding-bottom: 12px;
        }
      }
    }
  }
}

</style>