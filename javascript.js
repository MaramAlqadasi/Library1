

const myLibrary = [];

const b_name=document.getElementById("book_name");
const auth_name=document.getElementById("auther_name");
const num_pages=document.getElementById("num_pages");
const is_read=document.getElementById("is_read");
const save_button =document.querySelector("#submit_button");


function Book(book_name,auther,num_pages,is_read){
     // the constructor...
    this.book_name=book_name;
    this.auther=auther;
    this.num_pages=num_pages;
    this.is_read=is_read;
    this.giveInfo = function(){
        return(this.book_name+" BY "+this.auther+" Contain "+this.num_pages+" Pages");
     
    }

  }
  
  
  function addNewBook(){
  
   let newBook=new Book(b_name.value,auth_name.value,num_pages.value, is_read.value,);
   console.log(newBook);
   myLibrary.push(newBook);
   console.log(myLibrary);
   return myLibrary;
  }
save_button.addEventListener('click',addNewBook);

function addBookToLibrary() {
  // do stuff here

}