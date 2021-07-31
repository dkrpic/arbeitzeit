console.log("hallo");
function myFunction(){
    const left = document.getElementsByClassName("left")[0];
    left.classList.add("act");
    
       const carti=document.createElement("div");
         carti.classList.add("x");
         carti.innerHTML=`             
           
           
    
           <div onclick="remove(this)">&times;</div>
            `
           left.appendChild(carti);
           
           
           
     
    
}
function remove(t){
       const left = document.getElementsByClassName("left")[0];
    left.classList.remove("act");
  t.remove();
    
    
    
    
}