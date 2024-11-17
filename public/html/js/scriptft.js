// const { list } = require("postcss");
// const Input = require("postcss/lib/input");

document.addEventListener("DOMContentLoaded", () => {
  const cbt1 = document.getElementById("changeButton-t1");
  const mt1 = document.getElementById("message-t1");
  const rbt2 = document.getElementById("resizeButton-t2");
  const bt2 = document.getElementById("box-t2");
  const ii3 = document.getElementById("itemInput-t3");
  const aitb3 = document.getElementById("addItemButton-t3");
  const il3 = document.getElementById("itemList-t3");
  const ti4 = document.getElementById("taskInput-t4");
  const atb4 = document.getElementById("addTaskButton-t4");
  const tl4 = document.getElementById("taskList-t4");
  const angka1 = document.getElementById("angka1-t5");
  const angka2 = document.getElementById("angka2-t5");
  const tambah = document.getElementById("tambah-t5");
  const kurang = document.getElementById("kurang-t5");
  const kali = document.getElementById("kali-t5");
  const bagi = document.getElementById("bagi-t5");
  const output = document.getElementById("hasil-t5");
  const ti6 = document.getElementById("taskInput-t6");
  const atb6 = document.getElementById("addTaskButton-t6");
  const tl6 = document.getElementById("taskList-t6");
  
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
  const menambahLi=()=>{
    if(il3&&aitb3&&ii3){
      aitb3.addEventListener("click",()=>{
        const teks=ii3.value.trim();
        if(!teks){
          window.alert("Teks kosong,Silahkan isi !");
          return;
        }else{
          const li=document.createElement("li");
          li.textContent=teks;
          il3.appendChild(li);
          ii3.value='';
        }
      })
    }
  }
  menambahLi();
  const toDoList=()=>{
    if (ti4&&tl4&&atb4) {
      atb4.addEventListener("click",()=>{
        const task=ti4.value.trim();
        if(!task){
        window.alert("Teks kosong,Silahkan isi !");
        return;
      }else{
        const li=document.createElement("li");
        li.textContent=task;
        const bs=document.createElement("button");
        bs.textContent="Selesai"
        li.appendChild(bs);
        tl4.appendChild(li);
        ti4.value='';
        bs.addEventListener("click",()=>{
          li.classList.add("completed")
        })
      }
    })
  }
  }
  toDoList();
  
  if (output&&bagi&&kali&&kurang&&tambah&&angka2&&angka1) {
  const hitung=(operator)=>{
    const var1=parseFloat(angka1.value);
    const var2=parseFloat(angka2.value);

    if(isNaN(var1)||isNaN(var2)){
      alert("Masukkan angka !")
      return;
    };
    if(operator==="/"&&var2===0){
      alert("Tidak dapat membagi 0/Nol!")
      return;
    };
    let hasil;
    switch (operator) {
      case "+":
        hasil=var1+var2;
        break;
      case "-":
        hasil=var1-var2;
        break;
      case "*":
        hasil=var1*var2;
        break;
      case "/":
        hasil=var1/var2; 
        break;
      default:
        hasil="Operator tidak valid!";
    };
    output.textContent=hasil;
  };
    tambah.addEventListener("click",()=>hitung("+"));
    kurang.addEventListener("click",()=>hitung("-"));
    kali.addEventListener("click",()=>hitung("*"));
    bagi.addEventListener("click",()=>hitung("/"));
  }
  const toDoList2=()=>{
    if (atb6&&ti6&&tl6) {
      atb6.addEventListener("click",()=>{
        const task=ti.value.trim();
        if(!task){
          alert("Isi dulu !");
        }else{
          document.createElement("li")
        }
      })
    }
  }
});
