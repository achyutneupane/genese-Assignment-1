function calcCircumfrence(){
    const radius = document.getElementById("data").value
    console.log(radius)
    const circum = 2 * Math.PI * radius
   document.getElementById("calculate_value") 
            .innerHTML = ("The circumference is: " + circum)

}
calcCircumfrence()