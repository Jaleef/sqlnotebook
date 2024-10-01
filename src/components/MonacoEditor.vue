<template>
    <div ref="codeEditBox" class="codeEditBox">

    </div>
</template>

<script lang="ts" setup>
    import * as monaco from "monaco-editor";
    import { ref, onMounted, onBeforeUnmount } from "vue";
    
    
    let editor: monaco.editor.IStandaloneCodeEditor | null = null;
    const codeEditBox = ref(null);

    onMounted(() => {
        // 初始化编辑器
        if (codeEditBox.value) {
        
            editor = monaco.editor.create(codeEditBox.value, {
                value: '',  // 编辑器默认值
                language: 'sql', // 编辑器语言
                // theme: 'vs-dark', // 编辑器主题
                // selectOnLineNumbers: true, // 显示行号
                // roundedSelection: false, // 选中行是否为圆角
                // readOnly: false, // 是否只读
                // cursorStyle: 'line', // 光标样式
                // automaticLayout: true, // 自动布局
                // glyphMargin: true, // 自行边缘
                // // useTabstops: false, // 使用tab键
                // fontSize: 15, // 字体大小
                // // autoIndent: true, // 自动缩进
                // quickSuggestions: true, // 快速建议
                // quickSuggestionsDelay: 100 // 快速建议延迟
            });
        }

    });

    onBeforeUnmount(() => {
        if (editor) {
            editor.dispose();
        }
    })
</script>

<script lang="ts">
    export default {
        name: "MonacoEditor",
    }
</script>

<style scoped>
    .codeEditBox {
        width: 100%;        
        height: 80px;

        background-color: skyblue;
    }
</style>