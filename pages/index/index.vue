<template>
	<view class="pages" id='app'>
		
		<view class="search">
		   <input class="searchtxt" type="text" placeholder="热文搜索">
		   <image src="../../static/images/sou.png" class="sou" mode=""></image>
		</view>
		
		<view class="banner">
			 <swiper class="swiper" indicator-dots='true'>
				<swiper-item v-for="(item,index) in banner" :key='index'>
				    <image :src="item.picurl" mode=""></image>
				</swiper-item>
				
			 </swiper>
		</view>
		<view class="tab">
		        <view class="items" :class="[status=='video'?'active':'']" data-type='video' @click="choose">
		            <image src="https://ftp.17cheng.cn/images/39/2019/12/LHxhvtgtV50hTCpGVP05Wi4wGYVI0g.png" alt="">
		            <view>热门视频</view>
		        </view>
				
				<view class="items " :class="[status=='article'?'active':'']"  data-type='article'  @click="choose">
		            <image src="https://ftp.17cheng.cn/images/39/2019/12/oM6f8C86wcx6cuGqbq66G5MEPKc5X0.png" alt="">
		            <view>推荐热文</view>
		        </view>
				
				 <view class="items ">
		            <image src="https://ftp.17cheng.cn/images/39/2019/12/P3u386vVF86zQ9EV7488U4lafV8889.png" alt="">
		            <view>升级会员</view>
		        </view>
				
				 <view class="items ">
		            <image src="https://ftp.17cheng.cn/images/39/2019/12/EL7fiubCF7jkfNkti5tZpPh7N5tFnF.png" alt="">
		            <view>人脉商圈</view>
		        </view>
				
				 <view  class="items ">
		            <image src="https://ftp.17cheng.cn/images/39/2020/04/u6rUcMUMDVMFG6iMMhrCVHmrVIMhgL.png" alt="">
		            <view>正在直播</view>
		        </view>
				
				<view  class="items ">
		            <image src="https://ftp.17cheng.cn/images/39/2020/04/bbFB6sm22PpYZtYLS1wpZR2W8t6sf1.png" alt="">
		            <view>获客小店</view>
		        </view>
				
				<view  class="items ">
		            <image src="https://ftp.17cheng.cn/images/39/2020/04/VxvR8FEcTtsyzUEdPex9CXz9FXz548.png" alt="">
		            <view>推荐商品</view>
		        </view>
				
				 <view  class="items ">
		            <image src="https://ftp.17cheng.cn/images/39/2020/04/qLLkmWz49UwwJtw66X9l9Kl8Tmf8QU.png" alt="">
		            <view>操作指南</view>
		        </view>
		    </view>
			
			
			<!-- <view class="choose">
				<scroll-view  scroll-x="true" class="scroll-view_H" show-scrollbar='true'  scroll-left="100%">
				   <view class="choose-item">何鲁丽</view>
				   <view class="choose-item">何鲁丽</view>
				   <view class="choose-item">何鲁丽</view>
				   <view class="choose-item">何鲁丽</view>
				   <view class="choose-item">何鲁丽</view>
				   <view class="choose-item">何鲁丽</view>
				   <view class="choose-item">何鲁丽</view>
				   <view class="choose-item">何鲁丽</view>
				   <view class="choose-item">何鲁丽</view>
				   <view class="choose-item">何鲁丽</view>
				</scroll-view>
			</view> -->
			<view class="border"></view>
			
			<view  class="Advertising">
			   <image src="http://ftp.17cheng.cn/images/258/2019/11/wz0q6qfYFHIaiW4a02RoO0ezrAAFQZ.png" alt="">
			</view>
			
			<view class="video-list" v-if='status=="video"'>
				<view class="left">
					<view class="items" v-for='(item,index) in listleft' :key="index">
						<image :src="item.pic1" mode="widthFix"></image>
						<view class="text" v-text='item.title'></view>
						<view class="msg" >
							<image :src="item.logo" mode=""></image>
							<text v-text='item.jnickname'></text>
						</view>
					</view>
					
				
					
				</view>
				<view class="right">
					<view class="items" v-for='(item,index) in listright' :key="index">
						<image :src="item.pic1" mode="widthFix"></image>
						<view class="text" v-text='item.title'></view>
						<view class="msg" >
							<image :src="item.logo" mode=""></image>
							<text v-text='item.jnickname' style="overflow: hidden;"></text>
						</view>
					</view>
				</view>
			</view>
			
			
			
			<view class="content-box" v-if='status=="article"'>
				<view class="items" v-for='(items,index) in article' :key='index' @click="articleInfo" :data-id='items.id'>
				        <view class="left">
				            <view class="title" v-text='items.title'></view>
				            <view class="user-box">
				                <view class="name"  v-text='items.gzh'></view>
				                <view class="num">
				                     <image src="/static/images/tongji.png" alt=""></image>
				                    <text v-text='items.usernum'></text>
				                </view>
				                <!-- <view  class="gai">改成我的  </view> -->
				            </view>
				        </view>
				        <view class="right">
				           <image :src="items.imgUrl" mode='widthFix' alt="">  
				        </view>
				 </view>
				
			</view>
			
			
		
			
			
	</view>
	
	
	
	
