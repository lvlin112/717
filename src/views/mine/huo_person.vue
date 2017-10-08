<template>

	<div class="wrap">

	    <!-- 收货人 -->
		<div class="person">
			<adder-top :route="isadd">收货人</adder-top>
			<div class="person_cont">
				<p class="delivery_user"><input type="text" placeholder="收货人姓名"></p>
				<p class="delivery_tel"><input type="text" placeholder="手机号"></p>
				<!-- 选择地址 -->
				<div class="select_adder">
					<div class="sheng">
					  <span class="allow"></span>
					  <!-- 现实具体省份 -->
					  <select class="sheng_detail">
					  	<option>请选择省份</option>
						<option>上海</option>	
					  </select>
					</div>
					<div class="shi">
						<span class="allow"></span>
						<select class="shi_detail">
							<option>请选择市</option>
						</select>
					</div>
					
				</div>
				<div class="qu">
					<span class="allow"></span>
					<select class="qu_detail">
						<option>请选择区</option>
					</select>
				</div>
				<p class="delivery_detail"><input type="text" placeholder="详细地址"></p>
				<div class="default"><input type="checkbox"><span>设置为默认</span></div>
				<div class="save" @click="to_add">
					<span>保存</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import addertop from "../../components/mine/addertop.vue"
	export default {
		data:function(){
			return {
					isadd:true,
					sheng_detail:false,
					shi_detail:false,
					qu_detail:false
			}
		},
		methods:{
			addClik:function(){
				this.isadd=false
			},
			to_add:function(){
				this.isadd=true
			},
			top_left:function(){

			}


		},
		components:{
			"adder-top":addertop
		}
	}
</script>
<style scoped lang="scss">
	.wrap{
		width: 100%;
		height:100%;
	}
	.person{
		width: 100%;
		height:100%;
		background: #eee;
	}
	.select_adder{
		width: 100%;
		height:1rem;
		display: flex;
		margin-top: .3rem;
		justify-content:space-between;

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
	.sheng_detail,.shi_detail,.qu_detail{
		border:none;
		appearance:none;
		outline: none;
		width: 80%;
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
        margin-top: -.1rem
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