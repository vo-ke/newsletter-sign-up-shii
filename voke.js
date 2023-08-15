


function check(){
    const emailinput = document.getElementById('input-001');
    const emailvalue = emailinput.value;
    const ghost = document.getElementById('strong02');
    const blank = document.getElementById('dynamic');


    if (emailvalue.includes('@') && emailvalue.includes('.com') ) {
       return true;
    }
    else {
        event.preventDefault();
       ghost.style.display = 'block';
       emailinput.classList.add('on');
    }
}

   function goback() {
    window.history.back();
   
   }


