<template>
	<div class="wrap">
		<div class="top">
			<input type="text" placeholder="请输入您要的的邵品" v-model="search_word">
			<button @click="search_btn">搜索</button>
		</div>
		<div class="current_search">
			<span>最近搜索</span>
			 <i class="iconfont shejiao"></i>
		</div>
		<div class="cur_cont">
			<p v-if="record">无搜索记录</p>
			<ul>
				<li v-for="i in listArr">{{i}}</li>
			</ul>
		</div>
		<div class="bot">
			<p>大家都在搜</p>
			<ul>
				<li>虾米</li>
			</ul>
		</div>

	</div>
</template>
<script>
	export default {
		data:function(){
			return {
				search_word:"",
				listArr:[],
				record:false
			}
		},

		methods:{
			search_btn:function(){
				let words =this.search_word
				if(!words) return 
				let ls=window.localStorage	
				let itemArr =[]

				if(ls.getItem("goodsItem")){
					itemArr=[...JSON.parse(ls.getItem("goodsItem"))]
				}
					itemArr.push(words)
					ls.setItem("goodsItem",JSON.stringify(itemArr))
					this.listArr=[...itemArr]
				
			}
		},
		created:function(){
			let ls=window.localStorage	
			if(ls.getItem("goodsItem")){
				this.record=false
				this.listArr=[...JSON.parse(ls.getItem("goodsItem"))]
			}else{
				this.record=true
			}
			
		}
		
	}
</script>	
<style scoped lang="scss">
	.wrap{
		width:100%;
		height:100%;
	}
	.top{
		width:100%;
		margin:0 auto;
		height:1rem;
		border-bottom:1px solid #ccc; 
		line-height: 1rem;
		input{
			width:70%;
			height:.7rem;
			margin-left:.1rem;
			border:none;
			background: #ffc
		}
	}
	.current_search{
		width:100%;
		height:1rem;
		line-height: 1rem;
	}
	.cur_cont{
		width:100%;
		ul{
			width:90%;
			margin:0 auto;
			display: flex;
			flex-flow: row wrap;
		
			li{
				width:20%;
				margin:.1rem;
				height:.7rem;
				border:1px solid #ccc;
				text-align: center;
				line-height: .7rem
			}
		}
	}
	.bot{
		width:100%;
		margin-top:1rem;
		ul{
			width:90%;
			margin:0 auto;
			display: flex;
			flex-flow: row wrap;
		
			li{
				width:20%;
				margin:.1rem;
				height:.7rem;
				border:1px solid #ccc;
				text-align: center;
				line-height: .7rem
			}
		}
	}

</style>