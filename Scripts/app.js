function rollDice() {
        var die1 = document.getElementById("die1");
        var die2 = document.getElementById("die2");
        var status = document.getElementById("status");
        var d1 = Math.floor(Math.random() * 6) + 1;
        var d2 = Math.floor(Math.random() * 6) + 1;
        var diceTotal = d1 + d2;
      
        document.getElementById("die1Img").src = "dice"+die1+".png";
       
        document.getElementById("die2Img").src = "dice"+die2+".png";
        status.innerHTML = "You rolled " + diceTotal+".";
        if(d1 == d2) {
            status.innerHTML += "Doubles! You get a free turn!!";
        } else if (d1 === 3) {
            status.innerHTML += "half life 3 confirmed";
        } else if (d2 === 3)  {
            status.innerHTML += "Half Life 3 confirmed";
        } else if (d1 === 1) {

        }

    }