<template>
<div class="wrap">
  <router-view class="show_nav_info_router"></router-view>
  <div class="nav">
      <router-link :to="{name:'home'}" tag="span">
          <sup class="iconfont shouye"></sup>
          <sub>首页</sub>
      </router-link>
      <router-link :to="{name:'classify'}" tag="span">
          <sup class="iconfont fenlei"></sup>
          <sub>分类</sub>
      </router-link>
      <router-link :to="{name:'Social'}" tag="span">
          <sup class="iconfont shejiao"></sup>
          <sub>社交</sub>
      </router-link>
      <router-link :to="{name:'cart'}" tag="span" class="cart">
      <div class="cart_mask_num">
      1
      </div>
          <sup class="iconfont gouwuche"></sup>
          <sub>购物车</sub>
      </router-link>
      <router-link :to="{name:'mine'}" tag="span">
          <sup class="iconfont wode"></sup>
          <sub>我的</sub>
      </router-link>
  </div>
</div>

</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart{
  position: relative;
}
.router-link-active{
 color: red
}
.cart_mask_num{
  position: absolute;
  right:.4rem;
  top:0;
  height:.3rem;
  width:.3rem;
  text-align: center;
  line-height: .3rem;
  border-radius: 50%;
  background: red;
  color:#fff;
}
.wrap{
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
}
.show_nav_info_router{
  flex:1;
}
.nav{
  width:100%;
  height:1rem;
  text-align: center;
  display: table;
}
.nav span{
  width:20%; 
  height:100%;
  display: inline-block;
  display: table-ceil;
  border-top:1px solid #ccc;

}
.nav span sup{
  height:.5rem;
  display: block;
  font-size: .45rem;
}
.nav span sub{
  display: block
}
</style>
