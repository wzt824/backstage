<template>
    <div>
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="grid-content">
            <h4 class="box-title">Card Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugit facilis nulla repudiandae odit ipsam sit aliquam voluptatum quaerat quod ab molestiae, rem, nostrum perferendis ipsa nam doloribus dolorem explicabo!</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <h4 class="box-title"><i class="ico fa fa-user"></i>Card Title With Icon</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugit facilis nulla repudiandae odit ipsam sit aliquam voluptatum quaerat quod ab molestiae, rem, nostrum perferendis ipsa nam doloribus dolorem explicabo!</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <h4 class="box-title text-primary">Card Title With Color</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugit facilis nulla repudiandae odit ipsam sit aliquam voluptatum quaerat quod ab molestiae, rem, nostrum perferendis ipsa nam doloribus dolorem explicabo!</p>

          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="grid-content bordered">
            <h4 class="box-title">Card Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugit facilis nulla repudiandae odit ipsam sit aliquam voluptatum quaerat quod ab molestiae, rem, nostrum perferendis ipsa nam doloribus dolorem explicabo!</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bordered primary">
            <h4 class="box-title"><i class="ico fa fa-user"></i>Card Title With Icon</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugit facilis nulla repudiandae odit ipsam sit aliquam voluptatum quaerat quod ab molestiae, rem, nostrum perferendis ipsa nam doloribus dolorem explicabo!</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bordered-all danger">
            <h4 class="box-title text-primary">Card Title With Color</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugit facilis nulla repudiandae odit ipsam sit aliquam voluptatum quaerat quod ab molestiae, rem, nostrum perferendis ipsa nam doloribus dolorem explicabo!</p>

          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="grid-content card danger">
            <h4 class="box-title">Card Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugit facilis nulla repudiandae odit ipsam sit aliquam voluptatum quaerat quod ab molestiae, rem, nostrum perferendis ipsa nam doloribus dolorem explicabo!</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content card">
            <h4 class="box-title bg-warning">
              <i class="ico fa fa-space-shuttle"></i>Card Title</h4>            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugit facilis nulla repudiandae odit ipsam sit aliquam voluptatum quaerat quod ab molestiae, rem, nostrum perferendis ipsa nam doloribus dolorem explicabo!</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content card bordered-all danger">
            <h4 class="box-title bg-danger">Card Title With Color</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni fugit facilis nulla repudiandae odit ipsam sit aliquam voluptatum quaerat quod ab molestiae, rem, nostrum perferendis ipsa nam doloribus dolorem explicabo!</p>

          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="grid-content">

          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">

          </div>
        </el-col>
        <el-col :span="8"><div class="grid-content"></div></el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
        name: "Buttons"
    }
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 20px;
  &:last-child {
     margin-bottom: 0;
   }
  }
  .box-title{
    padding-top: 20px;
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 900;
  }
  .el-col {
    background-color: #ffffff;
    border: 1px solid #e6ebf5;
    border-radius: 4px;
  }
  .grid-content {
    padding: 0 20px 20px 20px;
    border-radius: 4px;
  }

  .grid-content.primary {
    border-color: #188ae2!important;
  }
  .grid-content.danger {
    border-color: #ea4335!important;
  }
  .grid-content.success {
    border-color: #00bf4f!important;
  }
  .grid-content.bordered{
    border-top: 4px solid #435966;
  }
  .grid-content.bordered-all{
    border: 1px solid #435966;
    border-top: 4px solid #435966;
  }

  .grid-content.card{
    border-top: 4px solid #435966;
  }
  /*.grid-content.card .box-title{*/
    /*background-color: #435966;*/
  /*}*/
  /*.bg-success {*/
    /*background-color: #00bf4f!important;*/
  /*}*/
  /*.bg-warning {*/
    /*background-color: #ff8f00!important;*/
  /*}*/

</style>
