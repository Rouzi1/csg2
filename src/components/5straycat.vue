<template>
  <div class="w">
    <!-- 流浪猫救助 -->
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
      <div class="themediv" v-if="choosetype == '流浪猫信息'">
        <div class="title">地区:</div>
        <div class="choosetheme areadiv" ref="areadiv">
          <span class="showarea" ref="showarea">{{area}}</span>
          <areadata @area='getArea'></areadata>
        </div>
        
      </div>
      <div class="bottomline "></div>
    <!-- 列表 -->
      <div class="isListNull" v-if="strayListIsNull">查无结果，换个条件试试吧！</div>
      <div v-if="choosetype == '流浪猫信息'">
        <div class="list" v-for="(stray,index) in strayList" :key="index" >
          <el-image
            style="width: 144px; height: 144px"
            :src="stray.img"
            fit="scale-down"></el-image>
            <div class="listR " :class="{'isstrayed':stray.type}">
              <!-- <img class="isstrayed" src="../../static/icon/印章.png" alt=""> -->
              <div class="list-title">
                <div class="tag" >流浪猫</div>
                <p class="title">{{stray.title}}</p>
              </div>
              
              <p class="detailedaddress"><span>详细地址：</span>{{stray.detailedaddress}}</p>
              <p class="detailedaddress"><span>发现时间：</span>{{stray.findtime}}</p>
              <p class="catsdescribes"><span>猫咪描述：</span>{{stray.catsdescrbes}}</p>
              <div class="listbottom">
                <img src="../../static/icon/地址(1).png" alt=""><span>{{stray.area}}</span>
                <img src="../../static/icon/领养评论.png" style="margin-top: 3px;" alt=""><span>{{stray.pinglun}}</span>
                <img src="../../static/icon/用户.png" alt=""><span>{{stray.athor}}</span>
                <img src="../../static/icon/时间.png" alt=""><span>{{stray.time}}</span>
                <!-- 举报 -->
                <!-- <i class="el-icon-more" ></i> -->
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-more" ></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>举报</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
            <div class="buttom"></div>
        </div>
      </div>
      <div v-if="choosetype != '流浪猫信息'">
        <div class="wenzhanglist " v-for="(wenzhang,index) in wenzhangList" :key="index" >
            <div class="list-title">
              <p class="title">{{wenzhang.title}}</p>
            </div>
            <div class="comtent">
              <p>{{wenzhang.content}}</p>
            </div>
            <div class="demo-image__preview">
              <el-image 
                style="width: 226px; height: 124px"
                :src="wenzhang.imgs[1]" 
                :preview-src-list="wenzhang.imgs">
              </el-image>
              <el-image 
                style="width: 226px; height: 124px"
                :src="wenzhang.imgs[2]" 
                :preview-src-list="wenzhang.imgs">
              </el-image>
              <el-image 
                style="width: 226px; height: 124px"
                :src="wenzhang.imgs[0]" 
                :preview-src-list="wenzhang.imgs">
              </el-image>
            </div>
            <div class="bottom clearfix">
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
                <!-- 举报 -->
                <!-- <i class="el-icon-more" ></i> -->
                <el-dropdown>
                  <span class="el-dropdown-link">
                    <i class="el-icon-more" ></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>举报</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div class="bottom-right">
                <div class="athor">
                  <i></i>
                  <span>{{wenzhang.athor}}</span>
                </div>
                <div class="time">
                  <i></i>
                  <span>{{wenzhang.time}}</span>
                </div>
                <div class="place">
                  <i></i>
                  <span>{{wenzhang.place}}</span>
                </div>
              </div>
            </div>
            <div class="bottomline "></div>
        </div>
      </div>
       <p class="tobuttom"  v-if="!strayListIsNull">没有更多了~</p>
    </div>


    <div class="right">
      <div class="fix" id="right">

        <!-- 搜索栏 -->
        <!-- <div class="search" >
          <input type="text" :placeholder="hotsearch" v-model="searchData" @keyup.enter="searchFun()">
          <button @click="searchFun()"><i></i></button>
        </div> -->
        <div class="straybtn">
          <!-- <div class="btn">猫咪送养</div> -->
        </div>
        <div class="instruction">
          <img src="../../static/icon/领养title脚印.png" alt="">
          <p class="title">救助须知</p>
          <div class="content">
            <p>如您有任何问题，请联系邮箱: 924324407@qq.com</p>
            <p>本平台帮助发布流浪猫信息，若以帮助流浪猫为由筹款请谨慎对待！</p>
            <p>如发现虚假信息或恶意投稿请投诉，核实后，我们将对其加入黑名单，且永不帮助发布！</p>
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
    
      // 选择主题
       choosesortway: '最新发布'
      , sortway:['最新发布','最多评论']
      , choosetype: '流浪猫信息'
      , type: ['流浪猫信息','相关文章']
      , area:'全部'
      // 流浪猫列表
      , strayList:[]
      , strayListAll:[
        {
          type:0,
          img:'../../static/icon/var4.jpg',
          title:'在路边发现一只流浪猫，',
          detailedaddress:'东莞理工学院松山湖校区6号',
          findtime:'昨天下午5点',
          catsdescrbes:'一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生',
          area:'北京市',
          pinglun:3,
          athor:'我家主子',
          time:'2009.03.07'
        },
        {
          type:0,
          img:'../../static/icon/var4.jpg',
          title:'在路边发现一只流浪猫，',
          detailedaddress:'东莞理工学院松山湖校区6号',
          findtime:'昨天下午5点',
          catsdescrbes:'一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生',
          area:'北京市',
          pinglun:3,
          athor:'我家主子',
          time:'2009.03.07'
        },
        {
          type:0,
          img:'../../static/icon/var4.jpg',
          title:'在路边发现一只流浪猫，',
          detailedaddress:'东莞理工学院松山湖校区6号',
          findtime:'昨天下午5点',
          catsdescrbes:'一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生',
          area:'北京市',
          pinglun:3,
          athor:'我家主子',
          time:'2009.03.07'
        },
        {
          type:0,
          img:'../../static/icon/var4.jpg',
          title:'在路边发现一只流浪猫，',
          detailedaddress:'东莞理工学院松山湖校区6号',
          findtime:'昨天下午5点',
          catsdescrbes:'一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生',
          area:'北京市',
          pinglun:3,
          athor:'我家主子',
          time:'2009.03.07'
        },
        {
          type:0,
          img:'../../static/icon/var4.jpg',
          title:'在路边发现一只流浪猫aaaaaaa，',
          detailedaddress:'东莞理工学院松山湖校区6号',
          findtime:'昨天下午5点',
          catsdescrbes:'一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生',
          area:'广东省',
          pinglun:123,
          athor:'我家主子',
          time:'2019.03.06'
        },
        {
          type:0,
          img:'../../static/icon/var4.jpg',
          title:'在路边发现一只流浪猫1111111111111，',
          detailedaddress:'东莞理工学院松山湖校区6号',
          findtime:'昨天下午5点',
          catsdescrbes:'一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生一只黄色的小猫，头顶有一撮白色，很瘦很瘦，有点怕生',
          area:'广东省东莞市',
          pinglun:2333,
          athor:'我家主子',
          time:'2018.03.06'
        },
      ]
      , strayListIsNull:false
      // 文章列表
      ,wenzhangList:[
        {
          id:1,
          // tag:2,
          title:'流浪猫的正确救助方式',
          content:'你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗',
          imgs:[
            '../../static/icon/banner1.jpg',
            '../../static/icon/banner3.jpg',
            '../../static/icon/banner2.jpg',
          ],
          zan:111,
          iszan:false,
          pinglun:445,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2012.05.26',
          place:'东莞松山'
        },
        {
          id:1,
          // tag:2,
          title:'流浪猫的正确救助方式',
          content:'你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗',
          imgs:[
            '../../static/icon/banner1.jpg',
            '../../static/icon/banner3.jpg',
            '../../static/icon/banner2.jpg',
          ],
          zan:111,
          iszan:false,
          pinglun:333,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2011.05.26',
          place:'东莞松山'
        },
        {
          id:1,
          // tag:2,
          title:'流浪猫的正确救助方式',
          content:'你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗',
          imgs:[
            '../../static/icon/banner1.jpg',
            '../../static/icon/banner3.jpg',
            '../../static/icon/banner2.jpg',
          ],
          zan:111,
          iszan:false,
          pinglun:1,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2009.05.26',
          place:'东莞松山'
        },
        {
          id:1,
          // tag:2,
          title:'流浪猫的正确救助方式',
          content:'你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗你知道应该怎样正确的救助流浪猫吗',
          imgs:[
            '../../static/icon/banner1.jpg',
            '../../static/icon/banner3.jpg',
            '../../static/icon/banner2.jpg',
          ],
          zan:111,
          iszan:false,
          pinglun:12,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2018.05.26',
          place:'东莞松山'
        },
      ]
    }
  },
  watch: {
    // 选择类型
    "choosetype":function(newVal,oldVal){
      if(newVal == '流浪猫信息'){
        this.strayList = this.screenFun('choosetype',newVal,this.strayList)
      }else{
        // console.log('文章排序·')
        this.sortfun(this.choosesortway,this.wenzhangList)
      }

      
    },
    // 选择排序方式
    "choosesortway":function(newVal,oldVal){
      if(this.choosetype == '流浪猫信息'){
        this.strayList = this.screenFun('choosesortway',newVal,this.strayList)
      }else{
        // console.log('文章排序·')
        this.sortfun(newVal,this.wenzhangList)
      }
    },
    // 选择地区
    "area":function(newVal,oldVal){
      this.strayList = this.screenFun('area',newVal,this.strayList)
      var left = newVal.length*14+30;
      this.$refs.areadiv.style.paddingLeft = left+'px';
    }
  },
  methods: {
    // 排序方法
    sortfun(choosesortway,strayList){
      // console.log(choosesortway)
      if(choosesortway == '最多评论'){
        strayList.sort(function(a,b){
          return b.pinglun - a.pinglun;
        });
      }else{
        strayList.sort(function(a,b){
          return b.time.replace('.','') - a.time.replace('.','');
        });
      }
      // return strayList;
    },
    // 类型筛选
    choosetypeFun(newVal,strayListAll){
      var strayList =[];
      // if(newVal != '全部'){
      //   strayList = strayListAll.filter(function(stray){
      //     return  newVal!='未被领养'?stray.type==1:stray.type==0;
      //   });
      // }else{
        strayList = strayListAll;
      // }
      return strayList;
    },
    // 地区筛选
    chooseareaFun(area,newVal,strayListAll){
      console.log('地区筛选')
      var list = [];
      if(newVal != '全部'){
        list = strayListAll.filter(function(stray){
          return  stray.area == area;
        });
      }else{
        list = strayListAll;
      }
      return list;
    },
    // 筛选方法：哪个修改了 就先筛选哪个，排序最后
    // 参数1：修改的是什么值，
    // 参数2：修改后的值是什么
    // 参数3：筛选原对象
    screenFun(changeParam,newVal,oldlist){
      
      var list = [];
      // if(changeParam == 'choosetype'){
      //   list = this.choosetypeFun(newVal,this.strayListAll);//筛选类型
      //   list = this.chooseareaFun(this.area,this.area,list);//筛选地区
      //   this.sortfun(this.choosesortway,list);//排序
      // }else 
      if(changeParam == 'area'){
        list = this.chooseareaFun(this.area,newVal,this.strayListAll);//筛选地区
        // list = this.choosetypeFun(this.choosetype,list);//筛选类型
        this.sortfun(this.choosesortway,list);//排序
      }else{
        list = oldlist;
        this.sortfun(newVal,list);//排序
      }
      if(list.length==0){
        this.strayListIsNull = true;
      }else{
        this.strayListIsNull = false;
      }
      return list;
      
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
    this.strayList = this.strayListAll;
    // 时间排序
    this.strayList.sort(function(a,b){
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
        margin-bottom: 18px;
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
          top: 6px;
          color: #f58b54;
          font-weight: bold;
          font-size: 14px;
        }
      }
    }
      .bottomline{
        height: 1px;
        background-color: #dddddd;
        // clear: both;
        margin-top: 10px;
        margin-bottom: 18px;
      }
    .isListNull{
      text-align: center;
      color: #666666;
      font-size: 16px;
      padding-top: 20px;
      padding-bottom: 60px;
    }
    .tobuttom{
      margin:20px auto;
      text-align: center;
      font-size: 14px;
      color: #777777;
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
        .list-title{
          margin-bottom: 8px;
          .tag{
            height: 20px;
            border: 1px solid #999999;
            box-sizing: border-box;
            border-radius: 4px;
            padding: 0 6px;
            display: inline-block;
            margin-right: 4px;
            // span{
              line-height: 20px;
              font-size: 14px;
              color: #999999;
            // }
          }
          .title{
            // margin-bottom: 8px;
            font-size: 16px;
            font-weight: bold;
            color: #333;
            display: inline;
          }
        }
        

        // .isstrayed{
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
        
        .detailedaddress,.catsdescribes{
          max-height:40px;
          text-align: justify;
          line-height: 20px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
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
          .el-icon-more{
            font-size: 16px;
            color: #aaaaaa;
            cursor: pointer;

          }
        }
        
      }
      .isstrayed{
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
    .wenzhanglist{
      .list-top{
        margin-bottom: 12px;
        p{
          display: inline-block;
          line-height: 28px;
        }
        .athor{
          font-size: 16px;
          font-weight: bold;
          color: #333333;
          padding-left: 6px;
          cursor: pointer;
        }
        .time{
          font-size: 13px;
          color: #999999;
          padding-left: 4px;
        }
      }
      // background-color: red;
      .list-title{
        // display: inline-block;
        height: 20px;
        .tag{
          height: 20px;
          border: 1px solid #999999;
          box-sizing: border-box;
          border-radius: 4px;
          padding: 0 6px;
          display: inline-block;
          margin-right: 4px;
          // span{
            line-height: 20px;
            font-size: 14px;
            color: #999999;
          // }
        }
        .title{
          display: inline-block;
          font-size: 18px;
          color: #333333;
          font-weight: bold;
          line-height: 20px;
          height: 20px;
          cursor: pointer;
        }
        .title:hover{
          color: #f58b54;

        }
      }
      .comtent{
        color: #333333;
        font-size: 15px;
        margin: 10px 0px 12px;
        max-height: 66px;
        overflow: hidden;
        width: 100%;
        text-align: justify;
        cursor: pointer;
        line-height: 22px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
      }
      .imgs{
        display: flex;
        justify-content: space-between;
        img{
          width: 226px;
          height: 124px;
          border-radius: 4px;
          cursor: pointer;
        }
      }
      .bottom{
        margin: 14px 0 18px;
        font-size: 12px;
        line-height: 26px;
        color: #999999;
        // clear: both;
        .bottom-left{
          float: left;
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
          .zan{
            height: 26px;
            background-color: #f1d1bb;
            padding: 0 7px;
            box-sizing: border-box;
            border-radius: 4px;
            cursor: pointer;
            i{
              background-image: url('../../static/icon/赞_nor.png');
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
              background-image: url('../../static/icon/赞了.png');
            }
          }
          .pinglun{
            i{
              background-image: url('../../static/icon/评论.png');
              background-position: 0 0;
              width: 20px;
              height: 18px;
              margin-bottom: -6px;
            }
          }
          .yuedu{
            i{
              background-image: url('../../static/icon/阅读.png');
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
        .bottom-right{
          float: right;
          div{
            display: inline-block;
            margin-left: 10px;
          }
          i{
            width: 20px;
            height: 20px;
            background-position: center;
            display: inline-block;
            margin-bottom: -5px;
            background-repeat: no-repeat;
          }
          .athor{
            i{
              background-image: url('../../static/icon/用户.png');
            }
          }
          .time{
            i{
              background-image: url('../../static/icon/时间.png');
            }
          }
          .place{
            i{
              background-image: url('../../static/icon/定位.png');
            }
          }
          
        }
      }
      .bottomline{
        height: 1px;
        background-color: #dddddd;
        // clear: both;
        margin-top: 18px;
        margin-bottom: 18px;
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
      margin-top: 12px;
    }
    .straybtn{
      height: 245px;
      width: 245px;
      background-image: url('../../static/icon/流浪猫信息发布.png');
      background-position: center center;
      // padding-top: 20px;
      position: relative;
      cursor: pointer;
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
        left:163px;
        transform: rotate(-54deg);
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
        padding-bottom: 56px;
        p{
          padding-bottom: 16px;
        }
      }
    }
  }

}
</style>