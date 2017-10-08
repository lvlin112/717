<template>
	<div class="wrap">

		<div class="top">
			<span @click="loadout"><i class="iconfont shouye"></i></span>
			<span>我的717商城</span>
		</div>
		<div class="myinfo">
			<dl>
				<dt>
					<img src="../../static/mine/bFIkZvYZ0kq1yp9wtD8hW2SfHZVKm5EuJRL6UKTklx2RctsoDcrfcKbdKQyXRnCKNGsIQxlBRuv8fSKvewGDZLxAAAAAASUVORK5CYII=.png" alt="">
				</dt>
				<dd>
					1223333333
				</dd>
			</dl>
		</div>
		<!-- 我的店铺 -->
		<div class="mystore">
			<dl>
				<dt><img src="../../static/mine/dd.png" alt=""></dt>
				<dd>我的店铺</dd>
			</dl>
			<div class="more">
				<img src="../../static/mine/pV4ABAInvO6NCu4B6AAAAAElFTkSuQmCC.png" alt="">
			</div>
		</div>
		<!-- 商铺列表 -->
		<div class="shop_list">
			<ul>
				<li>
					<i class="iconfont shouye"></i>
					<span>待付款</span>
				</li>
				<li>
					<i class="iconfont shouye"></i>
					<span>待发货</span>
				</li>
				<li>
					<i class="iconfont shouye"></i>
					<span>待收货</span>
				</li>
				<li>
					<i class="iconfont shouye"></i>
					<span>售后</span>
				</li>
				<li>
					<i class="iconfont shouye"></i>
					<span>我的订单</span>
				</li>
			</ul>
		</div>
		<!-- 我的范围商品列表 -->
		<div class="shequ">
			<ul>
				<li>
					<div class="shequtit">
						<i class="iconfont shouye"></i>
						<span>我的社区</span>
					</div>	
					<div class="shequmore">
						<img src="../../static/mine/pV4ABAInvO6NCu4B6AAAAAElFTkSuQmCC.png" alt="">
					</div>
					<li>
					<div class="shequtit">
						<i class="iconfont shouye"></i>
						<span>账户余额</span>
					</div>	
					<div class="shequmore">
						<img src="../../static/mine/pV4ABAInvO6NCu4B6AAAAAElFTkSuQmCC.png" alt="">
					</div>
				</li>
				<li @click="addressGun">
					<div class="shequtit">
						<i class="iconfont shouye"></i>
						<span>地址管理</span>
					</div>	
					<div class="shequmore">
						<img src="../../static/mine/pV4ABAInvO6NCu4B6AAAAAElFTkSuQmCC.png" alt="">
					</div>
				</li>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
  import  Router from 'vue-router';
	export default {

		data:function(){
			return {

			}
		},
		methods:{
			addressGun:function (){	
				this.$router.push("/addressGit")
			},
			loadout:function(){
				this.$router.push("/loadout")
			}
		},
		beforeRouteEnter:function(from,to,next){
			next()	
		}

		

	}
</script>
<style scoped lang="scss">
	.wrap{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background: #eee;
		position: relative;

	}

	.top{
		width: 100%;
		height:1rem;
		text-align: center;
		line-height: 1rem;
		position: relative;
		background: #fff;
		i{
			position: absolute;
			left:.3rem;
			top:50%;
			margin-top:-.5rem;
		}
		span{
			font-size:.4rem;
		}
	}
	.myinfo{
		height:2rem;
		width: 100%;
		background: #fff;
		background: url(../../static/mine/jWgzPHn1StkWTy4XOZ2+3RT7PkO+iohM012P+WY84S34H297qD6nc1NgAAAAAElFTkSuQmCC.png) no-repeat;
		background-size:cover;
		dl{
			width: 100%;
			height:100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			dt{
				width: 1.5rem;
				height:1.5rem;
				img{
					width: 100%;
					height:100%;
				}
			}
			dd{
				color:#fff;
				text-align: center;
			}
		}
	}
	.mystore{
		background: #fff;
		width: 100%;
		height:1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #eee;
		dl{
			height:100%;
			display: flex;
			margin-left:.2rem;
			justify-content: center;
			align-items: center;
			dt{
				width: .5rem;
				height:.5rem;
				img{
					width:100%;
					height:100%;
				}
			}
			dd{
				font-size:.35rem;
				margin-left:.1rem;
				text-align: center;
			}
		}
	}
	.more{
		width: .2rem;
		margin-right: .2rem;
		img{
			width: 100%;
			height:100%;
		}
	}
	.shop_list{
		width: 100%;
		height:1.5rem;
		background: #fff;
		margin-bottom:.2rem;
		ul{
			width: 100%;
			height:100%;
			display: flex;
			align-items: center;
			li{
				width: 20%;	
				text-align: center;
				i{
					display: block;
				}

			}
		}
	}
	.shequ{
		width: 100%;
		ul{
			width: 100%;
			margin:0 auto;
			background: #fff;
			li{
				width:100%;
				height:1rem;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom:1px solid #eee;
				i{
					margin-left:.4rem;
				}
				span{
					font-size:.35rem;
				}

			}
		}
	}
	.shequmore{
		width: .2rem;
		height:.2rem;
		margin-right:.3rem;
		img{
			width: 100%;
			height:auto
		}
	}
</style>