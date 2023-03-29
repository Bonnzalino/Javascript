// const gJavascript = document.querySelector('#reading-list li:nth-child(2) .name');

// gJavascript.innerHTML = 'Advanced JavaScript';

// const hJavascript = document.querySelector('#reading-list .title');

// hJavascript.innerHTML = 'Let Fix it!';

// const iJavascript = document.querySelector('#wrapper .title');

// iJavascript.innerHTML = 'Let Burn it!';

// const readingList = document.querySelectorAll('#reading-list li .name');
// readingList.forEach(function(list) {
//    list.textContent =  'Book Title : ' + list.textContent;
// })


//Get the Add button and attach an event listener to it
// const addButton = document.querySelector("#add-list button");
// addButton.addEventListener("click", function() {
//     event.preventDefault();

//   // Get the text input field and its value
//   const inputField = document.querySelector("#add-list input");
//   const listItemName = inputField.value;

//   // Create a new <li> element with the entered text content
//   const newListItem = document.createElement("li");
//   const listItemText = document.createTextNode(listItemName);
//   newListItem.appendChild(listItemText);

//   // Add a delete button to the new <li> element
//   const deleteButton = document.createElement("span");
//   deleteButton.classList.add("delete");
//   deleteButton.textContent = "delete";
//   newListItem.appendChild(deleteButton);

//   // Append the new <li> element to the <ul> element with id "reading-list"
//   const readingList = document.querySelector("#reading-list ul");
//   readingList.appendChild(newListItem);

//   // Clear the input field
//   inputField.value = "";
// });

// //better way for element.addEventListener()
// const list = document.querySelector('#reading-list ul');



//+++++++++++++++++ Group H++++++++++++++++++++++++
// //better way for element.addEventListener()
// const list = document.querySelector('#reading-list ul');

// // //Interacting with Form -- add readinglist
// const addForm = document.forms['add-list'];
// addForm.addEventListener('submit',function(e){
//     e.preventDefault(); // prevent from refresh
//     const value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box

   
// // //create element
// const childList = document.createElement('li');
// const spanList1 = document.createElement('span');
// const spanList2 = document.createElement('span');

// // //add content
// spanList1.innerHTML = value;  
// spanList2.innerHTML = 'delete';  

// // //add classes
// spanList1.classList.add('name');
// spanList2.classList.add('delete');


// // //append to DOM
// childList.appendChild(spanList1);
// childList.appendChild(spanList2);
// list.appendChild(childList);



//++++++++++++++++ LAK DONOVAN +++++++++++++++++++
const list = document.querySelector('#reading-list ul');
list.addEventListener('click',function(e){
    if (e.target.className == 'delete'){
        const li =e.target.parentElement;
        list.removeChild(li);
    }
})   

// //Interacting with Form -- add readinglist
const addForm = document.forms['add-list'];
addForm.addEventListener('submit',function(e){
    e.preventDefault(); // prevent from refresh
    const value = addForm.querySelector('input[type="text"]').value; //add new reading list in the text box
   // console.log(value);

// //create element
const li = document.createElement('li');
const ReadingListName = document.createElement('span');
const deleteBtn = document.createElement('span');

// //add content
deleteBtn.textContent = 'delete';
ReadingListName.textContent = value; 

// //add classes
ReadingListName.classList.add('name');
deleteBtn.classList.add('delete');


// //append to DOM
li.appendChild(ReadingListName);
li.appendChild(deleteBtn);
list.appendChild(li); //create but not context 

});
