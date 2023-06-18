<LayoutDash>
    {#each $store as project}
    <div class="flex align-end full-width m-t-md task-margin">
        <div class="icon-box">
            <em class="{'icon center ' + project.icon}"></em>
        </div>
        <div class="m-l-md description-box san-serif">
            <div class="flex align-center full-width space-between">
                <div class="title">{project.name}</div>
                <div class="progress-text m-r-sm">10/10</div>
            </div>
            <Progress progress="{getProgress(project)}"></Progress>
            <div class="m-l-md absolute color--info">
                {#each project.tasks as task}
                    <div class="m-t-xs">
                        <input type="checkbox">
                        <span>{task.name}</span>
                    </div>
                {/each}
            </div>
        </div>
    </div>
    {/each}
</LayoutDash>

<script lang="ts">
import { onMount } from 'svelte';
import LayoutDash from '../../components/LayoutDash.svelte'
import {store} from '../../data/projects'
import Progress from '../../components/Progress.svelte';
import type Project from '../../models/project';

onMount(async() => {
    await store.fetch();
    setTimeout(() => {
        console.log($store)
    }, 300)
    
});


function getProgress(project : Project) {
    if(!project.tasks.length) {
        return
    }
    
    let finished = 0
    
    project.tasks.forEach((task) => {
        finished += task.finished ? 1 : 0
    })
    
    return finished / project.tasks.length
}
</script>
<style scoped>
    .task-margin {
        margin-bottom: 100px;
    }


    .icon-box {
        width: 84px;
        height: 84px;
        background-color: #89CF99;
        box-shadow: 0px 4px 4px 0px #16083040;
        border-radius: 15px;
    }

    .icon {
        color: white;
        font-size: 2.5rem;
    }

    .color--info {
        color: #213F55;
    }

    .title {
        color: #213F55;
        font-weight: 700;
        font-size: 32px;
    }

    .description-box {
        width: 300px;
    }

    .progress-text {
        color: #8D889B;
        font-size: 18px;
        font-weight: 700;
    }
</style>