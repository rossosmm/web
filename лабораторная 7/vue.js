let aplication = new Vue({
    el: "#app",
    data: {
        Avtor: "Empty",
        Login: "Empty",
        Subscrib: 0,
        Sign: 0,
        Note: 0,
        SelectAvtor: "elementary",        
        Pdata: post_main_info
    },
    computed:{
        SortPdata: function(){           
            return this.Pdata.filter(p =>{
                if(this.SelectAvtor === '' || this.SelectAvtor === 'elementary'){
                    this.Avtor = "Выведены все посты";
                    this.Login = "elementary"
                    this.Subscrib = this.Sign = 0;
                    this.Note = this.Pdata.length;
                    return true;
                }else{
                    if(this.SelectAvtor === p.Creator){
                        for(let i = 0; i<Avtors.length; i++){
                            if(p.Creator == Avtors[i].LoginAvtor){
                                this.Avtor = Avtors[i].NameAvtor;
                                this.Login = Avtors[i].LoginAvtor;
                                this.Subscrib = Avtors[i].SubscibersCount;
                                this.Sign = Avtors[i].SignCount;
                                this.Note = Avtors[i].NoteCount;
                            }
                        };
                    }
                    return this.SelectAvtor === p.Creator;
                }
            })
        }
    }
});