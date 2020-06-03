$(document).ready(function(){
    
    
    $( ".grid-item1" ).click(function() {
      
        ticTacToe.counter();
        ticTacToe.one1();
        console.log(ticTacToe.count);
        console.log(ticTacToe.counter())
    });

    $( ".grid-item2" ).click(function() {
      
        ticTacToe.counter();
        ticTacToe.one2();
        console.log(ticTacToe.count);
        console.log(ticTacToe.counter())
    });

    $( ".grid-item3" ).click(function() {
      
        ticTacToe.counter();
        ticTacToe.one3();
        console.log(ticTacToe.count);
        console.log(ticTacToe.counter())
    });
    
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
    
        TicTacToe.prototype.one2 = function(){
            this.two = ".grid-item2";
            this.x = "x";
            this.o = "o";
            this.count +=1 ;
           
            if (this.counter() === false){
         
                $(this.two).removeClass().addClass(this.x).prepend("<p>X</p>");
                 
                }else if (this.counter() === true){
                 $(this.two).removeClass().addClass(this.o).prepend("<p>O</p>");
         
            }
        }
    
        TicTacToe.prototype.one3 = function(){
            this.three = ".grid-item3";
            this.x = "x";
            this.o = "o";
            this.count +=1 ;
           
            if (this.counter() === false){
         
                $(this.three).removeClass().addClass(this.x).prepend("<p>X</p>");
                 
                }else if (this.counter() === true){
                 $(this.three).removeClass().addClass(this.o).prepend("<p>O</p>");
         
            }
        }
    });
    
        
        

            
            
            
        
          
    
    
       
    
    
    
        
        
        
            
           
        
        
            
     
    
     






