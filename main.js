let count = 1;

function play(clicked_id) {
  if (count % 2 == 1) {
    let screen = document.getElementById(clicked_id);
    screen.innerText = "X";
  }
  if (count % 2 == 0) {
    let screen = document.getElementById(clicked_id);
    screen.innerText = "O";
  }
  if (count > 4) {
    check(clicked_id);
  }
  count++;
  if (count > 9) result("Game Over");
}

function check(clicked_id) {
  switch (clicked_id) {
    case "1": {
      let dataToCkeck = document.getElementById(clicked_id).innerText;

      if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) + 1).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) + 2).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) + 3).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) + 6).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) + 4).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) + 8).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      }

      break;
    }
    case "2": {
      let dataToCkeck = document.getElementById(clicked_id).innerText;

      if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) + 1).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) - 1).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) + 3).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) + 6).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      }
      break;
    }
    case "3": {
      let dataToCkeck = document.getElementById(clicked_id).innerText;

      if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) - 1).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) - 2).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) + 3).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) + 6).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) + 2).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) + 4).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      }

      break;
    }
    case "4": {
      let dataToCkeck = document.getElementById(clicked_id).innerText;

      if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) - 3).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) + 3).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) + 1).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) + 2).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      }
      break;
    }
    case "5": {
      let dataToCkeck = document.getElementById(clicked_id).innerText;

      if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) + 1).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) - 1).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) + 3).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) - 3).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) - 4).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) + 4).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) - 2).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) + 2).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      }

      break;
    }
    case "6": {
      let dataToCkeck = document.getElementById(clicked_id).innerText;

      if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) - 1).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) - 2).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) - 3).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) + 3).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      }
      break;
    }
    case "7": {
      let dataToCkeck = document.getElementById(clicked_id).innerText;

      if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) + 1).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) + 2).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) - 3).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) - 6).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) - 2).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) - 4).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      }

      break;
    }
    case "8": {
      let dataToCkeck = document.getElementById(clicked_id).innerText;

      if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) + 1).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) - 1).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) - 3).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) - 6).innerText
        ) {
          {
            console.log("winner");
            result(dataToCkeck);
          }
        }
      }
      break;
    }
    case "9": {
      let dataToCkeck = document.getElementById(clicked_id).innerText;

      if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) - 1).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) - 2).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) - 3).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) - 6).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      } else if (
        dataToCkeck ==
        document.getElementById(parseInt(clicked_id) - 4).innerText
      ) {
        if (
          dataToCkeck ==
          document.getElementById(parseInt(clicked_id) - 8).innerText
        ) {
          console.log("winner");
          result(dataToCkeck);
        }
      }

      break;
    }
  }
}

function result(text) {
  let screen = document.getElementById("screen");
  if (text == "X") screen.innerText = " ** PERSON A IS WINNER **";
  else if (text == "O") screen.innerText = "** PERSON B IS WINNER **";
  else screen.innerText = text;
}

function display(clicked_id) {
  let id = clicked_id;
  console.log(id);
  play(clicked_id);
}
