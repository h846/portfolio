<script setup lang="ts">
	import img_src from "@/assets/sauna_bg.jpg";
</script>

<template>
	<div class="wrapper">
		<h1 class="title">Hideki Yashiro</h1>
	</div>
</template>

<style lang="scss" scoped>
	.wrapper {
		height: 800px;
		background: linear-gradient(to bottom, transparent, #fff),
			url("@/assets/sauna_bg.jpg");
		background-position: center center;
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: cover;
		background-color: #464646;
	}
	.title {
		font-style: italic;
		color: white;
		letter-spacing: 1px;
		text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
			0px 18px 23px rgba(0, 0, 0, 0.1);
		font-size: 2rem;
	}
</style>
