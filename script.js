var tablinks=document.getElementsByClassName('tab-links');
			var tabcontents=document.getElementsByClassName('tab-contents');
                                        /*commented Line 
                        var tablinks=document.getElementsByClassName('tab-links');*/

			function opentab(tabname){
				for(tablink of tablinks){
					tablink.classList.remove("active");
				}
				for(tabcontent of tabcontents){
					tabcontent.classList.remove("active-tab");
				}
				event.currentTarget.classList.add("active");
				document.getElementById(tabname).classList.add("active-tab");
			}
			var sidemenu=document.getElementById('sidemenu');
			function openmenu(){
				sidemenu.style.right="0";
			}
			function closemenu(){
				sidemenu.style.right="-200px";
			}
