import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'
 //封装全局登录检查函数:backpage为登录后返回的页面；backtype为打开页面的类型[1 : redirectTo 2 : switchTab]
 //3种页面跳转方式：NavigationTo(直接打开新页面),RedirectTo(覆盖原页面后打开新页面),SwitchTo(切换顶部导航的方式来切换页面)
Vue.prototype.checkLogin = function(backpage, backtype){
    var TOKEN  = uni.getStorageSync('TOKEN');//本地持久化存储
    
    if(TOKEN==''){
        uni.navigateTo({url:'/pages/login/index?backpage='+backpage+'&backtype='+backtype});
        return false;
    }
    return TOKEN
}

//定义全局api接口地址和token
// var APITOKEN = TOKEN
let website='https://web.17cheng.cn';
let unciacid=39;


let api={
	
	login:website+'/app/index.php?i='+unciacid+'&c=entry&do=mobilelogin&m=huoban_mima',//登录
	videolist:website+'/app/index.php?i='+unciacid+'&c=entry&do=videlist_json&m=huoban_mima',//视频列表
	banner:website+'/app/index.php?i='+unciacid+'&c=entry&do=lunbo&m=huoban_mima&id=2269&wxref=mp.weixin.qq.com',//banner
	article:website+'/app/index.php?i='+unciacid+'&c=entry&do=hotlist_json&m=huoban_mima',//热文推荐
	articleDetail:website+'/app/index.php?i='+unciacid+'&c=entry&do=getrwdetail&m=huoban_mima',//热文详情
	myArticle:website+'/app/index.php?i='+unciacid+'&c=entry&sjk=1&do=MywzList_json&type=&m=huoban_mima&openid=',//我的文章
	
}




Vue.prototype.api=api;

const app = new Vue({
    ...App
})
app.$mount()
