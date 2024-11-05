document.addEventListener("DOMContentLoaded", () => {
  const nB = document.getElementById("navButton");
  const nC = document.getElementById("navController");
  const l1 = document.getElementById("line1");
  const l2 = document.getElementById("line2");
  const l3 = document.getElementById("line3");
  const nBr = document.getElementById("navBar");

  const navSide = () => {
    if (nB && nC && l1 && l2 && l3) {
      nB.addEventListener("click", () => {
        nC.classList.toggle("opacity-0");
        nC.classList.toggle("invisible");
        l1.classList.toggle("rotate-45");
        l1.classList.toggle("-translate-y-0.5");
        l3.classList.toggle("-rotate-45");
        l2.classList.toggle("opacity-0");
        l2.classList.toggle("invisible");
      });
    }
  };
  navSide();
  const navBar=()=> {
    if (condition) {
      if (window.innerWidth<=768 && nBr.classList.contains("hidden")) {
        nBr.classList.remove("hidden")
      }else{
        nBr.classList.add("hidden")
      }
      
    }
  }
});
