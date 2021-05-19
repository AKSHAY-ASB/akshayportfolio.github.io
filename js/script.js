
// portfolio Item filter

const filtercontainer = document.querySelector(".portfolio-filter"),
          filterBtns = filtercontainer.children;

          totalfilterBtn = filterBtns.length,
          portfolioItems = document.querySelectorAll(".portfolio-item"),
          totalPortfolioItem=portfolioItems.length;	
          // console.log(filterBtns, totalfilterBtn,portfolioItems,totalPortfolioItem)

          for(let i=0; i<totalfilterBtn; i++){
          	filterBtns[i].addEventListener("click", function(){
          		filtercontainer.querySelector(".active").classList.remove("active");
          		this.classList.add("active");

          		const filterValue = this.getAttribute("data-filter");
                   // console.log(filterValue);
          		for(let k=0; k<totalPortfolioItem; k++){
                          console.log(portfolioItems[k].getAttribute("data-category"));
          			if(filterValue === portfolioItems[k].getAttribute("data-category")){
                              portfolioItems[k].classList.remove("hide");
                            //  console.log("hii" ,portfolioItems[k]);
          				portfolioItems[k].classList.add("show");
          			}else{
          				portfolioItems[k].classList.add("hide");
                              portfolioItems[k].classList.remove("show");
                              //console.log("By" ,portfolioItems[k]);
          			}
                if(filterValue === 'all')
                {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");    
                 }
          		}  
          	});
          }

  //Portfolio Lightbox

    const lightbox = document.querySelector(".lightbox"),
      lightboxImg = lightbox.querySelector(".lightbox-img"),
      lightboxClose = lightbox.querySelector(".lightbox-close"),
      lightboxText = lightbox.querySelector(".caption-text"),
      lightboxCounter = lightbox.querySelector(".caption-counter");

      let itemIndex=0;

        for(let i=0; i<totalPortfolioItem; i++){
          portfolioItems[i].addEventListener("click", function(){
               // console.log(i);
                itemIndex=i;
                changeItem();
                lightboxToggle();
            });
        } 

function nextItem(){
    if(itemIndex === totalPortfolioItem-1){
        itemIndex=0;
    }else{
        itemIndex++;
    }
    changeItem();
    //    console.log(itemIndex);
}

function prevItem(){
    if(itemIndex === 0){
        itemIndex=totalPortfolioItem-1;
    }else{
        itemIndex--;
    }
    changeItem();
    //    console.log(itemIndex);
}

function lightboxToggle(){
    lightbox.classList.toggle('open');
} 

function changeItem(){
    imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
    //console.log(imgSrc);
    lightboxImg.src = imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalPortfolioItem; 
} 

//Close Lightbox

lightbox.addEventListener("click", function(event){

     if(event.target === lightboxClose || event.target === lightbox){
         lightboxToggle();
     }
     
    //console.log(event.target);
});
         

//Aside Navbar

const nav = document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList= navList.length,
      allSection= document.querySelectorAll(".section"),
      totalSection=allSection.length;

for(let i=0; i<totalNavList; i++){
  const a=navList[i].querySelector("a");
       // console.log(a);
       a.addEventListener("click",function(){
        // console.log(this);
        removeBackSection();

     

        for(let j=0; j<totalNavList; j++){
          if(navList[j].querySelector("a").classList.contains("active")){
            // allSection[j].classList.add("back-section");
            addBackSection(j);
          }
          navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);

        if (window.innerWidth < 1200) {
           asideSectionTogglerBtn();
        }
       })
    }                

    function addBackSection(num){
         allSection[num].classList.add("back-section"); 
    }

    function removeBackSection(){
      for(let j=0; j<totalSection; j++){
          allSection[j].classList.remove("back-section"); 
        }
    }

    function showSection(element){
      for(let j=0; j<totalSection; j++){
          allSection[j].classList.remove("active"); 
      }
     const target = element.getAttribute("href").split("#")[1];
           // target = href[1];
          //console.log(target);
      document.querySelector("#"+target).classList.add("active")

    }

    function updateNav(element){
       
         for(let j=0; j<totalNavList; j++){
             navList[j].querySelector("a").classList.remove("active");
             const target = element.getAttribute("href").split("#")[1];
            if (target ===  navList[j].querySelector("a").getAttribute("href").split("#")[1]) {
              navList[j].querySelector("a").classList.add("active");
            }
        }
    }

    document.querySelector(".hire-me").addEventListener("click",function(){
      const sectionIndex = this.getAttribute("data-section-index");
     // console.log(sectionIndex);
      showSection(this);
      updateNav(this);
      removeBackSection();
      addBackSection(sectionIndex);
    })



    const navTogglerbtn = document.querySelector(".nav-toggler"),
          aside = document.querySelector(".aside");

          navTogglerbtn.addEventListener("click",()=>{
            asideSectionTogglerBtn();
          })


          function asideSectionTogglerBtn(){
            aside.classList.toggle("open");
            navTogglerbtn.classList.toggle("open");
            for(let j=0; j<totalSection; j++){
                allSection[j].classList.toggle("open"); 
            }
          }