const practice = document.getElementById("practice");
const dropdown1 = document.getElementById("dropdown1");
const people= document.getElementById("people"); 
const mini = document.getElementById("mini-dropdown");
const work = document.getElementById("work");
const dropdown2 = document.getElementById("dropdown2");
const pjList= document.getElementById("pj-list"); 
const mini2 = document.getElementById("mini-dropdown2");
const news = document.getElementById("news");
const dropdown3 = document.getElementById("dropdown3"); 
const active = document.getElementById("active"); 









practice.addEventListener('click', ()=>{
   
    dropdown2.classList.remove("show");
    dropdown3.classList.remove("show");
    dropdown1.classList.toggle("show");
    news.classList.remove('news2');
    work.classList.remove('work2');
    practice.classList.toggle('activate');
   
  
});
people.addEventListener('click', ()=>{    
    mini.classList.toggle("show");
    people.classList.toggle('people2')
  
});



work.addEventListener('click', ()=>{
    dropdown1.classList.remove("show");
    dropdown3.classList.remove("show");
    news.classList.remove('news2');
    practice.classList.remove('activate');  
    dropdown2.classList.toggle("show");
    work.classList.toggle('work2');

    
    
});
pjList.addEventListener('click', ()=>{
    mini2.classList.toggle("show");
    pjList.classList.toggle('pjList2')
});


news.addEventListener('click', ()=>{
    dropdown1.classList.remove("show");
    dropdown2.classList.remove("show");
    work.classList.remove('work2');
    practice.classList.remove('activate');


    dropdown3.classList.toggle("show");
    news.classList.toggle('news2');
});