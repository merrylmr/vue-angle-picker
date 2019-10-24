<template>
  <div class="home-page"
       :style="{background: `linear-gradient(${angle0}deg, rgba(235, 202, 202, 1), rgba(78, 172, 201, 1))`}">
    <h1>vue angle picker</h1>
    <h3>A fun way to choose angles in a web page</h3>
    <div class="demo-list">
      <AngleComp :angle="angle0" @change="changeAngle($event,0)"></AngleComp>
      <AngleComp :angle="angle1" @change="changeAngle($event,1)"></AngleComp>
      <AngleComp :angle="angle2" @change="changeAngle($event,2)"></AngleComp>
      <AngleComp :angle="angle3" @change="changeAngle($event,3)"></AngleComp>
    </div>

  </div>
</template>
<script>
  import AngleComp from './components/Angle.vue'

  export default {
    name: 'Home',
    data() {
      return {
        angle0: 0,
        angle1: 90,
        angle2: 180,
        angle3: 270,
      }
    },
    components: {
      AngleComp
    },
    methods: {
      changeAngle(data, index) {
        switch (index) {
          case 0:
            this.angle0 = data;
            break
          case 1:
            this.angle1 = data;
            break
          case 2:
            this.angle2 = data;
            break
          case 3:
            this.angle3 = data;
            break
        }
      }
    }
  }
</script>

<style scoped>
  .home-page {
    width: 100%;
    min-height: 100vh;
    text-align: center;
  }

  .demo-list {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
  }
</style>