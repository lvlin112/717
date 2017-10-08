<template>
	<div class="wrap" v-if="this.$store.state.success">
	  <slot></slot>
	</div>
</template>
<script>
	export default{
		data:function(){
			return {

			}
		}
		

	}
</script>
<style scoped lang="scss">
	.wrap{
		width:3rem;
		height:1rem;
		background: rgba(0,0,0,.6);
		text-align: center;
		line-height: 1rem;
		color: #fff

	}
</style>