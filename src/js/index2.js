// 人均服务客户数&准风险事件数
(function(){
    var myChart = echarts.init(document.getElementById("chart11"));
    var XData = ["15-16","16-17","17-18","18-19","19-20","20-21","21-22","23-24","24-25","25-26","26-27","27-28"];
    var YData = ["0.8302","0.7422","0.8681","0.8965","1.9464","2.0714","2.2727","3.5172","3.8125","3.6667","5.4286","6.1429"];
    var option = {
        backgroundColor: 'rgba(255,255,255,0)',
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
    var option = null;
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