const worker =require('../config/worker_config')
console.log(worker?"worker":"notworker");
worker.on('message',async(data)=>{
    console.log(data,"message from worker");
    
})
class firstController{
  static startWorker=async()=>{
  worker.postMessage({liveprice:true})
  
  }
}
module.exports ={firstController}