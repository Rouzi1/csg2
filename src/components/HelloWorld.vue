<template>
  <div>
    <button @click="fn">获得user</button>
  </div>
</template>

<script>
import {userapi} from '../api/userapi'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    fn(){
      userapi.getUserList()
        .then( res => {
            //成功回调
            console.log('111');
        })
        .catch( err => {
            //失败回调
        })
    }
  }
}
</script>
<style scoped>

</style>
