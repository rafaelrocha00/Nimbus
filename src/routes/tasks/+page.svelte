<LayoutDash>
    <div class="background debug">
        <div class="painel">
            <div class="title">to do</div>
        </div>
    </div>
</LayoutDash>

<script>
    import LayoutDash from '../../components/LayoutDash.svelte'

</script>
<style scoped>
    .painel {
        width: 370%;
        height: 90%;
        background-color: white;
    }

    .background {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: red;
    }
</style>