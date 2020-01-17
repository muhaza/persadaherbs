document.getElementById("modal").innerHTML = `
<!-- Modal -->
<div class="modal fade" id="tehPersadaModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">

        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">TEH PERSADA</h5>
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
                                            Mengurangkan risiko Diabetes, Kanser, Anemia, Darah Tinggi,Membantu Detoks dan Menurunkan Berat Badan.
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        <h5 class="card-title">🌿 RAMUAN</h5>
                                        <p class="card-text">
                                            Teh Hijau, Serai, Lemon, Madu Kelulut & Nano Sugar
                                        </p>
                                        <a v-bind:href="pop2Url" class="btn btn-danger persada-button mt-1">Beli Sekarang</a>
                                        <a href="https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Teh%20Persada" class="btn btn-success persada-button mt-1">Whatsapp</a>
                                        <a href="pop2Url" class="btn btn-primary persada-button mt-1">Facebook PM</a>
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