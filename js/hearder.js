window.onload=function(){
	var oDiv=document.getElementById('hearderbgpic');
	var oUl=oDiv.getElementsByTagName('ul');
	var aLi=oUl.getElementsByTagName('li')[0];
	var aImg=oUl.getElementsByTagName('img');
	
	var oBtn=document.getElementById('btn');
	var aA=oBtn.getElementsByTagName('a');
	
//	var aImgwidth=500;
	oUl.style.width=aLi.length*aImg.width+'px';
}
