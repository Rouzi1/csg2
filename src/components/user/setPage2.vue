<template>
  <div class="personalData">
    <div class="titlediv">
      <p>修改密码</p>
      <div class="line"></div>
    </div>
  <!-- 修改密码表单 -->
    <div class="form">
      <el-form :model="ruleForm" size="mini" label-position="left" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="原密码" prop="oldpass">
          <el-input type="password" v-model="ruleForm.oldpass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    var validateOldPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入原密码'));
      } 
      callback();
      
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入旧密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        oldpass:'',
        pass: '',
        checkPass: '',
      },
      rules: {
        oldpass: [
          { validator: validateOldPass, trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    // 表单提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          this.updatePassSuccess();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 重置
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 成功提示
    updatePassSuccess() {
      this.$message({
        message: '修改成功',
        type: 'success',
        offset: 20
      });
      // this.$notify({
      //   title: '自定义位置',
      //   message: '修改成功',
      //   position: 'top'
      // });
    },

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
    width: 70%;
  }
</style>