var tehBanner = "./asset/image/Teh-Persada-gold-jpg.jpg";
var kopiBanner = "./asset/image/kopi-suoyang.jpg";
var mysuriBanner = "./asset/image/Mysuri-Banner.jpg";
var tanjaqBanner = "./asset/image/tanjaq-banner-jpg.jpg";
var anasBanner = "./asset/image/Anas-Banner.jpg";

document.querySelector("div#banner-img").innerHTML = `
<section id="slider" class="hideOnMobile">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <a href="#" data-toggle="modal" data-target="#tehPersadaModal">
                            <img class="d-block w-100" src="$ {tehBanner}" alt="First slide" />
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="#" data-toggle="modal" data-target="#kopiPersadaModal">
                            <img class="d-block w-100" src="$ {kopiBanner}" alt="Second slide">
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="#" data-toggle="modal" data-target="#suriPersadaModal">
                            <img class="d-block w-100" src="$ {mysuriBanner}" alt="Third slide">
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="#" data-toggle="modal" data-target="#tanjaqPersadaModal">
                            <img class="d-block w-100" src="$ {tanjaqBanner}" alt="forth slide">
                        </a>
                    </div>
                    <div class="carousel-item">
                        <a href="#" data-toggle="modal" data-target="#anasPersadaModal">
                            <img class="d-block w-100" src="$ {anasBanner}" alt="fifth slide">
                        </a>
                    </div>
                    <!-- <div class="carousel-item">
                     <img class="d-block w-100" src="..." alt="Third slide">
                </div> -->
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section>
    </div>
    <!-- vue -->

    <!-- mobile slider -->
    <div id="banner-mob">
        <!-- vue
        <section id="mobile-slider" class="hideOnPc">
            <div id="carouselControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" v-bind:src="mobTeh" alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" v-bind:src="mobKopi" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" v-bind:src="mobSuri" alt="Third slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" v-bind:src="mobAnas" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </section> -->
        `