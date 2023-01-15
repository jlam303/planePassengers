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
        this.age=0;
    }
}
var doug1 = new list("Colton", "Krupp", "2005-10-05", "Phoenix", "Atlanta", "2023-01-13", "2023-01-16","1","fish", "leg ", "1001")
var doug2 = new list("Colt", "Kru", "2006-10-05", "Phoenix", "Charleston", "2024-01-13", "2024-01-16","3","chicken", "leg hp ss ", "1002")
var doug3 = new list("C", "K", "2007-10-05", "Phoenix", "D.C.", "2022-01-13", "2022-01-16","2","vegetarian", "leg win ", "1003")
doug1.time = (Date.parse(doug1.rD) - Date.parse(doug1.dD))/(24*60*60*1000)
doug1.age = (Date.now() - Date.parse(doug1.dob))/(24*60*60*1000*365)
let extraArray = doug1.extras.split(" ");
if(extraArray.length >= 1) extraArray.pop()
doug1.cost += Number(doug1.bags*20)+ Number(extraArray.length*10)

doug2.time = (Date.parse(doug2.rD) - Date.parse(doug2.dD))/(24*60*60*1000)
doug2.age = (Date.now() - Date.parse(doug2.dob))/(24*60*60*1000*365)
extraArray = doug2.extras.split(" ");
if(extraArray.length >= 1) extraArray.pop()
doug2.cost += Number(doug2.bags*20)+ Number(extraArray.length*10)

doug3.time = (Date.parse(doug3.rD) - Date.parse(doug3.dD))/(24*60*60*1000)
doug3.age = (Date.now() - Date.parse(doug3.dob))/(24*60*60*1000*365)
extraArray = doug3.extras.split(" ");
if(extraArray.length >= 1) extraArray.pop()
doug3.cost += Number(doug3.bags*20)+ Number(extraArray.length*10)

var arr = []
var ids =["firstName", "lastName", "dob", "dC","aC","dD","rD","bags"]
var arr2 =["firstNameInfo", "lastNameInfo", "dobInfo", "dCInfo","aCInfo","dDInfo","rDInfo","bagsInfo"]
arr.push(doug1)
arr.push(doug2)
arr.push(doug3)
let idCheck = 0;
let count = 1004;
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
        if((Date.now() - Date.parse(temp.dob)) >= (21*365*24*60*60*1000)) temp.canDrink = true
        let extraArray = temp.extras.split(" ");
        if(extraArray.length >= 1) extraArray.pop()
        console.log(extraArray)
        temp.time = (Date.parse(temp.rD) - Date.parse(temp.dD))/(24*60*60*1000)
        temp.age = (Date.now() - Date.parse(temp.dob))/(24*60*60*1000*365)
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
var ID;
function display(display){
    for(let i = 0; i < 8; i++){
        var x = ids[i]
        document.getElementById(arr2[i]).value = (arr[display])[x]
    }
    document.getElementById("mealInfo").value = arr[display].food
    document.getElementById("extraInfo").value = arr[display].extras
    document.getElementById("age").value = arr[display].age
    document.getElementById("trip").value = arr[display].time
    document.getElementById("cost").value = arr[display].cost
    for(let i = 0;i<arr.length;i++)
    {
        if(document.getElementById("firstNameInfo").value == arr[i].firstName && document.getElementById("lastNameInfo").value == arr[i].lastName) 
        {
            ID = i
        }
    }
}
let b;

function updateT(){
    
    for(let e = 0; e < ids.length; e++)
    {
        b = ids[e]
        console.log(ID)
        arr[ID][b] = document.getElementById(arr2[e]).value
    }
    arr[ID].food = document.getElementById("mealInfo").value
    arr[ID].extras = document.getElementById("extraInfo").value
    arr[ID].age = document.getElementById("age").value
    arr[ID].time = document.getElementById("trip").value
    arr[ID].cost = document.getElementById("cost").value
}

function print() {
    space = "";
    for (let i = 0; i < arr.length; i++) {
        space += `<button onclick="display(${i})"><span>${arr[i].id}</span>${arr[i].firstName} ${arr[i].lastName}</button>`
    }
    document.getElementById("printSpace").innerHTML = space;
    console.log(arr)
}