<template>
  <div>
    <div class="top ">
      <div class="w">
        <el-tooltip content="返回首页" placement="bottom" effect="light">
        <img
          class="logo"
          src="../../../static/icon/铲屎官.png"
          @click="returnMain()"
          alt=""
        />
        </el-tooltip>
        <div class="title">写文章</div>
      </div>
    </div>
    <div class="mid ">
      <div class="w">
        <el-form>
          <!-- 封面图 -->
          <div class="coverImg">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <!-- 文章标题 -->
          <div class="inputTitle">
            <!-- <el-input v-model="input" placeholder="请输入标题"></el-input> -->
            <input
              v-model="title"
              type=""
              autocomplete="off"
              placeholder="请输入标题(最多40个字)"
              maxlength="40"
            />
            <p class="leftWords" :class="{ leftWordsRed: !leftWords }">
              还能输入{{ leftWords }}个字
            </p>
          </div>
          <!-- 文本编辑器 -->
          <div class="edit_container">
            <quill-editor
              v-model="content"
              ref="myQuillEditor"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @change="onEditorChange($event)"
            >
            </quill-editor>
          </div>
          <!-- 选择主题 -->
          <div class="ariticleType">
            <!-- <div class="left">类型：</div> -->
            <el-form-item label="类型：">
              <el-select v-model="value" placeholder="请选择文章类型">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-form-item>
          </div>
          <!-- 提交 -->
          <div class="btn">
            <button class="savebtn" v-on:click="saveHtml">发布</button>
            <button class="savebtn cancelbtn" v-on:click="returnMain">
              取消
            </button>
          </div>
        </el-form>
        <!-- 显示 -->
        <!-- <div class="ql-container ql-snow">
            <div class="ql-editor" v-html="content">
            </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { container, ImageExtend, QuillWatch } from 'quill-image-extend-module'
// import { quillEditor } from 'vue-quill-editor'
// import Quill from 'quill' //引入编辑器
// import imageResize from 'quill-image-resize-module'
// Quill.register('modules/ImageExtend',ImageExtend)
// Quill.register('modules/imageResize', imageResize)
export default {
  data() {
    return {
      imageUrl: "",
      title: "",
      // leftWords:30,
      // 富文本编辑器

      content: `<p></p><p><br></p><ol></ol>`, // 富文本编辑器默认内容
      editorOption: {
        modules: {
          // imageResize: {},
          toolbar: [
            ["bold", "italic", "underline", "strike"], //加粗，斜体，下划线，删除线
            // ['blockquote', 'code-block'],     //引用，代码块
            [{ header: 1 }, { header: 2 }], // 标题，键值对的形式；1、2表示字体大小
            [{ list: "ordered" }, { list: "bullet" }], //列表
            // [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
            [{ indent: "-1" }, { indent: "+1" }], // 缩进
            // [{ 'direction': 'rtl' }],             // 文本方向
            [{ size: ["small", false, "large", "huge"] }], // 字体大小
            // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题
            [{ color: [] }, { background: [] }], // 字体颜色，字体背景颜色
            // [{ 'font': [] }],     //字体
            [{ align: [] }], //对齐方式
            ["clean"], //清除字体样式
            ["image"] //上传图片、上传视频
            // ['image','video']    //上传图片
          ],
          // imageResize: {
          //   displayStyles: {
          //     backgroundColor: 'black',
          //     border: 'none',
          //     color: 'white'
          //   },
          //   modules: [ 'Resize', 'DisplaySize', 'Toolbar' ]
          // }
        },
        theme: "snow",
        placeholder: "请输入正文"
      },
      // 类型选择
      options: [
        {
          value: "1",
          label: "吸猫日常"
        },
        {
          value: "2",
          label: "养猫常识"
        },
        {
          value: "3",
          label: "猫咪用品"
        },
        {
          value: "4",
          label: "猫咪健康"
        },
        {
          value: "5",
          label: "猫咪训练"
        },
        {
          value: "6",
          label: "奶猫照顾"
        },
        {
          value: "7",
          label: "猫咪冷知识"
        },
        {
          value: "8",
          label: "其它"
        }
      ],
      value: ""
    };
  },
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
    leftWords: function() {
      console.log(this.title);
      return 40 - this.title.length;
    }
  },
  methods: {
    returnMain() {
      this.$router.push("/");
    },

    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    saveHtml: function(event) {
      alert(this.content);
    },
    // 图片上传
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  },
  mounted() {
    document.documentElement.scrollTop = 0;
  }
};
</script>

<style lang="scss" scoped>
.top {
  height: 88px;
  background-color: #ffffff;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.1);
  .logo {
    cursor: pointer;
    margin-top: 23px;
    // vertical-align: ;
    float: left;
  }
  .title {
    margin: 30px 0;
    height: 28px;
    line-height: 28px;
    font-size: 18px;
    color: #888;
    padding-left: 20px;
    margin-left: 20px;
    clear: left;
    display: inline-block;
    border-left: 1px solid #eeeeee;
  }
}
.mid {
  background-color: #fff;
  margin-top: 12px;
  min-height: calc(100vh - 100px);
  padding-bottom: 100px;
  box-sizing: border-box;
  .coverImg {
    padding-top: 20px;
    // width: 100%;
  }
  .inputTitle {
    // padding-bottom: 10px;
    padding-top: 20px;

    input {
      font-size: 24px;
      color: #222;
      width: 100%;
      height: 30px;
      // &:focus{
      //   background-color: #eeeeee;
      // }
    }
    .leftWords {
      text-align: right;
      color: #999;
      font-size: 13px;
    }
    .leftWordsRed {
      color: rgb(221, 0, 0);
    }
  }
  .edit_container {
    padding-top: 20px;
  }
  .savebtn {
    // display: block;
    height: 30px;
    background-color: #f58b54;
    border-radius: 4px;
    margin: 0 auto;
    width: 80px;
    font-size: 16px;
    line-height: 30px;
    color: #fff;
    font-weight: bold;
    margin-top: 30px;
    cursor: pointer;
  }
  .cancelbtn {
    // background-color: #aaa;
    margin-left: 10px;
    border: 1px solid #999;
    background-color: #fff;
    color: #999;
    // color: #666;
  }
  .ariticleType {
    margin-top: 20px;
  }
  .show{
    width: 1000px;

  }
}
</style>
