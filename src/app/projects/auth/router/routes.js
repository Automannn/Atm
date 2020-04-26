
// 模块part 声明导入
import login from '../components/login/routes'
import auth from '../auth.vue'

const innerRoutes = [
  ...login
]
// 导入路由声明
export default [
  {
    path: '/',
    component: auth,
    redirect: '/login',
    children:
      innerRoutes.map((item) => ({
        ...item
      }))
  }
]
