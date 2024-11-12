

const myLibrary = [];
const bookImg=document.querySelector(".bookImg");

const b_name=document.getElementById("book_name");
const auth_name=document.getElementById("auther_name");
const num_pages=document.getElementById("num_pages");
const is_read=document.getElementById("is_read");
const save_button =document.querySelector("#submit_button");
const mainContainer =document.querySelector(".main_container");


function Book(book_img,book_name,auther,num_pages,is_read){
     // the constructor...
     this.book_img=book_img;
    this.book_name=book_name;
    this.auther=auther;
    this.num_pages=num_pages;
    this.is_read=is_read;
    this.giveInfo = function(){
        return(this.book_name+" BY "+this.auther+" Contain "+this.num_pages+" Pages");
     
    }

  }
  const Walk_into_theShadow=new Book("http://127.0.0.1:5500/booksImage/1003w-vAt8PH1CmqQ.webp","Walk into theShadow","Estelly Darcy",50,1);
  myLibrary.push(Walk_into_theShadow);

  
 
save_button.addEventListener('click',addBookToLibrary);

function addBookToLibrary() {
  // do stuff here
  let newBook=new Book(bookImg,b_name.value,auth_name.value,num_pages.value, is_read.value,);
   //console.log(newBook);
   myLibrary.push(newBook);
   //console.log(myLibrary);
   return myLibrary;

}
function display(index,book_img,book_name,book,auther,num_pages,is_read){
  const bookCard=document.createElement("div");
  bookCard.classList.add("mainBook_card");
  const imgContainer=document.createElement("div");
  imgContainer.classList.add("imgContainer")
  const bookNameContainer=document.createElement("div");
  bookNameContainer.classList.add("bookNameContainer");

  const autherNameContainer=document.createElement("div");
  autherNameContainer.classList.add("autherNameContainer");
  const numPagesContainer=document.createElement("div");
  numPagesContainer.classList.add("numPagesContainer");
  const image=document.createElement('img');
  image.src="/booksImage/b1";
  mainContainer.appendChild(bookCard);
   image.innerHTML=myLibrary[index].book_img;
  imgContainer.appendChild(image);
  bookCard.appendChild(imgContainer)
  bookNameContainer.innerHTML=myLibrary[index].book_name;
  bookCard.appendChild(bookNameContainer);
  autherNameContainer.innerHTML=myLibrary[index].auther;
  bookCard.appendChild(autherNameContainer);
  numPagesContainer.innerHTML=myLibrary[index].num_pages;
  bookCard.appendChild(numPagesContainer);
  
  
}
function displayAll(){
  for(let i=0;i<myLibrary.length;i++){
    display(i,myLibrary[i].book_img,myLibrary[i].book_name,myLibrary[i].auther,myLibrary[i].num_pages);
  

  


  }
}
window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
  console.log(event);
  displayAll();
});

 
const add =document.querySelector(".add");
add.addEventListener('onclick',function(){
  const addBookForm=document.querySelector(".addBookForm");
  addBookForm.style.display="block";
})