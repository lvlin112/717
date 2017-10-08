<template>

	<div class="wrap">
	    <!-- 收货地址 -->
	    
		<div class="adder">	
		<loading class="loa" :loadshow='isshow'></loading>		
		   <adder-top>
		       <span slot="add">收货地址</span>
		       <span  @click="back" slot="back"><</span>
		    </adder-top>
			<div class="cont">
				<div class="box" v-for="i in adder">
					<div class="box_top">
						<div class="box_top_nei">
							<p>
							<span>{{i.user}}</span>
							<span>{{i.tel}}</span>
							</p>
							<p>
							<span>{{i.province + " " + i.city +" " + i.area +" "+i.detail}}</span>
							</p>
						</div>		
					</div>
					<div class="box_bot">
						<p><input type="checkbox"><span>设置为默认</span></p>
						<p><span @click="edit_adder(i.id)">编辑</span>
						<span @click="del_adder(i.id)">删除</span>
						</p>
					</div>
				</div>

				<div class="add" @click="addClik">
					<span>添加地址</span>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
 import token from "../../tool/getcookie.js"
import addertop from "../../components/mine/addertop.vue"
import load from "../loading.vue"
	export default {
		data:function(){
			return {
				adder:[],
				isshow:false
			}
		},
		created:function(){
			//当获取数据的时候要判断是编辑进入 还是 添加地址进入
			this.$http.post("/getadder",{token:token()}).then((res)=>{
				this.adder=res.data
			})
		},
		methods:{
			addClik:function(){
				this.$router.push("./editaddress")
			},
			del_adder (id) {//删除收货地址
				//当点击删除的时候把当前的token id 发送给后端 
				//后端在数据库进行删除 返回一个success给前端
				//当前端收到sueecss时把页面中的数据进行删除
				this.isshow=true//等待时候的动画
				this.$http.get("/del_adder",{//请求删除的过程	
					id:id,
					token:token()
					}).then((res)=>{
						if(res.data=="success"){
							this.isshow=false//动画消失
							let index
							if(this.adder){//这个盘点时必要的
								this.adder.forEach((v,i)=>{
									if(v.id==id){//对应传进来的商品
										index=i
									}
								})		
							}
							this.adder.splice(index,1)
						}
					})
			},
			edit_adder (id) {//修改地址
				//点击编辑 把这一条信息发给后台 
				//后台得到这个信息存储起来
				//跳转路由
				if(id){
				 this.$router.push({
					name:"editaddress",
					params:{
						id:id,
						token:token()
					}
				})	
				}else{
					alert("还没有地址")
				}

			},
			back () {
				this.$router.push("Hello/mine")
			}

		},
		components:{
			"adder-top":addertop,
		  "loading":load
		},

	}
</script>
<style scoped lang="scss">
	.loa{
		width:100%;
		height:100%;
		position: absolute;
		left:0;
		top:0;
	}
	.wrap{
		width: 100%;
		height:100%;
		position:relative;
	}
	.select_adder{
		width: 100%;
		height:1rem;
		display: flex;
		margin-top: .3rem;
		justify-content:space-between;

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

	
	.adder{
		width: 100%;
		height:100%;
		background: #eee
	}
	.cont{
		width: 100%;
		overflow: auto;
	}

	.box{
		width: 100%;
		height:3rem;
		background: #fff;
		margin-bottom:.3rem;
	}
	.box_top_nei{
		width: 95%;
		height: 100%;
		margin:0 auto;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
		p{
			margin:.1rem 0;
		}
	}
	.box_top{
		width: 100%;
		height:2rem;
		border-bottom:1px solid #ccc;


	}
	.box_bot{
		height:1rem;
		display: flex;
		width: 95%;
		margin:0 auto ;
		justify-content: space-between;
		align-items: center;
	}
	.add{
		width: 70%;
		height:1rem;
		border-radius: .5rem;
		background: red;
		margin:0 auto;
		margin-top: .3rem;
		text-align: center;
		line-height: 1rem;
		color:#fff;

	}
</style>