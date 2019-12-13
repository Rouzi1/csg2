<template>
  <div class="varieties w">
    <div class="banner">
      <el-carousel :interval="4000" type="card" height="240px">
        <el-carousel-item v-for="(img,item) in bannerimgs" :key="item">
          <img :src="img" alt="" style="width:500px">
          <!-- <h3 class="medium">{{ item }}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="varTitle">
        <img class="img1" src="../../static/icon/脚印拷贝.png" alt="">
        <img class="img2" src="../../static/icon/脚印拷贝.png" alt="">
        <p class="title">猫咪品种</p>
        <p class="titleE">THE CAT SPECIES</p>
      </div>
    <div class="varCardDiv">
      <div class="varCard"  v-for="(vartie,index) in vars" :key="index">
        <el-image
          style="height:235px"
          :src="vartie.img"
          fit="cover"></el-image>
        <p>{{vartie.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      bannerimgs:['../../static/icon/var1.png','../../static/icon/var2.png','../../static/icon/var3.jfif','../../static/icon/var4.jpg']
      ,vars:[
        {
          img:'../../static/icon/var2.png',
          name:'布偶猫'
        },
        {
          img:'../../static/icon/var1.png',
          name:'布偶猫'
        },
        {
          img:'../../static/icon/var1.png',
          name:'布偶猫'
        },
        {
          img:'../../static/icon/var2.png',
          name:'布偶猫'
        },
        {
          img:'../../static/icon/var2.png',
          name:'布偶猫'
        },
        {
          img:'../../static/icon/var2.png',
          name:'布偶猫'
        },
        {
          img:'../../static/icon/var4.jpg',
          name:'布偶猫'
        },
        {
          img:'../../static/icon/var2.png',
          name:'布偶猫'
        },
        {
          img:'../../static/icon/var2.png',
          name:'布偶猫'
        },
        {
          img:'../../static/icon/var2.png',
          name:'布偶猫'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .varieties{
    .banner{
      padding-top: 18px;

    }
    .varTitle{
      margin-top: 22px;
      margin-bottom: 28px;
      // background-image: url('../../static/icon/脚印拷贝.png');
      position: relative;
      // background-repeat: no-repeat;
      img{
        position: absolute;
      }
      .img1{
        top: -14px;
        left: 337px;
        transform:rotate(47deg);
        -ms-transform:rotate(47deg); /* Internet Explorer */
        -moz-transform:rotate(47deg); /* Firefox */
        -webkit-transform:rotate(47deg); /* Safari 和 Chrome */
        -o-transform:rotate(47deg); /* Opera */
      }
      .img2{
         top: 11px;
        left: 584px;
      }
      p{
        text-align: center;
        color: #f58b54;
      }
      .title{
        font-family: '喵小姐简';
        font-size: 28px;
        position: relative;
        &::before,&::after{
          content: '';
          display: inline-block;
          position: absolute;
          left: 284px;
          top: 28px;
          width: 144px;
          height: 1px;
          background-color: #fac6ab;
          // background-image: url('../../static/icon/脚印拷贝.png');
        }
        &::after{
          left: 570px;
        }
      }
      .titleE{
        margin-top: 4px;
        font-size: 14px;
        //  margin-bottom: 12px;
      }
    }
    .varCardDiv{
      margin-top: 6px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-content: space-between;
      //  &::after{
      //     content: '';
      //     flex: auto;    /* 或者flex: 1 */
      //   }
      .varCard{
        background-color: #fff;
        border-radius: 4px;
        width: 23.5%;
        height: 270px;
        margin-bottom: 30px;
        // margin-right: 15px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
        // img{
        //   // width: 100%;
        //   height: 200px;

        // }
        /* 如果最后一行是3个元素 */
        &:last-child:nth-child(4n - 1) {
            margin-right: calc(23.5% + 6% / 3);
        }
        /* 如果最后一行是2个元素 */
        &:last-child:nth-child(4n - 2) {
            margin-right: calc(47% + 12% / 3);
        }
        &:hover{
          opacity: 0.9;
          transition: opacity 0.3s;
        }
       
        .el-image{
          border-radius: 4px 4px 0 0;
        }
        p{
          // padding-left: 10px;
          line-height: 25px;
          font-size: 14px;
          color: #333333;
          text-align: center
        }
      }
    }
  }
</style>