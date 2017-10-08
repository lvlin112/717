<template>
	<div class="home_wrap">
	<!-- 头部信息 -->
	<transition name="successanimation">
		<success class="success">nihoa</success>
	</transition>
		<div class="home_wrap_top">
				<div class="home_logo">
				</div>
				<div class="home_search">
					<input type="text" @click="homesearch">
				</div>
				<div class="home_dianpu">
					<sup class="iconfont shouye"></sup>
          			<sub>我的店铺</sub>
				</div>
				<div class="home_message">
					<sup class="iconfont shejiao"></sup>
          			<sub>信息</sub>
				</div>
		</div>
		<!-- 中间内容 -->
		<div class="home_wrap_con"  @scroll="Mainscroll($event)">
			<div class="home_wrap_scroll" ref="con_scroll">
			<!-- 轮播图 -->
				<div class="swiper-container home_cont">
					<div class="swiper-wrapper home_wrapper">
						<div class="swiper-slide home_slide">
							<img src="../../static/shouye/w82VyVtM+KIiAAAAABJRU5ErkJggg==.png" alt="">
						</div>
						<div class="swiper-slide home_slide">
							<img src="../../static/shouye/lunbo.png" alt="">
						</div>
					</div>
				</div>
			
			<!-- 列表 -->
			<div class="home_list">
				<ul>
					<li>
						<img src="../../static/shouye/ldqpfeJZ66Su3iIeZe+yWF+34Kg3uvYY35bH37P20R9nThUNIQAAAAAElFTkSuQmCC.png" alt="">
						<span>牛乳制品</span>
					</li>
					<li>
						<img src="../../static/shouye/hcBAAAABBIA8P8D2bDrGhvRC7cAAAAASUVORK5CYII=.png" alt="">
						<span>休闲零食</span>
					</li>
					<li>
						<img src="../../static/shouye/V+3fVamwSyF2gAAAABJRU5ErkJggg==.png" alt="">
						<span>米面粮油</span>
					</li>
					<li>
						<img src="../../static/shouye/mzKAAAAAElFTkSuQmCC.png" alt="">
						<span>调味调料</span>
					</li>
					<li>
						<img src="../../static/shouye/oBgkv0AAAAASUVORK5CYII=.png" alt="">
						<span>酒水饮料</span>
					</li>
					<li>
						<img src="../../static/shouye/CyPajjps5UrtAAAAAElFTkSuQmCC.png" alt="">
						<span>生鲜水果</span>
					</li>
					<li>
						<img src="../../static/shouye/hcBAAAABBIA8P8D2bDrGhvRC7cAAAAASUVORK5CYII=.png" alt="">
						<span>家乡味道</span>
					</li>
					<li>
						<img src="../../static/shouye/CyPajjps5UrtAAAAAElFTkSuQmCC.png" alt="">
						<span>家乡味道</span>
					</li>
				</ul>
			</div>	
			<!-- 动态商城 -->

			<div class="home_store">
				<div class="home_store_nei">
					<div class="home_store_left">
						<span>动态商城</span>
					</div>
					<div class="swiper-container home_store_cont">
						<div class="swiper-wrapper home_store_wrap">
							<div class="swiper-slide home_store_slide">
								<span>你好刚回家考虑发刚回家考虑收到发刚回家考虑法国会尽快</span>
							</div>
							<div class="swiper-slide home_store_slide">
								<span>你好刚回家考虑发刚回家考虑收到发刚回家考虑法国会尽快</span>
							</div>
							<div class="swiper-slide home_store_slide">
								<span>你好刚回家考虑发刚回家考虑收到发刚回家考虑法国会尽快</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 天天特惠 -->
			<div class="home_hui">
				<div class="home_hui_nei">
					<p class="home_hui_nei_p1">
						<i class="iconfont shouye"></i>
						<b>天天特惠</b>
						<span>每天都有惊喜</span>
					</p>
					<p>
						<span>更多</span>
						<i class="iconfont shouye"></i>
					</p>
				</div> 
			</div>
			<!-- 特惠展示 -->
			<div class="home_tehui">
				<div class="home_tehui_left">
					<img src="../../static/shouye/62x8v8Bt7MkmaAMADAAAAAASUVORK5CYII=.png" alt="">
				</div>
				<div class="home_tehui_right">
					<sup>
						<img src="../../static/shouye/mWWtIc5AAAAABJRU5ErkJggg==.png" alt="">
					</sup>
					<sub>
						<img src="../../static/shouye/lunbo.png" alt="">
					</sub>
				</div>
			</div>
			<!-- 具体商品展示 -->
			<div class="storeDetail">
				<!-- 商品的标题 -->
				<div class="storeDetail_tit">
					<p class="storeDetail_tit_p1">
						<i class="iconfont shouye"></i>
						<b>家乡的味道</b>
					</p>
					<p>
						<span>更多</span>
						<i class="iconfont shouye"></i>
					</p>
				</div>
			    <!-- 商品具体内容 -->
				<div class="store_dl">
				<showgoods_child  v-for="item in goods" :items="item"></showgoods_child>			
				</div>
				<div class="loading">正在加载---</div>
			</div>
		  </div>
		</div>
	</div>
