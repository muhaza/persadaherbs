document.getElementById("produk").innerHTML = `


<div class="container">
    <div class="row">
      <div class="col-sm mt-3">
        <!-- button -->
        <ul class="nav nav-pills mb-1 float-right" id="pills-tab" role="tablist">
          <li class="nav-item">
            <a class="nav-link nav-number active pulsingButton" id="pills-profile-tab" href="/#produk" role="tab"
              aria-controls="pills-profile" aria-selected="false">Kesihatan</a>
          </li>
          <li class="nav-item">
                <!-- data-toggle="pill" -->
            <a class="nav-link nav-number pulsingButton" id="pills-contact-tab"  href="/beauty.html#produk" role="tab"
              aria-controls="pills-contact" aria-selected="false">Kecantikan</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

<div id="vue-product">
  <!-- vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv start vue vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv -->
  <div class="tab-content container" id="pills-tabContent">
    <div class="tab-pane fade show active" id="page-1" role="tabpanel" aria-labelledby="pills-profile-tab">
      <!-- tttttttttttttttttttttttttttttttttttttttt tab ttttttttttttttttttttttttttttttttttttttttttttt -->
      
      <div class="row">
        <div class="col-sm">
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx start new row product xxxxxxxxxxxxxxxxxxxxxxxxx -->
          <!--- ttttttttttttttttttttttttttttttttt teh persada tttttttttttttttttttttttttttttt --->
          <section id="product" style="background: whitesmoke">
            <div class="mt-1">
              <div class="row">
                <!-- 📚📚📚 card start 📚📚📚-->
                <div class="col-sm" id="tehpersada">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{tehOffer}}</button>
                      <button type="button" class="btn btn-dark float-right strike"
                        style="font-size:small">{{tehPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="tehImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />

                    <div class="card-body">
                      <h5 class="card-title">{{tehTitle}}</h5>
                      <p class="card-text text-justify">
                        {{tehDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#tehPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!--- kkkkkkkkkkkkkkkkkkkkkkkkk kopi kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk --->
                <div class="col-sm" id="kopisuoyang">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{kopiOffer}}</button>
                      <button type="button" class="btn btn-dark float-right strike"
                        style="font-size:small">{{kopiPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="kopiImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{kopiTitle}}</h5>
                      <p class="card-text text-justify">
                        {{kopiDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#kopiPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- ppppppppppppppppppppppppppppppp progest pppppppppppppppppppppppp-->
                <div class="col-sm" id="progest">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{progestOffer}}</button>
                      <button type="button" class="btn btn-dark float-right strike"
                        style="font-size:small">{{progestPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="progestImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{progestTitle}}</h5>
                      <p class="card-text text-justify">
                        {{progestDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#progestPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- end vue -->
          </section>
        </div>
      </div>
      <!-- ssssssssssssssssssssssssssssssss section 1 ssssssssssssssssssssssssssssssssssssss -->
      <!-- ssssssssssssssssssssssssssssssss section 2 ssssssssssssssssssssssssssssssssssssss -->
      <div class="row">
        <div class="col-sm">
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx start new row product xxxxxxxxxxxxxxxxxxxxxxxxx -->
          <!--- ttttttttttttttttttttttttttttttttt teh persada tttttttttttttttttttttttttttttt --->
          <section id="product" style="background: whitesmoke">
            <div class="">
              <div class="row">
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- ttttttttttttttttttttttttttttttttttttt tanjaq tttttttttttttttttttttttttttttt-->
                <div class="col-sm" id="tanjaq">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{tanjaqOffer}}</button>
                      <button type="button" class="btn btn-dark float-right strike"
                        style="font-size:small">{{tanjaqPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="tanjaqImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{tanjaqTitle}}</h5>
                      <p class="card-text text-justify">
                        {{tanjaqDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#tanjaqPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- aaaaaaaaaaaaaaaaaaaaaaaaaa anas aaaaaaaaaaaaaaaaaaaaaaa-->
                <div class="col-sm" id="anas">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{anasOffer}}</button>
                      <button type="button" class="btn btn-dark float-right strike"
                        style="font-size:small">{{anasPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="anasImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{anasTitle}}</h5>
                      <p class="card-text text-justify">
                        {{anasDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#anasPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <div class="col-sm" id="birliva">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{birlivaOffer}}</button>
                      <button type="button" class="btn btn-dark float-right strike"
                        style="font-size:small">{{birlivaPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="birlivaImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{birlivaTitle}}</h5>
                      <p class="card-text text-justify">
                        {{birlivaDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#birlivaPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- cccccccccccccccccccccccc end card ccccccccccccccccccccccccc -->
              </div>
            </div>

            <!-- end vue -->
          </section>
        </div>
      </div>
      <!-- ssssssssssssssssssssssssssssssss section 2 ssssssssssssssssssssssssssssssssssssss -->

      <!-- ssssssssssssssssssssssssssssssss section 3 ssssssssssssssssssssssssssssssssssssss -->
      <div class="row">
        <div class="col-sm">
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx start new row product xxxxxxxxxxxxxxxxxxxxxxxxx -->
          <!-- mmmmmmmmmmmmmmmmmmmmmmm mysuri mmmmmmmmmmmmmmmmmmmmmmmmm-->
          <section id="product" style="background: whitesmoke">
            <div class="">
              <div class="row">
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- mmmmmmmmmmmmmmmmmmmmmmm mysuri mmmmmmmmmmmmmmmmmmmmmmmmm-->
                <div class="col-sm" id="mysuri">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{suriOffer}}</button>
                      <button type="button" class="btn btn-dark float-right strike"
                        style="font-size:small">{{suriPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="suriImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{suriTitle}}</h5>
                      <p class="card-text text-justify">
                        {{suriDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#suriPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- mmmmmmmmmmmmmmmmmmmmmmm mysuri mmmmmmmmmmmmmmmmmmmmmmmmm-->
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- aaaaaaaaaaaaaaaaaaaaaaaaaa anas aaaaaaaaaaaaaaaaaaaaaaa-->
                <div class="col-sm" id="luzea">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{luzeaOffer}}</button>
                      <button type="button" class="btn btn-dark float-right strike"
                        style="font-size:small">{{luzeaPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="luzeaImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{luzeaTitle}}</h5>
                      <p class="card-text text-justify">
                        {{luzeaDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#luzeaPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <div class="col-sm" id="vititea">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{vititeaOffer}}</button>
                      <button type="button" class="btn btn-dark float-right strike"
                        style="font-size:small">{{vititeaPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="vititeaImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{vititeaTitle}}</h5>
                      <p class="card-text text-justify">
                        {{vititeaDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#vititeaPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- cccccccccccccccccccccccc end card ccccccccccccccccccccccccc -->
              </div>
            </div>

            <!-- end vue -->
          </section>
        </div>
      </div>
      <!-- ssssssssssssssssssssssssssssssssss section sssssssssssssssssssssssssssssssssssssss -->
       <!-- ssssssssssssssssssssssssssssssss section 4 ssssssssssssssssssssssssssssssssssssss -->
       <div class="row">
        <div class="col-sm">
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx start new row product xxxxxxxxxxxxxxxxxxxxxxxxx -->
          <section id="product" style="background: whitesmoke">
            <div class="mb-3">
              <div class="row">
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- mmmmmmmmmmmmmmmmmmmmmmm Spectrum mmmmmmmmmmmmmmmmmmmmmmmmm-->
                <div class="col-sm col-lg-4" id="spectrum">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{specOffer}}</button>
                      <button type="button" class="btn btn-dark float-right strike"
                        style="font-size:small">{{specPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="specImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{specTitle}}</h5>
                      <p class="card-text text-justify">
                        {{specDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#specPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- mmmmmmmmmmmmmmmmmmmmmmm Spectrum mmmmmmmmmmmmmmmmmmmmmmmmm-->
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- aaaaaaaaaaaaaaaaaaaaaaaaaa Fibre aaaaaaaaaaaaaaaaaaaaaaa-->
                <div class="col-sm col-lg-4" id="fibre">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{fibreOffer}}</button>
                      <button type="button" class="btn btn-dark float-right strike"
                        style="font-size:small">{{fibrePrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="fibreImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{fibreTitle}}</h5>
                      <p class="card-text text-justify">
                        {{fibreDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#fibrePersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- aaaaaaaaaaaaaaaaaaaaaaaaaa Fibre aaaaaaaaaaaaaaaaaaaaaaa-->
                <!-- aaaaaaaaaaaaaaaaaaaaaaaaaa Fibre aaaaaaaaaaaaaaaaaaaaaaa-->
                <!-- 📚📚📚 card start 📚📚📚-->
                <div class="col-sm col-lg-4">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <!-- <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{vititeaOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{vititeaPrice}}</button> -->
                    </span>
                    <img class="card-img-top wow fadeInUp" src="./asset/image/produk-kecantikan.webp" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <!-- <h5 class="card-title">{{vititeaTitle}}</h5>
                      <p class="card-text text-justify">
                        {{vititeaDesc}}
                      </p> -->

                      <a class="nav-link nav-number btn btn-danger persada-button pulsingButton" 
                      id="pills-contact-tab" href="beauty.html#produk" role="tab"
                      aria-controls="pills-contact" aria-selected="false">Lihat Produk Kecantikan</a>
                    </div>
                  </div>
                </div>
                <!-- cccccccccccccccccccccccc end card ccccccccccccccccccccccccc -->
              </div>
            </div>

            <!-- end vue -->
          </section>
        </div>
      </div>
      <!-- ssssssssssssssssssssssssssssssss section ssssssssssssssssssssssssssssssssssssss -->

      

  </div>
  <!--  xxxxxxxxxxxxxxxxxxxxxxxxxxxx KECANTIKKAN xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
    <!--  xxxxxxxxxxxxxxxxxxxxxxxxxxxx Next Page xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
    <div class="tab-pane fade" id="page-2" role="tabpanel" aria-labelledby="pills-contact-tab">
      <!-- tttttttttttttttttttttttttttttttttttttttt tab ttttttttttttttttttttttttttttttttttttttttttttt -->
      
      <div class="row">
        <div class="col-sm">
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx start new row product xxxxxxxxxxxxxxxxxxxxxxxxx -->
          <!--- cccccccccccccccccccccccc cleanser cccccccccccccccccccccccccccccccccccccccc --->
          <section id="product" style="background: whitesmoke">
            <div class="mt-1">
              <div class="row">
                <!-- 📚📚📚 card start 📚📚📚-->
                <div class="col-sm" id="cleanser">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{cleanserOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{cleanserPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="cleanserImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />

                    <div class="card-body">
                      <h5 class="card-title">{{cleanserTitle}}</h5>
                      <p class="card-text text-justify">
                        {{cleanserDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#cleanserPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!--- ssssssssssssssssssssssssssss scrub sssssssssssssssssssssssssssssss --->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{scrubOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{scrubPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="scrubImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{scrubTitle}}</h5>
                      <p class="card-text text-justify">
                        {{scrubDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#scrubPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- cccccccccccccccccccccccccccc cc cream ccccccccccccccccccccccccccccccc-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{creamOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{creamPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="creamImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{creamTitle}}</h5>
                      <p class="card-text text-justify">
                        {{creamDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#creamPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- end card -->
              </div>
            </div>

            <!-- end vue -->
          </section>
        </div>
      </div>
      <!-- ssssssssssssssssssssssssssssssss section 2 ssssssssssssssssssssssssssssssssssssss -->
            <!-- tttttttttttttttttttttttttttttttttttttttt tab ttttttttttttttttttttttttttttttttttttttttttttt -->
      
      <div class="row">
        <div class="col-sm">
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx start new row product xxxxxxxxxxxxxxxxxxxxxxxxx -->
          <!--- ttttttttttttttttttttttttttttttttt Day Serum tttttttttttttttttttttttttttttt --->
          <section id="product" style="background: whitesmoke">
            <div class="mt-1">
              <div class="row">
                <!-- 📚📚📚 card start 📚📚📚-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{dayOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{dayPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="dayImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />

                    <div class="card-body">
                      <h5 class="card-title">{{dayTitle}}</h5>
                      <p class="card-text text-justify">
                        {{dayDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#dayPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!--- kkkkkkkkkkkkkkkkkkkkkkkkk Night Serum kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk --->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{nightOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{nightPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="nightImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{nightTitle}}</h5>
                      <p class="card-text text-justify">
                        {{nightDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#nightPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- ppppppppppppppppppppppppppppppp progest pppppppppppppppppppppppp-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{ageOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{agePrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="ageImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{ageTitle}}</h5>
                      <p class="card-text text-justify">
                        {{ageDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#agePersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- end vue -->
          </section>
        </div>
      </div>
      <!-- ssssssssssssssssssssssssssssssss section 3 ssssssssssssssssssssssssssssssssssssss -->
      <div class="row">
        <div class="col-sm">
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx start new row product xxxxxxxxxxxxxxxxxxxxxxxxx -->
          <!--- ttttttttttttttttttttttttttttttttt Day Serum tttttttttttttttttttttttttttttt --->
          <section id="product" style="background: whitesmoke">
            <div class="mt-1">
              <div class="row">
                <!-- 📚📚📚 card start 📚📚📚-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{dayOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{dayPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="dayImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />

                    <div class="card-body">
                      <h5 class="card-title">{{dayTitle}}</h5>
                      <p class="card-text text-justify">
                        {{dayDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#dayPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!--- kkkkkkkkkkkkkkkkkkkkkkkkk Night Serum kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk --->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{nightOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{nightPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="nightImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{nightTitle}}</h5>
                      <p class="card-text text-justify">
                        {{nightDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#nightPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- ppppppppppppppppppppppppppppppp progest pppppppppppppppppppppppp-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{ageOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{agePrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="ageImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{ageTitle}}</h5>
                      <p class="card-text text-justify">
                        {{ageDesc}}
                      </p>
                      <a class="btn btn-danger persada-button pulsingButton" class="btn btn-primary" data-toggle="modal"
                        data-target="#agePersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- end vue -->
          </section>
        </div>
      </div>
      <!-- ssssssssssssssssssssssssssssssss section 3 ssssssssssssssssssssssssssssssssssssss -->

      </div>





    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm my-2">
        <!-- button -->
        <ul class="nav nav-pills mb-1 float-right" id="pills-tab" role="tablist">
        <li class="nav-item">
            <a class="nav-link nav-number active pulsingButton" id="pills-profile-tab" href="/#produk" role="tab"
              aria-controls="pills-profile" aria-selected="false">Kesihatan</a>
          </li>
          <li class="nav-item">
                <!-- data-toggle="pill" -->
            <a class="nav-link nav-number pulsingButton" id="pills-contact-tab"  href="/beauty.html#produk" role="tab"
              aria-controls="pills-contact" aria-selected="false">Kecantikan</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  `