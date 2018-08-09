//carousel code
let slider_images = document.getElementsByClassName('slider_image');
let carousel_dots = document.getElementsByClassName('circle');

let no_of_images = slider_images.length;

let current_slide = 0;

let slide_timer = setInterval(() => {

	//first image
	slider_images[current_slide].className = 'slider_image';
	carousel_dots[current_slide].className = 'circle';
	
	//next image
	//update the current_slide 

	current_slide = ( current_slide + 1) % no_of_images;

	slider_images[current_slide].className = 'slider_image display';
	carousel_dots[current_slide].className = 'circle current_dot';

}, 5000);

//code for carousel next and previous button

let previous_slide = document.getElementById('previous');
let next_slide = document.getElementById('next');

next_slide.onclick = ()=>{

	slider_images[current_slide].className = 'slider_image';

	current_slide = ( current_slide + 1) % no_of_images;

	slider_images[current_slide].className = 'slider_image display';
	
}

previous_slide.onclick = ()=>{

	slider_images[current_slide].className = 'slider_image';
	if(current_slide == 0){
		current_slide = 2;
	}else{
		current_slide = ( current_slide - 1) % no_of_images;
	}
	
	slider_images[current_slide].className = 'slider_image display';

}

function click_dot(position){

	slider_images[current_slide].className = 'slider_image';
	carousel_dots[current_slide].className = 'circle';

	current_slide = position;
	
	slider_images[current_slide].className = 'slider_image display';
	carousel_dots[current_slide].className = 'circle current_dot';
	
}
