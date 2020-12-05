const every  = () => {

    const but = document.getElementById("submit")

    but.addEventListener("click", function () {
        const totalValue = document.getElementById("total").value
    console.log("totalValue")
    const a = parseInt(totalValue)
      
        const tipValue = document.getElementById("tip").value
        console.log(tipValue)
    
        tipOnly = tipValue/100 * totalValue
    
    
        const totalAfterTip = parseInt(a +tipOnly)
        console.log(totalAfterTip)
    
        document.getElementById("tip1").innerHTML = "Total after tip is: "+totalAfterTip
    
    })
    
    }
    
    every()