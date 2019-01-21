<template>
    <div>
      <el-row :gutter="10">
        <el-col :span="24">
          <div class="grid-content" id="charts1"></div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="6">
          <div class="grid-content">
            <h4 class="box-title">Projects</h4>
            <div class="content widget-stat">
              <div class="percent bg-warning">
                53%
                <i class="fa fa-line-chart"></i>
              </div>
              <div class="right-content">
                <h2 class="counter">837</h2>
                <p class="text">Projects</p>
              </div>
            </div>
            <el-progress :percentage="53" color="#8e71c7" :status="warning"></el-progress>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <h4 class="box-title">Memory usage</h4>
            <div class="content widget-stat">
              <div class="circle">
                <el-progress type="circle" width="80" :percentage="76" color="#304ffe"></el-progress>
              </div>

              <div class="right-content">
                <h2 class="counter">804</h2>
                <p class="text">Disk usage</p>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <h4 class="box-title">Visitor Analytics</h4>
            <div class="content widget-stat">
              <div class="percent bg-warning">
                40%
                <i class="fa fa-line-chart"></i>
              </div>
              <div class="right-content">
                <h2 class="counter">976</h2>
                <p class="text">Visitors today</p>
              </div>
            </div>
            <el-progress :percentage="40" color="#ea4335" ></el-progress>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content">
            <h4 class="box-title">Monthly Sales</h4>
            <div class="content widget-stat">
              <div class="circle">
                <el-progress type="circle" width="80" :percentage="94" color="#00d257"></el-progress>
              </div>

              <div class="right-content">
                <h2 class="counter">3922</h2>
                <p class="text">Sales</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="8"><div class="grid-content" id="charts2"></div></el-col>
        <el-col :span="8"><div class="grid-content" id="charts3"></div></el-col>
        <el-col :span="8"><div class="grid-content" id="charts4"></div></el-col>
      </el-row>
      <el-row :gutter="10" >
        <el-col :span="6">
          <div class="grid-content user-info">
            <div class="avatar">
              <img src="../../assets/img/big.gif" alt="">
            </div>
            <div class="right-content">
              <h4 class="name">Betty Simmons</h4>
              <p><a href="">hello@ninjateam.org</a></p>
              <div class="text-warning small">Manager</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content user-info">
            <div class="avatar">
              <img src="../../assets/img/big.gif" alt="">
            </div>
            <div class="right-content">
              <h4 class="name">Betty Simmons</h4>
              <p><a href="">hello@ninjateam.org</a></p>
              <div class="text-warning small">Manager</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content user-info">
            <div class="avatar">
              <img src="../../assets/img/big.gif" alt="">
            </div>
            <div class="right-content">
              <h4 class="name">Betty Simmons</h4>
              <p><a href="">hello@ninjateam.org</a></p>
              <div class="text-warning small">Manager</div>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content user-info">
            <div class="avatar">
              <img src="../../assets/img/big.gif" alt="">
            </div>
            <div class="right-content">
              <h4 class="name">Betty Simmons</h4>
              <p><a href="">hello@ninjateam.org</a></p>
              <div class="text-warning small">Manager</div>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12"><div class="grid-content"></div></el-col>
        <el-col :span="12">
          <div class="grid-content">
            <el-table
              :data="tableData"
              stripe
              style="width: 100%">
              <el-table-column
                prop="Product"
                label="Product">
              </el-table-column>
              <el-table-column
                prop="Price"
                label="Price">
              </el-table-column>
              <el-table-column
                prop="Date"
                label="Date">
              </el-table-column>
              <el-table-column
                prop="State"
                label="State">
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: "home",
      data(){
        return{
          tableData:[
            {
              Product:'Amaza Themes',Price:'$71',Date:'Nov 12,2016',State:'Completed',Ico:'fa fa-plus-circle'
            },
            {
              Product: 'Amaza Themes', Price: '$71', Date: 'Nov 12,2016', State: 'Completed', Ico: 'fa fa-plus-circle'
            },
            {
              Product:'Amaza Themes',Price:'$71',Date:'Nov 12,2016',State:'Completed',Ico:'fa fa-plus-circle'
            },
            {
              Product:'Amaza Themes',Price:'$71',Date:'Nov 12,2016',State:'Completed',Ico:'fa fa-plus-circle'
            },
            {
              Product:'Amaza Themes',Price:'$71',Date:'Nov 12,2016',State:'Completed',Ico:'fa fa-plus-circle'
            },
            {
              Product:'Amaza Themes',Price:'$71',Date:'Nov 12,2016',State:'Completed',Ico:'fa fa-plus-circle'
            },
            {
              Product:'Amaza Themes',Price:'$71',Date:'Nov 12,2016',State:'Completed',Ico:'fa fa-plus-circle'
            },
            {
              Product:'Amaza Themes',Price:'$71',Date:'Nov 12,2016',State:'Completed',Ico:'fa fa-plus-circle'
            }
          ]
        }
      },
      methods:{
          drawLine(){
            let mychart1 =this.$echarts.init(document.getElementById('charts1'));
            let option1 = {
              title:{
                text:'Activity',
              },
              xAxis: {
                type: 'category',
                data: ['2008', '2009', '2010', '2011', '2012', '2013', '2014','2015','2016'],
                boundaryGap:false,
                axisTick:{
                  show:false
                },
                axisLine:{
                  lineStyle:{
                    color:'#ccc',
                    type:'dashed'
                  }
                },
                splitLine:{
                  show:true,
                  lineStyle:{
                    type:'dashed'
                  }
                }
              },
              yAxis: {
                type: 'value',
                axisTick:{
                  show:false
                },
                axisLine:{
                  lineStyle:{
                    color:'#ccc',
                    type:'dashed'
                  }
                },
                splitLine:{
                  show:true,
                  lineStyle:{
                    type:'dashed'
                  }
                },
                splitNumber:8
              },
              series: [
                {
                  data: [8, 5, 4, 6, 2, 3, 3, 4, 6],
                  type: 'line',
                  smooth: true,
                  symbol:'circle',
                  symbolSize:8,
                  itemStyle:{
                    normal:{
                      color:'#d70206',
                      lineStyle:{
                        color:'#d70206',
                        width:3
                      }
                    }
                  }
                },
                {
                  data: [7, 3, 5, 5, 3, 4, 4, 5, 5],
                  type: 'line',
                  smooth: true,
                  symbol:'circle',
                  symbolSize:8,
                  itemStyle:{
                    normal:{
                      color:'#f05b4f',
                      lineStyle:{
                        color:'#f05b4f',
                        width:3
                      }
                    }
                  }
                }

              ]
            };
            mychart1.setOption(option1)

            let mychart2 =this.$echarts.init(document.getElementById('charts2'));
            let option2 = {
              title:{
                text:'Statistics'
              },
              xAxis: {
                type: 'category',
                data: ['2010', '2011', '2012', '2013', '2014', '2015'],
                axisTick:{
                  show:false
                }
              },
              yAxis: {
                type: 'value',
                axisLine:{
                  show:false
                },
                axisTick:{
                  show:false
                },
                splitNumber:4,
                minInterval:25
              },
              series: [{
                data: [75, 44, 75, 38, 20, 90],
                type: 'bar',
                itemStyle:{
                  color:'#304ffe'
                }
              }]
            };
            mychart2.setOption(option2)

            let mychart3 =this.$echarts.init(document.getElementById('charts3'));
            let option3 = {
              title:{
                text:'Total Projects'
              },
              xAxis: {
                type: 'category',
                data: ['2008','2009','2010', '2011', '2012', '2013', '2014', '2015'],
                axisTick:{
                  show:false
                }
              },
              yAxis: {
                type: 'value',
                axisLine:{
                  show:false
                },
                axisTick:{
                  show:false
                },
                splitNumber:4,
                maxInterval:25,
                max:100
              },
              series: [
                {
                  data: [50, 28, 85, 50, 82, 48,78,100],
                  type: 'line',
                  itemStyle:{
                    color:'#304ffe'
                  },
                  symbol:'none',
                  smooth: true
                },
                {
                  data: [0, 74, 15, 51, 35, 87,50,70],
                  type: 'line',
                  itemStyle:{
                    color:'rgb(246, 14, 14)'
                  },
                  symbol:'none',
                  smooth: true
                }
              ]
            };
            mychart3.setOption(option3)

            let mychart4 =this.$echarts.init(document.getElementById('charts4'));
            let option4 = {
              title: {
                text: 'Daily Sales',
              },
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                bottom: 10,
                left: 'center',
                icon: "circle",
                itemWidth: 10,
                itemHeight: 10,
                data: ['Normal Sal…', 'In-Site Sales','Mail-Order…']
              },
              series : [
                {
                  type: 'pie',
                  radius: ['30%', '70%'],
                  hoverAnimation:false,
                  color:['#304ffe','#f60e0e','#ffa000'],
                  label:{
                    show:true,
                    position:'inside',
                    formatter:'{d}%'
                  },
                  itemStyle:{
                    borderColor:'#fff'
                  },
                  data:[
                    {value:'55.6', name: 'Normal Sal…'},
                    {value:'22.4', name: 'In-Site Sales'},
                    {value:'22.4', name: 'Mail-Order…'}
                  ]
                }
              ]
            };
            mychart4.setOption(option4)
          }
      },
      mounted(){
          this.drawLine()
      }

    }
