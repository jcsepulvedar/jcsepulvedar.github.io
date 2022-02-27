<main class="about">
        <div class="titleCard">
            <div class="title ">                                
                <div class="rotate cardBackground">                                
                    <div class="rotate cardBackground">
                        <div class="rotate cardBackground">
                            <h1>Juan<br />Sepúlveda<br />W.I.P</h1>
                        </div>
                    </div>
                </div>
                <div class="subtitle rotate cardBackground">                                
                    <div class="rotate cardBackground">                                
                        <div class="rotate cardBackground">
                            <h2>Full Stack Developer</h2>
                        </div>
                    </div>   
                </div>     
                <div class="subtitle rotate cardBackground">                                
                    <div class="rotate cardBackground">                                
                        <div class="rotate cardBackground">
                            <h2>WebApps</h2>
                        </div>
                    </div>   
                </div>        
                <div class="subtitle rotate cardBackground">                                
                    <div class="rotate cardBackground">                                
                        <div class="rotate cardBackground">
                            <h2>IoT</h2>
                        </div>
                    </div>   
                </div>      
            </div>            
        </div>

        
</main>

<style lang="scss">
    @import './styles/variables';

    .about {
        height: 100vh;
        // display: flex;
        // -webkit-box-pack: justify;
        // justify-content: space-between;
    }

    h1 {
        font-size: 100px;
        margin: 30px;
        background: -webkit-linear-gradient($text-color1, $text-color2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    h2 {
        font-size: 40px;
        margin: 15px;
        background: -webkit-linear-gradient($text-color1, $text-color2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .titleCard {
        position: relative;
        .title {
            left: 0;
            top: 0;
            position: absolute;
        }
        .title {
            bottom: 100%;
            position: absolute;
        }
    }

    .rotate {
        &:hover {
            transform: none;
            transition: 0.2s;
            background-color: $color4;
        }
        &:not(:hover) {
            transition: 0.2s;
            transform: rotate3d(1, 0.3, 0.2, -10deg);
        }
    }

    .cardBackground {
        -webkit-backdrop-filter: blur(1px);
        backdrop-filter: blur(1px);
        background: $color4;
        -webkit-box-shadow: -6px 8px 16px 3px #808080; 
        box-shadow: -6px 8px 16px 3px #808080;
        border-radius: $border-radius;
    }

</style>