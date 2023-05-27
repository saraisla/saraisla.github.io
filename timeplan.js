// Hent date-elementet fra html-dokumentet (DOM)
const datePicker = document.getElementById("datePicker");
// Sett verdien av date-elementet til dagens dato i formatet yyyy-mm-dd
const today = new Date();
datePicker.value = today.toISOString().slice(0, 10);
// Funksjon som kalles når datovelgeren endrer verdi
function getDay(){
    let inputDate = new Date(datePicker.value); 
    // Oppretter et nytt Date-objekt basert på datovelgerens verdi
    let weekday = inputDate.getDay(); 
    // Finner ukedagen basert på det nye Date-objektet
    if (weekday === 1) {
        document.getElementById("ukedag").innerHTML = "Mandagens timeplan";
    } else if (weekday === 2) {
        document.getElementById("ukedag").innerHTML = "Tirsdagens timeplan";
    } else if (weekday === 3) {
        document.getElementById("ukedag").innerHTML = "Onsdagens timeplan";
    } else if (weekday === 4) {
        document.getElementById("ukedag").innerHTML = "Torsdagens timeplan";
    } else if (weekday === 5) {
        document.getElementById("ukedag").innerHTML = "Fredagens timeplan";
    } else {
        document.getElementById("ukedag").innerHTML = "Ingen timeplan denne dagen";
    }
}
// Kall funksjonen når siden lastes inn for å vise ukedagen for dagens dato
    getDay();
function getWeek(date) {
    // Kopierer datoen for å unngå endring av originaldatoen
  let d = new Date(date);
  // Setter tiden til midnatt for å unngå tidsproblemer
  d.setHours(0,0,0,0);
  // Setter dagen til torsdag for å få den korrekte ukenummeret ifølge ISO-standard
  d.setDate(d.getDate() + 3 - (d.getDay() + 6) % 7);
  // Henter årstallet2
  let year = d.getFullYear();
  // Henter antall dager siden starten av året
  console.log(d)
  let dayOfYear = Math.floor((d - new Date(year, 0, 1)) / 86400000);
  console.log(d)
  console.log(dayOfYear)
  // Henter ukenummeret ved å dele antall dager med 7 og legge til 1
  let weekNumber = Math.ceil((dayOfYear + 1) / 7);
  return weekNumber;
}
  //Definerer de ulike øktene som arrays
    let økt1Arr
    let økt2Arr
    let økt3Arr
    let økt4Arr
  // Initialiserer arrayene med tomme verdier
    økt1Arr = ["", "", ""];
    økt2Arr = ["", "", ""];
    økt3Arr = ["", "", ""];
    økt4Arr = ["", "", ""];
//Funksjon som finner timeplanen utfra hvilken ukedag det er og om det er partall eller oddetallsuke.
function dagensTimeplan(){
    let inputDate = new Date(datePicker.value);
    let weekday = inputDate.getDay(); 
    let weekNumber= getWeek(datePicker.value)
    if (weekday===1 && weekNumber % 2 === 0){
        økt1Arr=["Fysikk", "Johanne", "FYS"]
        økt2Arr = ["IT", "Didrik", "B203"]
        økt3Arr= ["Matematikk", "Anders", "E202"]
        økt4Arr=[ "Norsk", "Morten", "D102"]
        }
    else if(weekday===1 && weekNumber % 2 != 0){
        økt1Arr=["Fri", "",""]
        økt2Arr = ["IT", "Didrik", "B203"]
        økt3Arr= ["Matematikk", "Anders", "E202"]
        økt4Arr=[ "Norsk", "Morten", "D102"]
    }
    else if(weekday===2){
        økt1Arr=["Fri", "",""]
        økt2Arr = ["Samfunnsøkonomi", "Marit", "NAT"]
        økt3Arr= ["Kroppsøving", "Kjell Petter", "Gjønneshallen"]
        økt4Arr=["Fri", "",""]
    }
    else if(weekday===3){
        økt1Arr = ["IT", "Anders", "B203"]
        økt2Arr= ["Matematikk", "Anders", "E202"]
        økt3Arr=["Fysikk", "Johanne", "FYS"]
        økt4Arr=["Fri", "",""]
    }
    else if(weekday===4 && weekNumber % 2 === 0){
        økt1Arr=["Fri", "",""]
        økt2Arr=["Fri", "",""]
        økt3Arr=[ "Norsk", "Morten", "B203"]
        økt4Arr= ["Matematikk", "Anders", "E202"]
    }
    else if(weekday===4 && weekNumber % 2 != 0){
        økt1Arr=["Fri", "",""]
        økt2Arr=["Fri", "",""]
        økt4Arr=[ "Norsk", "Morten", "B203"]
        økt4Arr = ["Samfunnsøkonomi", "Marit", "NAT"]
    }
    else if(weekday===5 && weekNumber % 2 === 0){
       økt1Arr = ["Samfunnsøkonomi", "Marit", "NAT"]
       økt2Arr=["Fysikk", "Johanne", "FYS"]
       økt3Arr= ["Historie", "Bjørn", "D102"]
        økt4Arr = ["IT", "Didrik/Anders", "B203"]
    }
    else if(weekday===5 && weekNumber % 2 != 0){
        økt1Arr = ["Samfunnsøkonomi", "Marit", "NAT"]
        økt2Arr=["Fysikk", "Johanne", "FYS"]
        økt3Arr= ["Historie", "Bjørn", "D102"]
        økt4Arr= ["Klassens time", "Bjørn", "D102"]
    }
    else if(weekday===6 || weekday===7){
        økt1Arr=["", "",""]
        økt2Arr=["", "",""]
        økt3Arr=["", "",""]
        økt4Arr=["", "",""]
    }
}
    //kaller funskjonen som finner timeplanen utfra hvilken dag det er
    dagensTimeplan()
function visTimeplan(){
    // Henter de ulike øktene fra DOM
    let økt1fag = document.querySelector(".økt1fag");
    let økt1lærer = document.querySelector(".økt1lærer");
    let økt1rom = document.querySelector(".økt1rom");
    let økt2fag = document.querySelector(".økt2fag");
    let økt2lærer = document.querySelector(".økt2lærer");
    let økt2rom = document.querySelector(".økt2rom");
    let økt3fag = document.querySelector(".økt3fag");
    let økt3lærer = document.querySelector(".økt3lærer");
    let økt3rom = document.querySelector(".økt3rom");
    let økt4fag = document.querySelector(".økt4fag");
    let økt4lærer = document.querySelector(".økt4lærer");
    let økt4rom = document.querySelector(".økt4rom");
    // Setter inn informasjonen for hver økt i de respektive cellene
    økt1fag.textContent = økt1Arr[0];
    økt1lærer.textContent = økt1Arr[1];
    økt1rom.textContent = økt1Arr[2];
    økt2fag.textContent = økt2Arr[0];
    økt2lærer.textContent = økt2Arr[1];
    økt2rom.textContent = økt2Arr[2];
    økt3fag.textContent = økt3Arr[0];
    økt3lærer.textContent = økt3Arr[1];
    økt3rom.textContent = økt3Arr[2];
    økt4fag.textContent = økt4Arr[0];
    økt4lærer.textContent = økt4Arr[1];
    økt4rom.textContent = økt4Arr[2];
  }
  //kaller funskonen som viser timeplanen i nettsiden
visTimeplan()
function updateTimeplan(){
    getDay()
    dagensTimeplan()
    visTimeplan()
}
// Lytt etter endringer i datovelgeren og oppdater ukedagen når det skjer
datePicker.addEventListener("input", updateTimeplan);
