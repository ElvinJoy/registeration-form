validate = () =>
{
    if (document.getElementById('name').value=='')
    {
        document.getElementById('error1').innerHTML='please enter your name';
        return false;
    }
    else if(document.getElementById('last_name').value == '')
    {
      document.getElementById('error2').innerHTML = 'please enter your lastname';
      return false;
    }
    else if(document.getElementById('address').value == '')
    {
      document.getElementById('error3').innerHTML = 'please enter your address';
      return false;
    }
    else if(document.getElementById('email').value == '')
    {
      document.getElementById('error4').innerHTML = 'please enter your email';
      return false;
    }
    else if(document.getElementById('password').value == '')
    {
      document.getElementById('error5').innerHTML ='please enter your pasword';
      return false;
    }
    else if(document.getElementById('number').value == '')
    {
      document.getElementById('error6').innerHTML = 'please enter your phone no';
      return false;
    }
    else if(document.getElementById('photo').value == '')
    {
      document.getElementById('error7').innerHTML = 'please upload your photo ';
      return false;
    }
    else
    {
      return true;
    }

}
