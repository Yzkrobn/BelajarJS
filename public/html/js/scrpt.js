document.addEventListener("DOMContentLoaded", () => {
  const cbt1 = document.getElementById("changeButton-t1");
  const mt1 = document.getElementById("message-t1");
  const rbt2 = document.getElementById("resizeButton-t2");
  const bt2 = document.getElementById("box-t2");

  const ubahTeks= () =>{
    if (cbt1&&mt1) {
        cbt1.addEventListener("click",()=>{
            mt1.textContent="Teks ini telah diubah setelah tombol diklik!";
        })
    }
  }
  ubahTeks();
  const ubahGaya=()=>{
    if(rbt2&&bt2){
        rbt2.addEventListener("click",()=>{
            bt2.style.height='300px';
            bt2.style.width='300px';
        })
    }
  }
  ubahGaya();
});
