var createpost0=document.getElementById('createpost');
var newpost0=document.getElementsByClassName('newpost');
var cross=document.getElementsByClassName('cross');

createpost.addEventListener('click',function(){

newpost0[0].style.display='flex';

});

cross[0].addEventListener('click',function(){

newpost0[0].style.display='none';

});