</template>

<script>
	
	// open -n /Applications/Google\ Chrome.app/ --args --disable-web-security --user-data-dir=/Users/jinglong/Documents/MyChromeDevUserData
	
	
	export default {
	  data() {
	    return {
	      title: 'Hello',
		  banner:[
		  	'https://ftp.17cheng.cn/images/39/2020/05/rTp7pOQ7G2pJZqrGpts13s2m17Qj5r.png',
		  	'https://ftp.17cheng.cn/images/39/2020/05/rTp7pOQ7G2pJZqrGpts13s2m17Qj5r.png',
		  	'https://ftp.17cheng.cn/images/39/2020/05/rTp7pOQ7G2pJZqrGpts13s2m17Qj5r.png',
		  ],
		  listleft:[],
		  listright:[],
		  article:[],
		  page:1,
		  status:'video'
	    }
	  },
	  
	  onLoad() {
			// videolist
			
			const that=this;
			
			that.getBanner()
			let page=that.page;
			that.videoList();
			console.log(that.api.articleDetail)
			
			
	  },
	  methods: {  
	      getBanner:function(e){
			  const that=this;
				console.log(that.api)
	      		uni.request({
	      			url:that.api.banner,
	      			success:function(e){
						console.log(e.data)
						that.banner=e.data
	      			}
	      		})
	      },
		  //切换
		  choose:function(e){
		  	this.status=e.currentTarget.dataset.type;
			this.page=1;
			let status=this.status
			if(status=='video'){
				this.videoList()
			}else{
				this.getArticle()
			}
		  },
		  
		  //热文列表
		  getArticle:function(e){
			 const that=this;
			 let page=that.page;
			 let article=that.article;
			 uni.request({
			     url:this.api.article+'&lanmu=数码'+'&page='+page,
			     success: (res) => {
					
		
					
					if(res.data.data!=''){
						let list=[...article,...res.data.data]
						
						that.article=list;
					}else{
						uni.showToast({
						    title: '加载到底啦',
							icon:'none',
						    duration: 2000
						});
					}
					
			     }
			 });
		  },
		  
		  //视频列表
		  videoList:function(e){
			  const that=this;
				let page=that.page;
			  uni.request({
			      url:this.api.videolist+'&fenlei='+'&page='+page,
			      success: (res) => {
			         let list=res.data.data;
			  	  if(list!=[]){
			  	  	var listleft=that.listleft;
			  	  	var listright=that.listright;
			  	  	list.forEach((item,index)=>{
			  	  		if(index%2 ==0){
			  	  			listright.push(item);
			  	  			that.listright=listright;
			  	  		}else{
			  	  			listleft.push(item);
			  	  			that.listleft=listleft;
						}
			  	  	});
			  	  }else{
			  	  	uni.showToast({
			  	  	    title: '加载到底啦',
						icon:'none',
			  	  	    duration: 2000
			  	  	});
			  	  }
			  	  
			      }
			  });
		  },
		  //文章详情
		  articleInfo:function(e){
			  uni.navigateTo({
			  	url:'/pages/articleInfo/index?id='+e.currentTarget.dataset.id
			  })
		  }
	  },
	  
	 
	  
	 
	  //触底
	  onReachBottom(){
		  const that=this;
		  let page=that.page;
		  page++;
		 that.page=page;
		 let status=this.status
		if(status=='video'){
			this.videoList()
		}else{
			this.getArticle()
		}
		  
	  }
	   
	}
	
</script>

