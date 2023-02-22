function accountcl() {
    const x = document.getElementById("left-bar");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }

// let vha = document.getElementsByClassName('crd')

//   function crdmouse(){
//         vha.style.width = '10%'
//   }

let vha = document.getElementById('up-photo');
vha.addEventListener(onmouseout, function(){
  vha.classList = 'ph-out'
})

function srchbtn() {
  const y = document.getElementById("srch-bx");
  if (y.style.display === "none") {
    y.style.display = "flex";
  } else {
    y.style.display = "none";
  }
}


// function srchbtn2() {
//   const z = document.getElementById("srch-bx");
//   if (z.style.display === "flex") {
//     z.style.display = "none";
//   } else {
//     z.style.display = "none";
//   }
// }
