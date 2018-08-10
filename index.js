Object.prototype.push2array = function(param){
  if(this instanceof Array){
    if(typeof param == 'string'){
      try {
        parse=JSON.parse(param)
      } catch (error) {
        console.log(error)
      }
    }
    if(param instanceof Array){
      for(let i=0;i<param.length;i++){
        this.push(param[i]);
      }
    }else if (param instanceof Object) {
      this.push(param);
    }
  }
}
