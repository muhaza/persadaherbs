document.getElementById("modal-tanjaq").innerHTML = `
<!-- Modal -->
<div class="modal fade" id="tanjaqPersadaModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <div class="col-sm">
                    <h5 class="modal-title" id="exampleModalLongTitle">TANJAQ</h5>
                </div>

                <span>
                    <button type="button" class="btn btn-danger float-right ">RM38</button>
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

                                    <img class="card-img-top" v-bind:src="tanjaqImg" alt=" 📚Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title"> 👍 KEBAIKAN</h5>
                                        <p class="card-text">
                                        • Meningkatkan hormon kelakian (testosteron) <br>
                                        • Meningkatkan tenaga dalaman dan juga luaran <br>
                                        • Mengatasi masalah badan berbau <br>
                                        • Melancarkan perjalanan darah <br>
                                        • Menguatkan urat dan otot <br>
                                        • Membuang angin dalam badan <br>
                                        • Mengatasi masalah sakit sendi <br>
                                        • Meningkatkan selera makan <br>
                                        •Mengatasi masalah keletihan dan lesu<br>
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">WOW! MACAM-MACAM RASA!</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                        <h5 class="card-title">🌿 RAMUAN</h5>
                                        <p class="card-text">
                                         Air R.O <br>
                                        ,Butea Superba<br>
                                        ,Tongkat Ali<br>
                                        ,Madu Kelulut<br>
                                        ,Ubi Jaga<br>
                                        ,Kulit Kayu Manis<br>
                                        ,Pati Kurma<br>
                                        ,Akar Samad<br>
                                        ,Misai Ali<br>
                                        ,Rempah Gunung<br>
                                        ,Halban Habbatus Sauda'<br>
                                        ,Cengkih, Serai Wangi, Mengkudu, Halia, Kunyit, Biji Sawi<br>
                                        ,Asid Askorbik dan Asid Sitrik<br>
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">HARGA KOPI SOUYANG</h4>
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
                                        <a href="https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Tanjaq" class="btn btn-success persada-button mt-1">Whatsapp</a>
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