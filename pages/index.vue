<script setup lang="ts"></script>

<template>
	<q-layout view="hHh lpR fFf" height="100%">
		<q-header elevated class="bg-white text-black" height-hint="98">
			<q-toolbar>
				<q-toolbar-title> My Portfolio </q-toolbar-title>
				<q-space />
				<q-tabs align="right" shrink>
					<q-route-tab label="Profile" to="#" href="#" />
					<q-route-tab label="Skill" to="#skill" href="#skill" />
					<q-route-tab label="Works" to="#works" href="#works" />
					<q-route-tab label="Contact" to="#contact" href="#contact" />
				</q-tabs>
			</q-toolbar>
		</q-header>
		<ProfilePart />
		<bodypart />
	</q-layout>
</template>

<style lang="scss">
	html {
		scroll-behavior: smooth;
	}
</style>
