<template>
  <div class="nice-card">
    <div class="nice-card-header">
      <span class="label flex-row"> <i class="iconfont nice-icon-manage"></i> 我的项目</span>
      <el-link type="primary" :underline="false" style="font-size: 13px;"><img
          src="../../../assets/images/contact/github.png" alt=""></el-link>
    </div>
    <div class="nice-card-bodyer">
      <el-row :gutter="10">
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8" v-for="item of github" :key="item.id">
          <div class="project-card">
            <div class="bg-cover">
              <div class="bg-effect"
                :style="`background-image: url(${item.bg});`">
                <span class="layer"></span>
              </div>
              <div class="info">
                <h3 class="flex-between">{{ item.name }} <small class="flex-row"><i
                      class="el-icon-star-on"></i>{{item.stargazers_count}}</small> </h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        github: [{
          id: 1,
          name: 'desktop-nicemusic',
          stargazers_count: '151',
          description: 'vue-desktop-nicemusic 仿网易云音乐',
          bg: 'https://lxhcool.gitee.io/nice_image/images/candy-shop.jpg'
        },{
          id: 2,
          name: 'nice-masterplate',
          stargazers_count: '0',
          description: 'nice-masterplate',
          bg: 'https://lxhcool.gitee.io/nice_image/images/childhood-in-a-picture.jpg'
        },{
          id: 3,
          name: 'NeteaseCloudMusicApi',
          stargazers_count: '1',
          description: '网易云音乐 Node.js API service',
          bg: 'https://lxhcool.gitee.io/nice_image/images/contained.jpg'
        },{
          id: 4,
          name: 'wx-nicemusic',
          stargazers_count: '0',
          description: 'wx-nicemusic',
          bg: 'https://lxhcool.gitee.io/nice_image/images/dragon.jpg'
        },{
          id: 5,
          name: 'workplace',
          stargazers_count: '0',
          description: 'workplace',
          bg: 'https://lxhcool.gitee.io/nice_image/images/keyclack.jpg'
        },{
          id: 6,
          name: 'nicemusic',
          stargazers_count: '0',
          description: 'nicemusic',
          bg: 'https://lxhcool.gitee.io/nice_image/images/undo.jpg'
        }]
      };
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
    }

    .project-card {
      border-radius: 4px;
      margin-bottom: 10px;
      transition: all 0.4s;
      position: relative;

      .bg-cover {
        width: 100%;
        height: 100px;
        border-radius: 2px;
        position: relative;
        overflow: hidden;

        .bg-effect {
          width: 100%;
          height: 100px;
          border-radius: 2px;
          background-size: cover;
          background-repeat: no-repeat;
          position: absolute;
          transition: all 0.4s;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          overflow: hidden;

          .layer {
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .3);
            position: absolute;
            opacity: 1;
            top: 0;
            left: 0;
            transition: opacity .3s ease-in-out;
          }
        }

        .info {
          padding: 10px;
          color: #ffffff;
          position: relative;
          z-index: 10;

          h3 {
            font-size: 16px;

            i {
              font-size: 16px;
              margin-top: -3px;
              margin-right: 5px;
            }
          }

          p {
            margin-top: 5px;
            font-size: 12px;
          }
        }
      }

      &:hover {
        .bg-cover {
          .bg-effect {
            filter: blur(3px);
            background-position: 90%;
          }
        }

      }
    }

    .icon {
      width: 30px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 28px;
      font-weight: 700;
    }

    .desc {
      color: #808695;
      font-size: 12px;
      margin-bottom: 10px;
    }
  }
</style>