<main class="about">
    <div class="titleCard">
        <div class="title">                                
            <div class="cardBackground">                                
                <div class="rotate cardBackground">
                    <h1>Juan<br />Sepúlveda<br />W.I.P</h1>
                </div>
            </div>
            <div class="cardBackground">                                
                <div class="rotate cardBackground">                                
                    <h2>Full Stack Developer</h2>
                </div>   
            </div>     
            <div class="cardBackground">                                
                <div class="rotate cardBackground">                                
                    <h2>WebApps</h2>
                </div>   
            </div>        
            <div class="cardBackground">                                
                <div class="rotate cardBackground">                                
                    <h2>IoT</h2>
                </div>   
            </div>      
        </div>            
    </div>

    <!-- <div class="titleCard">
        <div class="title">                                
            <div class="cardBackground myList">                                
                <div class="cardBackground">                                
                    <div class="rotate cardBackground">                                
                        <h2>Full Stack Developer</h2>
                    </div>   
                </div>     
                <div class="cardBackground">                                
                    <div class="rotate cardBackground">                                
                        <h2>WebApps</h2>
                    </div>   
                </div>        
                <div class="cardBackground">                                
                    <div class="rotate cardBackground">                                
                        <h2>IoT</h2>
                    </div>   
                </div>  
            </div>
        </div>            
    </div> -->
</main>

<style lang="scss">
    @import './styles/variables';
    @import './styles/media-queries';

    .about {
        height: 200vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: auto;
        // @include mobile() {
        //     grid-template-columns: 1fr;
        // }
    }

    // .myList {
    //     margin-top:30px;
    //     padding: 10px;
    // }

    h1 {
        font-size: 100px;
        margin: 30px;
        background: -webkit-linear-gradient($text-color1, $text-color2);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        padding: 10px;
    }

    h2 {
        font-size: 40px;
        margin: 15px;
        padding: 5px;
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