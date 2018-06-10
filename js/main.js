//select elements and create variables
var main = document.querySelector(".main")
var L1 = document.querySelector(".L1")
var L1A1 = document.querySelector(".L1A1")
var L1A2 = document.querySelector(".L1A2")
var L1A3 = document.querySelector(".L1A3")
var L1A4 = document.querySelector(".L1A4")
var player = {
  score: 0,
  money: 50.00
}



//define functions

function l2a2(){

}

function l1a1(){
  player.score += 20
  main.innerHTML += `
  <div class=" level L2">
    <p class="L2Q1">
    You picked Human!
    you now have a sword!
    </p>
    <button class="L2A1">make room for the bow?</button>
    <span> or </span>
    <button class="L2A2">keep it and fight the dragon?</button>
  </div>
  `
  var L2A1 = document.querySelector(".L2A1")
  var L2A2 = document.querySelector(".L2A2")

  L2A1.addEventListener('click', function(event){
    l2a2()
    document.querySelectorAll('.L2 button').forEach(function(btn){
      btn.disabled
    })
  })
  
}

function l1a2(){
  player.score += 10
  main.innerHTML += `
  <div class=" level L2">
  <p class="L2Q2">
    You picked elf. 
    you gained 10 coins. dont waste 'em too soon!
  </p>
  <button class="L2A1">buy the bow!</button>
  <span> or </span>
  <button class="L2A2">"screw it run in weaponless!"</button>
  <p> (its 20 coins) </p>
</div>
  `

}
console.log(player.score)


function l1a3(){
  main.innerHTML += `
  <div class=" level L2">
  <p class="L2Q1">
   you picked orc!
   you can't use weapons but you're immortal!
  </p>
  <button class="L2A2">beat the dragon with your fists</button>
</div>
  `
}

function l1a4(){
  main.innerHTML +=`
  <div class=" level L3">
  <p class="L2Q1">
  you win!
  </p>
  <button class="L4A1"> click to win </button>
  </div>
  `
}



//add Event Listeners and call functions
L1A1.addEventListener('click', function(event){
  l1a1()
  // event.target.disabled
  var s = document.querySelectorAll('.L1 button')
  s.forEach(function(btn){
    btn.disabled
  })
})

L1A2.addEventListener('click',function(event){
  l1a2()
  var s = document.querySelectorAll('.L1 button')
  s.forEach(function(btn){
    btn.disabled
  })
})
L1A3.addEventListener('click',function(event){
  l1a3()
  var s = document.querySelectorAll('.L1 button')
  s.forEach(function(btn){
    btn.disabled
  })
})
L1A4.addEventListener('click',function(event){
  l1a4()
  var s = document.querySelectorAll('.L1 button')
  s.forEach(function(btn){
    btn.disabled
  })
})