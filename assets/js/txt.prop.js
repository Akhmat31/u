var skills = {
    net:{
        name:"Network Management",
        desc:"Menguasai fundamental tentang jaringan komputer dan internet seperti TCP/IP, Aplikasi jaringan, remote server dan Mikrotik",
        desc_en: "Master the fundamentals of computer networks and the internet such as TCP/IP, network applications, remote servers and RouterOS.",
    },
    web:{
        name:"Web Developer",
        desc:"Menguasai teknologi dan fundamental dalam pemrograman web, juga suka membuat sebuah plugin kecil sebagai pengisi waktu luang",
        desc_en: "Mastering technology and fundamentals in web programming, also likes to create small plugins to fill spare time"
    },
    adm:{
        name:"Administration",
        desc:"Mampu mengoperasikan software kantor seperti Office dan Google",
        desc_en: "Able and proficient in operating office software such as Office and Google",
    }
}

function setText(id,text){
    const el = document.getElementById(id);
    if(el) el.textContent = text;
}

document.addEventListener("DOMContentLoaded",()=>{

    const skillKeys = Object.keys(skills);

    skillKeys.forEach((key,i)=>{
        const n = i+1;

        var content = `
        Seorang pelajar dari SMK Swasta Roudlotun Nasyiin Beratkulon. Yang suka dan menggemari profesi sebagai web developer sekaligus sebagai Network engineer, selain ahli di bidang IT, pembuat bisa mengoperasikan software-software kantor seperti Word, Excel dan software kantor lainnya.
        `;
        var content_en = "A student at Roudlotun Nasyiin Beratkulon Private Vocational School. I enjoy working as a web developer and network engineer. Besides being an IT expert, I'm also proficient in office software like Word, Excel, and other software.";
        var content_en1 = "I also enjoy other hobbies, such as reading, playing badminton, and gaming when I have time. My personality tends to avoid certain groups, such as toxic hangouts, and I prefer to do things independently.";
        var content1 = `
        Selain itu, saya memiliki hobi lain seperti membaca buku, bermain bulu tangkis, dan bermain game jika ada waktu. Kepribadian saya cenderung menghindari kelompok tertentu seperti tongkrongan toxic, dan cenderung suka melakukan sesuatu secara mandiri
        `;

        var s_notes = "Saya sedang mencari pekerjaan, jika anda menemukan halaman ini, dan jika sesuai dengan apa yang perusahaan anda butuhkan, saya dengan senang hati bisa bekerja sama dengan anda";
        var s_notes_en = "I am looking for a job, if you find this page, and if it fits what your company needs, I would be happy to work with you.";

        setText("d-sa-d", content_en);
        setText("d-sa-d_2", content_en1);
        setText("e-sa-d", s_notes_en);

        setText("d-sa-d_1", content_en);
        setText("d-sa-d_1_2", content_en1);
        setText("e-sa-d_1", s_notes_en);

        // desktop
        setText(`j${n}`,skills[key].name);
        setText(`d${n}`,skills[key].desc_en);

        // mobile
        setText(`j${n}_1`,skills[key].name);
        setText(`d${n}_1`,skills[key].desc_en);
    });

});