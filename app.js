// SPA - Single Page Application
// Интерполяция - {{ }}
// Директива - все атрибуты, которые начинаются на v-

let id = 1;
const app = {
    data() {
        return {
            title: 'Выберите категорию',
            game: '',  //menu category
            text: '', //input name
            list: {
                csgo: ['qqq','www','eee'],
                dota: ['aaa','sss','ddd'],
                pubg: ['zzz','xxx','ccc'],
            }
            
              
        }
    },
    
    methods: {  // может работать с асинхонным кодом
        
        addName() {
             if(this.game != '' && this.text != '') {
                this.list[this.game].push(this.text)
                this.text = ''
                this.game = ''
             }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        
    },
    computed: {
        countGamers() {
            return this.list.csgo.length + this.list.dota.length + this.list.pubg.length
        }
    }
    
}
Vue.createApp(app).mount('#app')