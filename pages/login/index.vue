<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			
		</view>
		<view class="userName">
			<input type="text" @input="onKeyInput" placeholder="请输入用户名">
		</view>
		<view class="userName">
			<input type="password" @input="onKeyInput2" placeholder="请输入密码">
		</view>
		<view class="userName" @click="login">
			<button>登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '分享秘籍-分享你的故事',
				userName:"",
				password:""
			}
		},
		onLoad(e) {

			let tourl=e.backpage;
			let type=e.backtype;
			this.tourl=tourl;
			this.type=type;
			
		},
		methods: {
			
			onKeyInput:function(e){
			  console.log(e.detail.value)
			  this.userName=e.detail.value;
			},
			onKeyInput2:function(e){
				 this.password=e.detail.value;
			},
			login:function(e){
				// uni.switchTab({
				//     url: '/pages/my/index'
				// });
			
					// 18618423772 112233
				uni.request({
				    url:this.api.login+'&mobile='+this.userName+'&pwd='+this.password, //仅为示例，并非真实接口地址。
				    success: (res) => {
				        console.log(res.data);
						uni.setStorage({
						    key: 'TOKEN',
						    data: res.data.kfopenid,
						    success: function () {
						        
						    }
						});
						
						uni.setStorage({
						    key: 'userinfo',
						    data: res.data,
						    success: function () {
						        
						    }
						});
						
						uni.switchTab({
						    url: this.tourl
						});
						
				    }
				});
				
			}
		}
	}
</script>

<style>
	.userName{
		width: 100%;
		height: 80rpx;
		box-sizing: border-box;
		padding: 0 60rpx;
		margin-top: 30rpx;
		
		
	}
	.userName button{
		width: 100%;
		height: 100%;
		background-color: #2b9738;
		color: #fff;
		
	}
	.userName input{
		width: 100%;
		height: 100%;
		border-radius: 8rpx;
		border: 1px solid #2b9738;
		box-sizing: border-box;
		padding: 0 30rpx;
		
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 140rpx;
		width: 140rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
