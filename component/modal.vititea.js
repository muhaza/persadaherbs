document.getElementById("modal-vititea").innerHTML = `
<!-- Modal -->
<div class="modal fade" id="vititeaPersadaModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <div class="col-sm">
                    <h5 class="modal-title" id="ModalLongTitle">VIT I TEA</h5>
                </div>
                <div class="col-">
                <!-- button price and cart -->
                <span style="margin-right: 10px;">
    
                <button type="button" class="btn btn-danger">RM50</button>
                <a href="#myLuzea"><button type="button" class="btn shopee"><i class="fi-xwluxl-shopping-cart-wide"></i>
                </button></a>
    
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
    
                </span>
                <!-- button price and cart -->
            </div>
            </div>
            <div class="modal-body">
                <div id="modal-kopi">
                    <!-- start vue -->
                    <div class="container">
                        <div class="row">
                            <!-- 📚📚📚 card start 📚📚📚-->
                            <div class="col-sm">
                                <div style="width: 100%;">
                                    <img class="card-img-top" v-bind:src="vititeaImg" alt=" 📚Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title"> 👍 KEBAIKAN VIT i TEA</h5>
                                        <p class="card-text">
                                        • Memcegah Mopia (Rabun Jauh) <br>
                                        • Menajamkan Penglihatan<br>
                                        • Mengatasi Masalah Insomnia<br>
                                        • Membantu selesaikan masalah keputihan (wanita)<br>
                                        • Mengurangi masalah serangan jantung<br>
                                        • Mengurangi risiko kencing manis<br>
                                        • Membantu mengurangi bau busuk mulut dan badan<br>
                                        • Membunuh bakteria dalam mulut<br>
                                        • Mencegah penyakit Alzheimer<br>
                                        • Meningkatkan pembakaran lemak<br>
                                        • Meransang perkembangan otak<br>
                                        • Aroma Wangi<br>
                                        • Anti Oksidan<br>
                                        • Membuang angin dalam badan<br>
                                        • Menghilangkan rasa loya<br>
                                        • Menghilangkan sakit-sakit badan<br>
                                        • Merawat selsema<br>
                                        • Melancarkan proses penghadaman<br>
                                        • Mampu mengurangkan rasa mengantuk<br>
                                        • Meningkatkan daya tumpuan<br>
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">MINUM-MINUM MATA TERANG</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                        <h5 class="card-title">🌿 RAMUAN</h5>
                                        <p class="card-text">
                                        Lutein, Zeaxanthin, Vitamin C, Vitamin E, Nano Sweet, Ekstrak Teh, Madu Kelulut, 
                                        Ekstrak Serai, Serbuk Lemon dan Perasa Blackcurrant
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">HARGA LUZEA</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                        
                                        

                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Harga Runcit
                                                <button type="button" class="btn btn-danger float-right">RM68</button>
                                            </li>
                                            <li class="list-group-item">Harga Diskaun
                                                <button type="button" class="btn btn-danger float-right">RM50</button>
                                            </li>
                                            <li class="list-group-item">Harga Pakej
                                                <button type="button" class="btn btn-danger float-right">4/RM180</button>
                                            </li>

                                            <li class="list-group-item">Harga Ejen
                                                <button type="button" class="btn btn-danger float-right">10/RM400</button>
                                            </li>
                                           
                                            <li class="list-group-item">Harga Pembekal
                                                <button type="button" class="btn btn-danger float-right">100/RM3500</button>
                                            </li>

                                            <li class="list-group-item">Harga Pemborong
                                                <button type="button" class="btn btn-danger float-right">1000/RM30,000</button>
                                            </li>  
                                        </ul>

                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>


                                       
                                        <!-- <a v-bind:href="pop2Url" class="btn btn-danger persada-button mt-1">Beli Sekarang</a> -->
                                        <a href="https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Vit-I-Tea" class="btn btn-success persada-button mt-1">Whatsapp</a>
                                        <a href="https://m.me/persadaherb" target="_top" class="btn btn-primary persada-button mt-1">Facebook PM</a>
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