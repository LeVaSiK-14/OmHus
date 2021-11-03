const nowDate = new Date();
let reqData = document.querySelector('.reqData').textContent;
data = JSON.parse(reqData);
const select = document.querySelector('.work_obj');
const work = document.querySelector('.work');
const workStage = document.querySelector('.workStage');
const isExtra = document.querySelector('.isExtra');
const comment = document.querySelector('.comment');
const hour = document.querySelector('.hour');
const sendForm = document.querySelector('.sendForm');
const warning = document.querySelector('.warning');
const clear = document.querySelector('.clear');

const works = document.querySelector('.works');
const addWorkBtn = document.querySelector('.addWorkBtn');


const date = `${nowDate.getDate()}-${nowDate.getMonth()+1}-${nowDate.getFullYear()}`;


const sendData = {
    workerName: '',
    date: date,
    workObjUID: '',
    workUID: [],
    hour: [],
    workStageUID: '',
    isExtra: false,
    comment: '',
    
};


for (let i of data){
    select.innerHTML += `<option value="${i.UID}">${i.Name}</option>`
};

select.addEventListener('change', ()=> {
    sendData.workObjUID = select.value;
    const work1 = document.querySelectorAll('.work1');
    work1.forEach(elem => {
        works.removeChild(elem);
    });
    const hour1 = document.querySelectorAll('.hour1');
    hour1.forEach(elem => {
        works.removeChild(elem);
    });
    work.innerHTML = '<option>WORK</option>'
    workStage.innerHTML = '<option>WORK STAGE</option>'
    isExtra.checked = false;
    comment.value = '';
    hour.value = 0
    for (let i of data){
        if (i.UID === select.value){
            for (let j of i.Works){
                work.innerHTML += `<option value="${j.UID}">${j.Name}</option>`
            };
            for (let j of i.WorkStages){
                workStage.innerHTML += `<option value="${j.UID}">${j.Name}</option>`
            };
        };
    };
});




function clearForm(){
    select.value = 'WORK OBJECT';
    work.innerHTML = '<option>WORK</option>'
    workStage.innerHTML = '<option>WORK STAGE</option>'
    comment.value = '';
    hour.value = '';
    isExtra.checked = false;

    const work1 = document.querySelectorAll('.work1');
    work1.forEach(elem => {
        works.removeChild(elem);
    });
    const hour1 = document.querySelectorAll('.hour1');
    hour1.forEach(elem => {
        works.removeChild(elem);
    });
};

function clearData(){
    sendData.workObjUID = '';
    sendData.workUID = [];
    sendData.workStageUID = '';
    sendData.isExtra = false;
    sendData.comment = '';
    sendData.hour = [];
}

clear.addEventListener('click', () => {
    clearForm();
    clearData();
});



addWorkBtn.addEventListener('click', () => {
    if (sendData.workObjUID !== "" && sendData.workObjUID !== "WORK OBJECT"){

        let work = document.createElement('select');
        work.setAttribute("class", `work1`);

        let hour = document.createElement('input');
        hour.setAttribute("class", `hour1`);
        hour.setAttribute("type", `number`);
        hour.setAttribute("placeholder", `hour`);
        
        
        work.innerHTML += `<option>WORK</option>`
        for (let i of data){
            if (i.UID === select.value){
                for (let j of i.Works){
                    work.innerHTML += `<option value="${j.UID}">${j.Name}</option>`
                };
            };
        };
        works.append(work, hour);
    };
    
});

sendForm.addEventListener('click', ()=> {
    sendData.workerName = 'LeVaSiK';
    const works1 = document.querySelectorAll('.work1');
    const hours1 = document.querySelectorAll('.hour1');

    works1.forEach(elem => {
        sendData.workUID.push(elem.value);
    });
    sendData.workUID.push(work.value);

    hours1.forEach(elem => {
        sendData.hour.push(Number(elem.value));
    });
    sendData.hour.push(Number(hour.value));

    sendData.workStageUID = workStage.value;
    sendData.isExtra = isExtra.checked ? true : false;
    sendData.comment = comment.value;

    console.log(sendData);
    clearForm();
    setTimeout(clearData, 10000)

    
});

// let obj = {
//     comment: "this is comment",
//     date: "3-11-2021",
//     hour: [20, 30, 10],
//     isExtra: true,
//     workObjUID: "4d2abcff-d793-11eb-802e-64006a608108",
//     workStageUID: "e34fad07-28c8-11ec-94fe-90b11c63ced1",
//     workUID: ['b851c162-2058-11ec-94f3-90b11c63ced1', '0259ff50-19e8-11ec-94e7-90b11c63ced1', 'a29114c7-a12e-11eb-bff8-64006a608108'],
//     workerName: "LeVaSiK"
// }

// let arr = [
//     "LeVaSiK",
//     "4d2abcff-d793-11eb-802e-64006a608108",
//     "3-11-2021",
//     ['b851c162-2058-11ec-94f3-90b11c63ced1', '0259ff50-19e8-11ec-94e7-90b11c63ced1', 'a29114c7-a12e-11eb-bff8-64006a608108'],
//     [20, 30, 10],
//     "e34fad07-28c8-11ec-94fe-90b11c63ced1",
//     true,
//     "this is comment", 
// ]