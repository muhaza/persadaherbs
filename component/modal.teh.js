
document.getElementById("modal-teh").innerHTML = `
<!-- Modal -->
<div class="modal fade" id="tehPersadaModal" tabindex="-1" role="dialog" aria-labelledby="ModalCenterTitle"
  aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">

    <div class="modal-content">
      <div class="modal-header">
        <div class="col-sm">
          <h5 class="modal-title" id="exampleModalLongTitle">TEH PERSADA</h5>
        </div>

        <span>
          <button type="button" class="btn btn-danger float-right ">RM28</button>
        </span>

        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <div id="modal-teh">
          <!-- start vue -->
          <div class="container">
            <div class="row">
              <!-- 📚📚📚 card start 📚📚📚-->
              <div class="col-sm">
                <div style="width: 100%;">
                  <img class="card-img-top" v-bind:src="pop2img" alt=" 📚Card image cap" />

                  <div class="card-body">
                    <h5 class="card-title"> 👍 KEBAIKAN</h5>
                    <p class="card-text">
                      • Mengurangkan risiko Diabetes <br>
                      • Kanser <br>• Anemia <br>
                      • Darah Tinggi <br>
                      • Membantu Detoks<br>
                      • Menurunkan Berat Badan.
                    </p>
                    
                    <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                        <h4 class="text-center">AROMANYA SEGAR, RASANYA SEDAP!</h4>
                    <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                    
                    <h5 class="card-title">🌿 RAMUAN</h5>
                    <p class="card-text">
                      Teh Hijau, Serai, Lemon, Madu Kelulut & Nano Sugar
                    </p>
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
                        <button type="button" class="btn btn-danger float-right">1000/RM17,000</button>
                      </li>
                    </ul>

                    <div style="border-bottom: 1px #dfdfdf solid; margin-bottom: 15px;"></div>

                    <!-- Bank Clipboard -->
                    <b class="text-center mb-2" style="display:block;margin:0 auto">Bank-in ke CIMB: PERSADA FC TRADING</b>
                    <form class="form-inline">
                      <div class="form-group mx-sm-3 mb-2">
                        <input class="form-control" type="text" value="8604079751" id="myInput">
                      </div>
                      <button type="button" class="btn btn-primary mb-2" style="border-radius:25px;" onclick="myClipboard()">Copy No Akaun</button>
                      <div id="doneCopy"></div>
                    </form>
                    <!-- Bank Clipboard -->

                    <a v-bind:href="tehShop" class="btn persada-button mt-1" style="background-color:#EA501F;color:#fff">Beli di Shopee!</a>
                    <a v-bind:href="tehWa" target="_blank" class="btn btn-success persada-button mt-1">Beli di Whatsapp</a>
                    <a v-bind:href="tehfb" class="btn btn-primary persada-button mt-1">Beli di Facebook</a>
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
    ` ;
    function myClipboard() {
    var copyText = document.querySelector("#myInput");
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
    document.querySelector("#doneCopy").innerHTML = "No Akaun Sudah Di Salin! " + (copyText.value) + " Pilihan Bank :" + (buttonList);
    }

