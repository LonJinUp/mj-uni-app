<template>
	<view id="app" class="pages">
		
		<view class="user">
			<view class="left">
				<image :src="info.avartar" mode=""></image>
				<view class="name">
					<view v-text="info.kfname"></view>
					<view v-text="info.mobile"></view>
				</view>
			</view>
			<image src="../../static/images/right.png" class="right" mode=""></image>
		</view>
		
		 <navigator url="" hover-class="none" class="gopages">
			<view class="left">
				<image src="../../static/images/product.png" mode=""></image>
				作品管理
			</view>
			<image src="../../static/images/right.png" class="right" mode=""></image>
		 </navigator>
		 
		 <navigator url="../article/index" hover-class="none" class="gopages margin-10">
		 	<view class="left">
		 		<image src="../../static/images/wenzhang.png" mode=""></image>
		 		我的文章
		 		</view>
		 	<image src="../../static/images/right.png" class="right" mode=""></image>
		 </navigator>
		 
		 <navigator url="../videolist/index" hover-class="none" class="gopages margin-10">
		 	<view class="left">
		 		<image src="../../static/images/videos.png" mode=""></image>
		 		我的视频
		 		</view>
		 	<image src="../../static/images/right.png" class="right" mode=""></image>
		 </navigator>
		 
		 <navigator url="" hover-class="none" class="gopages margin-10">
		 	<view class="left">
		 		<image src="../../static/images/vip.png" mode=""></image>
		 		我的会员
		 		</view>
		 	<image src="../../static/images/right.png" class="right" mode=""></image>
		 </navigator>
		 
		 
		 
		
	</view>
	
</template>
<style>
	.gopages{
		width: 100%;
		height: 90rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
		margin-top: 30rpx;
	}
	.margin-10{
		margin-top: 10rpx;
	}
	.gopages .left{
		display: flex;
		align-items: center;
		justify-content: flex-start;
		font-size: 26rpx;
		flex: 1;
	}
	
	.gopages .left image{
		width: 40rpx;
		height: 40rpx;
		margin-right: 24rpx;
	}
	.gopages .right{
		width: 30rpx;
		height: 30rpx;
	}
	
	page{
		background-color: #f8f8f8;
	}
	.user{
		width: 100%;
		height: 160rpx;
		box-sizing: border-box;
		padding: 0 30rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: #fff;
	}
	.user .left{
		width: 80%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.user .left image{
		width: 90rpx;
		height: 90rpx;
		border-radius: 50%;
		border: 1px solid #8F8F94;
		margin-right: 30rpx;
	}
	.user .left .name{
		width: auto;
		
	}
	.user .left .name view:first-child{
		font-size: 30rpx;
		font-weight: bold;
		color: #333333;
	}
	.user .left .name view:last-child{
		font-size: 26rpx;
		
		color: #808080;
	}
	.user .right{
		width: 30rpx;
		height: 30rpx;
	}
</style>
<script>
	export default {
	    data() {
	        return {
	            
	        };
	    },
	    onLoad : function(e) {
	       
			var loginRes = this.checkLogin('../my/index', '1');
			if(!loginRes){return false;}
			let that=this;
			uni.getStorage({
			    key: 'userinfo',
			    success: function (res) {
			        console.log(res.data);
					that.info=res.data;
			    }
			});
	    },
		onShow:function(e){
		
		},
	}
</script>


