


 document.getElementById("submit").addEventListener("click" ,function(e){
    e.preventDefault();

    var obj={
        chechin: document.getElementById("chekin-date").value,
        
        chechout: document.getElementById("chekout-date").value ,
        adult: document.getElementById("adult").value ,
        children: document.getElementById("children").value ,
        room:  document.getElementById("rooms").value
       }
fetch('https://jsonplaceholder.typicode.com/posts', {
       method: 'POST',
        body: JSON.stringify(obj),
   headers: {
   'Content-type': 'application/json; charset=UTF-8',
      },
       })
      .then((response) => response.json())
      .then((json) => console.log(json));

      fetch("content/readme.txt").then((respose)=>{
        return respose.text();
    }).then((data)=>{
       // console.log(data);
       document.write(data);
    })
 }) 



    const navBtn = document.getElementById('nav-btn');
        const cancelBtn = document.getElementById('cancel-btn');
        const sideNav = document.getElementById('sidenav');
        const modal = document.getElementById('modal');
        
        navBtn.addEventListener("click", function(){
            sideNav.classList.add('show');
            modal.classList.add('showModal');
        });
        
        cancelBtn.addEventListener('click', function(){
            sideNav.classList.remove('show');
            modal.classList.remove('showModal');
        });
        
        window.addEventListener('click', function(event){
            if(event.target === modal){
                sideNav.classList.remove('show');
                modal.classList.remove('showModal');
            }
    });
        
      