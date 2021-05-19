var app = new Vue (
    {
        el:"#root",
        data:{
            list:[
                {
                    name: "Cucinare",
                    completed: false
                },
                {
                    name: "Palestra",
                    completed: false
                },
                {
                    name: "Lavorare",
                    completed: true
                },
                {
                    name: "Fare la spesa",
                    completed: false
                }
            ],
            newActivity:" ",



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
                        completed: false

                    }

                )
            },
            complete:function(index) {
                console.log(this.list[index].completed);
                if(this.list[index].completed == false) {
                    this.list[index].completed = true;
                }else{
                    this.list[index].completed = false;
                }
                console.log(this.list);
            }

        },
    }
)



// var ciao=[0,1];
// for(var i=0; i > ciao.length) console.log(list);
