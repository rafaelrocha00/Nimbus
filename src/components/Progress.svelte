<div class="outer">
    <div class="inter" style="width: calc(100% * {progress})"></div>
</div>
<script lang="ts">
export let progress: Number = 0
</script>
<style>
    .outer {
        width: 100%;
        height: 30px;
        background-color: #E4E6EA;
        border-radius: 17px;
    }

    .inter {
        height: 100%;
        background-color: #6CFF60;
        border-radius: 17px;
    }
</style>