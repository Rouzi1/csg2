<template>
  <div class="w">
    <!-- 个人主页 -->
    <div class="left">
      <div class="messdiv">
        <img src="../../../static/icon/头像2.png" @mouseenter="changeImgfun" @mouseout="changeImgfun2"/>
        <span class="changeImg" ref="changeImgdoc" @mouseenter="changeImgfun">修改头像</span>
        <p class="name">我家猫主子</p>
        <p class="level">等级：我家猫主子</p>
        <div class="setbtn" @click="tosetPage">个人首页</div>
      </div>
      <div class="nav">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @select="handleSelect"
          @open="handleOpen"
          @close="handleClose">
          <el-menu-item index="1">
            <i class="el-icon-document"></i>
            <span slot="title">个人资料</span>
          </el-menu-item>
          <el-menu-item index="2" >
            <i class="el-icon-key"></i>
            <span slot="title">修改密码</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-chat-dot-round"></i>
            <span slot="title">消息通知</span>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="right">
      <!-- <setPage1></setPage1> -->
      <component :is="rightPage"></component>
    </div>
  </div>
</template>

<script>
import setPage1 from '@/components/user/setPage1'
import setPage2 from '@/components/user/setPage2'
import setPage3 from '@/components/user/setPage3'
export default {
  components: {
    setPage1,
    setPage2,
    setPage3,
  },
  data () {
    return {
      rightPage:'setPage1',
    }
  },
  methods: {
    // 导航栏点击
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      console.log('1');
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key);
      switch (key) {
        case '1':
          this.rightPage = 'setPage1'
          break;
        case '2':
          this.rightPage = 'setPage2'
          break;
        default:
          this.rightPage = 'setPage3'
          break;
      }
    },
    // 转到个人页面
    tosetPage(){
      this.$emit("func",'fromSetPage');
    },
    // 头像hover事件
    changeImgfun(){
      console.log("11")
      var doc = this.$refs.changeImgdoc;
      doc.style.display = 'unset';
    },
    changeImgfun2(){
       var doc = this.$refs.changeImgdoc;
      doc.style.display = 'none';
    },
   

  }
}
</script>

<style lang="scss" scoped>
  .left{
    background-color: #fff;
    border-radius: 4px;
    margin-top: 12px;
    
    width: 220px;
    float: left;
    .messdiv{
      padding-top: 20px;
      margin-bottom: 20px;
      position: relative;

      img{
        height: 94px;
        width: 94px;
        border-radius: 94px;
        margin:  0 auto;
        display: block;
        &:hover{
          opacity: 0.7;
        cursor: pointer;
        }
      }
      .changeImg{
        display: none;
        position: absolute;
        color: #fff;
        pointer-events: none;
        font-size: 14px;
        top: 57px;
        left: 84px;
        z-index: 1;
      }
      p{
        text-align: center;
      }
      .name{
        font-size: 18px;
        color: #333;
        font-weight: bold;
        padding-bottom: 8px;
        margin-top: 12px;
      }
      .level{
        font-size: 14px;
        color: #666;
        margin-bottom: 16px;
      }
      .setbtn{
        height: 28px;
        width: 82px;
        // padding: 0 10px;
        background-color: #f58b54;
        border-radius: 4px;
        font-size: 16px;
        color: #ffffff;
        text-align: center;
        font-weight: bold;
        line-height: 28px;
        margin: 0 auto;
        // float: right;
        // vertical-align: middle;
        // margin-top: 28px;
        cursor: pointer;
      }
    }
    .nav{
      margin-bottom: 60px;
    }
  }
  .right{
    float: right;
    width: 768px;
    margin-top: 12px;
    border-radius: 4px;
    height: 1000px;
    background-color: #fff;
    padding: 0 18px;
    box-sizing: border-box;
    
  }
</style>