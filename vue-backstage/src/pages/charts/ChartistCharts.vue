<template>
    <div>
      <el-row :gutter="10">
        <el-col :span="12">
          <div class="grid-content" id="chart1">

          </div>
        </el-col>
        <el-col :span="12"><div class="grid-content" id="chart2"></div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12"><div class="grid-content" id="chart3"></div></el-col>
        <el-col :span="12"><div class="grid-content" id="chart4"></div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12"><div class="grid-content" id="chart5"></div></el-col>
        <el-col :span="12"><div class="grid-content" id="chart6"></div></el-col>
      </el-row>
      <el-row :gutter="10">
        <el-col :span="12"><div class="grid-content" id="chart7"></div></el-col>
        <el-col :span="12"><div class="grid-content" id="chart8"></div></el-col>
      </el-row>


    </div>
</template>

<script>
    export default {
        name: "ChartistCharts",
        methods:{
          drawLine(){
            let mychart1 =this.$echarts.init(document.getElementById('chart1'));
            let option1 = {
              title:{
                text:'Advanced Smil Animations',
              },
              xAxis: {
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7','8','9',,'10','11','12'],
                boundaryGap:false,
                splitNumber:12,
                minInterval:1,
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
                splitNumber:5,
                minInterval:2.5
              },
              series: [
                {
                  data: [11.5, 10, 10.6, 7.9, 7.2, 6.6, 6, 5.6, 5,4.7,4,3.5,2],
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
                },
                {
                  data:[6.8, 4.6, 5.0, 8, 6, 3.2, 2.6, 5.2, 8,4.1,2.1,3.9,7],
                  type: 'line',
                  smooth: true,
                  symbol:'circle',
                  symbolSize:8,
                  itemStyle:{
                    normal:{
                      color:'#f4c63d',
                      lineStyle:{
                        color:'#f4c63d',
                        width:3
                      }
                    }
                  }
                },
                {
                  data:[6, 4, 5.7, 2, 1, 5, 3.1, 1, 2,2.4,2.9,7,2],
                  type: 'line',
                  smooth: true,
                  symbol:'circle',
                  symbolSize:8,
                  itemStyle:{
                    normal:{
                      color:'#d17905',
                      lineStyle:{
                        color:'#d17905',
                        width:3
                      }
                    }
                  }
                },
                {
                  data:[2, 4, 1, 1.2, 2.4, 5.2, 1.6, 3.2, 3,4.9,7.1,3.1,1],
                  type: 'line',
                  smooth: true,
                  symbol:'circle',
                  symbolSize:8,
                  itemStyle:{
                    normal:{
                      color:'#453d3f',
                      lineStyle:{
                        color:'#453d3f',
                        width:3
                      }
                    }
                  }
                }

              ]
            };
            mychart1.setOption(option1)

            let mychart2 =this.$echarts.init(document.getElementById('chart2'));
            let option2 = {
              title:{
                text:'Svg Path Animations',
              },
              xAxis: {
                type: 'category',
                data: ['Mon','Tue','Wen','Ths','Fri','Sat'],
                boundaryGap:false,
                splitNumber:12,
                minInterval:1,
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
                splitNumber:8,
                minInterval:1
              },
              series: [
                {
                  data: [1,5,2,5,4,3],
                  type: 'line',
                  smooth: true,
                  symbol:'none',
                  symbolSize:8,
                  areaStyle: {
                    color:'#fcabab'
                  },
                  itemStyle:{
                    normal:{
                      color:'#f05b4f',
                      lineStyle:{
                        color:'#f05b4f',
                        width:3
                      }
                    }
                  }
                },
                {
                  data:[2,3.5,4,8,1,2],
                  type: 'line',
                  smooth: true,
                  symbol:'none',
                  symbolSize:8,
                  areaStyle: {
                    color:'#f78e8e'
                  },
                  itemStyle:{
                    normal:{
                      color:'#d17905',
                      lineStyle:{
                        color:'#d17905',
                        width:3
                      }
                    }
                  }

                },
                {
                  data:[5,4,3,2,1,1.5],
                  type: 'line',
                  symbol:'none',
                  symbolSize:8,
                  areaStyle: {
                    color:'#fad3d3'
                  },
                  itemStyle:{
                    normal:{
                      color:'#f4c63d',
                      lineStyle:{
                        color:'#f4c63d',
                        width:3
                      }
                    }
                  }

                }
              ]
            };
            mychart2.setOption(option2)

            let mychart3 =this.$echarts.init(document.getElementById('chart3'));
            let option3 = {
              title:{
                text:'Svg Path Animations',
              },
              xAxis: {
                type: 'category',
                data: ['1','2','3','4','5'],
                boundaryGap:false,
                splitNumber:12,
                minInterval:1,
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
                splitNumber:8,
                minInterval:1
              },
              series: [
                {
                  data: [1,5,3,2.8,4],
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
                },
                {
                  data:[2,3.5,2.2,3,1],
                  type: 'line',
                  smooth: true,
                  symbol:'circle',
                  symbolSize:8,
                  itemStyle:{
                    normal:{
                      color:'#d17905',
                      lineStyle:{
                        color:'#d17905',
                        width:3
                      }
                    }
                  }

                },
                {
                  data:[4.2,4,2,1,4],
                  type: 'line',
                  symbol:'circle',
                  smooth: true,
                  symbolSize:8,
                  itemStyle:{
                    normal:{
                      color:'#f4c63d',
                      lineStyle:{
                        color:'#f4c63d',
                        width:3
                      }
                    }
                  }

                }
              ]
            };
            mychart3.setOption(option3)

            let mychart4 =this.$echarts.init(document.getElementById('chart4'));
            let option4 = {
              title:{
                text:'Line Scatter Diagram',
              },
              xAxis: {
                type: 'category',
                data: ['w1','w2','w3','w4','w5','w1','w2','w3','w4','w5','w1','w2','w3','w4','w5'],
                boundaryGap:false,
                splitNumber:12,
                minInterval:1,
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
                splitNumber:8,
                minInterval:1
              },
              series: [
                {
                  data: [11,52,23,28,42,12,13,13,13,43,5,10,78,94,69,],
                  type: 'scatter',
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
                },
                {
                  data:[11,50,79,92,49,82,73,59,84,60,48,96,20,89,20,],
                  type: 'scatter',
                  smooth: true,
                  symbol:'circle',
                  symbolSize:8,
                  itemStyle:{
                    normal:{
                      color:'#d17905',
                      lineStyle:{
                        color:'#d17905',
                        width:3
                      }
                    }
                  }

                },
                {
                  data:[4.2,4,2,1,4],
                  type: 'scatter',
                  symbol:'circle',
                  smooth: true,
                  symbolSize:8,
                  itemStyle:{
                    normal:{
                      color:'#f4c63d',
                      lineStyle:{
                        color:'#f4c63d',
                        width:3
                      }
                    }
                  }

                }
              ]
            };
            mychart4.setOption(option4)

            let mychart5 =this.$echarts.init(document.getElementById('chart5'));
            let option5 = {
              title:{
                text:'Advanced Smil Animations',
              },
              xAxis: {
                type: 'category',
                data: ['1', '2', '3', '4', '5', '6', '7','8'],
                boundaryGap:false,
                splitNumber:12,
                minInterval:1,
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
                splitNumber:9,
                minInterval:1
              },
              series: [
                {
                  data:[5,9,7,8,5,3,5,4],
                  type: 'line',
                  smooth: true,
                  symbol:'circle',
                  symbolSize:8,
                  areaStyle:{
                    color:'#fad3d3'
                  },
                  itemStyle:{
                    normal:{
                      color:'#d70206',
                      lineStyle:{
                        color:'#d70206',
                        width:3
                      }
                    }
                  }
                }

              ]
            };
            mychart5.setOption(option5)

            let mychart6 =this.$echarts.init(document.getElementById('chart6'));
            let option6 = {
              tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },

              grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
              },
              xAxis : [
                {
                  type : 'category',
                  data : ['Quarter 1','Quarter 2','Quarter 3','Quarter 4'],
                  splitLine:{
                    show:true,
                    lineStyle:{
                      type:'dashed'
                    }
                  },
                  axisLine:{
                    lineStyle:{
                      type:'dashed',
                      color:'#ccc'
                    }
                  },
                  axisTick:{
                    show:false
                  }
                }
              ],
              yAxis : [
                {
                  type : 'value' ,
                  splitLine:{
                    show:true,
                    lineStyle:{
                      type:'dashed'
                    }
                  },
                  axisLine:{
                    lineStyle:{
                      type:'dashed',
                      color:'#ccc'
                    }
                  },
                  axisTick:{
                    show:false
                  }


                }
              ],
              series : [
                {
                  name:'直接访问',
                  type:'bar',
                  data:[5, 4, 3, 7],
                  color:['#d70206']
                },
                {
                  name:'邮件营销',
                  type:'bar',
                  data:[3, 2, 9, 5],
                  color:['#f05b4f']
                },
                {
                  name:'联盟广告',
                  type:'bar',
                  stack: '广告',
                  data:[1, 5, 8, 4],
                  color:['#f4c63d']
                },
                {
                  name:'视频广告',
                  type:'bar',
                  data:[2, 3, 4, 6],
                  color:['#d17905']
                },
                {
                  name:'搜索引擎',
                  type:'bar',
                  data:[4, 1, 2, 1],
                  color:['#453d3f'],

                }

              ]
            };

            mychart6.setOption(option6)

            let mychart7 =this.$echarts.init(document.getElementById('chart7'));
            let option7 = {
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
                data: ['Normal Sal…', 'In-Site Sales','Mail-Order…','Maill-Order…']
              },
              series : [
                {
                  type: 'pie',
                  radius: ['30%', '70%'],
                  hoverAnimation:false,
                  color:['#f05b4f','#f4c63d','#d17905','#d70206'],
                  label:{
                    show:true,
                    position:'inside',
                    formatter:'{d}%'
                  },
                  itemStyle:{
                    borderColor:'#fff'
                  },
                  data:[
                    {value:'10', name: 'Normal Sal…'},
                    {value:'30', name: 'In-Site Sales'},
                    {value:'40', name: 'Mail-Order…'},
                    {value:'20', name: 'Maill-Order…'}
                  ]
                }
              ]
            };


            mychart7.setOption(option7)

            let mychart8 =this.$echarts.init(document.getElementById('chart8'));
            let option8 = {
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
                data: ['Normal Sal…', 'In-Site Sales','Mail-Order…','Maill-Order…']
              },
              series : [
                {
                  type: 'pie',
                  hoverAnimation:false,
                  color:['#d70206','#f4c63d','#f05b4f',],
                  label:{
                    show:true,
                    position:'inside',
                    formatter:'{d}%'
                  },
                  itemStyle:{
                    borderColor:'#fff'
                  },
                  data:[
                    {value:'42', name: 'Normal Sal…'},
                    {value:'25', name: 'In-Site Sales'},
                    {value:'33', name: 'Mail-Order…'}
                  ]
                }
              ]
            };


            mychart8.setOption(option8)
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
    height: 400px;
    border-radius: 4px;

  }
</style>
