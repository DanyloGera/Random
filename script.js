function firstFunction() {
    var message, x;
    message = document.getElementById('output');
    message.innerHTML = "";
    x = document.getElementById('players').value;
    try {
      if (x == "") throw "is empty!";
      if (isNaN(x)) throw "is not a number!";
      x = Number(x);
      if (x <= 1) throw "is too low!";
      if (x >= 6 ) throw "is too height!";
      message.innerHTML = "Correct!";
    } catch (err) {
        message.innerHTML = "Input " + err;
    } finally {
        document.getElementById('players').value="";
    }
}







function secFunction() {
    var text, y;
    text = document.getElementById('numText');
    text.innerHTML = "";
    y = document.getElementById('wins').value;
    try {
      if (y == "") throw "is empty!";
      if (isNaN(y)) throw "is not a number!";
      y = Number(y);
      if (y <= 0) throw "is too low!";
      if (y >= 6 ) throw "is too height!";
      if (y === 1) throw getNums1();
      if (y === 2) throw getNums2();
      if (y === 3) throw getNums3();
      if (y === 4) throw getNums4();
      if (y === 5) throw "all win!";
    } catch (err) {
        text.innerHTML = err;
    } finally {
        document.getElementById('wins').value="";
    }
}


var server = "http://www.random.org";
var nums1 = "/integers/?num=1&min=1&max=5&col=3&base=10&format=plain&rnd=yes";
var nums2 = "/integers/?num=2&min=1&max=5&col=3&base=10&format=plain&rnd=yes";
var nums3 = "/integers/?num=3&min=1&max=5&col=3&base=10&format=plain&rnd=yes";
var nums4 = "/integers/?num=4&min=1&max=5&col=3&base=10&format=plain&rnd=yes";
var xhr = new XMLHttpRequest();
function getNums1() {
  xhr.open('GET', server+nums1);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('numText').innerHTML = this.responseText
  }
  xhr.send();
}
function getNums2() {
  xhr.open('GET', server+nums2);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('numText').innerHTML = this.responseText
  }
  xhr.send();
}


function getNums3() {
  xhr.open('GET', server+nums3);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('numText').innerHTML = this.responseText
  }
  xhr.send();
}
function getNums4() {
  xhr.open('GET', server+nums4);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('numText').innerHTML = this.responseText
  }
  xhr.send();
}

var server = "http://www.random.org";
var youNum = "/integers/?num=1&min=1&max=5&col=3&base=10&format=plain&rnd=yes";
var xhr = new XMLHttpRequest();
function getYourNum() {
  xhr.open('GET', server+youNum);
  // xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('your-num').innerHTML = this.responseText
  }
  xhr.send();
}


// Password (8-10) in Numbers
function passNumFunc() {
    var p, z; //t= "paragraph", z= змінна.
    p = document.getElementById('pasword-num');
    p.innerHTML = "";
    z = document.getElementById('pasNum-put').value;
    try {
      if (z == "") throw "is empty!";
      if (isNaN(z)) throw "is not a number!";
      z = Number(z);
      if (z <= 7) throw "is too low!";
      if (z >= 11 ) throw "is too height!";
      if (z === 8) throw getPassNum8();
      if (z === 9) throw getPassNum9();
      if (z === 10) throw getPassNum10();
    } catch (err) {
        p.innerHTML = err;
    } finally {
        document.getElementById('pasNum-put').value="";
    }
}
var server = "http://www.random.org";
var passNum8 = "/integers/?num=8&min=0&max=9&col=3&base=10&format=plain&rnd=yes";
var passNum9 = "/integers/?num=9&min=0&max=9&col=3&base=10&format=plain&rnd=yes";
var passNum10 = "/integers/?num=10&min=0&max=9&col=3&base=10&format=plain&rnd=yes";
var xhr = new XMLHttpRequest();
function getPassNum8() {
  xhr.open('GET', server+passNum8);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('pasword-num').innerHTML = this.responseText
  }
  xhr.send();
}
function getPassNum9() {
  xhr.open('GET', server+passNum9);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('pasword-num').innerHTML = this.responseText
  }
  xhr.send();
}
function getPassNum10() {
  xhr.open('GET', server+passNum10);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('pasword-num').innerHTML = this.responseText
  }
  xhr.send();
}

