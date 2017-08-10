var img

var rectSize = 10

var slider
function setup() {
  createCanvas(600,400)
  img = loadImage("sample.jpg")
  pixelDensity(1)
  slider = createSlider(1,32,16)
  slider.position(0,430)
}

function draw() {
  rectSize = slider.value()
  background(0)
  image(img,0,0,600/rectSize,400/rectSize)
  loadPixels()

  // stroke(255)
  // fill(255)
  // text("someting",300,300)

  noStroke()
  for (var y = 0; y < height/rectSize; y++) {
    for (var x =0; x< width/rectSize; x++) {
      var index = (x + y*width)*4
      var r = pixels[index]
      var g = pixels[index + 1]
      var b = pixels[index + 2]

      fill(r,g,b)

      rect(x*rectSize,y*rectSize,rectSize,rectSize)
    }
  }
}
