var app = new Vue({
    el: "#vue-product",
    data: {
        tehImg: "./asset/image/teh-thumbnail.webp",
        tehPrice:"RM28",
        tehOffer: "OFFER RM25",
        tehTitle: "Persada Teh",
        tehDesc: "Ubat Diabetes, Kanser, Anemia, Darah Tinggi, Membantu Detoks dan Menurunkan Berat Badan.",
        tehUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        kopiImg: "./asset/image/kopi-thumbnail.webp",
        kopiPrice:"RM28",
        kopiOffer: "OFFER RM25",
        kopiTitle: "Kopi Suoyang",
        kopiDesc: "Tenaga Segera, Hilangkan Rasa Mengantuk, Lancarkan Aliran Darah dan Haid, Hitamkan..",
        kopiUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        progestImg: "./asset/image/progest-thumbnail.webp",
        progestPrice:"RM78",
        progestOffer: "OFFER RM60",
        progestTitle: "Jus Cendawan Mekah",
        progestDesc: "Menambah Gel di Lutut, Anti Oksidan & Anti Penuaan, Detoks, Memulihkan Sistem Pencernaan..",
        progestUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        tanjaqImg: "./asset/image/tanjaq-thumbnail.webp",
        tanjaqPrice:"RM48",
        tanjaqOffer: "OFFER RM38",
        tanjaqTitle: "Tanjaq",
        tanjaqDesc: "Tenaga Segera, Hilangkan Rasa Mengantuk, Lancarkan Aliran Darah dan Haid",
        tanjaqUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        anasImg: "./asset/image/anas-thumbnail.webp",
        anasPrice:"RM48",
        anasOffer: "OFFER RM38",
        anasTitle: "Anas",
        anasDesc: "Mencerdaskan minda, Meningkatkan daya imunisasi, ingatan, & perkembangan otak",
        anasUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        suriImg: "./asset/image/mysuri-thumbnail.webp",
        suriPrice:"RM48",
        suriOffer: "OFFER RM38",
        suriTitle: "MySuri",
        suriDesc: "Menyelesaikan Masalah Senggugut, Masalah Mandul, Angin Lelah, Sakit Sendi Badan",
        suriUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        birlivaImg: "./asset/image/birliva-thumbnail.webp",
        birlivaPrice:"RM78",
        birlivaOffer: "OFFER RM60",
        birlivaTitle: "Birliva",
        birlivaDesc: "Tenaga Segera, Hilangkan Rasa Mengantuk, Lancarkan Aliran Darah dan Haid",
        birlivaUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        luzeaImg: "./asset/image/luzea-thumbnail.webp",
        luzeaPrice:"RM68",
        luzeaOffer: "OFFER RM50",
        luzeaTitle: "Luzea",
        luzeaDesc: "Menajamkan Penglihatan, Mencegah Glaukoma, Katarak dan Miopia (Rabun Jauh)",
        luzeaUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        vititeaImg: "./asset/image/vititea-thumbnail.webp",
        vititeaPrice:"RM68",
        vititeaOffer: "OFFER RM50",
        vititeaTitle: "Vit I Tea",
        vititeaDesc: "Mencegah,Rabun Jauh, Mengatasi Masalah Insomnia, Masalah Insomnia & Alzheimer",
        vititeaUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        fibreImg: "./asset/image/fibre.webp",
        fibrePrice:"RM15",
        fibreOffer: "OFFER RM12",
        fibreTitle: "Fibre",
        fibreDesc: "Mencegah,Rabun Jauh, Mengatasi Masalah Insomnia, Masalah Insomnia & Alzheimer",
        fibreUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        specImg: "./asset/image/spectrum.webp",
        specPrice:"RM140",
        specOffer: "OFFER RM100",
        specTitle: "Spectrum",
        specDesc: "Menjadi zat tambahan, Penawar kanser, Anti racun, Mempercepatkan pertumbuhan tisu kulit..",
        specUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        cleanserImg: "./asset/image/cleanser.webp",
        cleanserPrice:"RM57",
        cleanserOffer: "OFFER RM50",
        cleanserTitle: "Beauty Cleanser",
        cleanserDesc: "Membersihkan Sisa Solekan, Minyak, Sel Kulit Mati, Melembabkan dan Mencerahkan..",
        cleanserUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        scrubImg: "./asset/image/scrub.webp",
        scrubPrice:"RM69",
        scrubOffer: "OFFER RM60",
        scrubTitle: "Beauty Scrub",
        scrubDesc: "Menanggalkan Kotoran Dari Akar Umbi, Muka Kotor & Minyak, Mencegah Jerawat Bintik Hitam",
        scrubUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        creamImg: "./asset/image/cc-cream.webp",
        creamPrice:"RM95",
        creamOffer: "OFFER RM90",
        creamTitle: "CC Cream",
        creamDesc: "Mencerahkan, Mengurangkan garis-garis halus & kedutan, Merata tona kulit, Pelindungan UV",
        creamUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        dayImg: "./asset/image/day.webp",
        dayPrice:"RM82",
        dayOffer: "OFFER RM80",
        dayTitle: "Day Serum",
        dayDesc: "Membantu Kulit Menjadi Matang, Segar, Bertenaga, Tegang, Halus, Lembut dan Lembab",
        dayUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        nightImg: "./asset/image/night.webp",
        nightPrice:"RM82",
        nightOffer: "OFFER RM80",
        nightTitle: "Night Serum",
        nightDesc: "Rawatan Terapi Muka, Meredakan & Menyinkirkan Jerawat, Anti Kedutan, Hilangkan Bintik..",
        nightUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        ageImg: "./asset/image/age.webp",
        agePrice:"RM125",
        ageOffer: "OFFER RM110",
        ageTitle: "Age Defying Mask",
        ageDesc: "Membersihkan kulit, Liang Roma, Kurang Garis Halus, Muka Bercahaya, Mengurangkan Minyak..",
        ageUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        soapImg: "./asset/image/sabun.webp",
        soapPrice:"RM15",
        soapOffer: "OFFER RM12",
        soapTitle: "Sabun Kelulut",
        soapDesc: "Mencegah,Rabun Jauh, Mengatasi Masalah Insomnia, Masalah Insomnia & Alzheimer",
        soapUrl: "http://google.com",
        oooo: 000000000000000000000000000000000000000000000,
        soonimg: "./asset/image/akan-datang.jpg",
        soonTitle: "Akan Datang",
        soonDesc: "Akan Datang “Aroma Segar, Sedap, Tenang & Berzat” Keutamaan kami dalam menghasilkan produk..",
        soonUrl: "http://google.com"
    }
});

