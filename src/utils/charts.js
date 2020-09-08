var echarts = require('echarts/lib/echarts');

// 引入折线图等组件
require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');
require('echarts/lib/chart/radar');

// 引入提示框和title组件，图例
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');
require('echarts/lib/component/legendScroll');//图例翻译滚动

const install = function (Vue) {
  Object.defineProperties(Vue.prototype, {
    $chart: {
      get() {
        return {
          //画一条简单的线
          line: function (id, xAxisData, seriesData) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            const optionData = {
              tooltip: {
                trigger: "axis"
              },
              grid: {
                left: "-8%",
                right: "0%",
                bottom: "-50%",
                top: "2%",
                textStyle: {
                  color: '#a3afb7'
                },
                containLabel: true
              },
              xAxis: {
                type: "category",
                show: false,
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  show: false
                },
                axisLabel: {
                  textStyle: {
                    color: "#a3afb7"
                  }
                },
                boundaryGap: false,
                data: [
                  "SUN",
                  "MON",
                  "TUE",
                  "WED",
                  "THU",
                  "FRI",
                  "SAT"
                ]
              },
              yAxis: {
                type: "value",
                show: false,
                axisLine: {
                  show: false
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  show: false,
                  lineStyle: {
                    type: 'dashed'
                  }
                },
                axisLabel: {
                  textStyle: {
                    color: "#a3afb7"
                  }
                }
              },
              series: [{
                name: "听歌量",
                symbol: "none",
                type: "line",
                smooth: true,
                areaStyle: {
                  normal: {}
                },
                itemStyle: {
                  normal: {
                    color: "#17B3A3"
                  }
                },
                areaStyle: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0, color: 'rgba(23,179,163,0.5)' // 0% 处的颜色
                    }, {
                      offset: 0.5, color: 'rgba(23,179,163,0.3)' // 100% 处的颜色
                    }, {
                      offset: 1, color: 'rgba(23,179,163,0.05)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                  }
                },
                data: [
                  100,
                  260,
                  150,
                  250,
                  150,
                  210,
                  130
                ]
              }
              ]
            };
            this.chart.setOption(optionData);
            this.chart.resize();
          },
          bar: function (id, xAxisData, seriesData) {
            this.chart = echarts.init(document.getElementById(id));
            this.chart.clear();

            const optionData = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'bar',
                smooth: true
              }]
            };
            this.chart.setOption(optionData);
            this.chart.resize();
          },
        }
      }
    }
  })
}

export default {
  install
}