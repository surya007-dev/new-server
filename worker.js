const {parentPort}=require('worker_threads')
console.log(parentPort ?"parentPort":"notparentport");
parentPort.on('message',async(data)=>{
    console.log("message from parent",data);
    
  if(data){
    parentPort.postMessage({pair:true})
  }
})