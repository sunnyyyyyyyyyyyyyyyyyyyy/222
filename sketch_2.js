function setup() { //設定函數，設定初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight); //創建畫布
    //畫布的背景顏色為e29578(橘色。 e2為16進位的值，翻成10進位為226)
   background(226, 149, 120); //背景色
 
 
    //createCanvas(400, 400); //創建畫布
 }
 
 function draw() { //畫圖函數，畫圖的地方
   background(226, 149, 120); //寫在這裡，每次要重新塗一次
 
   //計算根據滑鼠X座標的大小
   let size = map(mouseX, 0, windowWidth, 50, 100); //map函數
 
   //畫方框和圓形的間距
   let spacing = size * 1.5;
 
   for (let x = spacing / 2; x < windowWidth; x += spacing) {
     for (let y = spacing / 2; y < windowHeight; y += spacing) {
       //畫方框的顏色為f28482(f2為16進位的值，翻成10進位為242)
       fill(242, 132, 130); //填滿色
       //畫方框的邊框為bc4749( bc為16進位的值，翻成10進位為188)
       stroke(188, 71, 73); //邊框色
       //邊框的粗細為10
       strokeWeight(10); //邊框粗細
 
       //在(x, y)位置劃一個方框，以方框中心點為基準，方框的寬高為動態大小
       rectMode(CENTER); 
       rect(x, y, size, size); //畫方框
 
       //畫圓的顏色為ffdab9(淺橘色。 ff為16進位的值，翻成10進位為255)
       fill(255, 218, 185); //填滿色
 
       //圓的邊框為f9dcc4(淺橘色。 f9為16進位的值，翻成10進位為249)
       stroke(249, 220, 196); //邊框色
 
       //邊框的粗細為10
       strokeWeight(10); //邊框粗細
 
       //在(x, y)位置畫一個圓，寬高為動態大小
       ellipse(x, y, size, size); //畫圓
     }
   }
 }
 
 //當視窗的大小改變時，重新設定畫布的寬高
 function windowResized() { //視窗大小改變時
   resizeCanvas(windowWidth, windowHeight); //調整畫布大小
 }