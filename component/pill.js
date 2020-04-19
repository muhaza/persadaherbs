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
  <!-- <li class="nav-item">
    <a class="nav-link" id="pills-pemasaran-tab" data-toggle="pill" 
    href="#pills-pemasaran" role="tab" aria-controls="pills-pemasaran" 
    aria-selected="false">Pemasaran </a>
  </li> -->
</ul>

<div class="tab-content" id="pills-tabContent">
    <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" 
          aria-labelledby="pills-profile-tab">  

      <div class="row mb-3" style="background:url(./asset/image/header-bg.webp);padding:1rem 0;margin:0 0.3rem; border-radius:1rem;">
        <div class="col-sm">
          <div class="d-flex profile-width">
            <img src="./asset/image/Faiziman.webp" class="rounded-circle profile-image" alt="Faiziman" width="50%" height="50%"/> </span> 
            <span class="text-light" style="display:block; margin-top:10%;"><h6>MOHAMAD FAIZIMAN CHAI</h6><p style="font-size:small">Pengarah Pembangunan Produk</p></span>
          </div>
        </div>
        <span class="hideOnPc" style="border-bottom:dashed 1px white; margin:1rem; width:99%;"></span>
        <div class="col-sm">
         <div class="d-flex profile-width">
            <img src="./asset/image/Faiziwan.webp" style="z-index: 10;" class="rounded-circle align-center profile-image" alt="Faiziwan" width="50%" height="50%"/>
            <span class="text-light" style="display:block; margin-top:10%;"><h6>MUHAMAD FAIZIWAN CHAI </h6><p style="font-size:small">CEO : Pengurus Anugerah Alam (Kilang)</p></span>
         </div>
        </div>
        <span class="hideOnPc" style="border-bottom:dashed 1px white; margin:1rem; width:99%;"></span>
        <div class="col-sm">
         <div class="d-flex profile-width">
            <img src="./asset/image/Faizli.webp" style="z-index: 10;" class="rounded-circle align-center profile-image" alt="Faizli" width="50%" height="50%"/>
            <span class="text-light" style="display:block; margin-top:10%;"><h6>MUHAMAD FAIZLI CHAI </h6><p style="font-size:small">Pengarah Pemasaran</p></span>
         </div>
        </div>
        
      </div>
      

      <div class="container">
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
        <a class="btn btn-danger float-right" style="border-radius:20rem" id="pills-contact-tab" data-toggle="pill" 
    href="#pills-contact" role="tab" aria-controls="pills-contact" 
    aria-selected="false">Lanjutkan Bacaan</a>
        </div>
        </div>
    </div>
    </div>
      
    <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
      <div class="container">
      <div class="row">
      <div class="col-sm">
            <img class="img-fluid" src="/asset/image/office-1.webp" alt="Persada Herbs Office">
        </div>

      <div class="col-sm">
        <p> Dalam usaha menghasilkan produk yang bersih dan berkhasiat. Persada herbs sdn bhd menjalinkan 
          kalaborasi kerjasama bersama USIM ( universiti sains islam Malaysia) & GMI (German-Malaysian Institute)
          </p>
        <!-- <br/> -->
        <p>Persada Herbs Sdn Bhd turut mempunyai kilang bertaraf GMP (ISLAMIC MANUFACTURING PRACTICE) yang diusahakan oleh Muhd Faiziwan</p>
        <img class="img-fluid" style="border-radius:10px" src="/asset/image/office-2.webp" width="80%" alt="Persada Herbs Office">
        <br/><br/>
        <a class="btn btn-danger float-right" style="border-radius:20rem"
    href="./syarikat.html" >Lanjutkan Bacaan</a>
      </div>
      <!-- <div class="col-sm">
            <img class="img-fluid" src="/asset/image/office-2.webp" alt="Persada Herbs Office">
        </div> -->

      </div>
    </div>
    </div>


    <div class="tab-pane fade" id="pills-pemasaran" role="tabpanel" aria-labelledby="pills-contact-tab">
      <div class="container">
      <div class="row">
      <div class="col-sm">
         <p> Persada herbs Sdn Bhd merupakan sebuah syarikat bumiputra diasaskan oleh 
        3 orang adik beradik dengan wawasan menunaikan perintah fardhu kifayah, iaitu 
        untuk menghasil produk halalan toyyiban dengan
        formula sendiri, kilang sendiri, pemasaran sendiri.</p>
        <!-- <br/> -->
        <p>Memandangkan zaman ini kita menghadapi pelbagai penyakit dengan tidak ada penyelesaiannya. 
        Persada Herbs berpegang kuat dengan falsafah mencegah lebih elok dari merawat secara alamiah.</p>
        <br/>
        <a class="btn btn-danger id="pills-contact-tab" data-toggle="pill" 
    href="#pills-contact" role="tab" aria-controls="pills-contact" 
    aria-selected="false">Lanjutkan Bacaan</a>
        </div>
      </div>
    </div>
    </div>
</div>
</div>
`