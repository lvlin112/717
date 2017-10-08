<template>
	<div class="top">
			 
		       <span class="top_left">
		       <slot name="back"></slot>
		       </span>
			 <span class="top_tit">
			    <slot name="add"></slot>
			 </span>
			 <i class="iconfont shouye top_right"></i>	
	</div>
</template>
<script>
	export default {
		data () {
			return {
				route:""
			}
		},
		methods:{
			back:function(){
				this.$router.push("Hello/mine")
			}
		}
	}
</script>
<style scope lang="scss">
	.top{
		width: 100%;
		height:1rem;
		background: #fff;
		position: relative;
		text-align: center;
		line-height: 1rem;
		border-bottom:1px solid #ccc;
	}
	.top_left{
		position: absolute;
		left: .2rem;
		top:50%;
		margin-top: -.5rem
	}
	.top_right{
		position: absolute;
		right:.2rem;
		top:50%;
		margin-top: -.5rem
	}
	.top_tit{
		font-size:.4rem;
	}
</style>