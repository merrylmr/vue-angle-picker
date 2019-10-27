<template>
  <div class="home-page"
       :style="{background: `linear-gradient(${angle0}deg, rgba(235, 202, 202, 1), rgba(78, 172, 201, 1))`}">
    <h1>vue angle picker</h1>
    <h3>A fun way to choose angles in a web page</h3>
    <div class="demo-list">
      <angle-picker :angle="angle0"
                 :closeWise="false"
                 @change="changeAngle($event,0)"></angle-picker>
      <angle-picker :angle="angle1"
                 :closeWise="true"
                 :theme="'theme2'"
                 @change="changeAngle($event,1)"></angle-picker>
    </div>

    <!--图片旋转-->
    <div :style="{'transform':`rotate(${angle1}deg)`}"
         style="width:200px;height:200px;margin:0 auto;">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
  </div>
</template>
<script>
//  import AngleComp from './angle/Angle.vue'

  import AngleComp from './angle/Angle.vue'

export default {
  components: {AngleComp},
  name: 'Home',
    data() {
      return {
        angle0: 90,
        angle1: 90,
        angle2: 180,
        angle3: 270,
      }
    },
//    components: {
//      AngleComp
//    },
    methods: {
      changeAngle(data, index) {
        switch (index) {
          case 0:
            this.angle0 = data
            break
          case 1:
            this.angle1 = data
            break
          case 2:
            this.angle2 = data
            break
          case 3:
            this.angle3 = data
            break
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .home-page {
    width: 100%;
    min-height: 100vh;
    text-align: center;
    height: 100%;
  }

  .demo-list {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }
</style>