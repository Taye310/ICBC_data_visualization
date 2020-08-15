$(function(){
    // 自助机具现金使用率滚动状态
    $('#FontScroll').FontScroll({time: 1000, num: 1});
    $('.progress').each(function(i,ele){
        var PG = $(ele).attr('progress');
        var PGNum = parseInt(PG);
        var zero = 0;
        var speed = 10;
        var timer;
        $(ele).find('h4').html(zero+'%');
        if(PGNum<10){
            $(ele).find('.progressBar span').addClass('bg-4');
            $(ele).find('h3 i').addClass('color-4');
        }else if(PGNum>=10 && PGNum<30){
            $(ele).find('.progressBar span').addClass('bg-3');
            $(ele).find('h3 i').addClass('color-3');
        }else if(PGNum>=30 && PGNum<60){
            $(ele).find('.progressBar span').addClass('bg-2');
            $(ele).find('h3 i').addClass('color-2');
        }else{
            $(ele).find('.progressBar span').addClass('bg-1');
            $(ele).find('h3 i').addClass('color-1');
        }
        $(ele).find('.progressBar span').animate({width: PG},PGNum*speed);
        timer = setInterval(function(){
            zero++;
            $(ele).find('h4').html(zero+'%');
            if(zero==PGNum){
                clearInterval(timer);
            }
        },speed);
    });
    function totalNum(obj, speed){
        var singalNum = 0;
        var timer;
        var totalNum = obj.attr('total');
        if(totalNum == "0.2‰"){
            obj.html(totalNum)
        }
        else{
            timer = setInterval(function(){
                singalNum+=speed;
                if(singalNum>=totalNum){
                    singalNum=totalNum;
                    clearInterval(timer);
                }
                obj.html(singalNum);
            },1);
        }
    }
    // 风险统计
    totalNum($('#indicator1'),1);
    totalNum($('#indicator2'),1);
    totalNum($('#indicator3'),1);
});

$('.messagebnt').on('click',function(){
    $('.filterbg').show();
    $('.popup').show();
    $('.popup').width('3px');
    $('.popup').animate({height: '50%'},300,function(){
        $('.popup').animate({width: '50%'},300);
    });
    setTimeout(afterShow,600);
});
$('.popupClose').on('click',function(){
    $('.popupClose').css('display','none');
    $('.t_box').hide();
    $('.popup').animate({width: 0},300,function(){
        $('.popup').animate({height: 0},300);
    });
    setTimeout(afterHide,250);
});
function afterShow(){
    $('.popupClose').css('display','block');
    $('.t_box').show();
};
function afterHide(){
    $('.filterbg').hide();
    $('.popup').hide();
    $('.popup').width(0);
};

