function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('BLACK');
  
  for(var a = 0; a <= 400; a = a + 10) {
    stroke('#59CD90');
    line(0, a, 400 - a, 0);
  }
  
  for(var b = 400; b >= 0; b = b - 10) {
    stroke('#3FA7D6');
    line(b, 400, 400, 400 - b);
  }
  
  for(var c = 0; c <= 400; c = c + 10) {
    stroke('#FAC05E');
    line(400, c, c, 0);
  }
  
  for(var d = 400; d >= 0; d = d-10) {
    stroke('#F79D84');
    line(0, d, d, 400);
  }
  
}
