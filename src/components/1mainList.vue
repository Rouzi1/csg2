<template>
  <div>
     <!-- 顶部 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="推荐" name="first">
        
          
        <!-- <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto"> -->
          <!-- <li > -->
          <div class="list " v-for="(wenzhang,index) in wenzhangList" :key="index">
            <div class="list-title">
              <div class="tag" v-if="wenzhang.tag == 1">领养</div>
              <div class="tag" v-if="wenzhang.tag == 2">流浪</div>
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
          <!-- </li> -->
        <!-- </ul> -->
       
        <p class="tobuttom" v-text="buttontext">已经到底部了{{count}}~</p>
        
      </el-tab-pane>
      <el-tab-pane label="关注" name="third">
        <div class="list " v-for="(wenzhang,index) in guanzhuList" :key="index">
          <!-- 头像 -->
          <div class="list-top">
             <el-avatar fit="contain" :src="wenzhang.headimg" size="small"> </el-avatar>
             <p class="athor">{{wenzhang.athor}}</p>
             <p class="time">{{wenzhang.time}}</p>
          </div>
          <div class="list-title">
            <div class="tag" v-if="wenzhang.tag == 1">领养</div>
            <div class="tag" v-if="wenzhang.tag == 2">流浪</div>
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
              <div class="zan" @click="zanfun(2,index)" v-if="!wenzhang.iszan">
                <i></i>
                <span>{{wenzhang.zan}}赞</span>
              </div>
              <div class="zan zanL" @click="zanfun(2,index)" v-if="wenzhang.iszan">
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
              <!-- <div class="athor">
                <i></i>
                <span>{{wenzhang.athor}}</span>
              </div>
              <div class="time">
                <i></i>
                <span>{{wenzhang.time}}</span>
              </div> -->
              <div class="place">
                <i></i>
                <span>{{wenzhang.place}}</span>
              </div>
            </div>
          </div>
          <div class="bottomline "></div>
        </div>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>

<script>
export default {
  mounted () {
      console.log("重新获得数据");
    // console.log(this);

  } ,
  // props: ["activeName"],
  watch: {
    "activeName":function(){
      console.log('aaa');
      console.log(this.activeName);
    }
  },
  data () {
    return {
      wenzhangList:[
        {
          id:1,
          tag:2,
          title:'来说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          imgs:[
            require('../../static/icon/banner1.jpg'),
            require('../../static/icon/banner2.jpg'),
            require('../../static/icon/banner3.jpg'),
          ],
          zan:111,
          iszan:false,
          pinglun:233,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2019.05.26',
          place:'东莞松山'
        },
        {
          id:2,
          tag:'0',
          title:'来2222说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管2222是不是周末，每天早上六点半，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          imgs:[
            '../../static/icon/banner1.jpg',
            '../../static/icon/banner3.jpg',
            '../../static/icon/banner2.jpg',
          ],
          zan:111,
          iszan:false,
          pinglun:233,
          yuedu:11,
          athor:'小22可爱它家主人',
          time:'2019.05.26',
          place:'东22莞松山'
        },
        {
          id:3,
          tag:'1',
          title:'来33333333说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管3333是不是周末，每天早上六点半，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          imgs:[
            '../../static/icon/banner1.jpg',
            '../../static/icon/banner3.jpg',
            '../../static/icon/banner2.jpg',
          ],
          zan:111,
          iszan:true,
          pinglun:233,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2019.05.26',
          place:'东莞松山'
        },
      ],
      guanzhuList:[
        {
          id:1,
          headimg:'../../static/icon/banner1.jpg',
          tag:2,
          title:'来说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          imgs:[
            '../../static/icon/banner1.jpg',
            '../../static/icon/banner3.jpg',
            '../../static/icon/banner2.jpg',
          ],
          zan:111,
          iszan:false,
          pinglun:233,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2019.05.26',
          place:'东莞松山'
        },
        {
          id:2,
          tag:'0',
          headimg:'../../static/icon/banner2.jpg',
          title:'来2222说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管2222是不是周末，每天早上六点半，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          imgs:[
            '../../static/icon/banner1.jpg',
            '../../static/icon/banner3.jpg',
            '../../static/icon/banner2.jpg',
          ],
          zan:111,
          iszan:false,
          pinglun:233,
          yuedu:11,
          athor:'小22可爱它家主人',
          time:'2019.05.26',
          place:'东22莞松山'
        },
        {
          id:3,
          tag:'1',
          headimg:'../../static/icon/banner3.jpg',
          title:'来33333333说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管3333是不是周末，每天早上六点半，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          imgs:[
            '../../static/icon/banner1.jpg',
            '../../static/icon/banner3.jpg',
            '../../static/icon/banner2.jpg',
          ],
          zan:111,
          iszan:true,
          pinglun:233,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2019.05.26',
          place:'东莞松山'
        },
      ],
      oldName:"推荐"
      ,activeName: 'first'
      ,count:1
      ,buttontext:'加载中...'
    }
  },
  methods: {
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
    load(){
      console.log("daol");
      this.count+=1;
       var obj = {
          id:1,
          tag:2,
          title:'来说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          imgs:[
            '../../static/icon/banner1.jpg',
            '../../static/icon/banner3.jpg',
            '../../static/icon/banner2.jpg',
          ],
          zan:111,
          iszan:false,
          pinglun:233,
          yuedu:11,
          athor:'小可爱它家主人',
          time:'2019.05.26',
          place:'东莞松山'
        };
      // this.wenzhangList.push(obj);
    },
    lazyLoading(){
      //  document.documentElement.sc
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;
      // console.log(scrollTop +','+ clientHeight+','+scrollHeight);
      if (scrollTop + clientHeight >= scrollHeight-100 ) { // 如果滚动到接近底部，自动加载下一页
        //事件处理
        console.log("0000")//此处可以添加数据请求
        if(this.wenzhangList.length<15){
          var obj = {
            id:1,
            tag:2,
            title:'来说说每天早上被猫叫醒是种什么样的体验？',
            content:'不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
            imgs:[
              '../../static/icon/banner1.jpg',
              '../../static/icon/banner3.jpg',
              '../../static/icon/banner2.jpg',
            ],
            zan:111,
            iszan:false,
            pinglun:233,
            yuedu:11,
            athor:'小可爱它家主人',
            time:'2019.05.26',
            place:'东莞松山'
          };
          this.wenzhangList.push(obj);
        }else{
          this.buttontext ="已经到底了~"

        }
      }
    }
  },
  mounted(){
    //  window.addEventListener('mousewheel',this.handleScroll,false)
    window.addEventListener('mousewheel', this.lazyLoading); // 滚动到底部，再加载的处理事件
  }
}
</script>

<style lang="scss" scoped>
  .tobuttom{
    margin:20px auto;
    text-align: center;
    font-size: 14px;
    color: #777777;
  }
  .list{
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
</style>