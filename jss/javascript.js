//Global variables
var lorem =`Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Neque itaque inventore assumenda officiis non obcaecati 
            explicabo ipsa atque reiciendis est vero libero dolore cupiditate 
            asperiores esse error minus, repellat expedita?`;
const colors = [24];
var taskill  = {color: [], titles: [], priority: [], term: [], desc: [], detail: []};
var tot      = 0;

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
    let html = document.getElementById("section-name").value;
    if(html != ""){
        document.getElementById("main-menu-links").innerHTML += "<li>" + html + "</li>";
        html = "";
        ExpandModal(0, 'modal-add-section');
    }
}

function AddTaskill(){
    taskill.titles.push(document.getElementById("btn_title").value);
    taskill.priority.push(document.getElementById("btn_priority").value);
    taskill.term.push(document.getElementById("btn_term").value);
    taskill.desc.push(document.getElementById("btn_desc").value);
    taskill.detail.push(document.getElementById("txt_detail").value);
    taskill.color.push(document.getElementById("hex").innerText);

    let size = taskill.titles.length;
    let html = document.getElementById("jsCardID").innerHTML;
    document.getElementById("jsCardID").innerHTML = content = make_card(taskill.color[size - 1], taskill.titles[size - 1], taskill.priority[size - 1], taskill.term[size - 1], taskill.desc[size - 1], taskill.detail[size -1]) + html;
    document.getElementById("num-task").innerHTML  = `Total de tarefas: ${size}`;
    tot++;
    if(tot){
        document.getElementById("task-empty").style.display = "none";
    }
    ExpandModal(0, "modal-task");
}

function make_card(color, title, priority, term, desc, detail){
    let str = priority? "Alta": "Baixa";
    let icons = `<div style="float:right; margin-right: 12px" onclick="RemoveCard()">
                    <i class="glyphicon glyphicon-remove"></i>
                </div>
                <div style="float:right; margin-right: 18px" onclick="ExpandTaskModal(1)">
                    <i class="glyphicon glyphicon-pencil"></i>
                </div>
                <div style="float:right; margin-right: 18px" onclick="ExpandTaskModal(1)">
                    <i class="glyphicon glyphicon-ok"></i>
                </div>`;
    let html = `<div class="my-col-s-12 my-col-m-12 my-col-t-12 my-col-d-3 card" style="border-left:${color} solid 6px;">
                    <header>
                        <b>${title}</b>${icons}<br>
                        ${desc}
                    </header>
                    <div style="font-size: 12pt">
                        Prioridade: ${str}<br>
                        Prazo: Até ${term}<br>
                    </div>
                    <p>${detail}</p>
                </div>`
    return html;
}