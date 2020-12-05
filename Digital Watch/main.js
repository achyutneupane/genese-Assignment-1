setInterval(showTime, 1000); 
function showTime() { 
    let time = new Date(); 
    let hour = time.getHours(); 
    let min = time.getMinutes(); 
    let sec = time.getSeconds(); 
    am_pm = "AM"; 
  
    if (hour > 12) { 
        hour -= 12; 
        am_pm = "PM"; 
    } 
    if (hour == 0) { 
        hr = 12; 
        am_pm = "AM"; 
    } 
    if (hour<10){
        hour = "0" + hour
    }else{
        hour= hour
    }
    if (min<10){
        min = "0" + min
    }else{
        min= min
    }
    if (sec<10){
        sec = "0" + sec
    }else{
        sec= sec
    }
 
    let currentTime = hour + ":" 
            + min + ":" + sec + am_pm; 
  
    document.getElementById("watch") 
            .innerHTML = currentTime; 
} 

showTime(); 