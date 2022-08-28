<script setup lang="ts"></script>

<template>
	<q-layout view="hHh lpR fFf" height="100%">
		<q-header elevated class="bg-white text-black" height-hint="98">
			<q-toolbar>
				<q-toolbar-title> Hideki Yashiro </q-toolbar-title>
				<q-space />
				<q-tabs align="right" shrink>
					<q-route-tab label="Profile" />
					<q-route-tab label="Works" />
					<q-route-tab label="Contact" />
				</q-tabs>
			</q-toolbar>
		</q-header>
		<ProfilePart />
		<bodypart />
	</q-layout>
</template>

<style lang="scss"></style>
