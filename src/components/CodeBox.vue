<template>
    <div class="outer">
        <div class="mainContent">
            <!-- 下边是侧边栏的代码, 包括一个运行图标和运行顺序 -->
            <div class="sidebar">
                <div>
                    <img v-if="!isRunning" src="../../public/run.png" alt="">
                    <img v-else src="../../public/running.png" alt="">

                    <div style="margin-bottom: 10px;">[{{ order }}]</div>
                </div>
            </div>

            <!-- 下边是代码区, 使用monaco-editor组件 -->
            <div class="code">
            </div>

            
        </div>

        <!-- 下面是输出区 -->
        <div class="output">
            result
        </div>
    </div>
    
    
</template>

<script lang="ts" setup>
    import { ref } from 'vue';

    let order = ref(1);
    let isRunning = ref(false);

</script>

<script lang="ts">
    export default {
        name: "CodeBox",
        components: {
        }
    }
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
    }

    .code {
        border: 0.5px solid gainsboro;
        
        margin-top: 5px;
        margin-left: 20px;
        margin-bottom: 10px;
        margin-right: 2px;

        width: 100%;
    }

    .output {
        margin-left: 50px;
    }
</style>