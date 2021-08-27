/**
 * 基础API集合类
 */
import Abstract from '../abstract';
import {
  Login
} from '../types';


class Basic extends Abstract {
  Login(data: Login) {
    return  this.postReq({
      url: 'basic.login',
      data
    })
  }
}

// 单列模式返回对象
let instance;
export default (() => {
    if (instance) return instance;
    instance = new Basic();
    return instance;
})();