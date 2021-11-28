const text = "Winter is coming."
let index = 0
  function writeText(){
      document.getElementById('text').innerText = text.slice(0,index)
      index++;
      
      
      if(index>text.length){
          index=0
      }
  }
setInterval(writeText,200)


function randomBg(){
    return `hsl(${Math.floor(Math.random()*360)}, 100%, 50%)`
}

function somet(){
    return document.querySelector('h1').style.color = randomBg()
}

setInterval( somet, 250)

function createSnowFlake(){
    const snowFlake = document.createElement('i')
    snowFlake.classList.add('fas')
    snowFlake.classList.add('fa-snowflake')
    snowFlake.style.left = Math.random()*window.innerWidth + 'px'
    snowFlake.style.animationDuration=Math.random()*2+3 +'s'
    snowFlake.style.opacity = Math.random()
    snowFlake.style.fontSize = Math.random()*10 + 10 + 'px'
    document.body.appendChild(snowFlake)

    setTimeout(()=>{
        snowFlake.remove()
    }, 4000)
}

setInterval(createSnowFlake, 10)