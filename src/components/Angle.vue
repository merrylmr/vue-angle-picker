<template>
  <div class="angle-comp">
    <div class="circle" ref="circle">
      <div class="c-pointer"
           @mousedown="mousedownHandle"
           :style="{'transform':`rotate(${angle}deg)`}">
        <div class="c-center"></div>
        <div class="c-line"></div>
      </div>
    </div>
    <p>{{angle}}°</p>
  </div>
</template>

<script>
  import {getAngle} from '../js/angle'

  export default {
    name: 'angle-comp',
    data() {
      return {
//        angle: 0
      }
    },
    props: {
      angle: {
        type: Number
      }
    },
    methods: {
      getCenterPos() {
        let domRect = this.$refs['circle'].getBoundingClientRect()
        return {
          x: domRect.width / 2 + domRect.x,
          y: domRect.height / 2 + domRect.y
        }
      },
      mousedownHandle(e) {
        const centerPos = this.getCenterPos()
        let mouseMove = (e) => {
          console.log('centerPos', centerPos)
          let angle = getAngle(centerPos.x, centerPos.y, e.clientX, e.clientY)
          console.log('angle', angle)
          this.$emit('change', angle)
        }
        let mouseUp = (e) => {

          document.body.removeEventListener('mousemove', mouseMove)
          document.body.removeEventListener('mouseup', mouseUp)
        }
        document.body.addEventListener('mousemove', mouseMove)
        document.body.addEventListener('mouseup', mouseUp)
      }
    }
  }
</script>

<style scoped>
  .angle-comp {
    width: 100px;
    text-align: center;
  }

  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #000;
    position: relative;
  }

  .c-center {
    height: 4px;
    width: 4px;
    position: absolute;
    background: #000;
    border-radius: 50%;
  }

  .c-pointer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50%;
    margin: -2px 0 0 -2px;
    /*围绕一点旋转*/
    transform-origin: 2px 2px;
  }

  .c-line {
    margin-top: 1.5px;
    margin-right: -2px;
    height: 1px;
    background: #000;
  }
</style>