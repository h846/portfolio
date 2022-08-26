<script setup lang="ts"></script>

<template>
	<q-layout view="hHh lpR fFf" height="100%">
		<q-header elevated class="bg-grey-3 text-black" height-hint="98">
			<q-toolbar>
				<q-toolbar-title> My Portfolio </q-toolbar-title>
				<q-space />
				<q-tabs align="right" shrink>
					<q-route-tab label="Profile" />
					<q-route-tab label="Works" />
					<q-route-tab label="Contact" />
				</q-tabs>
			</q-toolbar>
		</q-header>
		<HeaderPart />
		<!--<BodyPart />-->
	</q-layout>
</template>

<style lang="scss">
	@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap");
	html,
	body {
		font-family: "Noto Sans JP", sans-serif !important;
	}
</style>
