# ICBC 管理驾驶舱

ICBC暑期线上实习数据可视化项目

## How to start

```git clone https://github.com/Taye310/ICBC_data_visualization.git```

open index.html in ur browser.  

edit ```src/main.js``` to change the content.  

## Tutorials

**欢迎补充**

[runoob入门教程](https://www.runoob.com/echarts/echarts-tutorial.html)  
[apache官方教程/文档](https://echarts.apache.org/zh/tutorial.html#5%20%E5%88%86%E9%92%9F%E4%B8%8A%E6%89%8B%20ECharts)

[gallery示例](https://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all)


## 设计

主界面：六个panel+中央地图区域+上方实时监控数据（两项）  
六个panel分别点出二级页面，显示该panel内的全部信息  

单独二级界面显示深层指标（管理建议面板？根据基础指标的值算出深层指标，给出具体的管理建议）  
设想是那个指标过大或者过小了显示红色，给出管理建议（紧急程度？东西加的越多复杂度越高）  
深层指标这个二级面板的入口可以设计成一个系统稳定度的指示器的样子 或者显示现在有几条管理建议  
数量越多这个入口的颜色会有标识，提醒大屏用户点出这个二级页面，或者定时显示  

如何充分利用excel数据，读json还是写到js里？  
中央地图的参与度是不是有点低？

## TODO

* 主界面六个panel
* 六个panel的二级界面（用来显示完整信息）
* 深层指标界面
* 增加中央地图的参与度