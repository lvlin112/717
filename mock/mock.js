import axios from 'axios'
import axiosAdater from "axios-mock-adapter"
 
// This sets the mock adapter on the default instance 
let  mock = new axiosAdater(axios);

import goodslist from "../server/goodsData.json"
import goodslist2 from "../server/goodsData2.json"
import goodslist3 from "../server/goodsData3.json"
import addcart from "../server/add.json"
import address from "../server/address.json"

mock.onPost('/mall/index/getGoodsChannel',{channel_id:1}).reply(200,{
	data:goodslist
})

mock.onPost('/mall/index/getGoodsChannel',{channel_id:2}).reply(200,{
	data:goodslist2
})
mock.onPost('/mall/index/getGoodsChannel',{channel_id:3}).reply(200,{
	data:goodslist3
})



///添加购物车
// mock.onPost('/mall',{key_code:3,goods_id:123}).reply(200,addcart);//可以返回一个对象 或者函数 或者数值


//分类里面获取数据
import catagory from "../server/catagory.json"

mock.onPost("/h5/mtop.relationrecommend.wirelessrecommend.recommend").reply(function(){
	return new Promise(function(resolve,reject){
		setTimeout(()=>{
			resolve([200,catagory])
		},2000)
	})
})



//登录页面-----------------------
//模拟登录验证码  返回验证码
mock.onPost("/vertify").reply(function(config){
	let telvertify=JSON.parse(config.data).pn.slice(-4)
	return [200,telvertify]
})
//模拟注册过程
mock.onPost("/register").reply(function(config){
	let info=JSON.parse(config.data)
	//模拟数据库把信息放在本地存储中
	let ls=window.localStorage
	let arr=[]
	if(!ls.getItem("register_info")){
		arr.push(info)
	}else{
		// console.log(ls.getItem("register_info"))
		  arr=JSON.parse(ls.getItem("register_info"))//返回一个数组
		  console.log(JSON.parse(ls.getItem("register_info")))
		   arr.push(info)
	}
  	ls.setItem("register_info",JSON.stringify(arr))
	


	return [200,"success"]
})

//模拟登陆
mock.onPost("/login").reply(function(config){

	let login_info=JSON.parse(config.data)//获取登录信息
	let ls=window.localStorage
	let arr=JSON.parse(ls.getItem("register_info"))//进行对比
	let flag=""
	arr.forEach(function(v,i){
		if(v.tel_num==login_info.login_user && v.tel_psw==login_info.login_psw){
			flag=true
		}
	})
	if(flag){
		return [200,{//如果请求成功返回一个token
			token:login_info.login_user
		}]
	}else{
		return [500,"登录信息有误"]
	}
 
})
//添加购物车
mock.onPost("/getCarts").reply(function(config){
	let params=JSON.parse(config.data)

	//需要把传过来的数据存起来
	let ls=window.localStorage
	let token=params.token//需要根据token 来实现
	if(token){

		let cart_info={}
	if(ls.getItem("cartList")){
		//如果有把原来的赋值
		let add_list=JSON.parse(ls.getItem("cartList"))
		   add_list[params.token].push(params)
		  
		ls.setItem("cartList",JSON.stringify(add_list))
	}else{
		let obj={}
		obj[params.token]=[params]
        
		ls.setItem("cartList",JSON.stringify(obj))
	}
	return [200,1]
}else{
	return [200,"需要登录"]
}

})

//请求购物车
mock.onPost("/resgoods").reply(function(config){
    let params=JSON.parse(config.data)
	let token =params.token
	let ls=window.localStorage
	let add_list=JSON.parse(ls.getItem("cartList"))

	return [200,add_list && add_list[token]]
})

//删除购物车




//获取收货地址
mock.onPost("/adders").reply(function(){
 return new Promise(function(resolve,reject){
			resolve([200,address])
	})
})
//接收前台发过来的地址信息
mock.onPost("/getAdder").reply(function(config){
	let params=JSON.parse(config.data)
	//需要把传过来的数据存起来
	let ls=window.localStorage
	let token=params.token//需要根据token 来实现
	
	let cart_info={}
	if(ls.getItem("saveAdder")){
		let add_list=JSON.parse(ls.getItem("saveAdder"))
		  cart_info[token]=params
			console.log(JSON.parse(ls.getItem("saveAdder")))
			params.id=(add_list[token].length+1)//需要存一个ID做删除和编辑使用
		   add_list[params.token].push(params)
		ls.setItem("saveAdder",JSON.stringify(add_list))
	}else{
		let obj={}
		params.id=1
		obj[params.token]=[params]
        
		ls.setItem("saveAdder",JSON.stringify(obj))
	}
	return [200,1]
})


//接收前台的请求
mock.onPost("/getadder").reply(function(config){
  let params=JSON.parse(config.data)
	let token =params.token
	let ls=window.localStorage
	let add_list=JSON.parse(ls.getItem("saveAdder"))

	return [200,add_list && add_list[token]]
	
})

//删除收货地址
mock.onGet("/del_adder").reply(function(config){

	let token =config.token
	let id=config.id
	let ls=window.localStorage
	let add_list=JSON.parse(ls.getItem("saveAdder"))//获取的对象，最后要重新处置cookie
	let list=add_list[token]
	let index
	if(list){//这个盘点时必要的
		list.forEach((v,i)=>{
			if(v.id==id){//对应传进来的商品
				index=i
			}
		})		
	}
	list.splice(index,1)
	add_list[token]=list//重新赋值
	ls.setItem("saveAdder",JSON.stringify(add_list))
	//当删除成功返回信息 模拟延迟
    return new Promise(function(resolve,reject){
		setTimeout(()=>{
			resolve([200,'success'])
		},2000)
	})
})
//修改收货地址
mock.onPost("/edit_adder_tow").reply((configs)=>{
	let config=JSON.parse(configs.data)
	let token =config.token
	let id=config.id
	let ls=window.localStorage
	let add_list=JSON.parse(ls.getItem("saveAdder"))//获取的对象，最后要重新处置cookie
	let list=add_list[token]
	let index=[]
	if(list){//这个盘点时必要的
		list.forEach((v,i)=>{
			if(v.id==id){//对应传进来的商品
				index=v
			}
		})
	}	
    return new Promise(function(resolve,reject){
		setTimeout(()=>{
			resolve([200,index])
		},2000)
	 })
})