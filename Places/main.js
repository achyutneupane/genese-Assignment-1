const places = () => {

    placesList = ["Biratnagar", "Lalitpur", "Patan", "Kathmandu", "Pokhara", "Palpa"]
    const favplaces = [""]

   const lengthOfPlaces = placesList.length

    document.write("My favourite places: " + lengthOfPlaces + "<br>")
    document.write("<br>")
    placesList.forEach((place) =>{
        document.write(place + "<br>")
    }) 
    document.write("<br>")
    document.write("Removing kathmandu from list")
    document.write("<br>")
    document.write("<br>")
    // remove kathmandu
    var count=0;
    for (var i = 0; i < lengthOfPlaces; i++) {
        if(placesList[i]=="Kathmandu")
            continue;
        count = count+1;
        document.write(placesList[i] + "<br>")
    }
  document.write("My fav list: " + count)
}

places()