function submit() {
  let minutes = document.getElementById("minutes").value - 1;
  let sec = 60;
  let print = document.getElementById("print");

  if (minutes >= 0) {
    let time = setInterval(() => {
      if (sec > 0) {
        // 60
        sec--; // 59
        if (sec != 0) {
          console.log(minutes + ":" + sec);
          print.innerText = minutes + ":" + sec;
        }
      } else if (minutes > 0) {
        // 5 > 0
        minutes--; // 4
        sec = 59;
        console.log(minutes + ":" + sec);
        print.innerText = minutes + ":" + sec;
      } else {
        clearInterval(time);
        print.innerText = "Time is over !";
      }
    }, 1000);
  } else {
    print.innerText = "Please Enter a Positive Value !";
  }
}
