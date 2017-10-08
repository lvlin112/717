<template>
			
	    <!-- 收货人 -->
		<div class="person">
			<loading class="loa" :loadshow='isshow'></loading>	
			<tips>{{tip_info}}</tips>

			<adder-top>
			   <span slot="add">收货人</span>
			    <span  @click="back" slot="back"><</span>
			</adder-top>
			<div class="person_cont">
				<p class="delivery_user"><input type="text" placeholder="收货人姓名" v-model="user"></p>
				<p class="delivery_tel"><input type="text" placeholder="手机号" v-model="tel"></p>
				<!-- 选择地址 -->
				<div class="select_adder">
					<div class="sheng">
					  <span class="allow"></span>
					  <!-- 现实具体省份 -->
					  <select class="sheng_detail" v-model="province">
						<option :value="i.name" v-for="i in province_list">{{i.name}}</option>	
					  </select>
					</div>
					<div class="shi">
						<span class="allow"></span>
						<select class="shi_detail" v-model="city">
							<option :value="i.name" v-for="i in city_list">{{i.name}}</option>
						</select>
					</div>
					
				</div>
				<div class="qu">
					<span class="allow"></span>
					<select class="qu_detail" v-model="area">
						<option v-for="i in area_list">{{i}}</option>
					</select>
				</div>
				<p class="delivery_detail"><input type="text" v-model="detail" placeholder="详细地址"></p>
				<div class="default"><input type="checkbox"><span>设置为默认</span></div>
				<div class="save" @click="save">
					<span>保存</span>
				</div>
			</div>
		</div>
</template>
<script scoped>
//1 获取数据并渲染   v-model来监听城市变化 select上v-model监听的是value的变化
//点击保存时把数据发给后台 要先验证输入的数据是或正确
//后台 存数据到 cookie 
//在前端created中发送请求获存放的数据
import addertop from "../../components/mine/addertop.vue"
import tips from "../../components/tips.vue"
import {mapState} from 'vuex'
import token from "../../tool/getcookie.js"
import load from "../loading.vue"
import axios from "axios"
	export default {
		data:function(){
			return {
					province_list:"",
					province:"",
					city_list:"",
					city:"",
					area:"",
					area_list:"",
					tel:"",
					user:"",
					tip_info:"提示信息",
					detail:"",
					isshow:false

			}
		},
		created:function(){
			// //需要用到Promois来处理并发请求
			// let getAll= new Promise((resolve,reject)=>{
			// 	this.$http.post("/adders").then((res)=>{
			// 	resolve(res.data)
			//    })
			//  }) 
			// let getonce=new Promise((resolve,reject)=>{
			// 	let params=this.$route.params
			// 	let id=params.id
			// 	let token=params.token
			// 	this.$http.post("/edit_adder_tow",{
			// 	token:token,
			// 	id:id
			// }).then((res)=>{
			// 	resolve(res.data)
			// })
			// })
			// Promise.all([getAll,getonce]).then((res)=>{
			// 	    this.isshow=false
			// 	    this.province_list=res[0]
			// 		this.user=res[1].user,
			// 	    this.province=res[1].province,
			// 		this.city=res[1].city,
			// 		this.area=res[1].area,
			// 		this.tel=res[1].tel,
			// 		this.detail=res[1].detail
			// })
			//这个是请求全部的收货地址
			this.$http.post("/adders").then((res)=>{
				this.province_list=res.data
			})
			//这个是要请求编辑时获取的后台的地址
			let params=this.$route.params
			let id=params.id
			let token=params.token
			if(id){
			this.$http.post("/edit_adder_tow",{

				token:token,
				id:id
			}).then((res)=>{//重新赋值
					this.province=res.data.province,
					this.city=res.data.city,
					this.area=res.data.area,
					this.tel=res.data.tel,
					this.detail=res.data.detail
			})	
			}



		},
		methods:{
			tipshow:function(info){
				this.$store.state.istips=true
				this.tip_info=info
				setTimeout(()=>{
				this.$store.state.istips=false
				},1000)
			},
			save:function(){//----验证输入的数据
				console.log(this.user)
				let RegPhone = /\d{1,11}/;
				if(!this.user){
					this.tipshow("用户能为空")
					return 
				}
				if(!RegPhone.test(this.tel)){
					this.tipshow("电话不能为空")
					return 
				}
				if(!this.province){
					this.tipshow("省不能为空")
					return 
				}
				if(!this.city){
					this.tipshow("市不能为空")
					return 
				}
				if(!this.area){
					this.tipshow("区不能为空")
					return 
				}
				if(!this.detail){
					this.tipshow("街道不能为空")
					return 
				}
				//当验证成功以后把数据发送到后台======
				this.$http.post("/getAdder",{
					token:token(),
					user:this.user,
					tel:this.tel,
					province:this.province,
					city:this.city,
					area:this.area,
					detail:this.detail

				}).then((res)=>{
					if(res.data==1){
						setTimeout(()=>{
							this.tipshow("保存成功")
						},0)
					}
				})
				setTimeout(()=>{
					this.$router.push("/addressGit")
				},1000)
			
				//添加成功以后要跳转路由
				
			},
			back () {
				this.$router.push("/addressGit")
			}
		},
		watch:{
			province:function(n){
				if(this.province_list.length>0){
				this.province_list.forEach((v,i)=>{
					if(v.name==n){
						this.city_list=v.city
					}
				})
				}

			},
			city:function(n){
				if(this.city_list.length>0){
				this.city_list.forEach((v,i)=>{
					if(v.name==n){
						this.area_list=v.area
					}
				})
				}
			}
		},
		components:{
			"adder-top":addertop,
			"tips":tips,
			"loading":load
		},
		computed:{
			...mapState(["istips"])
		}
	}

