$(document).ready(function(){
    
    
    $( ".grid-item1" ).click(function() {
      
       ticTacToe.counter();
       //console.log(ticTacToe.counter());
       ticTacToe.one1();
        console.log(ticTacToe.count);
       console.log(ticTacToe.counter())
    });

    // $( ".grid-item2" ).click(function() {
        
        
    //     ticTacToe.counter();
    //     console.log(ticTacToe.counter());
    //     ticTacToe.gameBoard();
    // });
        
       
    
    
        
 

    function TicTacToe(one,two,three,four,five,six,seven,eight,nine,){
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
       
           
            
            if (this.count%2 === 0){
            return true;
            }else{
            return false;
           
    }


}


      
    TicTacToe.prototype.gameBoard = function(){
        this.one = ".grid-item1";
        this.two = ".grid-item2";
        // this.three = $(".grid-item3").val()
        // this.four = $(".grid-item4").val()
        // this.five = $(".grid-item5").val()
        // this.six = $(".grid-item6").val()
        // this.seven = $(".grid-item7").val()
        // this.eight = $(".grid-item8").val()
        // this.nine = $(".grid-item9").val()
        this.x = "x";
        this.o = "o";
    //  if (this.counter() === false){
     
    //    $(this.one).removeClass().addClass(this.x).prepend("<p>X</p>");
        
    // }else if (this.counter() === true){
    //     $(this.one).removeClass().addClass(this.o).prepend("<p>O</p>");

    // }
    
    // if (this.counter() === false){
     
    //     $(this.two).removeClass().addClass(this.x).prepend("<p>X</p>");
         
    //  }else if (this.counter() === true){
    //      $(this.two).removeClass().addClass(this.o).prepend("<p>O</p>");
 
    //  }
    
    
    }

    TicTacToe.prototype.one1 = function(){
        this.one = ".grid-item1";
        this.x = "x";
        this.o = "o";
        this.count +=1 ;
       
        if (this.counter() === false){
     
            $(this.one).removeClass().addClass(this.x).prepend("<p>X</p>");
             
         }else if (this.counter() === true){
             $(this.one).removeClass().addClass(this.o).prepend("<p>O</p>");
     
         }




        }


    });


    
    
    
