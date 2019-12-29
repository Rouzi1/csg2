<template>
  <div class="login">
    <img class="loginimg1" src="../../static/icon/登录图.png" alt="">
    <img class="loginimg2" src="../../static/icon/登录标题.png" alt="">
    <div class="card">
      <div class="cardTop">
        <p>
          <span class="dl" @click="dlfun" :class="{ischeckP:isDisplayNone}">登录</span>
          <span class="zc" @click="zcfun" :class="{ischeckP:!isDisplayNone}">注册</span>
        </p>
        <div class="bot" :style="{left:botLeft+'px'}"></div>
      </div>
      <!-- 登录表单 -->
      <el-form class="loginForm" status-icon :class="{displaynone:!isDisplayNone}" :model="loginForm" :rules="loginrules" ref="loginForm">
        <div class="logininput">
          <el-form-item label="" prop="loginName">
            <el-input v-model="loginForm.loginName"  placeholder="请输入账号"  ></el-input>
          </el-form-item>
          <el-form-item label="" prop="loginpadssword">
            <el-input v-model="loginForm.loginpadssword" placeholder="请输入密码" show-password prop="loginpadssword"></el-input>
          </el-form-item>
          <el-form-item label="" prop="yzm">
            <el-input v-model="loginForm.yzm" class="yzminput" placeholder="请输入验证码" prop="yzm"></el-input>
          </el-form-item>
          <!-- <validcode :value.sync="validCode"></validcode> -->
          <img class="yzm" :src="yzmimg" alt="">
          <button @click="loginbtnFun('loginForm')">登录</button>
          <p class="forgetpassword">忘记密码</p>
        </div>
      </el-form>
      <!-- 注册表单 -->
      <el-form class="registerForm" :class="{displaynone:isDisplayNone}" status-icon :model="registerForm" :rules="registerrules" ref="registerForm">
        <div class="logininput">
          <el-form-item label="" prop="registerName">
            <el-input v-model="registerForm.registerName"  placeholder="请输入账号" ></el-input>
          </el-form-item>
          <el-form-item label="" prop="registerPassword">
            <el-input v-model="registerForm.registerPassword" placeholder="请输入密码" show-password></el-input>
          </el-form-item>
          <el-form-item label="" prop="registerRePassword">
            <el-input v-model="registerForm.registerRePassword" placeholder="请确认密码" show-password></el-input>
          </el-form-item>
          <!-- <validcode :value.sync="validCode"></validcode> -->
          <button @click="registerbtnFun('registerForm')">注册</button>
        </div>
      </el-form>
      <div class="socialLogin">
        <p>社交账号登录</p>
        <div class="imgs">
          <img src="../../static/icon/微信.png" alt="">
          <img src="../../static/icon/QQ.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import validcode from '@/components/tool/valid-code'
export default {
  components: {
    validcode,
  },
  data () {
    // 登录表单验证规则
    var validateLoginName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账户名'));
      }
      callback();
    };
    var validateLoginpassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      }
      callback();
    };
    var validateLoginyzm = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入验证码'));
      }
      callback();
    };
    // 注册表单验证规则
    var validateRegisterName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账户名'));
      }
      callback();
    };
    var validateRegisterPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.registerForm.registerRePassword !== '') {
          this.$refs.registerForm.validateField('registerRePassword');
        }
        callback();
      }
    };
    var validateRegisterPass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.registerForm.registerPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      // 登录表单
      loginForm:{
        loginName: ''
        ,loginpadssword:''
        ,yzm:''
      },
      // 验证规则
      loginrules: {
        loginName: [
          { validator: validateLoginName,  trigger: 'blur' },
        ],
        loginpadssword: [
          { validator: validateLoginpassword, trigger: 'blur' },
        ],
        yzm: [
          { validator: validateLoginyzm,  trigger: 'blur' },
        ],
      }
      ,yzmimg:'../../static/icon/yanzma.PNG'
      // 注册表单
      ,registerForm:{
        registerName:''
        ,registerPassword:''
        ,registerRePassword:''
      },
      // 验证规则
      registerrules:{
        registerName:[
           { validator: validateRegisterName, trigger: 'blur' }
        ],
         registerPassword: [
            { validator: validateRegisterPass, trigger: 'blur' }
          ],
          registerRePassword: [
            { validator: validateRegisterPass2, trigger: 'blur' }
          ],
      }
      
      // 登录注册p标签
      ,isDisplayNone:true
      ,botLeft:120
    }
  },
  methods: {
    zcfun(){
      // 点击注册
      this.isDisplayNone = false;
      this.botLeft = 216;
    },
    dlfun(){
      this.isDisplayNone = true;
      this.botLeft = 120;
    },
    // 点击登录按钮
    loginbtnFun(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          // 登录成功
          console.log('登录成功');
          var user ={
            name:this.loginForm.loginName,
            gender:'男'
          };
          this.$store.commit('setUser', user);
          console.log(this.$store.state.user);
          this.$router.push('/');
        } else {
          console.log('登录失败');
          return false;
        }
      });
      
    
    },
    // 点击注册按钮
    registerbtnFun(formName){
       this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('注册成功');
          this.$alert('注册成功，请登录', '注册成功', {
            confirmButtonText: '确定',
            callback: action => {
            }
          });
          this.isDisplayNone = true;
          this.botLeft = 120;
          this.loginForm.loginName = this.registerForm.registerName;
        } else {
          console.log('注册失败');
          return false;
        }
      });
    }
  },
  mounted () {
    // 获得参数判断是登录还是注册
    // alert('1')
    if(this.$route.query.islogin!=null && this.$route.query.islogin=='false'){
      // alert(typeof( this.$route.query.islogin));
      this.isDisplayNone = false;
      this.botLeft = 216;
    }
  }
}
</script>

