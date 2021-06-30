
 var tabs = document.querySelectorAll('.tab')

 tabs.forEach(tab => {
     var tabTitle = tab.querySelector('.tab-title')
     var ul = tab.querySelector('.ul')

     tabTitle.addEventListener('click', function(){
         var up = tabTitle.querySelector('.up')
         var down = tabTitle.querySelector('.down')
         up.classList.toggle('open')
         down.classList.toggle('open')

         ul.classList.toggle('open')
     })
 } )

 var nav = document.querySelector('.nav')
 var toggle = document.querySelector('.toggle') 
 toggle.addEventListener('click', function(){
    var burger = toggle.querySelector('.burger')
    var cross = toggle.querySelector('.cross')
    
    burger.classList.toggle('open')
    cross.classList.toggle('open')
    nav.classList.toggle('open')
     
 })