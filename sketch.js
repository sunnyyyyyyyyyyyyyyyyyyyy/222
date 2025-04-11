function setup() { //設定函數，設定初始值的地方
   //建立依照視窗的高與寬當作畫布的寬高
   createCanvas(windowWidth, windowHeight); //創建畫布
   //設定顏色模式為HSB，範圍為360, 100, 100
   colorMode(HSB, 360, 100, 100);
   // 設定背景色為白色
   background(0, 0, 100);
}

function draw() { //畫圖函數，畫圖的地方
  //計算根據滑鼠X座標的色相
  let hue = map(mouseX, 0, windowWidth, 0, 360); //map函數

  //計算根據滑鼠Y座標的亮度
  let brightness = map(mouseY, 0, windowHeight, 0, 100); //map函數

  //設定圓的顏色
  fill(hue, 100, brightness); //填滿色
  noStroke(); //無邊框
  //設定框的框線與顏色
  strokeWeight(5); //邊框粗細
  //設定框的顏色4a5759
  stroke(74, 87, 89); //邊框色

  //在滑鼠位置畫一個圓，寬高為200px
  ellipse(mouseX, mouseY, 200, 200); //畫圓
}

//當視窗的大小改變時，重新設定畫布的寬高
function windowResized() { //視窗大小改變時
  resizeCanvas(windowWidth, windowHeight); //調整畫布大小
  // 重新設定背景色為白色
  background(0, 0, 100);
}