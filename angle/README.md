## 使用

npm
```
npm install vue-angle-picker
```

Mount
```
import Vue from 'vue'
import anglePicker from 'vue-angle-picker'
vue.use(anglePicker)
```
demo:
```
<template>
 <angle-picker :angle='angle' @change="changeAngle"></angle-picker> 
</template>
 <script>
  export default{
   data(){
     angle:0
  },
  methods:{
   changeAngle(val){
     this.angle=val
    }
  }
}
</script>
```
## 配置项
* angle(角度)
* closeWise（defult:true,顺时针）
* theme（风格：指针模式，小球旋转模式）

## 参考项目
[http://bgrins.github.io/ui.anglepicker/](http://bgrins.github.io/ui.anglepicker/)