</script>
<style scoped lang="scss">
	.select_adder{
		width: 100%;
		height:1rem;
		display: flex;
		margin-top: .3rem;
		justify-content:space-between;

	}
	.loa{
		width: 100%;
		height:100%;
		position: absolute;
		left:0;
		top:0;
		z-index: 1001
	}
		.default{
		width: 100%;
		height:1rem;
		margin-top: .3rem;

	}
	.allow{
		width: 0;
		height:0;
		border-left: .15rem solid transparent;
        border-right: .15rem solid transparent;
        border-top: .15rem solid #000;
        position:absolute;
        top:50%;
        right:.2rem;
        margin-top: -.1rem;
        z-index: 1001
	}
	.person{
		width: 100%;
		height:100%;
		background: #eee;
		position: relative;
	}

	.sheng,.shi{
		width: 40%;
		height:100%;
		background: #fff;
		line-height: 1rem;
		text-indent: .2rem;
		position:relative;
		span{
			display: inline-block;
		}
	}
	.save{
		width: 70%;
		margin:0 auto;
		height:1rem;
		border-radius: .5rem;
		background: red;
		text-align: center;
		line-height: 1rem;
		margin-top: .3rem;
		font-size:.35rem;
		color:#fff;
	}
	.sheng_detail,.shi_detail,.qu_detail{
		border:none;
		appearance:none;
		outline: none;
		width: 100%;
		height:1rem;
		margin-left:.1rem;
/*		opacity: 0;*/
		position: absolute;
		left:0;
		top:0;
		z-index: 1000;
		background: #fff;
		li{
			width: 100%;
			height:.7rem;
			line-height: .7rem;
			text-align: center;
		}
	}
	.qu{
		width: 100%;
		height:1rem;
		margin-top: .3rem;
		background: #fff;
		line-height: 1rem;
		text-indent: .2rem;
		position:relative;
		span{
			display: inline-block;
		}
	}
	.person_cont{
		width: 95%;
		margin:0 auto;
		p{
			width: 100%;
			height:1rem;
			margin-top:.3rem;
			input::-webkit-input-placeholder{ /*WebKit browsers*/
               font-size:.3rem;
           }
			input{
				width: 100%;
				height: 100%;
				border:none;
				background: #fff;
				text-indent: .2rem;
				outline: none;
               -webkit-appearance: none;
			}
		}
	}
</style>