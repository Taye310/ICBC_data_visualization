// 人均服务客户数&准风险事件数
(function(){
    var myChart = echarts.init(document.getElementById("chart11"));
    var XData = ["15-16","16-17","17-18","18-19","19-20","20-21","21-22","23-24","24-25","25-26","26-27","27-28"];
    var YData = ["0.8302","0.7422","0.8681","0.8965","1.9464","2.0714","2.2727","3.5172","3.8125","3.6667","5.4286","6.1429"];
    var option = {
        color: ['#69f1ff'],
        grid: {
            left: 40,
            top: 30,
            right: 13,
            bottom: 20
        },
        legend: {
            show: false
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            name: "人均服务客户数",
            type: 'category',
            data: XData,
            axisLine: {
                show: false,
                lineStyle: {
                    color: 'rgba(255,255,255,0.7)'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.7)'
                }
            }
        },
        yAxis: {
            name: "准风险事件数",
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#2d3d53']
                }
            },
            axisLine: {
                show: false,
                lineStyle: {
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.7)'
                }
            },
            axisLabel: {
                textStyle: {
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.7)'
                }
            }
        },
        series: [{
            name: '准风险事件数',
            data: YData,
            type: 'line',
            symbol: 'emptycircle',
            symbolSize: 12,
            areaStyle: {
                normal: {
                    type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(27, 55, 75, 0.2)'
                    }, {
                        offset: 1,
                        color: 'rgba(27, 55, 75, 0.2)'
                    }], false)
                }
            },
        }, ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
// chart12
(function(){
    var myChart = echarts.init(document.getElementById("chart12"));
    var option = {
        title: {
            show: false
        },
        tooltip: {
            trigger: "axis",
        },
        legend: {
            show: false
        },
        grid: {
            left: "1%",
            right: "1%",
            bottom: "1%",
            containLabel: true
        },
        xAxis: [{
            type: "category",
            data: ["和平街支行","东风支行","永泰支行","永丰支行","航天支行","沙河支行","曙光支行","团结湖支行","海淀支行","朝阳支行","西直门支行","东城支行"],
            axisPointer: {
                type: "shadow"
            },
            axisLabel: {
                fontSize: 10,
                textStyle: {
                    color: 'rgba(255,255,255,0.7)'
                },
                // margin: 18
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.7)'
                }
            },
            axisTick: {
                show: false
            }
        }],
        dataZoom: [
            //滑动条
            {
                show: false,
                xAxisIndex: 0, //这里是从X轴的0刻度开始
                type: "slider", // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                startValue: 0, // 从头开始。
                endValue: 13, // 一次性展示8个
                height: 6,
                bottom: 18,
                borderColor: "rgba(43,48,67,.7)",
                fillerColor: "#19D4AE",
                showDataShadow: false, //是否显示数据阴影
                showDetail: false, 
                backgroundColor: "#f4f6f8",
                filterMode: "filter"
            }
        ],
        yAxis: [
            {
                name: "指数",
                type: "value",
                axisLabel: {
                    fontSize: 14,
                    textStyle: {
                        color: 'rgba(255,255,255,0.7)'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.7)'
                    }
                },
                axisTick: {
                    show: false
                }
            },
            {
                name: "忍耐度",
                type: "value",
                axisLabel: {
                    fontSize: 14,
                    textStyle: {
                        color: 'rgba(255,255,255,0.7)'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.7)'
                    }
                },
                axisTick: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: "自助机具数量",
                type: "bar",
                barMaxWidth: 20,
                itemStyle: {
                    normal: {
                        color: "#24cfa4",
                        barBorderRadius: 4
                    }
                },
                data: [2,4,5,6,5,4,6,2,6,7,8,10]
            },
            {
                name: "上岗柜员数",
                type: "bar",
                barMaxWidth: 20,
                itemStyle: {
                    normal: {
                        color: "#24b5cf",
                        barBorderRadius: 4
                    }
                },
                data: [4,3,5,6,8,7,6,7,8,9,11,12]
            },
            {
                name: "人均服务客户数",
                type: "bar",
                barMaxWidth: 20,
                itemStyle: {
                    normal: {
                        color: "#2499cf",
                        barBorderRadius: 4
                    }
                },
                data: [15,12,19,16,17,22,21,25,21,16,13,12]
            },
            {
                name: "个人客户平均等待时间",
                type: "bar",
                barMaxWidth: 20,
                itemStyle: {
                    normal: {
                        color: "#15a7eb",
                        barBorderRadius: 4
                    }
                },
                data: [3,9,11,12,15,17,20,16,12,13,14,12]
            },
            {
                name: "自助机具交易笔数",
                type: "bar",
                barMaxWidth: 20,
                itemStyle: {
                    normal: {
                        color: "#116c96",
                        barBorderRadius: 4
                    }
                },
                data: [8,14,18,22,21,25,27,27,28,33,40,41]
            },
            {
                name: "个人客户平均等待人数",
                type: "bar",
                barMaxWidth: 20,
                itemStyle: {
                    normal: {
                        color: "#346bd3",
                        barBorderRadius: 4
                    }
                },
                data: [1,2,3,4,3,6,7,8,7,4,4,3]
            },
            {
                name: "客户忍耐度",
                type: "line",
                smooth: false,
                yAxisIndex: 1,
                itemStyle: {
                    normal: {
                        color: "#e0ab48"
                    }
                },
                data: [1,1,2,4,5,5,4,3,2,2,2,1]
            }
        ]
    };
    setInterval(function() {
        if (option.dataZoom[0].endValue == 12) {
            option.dataZoom[0].endValue = 8;
            option.dataZoom[0].startValue = 0;
        } else {
            option.dataZoom[0].endValue = option.dataZoom[0].endValue + 1;
            option.dataZoom[0].startValue = option.dataZoom[0].startValue + 1;
        }
        myChart.setOption(option);
    }, 2000);
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
// chart21
(function(){
    var myChart = echarts.init(document.getElementById('chart21'));
    var option = null;
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
// chart22
(function(){
    var myChart = echarts.init(document.getElementById('chart22'));
    var option = null;
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();