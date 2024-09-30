<template>
    <div class="outer">
        <!-- 下边是侧边栏的代码, 包括一个运行图标和运行顺序 -->
        <div class="sidebar">
            <div>
                <img v-if="!isRunning" src="../../public/run.png" alt="">
                <img v-else src="../../public/running.png" alt="">

                <div>[{{ order }}]</div>
            </div>
        </div>

        <!--  -->
        <div class="">

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
    }
</script>

<style scoped>
    .outer {
        display: flex;
        flex-direction: row;

        border: 1px solid black;
        border-radius: 2px;

        height: 80px;
    }

    .sidebar {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

</style>