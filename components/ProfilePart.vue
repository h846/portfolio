<script setup lang="ts">
	// import img_src from "@/assets/sauna_bg.jpg";
</script>

<template>
	<div class="wrapper">
		<div>
			<div class="title">Hideki Yashiro</div>
			<div class="subtitle">aaaaa</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.wrapper {
		position: relative;
		margin-top:50px;
		height: 400px;
		background: url("@/assets/sauna_bg.png");
		background-position: center center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size:cover;
		background-color: #464646;
		&:after{
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: linear-gradient(180deg, transparent 0 70%, #FFF 100%);
		}
		> div {
			width: 100%;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
		.title{
			margin:0;
			text-align: center;
			font-family: 'Roboto'
			font-weight: 900;
			font-style: italic;
			font-size: 5rem;
			color: white;
			text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
				0px 18px 23px rgba(0, 0, 0, 0.1);
		}
	}
</style>
