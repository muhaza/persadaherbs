document.getElementById("modal-scrub").innerHTML = `
<!-- Modal -->
<div class="modal fade" id="scrubPersadaModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <div class="col-sm">
                    <h5 class="modal-title" id="modalLongTitle">BEAUTY SCRUB</h5>
                </div>

            <div class="">
            <!-- button price and cart -->
            <span style="margin-right: 10px;">

            <button type="button" class="btn btn-danger">RM24</button>
            <a href="#myClean"><button type="button" class="btn shopee"><i class="fi-xwluxl-shopping-cart-wide"></i>
            </button></a>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>

            </span>
            <!-- button price and cart -->
             </div>
            </div>
            <div class="modal-body">
                <div id="modal-scrub">
                    <!-- start vue -->
                    <div class="container">
                        <div class="row">
                            <!-- 📚📚📚 card start 📚📚📚-->
                            <div class="col-sm">
                                <div style="width: 100%;">

                                    <img class="card-img-top" v-bind:src="scrubImg" alt=" 📚Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title"> 👍 KEBAIKAN</h5>
                                        <p class="card-text">
                                        • Membersihkan Sisa Solekan <br>
                                        • Membersihkan Minyak dan Sel Kulit Mati<br>
                                        • SPF Semula Jadi Melembabkan Dan Mencerahkan Muka<br>
                                        • Anti Oksidan dan Perlindungan UV<br>
                                        • Mencegah Jerawat dan Kemerahan<br>
                                        • Membersihkan kotoran<br>
                                        • Melindungi wajah dari Bakteria dan Fungus<br>
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">UNTUK KEGUNAAN HARIAN</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                        <h5 class="card-title">🌿 RAMUAN</h5>
                                        <p class="card-text">
                                       Deionised Water, Trigona Honey, Propolis, Bee Bread, Bamboo Salt, Sodium Lauroyl Sarcosinate,
                                       Cocamide Dea, Zingiber Officinale(ginger),Root Oil, Ocimum Basilicum (basil) Oil.
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">HARGA SCRUB</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                 
                                        
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Harga Runcit
                                                <button type="button" class="btn btn-danger float-right">RM69</button>
                                            </li>
                                            <li class="list-group-item">Harga Diskaun
                                                <button type="button" class="btn btn-danger float-right">RM24</button>
                                            </li>
                                            <!-- <li class="list-group-item">Harga Pakej
                                                <button type="button" class="btn btn-danger float-right">4/RM140</button>
                                            </li>

                                            <li class="list-group-item">Harga Ejen
                                                <button type="button" class="btn btn-danger float-right">10/RM300</button>
                                            </li>
                                           
                                            <li class="list-group-item">Harga Pemborong
                                                <button type="button" class="btn btn-danger float-right">100/RM2500</button>
                                            </li>

                                            <li class="list-group-item">Harga Pembekal
                                                <button type="button" class="btn btn-danger float-right">1000/RM20,000</button>
                                            </li>   -->
                                        </ul>

                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>

                                        <p class="card-text">
                                       CAJ PENGHANTARAN SERENDAH RM5 SEMENANJUNG
                                        </p>
                                        <!-- <a v-bind:href="pop2Url" class="btn btn-danger persada-button mt-1">Beli Sekarang</a> -->
                                        <a href="https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Nova-scrub" class="btn btn-success persada-button mt-1">Whatsapp</a>
                                        <a href="https://web.facebook.com/commerce/products/2643903315735171" class="btn btn-primary persada-button mt-1">Facebook PM</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary persada-button" data-dismiss="modal">Close</button>
                            <!-- <button type="button" class="btn btn-dark persada-button">Save changes</button> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        `