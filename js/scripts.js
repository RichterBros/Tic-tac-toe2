$(document).ready(function(){
    $( ".grid-container" ).click(function() {
        
        console.log(ticTacToe.counter());
    
     });
        
        
    $(".test").click(function() {
    alert("hi");
   
    });

    
    

function TicTacToe(one,two,three,four,five,six,seven,eight,nine){
    this.one = one;
    this.two = two;
    this.three = three;
    this.four = four;
    this.five = five;
    this.six = six;
    this.seven = seven;
    this.eight = eight;
    this.nine = nine;
    this.count = 0;
}

    
    
var ticTacToe = new TicTacToe();   
    
    

TicTacToe.prototype.counter = function(){
   
        this.count +=1 
        if (this.count%2 === 0)
        return true;
    else
        return false;
}
  
TicTacToe.prototype.gameBoard = function(){

    
}

});


