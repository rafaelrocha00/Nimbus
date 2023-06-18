<div class="flex">
    <div class="side-bar">

        <div class="main-options full-width column">            
            <div class="fa fa-square-plus nav-item center-item"></div>
        </div>

        <div class="full-width column">
            <a href="/calendar">            
                <em class="fa fa-calendar-alt nav-item"></em>
            </a>

            <a href="/tasks">            
                <em class="fa fa-list-check nav-item"></em>
            </a>

            <a href="/reference">            
                <em class="fa fa-book nav-item"></em>
            </a>
        </div>
    </div>
    <div class="main full debug">
        <div class="top-bar align-center">
            <input class="search-bar m-l-md" type="search">
            <div class="date m-l-md">{ currentDate}</div>
        </div>
        <div class="flex wrap w-80 gap-xs m-l-md debug">
            <slot></slot>
        </div>
    </div>
</div>
<script lang="ts">
    export const currentDate = 'MARCH 28 2000'
</script>

<style scoped>
.side-bar {
    color: white;
    background-color: #30149D;
    background: linear-gradient(180deg, #624AB4 0%, #30149D 100%);
    width: 6%;
    min-width: 60px;
    height: 100vh;
}

.column {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.center-item {
    display: flex;
    justify-content: center;
}
.main-options {
    margin-top: 100%;
}

.nav-item {
    font-size: 2.2rem;
    margin-top: 32px;
    cursor: pointer;
    color: white;
    width: 100%;
}

a {
    text-decoration: none;
}

.nav-item:visited {
    color: white;
}

.big {
    font-size: 4rem;
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

.w-80 {
	width: 80%;
}
</style>