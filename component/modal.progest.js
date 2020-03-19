document.getElementById("modal-progest").innerHTML = `
<!-- Modal -->
<div class="modal fade" id="progestPersadaModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <div class="col-sm">
                    <h5 class="modal-title" id="ModalLongTitle">PROGEST</h5>
                </div>

                <span>
                    <button type="button" class="btn btn-danger float-right " style="font-size:small; width:100px">Offer RM60</button>
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
                                 <h5 class="card-title"> JUS CENDAWAN MEKAH (PROGEST)</h5>
                                    <img class="card-img-top" v-bind:src="progestImg" alt=" 📚Card image cap" />
                                    <div class="card-body">
                                        <h5 class="card-title"> 👍 KEBAIKAN</h5>
                                        <p class="card-text">
                                        • Memberikan ketenangan <br/>
                                        • Mengembalikan kesegaran badan <br/>
                                        • Membuang toxid dalam badan <br/>
                                        • Penawar kanser <br/>
                                        • Memperbaiki sel-sel yang rosak <br/>
                                        • Memulihkan sistem pencernaan <br/>
                                        • Meransang hormon <br/>
                                        • Anti racun <br/>
                                        • Merawat sembelit <br/>
                                        • Menguatkan bakteria baik <br/>
                                        • Menstabilkan mood <br/>
                                        • Membetulkan kitaran haid <br/>
                                        • Mencantikkan kulit <br/>
                                        • Meningkatkan sistem kekebalan tubuh <br/>
                                        • Mempercepatkan pertumbuhan tisu kulit <br/>
                                        • Anti Oksidan dan Anti Penuaan. <br/>
                                        • Memberi tenaga <br/>
                                        • Mempertahankan imunisasi manusia <br/>
                                        • Menambah gel di lutut yang bermasalah <br/>
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">DETOKS DENGAN BERKESAN</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                        <h5 class="card-title">🌿 RAMUAN</h5>
                                        <p class="card-text">
                                        Cendawan Mekah,Teh Hijau, Madu Kelulut Asli, Gula Nano
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">HARGA PROGES</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                        
                                        

                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Harga Runcit
                                                <button type="button" class="btn btn-danger float-right">RM85</button>
                                            </li>
                                            <li class="list-group-item">Harga Diskaun
                                                <button type="button" class="btn btn-danger float-right">RM60</button>
                                            </li>
                                            <li class="list-group-item">Harga Pakej
                                                <button type="button" class="btn btn-danger float-right">4/RM200</button>
                                            </li>

                                            <li class="list-group-item">Harga Ejen
                                                <button type="button" class="btn btn-danger float-right">10/RM450</button>
                                            </li>
                                            <li class="list-group-item">Harga Pembekal
                                                <button type="button" class="btn btn-danger float-right">100/RM4000</button>
                                            </li>

                                            <li class="list-group-item">Harga Pemborong
                                                <button type="button" class="btn btn-danger float-right">1000/RM30,000</button>
                                            </li>  
                                        </ul>

                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>

                                        <form class="form-inline">
                                            <b class="text-center mb-2" style="margin:0 auto">Bank-in ke CIMB: PERSADA FC TRADING</b>

                                            <div class="form-group mx-sm-3 mb-2">
                                            <input class="form-control" type="text" value="8604079751" id="myInput2">
                                            </div>
                                            <button type="button" class="btn btn-primary mb-2" style="border-radius:25px" onclick="myClipboard2()">Copy No Akaun</button>
                                            <div id="doneCopy2"></div>
                                        </form>
                                   
                                        
                                        <!-- <a v-bind:href="pop2Url" class="btn btn-danger persada-button mt-1">Beli Sekarang</a> -->
                                        <a href="https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Progest%20Cendawan%20Mekah" class="btn btn-success persada-button mt-1">Whatsapp</a>
                                        <a href="https://web.facebook.com/commerce/products/2661554503965467" class="btn btn-primary persada-button mt-1">Facebook PM</a>
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

function myClipboard2() {
    var copyText = document.querySelector("#myInput2");
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
    document.querySelector("#doneCopy2").innerHTML = "No Akaun Sudah Di Salin! " + (copyText.value) + " Pilihan Bank :" + (buttonList);
}