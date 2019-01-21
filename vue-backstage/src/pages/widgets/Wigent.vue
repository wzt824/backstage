<template>
    <div>
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="grid-content">
            <div class="box-title">Percent Circle</div>
            <el-progress type="circle" :percentage="45" color="#409EFF" width="150" stroke-width="30"></el-progress>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="box-title">Percent Circle</div>
            <el-progress type="circle" :percentage="87" color="#67C23A" width="150" stroke-width="30"></el-progress>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="box-title">Percent Circle</div>
            <el-progress type="circle" :percentage="12" color="#E6A23C" width="150" stroke-width="30"></el-progress>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="box-title">Percent Circle</div>
            <el-progress type="circle" :percentage="36" color="#F56C6C" width="150" stroke-width="30"></el-progress>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="grid-content">
            <h4 class="box-title text-info">Site Traffic</h4>
            <div class="content widget-stat">
              <div class="percent small_chart" >

              </div>
              <div class="right-content">
                <h2 class="counter text-info">278</h2>
                <p class="text text-info">Some text here</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <h4 class="box-title text-success">Site Traffic</h4>
            <div class="content widget-stat">
              <div class="percent small_chart" >

              </div>
              <div class="right-content">
                <h2 class="counter text-success">36%</h2>
                <p class="text text-success">Some text here</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <h4 class="box-title text-danger">Site Traffic</h4>
            <div class="content widget-stat">
              <div class="percent small_chart">

              </div>
              <div class="right-content">
                <h2 class="counter text-danger">849</h2>
                <p class="text text-danger">Some text here</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="grid-content">
            <div class="statistics-box with-icon">
              <i class="fa fa-apple text-inverse"></i>
              <div class="tit">
                <h2 class="counter text-inverse">2561</h2>
                <p class="text">Some text here</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="statistics-box with-icon">
              <i class="fa fa-apple text-success"></i>
              <div class="tit">
                <h2 class="counter text-success">3562</h2>
                <p class="text">Some text here</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="statistics-box with-icon">
              <i class="fa fa-apple text-primary"></i>
              <div class="tit">
                <h2 class="counter text-primary">283</h2>
                <p class="text">Some text here</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <div class="statistics-box with-icon">
              <i class="fa fa-apple text-info"></i>
              <div class="tit">
                <h2 class="counter text-info">241</h2>
                <p class="text">Some text here</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="grid-content bg-success text-white">
            <div class="statistics-box">
              <i class="fa fa-diamond"></i>
              <div class="tit">
                <p class="text text-white">SUCCESS</p>
                <h2 class="counter">2637</h2>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-info text-white">
            <div class="statistics-box with-icon">
              <i class="fa fa-download"></i>
              <div class="tit">
                <p class="text text-white">DOWNLOAD</p>
                <h2 class="counter">72943</h2>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-danger text-white">
            <div class="statistics-box with-icon">
              <i class="fa fa-bug"></i>
              <div class="tit">
                <p class="text text-white">FIXED BUG</p>
                <h2 class="counter">6382</h2>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-warning text-white">
            <div class="statistics-box with-icon">
              <i class="fa fa-usd"></i>
              <div class="tit">
                <p class="text text-white">SALES</p>
                <h2 class="counter">12564</h2>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8">
          <div class="grid-content">
            <h4 class="box-title">Last Reviews</h4>
            <div class="review-list" v-for="(p,ind) in reviewData" >
              <div class="review-item">
                <div class="top">
                  <div class="name-left">
                    <h6 class="name">{{p.name}}</h6>
                    <span class="time">{{p.time}}</span>
                  </div>
                  <el-rate
                    v-model="p.value"
                    disabled
                    show-score
                    text-color="#ff9900"
                    score-template="{value}">
                  </el-rate>
                </div>
                <p class="desc">{{p.desc}}</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <h4 class="box-title">Last Reviews</h4>
            <el-steps direction="vertical" :active="1" >
              <el-step style="height: 70px" v-for="(p,ind) in progressData" :title="p.title" :description="p.desc" process-status="p.status"></el-step>
            </el-steps>
            <a href="#" class="activity-link">View all activity <i class="fa fa-angle-down"></i></a>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <h4 class="box-title">Last Reviews</h4>
            <el-checkbox-group
              v-model="checkboxData">
              <el-checkbox v-for="info in checks" :label="info" >{{info}}</el-checkbox>
              <br>
            </el-checkbox-group>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
  const checkboxDatas=['Task To Do 1','Task To Do 2','Task To Do 3','Task To Do 4','Task To Do 5','Task To Do 6','Task To Do 7','Task To Do 8','Task To Do 9','Task To Do 10',]
    export default {
        name: "Wigent",
      data(){
          return{
            reviewData:[
              {
                name:'miao',time:'20 min',value:'3.5',desc:'Amet odio neque nobis consequuntur consequatur a quae, impedit facere.'
              },
              {
                name:'haha',time:'10 min',value:'4',desc:'Amet odio neque nobis consequuntur consequatur a quae, impedit facere.'
              },
              {
                name:'xixnin',time:'40 min',value:'2.7',desc:'Amet odio neque nobis consequuntur consequatur a quae, impedit facere.'
              },
              {
                name:'ling',time:'60 min',value:'3.5',desc:'Amet odio neque nobis consequuntur consequatur a quae, impedit facere.'
              },
              {
                name:'miao',time:'10 min',value:'3.5',desc:'Amet odio neque nobis consequuntur consequatur a quae, impedit facere.'
              }
            ],
            progressData:[
              {
                title:'10 min',desc:'Harry has finished \'Amaza HTML\' task',status:'blue'
              },
              {
                title:'20 min',desc:'Harry has finished \'Amaza HTML\' task',status:'danger'
              },
              {
                title:'30 min',desc:'Harry has finished \'Amaza HTML\' task',status:'success'
              },
              {
                title:'1 hour',desc:'Harry has finished \'Amaza HTML\' task',status:'warning'
              },
              {
                title:'10 min',desc:'Harry has finished \'Amaza HTML\' task',status:'danger'
              },
              {
                title:'10 min',desc:'Harry has finished \'Amaza HTML\' task',status:'danger'
              },
              {
                title:'10 min',desc:'Harry has finished \'Amaza HTML\' task',status:'success'
              }


            ],
            checkboxData:['Task To Do 2','Task To Do 1','Task To Do 6',],
            checks:checkboxDatas
          }
      },
      methods:{
          drawPic(){
            let arr=[
              [2, 150, 500, 361, 450,680, 514,555,498],
              [300,500,260,248,163,369,258,147,495],
              [150,368,652,146,164,512,13,547,632]
            ];
            var option = {
              xAxis: {
                show:false,
                type: 'category',
                boundaryGap: false
              },
              yAxis: {
                show:false,
                type: 'value'
              },
              grid:{
                left:0,
                top:0,
                right:0,
                bottom:0,
                borderWidth:1
              },
              series: [{
                data: [],
                type: 'line',
                symbolSize:1,
                areaStyle: {
                  color:'#fff'
                },
                itemStyle:{
                  color:'#00aeff'
                },
                lineStyle:{
                  width:1
                }
              }]
            };
            for(var i=0;i<$('.small_chart').length;i++){
              var myChart=this.$echarts.init($('.small_chart')[i]);
              option.series[0].data=arr[i];
              myChart.setOption(option);
            }
          }
      },
      mounted(){
          this.drawPic()
      }
    }
