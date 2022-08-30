const numList = document.querySelectorAll(".number");
let ratingNumber = 0;

for (let i=0; i < numList.length; i++) {
  numList[i].addEventListener('click', function() {
    numList[i].classList.toggle('active');
    document.querySelector(".rating").innerHTML = "You selected " + (i+1) + " out of 5"
    for (let j=0; j < numList.length; j++) {
      if (i!=j) {
        numList[j].classList.remove('active');
      }
    }
  });
};

//display thank you card when submitted
document.querySelector('.button').addEventListener('click', function(){
  document.querySelector('.ask').classList.toggle('hide');
  document.querySelector('.thank').classList.toggle('hide');
});
