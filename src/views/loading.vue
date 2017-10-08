<template>
	<div class="wrap" v-if="loadshow">
		<img src="../../static/shouye/timg.gif" alt="">
	</div>
</template>
<script>
	export default {
	data:function(){
		return {
			
		}
	},
	props:["loadshow"]
	}
</script>
<style scoped lang="scss">
	.wrap{
		background: rgba(0,0,0,.6);
		display: flex;
		justify-content: center;
		align-items: center;
		img{
			width: 4rem;
			height: 4.5rem
		}
	}
</style>