<main class="header">
    <div class="name">
        <h1>{"<JS />"}</h1>
    </div>
    <div class="header--links">
        <div class="header--link">
            <h1>{"<JS />"}</h1>
        </div>
        <div class="header--link">
            <h1>{"<JS />"}</h1>
        </div>
        <div class="header--link">
            <h1>{"<JS />"}</h1>
        </div>
    </div>
</main>

<style lang="scss">
    @import './styles/variables';
    .header {
        display: flex;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding-bottom: 5%;
        & h1 {
            font-size: 20px;
            margin: 8px 10px 10px 10px;
            color: $text-color1;
        };
        &--links {
            display: grid;
            gap: 40px;
            grid-template-columns: repeat(3, auto);

            // animation: slidein 1s;
            // animation-timing-function: linear;
            // @keyframes slidein {
            //     from {
            //         margin-right: 20%;
            //     }

            //     to {
            //         margin-right: 0%;
            //     }
            // }
        };
        &--link {
                backdrop-filter: blur(5px);
                border-radius: $border-radius;
                &:hover {
                    -webkit-box-shadow: -6px 8px 16px 3px #808080; 
                    box-shadow: -6px 8px 16px 3px #808080;
                    transition: 0.3s;
                    background-color: $color2;
                    // background-color: $color4;
                }
            }
    }
</style>