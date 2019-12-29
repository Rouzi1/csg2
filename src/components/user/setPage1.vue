<template>
  <div class="personalData">
    <div class="titlediv">
      <p>个人资料</p>
      <div class="line"></div>
    </div>
    <!-- 个人资料 -->
    <div class="form">
      <div class="item name">
        <span class="tab">姓名：</span>
        <div class="Mess"  v-if="!isShowSubForm[0]">
          <span class="val" @mouseenter="hoverMess(0)">{{Mess.name}}</span>
          <div class="hoverupdate" @click="updateMess(0)" v-if="ishoverMess[0]"> <i class="el-icon-edit"></i><span>修改</span></div>
        </div>
        <div class="subForm " v-if="isShowSubForm[0]">
          <el-form :model="ruleForm" size="mini"  label-position="left" status-icon :rules="rules" ref="nameForm" class="demo-ruleForm" label-width='0px'>
            <el-form-item   prop="name" >
              <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item >
              <el-button type="primary" @click="submitForm('nameForm','name')">提交</el-button>
              <el-button @click="resetForm('nameForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="line"></div>
      <div class="item gender">
        <span class="tab">性别：</span>
        <div class="Mess"  v-if="!isShowSubForm[1]">
          <span class="val" @mouseenter="hoverMess(1)" >{{Mess.gender}}</span>
          <div class="hoverupdate" @click="updateMess(1)" v-if="ishoverMess[1]"> <i class="el-icon-edit"></i><span>修改</span></div>
        </div>
        <div class="subForm" v-if="isShowSubForm[1]">
          <el-form :model="ruleForm" size="mini"  label-position="left" status-icon :rules="rules" ref="genderForm" class="demo-ruleForm">
            <el-form-item  prop="gender" >
              <el-radio v-model="ruleForm.gender" label="男"></el-radio>
              <el-radio v-model="ruleForm.gender" label="女"></el-radio>
            </el-form-item>
            <el-form-item  >
              <el-button type="primary" @click="submitForm('genderForm','gender')">提交</el-button>
              <el-button @click="resetForm('genderForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="item address">
        <span class="tab">地址：</span>
        <div class="Mess"  v-if="!isShowSubForm[2]">
          <span class="val" @mouseenter="hoverMess(2)">{{Mess.address}}</span>
          <div class="hoverupdate" @click="updateMess(2)" v-if="ishoverMess[2]"> <i class="el-icon-edit"></i><span>修改</span></div>
        </div>
        <div class="subForm" v-if="isShowSubForm[2]">
          <el-form :model="ruleForm" size="mini"  label-position="left" status-icon :rules="rules" ref="addressForm" label-width="100px" class="demo-ruleForm">
            <el-form-item  prop="address" label-width='0px'>
                <areadata @area='getArea'></areadata>
            </el-form-item>
            <el-form-item  label-width='0px'>
              <el-button type="primary" @click="submitForm('addressForm','address')">提交</el-button>
              <el-button @click="resetForm('addressForm')">取消</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="item phone">
        <span class="tab">联系电话： </span>
        <div class="Mess"  v-if="!isShowSubForm[3]">
          <span class="val" @mouseenter="hoverMess(3)">{{Mess.phone}}</span>
          <div class="hoverupdate" @click="updateMess(3)" v-if="ishoverMess[3]"> <i class="el-icon-edit"></i><span>修改</span></div>
        </div>
        <div class="subForm" v-if="isShowSubForm[3]">
          <el-form :model="ruleForm" size="mini"  label-position="left" status-icon :rules="rules" ref="phoneForm" label-width="100px" class="demo-ruleForm">
            <el-form-item  prop="phone" label-width='0px'>
              <el-input type="text" v-model="ruleForm.phone" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item  label-width='0px'>
              <el-button type="primary" @click="submitForm('phoneForm','phone')">提交</el-button>
              <el-button @click="resetForm('phoneForm')">取消</el-button>
            </el-form-item>
          </el-form>
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
    var validatephone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入电话号码'));
      } else {
        var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
        if(reg.test(value) != true){
          callback(new Error('非电话号码'));
          
        }else{
          callback();

        }
      }
    };
    var validateName = (rule, value, callback) => {
      if (value === '') {
        // console.log('111')
        callback(new Error('请输入账户名'));
      }
      callback();
    };
    return {
      area:'',
      Mess:{
        name: '我家猫主子',
        gender:'男',
        address:'广州省东莞市',
        phone:'15622998344 ',
      },
      ruleForm: {
        name: '',
        gender:'',
        address:'',
        phone:' ',
      },
      // nameForm:{
      //   name: '',
      // },
      // oldruleForm:{},
      namerules:{
        name:[
           { validator: validateName, trigger: 'blur' }
        ]
      },
      rules: {
        name:[
          { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        gender:[
          { required: true, message: '请选择性别', trigger: 'change' }
        ],
        // address:[

        // ],
        phone: [
          { validator: validatephone, trigger: 'blur' }
        ]
      },
      ishoverMess:[0,0,0,0],
      isShowSubForm:[0,0,0,0]
    }
  },
  methods: {
    
    // 表单
    submitForm(formName,na) {
      // 绑定地址
      if(na == 'address'){
        this.ruleForm.address = this.area;
      }
      console.log(this.$refs[formName])
      this.$refs[formName].validate((valid) => {
        console.log('aaa'+valid)
        if (valid) {
          // alert('submit!');
          this.ishoverMess = [0,0,0,0];
          this.isShowSubForm = [0,0,0,0];
          // console.log(na)
          // console.log(this.ruleForm[na])
          this.Mess[na] = this.ruleForm[na];
          this.ruleForm = {name: '',gender:'',address:'',phone:' ',}
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      
    },
    // 点击表单取消按钮
    resetForm(formName) {
      // this.$refs[formName].resetFields();
      this.ishoverMess = [0,0,0,0];
      this.isShowSubForm = [0,0,0,0];
      // this.ruleForm = this.oldruleForm;
    },
    // 显示隐藏修改按钮
    hoverMess(x){
      // console.log(x)
      this.ishoverMess = [0,0,0,0];
      this.ishoverMess[x] = 1;
      // console.log(this.ishoverMess)  
    },
    // 点击修改按钮
    updateMess(x){
      this.isShowSubForm = [0,0,0,0];
      this.isShowSubForm[x] = 1;
      // this.oldruleForm = this.ruleForm;
    },
    // 获得地区组件的地区值
    getArea(data){
      // console.log("子组件传来的"+data);
      this.area = data;
      // console.log("area"+this.area)
    }

  }
}
</script>

<style lang='scss' scoped>
.personalData{
  height: calc(100vh - 101px);
}
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
        // margin-bottom: 20px;
      }
    }
    .form{
      margin-top: 24px;
      .item{
        margin-bottom: 24px;
        
        span{
          display: inline-block;
          font-size: 16px;
          font-weight: bold;
          color: #333;
          // &:nth-child(1){
          //   // margin-right: 
           
            // color: red;
          // }
        }
          .tab{
            width: 90px;
            color: #555;
          }
        
        .Mess{
          display: inline-block;
          // span{
            
            // width: 100px;
            // color: #555;
          // }
        }
        .hoverupdate{
          cursor: pointer;
          padding-left: 10px;
          display: inline-block;
          font-size: 14px;
          color: #f58b54;
          font-weight: 400;
          span{
            padding-left: 4px;
            font-size: 14px;
            color: #f58b54;
            font-weight: 400;
          }
        }
      }
      .subForm{
        vertical-align: top;
        display: inline-block;
      }
    }
</style>