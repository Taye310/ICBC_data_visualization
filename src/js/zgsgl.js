(function(){
  var myChart = echarts.init(document.querySelector(".line1 .chart"));
  var times = ['2016','2017','2018','2019'];
  var jdData =[[ '海淀支行','朝阳支行','顺义支行','通州支行','中关村支行','五道口支行','丰台支行','石景山支行','昌平支行','西单支行'],
               [ '海淀支行','朝阳支行','顺义支行','通州支行','中关村支行','五道口支行','丰台支行','石景山支行','昌平支行','西单支行'],
               [ '海淀支行','朝阳支行','顺义支行','通州支行','中关村支行','五道口支行','丰台支行','石景山支行','昌平支行','西单支行'],
               [ '海淀支行','朝阳支行','顺义支行','通州支行','中关村支行','五道口支行','丰台支行','石景山支行','昌平支行','西单支行']]
  var data =[[36,24,34,67,12,41,55,23,42,66],
             [66,33,45,78,45,42,58,42,57,80],
             [73,85,54,83,67,57,68,82,78,93],
             [97,95,88,86,77,87,98,87,88,94]];
  var option = {
    baseOption: {
      timeline: {
        show: false,
        data: times,
        axisType: 'category',
        autoPlay: true,
        playInterval: 3000,
        left: '6%',
        right: '6%',
        bottom: '1%',
        width: '80%',
        //  height: null,
        label: {
            normal: {
                textStyle: {
                    color: '#ff8800',
                }
            },
            emphasis: {
                textStyle: {
                    color: '#fff'
                }
            }
        },
        symbolSize: 10,
        lineStyle: {
            color: '#555'
        },
        checkpointStyle: {
            borderColor: '#777',
            borderWidth: 2
        },
        controlStyle: {
            showNextBtn: true,
            showPrevBtn: true,
            normal: {
                color: '#ff8800',
                borderColor: '#ff8800'
            },
            emphasis: {
                color: '#aaa',
                borderColor: '#aaa'
            }
        },
      },
      title: {
          show: false,
          text: '1',
          right: '2%',
          bottom: '8%',
          textStyle: {
              fontSize: 50,
              color: '#666'
          }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      calculable: true,
      grid: {
          left: '2%',
          right: '6%',
          bottom: '0%',
          top:'2%',
          containLabel: true
      },
      label:{
          normal:{
              textStyle:{
                  color:'#fff'
              }
          }
      },
      yAxis: [{
          offset: '6',
          'type': 'category',
          data: '',
          nameTextStyle:{
              color:'#fff'
          },
          axisLabel:{
              textStyle:{
                  fontSize:15,
                  color:'rgba(255,255,255,0.9)',
              },
              interval: 0
          },
          axisLine:{
              lineStyle:{
                  color:'#333'
              },
          },
          splitLine:{
              show:false,
              lineStyle:{
                  color:'#333'
              }
          },
      }],
      xAxis: [{
          show: false,
          'type': 'value',
          'name': '',
          splitNumber:8,
          nameTextStyle:{
              color:'#333'
          },
          axisLine:{
              lineStyle:{
                  color:'#333'
              }
          },
          axisLabel: {
              formatter: '{value} '
          },
          splitLine:{
              show:true,
              lineStyle:{
                  color:'#ccc'
              }
          },
      }],
      series: [{
          'name': '',
          'type': 'bar',
          markLine : {
              label:{
                  normal:{
                      show: true
                  }
              },
              lineStyle:{
                  normal:{
                      color:'red',
                      width:3
                  }
              },
          },
          barWidth:'50%',
          label: {
              normal: {
                  show: true,
                  position: 'right',
                  formatter: '{c}%'
              }
          },
          itemStyle: {
            
            normal: {
              barBorderRadius: 5,
              color: function(params) {
                  // build a color map as your need.
                  var colorList = [
                      '#bcd3bb', '#e88f70', '#9dc5c8', '#e1e8c8',
                      '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8',
                      '#bda29a', '#376956', '#c3bed4', '#495a80',
                      '#9966cc', '#bdb76a', '#eee8ab', '#a35015',
                      '#04dd98', '#d9b3e6', '#b6c3fc','#315dbc',
                  ];
                  return colorList[params.dataIndex]
              },
            }
          },
        }],
        animationDurationUpdate: 2000,
        animationEasingUpdate: 'quinticInOut'
    },
    options: []
    };
    for (var n = 0; n < times.length; n++) {
        var res = [];
        //alert(jdData.length);
        for(j=0;j<data[n].length;j++){
            res.push({
            name: jdData[n][j],
            value: data[n][j]
        });
    }
    res.sort(function(a, b) {
            return b.value - a.value;
        }).slice(0, 6);
    
    res.sort(function(a, b) {
        return a.value - b.value;
    });
    var res1=[];
    var res2=[];
          //console.log(res);
          for(t=0;t<res.length;t++){
              res1[t]=res[t].name;
                res2[t]=res[t].value;
          }
          console.log(res1);
          console.log("----------------");
          console.log(jdData[n]);
          option.options.push({
              title: {
                  text: times[n] +'年'
              },
              yAxis:{
                  data:res1,
              },
              series: [{
                  data: res2
              }]
            });
          }  
    myChart.setOption(option);
    window.addEventListener('resize', function() {
      myChart.resize();
    });
})()