// 各支行职工上岗率
(function(){
    var myChart = echarts.init(document.getElementById('chart21'));
    var titlename = ['西城支行', '中关村支行', '昌平支行', '北七家支行', '东风支行', '航天支行'];
    var option = {
        tooltip : {
            backgroundColor:'rgba(30, 182, 254, 0.3)',
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        legend: {
            show: false
        },
        grid: {
            top: '6',
            left: '4',
            right: '20',
            bottom: '0',
            containLabel: true
        },
        xAxis:  {
            type: 'value',
            axisLine:{
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            },
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            data:titlename,
            axisLine:{
                lineStyle:{
                    color:'#6075ac',
                }
            },
            axisTick: {
                show: false
            },
            axisLabel:{
                color: '#04dbde',
                textStyle: {
                    fontSize: 15,
                    color: 'rgba(255, 255, 255, 0.7)'
                },
                formatter: function(value, index) {
                    return index == 0||index == 1||index == 2 ? '{blue|NO.' + (index + 1) + '}' + '{title|' + value + '} ' 
                    : '{yellow|NO.' + (index + 1) + '}' + '{title|' + value + '} ' ;
                },
                rich: {
                    title:{
                            width: 80,
                            fontSize: '15',
                    },
                    blue: {
                        color: '#15a7eb',
                        fontSize: '13'
                    },
                    yellow:{
                        color: '#e0ab48',
                        fontSize: '13'
                    },
                },
            },
        }],
        series: [
            {
                barWidth:'17',
                name: '请假',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'inside'
                    }
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 6,
                        color: "#23d4a5"
                    }
                },
                data: [3, 4, 2, 2, 3, 4]
            },
            {
                name: '按时打卡',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'inside'
                    }
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 6,
                        color: "#15a7eb"
                    }
                },
                data: [95, 92, 90, 88, 81, 78]
            },
            {
                name: '迟到早退',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: false,
                        position: 'inside',
                    }
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 6,
                        color: "#e0ab48",
                    }
                },
                data: [2, 4, 8, 10, 16, 18]
            }
        ]
    };
    //外围的动态数据显示
    var timeTicket = null;
    var count = 0;
    timeTicket && clearInterval(timeTicket);
    timeTicket = setInterval(function() {
    showshowTip();
    }, 1500);
    myChart.on('mouseover', function(params) {
        clearInterval(timeTicket);
    });
    myChart.on('mouseout', function(params) {
        timeTicket && clearInterval(timeTicket);
        myChart.dispatchAction({
            type: 'downplay',
        });
        timeTicket = setInterval(function() {
        showshowTip();
        }, 1500);
    });
    function showshowTip(){
        var dataLength = option.series[1].data.length;
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 1
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 1,
            dataIndex: count % dataLength
        });
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 1,
            dataIndex: count % dataLength,
        });
        count++;
    }
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
// 各支行客流量
(function(){
    var myChart = echarts.init(document.getElementById("chart11"));
    var times = ['2016','2017','2018','2019'];
    var jdData =[[ '海淀支行','朝阳支行','顺义支行','通州支行','中关村支行','五道口支行','丰台支行','石景山支行','昌平支行','西单支行'],
                 [ '海淀支行','朝阳支行','顺义支行','通州支行','中关村支行','五道口支行','丰台支行','石景山支行','昌平支行','西单支行'],
                 [ '海淀支行','朝阳支行','顺义支行','通州支行','中关村支行','五道口支行','丰台支行','石景山支行','昌平支行','西单支行'],
                 [ '海淀支行','朝阳支行','顺义支行','通州支行','中关村支行','五道口支行','丰台支行','石景山支行','昌平支行','西单支行']]
    var data =[[36,24,34,67,22,41,55,23,42,66],
               [66,33,45,78,45,42,58,42,57,80],
               [93,85,54,83,67,57,68,82,78,93],
               [128,95,88,86,103,87,98,87,88,94]];
    var option = {
        baseOption: {
            timeline: {
                show: false,
                data: times,
                autoPlay: true,
                playInterval: 3000,
            },
            title: {
                show: false
            },
            tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
            },
            calculable: true,
            grid: {
                left: '4%',
                right: '10%',
                bottom: '-18',
                top:'1%',
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
                type: 'category',
                data: '',
                nameTextStyle:{
                    color:'#fff'
                },
                axisLabel:{
                    textStyle:{
                        fontSize:15,
                        color:'rgba(255,255,255,0.7)',
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
                type: 'value',
                name: '',
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
                name: '',
                type: 'bar',
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
                barWidth:'14',
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{c}',
                        textStyle: {
                            fontSize: 15
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 6,
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#165ebd', '#034191', '#194d91','#31609c',
                                '#227bb1', '#2295e2', '#159adf','#13a5e7', 
                                '#237fd4', '#094faa', 
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
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
// 各支行交易量
(function(){
    var myChart = echarts.init(document.getElementById("chart12"));
    var times = ['2016','2017','2018','2019'];
    var jdData =[[ '海淀支行','朝阳支行','顺义支行','通州支行','中关村支行','五道口支行','丰台支行','石景山支行','昌平支行','西单支行'],
                 [ '海淀支行','朝阳支行','顺义支行','通州支行','中关村支行','五道口支行','丰台支行','石景山支行','昌平支行','西单支行'],
                 [ '海淀支行','朝阳支行','顺义支行','通州支行','中关村支行','五道口支行','丰台支行','石景山支行','昌平支行','西单支行'],
                 [ '海淀支行','朝阳支行','顺义支行','通州支行','中关村支行','五道口支行','丰台支行','石景山支行','昌平支行','西单支行']]
    var data =[[36,24,34,67,12,41,55,23,42,66],
               [66,33,45,78,45,42,58,42,57,80],
               [73,85,54,83,67,57,68,82,78,93],
               [100,95,88,86,100,87,98,87,88,94]];
    var option = {
        baseOption: {
            timeline: {
                show: false,
                data: times,
                autoPlay: true,
                playInterval: 3000,
            },
            title: {
                show: false
            },
            tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
            },
            calculable: true,
            grid: {
                left: '8%',
                right: '2%',
                bottom: '-18',
                top:'1%',
                containLabel: true
            },
            label:{
                normal:{
                    textStyle:{
                        color:'rgba(255, 255, 255, 0.7)'
                    }
                }
            },
            yAxis: [{
                position:'right',
                offset: 8,
                type: 'category',
                data: '',
                nameTextStyle:{
                    color:'rgba(255, 255, 255, 0.7)'
                },
                axisLabel:{
                    textStyle:{
                        fontSize:15,
                        color:'rgba(255,255,255,0.7)'
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
                inverse: true,
                show: false,
                type: 'value',
                name: '',
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
                barWidth:'14',
                label: {
                    normal: {
                        show: true,
                        position: 'left',
                        formatter: '{c}',
                        textStyle: {
                            fontSize: 15
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        barBorderRadius: 6,
                        color: function(params) {
                            // build a color map as your need.
                            var colorList = [
                                '#165ebd', '#034191', '#194d91','#31609c',
                                '#227bb1', '#2295e2', '#159adf','#13a5e7', 
                                '#237fd4', '#094faa', 
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
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
// 营业网店统计
(function(){
    var myChart = echarts.init(document.getElementById('pie2storechart'));
    let angle = 0;//角度，用来做简单的动画效果的
    let value = 91.6;
    var option = {
        title: {
            text: '{a|'+ value +'}{c|%}',
            x: 'center',
            y: 'center',
            textStyle: {
                rich:{
                    a: {
                        fontSize: 30,
                        color: '#29EEF3'
                    },
                    c: {
                        fontSize: 30,
                        color: '#29EEF3',
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
                name: '1',
                icon: "circle"
            }, {
                name: '2',
                icon: "circle"
            }, {
                name: '3',
                icon: "circle"
            }, {
                name: '4',
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
            },{
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
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
// 营业ATM统计
(function(){
    var myChart = echarts.init(document.getElementById('pie2atmchart'));
    let angle = 0;//角度，用来做简单的动画效果的
    let value = 72.5;
    var option = {
        title: {
            text: '{a|'+ value +'}{c|%}',
            x: 'center',
            y: 'center',
            textStyle: {
                rich:{
                    a: {
                        fontSize: 30,
                        color: '#29EEF3'
                    },
                    c: {
                        fontSize: 30,
                        color: '#29EEF3',
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
                name: '1',
                icon: "circle"
            }, {
                name: '2',
                icon: "circle"
            }, {
                name: '3',
                icon: "circle"
            }, {
                name: '4',
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
            },{
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
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    })
})();
// 北京地图
(function(){
    var myChart = echarts.init(document.querySelector(".map .chart"));
    var points = [{
        name: '',
        value: [115.974519, 40.457009]
    }, {
        name: '',
        value: [115.843267, 39.709144]
    }, {
        name: '',
        value: [116.993177, 40.536834]
    }, {
        name: '',
        value: [115.843267, 40.009144]
    }, {
        name: '',
        value: [116.443267, 39.629144]
    }, {
        name: '',
        value: [116.743267, 39.769144]
    }, {
        name: '',
        value: [116.743267, 40.099144]
    }, {
        name: '',
        value: [117.083267, 40.249144]
    }, {
        name: '',
        value: [116.553177, 40.386834]
    }, {
        name: '',
        value: [116.253177, 40.236834]
    }, {
        name: '',
        value: [116.369177, 39.906834]
    }]
    var option = {
        backgroundColor: 'rgba(147, 235, 248, 0)',
        geo: {
            map: '北京',
            aspectScale: 0.75, //长宽比
            zoom: .83,
            roam: true,
            left: '118px',
            top: '68px',
            label: {
                normal: {
                    show: false,
                    textStyle: {
                        color: '#fff',
                        fontSize: 10
                    }
                },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(147, 235, 248, .4)',
                    borderWidth: 1,
                    areaColor: {
                        type: 'radial',
                        x: 0.5,
                        y: 0.5,
                        r: 0.8,
                        colorStops: [{
                            offset: 0,
                            color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(128, 217, 248, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                },
                emphasis: {
                    areaColor: '#389BB7',
                    borderWidth: 0
                }
            }
        },
        series: [{
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showEffectOn: 'render',
                rippleEffect: {
                    period: 4,
                    scale: 3,
                    brushType: 'fill'
                },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        offset: [15, 0],
                        color: '#1DE9B6',
                        show: true
                    },
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(25, 216, 168, 0.6)',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    }
                },
                data: points
            }, //地图线的动画效果
            {
                type: 'lines',
                zlevel: 2,
                effect: {
                    show: true,
                    period: 4, //箭头指向速度，值越小速度越快
                    trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                    symbol: 'arrow', //箭头图标
                    symbolSize: 3, //图标大小
                },
                lineStyle: {
                    normal: {
                        color: '#1DE9B6',
                        width: 0.5, //线条宽度
                        opacity: 0.5, //尾迹线条透明度
                        curveness: .3 //尾迹线条曲直度
                    }
                },
                data: [{
                    coords: [
                        [116.369177, 39.906834],
                        [115.974519, 40.457009]
                    ]
                }, {
                    coords: [
                        [116.369177, 39.906834],
                        [115.843267, 39.709144]
                    ]
                }, {
                    coords: [
                        [116.369177, 39.906834],
                        [116.993177, 40.536834]
                    ]
                }, {
                    coords: [
                        [116.369177, 39.906834],
                        [115.843267, 40.009144]
                    ]
                }, {
                    coords: [
                        [116.369177, 39.906834],
                        [116.443267, 39.629144]
                    ]
                }, {
                    coords: [
                        [116.369177, 39.906834],
                        [116.743267, 39.769144]
                    ]
                }, {
                    coords: [
                        [116.369177, 39.906834],
                        [116.743267, 40.099144]
                    ]
                }, {
                    coords: [
                        [116.369177, 39.906834],
                        [117.083267, 40.249144]
                    ]
                }, {
                    coords: [
                        [116.369177, 39.906834],
                        [116.553177, 40.386834]
                    ]
                }, {
                    coords: [
                        [116.369177, 39.906834],
                        [116.253177, 40.236834]
                    ]
                }, {
                    coords: [
                        [116.369177, 39.906834],
                        [116.369177, 39.906834]
                    ]
                }]
            },
        ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function() {
        myChart.resize();
    });
})();