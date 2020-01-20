document.getElementById("produk").innerHTML = `
<section id="product" style="background: whitesmoke">
        <div id="vue-card">
            <!-- start vue -->
            <div class="container my-5">
                <div class="row">

                    <!-- 📚📚📚 card start 📚📚📚-->
                    <div class="col-sm">
                        <div class="card mt-1" style="width: 100%;">
                            <img class="card-img-top" v-bind:src="product2img" alt=" 📚Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{{product2Title}}</h5>
                                <p class="card-text">
                                    {{product2Desc}}
                                </p>
                                <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
                                    data-target="#tehPersadaModal" style="color:white">Lebih Informasi</a>
                            </div>
                        </div>
                    </div>
                    <!-- 📚📚📚 card start 📚📚📚-->
                    <div class="col-sm">
                        <div class="card mt-1" style="width: 100%;">
                            <img class="card-img-top" v-bind:src="soonimg" alt=" 📚Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{{soonTitle}}</h5>
                                <p class="card-text">
                                    {{soonDesc}}
                                </p>
                                <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
                                    data-target="#tehPersadaModal!" style="color:white">Lebih Informasi</a>
                            </div>
                        </div>
                    </div>
                    <!-- 📚📚📚 card start 📚📚📚-->
                    <div class="col-sm">
                        <div class="card mt-1" style="width: 100%;">
                            <img class="card-img-top" v-bind:src="soonimg" alt=" 📚Card image cap" />
                            <div class="card-body">
                                <h5 class="card-title">{{soonTitle}}</h5>
                                <p class="card-text">
                                    {{soonDesc}}
                                </p>
                                <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
                                    data-target="#tehPersadaModal!" style="color:white">Lebih Informasi</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- end vue -->
    </section>
`