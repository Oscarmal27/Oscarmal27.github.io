window.onload = () =>{
    //CARGAR JSON
    let arrayElem=[];

    var xobj=new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET','./js/PeriodicTableJSON.json',true);
    xobj.onreadystatechange=function(){
        if(xobj.readyState == 4 && xobj.status=='200'){
            let json =JSON.parse (xobj.responseText);
            arrayElem=json.elements;
            let todo="";
            arrayElem.forEach(element => {
                todo+=`<li class="${element.category}" data-id=${element.number} data-sim=${element.symbol}
                data-name=${element.name}
                data-descr="${element.summary}"">
                <abbr title="Hydrogen">${element.symbol}</abbr>
            </li>`;
            });
            document.getElementsByClassName('periodic-table')[0].innerHTML=todo;
            //CREAR EVENTOS
    let elem=document.getElementsByTagName('li');
    for(let x=0; x<elem.length;x++){
        elem[x].addEventListener('click',(e)=>{
            let nom=elem[x].getAttribute("data-name");
            let des=elem[x].getAttribute("data-descr");
            let sim=elem[x].getAttribute("data-sim");
            document.getElementById("txtElemento").innerText=nom;
            document.getElementById("txtSimbolo").innerText=sim;
            document.getElementById("txtDescr").innerText=des;
            
        });
    };
        }
    }
    xobj.send(null);
    
    //CREAR EVENTOS
    let elem=document.getElementsByTagName('li');
    for(let x=0; x<elem.length;x++){
        elem[x].addEventListener('click',(e)=>{
            let nom=elem[x].getAttribute("data-name");
            let des=elem[x].getAttribute("data-descr");
            let sim=elem[x].getAttribute("data-sim");
            document.getElementById("txtElemento").innerText=nom;
            document.getElementById("txtSimbolo").innerText=sim;
            document.getElementById("txtDescr").innerText=des;
            
        });
    };

}