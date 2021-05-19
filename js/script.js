var app = new Vue (
    {
        el:"#root",
        data:{
            list:[
                {
                    name: "Cucinare",
                    value: false
                },
                {
                    name: "Palestra",
                    value: false
                },
                {
                    name: "Lavorare",
                    value: false
                },
                {
                    name: "Fare la spesa",
                    value: false
                }
            ],
            newActivity:" x"
        },
        methods:{
            close: function(index){
                 console.log(this.prova);
                if(this.list.name == index.name) {
                   console.log("ciao");
                    console.log(index);
                    this.list.splice(index,1);
                }
            
            },
            add: function(){
                this.list.push(
                    {
                        name:this.newActivity,
                        value: false

                    }

                )
            }

        }
    }
)

// var ciao=[0,1];
// for(var i=0; i > ciao.length) console.log(list);
