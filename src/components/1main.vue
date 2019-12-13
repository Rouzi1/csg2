<template>
  <div class="w">
    <div class="main-banner">
      <!-- banner图 -->
      <div class="banner">
        <el-carousel :interval="2000">
          <el-carousel-item v-for="item in bannerData" :key="item.id">
            <img :src="'../../static/icon/'+item.img" alt="">
            <p>{{item.title}}</p>
          </el-carousel-item>
        </el-carousel>

      </div>
      <!-- 列表 -->
      <div class="main-bottom">
        <com1></com1>
         
      </div>
      
    </div>
    <mainright></mainright>
  </div>
</template>

<script>
import com1 from '@/components/1mainList.vue'
import mainright from '@/components/1mainrigth.vue'
export default {
  data () {
    return {
      // banner数据
      bannerData:[
        {id:1,img:'banner1.jpg',title:'猫为什么这么喜欢猫薄荷？'},
        {id:2,img:'banner2.jpg',title:'如何正确饲养猫主子？'},
        {id:3,img:'banner3.jpg',title:'猫的十大不为人知的秘密'}
      ]
    
      // 推荐热议
      ,activeName: 'first'
      
    }
  },
  methods: {
    
  },
  
  components: {
    com1,
    mainright
  }
}
</script>

<style lang="scss" scoped>
.w{
  position: relative;
  .main-banner{
    padding-top: 14px;
    position: relative;
    .banner{
      width: 739px;
      height: 299px;
      border-radius: 4px;
      overflow: hidden;
      cursor: pointer;
      display: inline-block;
      img{
        width: 739px;
        // top: 12px;
        margin-top: -42px;
        // z-index: -1;
      }
      .el-carousel{
        p{
          position: absolute;
          bottom: 0;
          left: 0;
          height: 30%;
          width: 100%;
          background-image: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.3));
          // line-height: 100px;
          color: #ddd;
          padding-top: 40px;
          padding-left: 24px;
          box-sizing: border-box;
          font-size: 24px;
        }
        p:hover{
          color: #fff;
        }
      }
    }
    .main-bottom{
      background-color: #fff;
      // height:2000px;
      width: 739px;
      border-radius: 4px;
      margin-top: 12px;
      padding: 20px;
      box-sizing: border-box;
      
      
    }
    
  }
  
}

</style>