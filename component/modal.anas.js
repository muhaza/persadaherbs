document.getElementById("modal-anas").innerHTML = `
<!-- Modal -->
<div class="modal fade" id="anasPersadaModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <div class="col-sm">
                    <h5 class="modal-title" id="ModalLongTitle">ANAS</h5>
                </div>

                <span>
                    <button type="button" class="btn btn-danger float-right " style="font-size:small; width:100px">Offer RM38</button>
                </span>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
            </div>
            <div class="modal-body">
                <div id="modal-kopi">
                    <!-- start vue -->
                    <div class="container">
                        <div class="row">
                            <!-- 📚📚📚 card start 📚📚📚-->
                            <div class="col-sm">
                                <div style="width: 100%;">
                                    <img class="card-img-top" v-bind:src="anasImg" alt=" 📚Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title"> 👍 KEBAIKAN</h5>
                                        <p class="card-text">
                                        • Mencerdaskan minda dan bertindak sebagai imun daya tahan sakit <br/>
                                        • Meningkatkan daya ingatan dan perkembangan otak <br/>
                                        • Memberikan ketenangan dan kesegaran<br/>
                                        • Meningkatkan tenaga dalaman dan luaran<br/>
                                        • Mengembalikan kesegaran badan<br/>
                                        • Melancar dan menambahkan darah<br/>
                                        • Mengelakkan dari kegemukan yang tidak terkawal<br/>
                                        • Memulihkan sistem pencernaan dan perkumuhan<br/>
                                        • Menguatkan jantung dan buah pinggang<br/>
                                        • Menyembuhkan penyakit dalam perut<br/>
                                        • Merawat luka dengan cepat<br/>
                                        • Memulihkan batuk dan lelah<br/>
                                        • Menstabilkan mood<br/>
                                        • Mempercepatkan pertumbuhan tisu kulit<br/>
                                        • Menghindarkan badan letih dan lesu<br/>
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">MENCERDASKAN MINDA</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                        <h5 class="card-title">🌿 RAMUAN</h5>
                                        <p class="card-text">
                                        Kurma, Kismis, Za'faran, Madu Kelulut, Pati Delima
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">HARGA ANAS</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                        
                                        

                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Harga Runcit
                                                <button type="button" class="btn btn-danger float-right">RM48</button>
                                            </li>
                                            <li class="list-group-item">Harga Diskaun
                                                <button type="button" class="btn btn-danger float-right">RM38</button>
                                            </li>
                                            <li class="list-group-item">Harga Pakej
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
                                            </li>  
                                        </ul>

                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>


                                       
                                        <!-- <a v-bind:href="pop2Url" class="btn btn-danger persada-button mt-1">Beli Sekarang</a> -->
                                        <a href="https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Anas" class="btn btn-success persada-button mt-1">Whatsapp</a>
                                        <a href="https://web.facebook.com/commerce/products/2707141359355180/" target="_top" class="btn btn-primary persada-button mt-1">Facebook PM</a>
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