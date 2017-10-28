<template>
  <div class="number-keyboard-box" v-if="show">
    <div class="main">
      <div class="title">{{title}}</div>
      <div class="key-box">
        <template v-for="(item,index) in keyList">
          <div class="key-box-line">
            <div class="item border" :class="{gray:item[0]=='*'}" @touchstart="handleKeyButtonClick($event,item[0])">{{item[0]}}</div>
            <div class="item border" @touchstart="handleKeyButtonClick($event,item[1])">{{item[1]}}</div>
            <div class="item" :class="{'gray del':item[2]=='-'}" @touchstart="handleKeyButtonClick($event,item[2])">{{item[2]}}</div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'vue-number-keyboard',
  data() {
    return {
      keyList: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        ['*', 0, '-']
      ],
      value: []
    }
  },
  methods: {
    close() {
      this.show = false;
      this.$emit('close')
    },
    handleKeyButtonClick(e, val, type) {
      if (e.target.className.indexOf('del') > 0) {
        this.value.pop();
      } else if (this.value.length <= this.maxlength) {
        this.value.push(val)
      }
      this.$emit('change', this.value.join(''))
    }
  },
  props: {
    title: {
      default: '数字键盘',
      type: String
    },
    show: {
      default: false,
      type: Boolean
    },
    maxlength: {
      type: Number
    }
  }
}

</script>
<style scoped lang="scss">
$borderColor:rgb(232, 232, 232);
.number-keyboard-box {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, .2);
  z-index: 999;
  box-sizing: border-box;
  .main {
    user-select: none;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    color: #363636;
    background-color: #fff;
    .title {
      width: 100%;
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid $borderColor;
      text-align: center;
    }
    .key-box {
      width: 100%;
      .key-box-line {
        display: flex;
        text-align: center;
        line-height: 50px;
        height: 50px;
        .item {
          cursor: pointer;
          width: 100%;
          height: 100%;
          flex: 1;
          border-bottom: 1px solid $borderColor;
          color: #c7c7c7;
          &.border {
            border-right: 1px solid $borderColor;
          }
          &.gray {
            background: $borderColor;
          }
        }
      }
    }
  }
}

</style>