</template>
<script>
import axios from "axios"
import refresh from "./refresh.vue"
import showgoods from "../views/showgoods"
import successadd from "../components/success_add_cart.vue"
	export default {
		data:function(){
			return {
				goods:[],
				channel_id:1,
				is_query:true
			}
		},
		created:function(){
		 axios.post("/mall/index/getGoodsChannel",{channel_id:1}).then((res)=>{
				this.goods=res.data.data.data.data
				
			})

		},
		methods:{
			homesearch:function(){
				this.$router.push("/search_store")
			},
			Mainscroll:function(eve){//做下拉加载
				let scrollheight=this.$refs.con_scroll.offsetHeight//scroll的总高度
				let scrolltop=eve.target.scrollTop//
				let tarheight=eve.target.offsetHeight//滚动的高度

				 if(scrollheight-scrolltop-tarheight<10){//判断是不是到底了
				 	if(this.is_query){
				 		setTimeout(()=>{
							axios.post("/mall/index/getGoodsChannel",{channel_id:this.channel_id}).then((res)=>{
			 				this.channel_id++
							 if(this.channel_id>3){
							 		this.is_query=false
					 				return
					 		}
							this.goods=[...this.goods,...res.data.data.data.data]
							})
				 		},1000)

				 	}	
				 }

				
			}
		},
		mounted:function(){
			new Swiper(".home_cont",{
				autoplay:2000,
				loop:true
			})
			new Swiper(".home_store_cont",{
				direction:'vertical',
				autoplay:2000,
				loop:true
			})
		},
		components:{
			showgoods_child:showgoods,
			success:successadd
		}
	}
