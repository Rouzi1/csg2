<template>
  <div class="w">
    <div class="left">
      <maintenanceList></maintenanceList>
    </div>
    <mainright></mainright>
  </div>
</template>

<script>
import mainright from '@/components/1mainrigth.vue'
import maintenanceList from '@/components/2maintenanceList.vue'
export default {
  components: {
    mainright,
    maintenanceList
  }
}
</script>

<style lang="scss" scoped>
  .w{
    position: relative;
    padding-top: 12px;
    .left{
      background-color: #fff;
      // height:2000px;
      width: 739px;
      border-radius: 4px;
      // margin-top: 12px;
      padding: 20px;
      box-sizing: border-box;
      
      
    
    }
  }
</style>