var I = 30; //rows
var J = 70; //cols

function Matrix(){
    var M = [];

    //init
    for (var i=0; i<I; i++) {
        M[i] = [];
        for (var j=0; j<J; j++) {
            M[i][j] = 0;
        }
    }

    this.get = function(i, j) {
        if (i<0 || i>=I) return 0;
        if (j<0 || j>=J) return 0;
        return M[i][j];
    };

    this.set = function(i, j, val) {
        if (i<0 || i>=I) return 0;
        if (j<0 || j>=J) return 0;
        M[i][j] = val;
    };

    this.count = function(i, j){
        var count = 0;
        for (var k=i-1; k<=i+1; k++) {
            for (var l=j-1; l<=j+1; l++) {
                if (!(k==i && l==j)) count+=this.get(k,l);
            }
        }
        return count;
    };

    this.print = function() {
        var str = "";
        for (var i=0; i<I; i++) {
            for (var j=0; j<J; j++) {
                str+=M[i][j] + "  ";
            }
            str+="<br/>";
        }
        document.getElementById("matrix").innerHTML = str;
    };
}

var onStep = function() {
    var newMatrix = new Matrix();
    for (var i=0; i<I; i++) {
        for (var j=0; j<J; j++) {
            var val = mainMatrix.get(i, j);
            var count = mainMatrix.count(i, j);
            newMatrix.set(i, j, val==1 && (count==2 || count==3) || val==0 && count==3 ? 1 : 0);
        }
    }
    mainMatrix = newMatrix;
    mainMatrix.print();
};

var onRun = function() {
    setInterval(onStep, 150);
};

var mainMatrix = new Matrix();
var s = 10, t = 30;
mainMatrix.set(s, t+1, 1);
mainMatrix.set(s+1, t+3, 1);
mainMatrix.set(s+2, t, 1);
mainMatrix.set(s+2, t+1, 1);
mainMatrix.set(s+2, t+4, 1);
mainMatrix.set(s+2, t+5, 1);
mainMatrix.set(s+2, t+6, 1);
mainMatrix.print();
