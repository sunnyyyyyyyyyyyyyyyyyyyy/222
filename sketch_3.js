function setup() { //設定函數，設定初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight); //創建畫布
    //設定顏色模式為HSB，範圍為360, 100, 100
    colorMode(HSB, 360, 100, 100);
    //畫布的背景顏色為橘色
    background(20, 60, 90); //背景色
 }
 
 function draw() { //畫圖函數，畫圖的地方
   background(20, 60, 90); //寫在這裡，每次要重新塗一次
 
   //計算根據滑鼠X座標的大小
   let size = map(mouseX, 0, windowWidth, 50, 100); //map函數
 
   //畫方框和圓形的間距
   let spacing = size * 1.5;
 
   for (let x = spacing / 2; x < windowWidth; x += spacing) {
     for (let y = spacing / 2; y < windowHeight; y += spacing) {
       //畫方框的顏色為紅色
       fill(65, 40, 95); //填滿色
       //畫方框的邊框為深紅色
       stroke(20, 60, 100); //邊框色
       //邊框的粗細為8
       strokeWeight(8); //邊框粗細
 
       //在(x, y)位置劃一個方框，以方框中心點為基準，方框的寬高為動態大小
       rectMode(CENTER); 
       rect(x, y, size, size); //畫方框
 
       //畫圓的顏色為淺橘色
       fill(60, 20, 120); //填滿色
 
       //圓的邊框為淺橘色
       stroke(105, 10, 90); //邊框色
 
       //邊框的粗細為8
       strokeWeight(8); //邊框粗細
 
       //在(x, y)位置畫一個圓，寬高為動態大小
       ellipse(x, y, size, size); //畫圓
     }
   }
 }
 
 //當視窗的大小改變時，重新設定畫布的寬高
 function windowResized() { //視窗大小改變時
   resizeCanvas(windowWidth, windowHeight); //調整畫布大小
 }