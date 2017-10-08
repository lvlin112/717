<template>
<div>
 	<div class="login" v-if="is_login">
        <div class="head">
          <i><</i>
          <p>登录会员</p>
          <span  @click="to_register">注册</span>
        </div>
        <div class="content">
          <ul class="int_list">
            <li>
              <i class="icon iconfont icon-people"></i><input type="text" placeholder="请输入您的手机号" v-model="login_user">
            </li>
            <li>
              <i class="icon iconfont icon-form"></i><input type="text" placeholder="请输入您的密码" v-model="login_psw">
            </li>
          </ul>
          <div class="loadbtn">
            <span @click="login">立即登录</span>
          </div>
        </div>
    </div>
  <div class="register" v-else>
      <div class="head">
        <i class="icon iconfont icon-back"></i>
        <p>注册会员</p>
        <span @click="to_login">登录</span>
      </div>
      <div class="content">
        <ul class="int_list">
          <li>
            <i class="icon iconfont icon-people"></i><input type="text" placeholder="请输入您的手机号" v-model.trim="telNum">
          </li>
          <li class="certify">
           <i class="icon iconfont icon-apps"></i><input type="text" placeholder="请输入验证码" v-model.trim="veitify">
           <span  class="get_certify" @click="getvertify">获取验证码</span>
         </li>
          <li>
            <i class="icon iconfont icon-form"></i><input type="password" placeholder="请输入您的密码" v-model.trim="psw">
          </li>
        </ul>
        <div class="certain">
          <span @click="register">确定</span>
        </div>
      </div>
  </div>
  </div>
</template>
<script>

//import tips from '../../components/tips.vue'

export default {
  	data(){
          return{
             is_login:true ,
             telNum:"",
             veitify:"",
             psw:"",
             login_user:"",
             login_psw:""

          }
          
      },
      methods:{
          to_register:function(){
            this.is_login=false
          },
          to_login:function(){
            this.is_login=true
          },
          getvertify:function(){//获取验证码
            this.$http.post("/vertify",{pn:this.telNum}).then(function(params){
              console.log(params.data)
            })
          },
          register:function(){//点击注册 返回是否成功
                this.$http.post("/register",{tel_num:this.telNum,tel_vei:this.veitify,tel_psw:this.psw}).then((data)=>{
                if(data.data=='success'){
                  this.is_login=true //注册成功进入到登录页面
                }
          })
          },
          login:function(){//在数据库里面对比 如果成功存储cookie
            this.$http.post("/login",{login_user:this.login_user,login_psw:this.login_psw}).then((res)=>{
              //把收到的token存储到cookie
                document.cookie='myCode='+res.data.token
                this.$router.push("Hello/mine")
            })
          }

        }
}
</script>
<style scoped>
.login,.register{
	width:100%;
	height: 100%;
	overflow: hidden;
  background: #eee;
  display: flex;
  flex-direction: column;
}
.head{
	height: .88rem;
	line-height: .88rem;
	display: flex;
	justify-content: space-between;
	padding:0 10px;
	font-size: .34rem;
	background:#fff;
	border-bottom: 1px solid #eee;
  margin-bottom: .2rem;
}
.head p{
	text-align: center;
	color:#333;	
}
.head span{
  font-size: .26rem;
  color:#F02424;
}
.head .icon{
	font-size: .32rem;
	text-align: center;
}

.content {
  overflow-y: scroll;
  flex: 1;
  background: #eee;
}
.int_list{
  padding:0 10px;
  background: #fff;

}
.int_list input{
  border:none;
  background:none;
  outline:none;
}
.int_list li{
  height: 1.2rem;
  line-height:1.2rem;
  border-bottom: 1px solid #eee;
  color:#333;
  font-size: .28rem;
  display: flex;
}
.int_list li .iconfont{
  font-size: .5rem;
  margin-right: 5px;
}

.loadbtn,.certain{
    padding-top: 1rem;
}
.loadbtn span,.certain span{
  display: block;
  width:80%;
  margin:0 auto;
  background:#F02424;
  color:#fff;
  font-size: .36rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  border-radius: .5rem;
  box-shadow: 1px 3px 3px 0px #FD7E7E;
}

.certify{
  position: relative;
}
.get_certify{
  width:2rem;
  height: .8rem;
  display: block;
  color:#F02424;
  line-height: .8rem;
  text-align: center;
  border-radius: .4rem;
  border:1px solid #F02424;
  position: absolute;
  right:0;
  top:.2rem;
}

</style>
