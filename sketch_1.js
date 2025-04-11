function setup() { //設定函數，設定初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight); //創建畫布
    //畫布的背景顏色為e29578(橘色。 e2為16進位的值，翻成10進位為226)
   background(226, 149, 120); //背景色
 
 
    //createCanvas(400, 400); //創建畫布
 }
 
 function draw() { //畫圖函數，畫圖的地方
   background(226, 149, 120); //寫在這裡，每次要重新塗一次
 
  //畫圓的顏色為f9dcc4(淺橘色。 f9為16進位的值，翻成10進位為249)
   fill(249, 220, 196); //填滿色
  //在視窗的中間劃一個圓，圓的寬高為200
  //ellipse(windowWidth/2, windowHeight/2, 200, 200); //畫圓
 
  //圓的邊框為ffdab9(淺橘色。 ff為16進位的值，翻成10進位為255)
  stroke(255, 218, 185); //邊框色
 
  //邊框的粗細為10
  strokeWeight(10); //邊框粗細
 
  //依照上面的圓顏色與框線顏色，從視窗的最左邊，產生連續的圓，到視窗的最右邊
   for (let i = 0; i < windowWidth+200; i += 200) { //for迴圈
     ellipse(i, windowHeight/2, 200, 200); //畫圓
   }
 
 }
 //當視窗的大小改變時，重新設定畫布的寬高
 function windowResized() { //視窗大小改變時
   resizeCanvas(windowWidth, windowHeight); //調整畫布大小
 }