<script setup lang="ts">
	interface works {
		camptool: { title: string; desc: string; imgsrc: Array<string> };
	}

	const workData: works = reactive({
		camptool: {
			title: "キャンペーン検索ツール",
			desc: `現在有効のキャンペーンや過去のキャンペーンを検索、表示、管理できるツール。
			OracleDBと連携したCRUD機能を有しています。検索時間の短縮、ユーザー目線に合わせたUI/UXの改善により
			大幅な業務効率の改善に貢献しました。`,
			imgsrc: ["assets/img/campaign/1.png"],
		},
	});
</script>

<template>
	<div class="row">
		<div class="col-4" v-for="(i, k, idx) in workData" :key="idx">
			<q-card class="work-card">
				<q-card-section>
					<q-img :src="i.imgsrc[0]" />
				</q-card-section>
				<q-card-section class="q-pt-none">
					{{ i.desc }}
				</q-card-section>
			</q-card>
		</div>
	</div>
</template>

<style lang="stylus">
	.work-card{
	  height:300px;
	  min-width 300px;
	}
</style>
