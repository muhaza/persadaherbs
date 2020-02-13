document.getElementById("produk").innerHTML = `
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
            <div class="mt-5">
              <div class="row">
                <!-- 📚📚📚 card start 📚📚📚-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{tehOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{tehPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="tehImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />

                    <div class="card-body">
                      <h5 class="card-title">{{tehTitle}}</h5>
                      <p class="card-text text-justify">
                        {{tehDesc}}
                      </p>
                      <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
                        data-target="#tehPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!--- kkkkkkkkkkkkkkkkkkkkkkkkk kopi kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk --->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{kopiOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{kopiPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="kopiImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{kopiTitle}}</h5>
                      <p class="card-text text-justify">
                        {{kopiDesc}}
                      </p>
                      <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
                        data-target="#kopiPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- ppppppppppppppppppppppppppppppp progest pppppppppppppppppppppppp-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{progestOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{progestPrice}}</button>

                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="progestImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{progestTitle}}</h5>
                      <p class="card-text text-justify">
                        {{progestDesc}}
                      </p>
                      <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
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
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{tanjaqOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{tanjaqPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="tanjaqImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{tanjaqTitle}}</h5>
                      <p class="card-text text-justify">
                        {{tanjaqDesc}}
                      </p>
                      <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
                        data-target="#tanjaqPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- aaaaaaaaaaaaaaaaaaaaaaaaaa anas aaaaaaaaaaaaaaaaaaaaaaa-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{anasOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{anasPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="anasImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{anasTitle}}</h5>
                      <p class="card-text text-justify">
                        {{anasDesc}}
                      </p>
                      <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
                        data-target="#anasPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{birlivaOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{birlivaPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="birlivaImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{birlivaTitle}}</h5>
                      <p class="card-text text-justify">
                        {{birlivaDesc}}
                      </p>
                      <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
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
            <div class="mb-5">
              <div class="row">
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- mmmmmmmmmmmmmmmmmmmmmmm mysuri mmmmmmmmmmmmmmmmmmmmmmmmm-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{suriOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{suriPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="suriImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{suriTitle}}</h5>
                      <p class="card-text text-justify">
                        {{suriDesc}}
                      </p>
                      <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
                        data-target="#suriPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- mmmmmmmmmmmmmmmmmmmmmmm mysuri mmmmmmmmmmmmmmmmmmmmmmmmm-->
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- aaaaaaaaaaaaaaaaaaaaaaaaaa anas aaaaaaaaaaaaaaaaaaaaaaa-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{luzeaOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{luzeaPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="luzeaImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{luzeaTitle}}</h5>
                      <p class="card-text text-justify">
                        {{luzeaDesc}}
                      </p>
                      <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
                        data-target="#luzeaPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right mx-1"
                        style="font-size:small">{{birlivaOffer}}</button>
                      <button type="button" class="btn btn-dark float-right"
                        style="font-size:small">{{birlivaPrice}}</button>
                    </span>
                    <img class="card-img-top wow fadeInUp" v-bind:src="vititeaImg" alt=" 📚Card image cap"
                      style="margin-top: -10px;" />
                    <div class="card-body">
                      <h5 class="card-title">{{birlivaTitle}}</h5>
                      <p class="card-text text-justify">
                        {{birlivaDesc}}
                      </p>
                      <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
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
      <!-- ssssssssssssssssssssssssssssssss section ssssssssssssssssssssssssssssssssssssss -->

  </div>

    <!--  xxxxxxxxxxxxxxxxxxxxxxxxxxxx Next Page xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx -->
    <div class="tab-pane fade" id="page-2" role="tabpanel" aria-labelledby="pills-contact-tab">

      <div class="row">
        <div class="col-sm">
          <!-- start product -->
          <section id="product" style="background: whitesmoke">
            <div id="vue-card">
              <!-- start vue -->
              <div class="container my-5">
                <div class="row">

                  <!-- 📚📚📚 card start 📚📚📚-->
                  <div class="col-sm">
                    <div class="card mt-1" style="width: 100%;">
                      <span class="m-1">
                        <button type="button" class="btn btn-danger float-right ">{{tanjaqPrice}}</button>
                      </span>
                      <img class="card-img-top wow fadeInUp" v-bind:src="tanjaqImg" alt=" 📚Card image cap"
                        style="margin-top: -10px;" />
                      <div class="card-body">
                        <h5 class="card-title">{{tanjaqTitle}}</h5>
                        <p class="card-text text-justify">
                          {{tanjaqDesc}}
                        </p>
                        <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
                          data-target="#progestPersadaModal" style="color:white">Lebih Informasi</a>
                      </div>
                    </div>
                  </div>
                  <!-- 📚📚📚 card start 📚📚📚-->
                  <div class="col-sm">
                    <div class="card mt-1" style="width: 100%;">
                      <span class="m-1">
                        <button type="button" class="btn btn-danger float-right ">{{tanjaqPrice}}</button>
                      </span>
                      <img class="card-img-top wow fadeInUp" v-bind:src="tanjaqImg" alt=" 📚Card image cap"
                        style="margin-top: -10px;" />
                      <div class="card-body">
                        <h5 class="card-title">{{tanjaqTitle}}</h5>
                        <p class="card-text text-justify">
                          {{tanjaqDesc}}
                        </p>
                        <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
                          data-target="#progestPersadaModal" style="color:white">Lebih Informasi</a>
                      </div>
                    </div>
                  </div>
                  <!-- 📚📚📚 card start 📚📚📚-->
                  <div class="col-sm">
                    <div class="card mt-1" style="width: 100%;">
                      <span class="m-1">
                        <button type="button" class="btn btn-danger float-right ">{{tanjaqPrice}}</button>
                      </span>
                      <img class="card-img-top wow fadeInUp" v-bind:src="tanjaqImg" alt=" 📚Card image cap"
                        style="margin-top: -10px;" />
                      <div class="card-body">
                        <h5 class="card-title">{{tanjaqTitle}}</h5>
                        <p class="card-text text-justify">
                          {{tanjaqDesc}}
                        </p>
                        <a class="btn btn-danger persada-button" class="btn btn-primary" data-toggle="modal"
                          data-target="#progestPersadaModal" style="color:white">Lebih Informasi</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
          <!-- end product 1 -->
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-sm">
        <!-- button -->
        <ul class="nav nav-pills mb-1 float-right" id="pills-tab" role="tablist">

          <li class="nav-item">
            <a class="nav-link nav-number active" id="pills-profile-tab" data-toggle="pill" href="#page-1" role="tab"
              aria-controls="pills-profile" aria-selected="false">1</a>
          </li>
          <li class="nav-item">
            <a class="nav-link nav-number" id="pills-contact-tab" data-toggle="pill" href="#page-2" role="tab"
              aria-controls="pills-contact" aria-selected="false">2</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  `