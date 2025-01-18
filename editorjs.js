
// login functionality
const myblog =  document.querySelector('.myblog');
const logcontainer =document.querySelector('.login');
const login = document.querySelector('#sign_in');
const AutherE = 'blogman@gmail.com';
const password ='blog123';
// console.log(logcontainer.children);

login.addEventListener('click',()=>{
  let userE = logcontainer.children[1].value;
let pswrd = logcontainer.children[2].value;
  if(userE == AutherE && password == pswrd){
  
    logcontainer.classList.add('hide'); 
    document.querySelector('header').style.display = 'block';
    document.querySelector('footer').style.display = 'block';
    document.querySelector('.meta-content').style.display = 'flex'; 
    document.querySelector('.navArrows').style.display ='block';
  }else{
    myblog.classList.remove('show');
    logcontainer.classList.remove('hide');
    document.querySelector('.alert').innerText = 'Incorrect Email or Password !';
  }
})
document.addEventListener("DOMContentLoaded", () => {
  const noteInput = document.getElementById("note-input");
  const addNoteBtn = document.getElementById("add-note");
  const notesList = document.getElementById("notes-list");

  // Load notes from localStorage
  const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

  function renderNotes() {
    notesList.innerHTML = ""; // Clear existing notes
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

  // Event Listeners
  addNoteBtn.addEventListener("click", addNote);
  notesList.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-note")) {
      const index = e.target.dataset.index;
      deleteNote(index);
    }
  });

  // Initial Render
  renderNotes();
});
//open notepad function
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
function colorsetteropen(){
    document.querySelector('.colordisplay').style.display = 'block';
    document.querySelector('.meta-content').style.display = 'none';
} 
function colorsetterclose(){
  document.querySelector('.colordisplay').style.display = 'none';
    document.querySelector('.meta-content').style.display = 'flex';
}
//change theme img function

function changeThemeImage(value){ 
  
const themeimg = document.querySelector('.diplayTheme');
    switch(value.trim()){ 
      case 'classic-minimalist':
      themeimg.src = './Theme1.png';
      break;
      case 'nature-inspired':
        themeimg.src = './Theme2.png';
        break;
       case 'modern-chic':
          themeimg.src = './Theme3.png';
          break;
      case 'tech-savvy' : 
        themeimg.src = './Theme4.png';
        break;
      case 'Light':
        themeimg.src = './Theme5.png';
        break;
        case 'Vintage':
        themeimg.src = './Theme6.png';
        break;
        case 'Retro':
        themeimg.src = './Theme7.png';
        break; 
        case 'Summer':
        themeimg.src = './Theme8.png';
        break;
      default:
        alert('Theme img isnot available!');
    }
}
function goToeditor(){ 
 let title = document.querySelector('.title').value;
 let author = document.querySelector('.author-name').value;
 let notifi = document.querySelector('.notifi');
 const categories = document.querySelector('#blog-categories');
 if(author.trim() === '' ){
  notifi.innerHTML = 'Author name are required !';
  notifi.style.display = 'block'; 
   
 }else if(categories.value === ''){ 
  notifi.innerHTML ='Select an appropriate categorie';
  notifi.style.display = 'block';
 }else if(title.trim() === ''){
  notifi.innerHTML = 'Title  are required !';
  notifi.style.display = 'block'; 
 }else{
  document.querySelector('.main_content').style.display = 'block'; 
  document.querySelector('.meta-content').style.display ='none'; 
 }
 setTimeout(()=>{
  notifi.innerHTML = '';
  notifi.style.display = 'none'; 
},5000) 
  }


  
function gotoMy_content(){
  document.querySelector('.meta-content').style.display = 'none';
  document.querySelector('.main_content').style.display = 'none';
  document.querySelector('.my_content').style.display = 'block';
  document.querySelector('.colordisplay').style.display = 'none'
}

//for adding new btn
function gotometaData(){
  const ThemeBcolor =  document.querySelector('#Thbgcolor');
const ContentAbcolor = document.querySelector('#Cbgcolor');
 const TitleFcolor = document.querySelector('#Tfcolor');
const Titlebgcolor = document.querySelector('#Tbgcolor');
 const MetaFcolor = document.querySelector('#Mfcolor');
const Metabgcolor =  document.querySelector('#Mbgcolor');
 const PostCFcolor = document.querySelector('#Pfcolor');
const postCbgcolor =  document.querySelector('#Pbgcolor');
const Hbgcolor = document.querySelector('#Hbgcolor');
const description = document.querySelector('.description');
const categories = document.querySelector('#blog-categories');
Hbgcolor.value='';
   document.querySelector('.heroimage').value ='';
   document.querySelector('.title').value = '';
   document.querySelector('.scolor').value = ''; 
    document.querySelector('.author-name').value = '';
    document.querySelector('#theme').value ='classic-minimalist';
    document.querySelector('.diplayTheme').src = './Theme1.png';
    ThemeBcolor.value = '';
    ContentAbcolor.value = '';
    TitleFcolor.value = '';
    Titlebgcolor.value = '';
    MetaFcolor.value = '';
    Metabgcolor.value = '';
    PostCFcolor.value = '';
    postCbgcolor.value = '';  
    description.value = '';
    categories.value = '';
    document.querySelector('.editor').innerHTML= '';
   document.querySelector('.my_content').style.display = 'none';
   document.querySelector('.meta-content').style.display = 'flex'; 
   document.querySelector(".post_btn").style.display = 'block';
   document.querySelector(".update_btn").style.display = 'none';
}

