function Button(){
   var random = Math.random()*10;
   random = Math.floor(random)+1
   
   if(random ==1)
   {document.querySelector(".Motorbike").style.background ="coral";}
   else if(random == 2){document.querySelector(".Motorbike").style.background ="red";}
   else if(random == 3){document.querySelector(".Motorbike").style.background ="yellow";}
   else if(random == 4){document.querySelector(".Motorbike").style.background ="blue";}
   else if(random == 5){document.querySelector(".Motorbike").style.background ="orange";}
   else if(random == 6){document.querySelector(".Motorbike").style.background ="brown";}
   else if(random == 7){document.querySelector(".Motorbike").style.background ="green";}
   else if(random == 8){document.querySelector(".Motorbike").style.background ="pink";}
   else if(random == 8){document.querySelector(".Motorbike").style.background ="peru";}
   else if(random == 8){document.querySelector(".Motorbike").style.background ="maroon";}
   else if(random == 8){document.querySelector(".Motorbike").style.background ="violet";}
   else
   {document.querySelector(".MotorBike").style.background ="peasch";}
}

function Show()
{
        var colors = document.querySelector("#color").value;
        document.querySelector(".Motorbike").style.backgroundColor =colors;
}

function Reset()
{
    document.querySelector(".Motorbike").style.backgroundColor="White";
}  