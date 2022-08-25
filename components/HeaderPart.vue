<script setup lang="ts">
	import img_src from "@/assets/sauna_bg.jpg";
</script>

<template>
	<div>
		<div class="q-pa-md q-gutter-md">
			<div class="row justify-between">
				<q-parallax :src="img_src">
					<h1 class="text-white">Hideki Yashiro</h1>
				</q-parallax>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap");
	.title {
		font-family: "Sawarabi Gothic", sans-serif !important;
		font-style: italic;
		letter-spacing: 1px;
		text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
			0px 18px 23px rgba(0, 0, 0, 0.1);
		font-size: 3rem;
	}
</style>
