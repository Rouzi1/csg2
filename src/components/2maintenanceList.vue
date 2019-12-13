<template>
  <div>
     <!-- 顶部 -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="热门回答" name="first">
        <!-- 选择主题 -->
        <div class="themediv">
          <div class="title">主题:</div>
          <div class="choosetheme">
            <el-collapse accordion>
              <el-collapse-item>
                <template slot="title">
                  <el-radio-group v-model="chooseTheme">
                    <el-radio-button label="全部" border="false"></el-radio-button>
                    <el-radio-button v-for="(theme,index) in themes.slice(0,6)" :label="theme" :key="index" ></el-radio-button>
                  </el-radio-group>
                </template>
                <el-radio-group v-model="chooseTheme">
                  <el-radio-button  v-for="(theme,index) in themes.slice(6)" :label="theme" :key="index"></el-radio-button>
                </el-radio-group>
              </el-collapse-item>
            </el-collapse>

          </div>
          <div class="bottomline "></div>
        </div>

        <div class="list " v-for="(wenzhang,index) in huidaList" :key="index">
           <div class="list-title">
            
            <p class="title">{{wenzhang.title}}</p>
            <!-- <div class="tag" v-if="wenzhang.tag == 1">领养</div>
            <div class="tag" v-if="wenzhang.tag == 2">流浪</div> -->
          </div>
           <!-- 头像 -->
          <!-- <div class="list-top">
             <el-avatar fit="contain" :src="wenzhang.headimg" size="small"> </el-avatar>
             <p class="athor">{{wenzhang.athor}}</p>
             <p class="time">{{wenzhang.time}}</p>
          </div> -->
          <div class="comtentdiv" v-if="wenzhang.imgs.length != 0">
            <div class="comtent">
              <p><span class="athor">{{wenzhang.athor}}</span><span>回答：</span>{{wenzhang.content}}</p>
            </div>
            <el-image 
                style="width: 226px; height: 124px"
                :src="wenzhang.imgs[0]" 
                >
              </el-image>
          </div>
          <div class="comtentdiv contentdiv2" v-if="wenzhang.imgs.length == 0">
            <div class="comtent comtent2">
              <p><span class="athor">{{wenzhang.athor}}</span><span>回答：</span>{{wenzhang.content}}</p>
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
            </div>
          </div>
          <div class="bottomline "></div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="提问" name="third">
        <!-- 选择主题 -->
        <div class="themediv">
          <div class="title">主题:</div>
          <div class="choosetheme">
            <el-collapse accordion>
              <el-collapse-item>
                <template slot="title">
                  <el-radio-group v-model="chooseTheme">
                    <el-radio-button label="全部" border="false"></el-radio-button>
                    <el-radio-button v-for="(theme,index) in themes.slice(0,6)" :label="theme" :key="index" ></el-radio-button>
                  </el-radio-group>
                </template>
                <el-radio-group v-model="chooseTheme">
                  <el-radio-button  v-for="(theme,index) in themes.slice(6)" :label="theme" :key="index"></el-radio-button>
                </el-radio-group>
              </el-collapse-item>
            </el-collapse>

          </div>
          <div class="bottomline "></div>
        </div>

        <div class="list " v-for="(wenzhang,index) in questionList" :key="index">
          <div class="list-title">
            <p class="title">{{wenzhang.title}}</p>
          </div>
          <div class="comtent describe">
            <p>{{wenzhang.describe}}</p>
          </div>
          <div class="bottom clearfix">
            <div class="bottom-left">
              <div class="writeAnswer" @click="zanfun(index)" v-if="!wenzhang.iszan">
                <i class="el-icon-edit"></i>
                <span>写回答</span>
              </div>
              <!-- <div class="zan zanL" @click="zanfun(index)" v-if="wenzhang.iszan">
                <i></i>
                <span>{{wenzhang.zan}}赞</span>
              </div> -->
              <div class="pinglun">
                <i></i>
                <span>{{wenzhang.huida}}回答</span>
              </div>
              <div class="yuedu">
                <i></i>
                <span>{{wenzhang.liulan}}阅读</span>
              </div>
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
              <!-- <div class="place">
                <i></i>
                <span>{{wenzhang.place}}</span>
              </div> -->
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
      huidaList:[
        {
          id:1,
          headimg:'../../static/icon/banner1.jpg',
          tag:2,
          title:'来说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          imgs:[
            '../../static/icon/banner1.jpg',
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
          title:'鞍山市来2222说说每天早上被猫叫醒是种什么样的体验？',
          content:'不管2222是不是周末，每天早上六点半，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续，我们家猫会准时的一个助跑弹跳蹦到我肚子上，疼的我。。。如果不醒来就继续……或者',
          imgs:[],
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
      questionList:[
        {
          title:'11给猫起什么名字？',
          describe:'问题描不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我',
          huida:12,
          liulan:1112,
        },
        {
          title:'22问题问题问题问题问题问题？',
          describe:'问题描述问不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我述',
          huida:12,
          liulan:1112,
        },
        {
          title:'33来说说每天早上被猫叫醒是种什么样的体验？',
          describe:'问题描不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我述',
          huida:12,
          liulan:1112,
        },
        {
          title:'444问题问题问题问题问题问题？',
          // describe:'问题描述问题描述问题描述问题描述问题描述',
          huida:12,
          liulan:1112,
        },
        {
          title:'33来说说每天早上被猫叫醒是种什么样的体验？',
          describe:'问题描不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我述',
          huida:12,
          liulan:1112,
        },
        {
          title:'444问题问题问题问题问题问题？',
          // describe:'问题描述问题描述问题描述问题描述问题描述',
          huida:12,
          liulan:1112,
        },
        {
          title:'33来说说每天早上被猫叫醒是种什么样的体验？',
          describe:'问题描不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我述',
          huida:12,
          liulan:1112,
        },
        {
          title:'444问题问题问题问题问题问题？',
          // describe:'问题描述问题描述问题描述问题描述问题描述',
          huida:12,
          liulan:1112,
        },
        {
          title:'33来说说每天早上被猫叫醒是种什么样的体验说说每天早上被猫叫醒是种什么样的体说说每天早上被猫叫醒是种什么样的体？',
          describe:'问题描不管是不是周时的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我的一个助跑弹跳蹦到我肚子上，疼的我述',
          huida:12,
          liulan:1112,
        },
        {
          title:'444问题问题问题问题问题问题44问题问题问题问题问题问题44问题问题问题问题问题问题44问题问题问题问题问题问题？',
          // describe:'问题描述问题描述问题描述问题描述问题描述',
          huida:12,
          liulan:1112,
        },

      ],
      oldName:"推荐"
      ,activeName: 'first'
      // 选择主题
      , chooseTheme: '全部'
      , themes:['吸猫日常','养猫常识','猫咪用品','猫咪健康','猫咪训练','奶猫照顾','猫咪冷知识','其它']
    }
  },
  methods: {
    zanfun(index){
      console.log();
      // var listname = 'wenzhangList';
      if(this.huidaList[index].iszan){
        this.huidaList[index].zan -=1;
      }else{
        this.huidaList[index].zan +=1;
      }
      this.huidaList[index].iszan = !this.huidaList[index].iszan;

    },
    // 推荐热议tab
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style lang="scss" scoped>
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
        width: 100%;

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
        width: 100%;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .title:hover{
        color: #f58b54;

      }
    }
    .comtentdiv{
      margin-top: 14px;
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
    .describe{
        margin-top: 10px;
        color: #444444;
        font-size: 15px;
        // margin: 4px 0px;
        max-height:48px;
        overflow: hidden;
        width: 100%;
        text-align: justify;
        cursor: pointer;
        line-height: 24px;

        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;

        // float: left;
        // box-sizing: border-box;
        // padding-right: 10px;
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
      margin: 10px 0 18px;
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
    .bottomline{
      height: 1px;
      background-color: #dddddd;
      // clear: both;
      margin-top: 6px;
      margin-bottom: 18px;
    }
  }
</style>