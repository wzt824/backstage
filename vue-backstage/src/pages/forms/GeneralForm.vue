<template>
   <div>
     <el-row :gutter="10">
       <el-col :span="12">
         <div class="grid-content">
           <h4 class="box-title">Basic example</h4>
           <div class="card-content">
             <el-form>
               <el-form-item label="Email address">
                 <el-input type="text"  placeholder="Enter your email"></el-input>
               </el-form-item>
               <el-form-item label="Password">
                 <el-input type="password"  placeholder="Enter your password"></el-input>
               </el-form-item>
               <el-form-item label="File input">
                 <el-input type="file"></el-input>
                 <p class="help-block">Example block-level help text here.</p>
               </el-form-item>
               <el-form-item>
                 <el-button type="primary">提交</el-button>
               </el-form-item>
             </el-form>
           </div>
         </div>
       </el-col>
       <el-col :span="12">
         <div class="grid-content">
           <h4 class="box-title">Horizontal form</h4>
           <div class="card-content">
             <el-form>
               <el-form-item label="Email address" class="two">
                 <el-input type="text"  placeholder="Enter your email"></el-input>
               </el-form-item>
               <el-form-item label="Password" class="two">
                 <el-input type="password"  placeholder="Enter your password"></el-input>
               </el-form-item>
               <el-form-item class="two">
                 <el-button type="submit">Sign in</el-button>
               </el-form-item>
             </el-form>
           </div>
         </div>
       </el-col>
     </el-row>
     <el-row :gutter="10">
       <el-col :span="24">
         <div class="grid-content">
           <h4 class="box-title">Basic example</h4>
           <div class="card-content">
             <el-form :inline="true" class="demo-form-inline">
               <el-form-item>
                 <el-input placeholder="Full name"></el-input>
               </el-form-item>
               <el-form-item>
                 <el-input placeholder="Email address"></el-input>
               </el-form-item>
               <el-form-item>
                 <el-button type="primary">Send invitation</el-button>
               </el-form-item>
             </el-form>
             <el-form :inline="true" class="demo-form-inline">
               <el-form-item>
                 <el-input placeholder="Email address"></el-input>
               </el-form-item>
               <el-form-item>
                 <el-input type="password" placeholder="Password"></el-input>
               </el-form-item>
               <el-form-item>
                 <el-button type="primary">Sign in</el-button>
               </el-form-item>
             </el-form>
           </div>
         </div>
       </el-col>
     </el-row>
     <el-row :gutter="10">
       <el-col :span="12">
         <div class="grid-content">
           <h4 class="box-title">Input Types</h4>
           <div class="card-content">
             <el-form :inline="true" class="demo-form-inline" :label-width="100">
               <el-form-item label="Text">
                 <el-input placeholder="Some text value ..."></el-input>
               </el-form-item>
               <el-form-item label="Email">
                 <el-input placeholder="Email address"></el-input>
               </el-form-item>
               <el-form-item label="Password">
                 <el-input type="password" placeholder="Password"></el-input>
               </el-form-item>
               <el-form-item label="Placeholder">
                 <el-input placeholder="Placeholder"></el-input>
               </el-form-item>
               <el-form-item label="Textarea">
                 <el-input type="textarea" placeholder="Write your meassage"></el-input>
               </el-form-item>
             </el-form>
           </div>

         </div>
       </el-col>
       <el-col :span="12">
         <div class="grid-content">
           <h4 class="box-title">Input States</h4>
           <div class="card-content">
             <el-form>
               <el-form-item label="Input With Success" >
                 <el-input class="success" placeholder="Enter ..."></el-input>
               </el-form-item>
               <el-form-item label="Input With Warning">
                 <el-input class="warning" placeholder="Enter ..."></el-input>
               </el-form-item>
               <el-form-item label="Input With Error">
                 <el-input class="error" placeholder="Enter ..."></el-input>
               </el-form-item>
               <el-form-item label="Input With Icons">
                 <el-input class="icons" placeholder="Enter ..."></el-input>
               </el-form-item>
             </el-form>
           </div>
         </div>
       </el-col>
     </el-row>
     <el-row :gutter="10">
       <el-col :span="12"><div class="grid-content"></div></el-col>
       <el-col :span="12"><div class="grid-content"></div></el-col>
     </el-row>
   </div>
</template>

<script>
    export default {
        name: "GeneralForm"
    }
</script>

<style lang="scss" scoped>
.box-title{
  color: #435966!important;
  background: #ffffff;
  border-bottom: 1px solid #e6e9ed;
  padding-bottom: 10px;
  line-height: 30px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  background-color: #ffffff;
  border: 1px solid #e6ebf5;
  border-radius: 4px;
}
.grid-content {
  padding: 20px;
  border-radius: 4px;
}
  .card-content{
    padding-top: 20px;
  }
.warning{
  border: 1px solid #E6A23C;
  border-radius: 4px;
}
.success{
  border: 1px solid #00bf4f;
  border-radius: 4px;
}
.error{
  border: 1px solid #ea4335;
  border-radius: 4px;
}
.icons{
  border: 1px solid #435966;
  border-radius: 4px;
}
</style>
