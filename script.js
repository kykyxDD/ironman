Vue.component('todo-item', {
  props: ['todo'],
  template: [
    '<div class="col-sm-6 col-12 item-gym" >',
		'<div class="item-gym--photo bg-white" v-bind:style="{ backgroundImage: `url(${todo.img})` }">',
			// '<img v-bind:src="todo.img">',
		'</div>',
		'<div class="item-gym--info d-flex flex-wrap">',
			'<a href="https://www.google.com/maps/place/27+%D0%9A%D0%B5%D1%87%D0%BA%D0%B5%D0%BC%D0%B5%D1%82%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+%D0%A1%D0%B8%D0%BC%D1%84%D0%B5%D1%80%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C+95000/@44.975395,34.1012443,17z/data=!3m1!4b1!4m5!3m4!1s0x40eae7605b3abd2f:0xf8fc9c9d735aa5d6!8m2!3d44.975395!4d34.103433" class="item-gym--info--address d-flex align-items-center text-red">',
				'<div class="icon-circle"><img src="./images/icon_map.png"></div>',
				'<b>{{todo.address}}</b>',
			'</a>',
			'<div class="d-flex">',
				'<div class="item-gym--info--soc">',
					'<a v-bind:href="todo.inst" class="icon-circle">',
						'<img src="./images/icon_inst.png">',
					'</a>',
				'</div>',
				'<div class="item-gym--info--soc">',
					'<a href="" class="icon-circle">',
						'<img src="./images/icon_vk.png">',
					'</a>',
				'</div>',
				'<div class="item-gym--info--soc">',
					'<a href="tel:+7(978)030-00-63" class="text-grey text-decoration-none d-flex align-items-center"> <div class="icon-circle mr-2"><img src="./images/icon_phone__gray.png"/></div> <div>{{todo.phone}}</div></a>',
				'</div>',
			'</div>',
		'</div>',
	'</div>'].join('')
})



var app = new Vue({
  el: '#main',
  data: {
    message: 'Hello Vue!',
    todos1: [{
    	id:1,
    	img: "./images/gym1.png",
    	address: 'Кечкеметская, 27',
    	phone: '+7 (978) 030-00-63',
    	inst: ''
    },
    {
    	id:2,
    	img: "./images/gym2.png",
    	address: 'Балаклавская, 41',
    	phone: '+7 (978) 040-00-84',
    	inst: ''
    }],
    todos2: [
    {
    	id:3,
    	img: "./images/gym3.png",
    	address: 'Горького, 8',
    	phone: "+7 (978) 040-00-54",
    	inst: ''
    },
    {
    	id:4,
    	img: "./images/gym4.png",
    	address: 'Куйбышева, 36',
    	phone: '+7 (978) 050-00-36',
    	inst: ''
    }]
  }
})