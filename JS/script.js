function homePage(){
        window.location.href = "home.html";
    };

function community(){
    window.location.href = "Community.html";
};

function profile(){
    window.location.href = "profile.html";
};

function openTerms(){
    window.open('https://policies.google.com/terms')
}

function openPolicy(){
    window.open('https://policies.google.com/terms')
}

// function buttonAction1(){
//     document.getElementById('btAction1').style.backgroundColor = '#00A86B';
//     document.getElementById('btAction1').innerText = 'Added'
// }
// function buttonAction2(){
//     document.getElementById('btAction2').style.backgroundColor = '#00A86B';
//     document.getElementById('btAction2').innerText = 'Added'
// }
// function buttonAction3(){
//     document.getElementById('btAction3').style.backgroundColor = '#00A86B';
//     document.getElementById('btAction3').innerText = 'Added'
// }

function changeColor1() {
    const buttons = document.querySelectorAll(".btn-1");
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        buttons[i].style.backgroundColor = "green";
        buttons[i].innerText = 'Added'
      });
    }
}

function changeColor2() {
    const buttons = document.querySelectorAll(".btn-2");
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        buttons[i].style.backgroundColor = "gray";
        buttons[i].innerText = 'Joined'
      });
    }
}
function changeColor3() {
    const buttons = document.querySelectorAll(".btn-3");
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function () {
        buttons[i].style.backgroundColor = "gray";
        buttons[i].innerText = 'Following'
      });
    }
}
