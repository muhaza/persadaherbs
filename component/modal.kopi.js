document.getElementById("modal-kopi").innerHTML = `
<!-- Modal -->
<div class="modal fade" id="kopiPersadaModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <div class="col-sm">
                    <h5 class="modal-title" id="exampleModalLongTitle">KOPI SUOYANG</h5>
                </div>

                <span>
          <button type="button" class="btn btn-danger float-right ">RM28</button>
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

                                    <img class="card-img-top" v-bind:src="kopiImg" alt=" 📚Card image cap" />
                                    <div class="card-body">
                                        <!-- <h5 class="card-title"> 👍 KEBAIKAN</h5> -->
                                        <p class="card-text">
                                            <!--    • Memberi Tenaga Segera <br>• Menghilangkan Rasa Mengantuk <br>
                                                    • Melancarkan Aliran Darah <br>
                                                    • melancarkan Aliran Darah dan Haid <br>
                                                    • Melancarkan Hormon <br>
                                                    • Menguatkan Sistem Dalaman Badan.<br>
                                                    • Menghitamkan Rambut.<br> -->
                                            <b>Suo Yang Coffee</b> merupakan kopi kesihatan yang enak lagi menenangkan.<br />
                                            <br /> Gabungan Kopi Arabika, Koko, Herba-herba terpilih serta di formulasi dengan Sarang Burung Walit membuatkan Suo Yang Coffee istimewa dari minuman kopi yang lain.<br />
                                            <br /> Gandingan Tongkat Ali, Polygum Multiflorum dan Ubi Jaga pastinya membuat anda lebih sihat, bertenaga, awet muda dan dapat membantu meningkatkan tahap kesuburan anda.<br />
                                            <br /> Nikmati kesegaran Suo Yang Coffee di waktu pagi dan alamilah<br /> kehebatannya.
                                            <br />
                                            <br />
                                            <b><u>CYNOMORIUM SONGARICUM/ SUO YANG</u></b><br /> • Baik untuk terapi peningkatan seksual<br /> • Memelihara tulang dan otot<br /> • Mencegah kekeringan<br /> • Melembabkan usus<br />
                                            <br />
                                            <b><u>KOKO</u></b><br /> Makanan lengkap dan Seimbang. Dianggarkan 100 gram serbuk koko mengandungi<br /> pelbagai zat yang diperlukan tubuh manusia termasuklah 10% lemak, 22.4% protin,<br /> 46.7% karbohiderat,
                                            2.8% theobromina dan perlbagai vitamin dan kalsium yang tinggi.<br />
                                            <br /> •
                                            <span style="white-space: pre;"> </span>Mengandungi tannin iaitu sejenis bahan yang bertindak sebagai benteng kerosakan gigi dan menghalang pembentukan plak gigi.<br />
                                            <br /> •
                                            <span style="white-space: pre;"> </span>Kaya dengan antioksidan flavonoids yang dapat mengurangkan risiko atherosclerosis serta mengurangkan kematian berpunca daripada penyakit koronori jantung.<br /> •
                                            <span style="white-space: pre;"> </span>Mengawal tekanan darah<br /> •
                                            <span style="white-space: pre;"> </span>Mengawal kencing manis<br /> •
                                            <span style="white-space: pre;"> </span>Menghalang jerawat dan parut<br /> •
                                            <span style="white-space: pre;"> </span>Mengawal kerosakan sel dan tisu badan<br /> •
                                            <span style="white-space: pre;"> </span>Baik untuk kulit<br />
                                            <br />
                                            <b><u>KRIMER TANPA TENUSU</u></b><br /> •
                                            <span style="white-space: pre;"> </span>Merupakan makanan seimbang yang sangat baik<br /> •
                                            <span style="white-space: pre;"> </span>Mengandungi 50% protin dalam setiap 100 g kacang keldai<br /> •
                                            <span style="white-space: pre;"> </span>Kaya dengan bahan mineral seperti kalsium, sodium, manganese, magnesium, iron dan fosfor<br /> •
                                            <span style="white-space: pre;"> </span>Kaya dengan vitamin A, B, C, D serta lesitin<br /> •
                                            <span style="white-space: pre;"> </span>Dapat mengurangi risiko penyakit kanser dan jantung<br /> •
                                            <span style="white-space: pre;"> </span>Mudah dicerna dan mengandungi semua asid amino yang diperlukan untuk menjaga dan<br /> memperbaiki lapisan tubuh yang rosak serta menambah tenaga<br />
                                            <br />
                                            <b><u>POLYGONUM<span style="white-space: pre;"> </span>MULTIFLORUM/SHOU WU</u></b><br /> •
                                            <span style="white-space: pre;"> </span>Merupakan salah satu herba dasar pengubatan cina yang sangat efektif untuk memperkuatkan hati dan ginjal serta meningkatkan penampilan rambut<br /> •
                                            <span style="white-space: pre;"> </span>Menguatkan tulang dan otot serta mencegah penuaan<br /> •
                                            <span style="white-space: pre;"> </span>Mengawal kadar kolesterol ,darah tinggi dan bronchitis kronik<br /> •
                                            <span style="white-space: pre;"> </span>Meningkatkan kesuburan dengan memperkuat ovary dan meningkatkan sperma<br />
                                            <br />
                                            <b><u>SARANG BURUNG WALIT</u></b><br /> •
                                            <span style="white-space: pre;"> </span>Awet muda bagi lelaki dan wanita<br /> •
                                            <span style="white-space: pre;"> </span>Melancarkan sistem aliran darah<br /> •
                                            <span style="white-space: pre;"> </span>Melegakan pernafasan<br /> •
                                            <span style="white-space: pre;"> </span>Memutihkan dan melicinkan kulit muka terutama wanita mengandung dan baik untuk kulit bayi<br /> •
                                            <span style="white-space: pre;"> </span>Menyegarkan mata dan mengubati penyakit lelah<br /> •
                                            <span style="white-space: pre;"> </span>Dapat mengubati Hepatitis-B<br /> •
                                            <span style="white-space: pre;"> </span>Mampu mengubati batuk yang kronik<br />
                                            <br />
                                            <b><u>TONGKAT ALI</u></b><br /> •
                                            <span style="white-space: pre;"> </span>Menstabilkan hormone androgen lelaki<br /> •
                                            <span style="white-space: pre;"> </span>Membantu proses penyembuhan<br /> •
                                            <span style="white-space: pre;"> </span>Membantu merawat sakit sendi<br /> •
                                            <span style="white-space: pre;"> </span>Melancarkan pengaliran darah<br /> •
                                            <span style="white-space: pre;"> </span>Mengimbangkan kadar hormone<br /> •
                                            <span style="white-space: pre;"> </span>Merangsang dan meningkatkan fungsi organ seks lelaki<br /> •
                                            <span style="white-space: pre;"> </span>Meningkat pembentukkan otot<br /> •
                                            <span style="white-space: pre;"> </span>Melegakan sakit pinggang<br />
                                            <br />
                                            <b>GANODERMA LUCIDUM</b><br /> •
                                            <span style="white-space: pre;"> </span>Meningkatkan imunisasi tubuh badan<br /> •
                                            <span style="white-space: pre;"> </span>Mengimbang tahap gula dalam darah<br /> •
                                            <span style="white-space: pre;"> </span>Membantu membersihkan toksik dalam badan<br /> •
                                            <span style="white-space: pre;"> </span>Mengurangkan kolesterol dan lemak<br /> •
                                            <span style="white-space: pre;"> </span>Anti-alergi dan anti penuaan<br /> •
                                            <span style="white-space: pre;"> </span>Menambahkan tenaga<br />
                                            <br />
                                            <b>CORDYCEPS</b><br /> •
                                            <span style="white-space: pre;"> </span>Memperbaiki sistem auto-immune<br /> •
                                            <span style="white-space: pre;"> </span>Membantu melindungi buah pinggang daripada toksin<br /> •
                                            <span style="white-space: pre;"> </span>Membantu mengawal penghidratan tubuh<br /> •
                                            <span style="white-space: pre;"> </span>Membantu melindungi jantung<br /> •
                                            <span style="white-space: pre;"> </span>Antibiotic, anti kulat, nti radangan dan anti bengkak semulajadi serta menghalang kontraksi otot lembut<br />
                                            <br />
                                            <b>UBI JAGA</b><br /> •
                                            <span style="white-space: pre;"> </span>Melegakan keletihan dan kelesuan<br /> •
                                            <span style="white-space: pre;"> </span>Sebagai ejen anti-penuaan<br /> •
                                            <span style="white-space: pre;"> </span>Melancarkan pengaliran darah dan meningkatkan metabolisme<br /> •
                                            <span style="white-space: pre;"> </span>Meningkatkan daya tahan seksual lelaki<br /> •
                                            <span style="white-space: pre;"> </span>Mengawal emosi serta tekanan darah<br />
                                            <br />
                                            <b>PANAX GINSENG</b><br /> •
                                            <span style="white-space: pre;"> </span>Meningkatkan libido pada wanita dan lelaki<br /> •
                                            <span style="white-space: pre;"> </span>Meningkatkan stamina<br /> •
                                            <span style="white-space: pre;"> </span>Meningkat daya tahan tubuh<br /> •
                                            <span style="white-space: pre;"> </span>Membantu mengawal suhu badan<br /> •
                                            <span style="white-space: pre;"> </span>Menurunkan kadar gula dalam darah yang tinggi<br /> •
                                            <span style="white-space: pre;"> </span>Memperkukuh sistem kardiovaskular<br />
                                            <br />
                                            <b>KOPI ARABIKA</b><br /> •
                                            <span style="white-space: pre;"> </span>Menghilangkan rasa mengantuk<br /> •
                                            <span style="white-space: pre;"> </span>Menyegar badan dan lebih bersemangat<br /> •
                                            <span style="white-space: pre;"> </span>Awet muda<br /> •
                                            <span style="white-space: pre;"> </span>Membantu meningkatkan tahap kesuburan lelaki<br /> •
                                            <span style="white-space: pre;"> </span>Meningkatkan pengaliran darah<br />
                                            <br />
                                            <b><u>GARAM BULUH</u></b><br /> •
                                            <span style="white-space: pre;"> </span>Sebagai ejen anti-oksida dan menyingkirkan toksin<span style="white-space: pre;"> </span>dalam badan<br /> •
                                            <span style="white-space: pre;"> </span>Mengandungi mineral yang tinggi<br /> •
                                            <span style="white-space: pre;"> </span>Mengandungi kandungan magnesium yang tinggi<br /> •
                                            <span style="white-space: pre;"> </span>Bersifat ALKALI<br /> •
                                            <span style="white-space: pre;"> </span>Membantu melawaskan sistem penghadaman
                                        </p>
                                        <!-- <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                            <h4 class="text-center">WOW! MACAM-MACAM RASA!</h4>
                                            <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>

                                            <h5 class="card-title">🌿 RAMUAN</h5>
                                            <p class="card-text">
                                            Krimer Tanpa Susu, Gula Perang, Ganoderma Lucidum, Cordyceps, Cynomorium Songaricum,
                                            Polygonum Multiflorum, Tongkat Ali, Ubi Jaga, Kopi Arabica, Garam Buluh, Sarang Burung Walit,
                                            dan Koko
                                            </p> -->
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">HARGA KOPI SOUYANG</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>


                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Harga Runcit
                                                <button type="button" class="btn btn-danger float-right">RM28</button>
                                            </li>
                                            <li class="list-group-item">Harga Diskaun
                                                <button type="button" class="btn btn-danger float-right">RM25</button>
                                            </li>
                                            <li class="list-group-item">Harga Pakej
                                                <button type="button" class="btn btn-danger float-right">4/RM100</button>
                                            </li>
                                            <li class="list-group-item">Harga Ejen
                                                <button type="button" class="btn btn-danger float-right">10/RM200</button>
                                            </li>

                                            <li class="list-group-item">Harga Pembekal
                                                <button type="button" class="btn btn-danger float-right">100/RM1750</button>
                                            </li>

                                            <li class="list-group-item">Harga Pemborong
                                                <button type="button" class="btn btn-danger float-right">1000/RM15,000</button>
                                            </li>
                                        </ul>

                                        <div style="border-bottom: 1px #dfdfdf solid; margin-bottom: 15px;"></div>

                                        <!-- Bank Clipboard -->
                                        <form class="form-inline">
                                            <b class="text-center mb-2" style="margin:0 auto">Bank-in ke CIMB: PERSADA FC TRADING</b>

                                            <div class="form-group mx-sm-3 mb-2">
                                                <input class="form-control" type="text" value="8604079751" id="myInput1">
                                            </div>
                                            <button type="button" class="btn btn-primary mb-2" style="border-radius:25px" onclick="myClipboard1()">Copy No Akaun</button>
                                            <div id="doneCopy1"></div>
                                        </form>
                                        <!-- Bank Clipboard -->

                                        <a v-bind:href="kopiShop" class="btn persada-button mt-1" style="background-color:#EA501F;color:#fff">Beli Di Shopee</a>
                                        <a href="https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Kopi%20SuoYang" class="btn btn-success persada-button mt-1">Whatsapp</a>
                                        <a v-bind:href="kopifb" target="_top" class="btn btn-primary persada-button mt-1">Facebook PM</a>
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

function myClipboard1() {
    tfur,
    vb
    var copyText = document.querySelector("#myInput1");
    var buttonList = `
        <br>
        <a href="https://maybank2u.com.my" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/maybank.webp" alt="maybank" /></a>
        <a href="https://cimbclicks.com.my" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/cimb.webp" alt="cimb" /></a>
        <a href="https://www.bankislam.biz" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/islam.webp" alt="BankIslam" /></a>
        <a href="https://www.mybsn.com.my/mybsn/login/login.do" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/bsn.webp" alt="BSN" /></a>
        <a href="https://logon.rhb.com.my/default.htm" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/rhb.webp" alt="RHB" /></a>
        <a href="https://s.hongleongconnect.my/rib/app/fo/login?web=1" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/hongleong.webp" alt="HongLeong" /></a>
        <a href="https://ambank.amonline.com.my" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/am.webp" alt="AMBank" /></a>
        <a href="https://www.allianceonline.com.my/personal/login/login.do" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/alliannce.webp" alt="Alliance" /></a>
        <a href="https://www.i-muamalat.com.my/rib/index.do" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/muamalat.webp" alt="Muamalat" /></a>
        <a href="https://internet.ocbc.com.my/internet-banking/LoginV2/Login?rc=INB" target="_blank"><img class="img-thumbnail mb-1" style="height:30px" src="./asset/image/bank/ocbc.webp" alt="OCBC" /></a>
        <div style="border-bottom: 1px #dfdfdf solid; margin-bottom: 15px;"></div>`;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.querySelector("#doneCopy1").innerHTML = "No Akaun Sudah Di Salin! " + (copyText.value) + " Pilihan Bank :" + (buttonList);
}