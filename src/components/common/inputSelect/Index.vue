<template>
  <div :style="'width:' + width" class="input-select">
    <el-select
      v-model="value"
      style="width:100%"
      :disabled="disabled"
      placeholder="请选择"
      :size="width ? '' : size"
      @change="changeValue"
    >
      <el-input class="select-input" v-model="inputValue" placeholder="请输入内容" v-if="list.length > 7"></el-input>
      
      <el-option
        v-for="(item, index) in filterList(inputValue)"
        :key="index || item[optionKey]"
        :label="item[optionLabel]"
        :value="item[optionValue]"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      inputValue: ''
    };
  },
  props: {
    // 是否禁用
    disabled: {
      type: Boolean
    },
    // 宽度，传了宽度size失效
    width: {
      type: String
    },
    // 尺寸
    size: {
      type: String,
      default: 'medium'
    },
    // option list
    list: {
      type: Array
    },

    // option key
    optionKey: {
      type: String
    },

    // option label
    optionLabel: {
      default: 'name',
      type: String
    },

    // option value
    optionValue: {
      default: 'id',
      type: String
    },
  },
  components: {},
  computed: {
  },
  watch: {},
  methods: {
    // 监听option值改变
    changeValue(e) {
      this.inputValue = ""
      this.$emit('changeValue', e)
    },
    // 过滤列表
    filterList(key) {
      // 我这里直接return（也可赋给变量return变量出去）
      if(key == '') {
        return this.list
      } else {
        return this.list.filter(item => {
          // 如果list(name)包含key(输入框) => true
            if(item[this.optionLabel].includes(key)){
              // 返回item
              return item;
            }
        })
      }
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang='scss'>
  .input-select {
    display: inline-block;
  }
</style>