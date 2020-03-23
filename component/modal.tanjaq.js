document.getElementById("modal-tanjaq").innerHTML = `
<!-- Modal -->
<div class="modal fade" id="tanjaqPersadaModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <div class="col-sm">
                    <h5 class="modal-title" id="exampleModalLongTitle">TANJAQ</h5>
                </div>

        <!-- button price and cart -->
        <span class="float-right">
          <button type="button" class="btn btn-danger">RM38</button>
          <a href="#myInput4"><button type="button" class="btn shopee"><i class="fi-xwluxl-shopping-cart-wide"></i>
          </button></a>
        </span>
        <!-- button price and cart -->
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
                                        <!-- <h5 class="card-title"> 👍 KEBAIKAN</h5> -->
                                        <p class="card-text">
                                        <b><u>Apakah itu Tanjaq?</u></b><br />
Tanjaq adalah minuman Herba yang di hasilkan khas untuk golongan lelaki yang mementingkan kesihatan dalaman yang dihasilkan melalui kombinasi herba - herba terpilih, pati kurma, serta vitamin c.<br />
<br />
Khasiat Tanjaq tidak perlu dipertikaikan lagi. Selain membantu meningkatkan tahap tenaga, ia turut berupaya memelihara kesihatan tubuh badan dalaman dan luaran secara semula jadi. Khasiat tanjaq kaya dengan tongkat ali, ubi jaga kulit&nbsp; kayu manis, pati kurma dan serai wangi yang kaya dengan khasiat.<br />
<br />
Pengunaan secara berterusan dapat membantu memulihkan masalah lemah tenaga batin, mati pucuk, kurang nafsu, sakit sendi, sakit otot, lemah badan, sakit pinggang, sakit saraf, kemurungan, badan berbau, masalah sistem penghadaman, masalah angin berlebihan dalam badan, masalah perjalanan darah tidak lancar dan lain-lain masalah.<br />
<br />
<b><u>Kandungan Tanjaq</u></b><br />
Air R.O, Butea Superba, Tongkat Ali, Madu Kelulut, Ubi Jaga, Kulit Kayu Manis, Pati Kurma, Akar Samad, Misai Ali, Rempah Gunung, Halban Habbatus Sauda', Cengkih, Serai Wangi, Mengkudu, Halia , Kunyit, Biji Sawi, Asid<br />
<br />
<b><u>Askorbik dan Asid Sitrik</u></b><br />
Butea Superba sangat berkhasiat dan sesuai sekali sebagai tonik &amp; mengembalikan kekuatan seksual lelaki.<br />
<br />
<b><u>Tongkat Ali&nbsp;</u></b><br />
Tongkat Ali memiliki keupayaan untuk menghalang dan mengawal penyakit am termasuk yang memudaratkan kesihatan bagi memperoleh keupayaan awet muda, bertenaga dan bersemangat biarpun dimamah usia.<br />
<br />
<b><u>Madu Kelulut&nbsp;</u></b><br />
Madu Kelulut meningkatkan metabolisme badan,menambahkan tenaga batin, menjaga kecantikan, menguatkan wanita yang baru bersalin dan merawati pelbagai penyakit dan kecederaan dalaman.<br />
<br />
<b><u>Ubi Jaga&nbsp;</u></b><br />
Ubi Jaga dipercayai boleh membantu pengedaran darah yang sempurna. Secara tradisional ianya digunakan sebagai ubat herbal tradisional untuk menguatkan tenaga lelaki, sebagai tonik untuk menambahkan metabolisma badan.<br />
<br />
<b><u>Kulit Kayu&nbsp;</u></b><br />
Kulit Kayu Manis dapat menyembuhkan pelbagai penyakit serta berkhasiat untuk menguatkan syahwat.<br />
<br />
<b><u>Kajian Bertulis</u></b><br />
Androgen seperti Testeron merangsang dan meningkatkan fungsi organ seksual lelaki dan wanita.Hormon tersebut juga memainkan peranan penting dalam meningkatkan tenaga,pembentukan otot,mengawal berat badan dan meningkatkan keupayaan mental lelaki dan wanita.<br />
<br />
Kajian klinikal menunjukan paras androgen menurun di dalam usia lanjut pada dua peratus setiap tahun dan berkurangan sebanyak 20% pada usia 50-80 tahun. Untuk menjamin kesihatan dalaman dan seksualiti yang berpanjangan,lelaki perlu mengubah gaya hidup kepada yang lebih sihat terutamanya mengurangkan tabiat merokok dan mengambil.<br />
<br />
<b><u>Tahukah Anda</u></b><br />
Bagaimana kaum lelaki boleh memeriksa permulaan kemorosotan fungsi biologi? Mengikut penyelidikan saintifik, tubuh badan manusia mula menua selepas seseorang mencapai peringkat dewasa dan ia dipercepatkan lagi apabila seseorang itu mencapai 30-40 tahun.<br />
<br />
Satu daripada tanda nyata penuaan dalam lelaki ialah kemorosotan fungsi biologi dan ia biasanya disifatkan seperi berikut:<br />
<ul>
<li>Kehilangan penegangan pagi yang dialami semasa remaja.</li>
<li>Mudah letih dan tidak memberi tumpuan pada pekerjaan.</li>
<li>Berasa letih walaupun baru bangun dari tidur.</li>
<li>Sakit dibahagian belakang mula dirasakan</li>
</ul>
<b><u>Khasiat Tanjaq</u></b><br />
<ul>
<li>Merangsang perpeluhan</li>
<li>Menghilangkan bau badan dan mulut</li>
<li>Anti bengkak pada sendi dan otot</li>
<li>Menguraikan gas dalam perut</li>
<li>Menghindari ‘cramps’ bahagian perut</li>
<li>Menghindari radang gusi dan sakit gigi</li>
<li>Menghindari pembekuan darah</li>
<li>Anti kanser</li>
<li>Anti Arthritis, Rheumatism</li>
<li>Menghindari dari gejala ‘erectile dysfunction’</li>
<li>Mengawal ejakulasi pra-matang</li>
<li>Menstruktur tubuh badan lelaki dgn meningkatkan metabolisma</li>
<li>Mengubati luka dalaman</li>
<li>Memelihara saraf</li>
<li>Menguatkan otot jantung dan melancarkan pengaliran darah</li>
<li>Membantu mengawal paras gula dalam darah</li>
</ul>

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
                                           
                                            <li class="list-group-item">Harga Pembekal
                                                <button type="button" class="btn btn-danger float-right">100/RM2500</button>
                                            </li>

                                            <li class="list-group-item">Harga Pemborong
                                                <button type="button" class="btn btn-danger float-right">1000/RM20,000</button>
                                            </li>  
                                        </ul>

                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>

                    <!-- Bank Clipboard -->
                    <form class="form-inline">
                      <b class="text-center mb-2" style="margin:0 auto">Bank-in ke CIMB: PERSADA FC TRADING</b>

                      <div class="form-group mx-sm-3 mb-2">
                        <input class="form-control" type="text" value="8604079751" id="myInput4">
                      </div>
                      <button type="button" class="btn btn-primary mb-2" style="border-radius:25px" onclick="myClipboard4()">Copy No Akaun</button>
                      <div id="doneCopy4"></div>
                    </form>
                    <!-- Bank Clipboard -->
                                       
                    <a v-bind:href="tanjaqShop" class="btn persada-button mt-1" style="background-color:#EA501F;color:#fff">Beli di Shopee!</a>
                    <a v-bind:href="tanjaqWa" target="_blank" class="btn btn-success persada-button mt-1">Beli di Whatsapp</a>
                    <a v-bind:href="tanjaqFB" class="btn btn-primary persada-button mt-1">Beli di Facebook</a>

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

function myClipboard4() {
    var copyText = document.querySelector("#myInput4");
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
    document.querySelector("#doneCopy4").innerHTML = "No Akaun Sudah Di Salin! " + (copyText.value) + " Pilihan Bank :" + (buttonList);
}