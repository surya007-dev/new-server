const {Worker,isMainThread} =require ("worker_threads")
const worker=new Worker('./services/worker')


module.exports=worker