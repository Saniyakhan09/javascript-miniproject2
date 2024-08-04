// var a = document.querySelector("#box");
// a.addEventListener("mousemove",function(dets){
//    console.log(dets.clientX, dets.clientY);
    
// });

// var a = document.querySelector("#box")
// a.addEventListener("mouseenter",function(){
// var img = a.getAttribute("data-img")
// a.style.backgroundImage = `url(${img})`
// })
// a.addEventListener("mouseleave",function(){
//    var img = a.getAttribute("data-img")
//    a.style.backgroundImage = "none";
//    })

// document.querySelector("#box")


// const btn = document.querySelector("#throttle");
 


// Throttling Function
const throttleFunction = (func, delay) => {
   let prev = 0;
   return (...args) => {
       let now = new Date().getTime();
       if (now - prev > delay) {
           prev = now;
           return func(...args);
       }
   };
};
 document.querySelector("#box")
.addEventListener("mousemove",throttleFunction((dets)=>{
   var a = document.createElement("div");
   a.classList.add("image");
 
  

   a.style.left = dets.clientX + "px";
   a.style.top = dets.clientY + "px";
   

   var img = document.createElement("img");
   img.setAttribute("src","https://plus.unsplash.com/premium_photo-1670305512925-1b1c27107597?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8")
   a.appendChild(img);

   document.body.appendChild(a);
   
gsap.to(img, {
   y: "0",
   ease: Power3,
   duration: .6,
});
gsap.to(img,{
   y:"100%",
   delay: .6,
   ease: Power2,
})
   setTimeout(function(){
      a.remove();
   },2000)
  
  
},400));



