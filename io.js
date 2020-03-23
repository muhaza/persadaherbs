var app = new Vue({
    el: "#vue-product",
    data: {
        tehImg: "./asset/image/teh-thumbnail.webp",
        tehPrice: "RM28",
        tehOffer: "OFFER RM25",
        tehTitle: "Persada Teh",
        tehDesc: "Ubat Diabetes, Kanser, Anemia, Darah Tinggi, Membantu Detoks dan Menurunkan Berat Badan.",
        tehUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        kopiImg: "./asset/image/kopi-thumbnail.webp",
        kopiPrice: "RM28",
        kopiOffer: "OFFER RM25",
        kopiTitle: "Kopi Suoyang",
        kopiDesc: "Tenaga Segera, Hilangkan Rasa Mengantuk, Lancarkan Aliran Darah dan Haid, Hitamkan..",
        kopiUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        progestImg: "./asset/image/progest-thumbnail.webp",
        progestPrice: "RM78",
        progestOffer: "OFFER RM60",
        progestTitle: "Jus Cendawan Mekah",
        progestDesc: "Menambah Gel di Lutut, Anti Oksidan & Anti Penuaan, Detoks, Memulihkan Sistem Pencernaan..",
        progestUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        tanjaqImg: "./asset/image/tanjaq-thumbnail.webp",
        tanjaqPrice: "RM48",
        tanjaqOffer: "OFFER RM38",
        tanjaqTitle: "Tanjaq",
        tanjaqDesc: "Tenaga Segera, Hilangkan Rasa Mengantuk, Lancarkan Aliran Darah dan Haid",
        tanjaqUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        anasImg: "./asset/image/anas-thumbnail.webp",
        anasPrice: "RM48",
        anasOffer: "OFFER RM38",
        anasTitle: "Anas",
        anasDesc: "Mencerdaskan minda, Meningkatkan daya imunisasi, ingatan, & perkembangan otak",
        anasUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        suriImg: "./asset/image/mysuri-thumbnail.webp",
        suriPrice: "RM48",
        suriOffer: "OFFER RM38",
        suriTitle: "MySuri",
        suriDesc: "Menyelesaikan Masalah Senggugut, Masalah Mandul, Angin Lelah, Sakit Sendi Badan",
        suriUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        birlivaImg: "./asset/image/birliva-thumbnail.webp",
        birlivaPrice: "RM78",
        birlivaOffer: "OFFER RM60",
        birlivaTitle: "Birliva",
        birlivaDesc: "Tenaga Segera, Hilangkan Rasa Mengantuk, Lancarkan Aliran Darah dan Haid",
        birlivaUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        luzeaImg: "./asset/image/luzea-thumbnail.webp",
        luzeaPrice: "RM68",
        luzeaOffer: "OFFER RM50",
        luzeaTitle: "Luzea",
        luzeaDesc: "Menajamkan Penglihatan, Mencegah Glaukoma, Katarak dan Miopia (Rabun Jauh)",
        luzeaUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        vititeaImg: "./asset/image/vititea-thumbnail.webp",
        vititeaPrice: "RM68",
        vititeaOffer: "OFFER RM50",
        vititeaTitle: "Vit I Tea",
        vititeaDesc: "Mencegah,Rabun Jauh, Mengatasi Masalah Insomnia, Masalah Insomnia & Alzheimer",
        vititeaUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        fibreImg: "./asset/image/fibre.webp",
        fibrePrice: "RM74",
        fibreOffer: "OFFER RM70",
        fibreTitle: "Fibre",
        fibreDesc: "Mencegah,Rabun Jauh, Mengatasi Masalah Insomnia, Masalah Insomnia & Alzheimer",
        fibreUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        specImg: "./asset/image/spectrum.webp",
        specPrice: "RM140",
        specOffer: "OFFER RM100",
        specTitle: "Spectrum",
        specDesc: "Menjadi zat tambahan, Penawar kanser, Anti racun, Mempercepatkan pertumbuhan tisu kulit..",
        specUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        cleanserImg: "./asset/image/cleanser.webp",
        cleanserPrice: "RM57",
        cleanserOffer: "OFFER RM24",
        cleanserTitle: "Beauty Cleanser",
        cleanserDesc: "Membersihkan Sisa Solekan, Minyak, Sel Kulit Mati, Melembabkan dan Mencerahkan..",
        cleanserUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        scrubImg: "./asset/image/scrub.webp",
        scrubPrice: "RM69",
        scrubOffer: "OFFER RM24",
        scrubTitle: "Beauty Scrub",
        scrubDesc: "Menanggalkan Kotoran Dari Akar Umbi, Muka Kotor & Minyak, Mencegah Jerawat Bintik Hitam",
        scrubUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        creamImg: "./asset/image/cc-cream.webp",
        creamPrice: "RM95",
        creamOffer: "OFFER RM40",
        creamTitle: "CC Cream",
        creamDesc: "Mencerahkan, Mengurangkan garis-garis halus & kedutan, Merata tona kulit, Pelindungan UV",
        creamUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        dayImg: "./asset/image/day.webp",
        dayPrice: "RM82",
        dayOffer: "OFFER RM33",
        dayTitle: "Day Serum",
        dayDesc: "Membantu Kulit Menjadi Matang, Segar, Bertenaga, Tegang, Halus, Lembut dan Lembab",
        dayUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        nightImg: "./asset/image/night.webp",
        nightPrice: "RM82",
        nightOffer: "OFFER RM33",
        nightTitle: "Night Serum",
        nightDesc: "Rawatan Terapi Muka, Meredakan & Menyinkirkan Jerawat, Anti Kedutan, Hilangkan Bintik..",
        nightUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        ageImg: "./asset/image/age.webp",
        agePrice: "RM125",
        ageOffer: "OFFER RM60",
        ageTitle: "Age Defying Mask",
        ageDesc: "Membersihkan kulit, Liang Roma, Kurang Garis Halus, Muka Bercahaya, Mengurangkan Minyak..",
        ageUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        sabunImg: "./asset/image/sabun.webp",
        sabunPrice: "RM20",
        sabunOffer: "OFFER RM15",
        sabunTitle: "Sabun Kelulut",
        sabunDesc: "Membantu masalah kulit gatal ruam, Membersih daki dan sel mati serta kuman",
        sabunUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        aurisImg: "./asset/image/auristella.webp",
        aurisPrice: "RM180",
        aurisOffer: "OFFER RM140",
        aurisTitle: "Auristella",
        aurisDesc: "melembabkan & memelihara bibir agar nampak tetap sihat, mesra wuduk, Halal Toyiban",
        aurisUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        soonimg: "./asset/image/akan-datang.jpg",
        soonTitle: "Akan Datang",
        soonDesc: "Akan Datang “Aroma Segar, Sedap, Tenang & Berzat” Keutamaan kami dalam menghasilkan produk..",
        soonUrl: "http://google.com"
    }
});

