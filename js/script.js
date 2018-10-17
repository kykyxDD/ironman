Vue.component('todo-item', {
  props: ['todo'],
  template: [
    '<div class="col-sm-6 col-xs-12 todo--item" >',
	    '<div class="item-gym">',
			'<a class="item-gym--photo bg-white" v-bind:href="`./gym.html#${todo.key}`" v-bind:style="{ backgroundImage: `url(${todo.img})` }">',
				// '<img v-bind:src="todo.img">',
			'</a>',
			'<div class="item-gym--info d-flex ">',
                '<div>',
    				'<a v-bind:href="`./gym.html#${todo.key}`" class="item-gym--info--address ">',
                        '<div class="d-flex flex-wrap">',
        					'<div class="text-black">Узнать про зал на</div>',
        					'<div class="text-white">{{todo.address}}</div>',
                        '</div>',
    				'</a>',
                '</div>',
				'<div class="d-flex align-items-center">',
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
		'</div>',
	'</div>'].join('')
})



var app = new Vue({
  el: '#main',
  data: {
    message: 'Hello Vue!',
    todos1: [{
    	id:1,
        key: 'gym1',
    	img: "./images/gym1.png",
    	address: 'Кечкеметская, 27',
    	phone: '+7 (978) 030-00-63',
    	inst: ''
    },
    {
    	id:2,
        key: 'gym2',
    	img: "./images/gym2.png",
    	address: 'Балаклавская, 41',
    	phone: '+7 (978) 040-00-84',
    	inst: ''
    }],
    todos2: [
    {
    	id:3,
        key: 'gym3',
    	img: "./images/gym3.png",
    	address: 'Горького, 8',
    	phone: "+7 (978) 040-00-54",
    	inst: ''
    },
    {
    	id:4,
        key: 'gym4',
    	img: "./images/gym4.png",
    	address: 'Куйбышева, 36',
    	phone: '+7 (978) 050-00-36',
    	inst: ''
    }]
  }
})