<style>
	.video-list{
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
		padding: 30rpx;
	}
	.video-list .left,.video-list .right{
		width: 48%;
		height: auto;
	}
	.video-list .items{
		width: 100%;
		height: auto;
	
		    background-color: #fff;
		    box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,.04);
		    border-radius: 10rpx;
			margin-bottom: 16rpx;
	}
	
	.video-list .items image{
		width: 100%;
		border-radius:10rpx;
		margin-bottom: 14rpx;
	}
	.video-list .items .msg{
		width: 100%;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		color: #333;
		font-size: 22rpx;
		margin-top: 16rpx;
		box-sizing: border-box;
		padding: 0 10rpx;
		padding-bottom: 20rpx;
	}
	.video-list .items .msg image{
		width: 50rpx;
		height: 50rpx;
		border-radius: 50%;
		margin-right: 14rpx;
		margin-bottom: 0;
	}
	.video-list .items .text{
		color: #333;
		margin: 0 auto;
		font-weight: 500;
		padding: 0 10rpx;
		box-sizing: border-box;
		font-size: 26rpx;
	}
	
	
	page{
		background-color: #f8f8f8;
	}
	
		.scroll-view_H{
	        white-space: nowrap;
			height: 50rpx;
			padding-top: 20rpx;
			
		}	
		
	.Advertising{
	    display: block;
	    width: 100%;
	    height: 250rpx;
	    box-sizing: border-box;
	    padding: 30rpx 30rpx 0 30rpx;
	    border-radius: 30rpx;
	    overflow: hidden;
		
		
	}
	.border{
		border-top: 8rpx solid #f6f6f9;
	}
	.Advertising image{
	    width: 100%;
		height: 100%;
		object-fit: cover;
		
	}	
	       
	    
	.choose{
		width: 100%;
		/* height: 60rpx; */
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		display: flex;
		align-items: center;		
	}
	.uni-scroll-view{
		display: flex;
		align-items: center;		
	}
	
	
	.choose-item{
		width: auto;
		height: 30rpx;
		display: inline-block;
		font-size: 30rpx;
		line-height: 30rpx;
		color: rgba(0,0,0,0.9);
		margin-right: 30rpx;
		
		vertical-align: top;
	}
	.tab{
	    width: 100%;
	    height: auto;
	    box-sizing: border-box;
	    padding: 20rxp 30rpx;
	    display: flex;
		flex-wrap: wrap;
	    align-items: center;
	    justify-content: space-between;
	    border-bottom: 8rpx solid #f6f6f9;
	}
	.tab .items{
	    width: 25%;
	    height: 100rpx;
	    color: #434343;
		margin-bottom: 20rpx;
	
	}
	.tab .items image{
	    display: block;
	    margin: 0 auto;
	    width: 72rpx;
	    height:72rpx;
	}
	.tab .items.active{
	    color: #247bff;
	}
	.tab .items view{
	    width: 100%;
	    text-align: center;
	    line-height:26rpx;
	    font-size: 26rpx;
	    margin-top: 10rpx;
	    font-weight: 400;
	}
	.banner{
		width: 100%;
		height: 400rpx;
		box-sizing: border-box;
		padding: 50rpx 30rpx;
		
	}
	.banner swiper{
		width: 100%;
		height: 100%;
		overflow: hidden;
		border-radius: 10rpx;
	}
	.banner swiper image{
		width: 100%;
		height: 100%;
		object-fit: cover;
		overflow: hidden;
		border-radius: 10rpx;
	}
	.search{
		width: 100%;
		height: 90rpx;
		box-sizing: border-box;
		padding: 23rpx 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		margin-top: 20rpx;
		
	}
	.searchtxt{
	    border-style: solid;
	    border-width: 1px;
	    border-color: rgb(238, 238, 238);
	    background-color: rgb(246, 246, 249);
	    width: 100%;
	    height: 90rpx;
		display: block;
	    border-radius: 45rpx;
	    box-sizing: border-box;
	    padding-left: 30rpx;
	    
	}
	.sou{
		width: 45rpx;
		height: 45rpx;
		position: absolute;
		top: 0;
		bottom: 0;
		margin: auto 0;
		right: 50rpx;
		
	}
	.user-box .name{
	    font-size: 22rpx;
	    color: #7c7c7c;
	}
	.user-box .num{
	    width: 100%;
	    display: flex;
	    align-items: center;
	    margin-top: 8rpx;
	}
	.user-box .num image{
	    width: 28rpx;
	    height: 23rpx;
	    margin-right: 10rpx;
	}
	.user-box .num text{
	    font-size: 22rpx;
	    line-height: 22rpx;
	    color: #f84d23;
	}
	.content-box{
	    width: 100%;
	    height: auto;
	    box-sizing: border-box;
	    padding: 30rpx 0;
	}
	.content-box .items{
	    width: 100%;
	    height: auto;
	    display: flex;
	    align-items: center;
	    justify-content: space-between;
	    box-sizing: border-box;
	    padding: 32rpx 30rpx 22rpx 30rpx;
	    border-bottom: 1px solid #eee;
	}
	.content-box .items .right{
	    width: 260rpx;
	    height: 160rpx;
	    border-radius: 10rpx;
	    overflow: hidden;
	}
	.content-box .items .rightall{
	    width: 0rem;
	    height: 160rpx;
	    border-radius: 10rpx;
	    overflow: hidden;
	}
	.content-box .items .right image{
	    width: 100%;
	    height: 100%;
	    object-fit: cover;
	}
	.content-box .items .left{
	    width: 390rpx;
	    box-sizing: border-box;
	    padding-right:10rpx;
	}
	.content-box .items .leftall{
	    width: 100%;
	    box-sizing: border-box;
	    padding-right:10rpx;
	}
	.content-box .items .left .title{
	    font-size: 30rpx;
	    color: #434343;
	    height: 75rpx;
	    overflow:hidden;
	    text-overflow:ellipsis;
	    display:-webkit-box;
	    -webkit-box-orient:vertical;
	    -webkit-line-clamp:2;
	    line-height: 37rpx;
	
	}
	
</style>
