<template>
	<div class="wrap">
	<loading class="loa" :loadshow='isshow'></loading>
	 <div class="top">
	 	<input type="text" placeholder="请输入搜索内容" @click="classSearch">
	 	<i class="iconfont shejiao"></i>
	 </div>
	 <div class="cont">
	 	<!-- 左边半导航 -->
	 	<div class="cont_list">
	 		<ul class="cont_list_ul">
	 			
	 				<router-link v-for="(i,x) in datalist" :to="{name:'classify',params:{index:x}}" tag="li">{{i.title}}</router-link>
	 			
	 		</ul>
	 	</div>
		<!-- 右边详情 -->
		<div class="cont_list_detail">
			<div class="nei">
				<dl class="dl" v-for="item in datalist2">
					<dt>
						<img :src="item.pic" alt="">
					</dt>
					<dd>{{item.name}} </dd>
				</dl>
			</div>
		</div>
	 </div>
	</div>
</template>
<script>
	import load from "./loading.vue";
	import {mapState} from "vuex"
	export default {
		data:function(){
			return {
				datalist:[],
				datalist2:[],
				isshow:true
			}
		},
		created:function(){

			this.$http.post("/h5/mtop.relationrecommend.wirelessrecommend.recommend").then((res)=>{
					this.datalist=[...res.data.data.result[0].moduleList]
					this.datalist2=[...this.datalist[0].items]//设置默认
					this.isshow=false
			})
		},
		watch:{
			"$route":function(n){
				let ind=n.params.index
				let arr=this.datalist[ind].items
				this.datalist2=[...arr]

			}
		},
		components:{
			loading:load
		},
		methods:{
			classSearch:function(){
				this.$router.push("/search_store")
			}
		},
	}
</script>
<style lang="scss" scoped >
	.router-link-active{
	  background: lightgreen
	}
	.wrap{
		width:100%;
		height: 100%;
		display: flex;
		position: relative;

	}
	.loa{
		position: absolute;
		left: 0;
		top:0;
	}
	.top{
		height:1rem;
		text-align: center;
		line-height: 1rem;
		border-bottom:1px solid #ccc;
		input{
			border:none;
			width:70%;
			height:.6rem;
			background: #eee;
			border-radius: .5rem;
			padding-left: .1rem
		}
	}
	.cont{
		flex:1;
		height:100%;
		display: flex;
		overflow: auto

	}
	.cont_list{
		width: 2.2rem;
		background: #eee;
	}
	.cont_list_ul{
		width: 100%;
		height:100%;
		background: #eee;
		li{
			height: .7rem;
			text-align: center;
			line-height: .7rem;
		}
	}
	.cont_list_detail{
		flex:1;

	}
	.nei{
		width: 95%;
		margin:0 auto;
		display: flex;
		flex-flow:row wrap;
		justify-content: space-between;
	}	
	.dl{
		width: 32.5%;
		height: 2.3rem;
		background: #ccc;
		margin-top: .1rem;
		dt{
			height:1.6rem;
			background: red;
			img{
				width:100%;
				height:100%;
			}
		}
		dd{
			text-align: center;
			margin-top:.1rem;
			line-height: .7rem
		}
	}
</style>