</script>
<style scoped>
	.successanimation-enter-active{
		animation: bounceInUp 1s 
	}
	.successanimation-leave-active{
		animation: bounceOut  1s 
	}
	.home_wrap{
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column;
		position: relative;
		
	}
	.success{
		position: absolute;
		left: 50%;
		top:50%;
		transform: translate3d(-50%,-50%,0);
	}
	.home_wrap_top{
		width:95%;
		margin:0 auto;
		height:1rem;
		display: flex;
		align-items: center;
		text-align: center;
		position: relative;
	}
	.home_logo{
		width:1rem;
		height:.5rem;
		background: url(../../static/shouye/logo.png) no-repeat center center;
		background-size: 100% ;

		height:100%;
	}
	.home_search{
		flex:1;
		height:100%;
		line-height:1rem;
		padding:0 .1rem;
	}
	.home_search input{
		width:100%;
		height:.6rem;
		border:none;
		background:#F5F5F5;
		border-radius: .1rem


	}
	.home_dianpu{
		height:100%;
		width:1.22rem;
		color: #FC4141

	}
	.home_dianpu sup{
		height:.5rem;
		display: block;
		font-size: .5rem
	}
	.home_dianpu sub{
		display: block;
		
	}
	.home_message{
		width:1rem;
		height:100%;
		color: #FC4141
	}

	.home_message sup{

		height:.5rem;
		display: block;
		font-size: .4rem
	}
	.home_message sub{
		display: block
	}




	.home_wrap_con{
		width:100%;
		flex:1;
		overflow: auto;
	}
	.home_wrap_scroll{
		width:100%;
		display: flex;
		flex-direction: column;
	}
	.home_cont{
		width:100%;
		height:3.6rem;
		/*border-bottom: .1rem solid #F6F5F5;*/

	}
	.home_wrapper{
		width:100%;
		height:100%;
	}
	.home_slide{
		width:100%;
		height:100%;
	}
	.home_slide img{
		width:100%;
		height:100%;
	}


	.home_list{
		padding:.1rem 0;
		width:100%;
		height:3rem;
/*		border-bottom: .11rem solid #F6F5F5*/
	}
	.home_list ul{
		width:100%;
		height:100%;
		display: flex;
		flex-flow: row wrap;
	}
	.home_list ul li{
			width:25%;
			height:1.5rem;
			text-align: center;
		}
	.home_list ul li img{
		margin:0 auto;
		text-align: center;
		line-height: .88rem;
		display: block;
		width:.9rem;
		height:.9rem;
		background: #ccc;
		border-radius: 50%;
	}
	.home_list ul li span{
		display: block;
		margin-top: .13rem
	}



	.home_store{
		width: 100%;
		height:1rem;
		padding:.1rem 0 .3rem 0;
		border-bottom: .11rem solid #F6F5F5
	}
	.home_store_nei{
		width:95%;
		height:100%;
		margin:0 auto;
		display: flex;
	}
	.home_store_left{
		width:.7rem;
		height:100%;
		color:#FC4141;
	}
	.home_store_left span{
		font-size: .3rem;
		font-weight: 700;
		color:#FF6D00;
	}
	.home_store_cont{
		flex:1;
		height:100%;
		border-radius: .3rem;
		border: .03rem solid #F5F5F5;
	}
	.home_store_wrap{
		width: 100%;
		height:100%;
	}
	.home_store_slide{
		width: 100%;
		height:100%;
	}


	.home_hui{
		width: 100%;
		height:.8rem;
		border-bottom: .11rem solid #F6F5F5
	}
	.home_hui_nei{
		display: flex;
		margin:0 auto;
		width: 95%;
		height:.8rem;
		align-items: center;
		justify-content: space-between;
	}
	.home_hui_nei_p1{
		color:#FF6D00;
		line-height: .8rem;
		height:100%;
	}
	.home_hui_nei_p1 b{
		color:#FF6D00;
		font-size:.35rem;

	}
	.home_hui_nei_p1 span{
		color:#FF6D00;
		font-size:.3rem;

	}
	.home_hui_nei_p1 i{
		color:#FF6D00;
		font-size:.3rem;
		height:.3rem;
		width:.3rem;
		display: inline-block;
		border:1px solid #FF6D00;
		border-radius: 50%;
		padding:.1rem;
		text-align: center;
		line-height: .3rem
	}



	.home_tehui{
		width:100%;
		height:4rem;
		display: flex;
		justify-content: space-between;

	}
	.home_tehui_left{
		width:49%;
		height:100%;
		padding-right:.05rem;
	}
	.home_tehui_left img{
		width:100%;
		height:100%;
	}
	.home_tehui_right{
		width:49%;
		height:100%;
		padding-left:.05rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		overflow: hidden
	}
	.home_tehui_right sub{
		display: block;
		width:100%;
		height:50%;
		background: #ccc;
		margin-top: .05rem
	}
	.home_tehui_right sup{
		display: block;
		width:100%;
		height:50%;
		background: #ccc;
		margin-bottom: .05rem
	}
	.home_tehui_right sup img{
		width: 100%;
		height:100%;
	}
	.home_tehui_right sub img{
		width: 100%;
		height:100%;
	}





	.storeDetail{
		width: 100%;
		border-bottom: .11rem solid #F6F5F5;
		border-top: .11rem solid #F6F5F5;
	}
	.storeDetail_tit{
		display: flex;
		margin:0 auto;
		width: 95%;
		height:.8rem;

		align-items: center;
		justify-content: space-between;
	}

	.storeDetail_tit_p1{
		color:#FF6D00;
		line-height: .8rem;
		height:100%;
	}
	.store_dl{
		width:100%;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		background: #F6F5F5
	}
	.storeDetail dl{
		width:49%;
		background: #fff;
		margin-bottom:.1rem;
	}
	.loading{
		width:100%;
		height:.5rem;
		line-height: .5rem;
	}


</style>