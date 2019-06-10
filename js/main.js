window.addEventListener("load", function(){
var myv=document.getElementById("myvideo");
myv.muted=true;
myv.play();

//menu_zone
var menuZone=document.querySelector(".menu_zone");
var menu=document.querySelector(".gnb>ul");
	menu.addEventListener("mouseover",function(){//메뉴펼침
		menuZone.style.height="340px"
	});
	menuZone.addEventListener("mouseleave",function(){//메뉴닫침
		menuZone.style.height="40px";
	});
//
//.menu_banner
var menuBanner=document.querySelector(".menu_banner");
var menuBannerList=document.querySelector(".menu_banner_list ul");
//html Node 생성
var i_max=5;
var BannerImg="";
var BannerList="";
for(var i=0; i<i_max; i++){
	BannerImg+='<div class="item"><img src="images/sub2/sub'+(i+1)+'.jpg" alt=""></div>'+"\n";
	BannerList+='<li class="list"><a href="">'+(i+1)+'</a></li>'+"\n";
}	
menuBanner.innerHTML=BannerImg;
menuBannerList.innerHTML=BannerList;
//
	//slide
	var n=0;
	//초기값
	menuBannerList.children[n].classList.add("on");
	//
	function menuBannerSlide(){
		if(n<i_max-1){
			n++
		}
		else{
			n=0;
		}
		for(var i=0; i<i_max; i++){
			menuBanner.children[i].classList.remove("on");
			menuBannerList.children[i].classList.remove("on");
		}
		menuBanner.children[n].classList.add("on");
		menuBannerList.children[n].classList.add("on");
	}
	setInterval(function(){
		 menuBannerSlide();
	},3000);
	//
	//click
	for(var i=0; i<i_max; i++){
		menuBannerList.children[i].index=i;
		menuBannerList.children[i].addEventListener("click", function(e){
			e.preventDefault();
			n=this.index;
			menuBannerReset();
			menuBanner.children[n].classList.add("on");
			this.classList.add("on");
			console.log(n);
		});
	}
	//
	//reset
	function menuBannerReset(){
		for(var i=0; i<i_max; i++){
			menuBanner.children[i].classList.remove("on");
			menuBannerList.children[i].classList.remove("on");
		}
	}
	//
//
//.main02
	var Item_max=4; // Items Count
	var Item_seen=3; // Items View Count
	var moving=0.7 // Moving Speed 
	
	var btnL=document.querySelector(".btn_l");  // 왼쪽 버튼
	var btnR=document.querySelector(".btn_r"); // 오른쪽 버튼

	//Content Creation
	var Slide_frame=document.querySelector(".main_event ul"); //transition: none;
	var Items=""; // Items Variable 
		for(var i=0; i<Item_max; i++){
			Items+="<li class='item"+i+"'><a href=''><img src='images/sub1/event"+(i+1)+".jpg'></a></li>"+"\n";
		}
		Slide_frame.innerHTML=Items;// Items Creation
	//Items Style	
	var Item_seen2=100/Item_seen //Items View Count    100/value
	var Frame_W=Item_seen2*Item_max; //Slide_frame Width
	var itemW=100/Item_max; //Items Width
		Slide_frame.style.width=Frame_W+"%";
		for(i=0; i<Item_max; i++){
			Slide_frame.children[i].style.width=itemW+"%";
		}
	//Items URL
		Slide_frame.children[0].children[0].setAttribute("href","");
		Slide_frame.children[1].children[0].setAttribute("href","");
		Slide_frame.children[2].children[0].setAttribute("href","");
		Slide_frame.children[3].children[0].setAttribute("href","");
	//Items location
		for(i=0; i<Item_max; i++){
			Slide_frame.children[i].addEventListener("click",function(){
				Slide_frame.children[0].setAttribute("href","www.naver.com");
			});
		}	
	//controller
	var Slide_Animation=false;//Slide Animation Variable	
	//Left Button;
	btnL.addEventListener("click",function(e){
		e.preventDefault();
		if(Slide_Animation==true){
			return false;
		}
		Slide_Animation=true;
		var pos=-Frame_W/Item_max;
		ResetL();
		var slideL=setInterval(moveL);
		function moveL(){
			if(pos >= 0){
				clearInterval(slideL);
				Slide_Animation=false;
			}
			else{
			pos=pos+moving;
			Slide_frame.style.left=pos+"%";
			}
		}
		function ResetL(){
			Slide_frame.style.left=pos+"%";
			Slide_frame.prepend(Slide_frame.children[Item_max-1]);
		}	
	});	
	
	//Right Button
	btnR.addEventListener("click",function(e){
		e.preventDefault();
		if(Slide_Animation==true){
			return false;
		}
		Slide_Animation=true;
		var pos=0;
		var slideR=setInterval(moveR);
		function moveR(){
			if(pos >= Frame_W/Item_max){
				clearInterval(slideR);
				resetR();
			}
			else{
			pos=pos+moving;
			Slide_frame.style.left=-pos+"%";
			}
		}
		function resetR(){
			Slide_frame.style.left=0;
			Slide_frame.append(Slide_frame.children[0]);
			Slide_Animation=false
		}	
	});
});