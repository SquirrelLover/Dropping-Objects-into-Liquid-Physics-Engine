function changeval(ID, newval)
{
    document.getElementById(ID).innerHTML = newval;
}

let id = null;
function run()
{
    clearInterval(id);
    const elem = document.getElementById("object");
    var V = document.getElementById("volume").value;
    var fp = document.getElementById("fluidro").value;
    var op = document.getElementById("objectro").value;
    var vi = document.getElementById("vis").value;

    document.getElementById("object").style.width = document.getElementById("object").style.height = Math.cbrt(V)*25 + "px";
    document.getElementById("object").style.top = -50+"px";
    document.getElementById("object").style.left = 250 - Math.cbrt(V)*25/2 + "px";
    var dt = 0.1;
    var a = 9.8;
    var v = 0; 
    var x = -50;

    clearInterval(id);
    id = setInterval(frame, 10);
    function frame() {
    if ((x > 0 && Math.abs(v) <= 0.01) || x > 250) {
        clearInterval(id);
    } else {
        x += v*dt;
        v += a*dt;
        var r = 0;
        if(x > 0) r = 1;
        else if(x + Math.cbrt(V) > 0 ) r = (x + Math.cbrt(V))/Math.cbrt(V);
        var z = 0;
        if(x > 0) z = -6*Math.PI*vi*Math.cbrt(V)/2*v;
        a = (-fp*V*r*9.8 + op*V*9.8 + z)/(op*V);
        elem.style.top = x + "px";
    }
  }
}
