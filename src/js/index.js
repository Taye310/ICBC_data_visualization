var myChart1;
function setSummary() {
    myChart1 = echarts.init(document.getElementById('summaryPie1'));
    let angle = 0;//角度，用来做简单的动画效果的
    let value = 55.33;
    var option1 = {
        backgroundColor:"#061740",
        title: {
            text: '{a|'+ value +'}{c|%}',
            x: 'center',
            y: 'center',
            textStyle: {
                rich:{
                    a: {
                        fontSize: 48,
                        color: '#29EEF3'
                    },
                    
                    c: {
                        fontSize: 20,
                        color: '#ffffff',
                        // padding: [5,0]
                    }
                }
            }
        },
        legend: {
            type: "plain",
            orient: "vertical",
            right: 0,
            top: "10%",
            align: "auto",
            data: [{
                name: '涨价后没吃过',
                icon: "circle"
            }, {
                name: '天天吃',
                icon: "circle"
            }, {
                name: '三五天吃一次',
                icon: "circle"
            }, {
                name: '半个月吃一次',
                icon: "circle"
            }],
            textStyle: {
                color: "white",
                fontSize: 16,
                padding: [10, 1, 10, 0]
            },
            selectedMode:false
        },
        series: [ {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                            startAngle: (0+angle) * Math.PI / 180,
                            endAngle: (90+angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.6,
                            startAngle: (180+angle) * Math.PI / 180,
                            endAngle: (270+angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                            startAngle: (270+-angle) * Math.PI / 180,
                            endAngle: (40+-angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    return {
                        type: 'arc',
                        shape: {
                            cx: api.getWidth() / 2,
                            cy: api.getHeight() / 2,
                            r: Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65,
                            startAngle: (90+-angle) * Math.PI / 180,
                            endAngle: (220+-angle) * Math.PI / 180
                        },
                        style: {
                            stroke: "#0CD3DB",
                            fill: "transparent",
                            lineWidth: 1.5
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                    let point = getCirlPoint(x0, y0, r, (90+-angle))
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4
                        },
                        style: {
                            stroke: "#0CD3DB",//粉
                            fill: "#0CD3DB"
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: "ring5",  //绿点
                type: 'custom',
                coordinateSystem: "none",
                renderItem: function(params, api) {
                    let x0 = api.getWidth() / 2;
                    let y0 = api.getHeight() / 2;
                    let r = Math.min(api.getWidth(), api.getHeight()) / 2 * 0.65;
                    let point = getCirlPoint(x0, y0, r, (270+-angle))
                    return {
                        type: 'circle',
                        shape: {
                            cx: point.x,
                            cy: point.y,
                            r: 4
                        },
                        style: {
                            stroke: "#0CD3DB",      //绿
                            fill: "#0CD3DB"
                        },
                        silent: true
                    };
                },
                data: [0]
            }, {
                name: '吃猪肉频率',
                type: 'pie',
                radius: ['58%', '45%'],
                silent: true,
                clockwise: true,
                startAngle: 90,
                z: 0,
                zlevel: 0,
                label: {
                    normal: {
                        position: "center",

                    }
                },
                data: [{
                        value: value,
                        name: "",
                        itemStyle: {
                            normal: {
                                color: { // 完成的圆环的颜色
                                    colorStops: [{
                                        offset: 0,
                                        color: '#4FADFD' // 0% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#28E8FA' // 100% 处的颜色
                                    }]
                                },
                            }
                        }
                    },
                    {
                        value: 100-value,
                        name: "",
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: "#173164"
                            }
                        }
                    }
                ]
            },
            
            {
                name: "",
                type: "gauge",
                radius: "58%",
                center: ['50%', '50%'],
                startAngle: 0,
                endAngle: 359.9,
                splitNumber: 8,
                hoverAnimation: true,
                axisTick: {
                    show: false
                },
                splitLine: {
                    length: 60,
                    lineStyle: {
                        width: 5,
                        color: "#061740"
                    }
                },
                axisLabel: {
                    show: false
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        opacity: 0
                    }
                },
                detail: {
                    show: false
                },
                data: [{
                    value: 0,
                    name: ""
                }]
            },
            
        ]
    };

    //获取圆上面某点的坐标(x0,y0表示坐标，r半径，angle角度)
    function getCirlPoint(x0, y0, r, angle) {
        let x1 = x0 + r * Math.cos(angle * Math.PI / 180)
        let y1 = y0 + r * Math.sin(angle * Math.PI / 180)
        return {
            x: x1,
            y: y1
        }
    }

    function draw(){
        angle = angle+3
        myChart.setOption(option, true)
    //window.requestAnimationFrame(draw);
    }

    setInterval(function() {
        //用setInterval做动画感觉有问题
        draw()
    }, 100);

    myChart1.setOption(option1);
    window.addEventListener('resize', function() {
        myChart1.resize();
    });
}

$('.2020buttom').on('click',function(){
    $('.filterbg').show();
    $('.popup').show();
    $('.popup').width('3px');
    $('.popup').animate({height: '76%'},400,function(){
        $('.popup').animate({width: '82%'},400);
    });
    setTimeout(summaryShow,800);
});
$('.popupClose').on('click',function(){
    $('.popupClose').css('display','none');
    $('.summary').hide();
    myChart1.clear();
    $('.popup').animate({width: '3px'},400,function(){
        $('.popup').animate({height: 0},400);
    });
    setTimeout(summaryHide,800);
});
function summaryShow(){
    $('.popupClose').css('display','block');
    $('.summary').show();
    setSummary();
};
function summaryHide(){
    $('.filterbg').hide();
    $('.popup').hide();
    $('.popup').width(0);
};

//柱状图模块1
(function(){
    var myChart = echarts.init(document.getElementById('chart1'));
    var option = {
        color: ['#00c1de'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: '10px',
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                axisTick: {
                    alignWithLabel: true
                },
                axisLabel: {
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "13"
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "12"
                },
                axisLine: {
                    lineStyle: {
                        color: "rbga(255,255,255,0.1)",
                        width: 2
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '35%',
                data: [10, 52, 200, 334, 390, 330, 220],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
//柱状图模块2
// (function () {
//     var myColor = ['pink','blue','yellow','green','red'];
//     var myChart = echarts.init(document.querySelector(".bar2 .chart"));
//     var option = {
//         grid: {
//             top: '1%',
//             left: '1%',
//             bottom: '1%',
//             containLabel: true
//         },
//         xAxis: {
//             show: false
//         },
//         yAxis: [
//             {
//                 type: 'category',
//                 data: ['印尼', '美国', '印度', '韩国', '中国'],
//                 axisLine: {
//                     show: false
//                 },
//                 axisTick: {
//                     show: false
//                 },
//                 axisLabel: {
//                     color: 'white'
//                 }
//             },
//             {
//                 type: 'category',
//                 data: [702,350,610,793,664],
//                 axisLine: {
//                     show: false
//                 },
//                 axisTick: {
//                     show: false
//                 },
//                 axisLabel: {
//                     textStyle: {
//                         fontSize: 12,
//                         color: "#fff"
//                     }
//                 }
//             }
//         ],
//         series: [
//             {
//                 yAxisIndex: 0,
//                 name: '条',
//                 type: 'bar',
//                 data: [70,34,60,78,69],
//                 itemStyle: {
//                     barBorderRadius: 5,
//                     color: function(params){
//                         return myColor[params.dataIndex];
//                     }
//                 },
//                 barCategoryGap: 50,
//                 barWidth: 10,
//                 label: {
//                     show: true,
//                     position: 'inside',
//                     formatter: "{c}%"
//                 }
//             },
//             {
//                 yAxisIndex: 1,
//                 name: '框',
//                 type: 'bar',
//                 data: [100,100,100,100,100],
//                 itemStyle: {
//                     color: 'none',
//                     borderColor: '#00c1de',
//                     barBorderRadius: 15
//                 },
//                 barCategoryGap: 50,
//                 barWidth: 15,
//             }
//         ]
//     };
//     myChart.setOption(option);
//     window.addEventListener('resize', function() {
//         myChart.resize();
//     });
// })();

// (function() {
//     var yearData = [
//         {
//             year: '2020',
//             data: [
//                 [120, 332, 101, 134, 90, 230, 210],
//                 [220, 582, 191, 234, 490, 330, 310]
//             ]
//         },
//         {
//             year: '2021',
//             data: [
//                 [120, 332, 201, 134, 90, 230, 210],
//                 [210, 182, 191, 34, 290, 330, 310]
//             ]
//         }
//     ];
//     var myChart = echarts.init(document.querySelector(".line1 .chart"));
//     var option = option = {
//         color: ['#00f2f1','#ed3f35'],
//         tooltip: {
//             trigger: 'axis',
//         },
//         legend: {
//             data: ['邮件营销', '联盟广告'],
//             right: "10%",
//             textStyle: {
//                 color: '#4c9bfd'
//             }
//         },
//         grid: {
//             top: '15%',
//             bottom: '1%',
//             left: '1%',
//             right: '2%',
//             containLabel: true,
//             show: true,
//             borderColor: '#012f4a'
//         },
//         xAxis: {
//             type: 'category',
//             boundaryGap: false,
//             data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
//             axisTick: {
//                 show: false
//             },
//             axisLabel: {
//                 color: '#4c9bfd'
//             },
//             axisLine: {
//                 show: false
//             }
//         },
//         yAxis: {
//             type: 'value',
//             axisTick: {
//                 show: false
//             },
//             axisLabel: {
//                 color: '#4c9bfd'
//             },
//             axisLine: {
//                 show: false
//             },
//             splitLine: {
//                 lineStyle: {
//                     color: '#012f4as'
//                 }
//             }
//         },
//         series: [
//             {
//                 smooth: true,
//                 name: '邮件营销',
//                 type: 'line',
//                 data: [120, 332, 201, 134, 90, 230, 210]
//             },
//             {
//                 smooth: true,
//                 name: '联盟广告',
//                 type: 'line',
//                 data: [210, 182, 191, 34, 290, 330, 310]
//             }
//         ]
//     };
//     myChart.setOption(option);
//     window.addEventListener('resize', function() {
//         myChart.resize();
//     });
//     // 点击效果切换
//     $(".line1 h2").on("click", "a", function() {
//         var obj = yearData[$(this).index()];
//         option.series[0].data = obj.data[0];
//         option.series[1].data = obj.data[1];
//         myChart.setOption(option);
//     });
// })();
// 折线图2模块
// (function() {
//     var myChart = echarts.init(document.querySelector(".line2 .chart"));
//     var option = {
//         tooltip: {
//             trigger: 'axis',
//         },
//         legend: {
//             top: "1%",
//             data: ['华氏度', '摄氏度'],
//             textStyle: {
//                 color: "rgba(255,255,255,.5)",
//                 fontSize: "12"
//             }
//         },
//         grid: {
//             left: '10',
//             top: '30',
//             right: '10',
//             bottom: '10',
//             containLabel: true
//         },
//         xAxis: [
//             {
//                 type: 'category',
//                 boundaryGap: false,
//                 data: ["01","02","03","04","05","06","07","08","09","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"],
//                 axisLabel: {
//                     textStyle: {
//                         color: "rgba(255,255,255,.6)",
//                         fontSize: 12
//                     }
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         color: "rgba(255,255,255,.2)"
//                     }
//                 }
//             }
//         ],
//         yAxis: [
//             {
//                 type: 'value',
//                 axisTick: {
//                     show: false
//                 },
//                 axisLine: {
//                     lineStyle: {
//                         color: "rgba(255,255,255,.6)",
//                         fontSize: 12
//                     }
//                 },
//                 splitLine: {
//                     lineStyle: {
//                         color: 'rgba(255,255,255,.1)'
//                     }
//                 }
//             }
//         ],
//         series: [
//             {
//                 smooth: true,
//                 name: '华氏度',
//                 type: 'line',
//                 lineStyle: {
//                     color: '#0184d5',
//                     width: '3',
//                     type: 'dotted'
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(
//                           0,
//                           0,
//                           0,
//                           1,
//                           [
//                             {
//                               offset: 0,
//                               color: "rgba(1, 132, 213, 0.4)"
//                             },
//                             {
//                               offset: 0.8,
//                               color: "rgba(1, 132, 213, 0.1)"
//                             }
//                           ],
//                           false
//                         ),
//                         shadowColor: "rgba(0, 0, 0, 0.1)"
//                       }
//                 },
//                 symbol: 'circle',
//                 symbolSize: 5,
//                 showSymbol: false,
//                 itemStyle: {
//                     color: '#0184d5',
//                     borderColor: 'rgba(255,255,255,.1)',
//                     borderWidth: 10
//                 },
//                 data: [30,40,30,40,30,40,30,60,20,40,20,40,30,40,30,40,30,40,30,60,20,40,20,40,30,60,20,40,20,40]
//             },
//             {
//                 smooth: true,
//                 name: '摄氏度',
//                 type: 'line',
//                 symbol: "circle",
//                 symbolSize: 5,
//                 showSymbol: false,
//                 lineStyle: {
//                     normal: {
//                       color: "#00d887",
//                       width: 2
//                     }
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(
//                           0,
//                           0,
//                           0,
//                           1,
//                           [
//                             {
//                               offset: 0,
//                               color: "rgba(0, 216, 135, 0.4)"
//                             },
//                             {
//                               offset: 0.8,
//                               color: "rgba(0, 216, 135, 0.1)"
//                             }
//                           ],
//                           false
//                         ),
//                         shadowColor: "rgba(0, 0, 0, 0.1)"
//                       }
//                 },
//                 itemStyle: {
//                     normal: {
//                       color: "#00d887",
//                       borderColor: "rgba(221, 220, 107, .1)",
//                       borderWidth: 12
//                     }
//                 },
//                 data: [50,30,50,60,10,50,30,50,60,40,60,40,80,30,50,60,10,50,30,70,20,50,10,40,50,30,70,20,50,10,40]
//             }
//         ]
//     };
//     myChart.setOption(option);
//     window.addEventListener('resize', function() {
//         myChart.resize();
//     });
// })();
// 饼图1模块
// (function() {
//     var myChart = echarts.init(document.querySelector(".pie1 .chart"));
//     var option = {
//         tooltip: {
//             trigger: 'item',
//             formatter: '{a} <br/>{b}: {c} ({d}%)'
//         },
//         legend: {
//             top: '90%',
//             itemWidth: 10,
//             itemHeight: 10,
//             orient: 'vertical',
//             left: 39,
//             textStyle: {
//                 color: 'rgba(255,255,255,.5)',
//                 fontSize: 12
//             },
//             data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
//         },
//         series: [
//             {
//                 name: '访问来源',
//                 type: 'pie',
//                 center: ['50%', '42%'],
//                 radius: ['50%', '83%'],
//                 avoidLabelOverlap: false,
//                 label: {
//                     show: false,
//                     position: 'center'
//                 },
//                 labelLine: {
//                     show: false
//                 },
//                 data: [
//                     {value: 335, name: '直接访问'},
//                     {value: 310, name: '邮件营销'},
//                     {value: 234, name: '联盟广告'},
//                     {value: 135, name: '视频广告'},
//                     {value: 1548, name: '搜索引擎'}
//                 ]
//             }
//         ]
//     };
//     myChart.setOption(option);
//     window.addEventListener('resize', function() {
//         myChart.resize();
//     });
// })();
// (function() {
//     var myChart = echarts.init(document.querySelector(".pie2 .chart"));
//     var option = {
//         tooltip: {
//             trigger: 'item',
//             formatter: '{a} <br/>{b} : {c} ({d}%)'
//         },
//         toolbox: {
//             show: true,
//             feature: {
//                 mark: {show: true},
//                 dataView: {show: true, readOnly: false},
//                 magicType: {
//                     show: true,
//                     type: ['pie', 'funnel']
//                 },
//                 restore: {show: true},
//                 saveAsImage: {show: true}
//             }
//         },
//         series: [
//             {
//                 name: '面积模式',
//                 type: 'pie',
//                 radius: ['20%', '88%'],
//                 center: ['50%', '50%'],
//                 roseType: 'radius',
//                 labelLine: {
//                     length: 10,
//                     length2: 5,
//                 },
//                 data: [
//                     {value: 10, name: 'rose1'},
//                     {value: 15, name: 'rose2'},
//                     {value: 15, name: 'rose3'},
//                     {value: 25, name: 'rose4'},
//                     {value: 20, name: 'rose5'},
//                     {value: 25, name: 'rose6'},
//                     {value: 30, name: 'rose7'},
//                     {value: 40, name: 'rose8'}
//                 ]
//             }
//         ]
//     };
//     myChart.setOption(option);
//     window.addEventListener('resize', function() {
//         myChart.resize();
//     });
// })();