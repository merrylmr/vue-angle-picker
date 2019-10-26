// 获取角度
export function getAngle(px, py, mx, my, clockwise = false) { // 鼠标鼠标点，与x轴正半轴之间的夹角(顺序针方向)
  let x = Math.abs(px - mx)
  let y = Math.abs(py - my)
  let z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
  let cos = y / z
  let radina = Math.acos(cos) // 用反三角函数求弧度
  let angle = Math.floor(180 / (Math.PI / radina)) // 将弧度转换成角度
  if (clockwise) {
    if (mx >= px && my > py) { // 鼠标在第四象限（及Y负半轴）
      angle = 90 - angle
    }
    if (mx < px && my >= py) { // 鼠标在第三象限（X负半轴）
      angle = 90 + angle
    }

    if (mx <= px && my < py) { // 鼠标在第二象限（及Y正半轴）
      angle = 270 - angle
    }
    if (mx > px && my <= py) { // 第一象限及X正半轴
      angle = 270 + angle
    }
  } else {
    if (mx > px && my <= py) { // 第一象限及X正半轴
      angle = 90 - angle
    }
    if (mx <= px && my < py) { // 鼠标在第二象限（及Y正半轴）
      angle = 90 + angle
    }
    if (mx < px && my >= py) { // 鼠标在第三象限（X负半轴）
      angle = 270 - angle
    }
    if (mx >= px && my > py) { // 鼠标在第四象限（及Y负半轴）
      angle = 270 + angle
    }
  }


  return angle
}

