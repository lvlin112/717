import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"
Vue.use(Vuex)
let store=new Vuex.Store({
	state:{
		success:false,
		car_list:[],
		allselect:false,
		oneSelect:false,
		sum:0,
		istips:false,
		
	},
	mutations:{ 
		get_car_list:function(state,data){//接收添加到购物车的商品信息
			state.car_list=data
			
		},
	},
	getters:{
		countSum:function(state){
			let sum =0	
			state.car_list.forEach((v,i)=>{
			
			 sum+=v.price*v.count
			
			})
			return sum
		}
	},
	actions:{

	}

})
export default store