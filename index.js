//head部分效果
{
    let labels=document.querySelectorAll(".head_big");
    let menus=document.querySelectorAll(".taobao_float");
    let obj=menus[0];
    labels.forEach(function(ele,index){
        ele.onmouseenter=function(){
            obj.style.display="none";
            menus[index].style.display="block";
            obj=menus[index];
        }
        ele.onmouseleave=function(){
            menus[index].style.display="none";
        }
    })
}
// banner部分效果
{
	let imgs=document.querySelectorAll(".banner_btn");
	let pagers=document.querySelectorAll(".banner_pagerbox li");
	let banner=document.querySelector(".banner_bottom");
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<imgs.length;i++){
				imgs[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}	
			this.classList.add("active");
			imgs[index].classList.add("active");
			
		}
	});
	var n=0;
	let t=setInterval(move,3000);
	function move(){
		n++;
		
		if(n===imgs.length){
			n=0;
		}
		if(n<0){
			n=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
		imgs[n].classList.add("active");
		pagers[n].classList.add("active");
	}

	banner.onmouseenter=function(){
		clearInterval(t);
	}
	banner.onmouseleave=function(){
		t=setInterval(move,3000);
	}
    imgs.forEach(function(ele,index){
        ele.addEventListener("transitionend", function(){
            flag=true;
        })

    })
}
{
	let labels=document.querySelectorAll(".label");   
	let menus=document.querySelectorAll(".menu");  
	let obj=menus[0]; 
	labels.forEach(function(ele,index){
		ele.onmouseenter=function(){
			obj.style.display="none";
			menus[index].style.display="block";
			obj=menus[index];
		}
		ele.onmouseleave=function(){
			menus[index].style.display="none";
		}
	})
}
//右侧效果
{
	let right_btn=document.querySelectorAll(".right_btn");
	let right_btn2=document.querySelector(".right_btn2");
	let right_btn_float=document.querySelectorAll(".right_btn_float");
	let right_shopping=document.querySelector(".right_shopping");
	let shopping_icon=document.querySelector(".shopping_icon");
	let shopping_icon2=document.querySelector(".shopping_icon2");
	let saomiao_box=document.querySelector(".saomiao_box");
	right_btn.forEach(function(ele,index){
		ele.onmouseenter=function(){
			right_btn_float[index].style.opacity="1";
			right_btn_float[index].style.right="35px";
		};
		ele.onmouseleave=function(){
			right_btn_float[index].style.opacity="0";
			right_btn_float[index].style.right="70px";
		}
	})
	right_shopping.onmouseenter=function(){
		shopping_icon2.style.display="block";
	}
	right_shopping.onmouseleave=function(){
		shopping_icon2.style.display="none";
	}
	right_btn2.onmouseenter=function(){
		saomiao_box.style.display="block";
	}
	right_btn2.onmouseleave=function(){
		saomiao_box.style.display="none";
	}

	
}
// 上左部分出现效果
{
	let topBar=document.querySelector(".topBar");
	let leftBar=document.querySelector(".leftBar");
	window.onscroll=function(){
		let st=document.documentElement.scrollTop;
		if(st<758){
			topBar.style.display="none";
		}else{
			topBar.style.display="block";
		}	
		if(st<698){
			leftBar.style.display="none";
		}else{
			leftBar.style.display="block";
		}
	}
}
//左右侧totop部分
{
	let gotop=document.querySelector(".gotop");
	let leftBar_icon=document.querySelector(".leftBar_icon");

	gotop.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)	
	};
	leftBar_icon.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)	
	}
}
// 左侧部分效果
{
	let leftBar_icon=document.querySelector(".leftBar_icon");
	let leftBar=document.querySelector(".leftBar");
	leftBar_icon.onclick=function(){
		let st=document.documentElement.scrollTop;
		let t=setInterval(function(){
			st-=200;
			if(st<0){
				st=0;
				clearInterval(t);
			}
			document.documentElement.scrollTop=st;
		},25)	
	}
}
{
	let tips=document.querySelectorAll(".tips");
	let containers=document.querySelectorAll(".container");
	tips.forEach(function(ele,index){
		ele.onclick=function(){
			let ot=containers[index].offsetTop-70;
			containers[index].offsetTop=ot;
			let now=document.documentElement.scrollTop;
			let speed=(ot-now)/8;
			let time=0;
			let t=setInterval(function(){
				time+=25;
				now+=speed;
				if(time===200){
					clearInterval(t);
				}
				document.documentElement.scrollTop=now;
			},25)
		}
	});
	window.addEventListener("scroll",function(){
		let st=document.documentElement.scrollTop;

		for(let i=0;i<containers.length;i++){
			if(st>containers[i].offsetTop-150){
				for(let i=0;i<tips.length;i++){
					tips[i].classList.remove("active");
				}

				tips[i].classList.add("active");

			}
		}
	});
	let arr=["#64C333","#ff0036","#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#ff0036"];
	$(".tips").mouseenter(function(){
		let index=$(this).index(".tips");
		$(".tips").css("background","rgba(0,0,0,1)").eq(index).css("background",arr[index]);
	});
	$(window).scroll(function(){
		let st=$(window).scrollTop();
		$(".container").each(function(e){
			if(st>$(".container").eq(e).offset().top-150){
				$(".tips").css("background","rgba(0,0,0,1)").eq(e).css("background",arr[e]);
			}
		})
	})


}
// 天猫超市部分效果
{
	let items=document.querySelectorAll(".store_today_item");
	let pagers=document.querySelectorAll(".store_today_head_left");
	let store=document.querySelector(".store_btn");
	pagers.forEach(function(ele,index){
		ele.onmouseenter=function(){
			for(let i=0;i<items.length;i++){
                items[i].classList.remove("active");
				pagers[i].classList.remove("active");
			}	
			this.classList.add("active");
            items[index].classList.add("active");
			
		}
	});
	let n=0;
	let t2=setInterval(move2,3000);
	function move2(){
		n++;
		if(n===pagers.length){
			n=0;
		}
		if(n<0){
			n=pagers.length-1;
		}
		for(let i=0;i<pagers.length;i++){
            items[i].classList.remove("active");
			pagers[i].classList.remove("active");
		}
        items[n].classList.add("active");
		pagers[n].classList.add("active");
	}

		store.onmouseenter=function(){
			clearInterval(t2);
		};
		store.onmouseleave=function(){
			t=setInterval(move2,3000);
		}

}


