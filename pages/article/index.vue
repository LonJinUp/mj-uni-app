<template>
	<view class="content-box">
		<view class="items">
		        <view class="left">
		            <view class="title">战“疫”关键时刻!这些大咖为经济发展指路</view>
		            <view class="user-box">
		                <view class="name">中国金融信息网</view>
		                <view class="num">
		                    <image src="/static/images/tongji.png" alt=""></image>
		                    <text> 2656</text>
		                </view>
		                <!-- <view class="gai">改成我的</view> -->
		            </view>
		        </view>
		        <view class="right">
		           <image src="https://ftp.17cheng.cn/images/54/2020/05/202005170621031435.png?imageView2/1/w/300/h/200" alt="">  
		        </view>
		 </view>
		 <view class="items">
		         <view class="left">
		             <view class="title">战“疫”关键时刻!这些大咖为经济发展指路</view>
		             <view class="user-box">
		                 <view class="name">中国金融信息网</view>
		                 <view class="num">
		                     <image src="/static/images/tongji.png" alt=""></image>
		                     <text> 2656</text>
		                 </view>
		                 <!-- <view class="gai">改成我的</view> -->
		             </view>
		         </view>
		         <view class="right">
		            <image src="https://ftp.17cheng.cn/images/54/2020/05/202005170621031435.png?imageView2/1/w/300/h/200" alt="">  
		         </view>
		  </view>
		
	</view>
	
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		onLoad:function(){
			const that=this;
			
			uni.request({
				url:that.api.banner,
				success:function(e){
					console.log(e.data)
					that.banner=e.data
				}
			})
		},
		
	}
</script>

<style>
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