// Password (8-10) in Small Letters
function passSmLettFunc() {
    var t, a; //t= "text", a= змінна.
    t = document.getElementById('pasword-smlett');
    t.innerHTML = "";
    a = document.getElementById('pasSmlLetter-put').value;
    try {
      if (a == "") throw "is empty!";
      if (isNaN(a)) throw "is not a number!";
      a = Number(a);
      if (a <= 7) throw "is too low!";
      if (a >= 11 ) throw "is too height!";
      if (a === 8) throw getPassSmLett8();
      if (a === 9) throw getPassSmLett9();
      if (a === 10) throw getPassSmLett10();
    } catch (err) {
        t.innerHTML = err;
    } finally {
        document.getElementById('pasSmlLetter-put').value="";
    }
}



var server = "http://www.random.org";
var passSmLett8 = "/strings/?num=8&len=1&digits=off&upperalpha=off&loweralpha=on&unique=on&format=plain&rnd=new";
var passSmLett9 = "/strings/?num=9&len=1&digits=off&upperalpha=off&loweralpha=on&unique=on&format=plain&rnd=new";
var passSmLett10 = "/strings/?num=10&len=1&digits=off&upperalpha=off&loweralpha=on&unique=on&format=plain&rnd=new";
var xhr = new XMLHttpRequest();
function getPassSmLett8() {
  xhr.open('GET', server+passSmLett8);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('pasword-smlett').innerHTML = this.responseText
  }
  xhr.send();
}
function getPassSmLett9() {
  xhr.open('GET', server+passSmLett9);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('pasword-smlett').innerHTML = this.responseText
  }
  xhr.send();
}
function getPassSmLett10() {
  xhr.open('GET', server+passSmLett10);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('pasword-smlett').innerHTML = this.responseText
  }
  xhr.send();
}


// Password (8-10) in CAPITAL Letters
function passBgLettFunc() {
    var n, g; //n= "note", g= змінна.
    n = document.getElementById('pasword-bglett');
    n.innerHTML = "";
    g = document.getElementById('pasBgLetter-put').value;
    try {
      if (g == "") throw "is empty!";
      if (isNaN(g)) throw "is not a number!";
      g = Number(g);
      if (g <= 7) throw "is too low!";
      if (g >= 11 ) throw "is too height!";
      if (g === 8) throw getPassBgLett8();
      if (g === 9) throw getPassBgLett9();
      if (g === 10) throw getPassBgLett10();
    } catch (err) {
        n.innerHTML = err;
    } finally {
        document.getElementById('pasBgLetter-put').value="";
    }
}
var server = "http://www.random.org";
var passBgLett8 = "/strings/?num=8&len=1&digits=off&upperalpha=on&loweralpha=off&unique=on&format=plain&rnd=new";
var passBgLett9 = "/strings/?num=9&len=1&digits=off&upperalpha=on&loweralpha=off&unique=on&format=plain&rnd=new";
var passBgLett10 = "/strings/?num=10&len=1&digits=off&upperalpha=on&loweralpha=off&unique=on&format=plain&rnd=new";
var xhr = new XMLHttpRequest();
function getPassBgLett8() {
  xhr.open('GET', server+passBgLett8);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('pasword-bglett').innerHTML = this.responseText
  }
  xhr.send();
}
function getPassBgLett9() {
  xhr.open('GET', server+passBgLett9);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('pasword-bglett').innerHTML = this.responseText
  }
  xhr.send();
}
function getPassBgLett10() {
  xhr.open('GET', server+passBgLett10);
  xhr.onerror=function(e){alert("error");}
  xhr.onload=function() {
    document.getElementById('pasword-bglett').innerHTML = this.responseText
  }
  xhr.send();
}
