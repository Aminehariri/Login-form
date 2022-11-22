/*===== Form validation code =====*/


/*===== NAME REGEX VALIDATION CODE =====*/
function testname(){
  const nominp=document.getElementById('name').value
  , inp=document.getElementById("name")
  , name_alert =document.getElementById('namealert')
  , namepatern=/^[a-zA-Z -]+$/;

  namevalide=namepatern.test(nominp);

  namevalide ? name_alert.style.visibility='hidden' : name_alert.style.visibility='visible'

  namevalide ?inp.style.border='1.5px solid #407BFF':inp.style.border='1.5px solid red'
}


/*===== EMAIL REGEX VALIDATION CODE =====*/
function testemail(){
  const email_inp=document.getElementById('email').value
  const inp=document.getElementById('email')
  
  email_alert =document.getElementById('emailalert')

  emailpatern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  email_valide=emailpatern.test(email_inp);
  email_valide ? email_alert.style.visibility='hidden':email_alert.style.visibility='visible'
  email_valide ?inp.style.border='1.5px solid #407BFF':inp.style.border='1.5px solid red'

}



/*=====FIRST PASSWORD VALIDATION CODE =====*/
function passtest(){
  const pass_inp=document.getElementById('password').value
  , inp=document.getElementById('password')
  ,pass_alert =document.getElementById('pass-valide')

  passPatern=/^(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  passValide=passPatern.test(pass_inp);

  passValide? pass_alert.style.visibility='hidden' : pass_alert.style.visibility='visible'
  passValide ?inp.style.border='1.5px solid #407BFF':inp.style.border='1.5px solid red'
}

/*=====SECOND PASSWORD VALIDATION CODE =====*/
function passTwoTest(){
  const passInpOne=document.getElementById('password').value
  const passInpTwo=document.getElementById('pasTwo').value
  const inp=document.getElementById('pasTwo')
  const passValide=document.getElementById('pass-valideTwo')
  passInpOne === passInpTwo?passValide.style.visibility='hidden':passValide.style.visibility='visible'
  passInpOne === passInpTwo ?inp.style.border='1.5px solid #407BFF':inp.style.border='1.5px solid red'

}



/*===== SHOW PASSWORD TOGGLE CODE =====*/

/*FIRST PASSWORD */
var state=true;
function show1(){

  if(state){
    document.getElementById('password').setAttribute("type","text")
    state=false;
  }else{
    document.getElementById('password').setAttribute("type","password")
    state=true;
  }
}

/*SECOND PASSWORD */
var state2=true;
function show2(){
  if(state2){

    document.getElementById('pasTwo').setAttribute("type","text")
    state2=false;
  }else{
    document.getElementById('pasTwo').setAttribute("type","password")
    state2=true;
  }

}
