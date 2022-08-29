<script setup lang="ts">
	interface skillObj {
		htmlcss: { title: string; val: number };
		JavaScript: { title: string; val: number };
		NodeJS: { title: string; val: number };
		Python: { title: string; val: number };
		RPA: { title: string; val: number };
	}
	const skills: skillObj = reactive({
		htmlcss: { title: "HTML5/CSS3", val: 0 },
		JavaScript: { title: "JavaScript", val: 0 },
		NodeJS: { title: "Node.js", val: 0 },
		Python: { title: "Python", val: 0 },
		RPA: { title: "RPA", val: 0 },
	});

	onMounted(() => {
		skills.htmlcss.val = 1;
		skills.JavaScript.val = 0.9;
		skills.NodeJS.val = 0.7;
		skills.Python.val = 0.5;
		skills.RPA.val = 0.8;
	});
</script>

<template>
	<div class="profile-wrapper">
		<div>
			<div class="title">SKILL</div>
			<div class="row">
				<div class="col-6 q-pa-sm" v-for="(i, k, idx) in skills" :key="idx">
					{{ i.title }}
					<q-linear-progress
						stripe
						size="25px"
						color="warning"
						rounded
						:value="i.val"
					>
						<div class="absolute-full flex flex-center">
							<q-badge
								color="white"
								text-color="accent"
								:label="i.val * 100 + '%'"
							/>
						</div>
					</q-linear-progress>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.profile-wrapper {
		font-family: "Roboto";
		width: 100%;
		height: 500px;
		> div {
			text-align: center;
			max-width: 600px;
			width: 80%;
			margin: 0 auto;
			.title {
				text-align: center;
				line-height: 20px;
				width: 90px;
				font-size: 2rem;
				font-weight: bold;
				margin: 0 auto;
				padding: 0.5rem 0rem;
				margin-bottom: 0.2rem;
				border-bottom: 6px solid #f6ba33;
			}
		}
	}
</style>
