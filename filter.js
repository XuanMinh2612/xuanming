// let dataTitle = Array.from(document.querySelectorAll("[data-title]"));
//  let temp="";
// for(index=0; index< dataTitle.length;index++ )
// {
//     temp= temp + dataTitle[index].getAttribute("data-title") + " ";
// }

// console.log(temp)
// document.getElementById("demo").setAttribute("data-title", temp.trim());
// console.log(dataTitle);

let btndata = document.querySelector("[data-toggle='modal']")


let color = document.getElementById("color-text");
let container = document.querySelector(".container");
let body=document.getElementById("body")
function btnChange(href)
{
    href = color.setAttribute("href",href);
}

function btnChangeContainer(type)
{
    var contai= "container" + type ;
    container.setAttribute("class", contai);
}


function btnChangeBg(fileName)
{
    if(fileName){
        let valueStyle= "background-image:url('" + fileName + "')";
        //có giá trị thay đổi background 
        console.log(body, fileName , valueStyle )
        body.setAttribute("style" , valueStyle );
    }
    else{
        //tra background ve trang thai binh thuong
    }
    
}