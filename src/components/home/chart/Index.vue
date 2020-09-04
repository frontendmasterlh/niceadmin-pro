<template>
  <div class="home-panel">
    <div id="panel" :style="{width: '100%', height: '465px'}"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        panel: null
      };
    },
    components: {},
    computed: {},
    watch: {},
    methods: {
      getLine() {
        let panel = this.$echarts.init(document.getElementById("panel"));
        this.panel = panel
        let option = {
          title: {
            text: "今日流量趋势",
            left: "42%",
            top: "0%",
            textStyle: {
              color: "#666",
              fontWeight: "200",
              fontSize: "13",
              align: "center"
            }
          },
          legend: {
            orient: 'horizontal',
            x:'center',
            y:'bottom',
            padding:[0,0,0,0],
            data: ['PV', 'UV']
          },
          tooltip: {
            trigger: "axis"
          },
          grid: {
            left: "0%",
            right: "2%",
            bottom: "7%",
            top: "10%",
            itemGap: 30,
            textStyle: {
              color: '#a3afb7'
            },
            containLabel: true
          },
          xAxis: {
            type: "category",
            axisLine: {
              show: false
            },
            axisTick:{
              show:false
            },
            splitLine:{
              show:false
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
            axisLine: {
              show: false
            },
            axisTick:{
              show:false
            },
            splitLine: {
              show: true,
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
              name: "PV",
              type: "line",
              smooth: true,
              areaStyle: {
                normal: {}
              },
              itemStyle: {
                normal: {
                  color: "#92f0e6"
                }
              },
              data: [
                0,
                2.3,
                1.9,
                2.8,
                2.5,
                3.7,
                0
              ]
            },
            {
              name: "UV",
              type: "line",
              smooth: true,
              areaStyle: {
                normal: {}
              },
              itemStyle: {
                normal: {
                  color: "#b8d7ff"
                }
              },
              data: [
                0,
                1.4,
                0.5,
                1.8,
                1.2,
                1,
                0
              ]
            }
          ]
        };
        panel.setOption(option, true);
      },
      // 图标自适应
      chartResize() {
        this.resizefun = () => {
          this.panel.resize(); //这里的myChart就是要自适应的图表容器Id
        }
        window.addEventListener('resize', this.resizefun)
      },
      // 接收bus传递控制菜单折叠
      changeCollapse() {
        this.$bus.on('collapse-content', msg => {
          setTimeout(() => {
            this.panel.resize();
          }, 300)
        })
      }
    },
    mounted() {
      this.changeCollapse()
      this.chartResize()
      this.getLine();
    },
    created() {},
    //移除事件监听，避免内存泄漏
    beforeDestroy() {
      window.removeEventListener('resize', this.resizefun)
      this.resizefun = null
    },
  }
</script>
<style lang='scss' scoped>

</style>