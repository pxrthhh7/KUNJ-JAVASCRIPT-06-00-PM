const now = new Date(); 
let DateTime = document.getElementById("DateTime");
DateTime.innerText = now.toLocaleString();

let myform = document.getElementById("myform");

document.getElementById("storageType").addEventListener('change', function () {
    let expiryInput = document.getElementById("cookieExpiryContainer");
    expiryInput.classList.toggle('hidden', this.value !== 'cookie');
});

myform.addEventListener('submit', function(e) {
    e.preventDefault();

    let main = document.querySelector(".main");
    let task = document.getElementById("task").value;
    let storageType = document.getElementById("storageType").value;
    let cookieDays = parseInt(document.getElementById("cookieDays").value) || 7;
    
    const taskKey = 'task_' + new Date().getTime();

    let taskList = document.createElement("div");
    taskList.setAttribute("class", "taskList w-[290px] sm:w-[350px] min-h-[40px] rounded-[50px] mb-[15px] bg-[#2828287d] py-2 flex gap-2 pl-[25px] px-[20px] items-center");
    
    let output = document.createElement("span");
    output.setAttribute("class", "break-words text-white w-full max-w-[70%]");

    let btns = document.createElement("div");
    btns.setAttribute("class", "btns flex justify-end items-center gap-[9px] w-[35%] sm:w-[30%]");

    let edit = document.createElement("button");
    edit.setAttribute("class", "edit w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] rounded-full flex justify-center items-center bg-[#6d6b6bce]");

    let pencil = document.createElement("iconify-icon");
    pencil.setAttribute("icon", "bxs:pencil");

    let delet = document.createElement("button");
    delet.setAttribute("class", "delete w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] rounded-full flex justify-center items-center bg-[#6d6b6bce]");

    let bin = document.createElement("iconify-icon");
    bin.setAttribute("icon", "solar:trash-bin-2-bold");

    if(storageType === 'local') {
        console.log("local");
        localStorage.setItem(taskKey, task);
        output.innerHTML = localStorage.getItem(taskKey);
    }
    else if(storageType === 'session') {
        console.log("session");
        sessionStorage.setItem(taskKey, task);
        output.innerHTML = sessionStorage.getItem(taskKey);
    }
    else if(storageType === 'cookie') {
        console.log("cookie");
        Cookies.set(taskKey, task, { expires: cookieDays });
        output.innerHTML = Cookies.get(taskKey);
    }

    edit.addEventListener('click', function() {
        let input =  document.createElement("input");
        input.setAttribute("type" , "text");
        input.setAttribute("placeholder" , "Edit the task");
        input.setAttribute("class", "w-full h-[35px] rounded-[17px] outline-none pl-[5px] bg-transparent text-[#9CA3AF]");
        taskList.replaceChild(input, output);

        let savebtn = document.createElement("button");
        savebtn.setAttribute("class" , "w-[30px] sm:w-[35px] h-[30px] sm:h-[35px] rounded-[50%] bg-[#6d6b6bce] flex items-center justify-center");
        savebtn.setAttribute("type" , "submit");

        let saveicon = document.createElement("iconify-icon");
        saveicon.setAttribute("icon" , "ion:cloud-done");
        savebtn.appendChild(saveicon);

        btns.replaceChild(savebtn, edit);

        savebtn.addEventListener('click', function() {
            let updatedTask = input.value;

            if (updatedTask !== null && updatedTask !== "") {
                if(storageType === 'local') {
                    localStorage.setItem(taskKey , updatedTask);
                    taskList.replaceChild(output, input);
                    output.innerHTML = localStorage.getItem(taskKey);
                }
                else if(storageType === 'session') {
                    sessionStorage.setItem(taskKey , updatedTask);
                    taskList.replaceChild(output, input);
                    output.innerHTML = sessionStorage.getItem(taskKey);
                }
                else if(storageType === 'cookie') {
                    Cookies.set(taskKey, updatedTask, { expires: cookieDays });
                    taskList.replaceChild(output, input);
                    output.innerHTML = Cookies.get(taskKey);
                }
                btns.replaceChild(edit, savebtn);
            }

        });
    });

    delet.addEventListener('click', function() {
        if(storageType === 'local') {
            localStorage.removeItem(taskKey);
        }
        else if(storageType === 'session') {
            sessionStorage.removeItem(taskKey);
        }
        else if(storageType === 'cookie') {
            Cookies.remove(taskKey);
        }
        taskList.remove(); 
    });

    main.appendChild(taskList);
    taskList.appendChild(output);
    taskList.appendChild(btns);
    btns.appendChild(edit);
    edit.appendChild(pencil);
    btns.appendChild(delet);
    delet.appendChild(bin);   
});
