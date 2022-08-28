<script setup lang="ts">
	interface skillObj {
		htmlcss: number;
		JavaScript: number;
		NodeJs: number;
		Python: number;
		RPA: number;
	}
	const skills: skillObj = reactive({
		htmlcss: 0,
		JavaScript: 0.9,
		NodeJs: 0.7,
		Python: 0.6,
		RPA: 0.8,
	});

	onMounted(() => {
		skills.htmlcss = 1;
	});
</script>

<template>
	<div class="profile-wrapper">
		<div>
			<h1 class="title">SKILL</h1>
			<div class="row">
				<div class="col-6 q-pa-sm">
					HTML5/CSS3
					<q-linear-progress
						stripe
						size="20px"
						color="warning"
						rounded
						:value="skills.htmlcss"
					/>
				</div>
				<div class="col-6 q-pa-sm">
					JavaScript
					<q-linear-progress
						stripe
						size="20px"
						color="warning"
						rounded
						:value="skills.JavaScript"
					/>
				</div>
				<div class="col-6 q-pa-sm">
					Node.js
					<q-linear-progress
						stripe
						size="20px"
						color="warning"
						rounded
						:value="skills.NodeJs"
					/>
				</div>
				<div class="col-6 q-pa-sm">
					Python
					<q-linear-progress
						stripe
						size="20px"
						color="warning"
						rounded
						:value="skills.Python"
					/>
				</div>

				<div class="col-6 q-pa-sm">
					RPA
					<q-linear-progress
						stripe
						size="20px"
						color="warning"
						rounded
						:value="skills.RPA"
					/>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
	.profile-wrapper {
		font-family: "Roboto";
		width: 100%;
		height: 500px;
		> div {
			text-align: center;
			width: 80%;
			margin: 0 auto;
			.title {
				font-size: 2rem;
				font-weight: bold;
				margin: 0 auto;
			}
		}
	}
</style>