//responsive hamburger funxtions
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
})

//toolbars functions
function formatText(command) {
  document.execCommand(command, false, null);
}

// Function to apply strike-through effect
function strikeThroughText() {
  document.execCommand('strikeThrough', false, null);
}

// Function to apply subscript
function subscriptText() {
  document.execCommand('subscript', false, null);
}

// Function to apply superscript
function superscriptText() {
  document.execCommand('superscript', false, null);
}

// Function to change font size
function changeFontSize(size) {
      // Use execCommand to change the font size
      document.execCommand('fontSize', false, size);
}
// Function to highlight text
function highlightText() {
  document.execCommand('hiliteColor', false, 'yellow');
}

// Function to change text alignment
function changeTextAlign(align) {
  document.execCommand(`justify${align}`, false, null);
}

// Function to insert unordered list
function insertUnorderedList() {
  document.execCommand('insertUnorderedList', false, null);
}

// Function to insert ordered list
function insertOrderedList() {
  document.execCommand('insertOrderedList', false, null);
}

// Function to insert a hyperlink
function insertLink() {
  const url = prompt('Enter the URL');
  if (url) {
    document.execCommand('createLink', false, url);
  }
}

// Function to insert an image
function insertImage() {
  const url = prompt('Enter the image URL');
  if (url) {
    document.execCommand('insertImage', false, url);
  }
}

// Function to change font family
function changeFontFamily(font) {
  document.execCommand('fontName', false, font);
}

// Function to toggle dark mode
function toggleDarkMode() {
  
  document.body.classList.toggle('dark-mode');
  const modeButton = document.querySelector('#mode');
    if(modeButton.innerHTML == '<i class="fa-solid fa-moon"></i>'){
      modeButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    
    }else{
      modeButton.innerHTML =  '<i class="fa-solid fa-moon"></i>';
    
    }
 
}

// Function to change text color
function changeTextColor(color) {
  document.execCommand('foreColor', false, color);
}

// Function to change background color
function changeBackgroundColor(color) {
  document.execCommand('backColor', false, color);
} 
//My content or mypost table insertion 
const key = 'blogdata';
let index;
if(!localStorage.getItem(key)){
  localStorage.setItem(key,JSON.stringify([])) || [];
  index = 0;
}else{
  console.log("Data Alearedy exist in local Storage");
 
  const storeData = JSON.parse(localStorage.getItem(key));
  index = storeData.length; 
  update_Table(storeData); 
 
 
}  


function update_Table(storeData){
  //table update on referesh 
  const  table = document.querySelector('table');
  table.innerHTML = '';
  storeData.forEach((item, index) => {
    table.innerHTML += `<tr> 
      <td><span class='count'>${index + 1}</span></td>
      <td class='col2'>${item.title}</td>
      <td><button class='delete'><i class="fa-solid fa-trash"></i></button></td>
      <td><button class='update'><i class="fa-solid fa-pen-to-square"></i></button></td>        
    </tr>`;  
    
  });  
  for(i = 0; i< storeData.length;i++){
    addUpdateEvents(i);
    adddeleteEvents(i);
  } 
  
}   
function adddeleteEvents(curr){
    const delete_btn = document.querySelectorAll('.delete');
  
      delete_btn[curr].addEventListener('click',(e)=>{
         let indextoDelete = curr;
         deletepost(indextoDelete);
      });
}
function deletepost(indextoDelete){
    let storeData = JSON.parse(localStorage.getItem(key));
    storeData.splice(indextoDelete,1);
    localStorage.setItem(key,JSON.stringify(storeData));
    update_Table(storeData);  

   const notifi = document.querySelector('.notifi');
   notifi.innerHTML = 'Post deleted sucesfully';
   notifi.classList.add('show');
    setTimeout(()=>{
      notifi.innerHTML ='';
      notifi.classList.remove('show');
    },5000);
    index--;
}

