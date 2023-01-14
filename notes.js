class list {
    constructor(firstName, lastName, dob, dC, aC, dD, rD, bags, food, extras,id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.dC = dC;
        this.aC = aC;
        this.dD = dD;
        this.rD = rD;
        this.bags = bags;
        this.food = food;
        this.id = id;
        this.extras = extras;
        this.canDrink = false;
        this.cost = 300;
        this.time = 0;
    }
}
 
let arr = []
let ids =["firstName", "lastName", "dob", "dC","aC","dD","rD","bags"]
let idCheck = 0;
let count = 1001;
let meal = "";
let extra = "";
function addToList() {
    for(let i = 0;i<ids.length;i++) {
        if(document.getElementById(ids[i]).value != "") {
        idCheck++;
    }
    else {
        idCheck = 0;
    }
    }
    var radio = document.getElementsByName("food")
    var extras = document.getElementsByName("extras")
    for(let i = 0;i<radio.length;i++)
        {
            if(radio[i].checked) meal = radio[i].value
        }
        for(let i = 0;i<extras.length;i++)
        {
            if(extras[i].checked) extra += extras[i].value +" "
        }
    if (idCheck >= ids.length && meal != "") {    
        let checkMap = ids.map(x =>{return document.getElementById(x).value})
        let temp = new list(checkMap[0],checkMap[1],checkMap[2],checkMap[3],checkMap[4],checkMap[5],checkMap[6],checkMap[7],meal,extra,count);
        count++;
        if((Date.now() - Date.parse(temp.dob)) >= (24*60*60*1000)) temp.canDrink = true
        let extraArray = temp.extras.split(" ");
        if(extraArray.length >= 1) extraArray.pop()
        console.log(extraArray)
        temp.time = (Date.parse(temp.rD) - Date.parse(temp.dD))/(24*60*60*1000)
        temp.cost += Number(temp.bags*20)+ Number(extraArray.length*10)
        arr.push(temp);
        for(let i = 0;i<ids.length;i++) {document.getElementById(ids[i]).value = "";}
        idCheck = 0;
        meal = "";
        extra = "";
        for(let i = 0;i<radio.length;i++){
            radio[i].checked = false
        }
        for(let i = 0;i<extras.length;i++){
            extras[i].checked = false
        }
        
    }
}
function print() {
    space = "";
    for (let i = 0; i < arr.length; i++) {
        space += `<div><span>${arr[i].id}</span>${arr[i].firstName} ${arr[i].lastName}</div>`
    }
    document.getElementById("printSpace").innerHTML = space;
    console.log(arr)
}
 
// work in progress
// function populate() {
//     var select = document.getElementById("selectNumber");
//     select.innerHTML = `<option>Choose a number</option>`
//     for (var i = 0; i < arr.length; i++) {
//         select.innerHTML += `<option value = "${arr[i].firstName}">${arr[i].firstName}</option>`
//     }
// }