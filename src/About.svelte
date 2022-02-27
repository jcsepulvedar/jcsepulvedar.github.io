<main class="about">
    <div>
        <h1>Juan Camilo<br />Sepúlveda</h1>
    </div>
</main>

<style lang="scss">
    @import './styles/variables';

    .about {
        height: 100vh;
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        & h1 {
            font-size: 60px;
            background: -webkit-linear-gradient($text-color1, $text-color2);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        };
    }
</style>