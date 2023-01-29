function bulbOn()
{
    alert("do you want to turn-on your bulb") 
    let ob1=document.getElementById("bulb")
   ob1.setAttribute("src","on-bulb.jpg")

}

const bulbOff=()=>
{
    alert("do you want to turn-off your bulb")
    let ob2=document.getElementById("bulb")
    ob2.setAttribute('src','off-bulb.jpg')
}

const toggleBulb=()=>
{
    let behave=document.getElementById("bulb").getAttribute('src') 
     let toggleObj=document.getElementById("onOffButton")
    if(behave=="on-bulb.jpg")
    {
      document.getElementById("bulb").src="off-bulb.jpg"
      toggleObj.innerHTML="ON"
    }

    else
    {
        document.getElementById("bulb").src="on-bulb.jpg"
        
        console.log(toggleObj.innerHTML)
        toggleObj.innerHTML="OFF"
    }
    
    
}