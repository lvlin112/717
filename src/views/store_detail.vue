<template>
    <div class="details">
        <div class="details-header">
            <router-link :to="{name:'home'}" tag="span"><p><i class="icon iconfont icon-back"></i>返回</p> </router-link>
            <ul>
                <li class="active">
                    <a href="javascript:;">商品</a>
                </li>
                <li>
                    <a href="javascript:;">详情</a>
                </li>
            </ul>
            <p>
                <i class="icon iconfont icon-message"></i>
            </p>
        </div>
        <div class="details-wrap">
            <div class="details-banner">
                <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="../../static/shouye/f8RYACIF+kiCTDQMQAAAABJRU5ErkJggg==.png" alt="">
                        </div>
                        <div class="swiper-slide">
                            <img src="../../static/shouye/f8RYACIF+kiCTDQMQAAAABJRU5ErkJggg==.png" alt="">
                        </div>
                        <div class="swiper-slide">
                             <img src="../../static/shouye/f8RYACIF+kiCTDQMQAAAABJRU5ErkJggg==.png" alt="">
                        </div>
                        <div class="swiper-slide">
                             <img src="../../static/shouye/f8RYACIF+kiCTDQMQAAAABJRU5ErkJggg==.png" alt="">
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <div class="details-title">
                卡易 荞麦沙琪玛 318g 酥松香甜卡易 荞麦沙琪玛酥松香甜荞麦沙琪玛
            </div>
            <div class="details-price">
                <div class="price">
                    <p>￥109.00
                        <a href="javascript:;">￥998.00</a>
                    </p>
                    <p>(运费：￥8.00)</p>
                </div>
                <div class="queryBtn">
                    溯源查询
                </div>
                
            </div>
            <div class="on-sale">
                <span class="on-sale-btn">店铺优惠</span>
                <span>满3件包邮</span>
            </div>
            <dl class="shop">
                <dt>
                    <i class="icon iconfont icon-shop"></i>
                </dt>
                <dd>
                    <p>恒之然旗舰店</p>
                    <p>店主：HZR1501032</p>
                    <span>进入店铺</span>
                </dd>
            </dl>
         <showgoods_child  v-for="item in goods" :items="item"></showgoods_child>
        <!--     <hotRecommend></hotRecommend> -->
        </div>
        <div class="details-footer">
            <ul>
                <li class="one">
                    <i class="icon iconfont icon-people"></i>
                    <span>客服</span>
                </li>
                <li class="one">
                    <i class="icon iconfont icon-cart"></i>
                    <span>购物车</span>
                </li>
                <li class="two two1">
                    加入购物车
                </li>
                <li class="two two2">
                    立即购买
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    mounted(){
        new Swiper('.swiper-container',{
            pagination:'.swiper-pagination',
            autoplay: 2000,
            loop: true
        })
    }
}
</script>
<style scoped>
.details{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: -webkit-flex;
    -webkit-flex-direction: column;
    background-color: #eeeeee;
}
.details-header{
    padding-top: .2rem;
    height: 0.88rem;
    font-size: .28rem;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    padding-left: .3rem;
    padding-right: .3rem;
    box-sizing: border-box;
    background-color: #fff;
}
    .details-header  ul{
        -webkit-flex: 1;
        display: -webkit-flex;
    }
    .details-header  ul li{
        width: 50%;
        line-height: .88rem;
        text-align: center;
    }
.details-wrap{
    -webkit-flex: 1;
    overflow-y: scroll;
}
.details-banner{
    height: 4.6rem; 
    background-color: #fff;
}
.details-banner img{
    width: 100%;
    height: 100%;
}
.details-title{
    height: 0.84rem;
    padding-left: .3rem;
    padding-right:.3rem;
    box-sizing: border-box;
    align-items: center;
    display: -webkit-box;
    -webkit-box-pack: center;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    font-size: .28rem;
    background-color: #fff;
}
.details-price{
    height: 1.1rem;
    padding-left: .3rem;
    padding-right: .3rem;
    box-sizing: border-box;
    display: -webkit-flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .16rem;
    background-color: #fff;
}
.details-price .price{
    display: -webkit-flex;
    -webkit-flex-direction: column;
    justify-content: center;
}
.details-price .price p:nth-child(1){
    color: #fc4141;
    font-size: .3rem;
    font-weight: 600;
}
.details-price .price p:nth-child(1) a{
    text-decoration: line-through;
    color: #ccc;
    font-weight: 400;
}
.details-price .price p:last-child{
    color: #999;
    font-size:.24rem;
}
.details-price .queryBtn{
        width: 2rem;
        height: 0.8rem;
        line-height: .8rem;
        font-size: .3rem;
        text-align: center;
        border-radius: .04rem;
        background-color: #4f99f2;
        color: #fff;
    }
    
.on-sale{
    line-height: .72rem;
    padding-left: .3rem;
    padding-right: .3rem;
    box-sizing: border-box;
    background-color: #fff;
}
.on-sale .on-sale-btn{
        display: inline-block;
        width: 1.04rem;
        line-height: .34rem;
        text-align: center;
        border-radius: .04rem;
        border: .01rem solid #fc4141;
        color: #fc4141;
        margin-right: .13rem;
        font-size: .2rem;
}
.on-sale span:last-child{
        font-size: .26rem;
 }
    

.shop{
    height: 1.14rem;
    margin-top: .2rem;
    margin-bottom: .2rem;
    background-color: #fff;
    display: -webkit-flex;
    align-items: center;
    padding-left: .3rem;
    padding-right: .3rem;
    box-sizing: border-box;
}
.shop dt{
    font-size: .6rem;
    color: #ff6d1f;
    margin-right: .1rem;
}
.shop dd{
    -webkit-flex: 1;
    position: relative;
    font-size: .24rem;
}
.shop span{
     position: absolute;
     right: 0;
     top: 0.02rem;
     width: 1.84rem;
     line-height: 0.7rem;
     text-align: center;
     border-radius: .04rem;
     border: .01rem solid #333333;
 }

.details-footer{
    width: 100%;
    height: 44px;
    background-color: #fff;
}
.details-footer ul{
    width: 100%;
    height: 100%;
    display: -webkit-flex;
}
.details-footer ul li i{
    display: block;
}
.details-footer ul li{
    text-align: center;
    flex:1;
}
.details-footer .one{
    flex:1;
}
.details-footer .two{
    flex:2;
    line-height: 44px;
    color: #fff;
}
.details-footer .two1{
    background: #FE8282;
}
.details-footer .two2{
    background: #FB4142;
}

</style>


