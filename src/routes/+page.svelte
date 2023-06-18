<div class="flex">
    <div class="side-bar"></div>
    <div class="main full">
        <div class="top-bar align-center">
            <input class="search-bar m-l-md" type="search">
            <div class="date m-l-md">{ currentDate}</div>
        </div>
        <div class="flex wrap w-80 gap-xs m-l-md">
            {#each days as day}
            <div class="date-frame"></div>
            {/each}
        </div>
    </div>
</div>
<script lang="ts">
    import { onMount } from "svelte";

    export const currentDate = 'MARCH 28 2000'
    let days : number[] = []


    onMount(() => {days = getDate()})

    function getDate() {
        return [0,1,2,3,4,5,6,0,1,2,3,4,5,6,0,1,2,3,4,5,6]
    }
</script>

<style scoped>
.side-bar {
    width:8%;
    height: 100vh;
    background-color: #30149D;
    background: linear-gradient(180deg, #624AB4 0%, #30149D 100%);
}

.top-bar {
    height: 4rem;
}

.search-bar {
    width: 16rem;
    height: 2.4rem;
    border: none;
    background-color: #D9D9D9;
}

.date {
    color: #213F55;
    font-weight: 700;
    font-size: 30px;
    text-transform: capitalize;
    font-family: 'Archivo Narrow', sans-serif;
}

.date-frame {
    width: 120px;
    height: 120px;
    background-color: #82CAC169;
}

.w-80 {
	width: 80%;
}
</style>