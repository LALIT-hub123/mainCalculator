const result = () =>{
    var screen = document.getElementById('input').value;
    var x = eval(screen);
    document.getElementById('input').value= x;
}



const f1 = () => {document.getElementById('input').value += "1";} 
   
const f2 = () => { document.getElementById('input').value +="2"; }

const f3 = () => { document.getElementById('input').value +="3"; }

const f4 = () => { document.getElementById('input').value +="4"; }

const f5 = () => { document.getElementById('input').value +="5"; }

const f6 = () => { document.getElementById('input').value +="6"; }

const f7 = () => { document.getElementById('input').value +="7"; }

const f8 = () => { document.getElementById('input').value +="8"; }

const f9 = () => { document.getElementById('input').value +="9"; }

const f0 = () => { document.getElementById('input').value +="0"; }

const fdot = () => { document.getElementById('input').value +="."; }



const fback = () => {
       var lol = document.getElementById('input').value ;
       var a = lol.slice(0, -1);
       return a;
}
const fdel = () => { document.getElementById('input').value = "";}
const fadd = () => { document.getElementById('input').value +="+";}
const fsubs = () => { document.getElementById('input').value +="-";}
const fmult = () => { document.getElementById('input').value +="*";}
const fdiv = () => { document.getElementById('input').value +="/";}

