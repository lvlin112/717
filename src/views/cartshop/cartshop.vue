<template>
	<div class="cartBox">
				<!-- 复选框 -->
					<div class="cartBox_int" >
						<span class="select" @click="sele(item)" :class="{red:item.checked}"></span>
					</div>
					<!-- 图片 -->
					<dl class="cartBox_dl">
						<dt class="cartBox_img">
							<img :src='"http://www.lb717.com/"+item.url' alt="">
						</dt>
						<!-- 详情 -->
						<dd class="cartBox_datail">
							<p class="cartBox_datail_tit">{{item.name}}
							</p>
							<div class="cartBox_datail_bot">
								<div class="cartBox_datail_bot_left">
									<p>X{{item.count}}</p>
									<p class="price"><span>￥</span><b>{{item.price}}</b></p>
								</div>
								<div class="cartBox_datail_bot_right">
									<span class="sub" @click="countSay('-1')">-</span>
									<span class="num">{{item.count}}</span>
									<span class="add" @click="countSay('1')">+</span>
								</div>
							</div>
						</dd>
					</dl>
	</div>
</template>
<script>
 import token from "../../tool/getcookie.js"
	export default {
		data:function(){
			return {
				oneSelect:false,
				
			}
		},
		props:["item","parsel"],
		mounted:function(){
			// console.log(this.item)
		},


		methods:{
			selectRed:function(){
			},
			sele:function(item){
				this.panduan(item)
			},
			panduan:function(item){//添加一个属性来控制是否显示
				if(typeof item.checked == 'undefined'){
					 this.$set(item,"checked",true)
				}else{
					  item.checked=!item.checked
				}
				return item.checked
			},
			countSay:function(item){
				if(item>0){
					this.item.count++
				}else{
					this.item.count--;
					if(this.item.count<1){
						this.item.count=1
					}
				}
				
			}

		}
	}
</script>
<style scoped lang="scss">
.select{
	display: inline-block;
	width: .4rem;
	height:.4rem;
	border-radius:50%;
	border:1px solid #ccc;
}
.red{
	background: red;
	border:1px solid #fff;
}
	.cartBox{
		width: 100%;
		height:2.6rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		margin-bottom:.2rem;
	}
	.cartBox_int{
		width: .7rem;
		text-align: center;
	}
	.cartBox_dl{
		flex:1;
		height:100%;
		display: flex;
		align-items: center;
	}
	.cartBox_img{
		width:2.2rem;
		height:2.2rem;
		background: red;
		margin-right:.1rem;
		img{
			width:100%;
			height:100%;
		}
	}
	.cartBox_datail{
		flex:1;
		height:2.2rem;
		background: #fff;
		margin-right:.1rem;
	}
	.cartBox_datail_bot{
		display: flex;
		height:60%;
		display: flex;
		align-items: flex-end;
		justify-content: space-between;
		b{
		font-size:.4rem;
		}
	}
	.cartBox_datail_tit{
		width: 100%;
		height:45%;
		font-size:.35rem;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp:2;
		overflow: hidden;

	}
	.cartBox_datail_bot_right{
		width: 55%;
		line-height: .65rem;
		display: table;
		text-align: center;
		span{
			display: inline-block;
			display: table-cell;
			width: .6rem;
			height:.65rem;
			border:1px solid #ccc;
		}
	}
	.price{
		font-size:.3rem;
		color:red;
	}
</style>