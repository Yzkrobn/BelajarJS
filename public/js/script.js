document.addEventListener('DOMContentLoaded', () => {
    const nB = document.getElementById("navButton");
    const nS = document.getElementById("navSide");
    const l1 = document.getElementById("line1");
    const l2 = document.getElementById("line2");
    const l3 = document.getElementById("line3");
    const navSlide = () => {
        if (nB && nS) {
            nB.addEventListener('click', () => {
                nS.classList.toggle('translate-x-20')
                nS.classList.toggle('opacity-0');     // Toggle opacity antara 0 dan 100
                nS.classList.toggle('invisible');
                // nS.classList.toggle('hidden');
            })
        }
    }
    navSlide();
    const rotate = () => {
        if (nB && l1 && l2 && l3) {
            nB.addEventListener('click', () => {
                l1.classList.toggle("rotate-45")
                l1.classList.toggle("-translate-y-3")
                l2.classList.toggle("-rotate-45")
                l2.classList.toggle("-translate-y-4")
                l3.classList.toggle('opacity-0');     // Toggle opacity antara 0 dan 100
                l3.classList.toggle('invisible');
            })
        }
    }
    rotate()
})