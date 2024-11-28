function changeAllText(){
    var element = document.getElementsByClassName("changeText");
    for (var i = 0; i< element.length; i++){
        element[i].textContent = "Text Changed!";
    }
}
function changecolor(){
    var boxes = document.getElementsByClassName("colorBox");
    for ( var i=0; i< boxes.length; i++){
        boxes[i].style.backgroundColor = "pink"
    }
}
function hideme(){
    var boxes = document.getElementsByClassName("colorBox");
    for ( var i =0; i< boxes.length; i++){
        boxes[i].style.display="none";
    }
    var element = document.getElementsByClassName("changeText")
    for(var i=0; i<element.length; i++){
        element[i].style.display = "none";
    }
}
function showme(){
    var boxes = document.getElementsByClassName("colorBox");
    for ( var i =0; i< boxes.length; i++){
        boxes[i].style.display="block";
    }
    var element = document.getElementsByClassName("changeText")
    for(var i=0; i<element.length; i++){
        element[i].style.display = "block";
    }
}
function ChangeBorder(){
    var item = document.getElementsByClassName("changeborder");
    for (var i=0; i< item.length; i++){
        item[i].style.border = "2px solid black";
    }
}
function changefont(){
    var item = document.getElementsByClassName("changeText");
    for (var i=0; i< item.lenght;i++){
        item[i].style.fontSize = "24px";
    }
    var list = document.getElementsByClassName("changeborder");
    for (var i=0; i< list.length; i++){
        list[i].style.fontSize = "24px";
}
}