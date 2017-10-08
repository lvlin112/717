import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from "../views/home"
import classify from "../views/classify"
import Social from "../views/Social"
import cart from "../views/cart"
import mine from "../views/mine"
import search_store from "../views/home/search_store"
import catagory from "../views/classfiy/catagory"
import store_detail from "../views/details"
import addressGit from "../views/mine/addressGit.vue"
import editaddress from "../views/mine/eidit.vue"
import loading from "../views/mine/load.vue"
import zhifu from "../views/cartshop/zhifu.vue"
import loadout from "../views/mine/loadout.vue"
Vue.use(Router)

let router=new Router({
  routes: [
    {
      path: '/',//当路径为“/""时跳转到
      redirect:"/Hello"
    },
     {
      path: '/Hello',
      redirect:"/Hello/home"
    },
   {
      path: '/Hello',
      name: 'Hello',
      component: Hello,
      children:[
      			 {//注意自路由不要加斜杠
      			 	name:"home",
      			 	path:"home",
      			 	component:home
      			 },
             {
              path:"classify",
              redirect:"classify/0",
              component:classify,
             },
      			 {
      			 	name:"classify",
      			 	path:"classify/:index?",
      			 	component:classify,
      			 },
      			 {
      			 	name:"Social",
      			 	path:"Social",
      			 	component:Social
      			 },
      			 {
      			 	name:"cart",
      			 	path:"cart",
      			 	component:cart
      			 },
      			 {
      			 	name:"mine",
      			 	path:"mine",
      			 	component:mine,
              meta: { name: 'dsss' }
      			 },
      			]
    },
    {
    	path:"/search_store",
    	name:"search_store",
    	component:search_store
    },
    {
      path:"/store_detail",
      name:"store_detail",
      component:store_detail
    },
    {
      path:"/addressGit",
      name:"addressGit",
      component:addressGit
    },
    {
      path:"/loading",
      name:"loading",
      component:loading
    },
    {
      path:"/zhifu",
      name:"zhifu",
      component:zhifu
    },
    {
      path:"/editaddress",
      name:"editaddress",
      component:editaddress
    },
    {
      path:"/loadout",
      name:"loadout",
      component:loadout
    }
  ]
})

//定义全局路由  在进入之前判断有没有登陆过
router.beforeEach((to,from,next)=>{
  if(to.name=="loading"){//如果没有这一步会陷入无限循环
    next()
    return 
  }
  if(to.name=="mine"){
      let cookie_list=  document.cookie.split(";")
  let tokenn=null
 for(var i=0; i<cookie_list.length;i++){
  if(cookie_list[i].indexOf("myCode")>-1){
    tokenn=cookie_list[i].split("=")[1]
  } 
  }
  //判断有没有存储过cokie
  if(!tokenn){
    next({
     path:"/loading"
    })
  }else{
    next()
  }
}else{
  next()
}


})
export default router