console.log('HI');
var circle=document.getElementById('circle');
var upBtn=document.getElementById('upBtn');
var downBtn=document.getElementById('downBtn');

var rotateVal=circle.style.transform;
var rotateSum;

upBtn.addEventListener('click',()=>{
    rotateSum= rotateVal + 'rotate(-90deg)';
    circle.style.transform=rotateSum;
    rotateVal=rotateSum;
});
downBtn.addEventListener('click',()=>{
    rotateSum= rotateVal + 'rotate(90deg)';
    circle.style.transform=rotateSum;
    rotateVal=rotateSum;
});