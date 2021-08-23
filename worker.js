onmessage = function(e) {
  console.log('Worker received message.')
  const num = e.data
  // 参数必须为数字类型
  if(isNaN(num)) throw new TypeError('Params is invalid.')

  // 引入脚本
  // importScripts('./jybdsdk-1.0.3.js')

  // 引入失败
  // try {
  //   importScripts('./xxx.js')
  // } catch(err){
  //   console.log(err);
  // }

  // importScripts('./webbridge-1.0.3.js')

  // console.log(mdbs);
  // console.log(jybdJSBridge);

  importScripts('./fb.js')
  let res = fb(num)

  // 消息返回
  console.log('Message post back.');
  // postMessage('From worker.js')
  postMessage(res)
}
