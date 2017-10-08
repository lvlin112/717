<template>
	<transition>			
		<div class="wrap" v-if="istips">
			<slot></slot>
		</div>
  </transition>	
</template>
<script>
import {mapState} from 'vuex'
	export default {
		data:function(){
			return {
				tip_info:"我是默认的提示信息"
			}
		},
		computed:{
			...mapState(["istips"])
		}
	}
</script>
<style scoped lang="scss">
	.wrap{
		width:50%;
		height:1rem;
		border-radius: .4rem;
		background:rgba(0,0,0,.5);
		position: absolute;
		left:50%;
		top:50%;
		transform: translate3d(-50%,-50%,0);
		text-align: center;
		line-height: 1rem;
		z-index: 1001;
		color:#fff;

	}
</style>