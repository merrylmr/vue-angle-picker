// 获取角度
export function getAngle(px, py, mx, my) { // 鼠标鼠标点，与x轴正半轴之间的夹角(顺序针方向)
  let x = Math.abs(px - mx)
  let y = Math.abs(py - my)
  let z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
  let cos = y / z
  let radina = Math.acos(cos) // 用反三角函数求弧度
  let angle = Math.floor(180 / (Math.PI / radina)) // 将弧度转换成角度

  if (mx > px && my > py) { // 鼠标在第四象限
    angle = 90 - angle
  }

  if (mx === px && my > py) { // 鼠标在y轴负方向上
    angle = 90
  }

  if (mx > px && my === py) { // 鼠标在x轴正方向上
    console.log('lalal')
    angle = 0
  }

  if (mx < px && my > py) { // 鼠标在第三象限
    angle = 90 + angle
  }

  if (mx < px && my === py) { // 鼠标在x轴负方向
    angle = 180
  }

  if (mx < px && my < py) { // 鼠标在第二象限
    angle = 270 - angle
  }
  if (mx > px && my < py) { // 第一象限
    angle = 270 + angle
  }
  return angle
}

