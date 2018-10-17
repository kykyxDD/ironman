


var app = new Vue({
  el: '#main-page',
  computed: {
    item: {
        get: function() {
            var hash = location.hash.substr(1);
            return this.listInfo[hash] ? this.listInfo[hash] : this.listInfo.gym1
        }
    }
  },
  data: {
    message: 'Hello Vue!',
    listInfo: {
        gym1: {
            address: 'Кечкеметской, 27',
            timeWork: ['с 7.00 до 00.00', 'с 10.00 до 17.00'],
            btnInfo: [{
                id:1,
                type: 'address',
                text: 'Кечкеметской, 27 третий этаж',
                link: ''
            },{
                id:2,
                type: 'inst',
                text: 'instagram.com/ironman_simf',
                link: ''
            },{
                id:3,
                type: 'vk',
                text: 'vk.com/ironman_gym_balaklavskaya',
                link: ''
            },{
                id:4,
                type: 'phone',
                text: '+7 (978) 030-00-63',
                link: ''
            }],
            tableInfo:[{
                id: 1,
                textRed: 407,
                textWhite: "квадратных метров"
            },{
                id: 2,
                textRed: "7 тонн",
                textWhite: "нового профессионального железа"
            },{
                id: 3,
                textRed: "тренеры чемпионы",
                textWhite: "и рекордсмены Мира"
            },{
                id: 4,
                textRed: "индивидульные занятия",
                textWhite: "составление программ питания и тренировок"
            },{
                id: 5,
                textRed: "абонементы от 670 рублей",
                textWhite: "в месяц"
            },{
                id: 6,
                textRed: "скидки до 33%",
                textRed: "акции и подарки"
            }]
        },
        gym2: {
            address: 'Балаклавской, 41',
            timeWork: ['с 7.00 до 23.00', 'с 10.00 до 17.00'],
            btnInfo: [{
                id:1,
                type: 'address',
                text: 'Балаклавская, 41, рядом с бильярдом',
                link: ''
            },{
                id:2,
                type: 'inst',
                text: 'instagram.com/ironman_simf',
                link: ''
            },{
                id:3,
                type: 'vk',
                text: 'vk.com/ironman_gym_balaklavskaya',
                link: ''
            },{
                id:4,
                type: 'phone',
                text: '+7 (978) 040-00-84',
                link: ''
            }],
            tableInfo:[{
                id: 1,
                textRed: 250,
                textWhite: "квадратных метров"
            },{
                id: 2,
                textRed: "новое",
                textWhite: "профессиональное оборудование"
            },{
                id: 3,
                textRed: "тренеры чемпионы",
                textWhite: "и рекордсмены Мира"
            },{
                id: 4,
                textRed: "индивидульные занятия",
                textWhite: "составление программ питания и тренировок"
            },{
                id: 5,
                textRed: "скидки до 33%",
                textWhite: "акции, конкурсы и подарки"
            },{
                id: 6,
                textRed: "спортбар и спиртивное питание"
            }]
        },
        gym3: {
            address: 'Горького, 8',
            timeWork: ['с 7.00 до 00.00', 'с 10.00 до 17.00'],
            btnInfo: [{
                id:1,
                type: 'address',
                text: 'Горького, 8 напротив к/т Шевченко',
                link: ''
            },{
                id:2,
                type: 'inst',
                text: 'instagram.com/ironman_simf',
                link: ''
            },{
                id:3,
                type: 'vk',
                text: 'vk.com/ironman_gym_balaklavskaya',
                link: ''
            },{
                id:4,
                type: 'phone',
                text: '+7 (978) 040-00-54',
                link: ''
            }],
            tableInfo:[{
                id: 1,
                textRed: 390,
                textWhite: "квадратных метров"
            },{
                id: 2,
                textRed: "7 тонн",
                textWhite: "нового железа"
            },{
                id: 3,
                textRed: "тренеры чемпионы",
                textWhite: "и рекордсмены Мира"
            },{
                id: 4,
                textRed: "бесплатные",
                textWhite: "тренировки по воскресеньям"
            },{
                id: 5,
                textRed: "скидки",
                textWhite: "до 33%"
            },{
                id: 6,
                textRed: "спортбар и спортивное питание"
            }]
        },
        gym4: {
            address: 'куйбышева, 36',
            timeWork: ['с 7.00 до 00.00', 'с 10.00 до 17.00'],
            btnInfo: [{
                id:1,
                type: 'address',
                text: 'куйбышева, 36 второй этаж',
                link: ''
            },{
                id:2,
                type: 'inst',
                text: 'instagram.com/ironman_simf',
                link: ''
            },{
                id:3,
                type: 'vk',
                text: 'vk.com/ironman_gym_balaklavskaya',
                link: ''
            },{
                id:4,
                type: 'phone',
                text: '+7 (978) 050-00-36',
                link: ''
            }],
            tableInfo:[{
                id: 1,
                textRed: 'просторный',
                textWhite: "и читый тренажерный зал"
            },{
                id: 2,
                textRed: "новое",
                textWhite: "профессиональное оборудование"
            },{
                id: 3,
                textRed: "мощная",
                textWhite: "система вентиляции, кондиционеры"
            },{
                id: 4,
                textRed: "проф. покрытие",
                textWhite: "составление программ питания и тренировок"
            },{
                id: 5,
                textRed: "спортбар и спортинвое питание",
                textWhite: "в месяц"
            },{
                id: 6,
                textRed: "скидки до 33%",
                textWhite: "акции и подарки"
            }]
        },
    },
    
  }
})