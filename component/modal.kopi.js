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
                                        <h5 class="card-title"> 👍 KEBAIKAN</h5>
                                        <p class="card-text">
                                            • Memberi Tenaga Segera <br>• Menghilangkan Rasa Mengantuk <br>
                                            • Melancarkan Aliran Darah <br>• melancarkan Aliran Darah dan Haid <br>
                                            • Melancarkan Hormon <br>
                                            • Menguatkan Sistem Dalaman Badan.<br>
                                            • Menghitamkan Rambut.<br>
                                        </p>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 10px;"></div>
                                        <h4 class="text-center">WOW! MACAM-MACAM RASA!</h4>
                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>
                                        
                                        <h5 class="card-title">🌿 RAMUAN</h5>
                                        <p class="card-text">
                                            Krimer Tanpa Susu, Gula Perang, Ganoderma Lucidum, Cordyceps, Cynomorium Songaricum,
                                            Polygonum Multiflorum, Tongkat Ali, Ubi Jaga, Kopi Arabica, Garam Buluh, Sarang Burung Walit,
                                            dan Koko
                                        </p>
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

                                            <li class="list-group-item">Harga Ejen
                                                <button type="button" class="btn btn-danger float-right">RM60</button>
                                            </li>
                                            
                                            <li class="list-group-item">Harga Ejen
                                                <button type="button" class="btn btn-danger float-right">RM60</button>
                                            </li>
                                           
                                            <li class="list-group-item">Harga Pemborong
                                                <button type="button" class="btn btn-danger float-right">RM28</button>
                                            </li>

                                            <li class="list-group-item">Harga Pembekal
                                                <button type="button" class="btn btn-danger float-right">RM28</button>
                                            </li>  
                                        </ul>

                                        <div style="border-bottom: 1px #00000069 solid; margin-bottom: 15px;"></div>


                                        <div class="card">
                                        <p style="font-size:small;padding-top:8px;margin-bottom: -3px;" class="text-center"> Diskaun lebih rendah di Email anda! Subscribe sekarang! </p>

                                        <!-- Begin Mailchimp Signup Form -->
                                        <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
                                        <style type="text/css">
                                            #mc_embed_signup {
                                                background: #fff;
                                                clear: left;
                                                font: 16px Helvetica, Arial, sans-serif;
                                                width: 100%;
                                            }
                                            /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
	                                        We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
                                        </style>
                                        <div id="mc_embed_signup">
                                            <form action="https://persadaherbs.us4.list-manage.com/subscribe/post?u=e280b122196abf8c33f52ba68&amp;id=82b9588ad5" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
                                                <div id="mc_embed_signup_scroll">

                                                    <input style="width: 75%;border-radius: 10em;" type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
                                                    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
                                                    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e280b122196abf8c33f52ba68_82b9588ad5" tabindex="-1" value=""></div>
                                                    <div class="clear"><input class="btn-primary" style="border-radius: 10em;border:solid 1px transparent;padding:3px;" type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
                                                </div>
                                            </form>
                                        </div>
                                        </div>
                                        <!--End mc_embed_signup-->
                                        <!-- <a v-bind:href="pop2Url" class="btn btn-danger persada-button mt-1">Beli Sekarang</a> -->
                                        <a href="https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Kopi%20SuoYang" class="btn btn-success persada-button mt-1">Whatsapp</a>
                                        <!-- <a href="pop2Url" class="btn btn-primary persada-button mt-1">Facebook PM</a> -->
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