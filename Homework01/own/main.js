const input = document.getElementById("todo-input");
var todoListData = [];
// setAttribute
var li = document.createElement("li");
var wrapper = document.createElement("div");
var checkbox = document.createElement("input");
var label = document.createElement("label");
var text = document.createElement("h1");
var image = document.createElement("img");
var all = document.getElementById("all");
var active = document.getElementById("active");
var completed = document.getElementById("completed");
var notcompleted_num = 0;
var completed_array = [];
var clear = document.getElementById("clear");
var state = 0;

input.addEventListener('keyup', event => {
    if (event.keyCode === 13 && event.target.value !== '') {   
        state = 0;
        // create element in todo list: get its element
        var list = document.getElementById("todo-list");
        // clear the todo list
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }

        // setAttributes
        var li = document.createElement("li");
        var newItem = { node: li, isComplete: false };
        var wrapper = document.createElement("div");
        var checkbox = document.createElement("input");
        var label = document.createElement("label");
        var text = document.createElement("h1");
        var image = document.createElement("img");
        li.setAttribute("class", "todo-app__item");
        checkbox.setAttribute("id", todoListData.length);
        checkbox.setAttribute("type", "checkbox");

        // completed: line-through
        label.addEventListener('mouseup', function(){
            if(newItem.isComplete === false)
            {
                newItem.isComplete = true;
                text.style["textDecoration"] = "line-through";
                text.style["opacity"] = 0.5;
                notcompleted_num -= 1;
                todoCount.innerText = notcompleted_num + " left";
                completed_array.push(newItem);
            }
            else
            {
                newItem.isComplete = false;
                text.style["textDecoration"] = "";
                text.style["opacity"] = 1;
                notcompleted_num += 1;
                todoCount.innerText = notcompleted_num + " left";
                completed_array.splice(completed_array.indexOf(newItem), 1);
                console.log(completed_array);
            }
        });

        label.setAttribute("for", todoListData.length);
        wrapper.appendChild(checkbox);
        wrapper.setAttribute("class", "todo-app__checkbox");
        wrapper.appendChild(label);

        text.appendChild(document.createTextNode(event.target.value));
        image.setAttribute("src", "./img/x.png");
        image.setAttribute("class", "todo-app__item-x");

        // delete: 
        image.addEventListener('mouseup', function(){
            console.log('delete');
            // notcompleted_num -= 1;
        });
        
        li.appendChild(wrapper);
        li.appendChild(text);
        li.appendChild(image);

        // display: add the new input into the array and display
        todoListData.push(newItem);

        notcompleted_num = todoListData.filter(ele => !ele.isComplete).length
        todoListData.map(ele => list.appendChild(ele.node));

        // update data
        document.getElementById("todo-list").style = "list-style-type:none";
        input.value = "";

        // update count
        var todoCount = document.getElementById("todo-total");
        todoCount.innerText = notcompleted_num + " left"; 
    }
});

// filter: all
all.addEventListener('mouseup', function(){
    state = 0;
    // create element in todo list
    var list = document.getElementById("todo-list");
    // clear the original todo list
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    // display
    todoListData.map(ele => list.appendChild(ele.node));

});

// filter: active
active.addEventListener('mouseup', function(){
    state = 1;
    // create element in todo list
    var list = document.getElementById("todo-list");
    // clear the original todo list
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    // display
    var filter_active = todoListData.filter(ele => !ele.isComplete);
    filter_active.map(ele => list.appendChild(ele.node));
});

// filter: completed
completed.addEventListener('mouseup', function(){
    state = 2;
    // create element in todo list
    var list = document.getElementById("todo-list");
    // clear the original todo list
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    // display
    var filter_completed = todoListData.filter(ele => ele.isComplete);
    filter_completed.map(ele => list.appendChild(ele.node));
});

// clear completed
clear.addEventListener('mouseup', function(){
    completed_array.map(ele => todoListData.splice(todoListData.indexOf(ele), 1));
    completed_array = [];
    // create element in todo list
    var list = document.getElementById("todo-list");
    // clear the original todo list
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    // display
    if(state === 0){
        todoListData.map(ele => list.appendChild(ele.node));
    }
    if(state === 1){
        var filter_active = todoListData.filter(ele => !ele.isComplete);
        filter_active.map(ele => list.appendChild(ele.node));
    }
    if(state === 2){
        var filter_completed = todoListData.filter(ele => ele.isComplete);
        filter_completed.map(ele => list.appendChild(ele.node));
    }
});