let storeData = undefined;
function insertTable(newData){
  const  table = document.querySelector('table'); 
  const newRow = document.createElement('tr'); 
  newRow.innerHTML = `<td><span>${index + 1}</span></td>
    <td class='col2'>${newData[index].title}</td>
    <td><button  class='delete'><i class="fa-solid fa-trash"></i></button></td>
    <td><button  class='update'><i class="fa-solid fa-pen-to-square"></i></button></td>`;
   
  // Append new row to table
  table.appendChild(newRow); 
  let curr = Number(Array.from(table.rows).indexOf(newRow)); 
  // console.log(curr)
  console.log("added")
  addUpdateEvents(curr); 
  adddeleteEvents(curr);
}
const post_btn = document.querySelector('#post_btn'); 
post_btn.addEventListener('click',()=>{
  let postdata = document.querySelector('.editor');
  const title = document.querySelector('#title'); 
  const notifi = document.querySelector('.notifi');
  const heroimage = document.querySelector('.heroimage');
const ThemeBcolor =  document.querySelector('#Thbgcolor');
const ContentAbcolor = document.querySelector('#Cbgcolor');
 const TitleFcolor = document.querySelector('#Tfcolor');
const Titlebgcolor = document.querySelector('#Tbgcolor');
 const MetaFcolor = document.querySelector('#Mfcolor');
const Metabgcolor =  document.querySelector('#Mbgcolor');
 const PostCFcolor = document.querySelector('#Pfcolor');
const postCbgcolor =  document.querySelector('#Pbgcolor');
const  Hbgcolor = document.querySelector('#Hbgcolor');
   const authorname = document.querySelector('.author-name');
  const theme = document.querySelector('#theme'); 
const description = document.querySelector('.description');
const categories = document.querySelector('#blog-categories');
  const postdate = new Date();

   console.log(title.value);
 if(title.value.trim() === ''){
  notifi.innerHTML = "Title is Required";
  notifi.classList.add('show');
  setTimeout(()=>{
    notifi.innerHTML ='';
    notifi.classList.remove('show');
  },5000);

  return;
 }else if(postdata.innerHTML.trim() === ''){
  notifi.innerHTML = "Post Data is Required !";
  notifi.classList.add('show');
  setTimeout(()=>{
    notifi.innerHTML ='';
    notifi.classList.remove('show');
  },5000);

  return;
 }
   storeData = JSON.parse(localStorage.getItem(key))
   storeData.push({
    title:`${title.value}`,
    authorname:`${authorname.value}`,
    postdata : `${postdata.innerHTML}`,
    heroimage:`${heroimage.value}`,
    theme:`${theme.value}`,
    postdate:`${postdate.toISOString().split('T')[0]} ${postdate.getHours()} - ${postdate.getMinutes()} - ${postdate.getSeconds()}`,
    ThemeBcolor: `${ThemeBcolor.value}`,
    ContentAbcolor:`${ContentAbcolor.value}`,
    Hbgcolor:`${Hbgcolor.value}`,
    TitleFcolor:`${TitleFcolor.value}`,
    Titlebgcolor:`${Titlebgcolor.value}`,
    MetaFcolor : `${MetaFcolor.value}`,
    Metabgcolor :`${Metabgcolor.value}`,
    PostCFcolor :`${PostCFcolor.value}`,
    postCbgcolor : `${postCbgcolor.value}`, 
    description:`${description.value}`,
    categories:`${categories.value}`,
   } );
   localStorage.setItem(key,JSON.stringify(storeData));
   insertTable(storeData);
   
          title.value="";
                  postdata.innerHTML=''; 
       
                index++; 
       notifi.innerText = 'Posted Succesfully';
          notifi.classList.add('show');
                setTimeout(()=>{
                  notifi.innerText ='';
               notifi.classList.remove('show');  
                },5000);
  document.querySelector('.my_content').style.display = 'block'; 
  document.querySelector('.main_content').style.display = 'none';
       
}); 
  
