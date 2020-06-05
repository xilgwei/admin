<template>
  <el-card class="info-card-wrapper" :padding="0">
    <div class="content-con">
      <div class="left-area" :style="{background: color, width: leftWidth}">
        <i :class="icon" :style="{fontSize: iconSize+'px'}"></i>
      </div>
      <div class="right-area" :style="{width: rightWidth}">
        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
// import CommonIcon from '_c/common-icon'
export default {
  name: 'InforCard',
  components: {
    // CommonIcon
  },
  props: {
    left: {
      type: Number,
      default: 36
    },
    color: {
      type: String,
      default: '#2d8cf0'
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: Number,
      default: 20
    },
    shadow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    leftWidth () {
      return `${this.left}%`
    },
    rightWidth () {
      return `${100 - this.left}%`
    }
  }
}
</script>

<style lang="less">
.common{
  float: left;
  height: 100%;
  display: table;
  text-align: center;
}
.size{
  width: 100%;
  height: 100%;
}
.middle-center{
  display: table-cell;
  vertical-align: middle;
}
.el-card__body{padding: 0;}

.info-card-wrapper{
  .size;
  overflow: hidden;
  .ivu-card-body{
    .size;
  }
  .content-con{
    .size;
    height: 105px;
    position: relative;
    .left-area{
      color: #fff;
      .common;
      display: flex;
      text-align: center;
      align-items: center;
      justify-content: center;
      & > .icon{
        .middle-center;
      }
    }
    .right-area{
      .common;
      & > div{
        .middle-center;
      }
    }
  }
}
</style>
