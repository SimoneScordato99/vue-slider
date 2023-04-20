const { createApp } = Vue

createApp({
  data() {
    return {
        contatore: 0,
        scrollalo: null,

        dune: [
            {
                image: './assets/img/dune-1.jfif',
                title: 'Dune',
                text: "La pellicola è la prima parte dell'adattamento cinematografico del romanzo omonimo scritto da Frank Herbert, primo capitolo del ciclo di Dune,[3] già trasposto nel film del 1984 di David Lynch e con le miniserie televisive Dune - Il destino dell'universo (2000) e I figli di Dune (2003).",
            }, 
            {
                image: './assets/img/dune-2.jfif',
                title: 'Stilgar',
                text: 'Stilgar, interpretato da Javier Bardem: capo della tribù dei Fremen del sietch Tabr.',
            }, 
            {
                image: './assets/img/dune-3.jfif',
                title: 'Dune',
                text: "In un distante futuro dell'umanità esiste un pianeta chiamato Arrakis, detto 'Dune'. Questo pianeta, completamente sabbioso, è l'unica fonte della sostanza più preziosa dell'universo, la 'spezia'",
            }, 
            {
                image: './assets/img/dune-4.jfif',
                title: 'Duke Leto',
                text: 'Duca Leto Atreides, interpretato da Oscar Isaac: capo della Casa Atreides e padre di Paul.',
            }, 
            {
                image: './assets/img/dune-5.jfif',
                title: "Dune",
                text: "La pellicola ha incassato un guadagno totale di 400659169 $ in tutto il mondo, divenendo l'undicesimo incasso più elevato del 2021, battendo Godzilla vs. Kong ma venendo poi sorpassato da Eternals di Chloé Zhao",
            }, 
            {
                image: './assets/img/dune-6.jfif',
                title: "Thufir Hawat",
                text: 'Thufir Hawat, interpretato da Stephen McKinley Henderson: un mentat leale alla Casa Atreides.',
            }
      ]
    }
  },
  created(){
    this.scrollAuto()
  },
  methods: {
    next(){
        this.contatore++
        if(this.contatore > this.dune.length - 1 ){
            this.contatore = 0 ;
        } 
    },
    prev(){
        this.contatore--
        if(this.contatore < 0){
            this.contatore = this.dune.length - 1 ;
        } 
    },
    scrollAuto(){
        this.scrollalo = setInterval(()=> {
            this.next()
        }, 3000);
    },
    stopScroll(){
        this.scrollalo = null
    },
    setImg(k){
        this.contatore = k
    }
    


  }
}).mount('#app')