import catagory from '../pages/catagory/catagory'
import discover from '../pages/discover/discover'
import firstView from '../pages/firstView/firstView'
import personal from '../pages/personal/personal'
import shopCart from '../pages/shopCart/shopCart'
//------识物路由-----
import recommond from '../pages/discover/recommond/recommond'
import commont from '../pages/discover/commont/commont'



//-----切换登录方式路由---
import phoneLogin from '../pages/personal/phoneLogin/phoneLogin'
import emailLogin from '../pages/personal/emailLogin/emailLogin'

export default [
    {
      path:'/catagory',
      component:catagory,
      meta:{
        isFoot:true
      }
    },
    {
      path:'/discover',
      component:discover,
      meta:{
        isFoot:true
      },
      children: [
        {
          path:'/discover/commont',
          component:commont,
          meta:{
            isFoot:true
          }
        },
        {
          path:'/discover/recommond',
          component:recommond,
          meta:{
            isFoot:true
          }
        }
      ]
    },
    {
      path:'/firstView',
      component:firstView,
      meta:{
        isFoot:true
      }
    },
    {
      path:'/personal',
      component:personal,
      children:[
        {
          path:'/personal/phoneLogin',
          component:phoneLogin
        },
        {
          path:'/personal/emailLogin',
          component:emailLogin
        }
      ]

    },
    {
      path:'/shopCart',
      component:shopCart,
      meta:{
        isFoot:true
      }
    },
    {
      path:'',
      redirect:'/firstView',
      meta:{
        isFoot:true
      }
    }
]
