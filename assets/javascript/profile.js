var createpost0=document.getElementById('createpost');
var newpost0=document.getElementsByClassName('newpost');
var cross0=document.getElementsByClassName('cross');
var commentsection0=document.getElementsByClassName('commentsection');
var sidecontent0=document.getElementsByClassName('sidecontent');
var mainsec0=document.getElementsByClassName('mainsec');
var postcomments0=document.getElementsByClassName('postcomments');
var commentscross0 =document.getElementsByClassName('commentscross');

//creating post popup
createpost.addEventListener('click',function(){
commentsection0[0].style.display='none';
// sidecontent0[0].style.display='flex';
newpost0[0].style.display='flex';
// mainsec0[0].style.background='cyan';
});

//closing create post popup
cross0[0].addEventListener('click',function(){
sidecontent0[0].style.display='flex';
newpost0[0].style.display='none';

});