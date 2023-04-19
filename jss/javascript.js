//Global variables
var tot = 100;

// JS Functions

function SetUserType(type){
    if(type){
        document.getElementsByClassName("button-add-section")[0].style.display = "none";
        document.getElementsByClassName("button-plus")[0].style.display        = "none";
    }
}
function ExpandSectionModal(flag){
    if(flag)
        document.getElementById("modal-add-section").style = "display: block;";
    else
        document.getElementById("modal-add-section").style = "display: none;";
}

function AddSection(){
    if(document.getElementById("section-name").value != ""){
        document.getElementById("main-menu-links").innerHTML += "<li>" + document.getElementById("section-name").value + "</li>";
        document.getElementById("section-name").value = "";
        ExpandSectionModal(0);
    }
}
function ExpandTaskModal(flag){
    if(flag)
        document.getElementById("modal-task").style = "display: block;";
    else
        document.getElementById("modal-task").style = "display: none;";
}
function make_card(title, content, links){
    let k = `<div style="float:right; margin-right: 12px" onclick="RemoveCard()">
                <i class="glyphicon glyphicon-remove"></i>
            </div>
            <div style="float:right; margin-right: 18px" onclick="ExpandTaskModal(1)">
                <i class="glyphicon glyphicon-pencil"></i>
            </div>`;
    let l = "";
    for(let i = 0; i < links.length; ++i){ l = l + '<li><a href="#">' + links[i] + '</a></li>'}
    let s = `<table class="my-col-s-12 my-col-m-12 my-col-t-4  my-col-d-3 card"><th>${title}${k}</th><tr><td><p>${content}</p></td></tr><tr><td><ul>${l}</ul></tr></tr></table>`;
    return s;
}
function RemoveCard(){
    tot -= 1;
    gen_card();
}
function gen_card(){
    if(tot){
        document.getElementById("task-empty").style.display = "none";
    }
    let titles = [];
    let links  = [];
    for(let i = 0; i < tot; i++){
        links.push([["Link 1", "Link 2", "Link 3"]]);
        titles.push('Title ' + i);
    }
    let cards = "";
    let txt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio itaque totam officiis omnis ullam inventore expedita modi dolore sapiente magni culpa, at, veritatis, blanditiis odit consequuntur? Commodi et dolor aut.";
    for(let i = 0; i < tot; i++){
        cards = cards + make_card(titles[i], txt + i, links[i]);
    }
    document.getElementById("jsCardID").innerHTML     = cards;
    document.getElementById("num-task").innerHTML  = `Total de tarefas: ${tot}`;
}