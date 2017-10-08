<template>
	<div class="wrap">
	<div class="kong" v-show="iskong">
		<span>快来买！</span>
	</div>
		<header>
			<div class="nei">
				<div class="left"><i class="iconfont shouye"></i></div>	
				   <span>购物车</span>
				<div class="right">
					<span @click="change_edit">{{edit}}</span>
					<i class="iconfont shouye"></i>
				</div>
			</div>
		</header>
		<!-- 内容部分 -->
		<div class="cont">
			<div class="con_scroll">
				<cartBox-com  v-for="item in car_lists" :item="item"></cartBox-com>
			</div>
			
		</div>
	 <footer>
		<div class="fot_left">
			<p class="allselect">
				<span class="selectA" :class="{red:selectAll}" @click="all"></span>
				<span>全选</span>
			</p>
			<div class="pricall">
				<p class="pricall_p1"><span>合计</span><span>{{countSum}}</span></p>
				<p>(运费124)</p>
			</div>
		</div>
		<div class="fot_right" @click="jie">
			{{jiesuan}}
		</div>
	  </footer>
	</div>

</template>
<script>
	import cartBox from "./cartshop/cartshop.vue"
	import {mapState} from 'vuex'
	import {mapGetters} from 'vuex'
	import {mapMutations} from 'vuex'
	import token from "../tool/getcookie.js"
	export default {
		
		data:function(){
			return {
				allsel:false,
				car_lists:[],
				newallsel:false,
				edit:"编辑",
				jiesuan:"结算",
				isedit:true,
				arr:[],
				selectAll:false,
				iskong:false
			}
		},
		created:function(){//请求默认购物车的
			this.$http.post("/resgoods",{token:token()}).then((res)=>{
				// console.log(res.data)
				 this.car_lists=res.data

			})
		},
		watch:{
			
			
		},
		components:{
			'cartBox-com':cartBox
		},
		computed:{	
			...mapState(["car_list"]),//会把car_list映射到this上面
			countSum:function(){//计算总价
				let sum =0	
				this.car_lists.forEach((v,i)=>{
					if(v.checked){
						 sum+=v.price*v.count
					}
				
				
				})
				return sum.toFixed(2)
			 },
		},
		methods:{

	    	jieshao:function(data){},
			change_edit () {
				if(this.isedit){
					this.edit="完成"
					this.jiesuan="删除"
					this.isedit=false
				}else{
					this.edit="编辑"
					this.jiesuan="结算"
					this.isedit=true
				}
			},

			jie () {
						if(this.isedit){
							this.$router.push("/zhifu")
						}else{
							//当点击删除时发送选中的商品到后台
							
							this.car_lists.forEach((v,i)=>{
									if(v.checked){
										this.car_lists.splice(i,1)
									}	
							})
							
					}
		},
		all () {
				this.selectAll=!this.selectAll
				this.car_lists.forEach((v,i)=>{
					if(typeof v.checked == 'undefined'){
					 this.$set(v,"checked",this.selectAll)
					}else{
						 v.checked=this.selectAll
						}
				})
		}
		

	}
}
</script>
<style scoped lang="scss">
/*	.kong{
		width:100%;
		height:100%;
		background: pink;
		position: absolute;
		left:0;
		top:0;
		text-align: center;
		line-height: 2rem;
		color: #fff;
		font-size
	}*/
	.wrap{
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column;
		background: #EEEEEE;
		position: relative;
	}
	header{
		width: 100%;
		height:1rem;
		border-bottom:1px solid #ccc;
		background: #fff

	}
	.nei{
		width:95%;
		height:100%;
		margin:0 auto;
		text-align: center;
		line-height: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.cont{
		width: 100%;
		flex: 1;
		overflow: auto
	}
	.con_scroll{
		width:100%;


	}
	
	footer{
		width:100%;
		height:1rem;
		background: #fff;
		display: flex;

	}
	.fot_right{
		width: 2.5rem;
		height:100%;
		background: red;
		text-align: center;
		line-height: 1rem;
		color:#fff;
		font-size:.35rem;
	}
	.fot_left{
		flex:1;
		height:100%;
		display: flex;
		justify-content: space-between;
	}
	.allselect{
		line-height: 1rem;
		font-size:.4rem;
		input{
			margin:0 .18rem;
		} 
	}
	.pricall{
		margin-right: .18rem;
		font-size:.2rem;
	}
	.pricall_p1{
		font-size:.3rem;
		margin-top:.1rem;
	}
	.selectA{
		display: inline-block;
		width:.4rem;
		height:.4rem;
		border:1px solid #ccc;
		border-radius: 50%;
		margin-left:.1rem;
	}
	span.red{
		background: red
	}
</style>