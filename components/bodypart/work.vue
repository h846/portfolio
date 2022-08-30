<script setup lang="ts">
	interface works {
		camptool: { title: string; desc: string; imgsrc: Array<string> };
	}
</script>

<template>
	<div class="row">
		<div class="col-4" v-for="i in 3">
			<q-card class="work-card">
				<q-card-section>
					<img src="/assets" />
				</q-card-section>
				<q-card-section class="q-pt-none">
					{{ "aaa" }}
				</q-card-section>
			</q-card>
		</div>
	</div>
</template>

<style lang="stylus">
	.work-card{
	  height:300px;
	  width 300px;
	}
</style>
