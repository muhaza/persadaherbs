document.getElementById("modal-suri").innerHTML = `
<!-- Modal -->
<div class="modal fade" id="suriPersadaModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <div class="col-sm">
                    <h5 class="modal-title" id="exampleModalLongTitle">MySURI</h5>
                </div>

                <div class="">
                    <!-- button price and cart -->
                    <span style="margin-right: 10px;">
                    <button type="button" class="btn btn-danger">RM38</button>
                    <a href="#myInputSuri"><button type="button" class="btn shopee"><i class="fi-xwluxl-shopping-cart-wide"></i>
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

                                    <img class="card-img-top" v-bind:src="suriImg" alt=" 📚Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title"> 👍 KEBAIKAN</h5>
                                        <p class="card-text">
                                        • Menyelesaikan masalah senggugut <br>
                                        • Menyelesaikan masalah ketidaktentuan perjalanan haid<br>
                                        • Memberi tenaga serta keyakinan diri<br>
                                        • Meningkatkan nafsu syahwat wanita<br>
                                        • Mengatasi masalah mandul<br>
                                        • Mengurangkan lelah dan masalah angin berlebihan<br>
                                        • Mengembalikan kesegaran badan<br>
                                        • Mengurangkan sakit sendi badan<br>
                                        • Penawar kanser<br>
                                        • Menganjalkan tisu kulit <br>
                                        • Mengecutkan bengkak dalaman dan luaran seperti buasir<br>
                                        • Memelihara kesihatan hati, saraf, mata & pankreas<br>
                                        • Apoptosis-mengawal penularan kanser<br>
                                        • Sumber Phytoestrogen<br>
                                        • Menguatkan otot perut dan memulihkan tenaga wanita lepas bersalin<br>
                                        • Menstabilkan mood<br>
                                        • Mengembalikan keremajaan wanita<br>
                                        • Mencantikkan kulit<br>
                                        • Meningkatkan sistem kekebalan tubuh<br>
                                        • Menghindari radang sendi dan tulang<br>
                                        • Melewatkan Menopause<br>
                                        • Anti Oksidan dan Anti Penuaan.<br>
                                        • Mengawal tekanan darah dan kolestrol<br>
                                        • Mengawal paras gula dalam darah<br>
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">MENYELESAIKAN BANYAK MASALAH WANITA</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                        <h5 class="card-title">🌿 RAMUAN</h5>
                                        <p class="card-text">
                                        Air R.O, Pueraria Mirifica, Manjakani Madu Kelulut, Kurma, Kacip Fatimah, 
                                        Akar Serapat, Mas Cotek, Serai Wangi, Habbatus Sauda, Buah Pinang, 
                                        Buah Mengkudu, Pati Delima, Pati Buah Zaitun, Vitamin C, Kulit Kayu Manis, 
                                        Cengkih, Halia, Kunyit, Halban dan Asam Jawa
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">HARGA MYSURI</h4>
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
                                           
                                            <li class="list-group-item">Harga Pembekal
                                                <button type="button" class="btn btn-danger float-right">100/RM2500</button>
                                            </li>

                                            <li class="list-group-item">Harga Pemborong
                                                <button type="button" class="btn btn-danger float-right">1000/RM20,000</button>
                                            </li>  
                                        </ul>

                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        <form class="form-inline">
                                            <b class="text-center mb-2" style="margin:0 auto">Bank-in ke CIMB: PERSADA FC TRADING</b>

                                            <div class="form-group mx-sm-3 mb-2">
                                            <input class="form-control" type="text" value="8604079751" id="myInput5">
                                            </div>
                                            <button type="button" class="btn btn-primary mb-2" style="border-radius:25px" onclick="myClipboard5()">Copy No Akaun</button>
                                            <div id="doneCopy5"></div>
                                        </form>

                                        <a v-bind:href="anasShop" target="_blank" class="btn persada-button mt-1" style="background-color:#EA501F;color:#fff">Shopee</a>
                                        <a v-bind:href="anasWa" target="_blank" class="btn btn-success persada-button mt-1">Whatsapp</a>
                                        <a v-bind:href="anasFb" target="_blank" class="btn btn-primary persada-button mt-1">Facebook PM</a>
                                    
                                        <!-- <a v-bind:href="pop2Url" class="btn btn-danger persada-button mt-1">Beli Sekarang</a> -->
                                        <!-- <a href="https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20MySuri" class="btn btn-success persada-button mt-1">Whatsapp</a>
                                        <a href="https://web.facebook.com/commerce/products/2839078036157355/" class="btn btn-primary persada-button mt-1">Facebook PM</a> -->
                                    
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

function myClipboardSuri() {
    var copyText = document.querySelector("#myInputSuri");
    var buttonList = `
    <br>
    <a href="https://maybank2u.com.my" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/maybank.webp" alt="maybank"/></a>
    <a href="https://cimbclicks.com.my" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/cimb.webp" alt="cimb"/></a>
    <a href="https://www.bankislam.biz" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/islam.webp" alt="BankIslam"/></a>
    <a href="https://www.mybsn.com.my/mybsn/login/login.do" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/bsn.webp" alt="BSN"/></a>
    <a href="https://logon.rhb.com.my/default.htm" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/rhb.webp" alt="RHB"/></a>
    <a href="https://s.hongleongconnect.my/rib/app/fo/login?web=1" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/hongleong.webp" alt="HongLeong"/></a>
    <a href="https://ambank.amonline.com.my" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/am.webp" alt="AMBank"/></a>
    <a href="https://www.allianceonline.com.my/personal/login/login.do" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/alliannce.webp" alt="Alliance"/></a>
    <a href="https://www.i-muamalat.com.my/rib/index.do" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/muamalat.webp" alt="Muamalat"/></a>
    <a href="https://internet.ocbc.com.my/internet-banking/LoginV2/Login?rc=INB" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/ocbc.webp" alt="OCBC"/></a>
    <div style="border-bottom: 1px #dfdfdf solid; margin-bottom: 15px;"></div>`;
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    document.querySelector("#doneSuri").innerHTML = "No Akaun Sudah Di Salin! " + (copyText.value) + " Pilihan Bank :" + (buttonList);
}