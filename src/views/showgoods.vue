<template>

	<dl @click="store_detail_age">
		<dt>
			<img :src='"http://www.lb717.com/"+items.obj_data' alt="">
		</dt>
		<dd>
			<p class="storeDetail_p1">{{items.goods_name}}</p>
			<p class="storeDetail_p2">
				<span class="storeDetail_p2_price">{{items.discount_price  | money('元')}}</span>
				<span class="cart_mask"  @click.stop="addcart">购物车</span>
			</p>
		</dd>
		</dl>
	
</template>
<script>
import {mapState,mapMutations,mapGetters} from 'vuex'
import tips from "../components/tips.vue"
import token from "../tool/getcookie.js"
	export default {

		data:function(){
			return {

			}
		},
		props:['items'],

		methods:{
				...mapMutations(["get_car_list"]),
				//思路----------------------
				//点击购物车把数据发给后台 数据{token:[{name:"nihao",price:"1"},{name:"nihao",price:"1"}]}
				//模拟后台把数据存进localStorage 
				//从localStorage 中返回添加的数据  在添加中要判断是不是同样的一个商品 同样的的只数量加就好了
				//前台获取数据 进行渲染
				//用set的方法查看是否选中
				addcart:function(){
						//1现货区cookie的值
						//把数据发给后台
						
						   this.$http.post("/getCarts",{
								id:this.items.goods_id,
							    name:this.items.goods_name, 
								price:this.items.discount_price,
								url:this.items.obj_data,
								count:1,
							   token:token()
										
						        }).then((res)=>{
						        		if(res.data==1){
						        			
						        			alert('添加成功')
						        		}else{
						        			alert(res.data)
						        		}	       	
						        }).catch((err)=>{
						        	
						        })		
				}, 
				store_detail_age:function(){
				       this.$router.push("/store_detail")
			      }
			},

		computed:{
			...mapState["car_list"]
		},

	}


</script>
<style>
	 dl dt{
		width:100%;
		height:3rem;
		background: #ccc;
	}
	 dl dt img{
		width:100%;
		height:100%;
	}
	 dl dd{
		width:95%;
		margin:0 auto;
		position:relative;
	}
		.storeDetail_p1{
		width:100%;
	}
	.storeDetail_p2{
		display: flex;
		width:100%;
		justify-content: space-between;
	}

</style>