效果图
![angle.gif](https://upload-images.jianshu.io/upload_images/11899053-b4d7b632b6f95e5b.gif?imageMogr2/auto-orient/strip)



## 基本原理
三角函数：余弦函数、反三角函数求弧度、弧度转角度

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
* theme（风格：指针旋转模式，小球旋转模式）
## 项目源码
[https://github.com/merrylmr/vue-angle-picker](https://github.com/merrylmr/vue-angle-picker)


## 参考项目
[http://bgrins.github.io/ui.anglepicker/](http://bgrins.github.io/ui.anglepicker/)

