<template>
	<div class="outer">
		<div>
			{{ editorId }}
		</div>
		<!-- 下面是空白区 -->
		<div class="blank">
			<div class="addBtn" @click="addCode">+ 代码</div>
			<div class="addBtn" @click="addMarkdown">+ markdown</div>
		</div>

		<div class="mainContent">
			<!-- 下边是侧边栏的代码, 包括一个运行图标和运行顺序 -->
			<div class="sidebar">
				<div>
					<img
						v-if="!isRunning"
						src="../../public/run.png"
						alt=""
						@click="submit"
					/>
					<img v-else src="../../public/running.png" alt="" />

					<div style="margin-bottom: 10px">[{{ order }}]</div>
				</div>
			</div>

			<!-- 下边是代码区, 使用monaco-editor组件 -->
			<div class="code">
				<div :id="editorId"></div>
			</div>
		</div>

		<!-- 下面是输出区 -->
		<div id="output">result</div>

		<!-- 下面是空白区 -->
		<div class="blank">
			<div class="addBtn" @click="addCode">+ 代码</div>
			<div class="addBtn" @click="addMarkdown">+ markdown</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref, onMounted } from "vue";

	import Quill from "../quill";
	import "quill/dist/quill.snow.css";

	const props = defineProps(["editorId", "addCode", "addMarkdown"]);

	let order = ref(1);
	let isRunning = ref(false);

	onMounted(() => {
		// const editorId = props.editorId;
		const quill = new Quill("#" + props.editorId, {
			theme: "snow",
			modules: {
				toolbar: false,
			},
		});
		console.log(`quill: ${props.editorId} created`);
	});

	function submit() {
		isRunning.value = true;
		setTimeout(() => {
			isRunning.value = false;
		}, 2000);
	}
</script>

<script lang="ts">
	export default {
		name: "CodeBox",
		components: {},
	};
</script>

<style scoped>
	.outer {
		display: flex;
		flex-direction: column;

		border: 1px solid black;
		border-radius: 2px;
	}

	.mainContent {
		display: flex;
		flex-direction: row;

		min-height: 80px;
		width: 100%;

		border: 0.5px solid red;
	}

	.sidebar {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		width: 20px;
	}

	.code {
		border: 0.5px solid gainsboro;

		margin-top: 5px;
		margin-left: 20px;
		margin-bottom: 10px;
		margin-right: 2px;

		width: 100%;
	}

	#output {
		margin-left: 50px;
	}

	.blank {
		height: 20px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 5px;
	}

	.blank:hover .addBtn {
		display: flex;
		border: 1px solid black;
		margin-right: 10px;
	}

	.addBtn {
		display: none;
	}
</style>
