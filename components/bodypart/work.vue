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

	const slide = ref(1);
</script>

<template>
	<div>
		<div class="title">WORKS</div>
		<div class="row justify-center items-center">
			<div class="col-4" v-for="(i, k, idx) in workData" :key="idx">
				<!-- Card Part-->
				<q-card class="work-card" @click="i.dialog = true">
					<q-card-section>
						<q-img :src="i.imgsrc[0]" />
					</q-card-section>
					<q-card-section class="q-pt-none">
						<div class="work-title">{{ i.title }}</div>
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
						style="width: 100%; min-width: 700px; height: 100%"
					>
						<q-card-section class="q-pt-none" style="height: 100%">
							<div
								class="row items-center justify-between"
								style="height: 100%"
							>
								<div class="col-4 q-mx-sm">
									<div class="card-title">{{ i.title }}</div>
									<div class="card-desc">{{ i.desc }}</div>
								</div>
								<div class="col-6 q-mx-sm">
									<q-card>
										<q-carousel
											animated
											v-model="slide"
											arrows
											navigation
											infinite
										>
											<q-carousel-slide
												v-for="(img, idx) in i.imgsrc"
												:key="idx"
												:name="idx"
												:img-src="img"
											/>
										</q-carousel>
									</q-card>
								</div>
							</div>
						</q-card-section>
					</q-card>
				</q-dialog>
			</div>
		</div>
	</div>
</template>

<style lang="stylus" scoped>
	.work-card{
	  height:300px;
	  min-width 300px;
		cursor:pointer;
	}

	.title {
		position: relative;
		margin: 30px auto;
		width: 145px;
		font-size: 2rem;
		font-weight: bold;
			&:after {
					position: absolute;
					bottom: -5px;
					left: 2px;
					width: 110px;
					height: 6px;
					content: '';
					border-radius: 3px;
					background-image: -webkit-gradient(linear, right top, left top, from(#2af598), to(#009efd));
					background-image: -webkit-linear-gradient(right, #2af598 0%, #009efd 100%);
					background-image: linear-gradient(to left, #2af598 0%, #009efd 100%);
				}
			}

			.work-title{
				margin-top:10px;
				text-align: center;
				font-size: 16px;
				font-weight: bold;
			}

			.card-title{
				text-align: center;
				font-size: 1rem;
				font-weight:bold;
				margin-bottom: 20px;
			}

			.card-desc {
				line-height: 25px;
			}
</style>
