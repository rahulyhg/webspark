module.exports= {  
    onRequest() {  
        var data=this.request.data;
        this.database.replace("wb_article",data).then((e)=>{
            
            this.render(JSON.stringify(e));
        })
        
    }
  }