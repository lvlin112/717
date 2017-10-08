// import Vue from "vue"
// let MyPlugin={}
// MyPlugin.install=function(){
// 	Vue.prototype.token=function(){
// 		 let cookie_list=  document.cookie.split(";")
// 	 let token=null
// 		for(var i=0; i<cookie_list.length;i++){
// 		 if(cookie_list[i].indexOf("myCode")>-1){
// 			  token=cookie_list[i].split("=")[1]
// 		 } 
// 		}
// 		return token
// 	}
// }
//  Vue.use(MyPlugin)

// // export default MyPlugin



 function getcookie(){
 	 let cookie_list=  document.cookie.split(";")
	 let token=null
		for(var i=0; i<cookie_list.length;i++){
		 if(cookie_list[i].indexOf("myCode")>-1){
			  token=cookie_list[i].split("=")[1]
		 } 
		}
		return token
 }
 export default getcookie
