document.getElementById("aboutPill").innerHTML = `
<!-- Pill -->
<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">

  <li class="nav-item">
    <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" 
    href="#pills-profile" role="tab" aria-controls="pills-profile" 
    aria-selected="false">Persada Herbs</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" 
    href="#pills-contact" role="tab" aria-controls="pills-contact" 
    aria-selected="false">Kejayaan</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-pemasaran-tab" data-toggle="pill" 
    href="#pills-pemasaran" role="tab" aria-controls="pills-pemasaran" 
    aria-selected="false">Pemasaran </a>
  </li>
</ul>

<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" 
          aria-labelledby="pills-profile-tab">  

      <div class="row mb-3" style="background:url(./asset/image/header-bg.webp);padding:1rem 0;margin:1rem; border-radius:1rem;">
        <div class="col-sm">
          <div class="d-flex justify-content-center">
            <img src="./asset/image/Faiziman.webp" style="box-shadow: 0px 5px 11px 0px #00000042;" class="rounded-circle" alt="Faiziman" width="200px"/> </span> 
            <!-- <div class="card" style="width: 100%; margin-bottom:2rem;">
              <img class="card-img-top" src="./asset/image/Faiziman.webp" alt="Card image cap">
                <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div> -->
          </div>
        </div>
        <div class="col-sm">
         <div class="d-flex justify-content-center">
            <img src="./asset/image/Faiziwan.webp" style="box-shadow: 0px 5px 11px 0px #00000042;z-index: 10;" class="rounded-circle align-center" alt="Faiziwan" width="200px"/>
            <!-- <div class="card" style="width: 100%; margin-bottom:2rem;">
              <img class="card-img-top" src="./asset/image/Faiziwan.webp" alt="Card image cap">
                <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div> -->
         </div>
        </div>
        <div class="col-sm">
          <div class="d-flex justify-content-center">
            <img src="./asset/image/Faizli.webp" style="box-shadow: 0px 5px 11px 0px #00000042;z-index: 20;" class="rounded-circle align-center" alt="Faizli" width="200px"/>
          </div>
        </div>
      </div>
      

        <div class="row">
        <!-- <div class="col-sm-3">
            <img class="img-fluid" src="/asset/image/ramuan-sihat.png" alt="">
        </div> -->
        <div class="col-sm">
         <p> Persada herbs Sdn Bhd merupakan sebuah syarikat bumiputra diasaskan oleh 
        3 orang adik beradik dengan wawasan menunaikan perintah fardhu kifayah, iaitu 
        untuk menghasil produk halalan toyyiban dengan
        formula sendiri, kilang sendiri, pemasaran sendiri.</p>
        <!-- <br/> -->
        <p>Memandangkan zaman ini kita menghadapi pelbagai penyakit dengan tidak ada penyelesaiannya. 
        Persada Herbs berpegang kuat dengan falsafah mencegah lebih elok dari merawat secara alamiah.</p>
        <br/>
        <a href="#tehPersadaModal!" 
        class="btn btn-danger float-right" style="color: white; border-radius:20em;">Lanjutkan Bacaan</a>
        </div>
        </div>
    </div>
      
    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
      <div class="row">
        <article class="col-sm">
        <p>Consectetur dolor cillum laborum id dolor sunt officia laboris laboris adipisicing mollit do. 
        Esse culpa ut ex qui excepteur ut proident consequat deserunt ipsum sit. Velit pariatur proident 
        fugiat cillum cupidatat reprehenderit eu elit aute aute nulla occaecat id.
        </p>
        </article>
      </div>
    </div>


    <div class="tab-pane fade" id="pills-pemasaran" role="tabpanel" aria-labelledby="pills-pemasaran-tab">
      <p>Consectetur dolor cillum laborum id dolor sunt officia laboris laboris adipisicing mollit do. 

        Esse culpa ut ex qui excepteur ut proident consequat deserunt ipsum sit. Velit pariatur proident 
        fugiat cillum cupidatat reprehenderit eu elit aute aute nulla occaecat id.
        </p>
    </div>
</div>
</div>
`