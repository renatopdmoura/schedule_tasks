//Global variables
var lorem =`Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Neque itaque inventore assumenda officiis non obcaecati 
            explicabo ipsa atque reiciendis est vero libero dolore cupiditate 
            asperiores esse error minus, repellat expedita?`;
var colors = [24];
            var taskill = {color: ["#222"], titles: ["Title "], desc: [lorem], links: ["Link-me "]};
var tot     = taskill.titles.length + 23;

// JS Functions

function SetUserType(type){
    if(type){
        document.getElementsByClassName("button-add-section")[0].style.display = "none";
        document.getElementsByClassName("button-plus")[0].style.display        = "none";
    }
}
function ExpandModal(flag, name_id){
    if(flag){
        document.getElementById(name_id).style.display = "block";
    }
    else{
        document.getElementById(name_id).style.display = "none";
    }
}

function AddSection(){
    if(document.getElementById("section-name").value != ""){
        document.getElementById("main-menu-links").innerHTML += "<li>" + document.getElementById("section-name").value + "</li>";
        document.getElementById("section-name").value = "";
        ExpandModal(0, 'modal-add-section');
    }
}
function make_card(color, title, content, links){
    let icons = `<div style="float:right; margin-right: 12px" onclick="RemoveCard()">
                    <i class="glyphicon glyphicon-remove"></i>
                </div>
                <div style="float:right; margin-right: 18px" onclick="ExpandTaskModal(1)">
                    <i class="glyphicon glyphicon-pencil"></i>
                </div>`;
    let l    = `<li><a href="#">` + links + `</a></li>`;
    let html = `<div class="my-col-s-12 my-col-m-12 my-col-t-12 my-col-d-12 card" style="border-left:${color} solid 6px;">
                    <header>${title}${icons}</header>
                    <p style="font-size: 1em">${content}</p>
                </div>`
    return html;
}
function RemoveCard(){
    tot -= 1;
    GenCard();
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
    let txt = "";
    for(let i = 0; i < tot; i++){
        cards = cards + make_card(titles[i], txt + i, links[i]);
    }
    document.getElementById("jsCardID").innerHTML  = cards;
    document.getElementById("num-task").innerHTML  = `Total de tarefas: ${tot}`;
}

function GenCard(){
    if(tot){
        document.getElementById("task-empty").style.display = "none";
    }
    let cards = "";
    for(let i = 0; i < tot; i++){
        cards += make_card(colors[0], taskill.titles[i] + i, taskill.desc[i], taskill.links[i] + i);
    }
    document.getElementById("jsCardID").innerHTML  = cards;
    document.getElementById("num-task").innerHTML  = `Total de tarefas: ${tot}`;
}