<style lang="scss">
  .login{
    width: 100vw;
    height: 100vh;
    background-image: url('../../static/icon/登录背景.png');
    background-size: 100% ;
    // position: relative;
    .loginimg1{
      position: absolute;
      top: 166px;
      left: 250px;
      width: 316px;
    }
    .loginimg2{
      position: absolute;
      top: 52px;
      left: 178px;
    }
    .card{
      position: absolute;
      width: 398px;
      height: 537px;
      background: white;
      top: 50%;
      margin-top: -268px;
      left: 767px;
      border-radius: 8px;
      box-shadow: 2px 2px 7px #b1b1b1;
      padding: 32px 24px;
      box-sizing: border-box;
      .displaynone{
        display: none;
      }
      .cardTop{
        color: #b0b0b0;
        font-size: 22px;
        margin-bottom: 36px;
        p{
          text-align: center;
          margin-bottom: 6px;
        }
        .dl{
          margin-right: 46px;
        }
        .ischeckP{
          color: #f58b54;
        transition:  color 300ms;

        }
        .bot{
          width: 60px;
          height: 4px;
          background-color: #f58b54;
          border-radius: 2px;
          position: absolute;
          // top: 0px;
          left: 120px;
          transition:  left 400ms;
        }
        .zc{
          cursor: pointer;
        }
        .dl{
          cursor: pointer;
        }
      }
      .logininput{
        position: relative;
        .yzminput{
          width: 210px;
          display: inline-block;
        }
        .ValidCode{
          display: inline-block;
          background-color: #f7f7f7;
          height: 46px;
          position: absolute;
          right: 0px;
          border-radius: 2px;
        }
        .yzm{
          height: 46px;
          border-radius: 4px;
          position: absolute;
          right: 0px;
              top: 136px;
        }
        button{
          background-color: #f58b54;
          border-radius: 4px;
          display: block;
          width: 100%;
          height: 46px;
          color: white;
          font-weight: bold;
          font-size: 20px;
          cursor: pointer;
        }
        .forgetpassword{
          text-align: right;
          font-size: 14px;
          color: #999999;
          cursor: pointer;
          margin-top: 18px;

        }
        
      }
      .socialLogin{
        margin-top: 34px;
        position: relative;
        p{
          color: #999;
          font-size: 16px;
          text-align: center;
          &::before{
            content: '';
            background-color: #cccccc;
            height: 1px;
            width: 64px;
            position: absolute;
            top:12px;
            left: 58px;
          }
          &::after{
            content: '';
            background-color: #cccccc;
            height: 1px;
            width: 64px;
            position: absolute;
            top:12px;
            right: 58px;
          }

        }
        .imgs{
          margin:0 auto;
          margin-top: 20px;
          width: 123px;
          cursor: pointer;
        }
        .imgs img:nth-child(1){
          margin-right: 24px;
        }
      }
    }

  }

</style>