var app = new Vue({
    el: "#banner-img",
    data: {
        tehBanner: "./asset/image/Teh-Persada-gold.webp",
        tehMysuri: "./asset/image/banner-mysuri.webp",
    }
});

var app = new Vue({
    el: "#banner-mob",
    data: {
        tehBanner: "./asset/image/Teh-Persada-gold.webp",
        tehMysuri: "./asset/image/banner-mysuri.webp",
    }
});

var app = new Vue({
    el: "#modal-teh",
    data: {
        pop2img: "./asset/image/teh-thumbnail.webp",
        tehShop: "https://shopee.com.my/Teh-Persada-🇲🇾🔥Hot-Sale🔥-i.227540832.3419949853",
        tehWa: "https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Teh%20Persada",
        tehfb: "https://web.facebook.com/commerce/products/2855263187869798"
    }
});

var app = new Vue({
    el: "#modal-kopi",
    data: {
        kopiImg: "./asset/image/kopi-thumbnail.webp",
        kopiShop: "https://shopee.com.my/Suo-Yang-White-Coffee-🇲🇾🔥Hot-Sale🔥-Persada-Herbs-HQ-i.227540832.4619877204",
        kopiWa: "https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Kopi%20Suoyang",
        kopifb: "https://web.facebook.com/commerce/products/3116798264997460/"
    }
});

var app = new Vue({
    el: "#modal-progest",
    data: {
        progestImg: "./asset/image/progest-thumbnail.webp",
        progestShop: "https://shopee.com.my/Progest-Persada-Herbs-HQ-i.227540832.6920134318",
        progestWa: "https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Jus%20Cendawan%20Mekah",
        progestFb: "https://web.facebook.com/commerce/products/2661554503965467/"
    }
});
var app = new Vue({
    el: "#modal-tanjaq",
    data: {
        tanjaqImg: "./asset/image/tanjaq-thumbnail.webp",
        tanjaqShop: "https://shopee.com.my/Tanjaq-Persada-Herbs-HQ-i.227540832.4220148417",
        tanjaqWa: "https://wa.me/601158680328?text=Saya%20berminat%20untuk%20order%20Tanjaq",
        tanjaqFB: "https://web.facebook.com/commerce/products/4038879999459139/"
    }
});

var app = new Vue({
    el: "#modal-anas",
    data: {
        anasImg: "./asset/image/anas-thumbnail.webp",
        // anasShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-birliva",
    data: {
        birlivaImg: "./asset/image/birliva-thumbnail.webp",
        // birlivaShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-suri",
    data: {
        suriImg: "./asset/image/mysuri-thumbnail.webp",
        // suriShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-luzea",
    data: {
        luzeaImg: "./asset/image/luzea-thumbnail.webp",
        // luzeaShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-vititea",
    data: {
        vititeaImg: "./asset/image/vititea-thumbnail.webp",
        // vitShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-cleanser",
    data: {
        cleanserImg: "./asset/image/cleanser.webp",
        // vitShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-scrub",
    data: {
        scrubImg: "./asset/image/scrub.webp",
        // scrubShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-cream",
    data: {
        creamImg: "./asset/image/cc-cream.webp",
        // creamShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-day",
    data: {
        dayImg: "./asset/image/day.webp",
        // dayShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-night",
    data: {
        nightImg: "./asset/image/night.webp",
        // nightShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-age",
    data: {
        ageImg: "./asset/image/age.webp",
        // ageShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-spectrum",
    data: {
        specImg: "./asset/image/spectrum.webp",
        // specShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-fibre",
    data: {
        fibreImg: "./asset/image/fibre.webp",
        // fibreShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-sabun",
    data: {
        sabunImg: "./asset/image/sabun.webp",
        // sabunShop:"https://www.shopee.com.my"
    }
});

var app = new Vue({
    el: "#modal-auris",
    data: {
        sabunImg: "./asset/image/auristella.webp",
        // sabunShop:"https://www.shopee.com.my"
    }
});