</script>

<style lang="scss" scoped>
.el-checkbox{
  display: block;
  padding: 15px 0;
  margin-left: 0;
  border-bottom: 1px solid #eee;
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
  .box-title{
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 900;
  }

  .text-info {
    color: #00aeff!important;
  }
  .text-danger {
    color: #ff1744!important;
  }
  .text-success {
    color: #00bf4f!important;
  }
  .text-inverse {
    color: #212121!important;
  }
  .text-primary {
    color: #188ae2!important;
  }
  .text-white {
    color: #ffffff!important;
  }

  .bg-success {
    background-color: #00bf4f!important;
  }
  .bg-info {
    background-color: #00aeff!important;
  }
  .bg-danger {
    background-color: #ea4335!important;
  }
  .bg-warning {
    background-color: #ff8f00!important;
  }

  .widget-stat{
    padding-bottom: 10px;
    text-align: right;
    overflow: hidden;
    .percent{
      float: left;
      margin-top: 20px;
      width: 120px;
      height: 30px;
    }
    .right-content{
      float: right;
      .counter{
        padding-top: 10px;
        color: #434a54;
        font-size: 30px;
      }
      .text{
        color: #aab2bd;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 10px;
        font-size: 14px;
      }
    }
  }

  .statistics-box{
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    i{
      width: 80px;
      height: 80px;
      font-size: 70px;
      line-height: 80px;
      text-align: center;
    }
    .counter{
      text-align: right;
      font-size: 30px;
    }
    .text{
      color: #aab2bd;
    }
  }

  .review-list{
    color: #adadad;
    font-size: 14px;
    .review-item{
      margin-bottom: 15px;
      padding-bottom: 15px;
      border-bottom: 1px solid #eee;
    }
    .top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 5px;
      .name-left{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .name{
          margin-right: 10px;
          color: #435966;
        }
      }
    }
    .desc{
      font-size: 13px;
      line-height: 23px;
    }
  }

  .activity-link{
    text-align: center;
    color: #000;
    &:hover{
      color: #1e3ded;
    }
  }
</style>
