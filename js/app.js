const LIST = [

{
    id: 1,
    nome: 'Ataque dos Titans',
    avatar: 'images/ataque-dos-titas.webp'
},
{
    id: 2,
    nome: 'Code Geass Lelouch',
    avatar: 'images/code-geass-lelouch-of-the-rebellion.webp'
},
{
    id: 3,
    nome: 'Fullmetal Alchemist',
    avatar: 'images/fullmetal-alchemist.webp'
},
{
    id: 4,
    nome: 'GTO Great Teacher',
    avatar: 'images/gto-great-teacher.webp'
},
{
    id: 5,
    nome: 'Hataraku Maou Sama',
    avatar: 'images/hataraku-maou-sama.webp'
},
{
    id: 6,
    nome: 'Hunter X Hunter',
    avatar: 'images/hunter-x-hunter.webp'
},
{
    id: 7,
    nome: 'No Gamer No Life',
    avatar: 'images/no-game-no-life.webp'
},
{
    id: 8,
    nome: 'Noragami',
    avatar: 'images/noragami.webp'
},
{
    id: 9,
    nome: 'One Punch Man',
    avatar: 'images/one-punch-man.webp'
},
{
    id: 10,
    nome: 'Oregairu',
    avatar: 'images/oregairu.webp'
},
{
    id: 11,
    nome: 'Re Zero Kara Hajimeru',
    avatar: 'images/re-zero-kara-hajimeru-isekai-seikatsu.webp'
},
{
    id: 12,
    nome: 'Saiki Kusuo no Psi Nan',
    avatar: 'images/saiki-kusuo-no-psi-nan.webp'
},
{
    id: 13,
    nome: 'Shigatsu Wa Kimi no Uso',
    avatar: 'images/shigatsu-wa-kimi-no-uso.webp'
},
{
    id: 14,
    nome: 'Shokugeki no Souma',
    avatar: 'images/shokugeki-no-souma.webp'
},
{
    id: 15,
    nome: 'Steins Gate',
    avatar: 'images/steins-gate.webp'
},
{
    id: 16,
    nome: 'Tengen Toppa Gurren',
    avatar: 'images/tengen-toppa-gurren-lagann.webp'
}

]



const app = new Vue({
    el: '#app',
    data: {
        title: '',
        Username: 'Otaku',
        animes: LIST,
        searchName: ''
    },
    methods:{
        like(Username){
            alert(`Gostou do anime ${Username}? assista a vontade`)
        },

    remove(id) {
            const list = this.animes

            const result = list.filter(item =>{
                return item.id !== id
            })
            this.animes = result

        },   

        search() {

            if (this.searchName === ''){
                return alert ('O campo de busca é obrigatório')
            }
            const list = this.animes = LIST

            const result = list.filter(item => {
                return item.nome === this.searchName
            })
            if (result.length <= 0){
                alert('Nada encontrado.')
            } else{
                this.animes = result
            }
            
        }
    }
})

//function boasvindas(nome){
 //  alert (nome +', seja bem Vindo(a)')
//}

//boasvindas('Otaku')
