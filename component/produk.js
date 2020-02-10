document.getElementById("produk").innerHTML = `
<div id="vue-product">
  <!-- vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv start vue vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv -->
  <div class="tab-content container" id="pills-tabContent">
    <div class="tab-pane fade show active" id="page-1" role="tabpanel" aria-labelledby="pills-profile-tab">
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
                      <button type="button" class="btn btn-danger float-right ">{{tehPrice}}</button>
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
                      <button type="button" class="btn btn-danger float-right ">{{kopiPrice}}</button>
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
                      <button type="button" class="btn btn-danger float-right ">{{progestPrice}}</button>
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
          <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx end product xxxxxxxxxxxxxxxxxxxxxxxxx -->
        </div>

        <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx start new row product xxxxxxxxxxxxxxxxxxxxxxxxx -->
        <section id="product" style="background: whitesmoke">
          <div id="vue-card">
            <!-- start vue -->
            <div class="container mb-5">
              <div class="row">

                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- ttttttttttttttttttttttttttttttttttttt tanjaq tttttttttttttttttttttttttttttt-->
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
                        data-target="#tanjaqPersadaModal" style="color:white">Lebih Informasi</a>
                    </div>
                  </div>
                </div>
                <!-- 📚📚📚 card start 📚📚📚-->
                <!-- aaaaaaaaaaaaaaaaaaaaaaaaaa anas aaaaaaaaaaaaaaaaaaaaaaa-->
                <div class="col-sm">
                  <div class="card mt-1" style="width: 100%;">
                    <span class="m-1">
                      <button type="button" class="btn btn-danger float-right ">{{anasPrice}}</button>
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
                      <button type="button" class="btn btn-danger float-right ">{{birlivaPrice}}</button>
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
              </div>
            </div>
          </div>

        </section>
         <!-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx end row product xxxxxxxxxxxxxxxxxxxxxxxxx -->
      </div>
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