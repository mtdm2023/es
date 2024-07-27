var slider = document.getElementsByClassName('Slider_container');
var slider_item = document.getElementsByClassName('Slider_card');
var slider_next_button = document.querySelector('.next_button')
var slider_previuse_button = document.querySelector('.previous_button')
var xoffset = 0;

slider_previuse_button.addEventListener('click' , ()=>{
    slider_move('-' , 200)
   
   
})
slider_next_button.addEventListener('click' , ()=>{
    slider_move('+' , 200)
})

function slider_move (sign , offset ) {
     if(sign == '+')
        {
          xoffset += offset
        }
        else
        {
            xoffset -= offset
        }
        for(let i = 0; i<slider_item.length ; i++)
            this.slider_item[i].style.transform = `translateX(${xoffset}px)`;

  }