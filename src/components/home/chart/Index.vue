<template>
  <div class="home-panel">
    <div id="panel" :style="{width: '100%', height: '400px'}"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    components: {},
    computed: {},
    watch: {},
    methods: {
      getLine() {
        let panel = this.$echarts.init(document.getElementById("panel"));
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
          tooltip: {
            trigger: "axis"
          },
          grid: {
            left: "0%",
            right: "2%",
            bottom: "0%",
            top: "10%",
            containLabel: true
          },
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
              "06:00",
              "07:00",
              "08:00",
              "09:00",
              "10:00",
              "12:00",
              "13:00",
              "14:00",
              "15:00",
              "16:00",
              "17:00",
              "18:00",
              "19:00",
              "20:00",
              "21:00",
              "22:00",
              "23:00"
            ]
          },
          yAxis: {
            type: "value"
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
                11,
                33,
                55,
                333,
                5555,
                3533,
                666,
                2666,
                5666,
                3999,
                1777,
                966,
                333,
                222,
                588,
                166,
                11
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
                111,
                333,
                555,
                3333,
                35555,
                35333,
                6666,
                16666,
                46666,
                29999,
                17777,
                9666,
                3333,
                2222,
                5888,
                1666,
                111
              ]
            }
          ]
        };
        panel.setOption(option, true);
      },
      // 图标自适应
      chartResize() {
        this.resizefun = () => {
          this.$echarts.init(document.getElementById('panel')).resize(); //这里的myChart就是要自适应的图表容器Id
        }
        window.addEventListener('resize', this.resizefun)
      },
      // 接收bus传递控制菜单折叠
      changeCollapse() {
        this.$bus.on('collapse-content', msg => {
          setTimeout(() => {
            this.chartResize();
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
<style lang='stylus' scoped>

</style>