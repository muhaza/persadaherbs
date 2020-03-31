document.getElementById("modal-cleanser").innerHTML = `
<!-- Modal -->
<div class="modal fade" id="cleanserPersadaModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <div class="col-sm">
                    <h5 class="modal-title" id="exampleModalLongTitle">BEAUTY CLEANSER</h5>
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
                <div id="modal-cleanser">
                    <!-- start vue -->
                    <div class="container">
                        <div class="row">
                            <!-- 📚📚📚 card start 📚📚📚-->
                            <div class="col-sm">
                                <div style="width: 100%;">

                                    <img class="card-img-top" v-bind:src="cleanserImg" alt=" 📚Card image cap" />
                                    <div class="card-body">
                                        <!-- <h5 class="card-title"> 👍 KEBAIKAN</h5> -->
                                        <p class="card-text">
                                        Seimbang untuk semua jenis dan sesuai untuk kegunaan setiap hari, formula semula jadi <b>membersihkan sisa solekan, lebihan minyak dan sel kulit mati&nbsp;</b>&nbsp;pada wajah secara lembut.<br />
<br />
Ia diadun dengan :-<br />
<br />
<b><u>Rose Bud Oil&nbsp;</u></b><br />
(Roseship Seed Oil) yang <b>mempunyai SPF semulajadi &amp; melembapkan, menyegarkan serta mencerahkan muka.</b><br />
<b><br /></b>
<b><u>Wheat Germ Oil</u></b><br />
Mempunyai <b>anti-oksidan &amp; perlindungan UV semulajadi.</b><br />
<b><br /></b>
<b><u>Madu &amp; Propolis</u></b><br />
Merupakan anti-septik dan anti-bakteria untuk <b>mencegah kulit daripada jerawat dan kemerahan.</b><br />


<h4>
<b>Kebaikan</b></h4>
<div>
<ul>
<li>Membersih wajah dari kotoran terlekat dan terlindung</li>
<li>Melindungi wajah dan bakteria dan fungus</li>
<li>Melindungi, mengurangkan dan menghapuskan jerawat dan lain-lain kerengsaan wajah.</li>
<li>Melembabkan dan mencerahkan kulit.</li>
</ul>
<div>
<h4>
<b>Arahan</b></h4>
</div>
</div>
<div>
Buihkan pada muka yang basah secara membulat. Bilas dengan teliti.</div><br/>
<h4>
<b>Kandungan</b></h4>

<div>
<div>
Trigona Honey, Propolis, Lime Extract, Rosehip Seed Oil, Piper Betel(Sireh), Extract, Nano White,</div>
<div>
Sodium Lauryl Sarcosinate, Cocomide Dea (Coconut Fatty Asid), Vegetable Glycerine.</div>
</div>
                                        </p>
                                        <!-- <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">MENYELESAIKAN BANYAK MASALAH WANITA</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                        <h5 class="card-title">🌿 RAMUAN</h5>
                                        <p class="card-text">
                                        Trigona Honey, Propolis, Lime Extract, Rosehip Seed Oil, Piper Betel(Sireh), Extract, Nano White,
                                        Sodium Lauryl Sarcosinate, Cocomide Dea (Coconut Fatty Asid), Vegetable Glycerine.
                                        </p> -->
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">HARGA MYSURI</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                        
                                        
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Harga Runcit
                                                <button type="button" class="btn btn-danger float-right">RM57</button>
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
                                            <!-- Bank Clipboard -->
                                            <b class="text-center mb-2" style="display:block;margin:0 auto">Bank-in ke CIMB: PERSADA FC TRADING</b>
                                            <form class="form-inline">
                                            <div class="form-group mx-sm-3 mb-2">
                                                <input class="form-control" type="text" value="8604079751" id="myClean">
                                            </div>
                                            <button type="button" class="btn btn-primary mb-2" style="border-radius:25px;" onclick="myCleanser()">Copy No Akaun</button>
                                            <div id="doneCleanser"></div>
                                            </form>
                                            <!-- Bank Clipboard -->
                                        <!-- <a v-bind:href="pop2Url" class="btn btn-danger persada-button mt-1">Beli Sekarang</a> -->
                                        <a href="https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Nova-Cleanser" class="btn btn-success persada-button mt-1">Whatsapp</a>
                                        <a href="https://web.facebook.com/commerce/products/3126981450646301" class="btn btn-primary persada-button mt-1">Facebook PM</a>
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

function myCleanser() {
    var copyText = document.querySelector("#myClean");
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
    document.querySelector("#doneCleanser").innerHTML = "No Akaun Sudah Di Salin! " + (copyText.value) + " Pilihan Bank :" + (buttonList)
}