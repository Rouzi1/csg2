<template>
  <div id="app">
    <el-cascader
      size="small"
      :options="options"
      v-model="selectedOptions"
      @change="handleChange">
    </el-cascader>
  </div>
</template>

<script>
  import { provinceAndCityDataPlus,CodeToText, TextToCode } from 'element-china-area-data'
  export default {
    data () {
      return {
        options: provinceAndCityDataPlus,
        selectedOptions: [""]
      }
    },

    methods: {
      handleChange (value) {
        console.log(value);
        // CodeToText['110000']
        var ctt = CodeToText[value[0]] + CodeToText[value[1]]
        console.log(ctt)
        
        // 向父组件传参
        // 。。。。。。。。。。。。。。。。。。。。。。。。。。。
        if(value==""){
          ctt = "全部";
        }else if(value[1] == ""){
          ctt = CodeToText[value[0]]
        }
        this.selectedOptions = ctt;
        console.log(this.selectedOptions)
        this.$emit("area",ctt);
      }
    }
  }
</script>