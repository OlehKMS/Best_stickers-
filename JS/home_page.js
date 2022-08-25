let hamburger = document.getElementById('menu__toggle')

hamburger.onclick = function () {
   
   hamburger.classList.toggle('hamburger_list')
};

let sets = document.getElementById('sets')
let sets_block = document.getElementById('sets_block')

sets.onclick = function () {
   
   sets_block.classList.toggle('onclick_sets')
}

let eticet = document.getElementById('eticets')
let eticet_block = document.getElementById('eticet_block')

eticet.onclick = function () {
   eticet_block.classList.toggle('onclick_sets')
}

let list_wall = document.getElementById('list_wall')
let wall_block = document.getElementById('eticet_wall')

list_wall.onclick = function () {

   wall_block.classList.toggle('onclick_sets')
}
  
