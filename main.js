$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        
        rtl:true,
        items:4,
        loop:true,
        nav:false,
        margin:5,
        padding: 5,
        animateOut: 'slideOutDown',
        mergeFit:true,
        merge:true,
 
        responsive:{
        0:{
            items:1,
            stagePadding:0,
            dots:false
        },
        485:{
            items:1,
            
            dots:false
        },
        728:{
            items:3,
            dots:false,
            stagePadding:0,
        }
        ,
        960 :{
            items:4,
            
            dots:false
        }
        ,
        1200: {
            items:4,
            dots:false,
            margin:60,
            stagePadding:90,
            
         
        }
    }
        
        
    });


    $(".section4_owl").owlCarousel({
        nav:false,
        dots:false,
        rtl:IsRtl,
        margin:20,
        responsive:{
            0:{
                items:1,
                stagePadding:30,
                margin:0    
            },375:{
                items:1,
                stagePadding:20,
            },425:{
                items:1,
                stagePadding:0,
                
            },
            550:{
                items:2
            },768:{
                items:3,
                stagePadding:50,
                
            },
            1000:{
                items:1,
                stagePadding:0,
                margin:20
                
            }
        }
    })
    $(".section9_owl").owlCarousel({
        nav:false,
        dots:false,
        rtl:IsRtl,
        margin:20,
        responsive:{
            0:{
                items:1,
                stagePadding:30,
                margin:0    
            },375:{
                items:1,
                stagePadding:20,
            },425:{
                items:1,
                stagePadding:0,
                
            },
            550:{
                items:2
            },768:{
                items:3,
                stagePadding:50,
                
            },
            1000:{
                items:1,
                stagePadding:0,
                margin:20
                
            }
        }
    })
  });

var button_registerNow1 = document.getElementsByClassName('button_registerNow');
var manu_1 = document.getElementsByClassName('sub-menu-1');
var manu_2 = document.getElementsByClassName('sub-menu-2');
var manu_3 = document.getElementsByClassName('sub-menu-3');
var section4_nav_next_button = document.getElementsByClassName("next_button_carousel4");
var section4_nav_prev_button = document.getElementsByClassName("previous_button_carousel4");

var toggle = false;
var toggle1 = false;
var toggle2 = false;

    manu_3[0].addEventListener('click', () => {    
       if(toggle === false)
        {
            manu_3[0].innerHTML +=`<div class="sub-menu-container1"><ul><li class="SomarMedium ts-fs-24" style ="cursor: pointer;">من نحن</li><li class="SomarMedium ts-fs-24" style ="cursor: pointer;">فريق العمل</li><li class="SomarMedium ts-fs-24" style ="cursor: pointer;">انضم لفريقنا</li></ul></div>`
      
            toggle = true  
         }
         else
        {
        console.log('here element to remove')
        let Eleemnt_to_remove1 = manu_3[0].querySelector('.sub-menu-container1');
        manu_3[0].removeChild(Eleemnt_to_remove1)
        toggle = false
        }
     });
    manu_2[0].addEventListener('click', () => {    
        if(toggle1 === false)
         {
             manu_2[0].innerHTML +=`<div class="sub-menu-container2"><ul><li class=" SomarMedium ts-fs-24" style ="cursor: pointer;">سجل كمستودع</li><li class="SomarMedium ts-fs-24" style ="cursor: pointer;">سجل كعميل</li></ul></div>`
       
             toggle1 = true  
          }
          else
         {
       
         let Eleemnt_to_remove2 = manu_2[0].querySelector('.sub-menu-container2');
         manu_2[0].removeChild(Eleemnt_to_remove2)
         toggle1 = false
         }
     });
    manu_1[0].addEventListener('click', () => {    
        if(toggle2 === false)
         {
             manu_1[0].innerHTML +=`<div class="sub-menu-container3"><ul><li class="SomarMedium ts-fs-24" style ="cursor: pointer;">الاخبار</li><li class="SomarMedium ts-fs-24" style ="cursor: pointer;">خطوات ارشاديه</li><li class="SomarMedium ts-fs-24" style ="cursor: pointer;">الفيديو</li></ul></div>`
       
             toggle2 = true  
          }
          else
         {
         console.log('here element to remove')
         let Eleemnt_to_remove3 = manu_1[0].querySelector('.sub-menu-container3');
         manu_1[0].removeChild(Eleemnt_to_remove3)
         toggle2 = false
         }
     });

     button_registerNow1[0].addEventListener('click' , ()=>{
        document.body.innerHTML  +='<div style="position:fixed; top:0;  width:100vw; height:100vh; background: linear-gradient(#191919 , #7F7F7F); opacity:0.5;" ></div>'+
        '   <div class = "centered-div d-flex flex-column justify-content-around align-items-center" style = " opacity:1; transition: 0.3s ease-in-out;z-index : 1000; position: fixed; top : 50%; right : 50%; width: inherit; height: inherit; max-width : 871px; max-height : 510px; background-color :#FFFFFF ; transform:translate(50% , -50%);box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);  border-radius: 40px;" ><p class="SomarSemiBold ts-fs-60">اختر نوع الحساب الذي تريد انشاؤه</p><div class=" d-flex justify-content-center align-items-center" style=" width: 50% ; height: 94px; background-color: #F79321;">   <p class="SomarBold ts-fs-36 text-white"><span><img style="width: 28px; height: 35px;" src="../images/client_icon_modal.svg" alt=""></span>سجل الآن كعميل </p></div> <div class="d-flex justify-content-center align-items-center" style=" width: 50% ; height: 94px; background-color: transparent; border: 1px solid #F79321;"> <p class="SomarBold ts-fs-36 " style="color: #F79321;"><span><img style="width: 28px; height: 35px; " src="../images/stock_icon_modal.svg" alt=""></span>مالك المستودع</p></div> </div>';
      
        
     })

     this.section4_nav_next_button[0].addEventListener('click' , ()=>{
        console.log("next");
        section4_nav_next_button[0].classList.add('active_nav_carousel_sec_4');
        section4_nav_prev_button[0].classList.remove('active_nav_carousel_sec_4')
     })
        
     this.section4_nav_prev_button[0].addEventListener('click' , ()=>{
        console.log("prev");
        section4_nav_next_button[0].classList.remove('active_nav_carousel_sec_4');
        section4_nav_prev_button[0].classList.add('active_nav_carousel_sec_4')
     })
        

 
