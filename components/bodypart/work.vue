<script setup lang="ts">
	interface works {
		camptool: {
			title: string;
			desc: string;
			imgsrc: Array<string>;
			dialog: boolean;
		};
	}

	const workData: works = reactive({
		camptool: {
			title: "キャンペーン検索ツール",
			desc: `現在有効のキャンペーンや過去のキャンペーンを検索、表示、管理できるツール。
			OracleDBと連携したCRUD機能を有しています。検索時間の短縮、ユーザー目線に合わせたUI/UXの改善により
			大幅な業務効率の改善に貢献しました。`,
			imgsrc: [
				"/img/campaign/1.png",
				"/img/campaign/2.png",
				"/img/campaign/3.png",
			],
			dialog: false,
		},
	});
</script>

<template>
	<div class="row">
		<div class="col-4" v-for="(i, k, idx) in workData" :key="idx">
			<!-- Card Part-->
			<q-card class="work-card" @click="i.dialog = true">
				<q-card-section>
					<q-img :src="i.imgsrc[0]" />
				</q-card-section>
				<q-card-section class="q-pt-none">
					{{ i.title }}
				</q-card-section>
			</q-card>
			<!-- Dialog Part -->
			<q-dialog
				v-model="i.dialog"
				transition-show="flip-down"
				transition-hide="flip-up"
			>
				<q-card
					class="q-pa-lg"
					style="width: 100%; max-width: 700px; height: 400px"
				>
					<q-card-section class="q-pt-none">
						<div class="row">
							<div class="col-5">
								<div>{{ i.title }}</div>
								<div>{{ i.desc }}</div>
							</div>
							<div class="col-7">
								<div class="row">
									<div class="col" v-for="(img, idx) in i.imgsrc" :key="idx">
										<q-img :src="img" style="height: 100px" />
									</div>
								</div>
							</div>
						</div>
					</q-card-section>
				</q-card>
			</q-dialog>
		</div>
	</div>
</template>

<style lang="stylus">
	.work-card{
	  height:300px;
	  min-width 300px;
		cursor:pointer;
	}
</style>
