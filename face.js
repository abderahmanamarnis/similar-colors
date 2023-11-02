let open = true;
function on(e){
if(open){ e.children[0].style.bottom = "0";
e.children[0].style.height = "100%"; open = false;}
else {
e.children[0].style.bottom = "100%";
e.children[0].style.height = "0";
 open = true;
}
}