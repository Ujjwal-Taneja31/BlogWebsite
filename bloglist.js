const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click',()=>{
  hamburger.classList.toggle('active');
  navMenu.classList.toggle("active");
});
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener("click",()=>{ 
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
})) 
const searchinput = document.querySelector('.search');
const searchIcon = document.querySelector('.searchIcon');
searchIcon.addEventListener('click',()=>{
  searchIcon.classList.toggle('active');
  searchinput.classList.toggle('active');
});
const sidebar = document.querySelector('.sidebar');
const sidebarclosebtn = document.querySelector('.close-sidebar');
const sidebarlog = document.querySelector('.sidebarlogo');
sidebarlog.addEventListener('click',()=>{
  sidebar.classList.add('active');
 
  sidebarlog.style.display ='none';
})

sidebarclosebtn.addEventListener('click',()=>{
  sidebar.classList.remove('active');
  sidebarlog.style.display ='flex';
});


document.addEventListener("DOMContentLoaded", () => {
  const noteInput = document.getElementById("note-input");
  const addNoteBtn = document.getElementById("add-note");
  const notesList = document.getElementById("notes-list");

 
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

  function renderNotes() {
    notesList.innerHTML = ""; 
    savedNotes.forEach((note, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${note}
        <span class="delete-note" data-index="${index}">&times;</span>
      `;
      notesList.appendChild(li);
    });
  }

  function addNote() {
    const noteText = noteInput.value.trim();
    if (noteText) {
      savedNotes.push(noteText);
      localStorage.setItem("notes", JSON.stringify(savedNotes));
      noteInput.value = "";
      renderNotes();
    }
  }

  function deleteNote(index) {
    savedNotes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(savedNotes));
    renderNotes();
  }

  
  addNoteBtn.addEventListener("click", addNote);
  notesList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-note")) {
      const index = e.target.dataset.index;
      deleteNote(index);
    }
  });

  
  renderNotes();
});

const notetool = document.querySelector('#note-taking-tool');
const openPadbtn = document.querySelector('.Notebtn');
function openNotePad(){
 
 notetool.classList.toggle('activePad');
 if(openPadbtn.innerHTML === '<i class="fas fa-pen"></i>'){
    openPadbtn.innerHTML ='<i class="fa-solid fa-xmark"></i>';
 }else{
  openPadbtn.innerHTML ='<i class="fas fa-pen"></i>';
 }
}

const key = 'blogdata';
  if(!localStorage.getItem(key)){
    alert('Data not Found !');
  }else{
    const Storedata = JSON.parse(localStorage.getItem(key)); 
  
  for(i = 0; i < Storedata.length; i++){
         createtheme(Storedata[i]);
    }  
  }
const data = JSON.parse(localStorage.getItem(key));


function createtheme(storedata){ 
 const themeD = document.createElement('div');
 const heroD = document.createElement('div');
 const imgh = document.createElement('img');
 const contentD = document.createElement('div');
 const titleD = document.createElement('div');
 const metaD = document.createElement('div');
 const descriptionD =document.createElement('div');
 const excerptD = document.createElement('div'); 
 const closebtn = document.createElement('button');
 const readMore = document.createElement('button'); 
 const AllD  = document.querySelector('.All');
 const technologyD = document.querySelector('.technology');
 const healthfitnessD = document.querySelector('.health-fitness');
 const travelD = document.querySelector('.travel');
 const edulearnyD = document.querySelector('.education-learning');
 const lifestyleyD = document.querySelector('.lifestyle');
 const financeD = document.querySelector('.finance');
 const entertainmentD = document.querySelector('.entertainment');
 const foodD = document.querySelector('.food');
 
 


 closebtn.innerHTML = '&times';
 readMore.innerHTML = 'Read More';
 themeD.classList.add('theme', `${storedata.theme}`);

 contentD.style.backgroundColor = `${storedata.ContentAbcolor.trim()}`;
 
 
 themeD.style.backgroundColor = `${storedata.ThemeBcolor.trim()}`;

 heroD.style.backgroundColor = `${storedata.Hbgcolor.trim()}`;
 if(storedata.MetaFcolor.trim() !== storedata.Metabgcolor.trim()){
  metaD.style.color = `${storedata.MetaFcolor}`;
  metaD.style.backgroundColor = `${storedata.Metabgcolor}`;
}
 if(storedata.TitleFcolor.trim() !== storedata.Titlebgcolor.trim()){
  titleD.style.color = `${storedata.TitleFcolor}`;
  titleD.style.backgroundColor = `${storedata.Titlebgcolor}`;
}
if(storedata.PostCFcolor.trim() !==storedata.postCbgcolor.trim()){
  excerptD.style.color = `${storedata.PostCFcolor}`;
  excerptD.style.backgroundColor = `${storedata.postCbgcolor}`;
} 

 heroD.setAttribute('class','hero');
 contentD.setAttribute('class','content');
 titleD.setAttribute('class','title');
 metaD.setAttribute('class','meta');
 descriptionD.setAttribute('class','description')
 excerptD.setAttribute('class','excerpt'); 
 readMore.setAttribute('class','readbtn');
 closebtn.setAttribute('class','closebtn');
 const storeurl = storedata.heroimage.trim();

 if (storeurl.startsWith('https') && storeurl !=='') {
  imgh.setAttribute('src', `${storedata.heroimage.trim()}`);
  heroD.style.height='450px';
  imgh.style.height ='430px';
 } 

 
 titleD.innerText = storedata.title.trim(); 
 metaD.innerText = `${storedata.authorname.trim()} | ${storedata.postdate}`; 
 descriptionD.innerText = `${storedata.description}`;
 excerptD.innerHTML = storedata.postdata; 

 heroD.appendChild(imgh);
 contentD.appendChild(titleD);
 contentD.appendChild(metaD);
 contentD.appendChild(descriptionD)
 contentD.appendChild(excerptD); 
 themeD.appendChild(closebtn);
 themeD.appendChild(heroD);
 themeD.appendChild(contentD);
 themeD.appendChild(readMore);
 descriptionD.style.width="100%";
 themeD.style.height = "auto";
 themeD.style.width ="42%"; 
 heroD.style.height = "220px";
 heroD.style.width ="100%"
 imgh.style.width ="100%";
 imgh.style.height ='200px'
 switch(storedata.categories){
  case "technology":
    technologyD.appendChild(themeD);
   
    
    break;
  case "health-fitness":
    healthfitnessD.appendChild(themeD);
   
   
    break;
  case "travel":
    travelD.appendChild(themeD);
    
  
    break;
  case "education-learning":
    edulearnyD.appendChild(themeD);
  
    break;
  case "lifestyle":
    lifestyleyD.appendChild(themeD);
   
    break;
  case "finance":
    financeD.appendChild(themeD);
    
    break;
  case "entertainment":
    entertainmentD.appendChild(themeD);
    
    break;
  case "food":
   foodD.appendChild(themeD);
  
    break; 
  default:
    console.log("no categories found!");
 } 
 let clone = themeD.cloneNode(true);
 

  readMore.addEventListener('click',(event)=>{
    descriptionD.style.display ='none';
    excerptD.style.display = 'block'; 
    readMore.style.display = 'none';
    closebtn.style.display ='block';
    themeD.style.height = "auto";
    themeD.style.width ="100%"; 
    heroD.style.height = "400px";
    heroD.style.width ="100%"
    imgh.style.width ="100%";
    imgh.style.height ='380px' 
    const categoryP = readMore.parentNode.parentNode;
    childernP = categoryP.children;
   
    // console.log(childernP);
    Array.from(childernP).forEach((val)=>{
      val.style.display = "none";
      
    })
  readMore.parentNode.style.display ='block';
 });
 closebtn.addEventListener('click',(Event)=>{
  excerptD.style.display ='none';
  closebtn.style.display ='none';
  readMore.style.display = 'inline-block';
  descriptionD.style.display ='block';
  themeD.style.height = "auto";
  descriptionD.style.width ="100%"





  themeD.style.width ="42%"; 
  heroD.style.height = "220px";
  heroD.style.width ="100%"
  imgh.style.width ="100%";
  imgh.style.height ='200px';

  const categoryP = readMore.parentNode.parentNode;
  childernP = categoryP.children;
  // console.log(childernP);
  Array.from(childernP).forEach((val)=>{
    val.style.display = "block";
  })
 }); 
 


 /////////////////
 clone.children[3].addEventListener('click',(event)=>{
  clone.children[2].children[2].style.display ='none';
  clone.children[2].children[3].style.display = 'block'; 
  clone.children[3].style.display = 'none';
  clone.children[0].style.display ='block';
 clone.style.height = "auto";
 clone.style.width ="100%"; 
  clone.children[1].style.height = "400px";
  clone.children[1].style.width ="100%"
  clone.children[1].children[0].style.width ="100%";
  clone.children[1].children[0].style.height ='380px' 
  const categoryP =clone.children[3].parentNode.parentNode;
  childernP = categoryP.children;
  console.log(clone.children[2].children)
  
  Array.from(childernP).forEach((val)=>{
    val.style.display = "none";
    
  })
  clone.children[3].parentNode.style.display ='block';
});
clone.children[0].addEventListener('click',(Event)=>{
  clone.children[2].children[3].style.display ='none';
clone.children[0].style.display ='none';
clone.children[3].style.display = 'inline-block';
clone.children[2].children[2].style.display ='block';
clone.style.height = "auto";
clone.children[2].children[2].style.width ="100%"
clone.style.width ="42%"; 
clone.children[1].style.height = "220px";
clone.children[1].style.width ="100%"
clone.children[1].children[0].style.width ="100%";
clone.children[1].children[0].style.height ='200px';

const categoryP = clone.children[3].parentNode.parentNode;
childernP = categoryP.children;

Array.from(childernP).forEach((val)=>{
  val.style.display = "block";
})
}); 

 AllD.appendChild(clone);
}  


const classCategories = document.querySelectorAll('.nav-category'); 
classCategories.forEach((category,index)=>{
   category.addEventListener('click',(event)=>{
    const items = document.querySelectorAll('.category-item');
     items.forEach((container,index2)=>{
      if(index != index2){
      container.style.display = 'none';
       
      } 
      
     }) 
    classCategories.forEach((catagory)=>{
        catagory.style.color = '#111';
        catagory.style.fontWeight ="normal";
      })
     items[index].style.display ="flex";
     event.target.style.color = '#A83232';
     event.target.style.fontWeight = "bold";
   });
})

const AllD  = document.querySelector('.All');
const technologyD = document.querySelector('.technology');
const healthfitnessD = document.querySelector('.health-fitness');
const travelD = document.querySelector('.travel');
const edulearnyD = document.querySelector('.education-learning');
const lifestyleyD = document.querySelector('.lifestyle');
const financeD = document.querySelector('.finance');
const entertainmentD = document.querySelector('.entertainment');
const foodD = document.querySelector('.food');
const CategoryArr = [AllD,technologyD,healthfitnessD,travelD,edulearnyD,lifestyleyD,financeD,entertainmentD,foodD];
for (const category of CategoryArr) {
 if(category.innerHTML.trim() === ''){
   category.innerHTML='<div class="nopost">NO Post Yet !</div>';
 }
}












