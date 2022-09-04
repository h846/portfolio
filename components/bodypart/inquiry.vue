<script setup lang="ts">
	const kanjiName = ref(null);
	const furiganaName = ref(null);
	const email = ref(null);
	const gender = ref("男");
	const inquiry = ref(null);
	const botfield = ref(false);
	const myAlert = ref(false);

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
			)
			.join("&");
	};

	const onSubmit = async () => {
		const dataset = {
			"form-name": "contact",
			username: kanjiName.value,
			katakana: furiganaName.value,
			gender: String(gender.value),
			useremail: email.value,
			message: inquiry.value,
		};
		if (botfield) {
			dataset["bot-field"] = botfield.value;
		}
		console.log(encode(dataset));
		await useFetch("/dummyForm", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode(dataset),
		})
			.then(({ data }) => {
				myAlert.value = true;
				console.log("DONE!");
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const onReset = () => {
		kanjiName.value = null;
		furiganaName.value = null;
		email.value = null;
		gender.value = "男";
		inquiry.value = null;
	};
</script>
<template>
	<div class="q-pa-md q-mt-lg" style="width: 100%; height: 600px">
		<div class="title">CONTACT</div>
		<form
			data-netlify="true"
			name="contact"
			@submit.prevent="onSubmit"
			@reset="onReset"
			class="q-gutter-md my-form"
			method="POST"
			data-netlify-honeypot="bot-field"
		>
			<!-- BOT対策用 -->
			<div v-show="false">
				<label for="message">スパムでない場合は空欄</label>
				<input type="text" name="bot-field" v-model="botfield" />
			</div>
			<!-- For Netlify Form -->
			<input type="hidden" name="form-name" value="contact" />
			<!-- Main Inputs -->
			<div class="row">
				<div class="col-4 q-mx-sm">
					<div class="inq-head">お名前</div>
					<q-input
						name="username"
						outlined
						dense
						hide-bottom-space
						v-model="kanjiName"
					/>
				</div>
				<div class="col-4 q-mx-sm">
					<div class="inq-head">フリガナ</div>
					<q-input
						name="katakana"
						outlined
						dense
						hide-bottom-space
						v-model="furiganaName"
					/>
				</div>
				<div class="col-3 q-mx-sm">
					<div class="inq-head q-mx-sm">性別</div>
					<div class="q-gutter-sm">
						<q-radio name="gender" v-model="gender" val="male" label="男" />
						<q-radio name="gender" v-model="gender" val="femail" label="女" />
					</div>
				</div>
			</div>
			<!-- E-MAIL SECTION -->
			<div class="q-px-sm">
				<div class="inq-head">メールアドレス</div>
				<q-input
					name="useremail"
					outlined
					dense
					hide-bottom-space
					v-model="email"
				/>
			</div>
			<!-- CONTACT SECTION -->
			<div class="q-px-sm">
				<div class="inq-head">お問い合わせ内容</div>
				<q-input name="message" v-model="inquiry" outlined type="textarea" />
			</div>

			<div class="q-px-sm">
				<q-btn label="送信" type="submit" color="primary" />
				<q-btn
					label="リセット"
					type="reset"
					color="primary"
					flat
					class="q-ml-sm"
				/>
			</div>
		</form>

		<q-dialog v-model="myAlert" auto-close>
			<q-card>
				<q-card-section>
					<div class="text-h6">送信完了しました！</div>
				</q-card-section>
			</q-card>
		</q-dialog>
	</div>
</template>

<style lang="stylus" scoped>
		.my-form{
		   width: 600px;
		   margin: 0 auto;
		  }

			.inq-head {
				position: relative;
				font-size: 1rem;
				font-weight: bold;
	}

	.title {
		position: relative;
		margin: 0 auto;
		width: 145px;
		font-size: 2rem;
		font-weight: bold;
			&:after {
					position: absolute;
					bottom: -5px;
					left: 2px;
					width: 145px;
					height: 6px;
					content: '';
					border-radius: 3px;
					background-image: -webkit-gradient(linear, right top, left top, from(#2af598), to(#009efd));
					background-image: -webkit-linear-gradient(right, #2af598 0%, #009efd 100%);
					background-image: linear-gradient(to left, #2af598 0%, #009efd 100%);
				}
			}
</style>
