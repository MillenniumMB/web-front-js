
function ADD_ROW(Data_new) {
    let newRow = document.getElementById("queue-table").insertRow();
    let newCell = newRow.insertCell(0)
    newCell.innerText=Data_new.name;
    newCell = newRow.insertCell(1)
    newCell.innerText=Data_new.task;
    newCell = newRow.insertCell(2)
    newCell.innerText=Data_new.deadline;
    newCell = newRow.insertCell(3)
    newCell.innerHTML = "<button type=\"button\" class=\"queue-button condition shine-button\">Не выполнено</button>";

}


//Вот тут будет обработка кнопки, если я успею ее сделать
/*

function initButtonGroup(parentId) {
    let buttonGroup = document.getElementById(parentId),
        i = 0,
       // len = buttonGroup.childNodes.length,
        button,
        len_ = buttonGroup.querySelectorAll("BUTTON");
    handleButtonGroupClick = initClickHandler(parentId);

    for (; i < len_; i += 1) {
        button = buttonGroup.childNodes[i];
        if (button.nodeName === 'BUTTON') {
            button.addEventListener('click', handleButtonGroupClick);
        }
    }
}

function initClickHandler(parentId) {
    return function(e) {
        var buttonGroup = document.getElementById(parentId),
            i = 0,
            len = buttonGroup.childNodes.length,
            button;

        e.preventDefault();

        for (; i < len; i += 1) {
            button = buttonGroup.childNodes[i];
            if (button.nodeName === 'BUTTON') {
                button.className = '';
            }
        }

        e.target.className = '.active_bottom_';
    };
}



initButtonGroup('queue-table');


*/

window.addEventListener('load', () => {

    const storage = window.localStorage;
    if (storage.getItem("Count") == null) {
        storage.setItem("Count", "0");
    } else {
        let num = 1;
        while (true) {
            let returnData = localStorage.getItem(String(num));
            if (returnData == null) {
                break;
            }
            let Data_new = JSON.parse(returnData);
            ADD_ROW(Data_new);
            num = num + 1;
        }
    }





    const form = document.getElementById("queue-web");

    document.getElementById("queue-btn").addEventListener('click', function(e) {
        const ev = new Event("submit");
        document.getElementById("queue-web").dispatchEvent(ev);
    });

    document.getElementById("queue-web").addEventListener('submit', function(e) {


        const data = {
            name: form.querySelector('[name="Имя"]').value,
            task: form.querySelector('[name="Задача"]').value,
            deadline: form.querySelector('[name="Дедлайн"]').value,
            condition: "not performed"
        };

        const serialData = JSON.stringify(data);
        let Count = Number(storage.getItem("Count"));
        Count = Count + 1;
        storage.setItem(String(Count), serialData);
        storage.setItem("Count", String(Count));
        ADD_ROW(data);
        e.target.reset(); // очистить форму
    });



    document.getElementById("clear-btn").addEventListener('click', function(e) {

        const table = document.getElementById("paragraph_table");

        console.log(table)
        let someElementsItems = table.querySelectorAll("tr");
        if (someElementsItems.length > 1){
            let lastElement = someElementsItems[someElementsItems.length -1];
            console.log(lastElement)
            lastElement.parentNode.removeChild(lastElement);

            let Count = Number(storage.getItem("Count"));
            console.log(Count)
            storage.removeItem(Count)
            Count = Count - 1
            storage.setItem("Count", String(Count));
           // storage.setItem(String(Count), serialData);
           // storage.setItem("Count", String(Count));
        }
        //let childrenCount = document.getElementByCount("tr").childNodes.length;
      //  let child = document.getElementByCount("tr").childNodes[childrenCount - 1];
        //alert(child)
      //   const table = document.getElementByCount("queue-table");
       // const oldChild = document.getElementByCount("tbody");

       // const tr_all = oldChild.querySelectorAll(tr);

        //let tr_last = tr_all[tr_all.length - 1];
       // alert(tr_last);
        //alert("aaaa");
        //tr_last.remove();

        //let tr_el = document.createElement("tr");

       // let tbody =  document.createElement("tbody");
       // tbody.appendChild(document.createElement("tr"));
        //table.replaceChild(tbody, oldChild);
      //  oldChild.replaceChild(tr_el, tr_last);
       // storage.clear();
    });

});