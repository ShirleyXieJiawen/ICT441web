function Getstart(){ 
    var input=prompt("Please choose your content 'student'or'parent'")
        if (input == "student"){
         window.location.href="https://shirleyxiejiawen.github.io/ICT441web/services.html" 
        }
        
        else if (input == "parent")
        {
            window.location.href="https://shirleyxiejiawen.github.io/ICT441web/" 
        }
     var text1= document.getElementById("aa");
        text1.innerHTML = "You have clicked the button. ";
        var text2= document.getElementById("bb");
        text2.innerHTML = "Good you have made it ";
    
    }
