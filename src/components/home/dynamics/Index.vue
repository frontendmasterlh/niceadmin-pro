<template>
  <div class="nice-card">
    <div class="nice-card-header">
      <span class="label flex-row"> <i class="iconfont nice-icon-liuyan1"></i> 留言</span>
    </div>
    <div class="nice-card-bodyer">
      <div class="dynamic-list">
        <div class="item">
          <div class="avatar">
            <img src="https://p4.music.126.net/-RRzL1HUaV5zwsIiJQhPMg==/18602637232027202.jpg?param=150y150" alt="李啊逼" title="李啊逼">
          </div>
          <div class="info">
            <h2 class="flex-between">
              <span> 李啊逼 <small> · 4月前</small></span>
            </h2>
            <div class="content"> 加油。摄影师可以啊全程都在小姐姐上 </div>
          </div>
        </div>
        <div class="item">
          <div class="avatar">
            <img src="https://p3.music.126.net/tPZMgz7HzFYSkV1zrbfNuw==/109951163309071499.jpg?param=150y150" alt="一个发呆青年的日常" title="一个发呆青年的日常">
          </div>
          <div class="info">
            <h2 class="flex-between">
              <span> 一个发呆青年的日常 <small> · 4月前</small></span>
            </h2>
            <div class="content"> 假如我年少有为不自卑，如今老婆应该一大堆 </div>
          </div>
        </div>
        <div class="item">
          <div class="avatar">
            <img src="https://p3.music.126.net/zctHfq6lpLru92usHjoYzQ==/109951164964560916.jpg?param=150y150" alt="黎明终会到来" title="黎明终会到来">
          </div>
          <div class="info">
            <h2 class="flex-between">
              <span> 黎明终会到来 <small> · 4月前</small></span>
            </h2>
            <div class="content"> 这个腿是真好听，啊...不对，这个歌是真白 </div>
          </div>
        </div>
        <div class="item">
          <div class="avatar">
            <img src="https://p3.music.126.net/xjB7UlCvN_1Q_KlBoJfXdA==/109951164367829636.jpg?param=150y150" alt="AlbenChou" title="AlbenChou">
          </div>
          <div class="info">
            <h2 class="flex-between">
              <span> AlbenChou <small> · 4月前</small></span>
            </h2>
            <div class="content"> 我是唱的…不是拍的-。 </div>
          </div>
        </div>
        <div class="item">
          <div class="avatar">
            <img src="https://p4.music.126.net/7x3bnFhNcFFSmX17iMntkQ==/109951165248065463.jpg?param=150y150" alt="不要熬夜morning" title="不要熬夜morning">
          </div>
          <div class="info">
            <h2 class="flex-between">
              <span> 不要熬夜morning <small> · 3月前</small></span>
            </h2>
            <div class="content"> 好看的皮囊经不起扫黄打非，有趣的灵魂涉嫌账号违规 </div>
          </div>
        </div>
        <div class="item">
          <div class="avatar">
            <img src="https://p4.music.126.net/7x3bnFhNcFFSmX17iMntkQ==/109951165248065463.jpg?param=150y150" alt="不要熬夜morning" title="不要熬夜morning">
          </div>
          <div class="info">
            <h2 class="flex-between">
              <span> 不要熬夜morning <small> · 3月前</small></span>
            </h2>
            <div class="content"> 好看的皮囊经不起扫黄打非，有趣的灵魂涉嫌账号违规 </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    components: {},
    computed: {},
    watch: {},
    methods: {

    },
    created() {

    },
    mounted() {

    },
  }
</script>
<style lang='scss' scoped>
  .nice-card {
    position: relative;

    .nice-card-header {
      .label {
        flex: 1;

        i {
          font-size: 20px;
          margin-right: 5px;
        }
      }
    }

    .nice-card-bodyer {
      padding-top: 0;
      .dynamic-list {
        .item {
          padding: 10px 0;
          width: 100%;
          display: flex;
          .avatar {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            margin-right: 12px;
            flex-shrink: 0;
            img {
              width: 100%;
              border-radius: 50%;
            }
          }
          .info {
            flex: 1;
            h2 {
              font-size: 15px;
              margin-bottom: 15px;
              margin-right: 5px;
              small {
                font-size: 12px;
                color: #a5a5c1;
                font-weight: 200;
              }
            }
            .content {
              width: 100%;
              font-size: 12px;
              color: #4a4a4a;
              line-height: 1.6;
              padding: 8px 10px;
              background: #f5f5f5;
              margin-top: 5px;
              border-radius: 3px;
            }
          }
        }
      }
    }
  }
</style>