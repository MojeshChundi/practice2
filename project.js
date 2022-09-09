var form=document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter=document.getElementById('filter');



//form submit event
form.addEventListener('submit',addItem);
addItem
function addItem(e){

    e.preventDefault();

    // Get input value

    var newItem=document.getElementById('item').value;

    // create new element
     var li=document.createElement('li');
     //ADD class
     li.className='list-group-item';
     // add text node with input value
     li.appendChild(document.createTextNode(newItem));
     // create delete button element
     var deleteBtn=document.createElement('button');
    // add class to delete button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    // append text node
    deleteBtn.appendChild(document.createTextNode('x'));
    // append button to li
    li.appendChild(deleteBtn);
    // append li to list
     itemList.appendChild(li);
     var edit=document.createElement('button');
    // add class to delete button
    edit.className='btn btn-danger btn-sm float-right delete';
    // append text node
    edit.appendChild(document.createTextNode(' edit'));
    // append button to li
    li.appendChild(edit);
    // append li to list
     itemList.appendChild(li);

}
// delete event
itemList.addEventListener('click',removeItem)
//edit event
//filter event
filter.addEventListener('keyup',filterItems)


function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you Sure?')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
// filter items
function filterItems(e){

// convert text to lower case
var text=e.target.value.toLowerCase();
// get lis
var items=itemList.getElementsByTagName('li');
// convert to an array
Array.from(items).forEach(function(item){
    var itemName=item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text)!= -1){
        item.style.display='block';
    }else{
        item.style.display='none';
    }
})
}