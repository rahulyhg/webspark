module.exports= {  
    onRequest() {  
        var data=this.request.data;
        this.database.select("wb_tag",{}).then(  (result)=>{
            this.render(JSON.stringify(result));
        })
    }
  }