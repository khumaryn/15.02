function gro(){
    let value=document.getElementById('inp').value;
    let a=value.slice(-3);
    let num=a.charAt(0);
    if(num==2){
       alert('gunorta qrupu') 
document.body.style.backgroundColor='yellow';
    }
    if(num==3){
         alert('axsam qrupu')
        document.body.style.backgroundColor='black';
            }
            if(num==1){
                 alert('seher qrupu')
                document.body.style.backgroundColor='white';
                    }
}
