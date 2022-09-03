<script setup lang="ts">
	const kanjiName = ref(null);
	const furiganaName = ref(null);
	const email = ref(null);
	const prefs = [
		"北海道",
		"青森県",
		"岩手県",
		"宮城県",
		"秋田県",
		"山形県",
		"福島県",
		"茨城県",
		"栃木県",
		"群馬県",
		"埼玉県",
		"千葉県",
		"東京都",
		"神奈川県",
		"新潟県",
		"富山県",
		"石川県",
		"福井県",
		"山梨県",
		"長野県",
		"岐阜県",
		"静岡県",
		"愛知県",
		"三重県",
		"滋賀県",
		"京都府",
		"大阪府",
		"兵庫県",
		"奈良県",
		"和歌山県",
		"鳥取県",
		"島根県",
		"岡山県",
		"広島県",
		"山口県",
		"徳島県",
		"香川県",
		"愛媛県",
		"高知県",
		"福岡県",
		"佐賀県",
		"長崎県",
		"熊本県",
		"大分県",
		"宮崎県",
		"鹿児島県",
		"沖縄県",
	];
	const prefecture = ref(prefs[0]);

	const genders = ["男", "女", "その他"];
	const gender = ref(genders[0]);

	const onReset = () => {
		kanjiName.value = null;
		furiganaName.value = null;
		email.value = null;
		// prefecture.value = null;
		gender.value = null;
	};
</script>
<template>
	<div class="q-pa-md q-mt-lg" style="width: 100%; height: 600px">
		<q-form @reset="onReset" class="q-gutter-md my-form">
			<q-input
				filled
				v-model="kanjiName"
				label="お名前 *"
				hint="フルネームを漢字でご入力ください。"
				lazy-rules
				:rules="[(val) => (val && val.length > 0) || 'Please type something']"
			/>

			<q-input
				filled
				v-model="furiganaName"
				label="お名前のふりがなを入力してください。"
			/>

			<q-select
				outlined
				v-model="prefecture"
				:options="prefs"
				label="都道府県"
			/>

			<div>
				<q-btn label="Submit" type="submit" color="primary" />
				<q-btn
					label="Reset"
					type="reset"
					color="primary"
					flat
					class="q-ml-sm"
				/>
			</div>
		</q-form>
	</div>
</template>

<style lang="stylus">
	.my-form{
	   width: 500px;
	   margin: 0 auto;
	  }
</style>
