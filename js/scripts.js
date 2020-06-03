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

    $( ".grid-item4" ).click(function() {
      
        ticTacToe.counter();
        ticTacToe.one4();
        console.log(ticTacToe.count);
        console.log(ticTacToe.counter())
    });

    $( ".grid-item5" ).click(function() {
      
        ticTacToe.counter();
        ticTacToe.one5();
        console.log(ticTacToe.count);
        console.log(ticTacToe.counter())
    });

    $( ".grid-item6" ).click(function() {
      
        ticTacToe.counter();
        ticTacToe.one6();
        console.log(ticTacToe.count);
        console.log(ticTacToe.counter())
    });

    $( ".grid-item7" ).click(function() {
      
        ticTacToe.counter();
        ticTacToe.one7();
        console.log(ticTacToe.count);
        console.log(ticTacToe.counter())
    });

    $( ".grid-item8" ).click(function() {
      
        ticTacToe.counter();
        ticTacToe.one8();
        console.log(ticTacToe.count);
        console.log(ticTacToe.counter())
    });

    $( ".grid-item9" ).click(function() {
      
        ticTacToe.counter();
        ticTacToe.one9();
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
        this.count +=1;
        
        if (this.counter() === false){
     
            $(this.one).removeClass().addClass(this.x).prepend("<p>X</p>");
             
            }else if (this.counter() === true){
             $(this.one).removeClass().addClass(this.o).prepend("<p>O</p>");
     
            }
        if ($("#box1").hasClass("x")){
            alert("x!")
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

        TicTacToe.prototype.one4 = function(){
            this.four = ".grid-item4";
            this.x = "x";
            this.o = "o";
            this.count +=1 ;
           
            if (this.counter() === false){
         
                $(this.four).removeClass().addClass(this.x).prepend("<p>X</p>");
                 
                }else if (this.counter() === true){
                 $(this.four).removeClass().addClass(this.o).prepend("<p>O</p>");
         
            }
        }

        TicTacToe.prototype.one5 = function(){
            this.five = ".grid-item5";
            this.x = "x";
            this.o = "o";
            this.count +=1 ;
           
            if (this.counter() === false){
         
                $(this.five).removeClass().addClass(this.x).prepend("<p>X</p>");
                 
                }else if (this.counter() === true){
                 $(this.five).removeClass().addClass(this.o).prepend("<p>O</p>");
         
            }
        }

        TicTacToe.prototype.one6 = function(){
            this.six = ".grid-item6";
            this.x = "x";
            this.o = "o";
            this.count +=1 ;
           
            if (this.counter() === false){
         
                $(this.six).removeClass().addClass(this.x).prepend("<p>X</p>");
                 
                }else if (this.counter() === true){
                 $(this.six).removeClass().addClass(this.o).prepend("<p>O</p>");
         
            }
        }

        TicTacToe.prototype.one7 = function(){
            this.seven = ".grid-item7";
            this.x = "x";
            this.o = "o";
            this.count +=1 ;
           
            if (this.counter() === false){
         
                $(this.seven).removeClass().addClass(this.x).prepend("<p>X</p>");
                 
                }else if (this.counter() === true){
                 $(this.seven).removeClass().addClass(this.o).prepend("<p>O</p>");
         
            }
        }
    
        TicTacToe.prototype.one8 = function(){
            this.eight = ".grid-item8";
            this.x = "x";
            this.o = "o";
            this.count +=1 ;
           
            if (this.counter() === false){
         
                $(this.eight).removeClass().addClass(this.x).prepend("<p>X</p>");
                 
                }else if (this.counter() === true){
                 $(this.eight).removeClass().addClass(this.o).prepend("<p>O</p>");
         
            }
        }

        TicTacToe.prototype.one9 = function(){
            this.nine = ".grid-item9";
            this.x = "x";
            this.o = "o";
            this.count +=1 ;
           
            if (this.counter() === false){
         
                $(this.nine).removeClass().addClass(this.x).prepend("<p>X</p>");
                 
                }else if (this.counter() === true){
                 $(this.nine).removeClass().addClass(this.o).prepend("<p>O</p>");
         
            }
        }
    
    });

    
        
        

            
            
            
        
          
    
    
       
    
    
    
        
        
        
            
           
        
        
            
     
    
     