var app = new Vue({
    el: "#modal-teh",
    data: {
        pop2img: "./asset/image/teh-thumbnail.webp",
    }
});

var app = new Vue({
    el: "#modal-kopi",
    data: {
        kopiImg: "./asset/image/kopi-thumbnail.webp",
    }
});

var app = new Vue({
    el: "#modal-progest",
    data: {
        progestImg: "./asset/image/progest-thumbnail.webp",
    }
});
var app = new Vue({
    el: "#modal-tanjaq",
    data: {
        tanjaqImg: "./asset/image/tanjaq-thumbnail.webp",

    }
});

var app = new Vue({
    el: "#modal-anas",
    data: {
        anasImg: "./asset/image/anas-thumbnail.webp"
    }
});

var app = new Vue({
    el: "#modal-birliva",
    data: {
        birlivaImg: "./asset/image/birliva-thumbnail.webp",
    }
});

var app = new Vue({
    el: "#modal-suri",
    data: {
        suriImg: "./asset/image/mysuri-thumbnail.webp",
    }
});

var app = new Vue({
    el: "#modal-luzea",
    data: {
        luzeaImg: "./asset/image/luzea-thumbnail.webp",
    }
});

var app = new Vue({
    el: "#modal-vititea",
    data: {
        vititeaImg: "./asset/image/vititea-thumbnail.webp",
    }
});

var app = new Vue({
    el: "#modal-cleanser",
    data: {
        cleanserImg: "./asset/image/cleanser.webp",
    }
});

var app = new Vue({
    el: "#modal-scrub",
    data: {
        scrubImg: "./asset/image/scrub.webp",
    }
});

var app = new Vue({
    el: "#modal-cream",
    data: {
        creamImg: "./asset/image/cc-cream.webp",
    }
});

var app = new Vue({
    el: "#modal-day",
    data: {
        dayImg: "./asset/image/day.webp",
    }
});

var app = new Vue({
    el: "#modal-night",
    data: {
        nightImg: "./asset/image/night.webp",
    }
});

var app = new Vue({
    el: "#modal-age",
    data: {
        ageImg: "./asset/image/age.webp",
    }
});

var app = new Vue({
    el: "#modal-spectrum",
    data: {
        specImg: "./asset/image/spectrum.webp",
    }
});

