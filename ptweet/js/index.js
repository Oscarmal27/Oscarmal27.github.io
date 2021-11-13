window.onload=()=>{
    let usuario= JSON.parse(localStorage.getItem("usuario"));
    document.getElementById("imgUser").src="./img/"+usuario.imagen;
    let arrayTw=[];

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', './js/tweets.json', true);
    xobj.onreadystatechange=function(){
      if(xobj.readyState == 4 && xobj.status=='200'){
        arrayTw=JSON.parse (xobj.responseText);
        console.log(arrayTw);
        crearPost();
      }
    }

    //console.log(usuario);
    //document.getElementById("usuario").innerHTML="Hola "+ usuario.nombre;
    let txtTweet=document.getElementById("txtTweet");
    let btnTweet=document.getElementById("btnTweet");
    btnTweet.addEventListener('click',(evt)=>{
        //console.log(txtTweet.value);
        if(txtTweet.value.trim() != ""){
            let obj = {
                img:usuario.imagen,
                nombre:usuario.nombre,
                mensaje:txtTweet.value,
                username:usuario.username,
                likes:0,
                retweets:0,

            };
            arrayTw.push(obj);
            crearPost();
            txtTweet.value="";
        }
    });
    txtTweet.addEventListener('keyup',(evt)=>{

    });
    function crearPost(){
        console.log(arrayTw);
        var todo="";
        arrayTw.forEach(el=>{
            todo+=`<div class="post">
            <div>
              <img src="img/${el.img}" alt="" class="imgUser" id="imgUser"/>
            </div>
            <div>
              <h2>
                <span>${el.nombre}</span>
                <span>@${el.username}</span>
              </h2>
              <div class="textTweet">
                ${el.mensaje}
              </div>
              <br>
              <div id="grises">
                <div id="likes"><i class="fa-solid fa-heart"></i>${el.likes}</div>
                <div id="share"><i class="fa-solid fa-share"></i>${el.retweets}</div>
              </div> 
            </div>
          </div>`;
        });    
        arrayTw.forEach(el=>{
          todo+=`<div id="division">
          <div class="post">
            <div>
              <img src="img/${el.img}" alt="" class="imgUser" id="imgUser"/>
            </div>
            <div>
              <h2>
                <span>${el.nombre}</span>
                <span>@${el.username}</span>
              </h2>
              <div class="textTweet">
                ${el.mensaje}
              </div>
            </div>
          </div>
        </div>`;
      });
        document.getElementById("posts").innerHTML=todo;
    }
};