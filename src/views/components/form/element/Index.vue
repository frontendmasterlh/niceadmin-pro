<template>
  <div class="form-element">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>输入框</span>
            </div>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">基础用法</h3>
                <el-input v-model="input" placeholder="请输入标题"></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">禁用状态</h3>
                <el-input v-model="input" placeholder="请输入标题" :disabled="true"></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">可清空</h3>
                <el-input placeholder="请输入标题" v-model="input" clearable></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">密码框</h3>
                <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                <h3 class="small-title">带 icon 的输入框</h3>
                <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input"></el-input>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
                <h3 class="small-title">带 icon 的输入框</h3>
                <el-input placeholder="请输入日期" prefix-icon="el-icon-date" v-model="input"></el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">文本域</h3>
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <div slot="header" class="clearfix">
              <span>其它元素</span>
            </div>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">Radio 单选框</h3>
                <el-radio-group v-model="radio">
                  <el-radio :label="3">备选项</el-radio>
                  <el-radio :label="6">备选项</el-radio>
                  <el-radio :label="9">备选项</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">Checkbox 多选框</h3>
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="复选框 A"></el-checkbox>
                  <el-checkbox label="复选框 B"></el-checkbox>
                  <el-checkbox label="复选框 C"></el-checkbox>
                  <el-checkbox label="禁用" disabled></el-checkbox>
                  <el-checkbox label="选中且禁用" disabled></el-checkbox>
                </el-checkbox-group>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">InputNumber 计数器</h3>
                <el-input-number v-model="num1"></el-input-number>
                <el-input-number size="medium" v-model="num2"></el-input-number>
                <el-input-number size="small" v-model="num3"></el-input-number>
                <el-input-number size="mini" v-model="num4"></el-input-number>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">Select 选择器</h3>
                <el-select v-model="value" clearable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">Select 选择器 二次封装</h3>
                <input-select :list="options" @changeValue="changeValue" optionLabel="label" optionValue="value"></input-select>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">Switch 开关</h3>
                <el-switch
                  v-model="value1"
                  active-text="按月付费"
                  inactive-text="按年付费">
                </el-switch>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">Slider 滑块</h3>
                <el-slider v-model="value2"></el-slider>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="24">
                <h3 class="small-title">TimePicker 时间选择器</h3>
                <el-time-select
                  v-model="time"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30'
                  }"
                  placeholder="选择时间">
                </el-time-select>
              </el-col>
            </el-row>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'formElement',
    data() {
      return {
        input: '',
        radio: 3,
        checkList: ['选中且禁用','复选框 A'],
        num1: 1,
        num2: 1,
        num3: 1,
        num4: 1,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '打卤面'
        }, {
          value: '选项6',
          label: '油焖大虾'
        }, {
          value: '选项7',
          label: '大闸蟹'
        }, {
          value: '选项8',
          label: '北京烤鸭'
        }],
        value: '',
        value1: true,
        value2: 50,
        textarea: '',
        time: '',
      };
    },
    components: {},
    computed: {},
    watch: {},
    methods: {
      changeValue(e) {
        this.value = e
      }
    },
    created() {

    },
    mounted() {

    },
  }
</script>
<style lang='scss' scoped>
  .el-row {
    // margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    margin-bottom: 20px;
    border-radius: 4px;
  }

  .el-input-number {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>