</script>

<style lang="scss" scoped>
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
  #charts1{
    height: 320px;
  }
  #charts2,#charts3,#charts4{
    height: 250px;
  }

  .box-title{
    margin-bottom: 30px;
    font-size: 16px;
    line-height: 16px;
    font-weight: 900;
  }

  .widget-stat{
    padding-bottom: 10px;
    text-align: right;
    overflow: hidden;
    .percent{
      float: left;
      height: 22px;
      line-height: 22px;
      margin-top: 20px;
      padding: 0 10px 0 10px;
      font-size: 12px;
      color: #ffffff;
      border-radius: 10px;
      -webkit-border-radius: 10px;
      -moz-border-radius: 10px;
      i{
        font-size: 12px;
        line-height: 22px;
        margin-right: 4px;
      }
    }
    .right-content{
      float: right;
      .counter{
        padding-top: 10px;
        color: #434a54;
      }
      .text{
        color: #aab2bd;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-bottom: 10px;
      }
    }
  }
  .bg-warning{
    background-color: #ff8f00!important;;
  }
  .circle{
    float: left;
  }
  .text-warning {
    color: #fbbc05!important;
  }
  .small{
    font-size: 85%;
  }
  .user-info{
    overflow: hidden;
    .avatar{
      float: left;
      width: 78px;
      height: 78px;
      img{
        width: 78px;
        height: 78px;
        border: 3px solid #ffffff;
        border-radius: 50%;
        box-shadow: 0 0 3px 0px rgba(0, 0, 0, 0.25);
      }
    }
    .right-content{
      float: right;
      .name{
        margin: 0 0 5px 0;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;

      }
      p{
        font-size: 13px;
        line-height: 22px;
        margin-bottom: 5px;
        a{
          color: #2962ff;
          font-size: 13px;
        }
      }
    }
  }

</style>


