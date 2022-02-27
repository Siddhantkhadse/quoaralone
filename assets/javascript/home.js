
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

//opening comment section of post

postcomments0[0].addEventListener('click',function(){
commentsection0[0].style.display='flex';
newpost0[0].style.display='none';
sidecontent0[0].style.display='none';
});

//closing the comment section of post
commentscross0[0].addEventListener('click',function(){
commentsection0[0].style.display='none';
newpost0[0].style.display='none';
sidecontent0[0].style.display='flex';
});
















//by class name
// let value = document.getElementsById('symbol');

// value[0].addEventListener('click',function(){
// value[0].style.display='none';
	
// 	});

//by class id
// let value = document.getElementById("x").className;

// x.addEventListener('click',function(){

// 	console.log('s');
// });
