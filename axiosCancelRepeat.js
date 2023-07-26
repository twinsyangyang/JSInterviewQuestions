import axios from 'axios';

// 用于记录上一次请求的信息
let lastRequest = null;

// 创建一个取消令牌对象
const cancelTokenSource = axios.CancelToken.source();

// 请求拦截器，用于记录请求信息
axios.interceptors.request.use(config => {
  // 检查上一次请求的信息是否与当前请求相同
  if (lastRequest && config.url === lastRequest.url && JSON.stringify(config.params) === JSON.stringify(lastRequest.params)) {
    // 取消当前请求
    cancelTokenSource.cancel('重复请求');
  } else {
    // 记录当前请求信息
    lastRequest = {
      url: config.url,
      params: config.params,
    };
  }
  return config;
});

// 发送请求
axios.get('/api/data', {
  cancelToken: cancelTokenSource.token
})
  .then(response => {
    // 处理响应
  })
  .catch(error => {
    if (axios.isCancel(error)) {
      console.log('请求被取消', error.message);
    } else {
      console.log('请求发生错误', error.message);
    }
  });
