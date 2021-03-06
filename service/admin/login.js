var crypto = require('crypto');
 
module.exports= {  
    onRequest() {  
        var data=this.request.data;
        if(data){
            var password=crypto.createHash('md5').update(data.password).digest("hex");

            this.database.select("wb_user",{
                type:1,
                userName:data.userName,
                password:password
            }).then((result)=>{
               if(result.length>0){
                   var userName=result[0].userName;
                   this.session.set({"userName":userName}).then(()=>{
                        this.render(JSON.stringify({
                            code:"OK",
                            userName:userName
                        }));
                   })
        
               }else{
                    this.render(JSON.stringify({
                        code:"Error",
                        msg:"username or password is not correct"
                    }));
               }
                
            })
        }
        
    }
  }