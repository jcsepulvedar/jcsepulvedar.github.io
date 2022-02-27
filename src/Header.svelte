<main class="header">
    <div>
        <h1>{"<JCS />"}</h1>
    </div>
    <div class="header--links">
        <div class="header--link">
            <h1>{"<JCS />"}</h1>
        </div>
        <div class="header--link">
            <h1>{"<JCS />"}</h1>
        </div>
        <div class="header--link">
            <h1>{"<JCS />"}</h1>
        </div>
    </div>
</main>

<style lang="scss">
    @import './styles/variables';
    .header {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding-bottom: 2%;
        & h1 {
            font-size: 20px;
            margin: 8px 10px 10px 10px;
        };
        &--links {
            display: grid;
            gap: 40px;
            grid-template-columns: repeat(3, auto);
        };
        &--link {
            backdrop-filter: blur(5px);
            border-radius: 20px;
            &:hover {
                transition: 0.3s;
                background-color: $color2;
            }
        }
    }
</style>