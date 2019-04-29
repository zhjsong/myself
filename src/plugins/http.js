import axios from 'axios'

const MyHttpServer={}
MyHttpServer.install=(Vue)=>{
    // 统一添加基准
    axios.defaults.baseURL='http://localhost:8888/api/private/v1/'
    // 添加实例方法
    Vue.prototype.$http=axios
}

export default MyHttpServer