const stars=[]
const blackholes=[]

setup=()=>{
  createCanvas(1920,1080)
  background(0)
  strokeWeight(2)
  colorMode(HSB,360)
  
  for(let i=2e3;i--;){
    stars[i]={
      x:cos(i)*500,
      y:sin(i)*500,
      colour:i%360
    }
  }
  for(let i=4;i--;){
    blackholes[i]={
      x:random(-250,250),
      y:random(-250,250)
    }
  }
}

draw=()=> {
  translate(width/2,height/2)

  for(const s of stars){
    let direction=100
    for(const b of blackholes){
      direction+=atan2(b.y-s.y,b.x-s.x)*2
    }
    stroke(s.colour,360,360)
    line(s.x,s.y,s.x+=cos(direction)*5,s.y+=sin(direction)*5)
  }
}

mousePressed=_=>setup()