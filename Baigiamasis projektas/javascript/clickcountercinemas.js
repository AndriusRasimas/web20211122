function clickCounterForum(){
    if (typeof(Storage) !== "undefined"){
      if (sessionStorage.clickcountForum){
        sessionStorage.clickcountForum = Number(sessionStorage.clickcountForum)+1;
      } else{
        sessionStorage.clickcountForum = 1;
      }
      document.getElementById("resultsForum").innerHTML = "Buvo apsilankyta Forum cinemas svetaineje " + sessionStorage.clickcountForum + " kartu.";
    }else {
      document.getElementById("resultsForum").innerHTML = "Browser does not support this storage";
    }
  }

function clickCounterMulti(){
    if (typeof(Storage) !== "undefined"){
      if (sessionStorage.clickcountMulti){
        sessionStorage.clickcountMulti = Number(sessionStorage.clickcountMulti)+1;
      } else{
        sessionStorage.clickcountMulti = 1;
      }
      document.getElementById("resultsMulti").innerHTML = "Buvo apsilankyta MultiKino cinemas svetaineje " + sessionStorage.clickcountMulti + " kartu.";
    }else {
      document.getElementById("resultsMulti").innerHTML = "Browser does not support this storage";
    }
  }

function clickCounterSkalvija(){
    if (typeof(Storage) !== "undefined"){
      if (sessionStorage.clickcountSkalvija){
        sessionStorage.clickcountSkalvija = Number(sessionStorage.clickcountSkalvija)+1;
      } else{
        sessionStorage.clickcountSkalvija = 1;
      }
      document.getElementById("resultsSkalvija").innerHTML = "Buvo apsilankyta Skalvija cinemas svetaineje " + sessionStorage.clickcountSkalvija + " kartu.";
    }else {
      document.getElementById("resultsSkalvija").innerHTML = "Browser does not support this storage";
    }
}
