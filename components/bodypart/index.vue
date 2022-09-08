<script setup lang="ts"></script>

<template>
	<div class="bg">
		<bodypart-skill id="skill" style="padding-top: 50px" />
		<bodypart-work id="works" style="padding-top: 50px" />
		<bodypart-inquiry id="contact" style="padding-top: 50px" />
	</div>
</template>

<style lang="stylus" scoped>
	.bg{
		position relative;
		&:before{
			content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background-image: linear-gradient(180deg, #FFF 0 0, transparent 5%)
		}
	}
</style>