function addUpdateEvents(curr){
  const updateBtn = document.querySelectorAll('.update');
   
      updateBtn[curr].addEventListener('click',()=>{ 
       let storeData = JSON.parse(localStorage.getItem(key));
        const title = document.querySelector('#title'); 
        let postdata = document.querySelector('.editor');
        const heroimage = document.querySelector('.heroimage');
      
         const authorname = document.querySelector('.author-name');
        const theme = document.querySelector('#theme');
        const updateNow = document.querySelector('.update_btn');
        const postNow = document.querySelector('.post_btn');
           const ThemeBcolor =  document.querySelector('#Thbgcolor');
          const ContentAbcolor = document.querySelector('#Cbgcolor');
          const  Hbgcolor = document.querySelector('#Hbgcolor');
           const TitleFcolor = document.querySelector('#Tfcolor');
const Titlebgcolor = document.querySelector('#Tbgcolor');
 const MetaFcolor = document.querySelector('#Mfcolor');
const Metabgcolor =  document.querySelector('#Mbgcolor');
 const PostCFcolor = document.querySelector('#Pfcolor');
const postCbgcolor =  document.querySelector('#Pbgcolor');
const description = document.querySelector('.description');
const categories = document.querySelector('#blog-categories');
updateNow.style.display='block';
       postNow.style.display='none';
       title.value = storeData[curr].title;  
       postdata.innerHTML = storeData[curr].postdata;
       authorname.value = storeData[curr].authorname;
       heroimage.value = storeData[curr].heroimage;
       theme.value = storeData[curr].theme;
       ThemeBcolor.value = storeData[curr].ThemeBcolor;
       ContentAbcolor.value = storeData[curr].ContentAbcolor; 
       Hbgcolor.value = storeData[curr].Hbgcolor;
       TitleFcolor.value = storeData[curr].TitleFcolor;
       Titlebgcolor.value = storeData[curr].Titlebgcolor;
       MetaFcolor.value = storeData[curr].MetaFcolor;
       Metabgcolor.value = storeData[curr].Metabgcolor;
       PostCFcolor.value = storeData[curr].PostCFcolor;
       postCbgcolor.value = storeData[curr].postCbgcolor;
       description.value = storeData[curr].description;
       categories.value = storeData[curr].categories;
       
       document.querySelector('.my_content').style.display = 'none';
      //  document.querySelector('.main_content').style.display = 'block'; 
       document.querySelector('.meta-content').style.display = 'flex';
      
      
      addEventonupdateNow(updateNow,postNow,curr,storeData,title,postdata,authorname,heroimage,theme,ThemeBcolor,ContentAbcolor,Hbgcolor,TitleFcolor,Titlebgcolor,MetaFcolor,Metabgcolor,PostCFcolor,postCbgcolor,description,categories);

  });

}
function addEventonupdateNow(updateNow,postNow,curr,storeData,title,postdata,authorname,heroimage,theme,ThemeBcolor,ContentAbcolor,Hbgcolor,TitleFcolor,Titlebgcolor,MetaFcolor,Metabgcolor,PostCFcolor,postCbgcolor,description,categories){
      updateNow.addEventListener('click',()=>{
        if (title.value.trim() !== '' && postdata.innerHTML.trim() !== '') {
        storeData[curr].title = title.value;
        storeData[curr].postdata = postdata.innerHTML; 
        storeData[curr].authorname = authorname.value;
        storeData[curr].heroimage = heroimage.value;
        storeData[curr].theme = theme.value;
        storeData[curr].ThemeBcolor =ThemeBcolor.value;
        storeData[curr].ContentAbcolor = ContentAbcolor.value;
        storeData[curr].Hbgcolor = Hbgcolor.value;
        storeData[curr].TitleFcolor =TitleFcolor.value;
        storeData[curr].Titlebgcolor = Titlebgcolor.value; 
        storeData[curr].MetaFcolor = MetaFcolor.value;
        storeData[curr].Metabgcolor = Metabgcolor.value;
        storeData[curr].PostCFcolor = PostCFcolor.value;
        storeData[curr].postCbgcolor = postCbgcolor.value;
        storeData[curr].description = description.value;
        storeData[curr].categories = categories.value;
       localStorage.setItem(key,JSON.stringify(storeData));
        update_Table(storeData); 
      const notifi =  document.querySelector('.notifi'); 
      notifi.innerText = 'Post Updated Succesfully';
         notifi.classList.add('show');
        setTimeout(()=>{
          notifi.innerText ='';
          notifi.classList.remove('show');
        },5000);
        postNow.style.display='block';
        updateNow.style.display='none';
        document.querySelector('.my_content').style.display = 'block'; 
  document.querySelector('.main_content').style.display = 'none';
        setTimeout(()=>{
          title.value = '';
          postdata.innerHTML = '';
          authorname.value = '';
          heroimage.value = '';
          theme.value = 'classic-minimalist';
          ThemeBcolor.value = ''; 
          Hbgcolor.value = '';
          ContentAbcolor.value = '';
          TitleFcolor.value = '';
          Titlebgcolor.value = '';
          MetaFcolor.value = '';
          Metabgcolor.value = '';
          PostCFcolor.value = '';
          postCbgcolor.value = '';  
          description.value = '';
          categories.value = '';
          document.querySelector('.scolor').value = ''; 
        },1000);
      }else{
        alert('title and post data cant be empty');
      }
    })
    } 
// slecting color 
const scolor = document.querySelector('.scolor'); 
const pcolor = document.querySelectorAll('.pcolor'); 
pcolor.forEach((Cin)=>{
  
  Cin.addEventListener('focus',()=>{
     Cin.value = scolor.value;
  })
})
