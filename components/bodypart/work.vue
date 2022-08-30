<script setup lang="ts">
	interface works {
		camptool: { title: string; desc: string; imgsrc: Array<string> };
	}

	const workData: works = {
		camptool: {
			title: "キャンペーン検索ツール",
			desc: `現在有効のキャンペーンや過去のキャンペーンを検索、表示、管理できるツール。
			OracleDBと連携したCRUD機能を有しています。検索時間の短縮、ユーザー目線に合わせたUI/UXの改善により
			大幅な業務効率の改善に貢献しました。`,
			imgsrc: [""],
		},
	};
</script>

<template>
	<div class="row">
		<div class="col-4" v-for="i in 3" :key="i">
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
