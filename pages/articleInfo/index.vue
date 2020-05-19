<template>
	<view class="bg">
		
		<view class="title" v-text="info.title">
			
		</view>
		<view class="addtime" v-text='time(Number(info.addtime))'></view>
		<rich-text :nodes="info.detail"></rich-text>
		<editor id="editor" class="ql-container"  @ready="onEditorReady"></editor>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				info:''
			}
		},
		onLoad(e) {
			const that=this;
			uni.request({
				url:that.api.articleDetail+"&id="+e.id,
				success:function(res){
					let info=res.data;
					console.log(info)
					that.info=info;
				}
			})				
		},
		methods:{
			onEditorReady() {
				
                uni.createSelectorQuery().select('#editor').context((res) => {
                    this.editorCtx = 1111
                }).exec()

			
			},
			time:function(time){
				
			var  date = new Date(time * 1000);

	        var Y = date.getFullYear() + '-';

	        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';

	        var D = date.getDate() + ' ';

	        var h = date.getHours() + ':';

	        var m = date.getMinutes()>10? date.getMinutes() + ':': '0'+date.getMinutes()+ ':';

	        var s = date.getSeconds()>10? date.getSeconds():'0'+ date.getSeconds();
			
	        return Y+M+D+h+m+s;

			}
		}
	}
</script>

<style>
	.bg{
		width: 100%;
		height: auto;
		box-sizing: border-box;
		padding: 30rpx;
	}
	.title{
		width: 100%;
		text-align: left;
		font-size: 34rpx;
		color: #333333;
		margin-bottom: 30rpx;
		margin-top: 40rpx;
		font-weight: bold;
	}
	.addtime{
		width: 100%;
		text-align: right;
		color: #616161;
		font-size: 26rpx;
		margin-bottom: 30rpx;
	}
</style>
