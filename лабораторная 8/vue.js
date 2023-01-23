let aplication = new Vue({
    el: "#app",
    data: {    
        Pdata: null,
    },
    mounted(){
        axios
            .get('https://isidea.ru/rgups_data.json')
            .then(respose => this.Pdata = respose.data)
      }
});