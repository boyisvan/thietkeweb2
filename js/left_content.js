

// Phần đổi thanh chọn bên trái-------------------
let list= document.querySelectorAll('.left_list');
for(let i=0 ; i<list.length ; i++)
{
    list[i].onclick=function(){
        let j=0;
        while(j<list.length){
            list[j++].className ='left_list';
        }
        list[i].className ='left_list left_active';
    }
}





// phần đổi theme ------------------
var darkBtn = document.getElementById("menu-bar")
darkBtn.onclick=function(){
    darkBtn.classList.toggle("theme");
    document.body.classList.toggle("theme");
}




// phần thích-----------------------------
let id=1;
var liked = document.getElementById('like');
liked.onclick =function(){
    if(id==1){
        liked.innerHTML= ' <i class="fas fa-heart"></i> ' ;
        id=2;
    }
    else{
        liked.innerHTML='<i class="far fa-heart"></i>';
        id=1;
    }
}