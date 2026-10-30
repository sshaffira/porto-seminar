/**
 * ==========================================================================
 * E-PORTOFOLIO JAVASCRIPT
 * Author: Farros Shaffira - PPG Prajabatan Informatika
 * ==========================================================================
 */

// --- Data Mata Kuliah & Topik Artefak ---
const artefakData = {
  sem1: {
    title: "Semester 1",
    description:
      "Fondasi & Konsep - Kumpulan tugas dan artefak dari 6 mata kuliah yang membangun paradigma pendidik profesional.",
    courses: [
      {
        id: "s1-1",
        name: "Computational Thinking",
        icon: "fa-project-diagram",
        topics: [
          {
            title: "Topik 1: Pendalaman Pemahaman Computational Thinking",
            desc: "Memahami konsep dasar Computational Thinking (CT), membedakannya dari ICT, literasi digital, dan Informatika, serta mengenali berbagai miskonsepsi tentang CT.",
            files: [
              { name: "LK 1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1RBsaGouiBlmwo6xq_gfQ4ziy6-JZ0p_I/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1RBsaGouiBlmwo6xq_gfQ4ziy6-JZ0p_I" },
              { name: "LK 2", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1v01Mo0YJ3p8m2Ysi4USHBtFK8hWLfyy3/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1v01Mo0YJ3p8m2Ysi4USHBtFK8hWLfyy3" },
              { name: "LK 3", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1u0-y2fIHpSJJL96-yDTjlfzMzK9F3nPH/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1u0-y2fIHpSJJL96-yDTjlfzMzK9F3nPH" },
              { name: "LK 4", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1rDJu7z1ZUdxJ0O5ak7JYn6IIDQlqNore/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1rDJu7z1ZUdxJ0O5ak7JYn6IIDQlqNore" },
            ],
          },
          {
            title: "Topik 2: CT dalam Problem Solving Persoalan Sehari-hari",
            desc: "Menerapkan CT dalam pemecahan masalah sehari-hari melalui proses menggali, menstrukturkan, dan mengomunikasikan cara berpikir dalam menyelesaikan persoalan.",
            files: [
              { name: "LK 5", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1YNVRYlZ5dIBh0A-ZRQM-mQKHTKkJOg0S/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1YNVRYlZ5dIBh0A-ZRQM-mQKHTKkJOg0S" },
              { name: "Bebras", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1kD76hUZGfPycjpG_nO75T7YIpdx6AmoY/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1kD76hUZGfPycjpG_nO75T7YIpdx6AmoY" },
            ],
          },
          {
            title: "Topik 3: CT dalam Problem Solving pada Literasi dan Numerasi",
            desc: "Menerapkan CT dalam pemecahan masalah literasi dan numerasi melalui analisis soal PISA/AKM serta mengomunikasikan alur berpikir dalam menemukan solusi.",
            files: [
              { name: "LK 6", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1DNiG5bIPNtcC9XCKUdAxop3uGoWH3S3Y/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1DNiG5bIPNtcC9XCKUdAxop3uGoWH3S3Y" },
              { name: "LK 7", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1obI8kC3wvMeIWav9ukd9fd2-Kc_UMOBI/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1obI8kC3wvMeIWav9ukd9fd2-Kc_UMOBI" },
              { name: "Refleksi", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1K3Lyeg2JqY2c6VTWPrTAH7p1s0SS0toK/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1K3Lyeg2JqY2c6VTWPrTAH7p1s0SS0toK" },
            ],
          },
          {
            title: "Topik 4: CT dalam Kurikulum",
            desc: "Mengeksplorasi penerapan CT dalam Kurikulum Merdeka, posisi CT dalam tatanan global, serta Capaian Pembelajaran CT pada setiap fase.",
            files: [
              { name: "LK 8", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1k5RJyCo_dWa-T68NE0LRgxFEhNnQg8k6/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1k5RJyCo_dWa-T68NE0LRgxFEhNnQg8k6" },
              { name: "LK 9", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1f9EdwUFY_t8qioQ0rxr6ayabD7L8wsnU/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1f9EdwUFY_t8qioQ0rxr6ayabD7L8wsnU" },
              { name: "LK 10", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1OOtD9oGFtolZKLJcjy4AplVqC3Fm3Vvp/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1OOtD9oGFtolZKLJcjy4AplVqC3Fm3Vvp" },
            ],
          },
          {
            title: "Topik 5: CT dan Projek",
            desc: "Mengintegrasikan CT dalam projek STEM/STEAM melalui perancangan ulang projek agar memuat konsep dan praktik CT secara terpadu.",
            files: [
              { name: "LK 11", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Pw1VDwbGw6bY6-kRdyOPn_8HmfUbt_f6/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Pw1VDwbGw6bY6-kRdyOPn_8HmfUbt_f6" },
              { name: "LK 12", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1eOpP9LUZnJgG1MUTO5WUWT47yK58IXKk/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1eOpP9LUZnJgG1MUTO5WUWT47yK58IXKk" },
              { name: "LK 13", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/11qJQZBAXES0mS1DpZfntX8Lprr-jvB7G/view", downloadUrl: "https://drive.google.com/uc?export=download&id=11qJQZBAXES0mS1DpZfntX8Lprr-jvB7G" },
              { name: "LK 14", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/10TUqxYGvo7vvodVguG1w4JiCMb4kAmxP/view", downloadUrl: "https://drive.google.com/uc?export=download&id=10TUqxYGvo7vvodVguG1w4JiCMb4kAmxP" },
              { name: "Refleksi", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1CM5LTGnPdfGtS5jRRvghKju3Q71A0Iv1/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1CM5LTGnPdfGtS5jRRvghKju3Q71A0Iv1" },
            ],
          },
          {
            title: "Topik 6: Integrasi CT dalam Mata Pelajaran",
            desc: "Merancang dan mengimplementasikan integrasi CT ke dalam satu atau beberapa topik mata pelajaran sesuai jenjang dan bidang yang diminati.",
            files: [
              { name: "LK 15", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1e_kSMtpiwHh2xWDa2i1D1_Lh368Bv3wi/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1e_kSMtpiwHh2xWDa2i1D1_Lh368Bv3wi" },
              { name: "LK 16", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1dEIMLI70ftiLmIWFF13k95o7XI70JITi/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1dEIMLI70ftiLmIWFF13k95o7XI70JITi" },
              { name: "LK 17", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1NUU1-4E8aCsun6kYdl0qxygDoFhmcI1Y/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1NUU1-4E8aCsun6kYdl0qxygDoFhmcI1Y" },
              { name: "LK 18", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1cq7vag3MsXvgJ5WfwEDywv-tqGHPJiVl/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1cq7vag3MsXvgJ5WfwEDywv-tqGHPJiVl" },
              { name: "Refleksi", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Yu8fTqJjAp8sLmfuH03X9ZKpzcYeGZoK/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Yu8fTqJjAp8sLmfuH03X9ZKpzcYeGZoK" },
            ],
          },
          {
            title: "Topik 7: Restrukturisasi Portofolio",
            desc: "Merefleksikan dan merestrukturisasi portofolio pembelajaran CT serta mempresentasikan hasilnya melalui kegiatan pameran dan penilaian.",
            files: [
              { name: "Portofolio", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/11tZDhdxSG5_ee0eACGDqC3IfMKKfNy7N/view", downloadUrl: "https://drive.google.com/uc?export=download&id=11tZDhdxSG5_ee0eACGDqC3IfMKKfNy7N" },
            ],
          },
          {
            title: "Refleksi",
            desc: "Refleksi proses dan hasil pembelajaran untuk mengevaluasi pemahaman dan menentukan tindak lanjut.",
            files: [
              { name: "Refleksi", type: "PDF / Refleksi", viewUrl: "https://drive.google.com/file/d/1zd3s9-w0336RzauQE0zBw2vY7jn1p-SF/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1zd3s9-w0336RzauQE0zBw2vY7jn1p-SF" },
            ],
          },
        ],
      },
      {
        id: "s1-2",
        name: "Filosofi Pendidikan dan Pendidikan Nilai",
        icon: "fa-landmark",
        topics: [
          {
            title: "Topik 1: Landasan Filosofi Pendidikan Nasional",
            desc: "Telaah filosofi pendidikan Indonesia berdasarkan pemikiran Ki Hadjar Dewantara dan Filsafat Pancasila untuk mewujudkan pembelajaran yang berpusat pada peserta didik.",
            files: [
              { name: "LK 1D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1tNsy0MjVA-UkJZdxT8Kd9-vcpac9994D/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1tNsy0MjVA-UkJZdxT8Kd9-vcpac9994D" },
              { name: "LK 1E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1VwCeDWP3Z5sfdi1Mtka-nJfmbM8B8G8D/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1VwCeDWP3Z5sfdi1Mtka-nJfmbM8B8G8D" },
            ],
          },
          {
            title: "Topik 2: Pola Pikir Bertumbuh Dalam Pendidikan Nasional",
            desc: "Eksplorasi pola pikir bertumbuh dalam proses belajar dan keterkaitannya dengan kerangka pendidikan nasional.",
            files: [
              { name: "LK 2C.A", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Fe_gowS91AiGo73OlKtbdELSBBdaKCf-/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Fe_gowS91AiGo73OlKtbdELSBBdaKCf-" },
              { name: "LK 2C.B", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1El5Qb6QFpLoDvS3Svp9w5cUkQNaCVhhS/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1El5Qb6QFpLoDvS3Svp9w5cUkQNaCVhhS" },
              { name: "LK 2D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1uGk17ucPtyCv0CcVidHdfxwSH-UuQyQT/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1uGk17ucPtyCv0CcVidHdfxwSH-UuQyQT" },
              { name: "LK 2E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/11tU5FCiH34k3BXepumTsjQUNCogIOFlg/view", downloadUrl: "https://drive.google.com/uc?export=download&id=11tU5FCiH34k3BXepumTsjQUNCogIOFlg" },
            ],
          },
          {
            title: "Topik 3: Pendidikan Nilai dalam Kerangka Pendidikan Nasional",
            desc: "Telaah pendidikan nilai sebagai pondasi karakter bangsa melalui strategi internalisasi nilai dan pengembangan diri guru sebagai role model.",
            files: [
              { name: "LK 3C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1tQ_vH7sKKDNN9nx_ck69BE9y7gBGWzIQ/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1tQ_vH7sKKDNN9nx_ck69BE9y7gBGWzIQ" },
              { name: "LK 3D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1UH-1Z7vxLueEIWP_ODiJ3i8vBEwTGocu/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1UH-1Z7vxLueEIWP_ODiJ3i8vBEwTGocu" },
              { name: "LK 3E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1PWmkHc2X32ZrvxqSbEYa5xmG-nhwhgml/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1PWmkHc2X32ZrvxqSbEYa5xmG-nhwhgml" },
            ],
          },
          {
            title: "Topik 4: Kode Etik Guru",
            desc: "Telaah kode etik profesi sebagai landasan perilaku profesional guru serta komitmen dalam penerapannya secara etis dan konsisten.",
            files: [
              { name: "Aktivitas 4.3", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1JEy-hsK_AqvXFhZrk6bVIFS1eQoWn8Pe/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1JEy-hsK_AqvXFhZrk6bVIFS1eQoWn8Pe" },
              { name: "LK 4D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1K2mwjbZ2LGcRi3yWhhT6vR3eProhO-Mc/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1K2mwjbZ2LGcRi3yWhhT6vR3eProhO-Mc" },
              { name: "LK 4E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1OxnjORfJfgrexyaFuPi4rj6B6rO1QPT0/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1OxnjORfJfgrexyaFuPi4rj6B6rO1QPT0" },
            ],
          },
          {
            title: "Refleksi",
            desc: "Refleksi proses dan hasil pembelajaran untuk mengevaluasi pemahaman dan menentukan tindak lanjut.",
            files: [
              { name: "Refleksi", type: "PDF / Refleksi", viewUrl: "https://drive.google.com/file/d/1vQEigCbhch9mjUSHKpQtGOQq_djnd55u/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1vQEigCbhch9mjUSHKpQtGOQq_djnd55u" },
            ],
          },
        ],
      },
      {
        id: "s1-3",
        name: "Pembelajaran Mendalam dan Asesmen (Dasar)",
        icon: "fa-chalkboard-teacher",
        topics: [
          {
            title: "Topik 1: Pendekatan Pembelajaran Mendalam",
            desc: "Eksplorasi konsep, prinsip, karakteristik, dan strategi pembelajaran mendalam serta perbedaannya dengan surface learning.",
            files: [
              { name: "LK 1C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1So94BzcXXYdqbZK-6Y2SYqC6ectvq2sB/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1So94BzcXXYdqbZK-6Y2SYqC6ectvq2sB" },
              { name: "LK 1D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1xqNMJDwJ-8eDvBrqEGkUH9Im_KCMcToI/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1xqNMJDwJ-8eDvBrqEGkUH9Im_KCMcToI" },
              { name: "LK 1E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1ZdNJrSuyYDl6cY_Zt5AhXsjXYgXB3Iiu/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1ZdNJrSuyYDl6cY_Zt5AhXsjXYgXB3Iiu" },
            ],
          },
          {
            title: "Topik 2: Perencanaan Pembelajaran Mendalam",
            desc: "Perancangan pembelajaran mendalam melalui penyelarasan tujuan, aktivitas, dan asesmen pembelajaran.",
            files: [
              { name: "LK 2.5A", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1ezHvlBZaQjK1lX-NHqXcuyBWEPDNNPbT/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1ezHvlBZaQjK1lX-NHqXcuyBWEPDNNPbT" },
              { name: "LK 2.5B", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1OnRW1nCqnxBCVZB-UyuPhI909EgpCgcd/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1OnRW1nCqnxBCVZB-UyuPhI909EgpCgcd" },
              { name: "Aktivitas 2.7", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1RvHbyrherTD9cgXH29iRLEQG25unA-dL/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1RvHbyrherTD9cgXH29iRLEQG25unA-dL" },
            ],
          },
          {
            title: "Topik 3: Implementasi Pembelajaran Mendalam",
            desc: "Implementasi pembelajaran mendalam melalui praktik fasilitasi yang aktif, reflektif, kolaboratif, dan bermakna disertai umpan balik berkelanjutan.",
            files: [
              { name: "Aktivitas 3.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1NXnAJ_IERV1ck5mEvHNBvetm_y6Ar2zq/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1NXnAJ_IERV1ck5mEvHNBvetm_y6Ar2zq" },
              { name: "Aktivitas 3.2", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1HjGSPUE7j12FbkrC0qu2KPy43upcz01B/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1HjGSPUE7j12FbkrC0qu2KPy43upcz01B" },
            ],
          },
          {
            title: "Topik 4: Evaluasi, Refleksi, dan Rencana Tindak Lanjut Pembelajaran Mendalam",
            desc: "Evaluasi pembelajaran mendalam berbasis data melalui refleksi dan perancangan tindak lanjut untuk pengembangan praktik mengajar berkelanjutan.",
            files: [
              { name: "LK 4D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Bawqa6ViSWrNhcI1UoynomjPBKfB4OjL/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Bawqa6ViSWrNhcI1UoynomjPBKfB4OjL" },
            ],
          },
          {
            title: "Refleksi",
            desc: "Refleksi proses dan hasil pembelajaran untuk mengevaluasi pemahaman dan menentukan tindak lanjut.",
            files: [
              { name: "Refleksi", type: "PDF / Refleksi", viewUrl: "https://drive.google.com/file/d/1vQEigCbhch9mjUSHKpQtGOQq_djnd55u/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1vQEigCbhch9mjUSHKpQtGOQq_djnd55u" },
            ],
          },
        ],
      },
      {
        id: "s1-4",
        name: "Pemahaman tentang Peserta Didik dan Pembelajaran",
        icon: "fa-child",
        topics: [
          {
            title: "Topik 1: Memahami Peserta Didik Secara Holistik",
            desc: "Eksplorasi teori perkembangan peserta didik sebagai fondasi perancangan pembelajaran yang relevan dan kontekstual.",
            files: [
              { name: "LK 1A", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1HSx8KdcKOYwYfd7wkxvO23Da0J7-z8tb/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1HSx8KdcKOYwYfd7wkxvO23Da0J7-z8tb" },
              { name: "LK 1B", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/11AzuuYP4qj5xXazBPVObCrQDi0S3L61c/view", downloadUrl: "https://drive.google.com/uc?export=download&id=11AzuuYP4qj5xXazBPVObCrQDi0S3L61c" },
              { name: "LK 1E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1ektkWItbqj6yhR_c_KHwYhwn8B5twJN2/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1ektkWItbqj6yhR_c_KHwYhwn8B5twJN2" },
            ],
          },
          {
            title: "Topik 2: Perbedaan Karakteristik Peserta Didik",
            desc: "Analisis karakteristik peserta didik berdasarkan perbedaan fisik, kognitif, sosial-emosional, bakat, dan minat.",
            files: [
              { name: "LK 2C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1J_nNHAl88OQAkIHWpLiI9hcsIBbd0JJb/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1J_nNHAl88OQAkIHWpLiI9hcsIBbd0JJb" },
              { name: "LK 2D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Poz7NK-_bx8Oqq64RZofsBUMFriAKPZj/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Poz7NK-_bx8Oqq64RZofsBUMFriAKPZj" },
              { name: "LK 2E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1SeyRcfty9t72PmuD03HC5uPDwCkvtZLC/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1SeyRcfty9t72PmuD03HC5uPDwCkvtZLC" },
            ],
          },
          {
            title: "Topik 3: Pembelajaran Berpusat Pada Peserta Didik",
            desc: "Telaah ragam teori belajar sebagai landasan pembelajaran berpusat pada peserta didik yang memuliakan peserta didik.",
            files: [
              { name: "LK 3C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/11MK6ypi7m388OdQbLMjMQfEEORcpe3pt/view", downloadUrl: "https://drive.google.com/uc?export=download&id=11MK6ypi7m388OdQbLMjMQfEEORcpe3pt" },
              { name: "LK 3D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1hFFjmibAGllY46W-b4K5HSVKVas9MADV/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1hFFjmibAGllY46W-b4K5HSVKVas9MADV" },
              { name: "LK 3E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1huuZ9MK0d8orEdo9aBlL8vR77CjwvzSj/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1huuZ9MK0d8orEdo9aBlL8vR77CjwvzSj" },
            ],
          },
          {
            title: "Topik 4: Profiling Pesertda Didik",
            desc: "Pemanfaatan asesmen awal untuk mengidentifikasi kebutuhan belajar dan merancang pembelajaran yang adaptif.",
            files: [
              { name: "LK 4C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/16RgHDzFIBAJH9Xnhi9pLmIAqLEJHj5Ph/view", downloadUrl: "https://drive.google.com/uc?export=download&id=16RgHDzFIBAJH9Xnhi9pLmIAqLEJHj5Ph" },
              { name: "Aktivitas 4A", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Dxht2_7pW0k-o2vGc0OP4xlwzA_2Q0nj/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Dxht2_7pW0k-o2vGc0OP4xlwzA_2Q0nj"},
              { name: "Aktivitas 4B", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1QC3xw52XKAHuH9DRGTE5lTLBjnPARdSh/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1QC3xw52XKAHuH9DRGTE5lTLBjnPARdSh" },
            ],
          },
          {
            title: "Refleksi",
            desc: "Refleksi proses dan hasil pembelajaran untuk mengevaluasi pemahaman dan menentukan tindak lanjut.",
            files: [
              { name: "Refleksi", type: "PDF / Refleksi", viewUrl: "https://drive.google.com/file/d/1Pt-g0yny2w3H4bWbAYgRExK7ZMTRm-x9/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Pt-g0yny2w3H4bWbAYgRExK7ZMTRm-x9" },
            ],
          },
        ],
      },
      {
        id: "s1-5",
        name: "Pola Pikir Bertumbuh (Growth Mindset) dalam Pembelajaran",
        icon: "fa-brain",
        topics: [
          {
            title: "Topik 1: Membentuk Cara Pandang Baru: Pentingnya Memahami Pola Pikir Bertumbuh dalam Dunia Pendidikan",
            desc: "Eksplorasi pola pikir manusia, perbedaan pola pikir tetap dan bertumbuh, serta relevansinya terhadap pendidikan dan hasil PISA Indonesia.",
            files: [
              { name: "LK 1.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1q7nkm0d31wMURvxiUekfngLgjJv21M4N/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1q7nkm0d31wMURvxiUekfngLgjJv21M4N" },
              { name: "LK 1.2", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1AzmSZwlQrSU-EwqDE7uUwVlyklUDDWO1/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1AzmSZwlQrSU-EwqDE7uUwVlyklUDDWO1" },
              { name: "LK 1.3", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1kHemT1fdW4XGKGxQhwLphdIWwTO4Uouc/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1kHemT1fdW4XGKGxQhwLphdIWwTO4Uouc" },
            ],
          },
          {
            title: "Topik 2: Cara Kerja Otak Pada Pola Pikir Bertumbuh",
            desc: "Telaah fungsi otak dan neuroplastisitas serta keterkaitannya dengan pola pikir bertumbuh, kreativitas, inovasi, dan pembelajaran mendalam.",
            files: [
              { name: "LK 2.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1R_heULNiDyYpEeK7ZBhlLnR8L6gDyQtb/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1R_heULNiDyYpEeK7ZBhlLnR8L6gDyQtb" },
              { name: "LK 2.2", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1_xPTDnBdkhzEM0XY97AICPeFbMSy1aQ3/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1_xPTDnBdkhzEM0XY97AICPeFbMSy1aQ3" },
              { name: "LK 2.3", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/17667S6B_0bwP6zhZXFUBj4_6iewccHHX/view", downloadUrl: "https://drive.google.com/uc?export=download&id=17667S6B_0bwP6zhZXFUBj4_6iewccHHX" },
              { name: "LK 2.4", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1o2hMCRDKQNdYKN4wtxMen2H7I9rYSsYg/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1o2hMCRDKQNdYKN4wtxMen2H7I9rYSsYg" },
            ],
          },
          {
            title: "Topik 3: Menumbuhkan dan Mengembangkan Pola Pikir Bertumbuh",
            desc: "Analisis hasil MAP untuk mengembangkan pola pikir bertumbuh melalui pergeseran pola pikir dan perancangan intervensi yang tepat.",
            files: [
              { name: "LK 3.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1XiwxhK3gzO1rrCLotZLG1oJc8dbvV-G3/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1XiwxhK3gzO1rrCLotZLG1oJc8dbvV-G3" },
              { name: "LK 3.2", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1LnuNc0Ns88qO3DNUYYegRgi18w4oDODQ/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1LnuNc0Ns88qO3DNUYYegRgi18w4oDODQ" },
              { name: "LK 3.3", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/14gMs_AFkLi1nWUDvIu2UQ0c-FI1fYlIx/view", downloadUrl: "https://drive.google.com/uc?export=download&id=14gMs_AFkLi1nWUDvIu2UQ0c-FI1fYlIx" },
            ]
          },
          {
            title: "Topik 4: Pola Pikir Bertumbuh dalam Konteks Pembelajaran",
            desc: "Perancangan dan penerapan strategi pola pikir bertumbuh dalam proses pembelajaran di kelas.",
            files: [
              { name: "LK 4.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1VBRd2ImskO7TzIUfJxqfds0urn6p8JSF/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1VBRd2ImskO7TzIUfJxqfds0urn6p8JSF" },
              { name: "LK 4.2", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1ZvA0h1FWqBRJa_9nNSgergc3iI4PnGii/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1ZvA0h1FWqBRJa_9nNSgergc3iI4PnGii" },
              { name: "LK 4.3", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1VBRd2ImskO7TzIUfJxqfds0urn6p8JSF/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1VBRd2ImskO7TzIUfJxqfds0urn6p8JSF" },
            ],
          },
          {
            title: "Refleksi",
            desc: "Refleksi proses dan hasil pembelajaran untuk mengevaluasi pemahaman dan menentukan tindak lanjut.",
            files: [
              { name: "Refleksi", type: "PDF / Refleksi", viewUrl: "https://drive.google.com/file/d/1J0cDnbT62zXqYwXd8NE-ddUHBXSRK1wH/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1J0cDnbT62zXqYwXd8NE-ddUHBXSRK1wH" },
            ],
          },
        ],
      },
      {
        id: "s1-6",
        name: "Praktik Pengalaman Lapangan (PPL) Terbimbing",
        icon: "fa-school",
        topics: [
          {
            title: "Topik 1: Orientasi",
            desc: "Analisis lingkungan fisik, iklim akademik, tata tertib, dan manajemen sekolah mitra PPL.",
            files: [
              { name: "LK 1 Laporan Hasil Orientasi", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1PW6_WeZ_4RKZCUx4oMqDJUcWCs9Tfk7l/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1PW6_WeZ_4RKZCUx4oMqDJUcWCs9Tfk7l" }
            ],
          },
          {
            title: "Topik 2: Observasi",
            desc: "Pendampingan penyusunan perangkat ajar, lembar kerja peserta didik, dan media pembelajaran interaktif.",
            files: [
              { name: "LK 2 Observasi Lingkungan Belajar", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1IkCSXXsbp2guHc8JaIsNXQNU7FnnLbPP/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1IkCSXXsbp2guHc8JaIsNXQNU7FnnLbPP" }
            ],
          },
          {
            title: "Topik 3: Asistensi Mengajar",
            desc: "Pelaksanaan siklus pengajaran terbimbing di kelas nyata disertai evaluasi dan refleksi berkala.",
            files: [
              { name: "LK 3 Refleksi Pembelajaran", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1nleSqB1Xb-NPBJjuHADZ1sQ_9w-qzF-c/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1nleSqB1Xb-NPBJjuHADZ1sQ_9w-qzF-c" },
            ],
          },
          {
            title: "Topik 4: Pembelajaran Terbimbing",
            desc: "Pelaksanaan siklus pengajaran terbimbing di kelas nyata disertai evaluasi dan refleksi berkala.",
            files: [
              { name: "Modul Ajar (Siklus 1)", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1iomInMq4-hTEHKIWMPdr4AgNt9SfIcZz/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1iomInMq4-hTEHKIWMPdr4AgNt9SfIcZz" },
              { name: "Modul Ajar (Siklus 2)", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1_hibmoKO2NTDVI6FbXxYLKffmQkEy5X4/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1_hibmoKO2NTDVI6FbXxYLKffmQkEy5X4" },
              { name: "Modul Ajar (Siklus 3)", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1LjmXqCzm-W6kRdnG3lL1QlP5UHs9Jt3s/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1LjmXqCzm-W6kRdnG3lL1QlP5UHs9Jt3s" },
              { name: "LK 4 Refleksi Siklus 1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1OSf5SjrNH1zeH4s_yRhbtB-cbi_3YkAz/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1OSf5SjrNH1zeH4s_yRhbtB-cbi_3YkAz" },
              { name: "LK 4 Refleksi Siklus 2", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1gEgev72rmFgpXWf8VIgzrbSbhwVSF3FC/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1gEgev72rmFgpXWf8VIgzrbSbhwVSF3FC" },
              { name: "LK 4 Refleksi Siklus 3", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/14iEcYrEGM4NmiOzzK24jqWTyzHY5InJN/view", downloadUrl: "https://drive.google.com/uc?export=download&id=14iEcYrEGM4NmiOzzK24jqWTyzHY5InJN" },
            ],
          },
          {
            title: "Refleksi",
            desc: "Pelaksanaan siklus pengajaran terbimbing di kelas nyata disertai evaluasi dan refleksi berkala.",
            files: [
              { name: "Refleksi", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1dVhmtWlMw2yWVvecP93oFSemZDaSM_vr/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1dVhmtWlMw2yWVvecP93oFSemZDaSM_vr" },
            ],
          },
        ],
      },
    ],
  },
  sem2: {
    title: "Semester 2",
    description:
      "Penerapan & Inovasi - Kumpulan tugas dan artefak dari 5 mata kuliah fokus pada implementasi dan praktik mengajar nyata.",
    courses: [
      {
        id: "s2-1",
        name: "Etika dan Profesionalisme Guru",
        icon: "fa-user-tie",
        topics: [
          {
            title: "Topik 1: Karakter Luhur Guru (Kepribadian dan Sosial)",
            desc: "Analisis karakter luhur guru, dilema etis dalam pendidikan, serta penerapan karakter dalam Praktik Pengalaman Lapangan (PPL).",
            files: [
              { name: "LK 1A", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1e6vfYxnWgouZpmjo2Pv9_xcBLOkZL7nc/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1e6vfYxnWgouZpmjo2Pv9_xcBLOkZL7nc" },
              { name: "LK 1B", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1j0gPnbHRxfl4IQglq766Xp_Msto-P8Ua/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1j0gPnbHRxfl4IQglq766Xp_Msto-P8Ua" },
              { name: "LK 1C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1NEABmz_mBqH3aavMCgw8KPyhtdHBPGWX/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1NEABmz_mBqH3aavMCgw8KPyhtdHBPGWX" },
              { name: "LK 1D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1pZaUAo1LCHcch4Im8g82ep4EHcJi0pEe/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1pZaUAo1LCHcch4Im8g82ep4EHcJi0pEe" },
              { name: "LK 1E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1gqN4JFIO0-IVkTLt3YwfL0O0mMfDS7ud/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1gqN4JFIO0-IVkTLt3YwfL0O0mMfDS7ud" },
            ],
          },
          {
            title: "Topik 2: Profil Guru Profesional",
            desc: "Analisis keterkaitan kompetensi profesional dan pedagogik, penerapan PCK dalam pembelajaran, serta etika dan tanggung jawab profesi guru.",
            files: [
              { name: "LK 2A", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1W_PR2mmkrv9hU4Y4zJ1GzI6_zXkPxY5V/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1W_PR2mmkrv9hU4Y4zJ1GzI6_zXkPxY5V" },
              { name: "LK 2B", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1C0D7nBQJVYCQ7dq--VMyevuTqEu_gpSr/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1C0D7nBQJVYCQ7dq--VMyevuTqEu_gpSr" },
              { name: "LK 2C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1qlfJqmtV0serzgkhtbUDcoWJYkmA0QF2/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1qlfJqmtV0serzgkhtbUDcoWJYkmA0QF2" },
              { name: "LK 2D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1C3CrHQQxXmVQ5SIJPP7MIZyhd8ngHFpA/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1C3CrHQQxXmVQ5SIJPP7MIZyhd8ngHFpA" },
              { name: "LK 2E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1iLwqzQsPwPsXoAOBzvp7ghakuwNoO458/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1iLwqzQsPwPsXoAOBzvp7ghakuwNoO458" },
            ],
          },
          {
            title: "Topik 3: Kompetensi Guru Abad 21 (4C dan Literasi Digital)",
            desc: "Menganalisis literasi digital dan keterampilan 4C serta merancang dan mengomunikasikan gagasan inovatif untuk memecahkan masalah pendidikan.",
            files: [
              { name: "LK 3A", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Ubo2ZVzxX43FmEJAKnPTpEaMbCF8yRP5/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Ubo2ZVzxX43FmEJAKnPTpEaMbCF8yRP5" },
              { name: "LK 3B", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1I8GbrhKMY8Thwft89LlG-SykKQvjUh3V/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1I8GbrhKMY8Thwft89LlG-SykKQvjUh3V" },
              { name: "LK 3C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1KkmD0TpMwVEu4i6N1lqCeiPIIcBHdABl/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1KkmD0TpMwVEu4i6N1lqCeiPIIcBHdABl" },
              { name: "LK 3D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/13ZlX_2qyENDbFPqqeZCMQ00ZBzv8DoY5/view", downloadUrl: "https://drive.google.com/uc?export=download&id=13ZlX_2qyENDbFPqqeZCMQ00ZBzv8DoY5" },
              { name: "LK 3E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1poZJ-UeqDcYHzqa24tUQ05mxCl8mxT7I/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1poZJ-UeqDcYHzqa24tUQ05mxCl8mxT7I" },
            ],
          },
          {
            title: "Topik 4: Guru Sebagai Pembelajar Sepanjang Hayat",
            desc: "Menganalisis dan merancang pengembangan kompetensi guru profesional melalui pola pikir bertumbuh, pembelajaran sepanjang hayat, dan kolaborasi.",
            files: [
              { name: "LK 4A", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1pNYXja7chq6sCDbgtMtZagnQtXhSf-YL/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1pNYXja7chq6sCDbgtMtZagnQtXhSf-YL" },
              { name: "LK 4B", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1_yiJsnYH2l0rO5SuZWgkIpmfAtjrg-ud/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1_yiJsnYH2l0rO5SuZWgkIpmfAtjrg-ud" },
              { name: "LK 4C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Ly7jzNCAJQBcu-4DfrSVlufDVJB3KyRM/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Ly7jzNCAJQBcu-4DfrSVlufDVJB3KyRM" },
              { name: "LK 4D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1_OmQLDP27KCm2hqBZXEDQgUJNkrfk1bd/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1_OmQLDP27KCm2hqBZXEDQgUJNkrfk1bd" },
              { name: "LK 4E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Q4UC_3lbxdM46chfQAkD6OwMB-8QgMoG/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Q4UC_3lbxdM46chfQAkD6OwMB-8QgMoG" },
            ],
          },
          {
            title: "Topik 5: Pembelajaran Mendalam dan Berdampak",
            desc: "Menganalisis, merancang, melaksanakan, dan mengevaluasi pembelajaran mendalam melalui keselarasan tujuan, aktivitas, asesmen, serta refleksi berbasis bukti.",
            files: [
              { name: "LK 5A", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1N8ZjXvLvfeLF4e7K3ufEg9oi00dSFp34/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1N8ZjXvLvfeLF4e7K3ufEg9oi00dSFp34" },
              { name: "LK 5B", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1M8SV-X6g3o0wn7THFEehY_77TSke4mO6/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1M8SV-X6g3o0wn7THFEehY_77TSke4mO6" },
              { name: "LK 5C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Q4EQymlXyJ3cp-jN0Avlyun6zVTzX1ST/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Q4EQymlXyJ3cp-jN0Avlyun6zVTzX1ST" },
              { name: "LK 5D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/14HJAhA1QMVjV_0NHcS20Ash2ebbcyi8k/view", downloadUrl: "https://drive.google.com/uc?export=download&id=14HJAhA1QMVjV_0NHcS20Ash2ebbcyi8k" },
              { name: "LK 5E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1NXLJbWssrtB9PxmGkbTHXbD3dO_Xb3EH/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1NXLJbWssrtB9PxmGkbTHXbD3dO_Xb3EH" },
            ],
          },
          {
            title: "Refleksi",
            desc: "Refleksi proses dan hasil pembelajaran untuk mengevaluasi pemahaman dan menentukan tindak lanjut.",
            files: [
              { name: "Refleksi", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1YJswjTN8urgqkcoK4S8tNYFiFxEJyFst/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1YJswjTN8urgqkcoK4S8tNYFiFxEJyFst" },
            ],
          },
        ],
      },
      {
        id: "s2-2",
        name: "Pembelajaran Mendalam dan Asesmen Lanjut",
        icon: "fa-chalkboard-teacher",
        topics: [
          {
            title: "Topik 1: Asesmen Awal Pembelajaran Mendalam",
            desc: "Menganalisis karakteristik dan kebutuhan belajar murid berdasarkan asesmen awal untuk merancang pembelajaran mendalam yang holistik dan inklusif.",
            files: [
              { name: "1C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1xGWocSS1Pj-OlpDID8Xxk74GM3UFRQXu/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1xGWocSS1Pj-OlpDID8Xxk74GM3UFRQXu" },
            ],
          },
          {
            title: "Topik 2: Penerapan Pembelajaran Mendalam dengan Menggunakan Kerangka Kerja Desain Universal untuk Pembelajaran",
            desc: "Merancang dan menerapkan pembelajaran mendalam melalui pendekatan Desain Universal untuk Pembelajaran yang mengakomodasi keberagaman kebutuhan murid.",
            files: [
              { name: "2C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/16p8VrtaS2a3H3UwfmD_7Ngv17YdO1ptl/view", downloadUrl: "https://drive.google.com/uc?export=download&id=16p8VrtaS2a3H3UwfmD_7Ngv17YdO1ptl" },
            ],
          },
          {
            title: "Topik 3: Pembelajaran Mendalam melalui Pendekatan Teaching at The Right Level",
            desc: "Menerapkan pendekatan TaRL dalam merancang dan melaksanakan pembelajaran sesuai tingkat kemampuan dan kebutuhan belajar murid berdasarkan asesmen awal.",
            files: [
              { name: "3C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1wMVa_ljbHILYRVCF-NvC-jOELkVLCmCF/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1wMVa_ljbHILYRVCF-NvC-jOELkVLCmCF" },
            ],
          },
          {
            title: "Topik 4: Pembelajaran Mendalam melalui Culturally Responsive Teaching",
            desc: "Menerapkan pendekatan CRT untuk mewujudkan pembelajaran mendalam yang inklusif, adil, dan bermakna dengan menghargai keberagaman budaya serta latar belakang murid.",
            files: [
              { name: "4C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/19rj3I9USujmx-30j-_vwbpJlHymECVV_/view", downloadUrl: "https://drive.google.com/uc?export=download&id=19rj3I9USujmx-30j-_vwbpJlHymECVV_" },
            ],
          },
          {
            title: "Topik 5: Pengolahan dan Pemanfaatan Hasil Asesmen pada Pembelajaran Mendalam",
            desc: "Mengolah dan menganalisis data hasil belajar murid untuk merumuskan rekomendasi tindak lanjut pembelajaran yang tepat.Penciptaan iklim kelas yang ramah anak, suportif, dan meningkatkan well-being seluruh peserta didik.",
            files: [
              { name: "LK 5.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/12NsIa-Yk5x_ICoxeJ9n7CY-Qq8u2Hg4I/view", downloadUrl: "https://drive.google.com/uc?export=download&id=12NsIa-Yk5x_ICoxeJ9n7CY-Qq8u2Hg4I" },
            ],
          },
          {
            title: "Refleksi",
            desc: "Refleksi proses dan hasil pembelajaran untuk mengevaluasi pemahaman dan menentukan tindak lanjut.",
            files: [
              { name: "Refleksi", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1H204cPT_ZkR73mkL3-v2Y6sh-LbjdVUk/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1H204cPT_ZkR73mkL3-v2Y6sh-LbjdVUk" },
            ],
          },
        ],
      },
      {
        id: "s2-3",
        name: "Pembelajaran Sosial Emosional",
        icon: "fa-heart",
        topics: [
          {
            title: "Topik 1: Pembelajaran Sosial Emosional Berdasar Kerangka Collaborative For Academic, Social, and Emotional Learning (CASEL)",
            desc: "Menganalisis faktor-faktor yang memengaruhi pembelajaran sosial emosional serta peran guru dalam mengembangkan kompetensi PSE di sekolah.",
            files: [
              { name: "LK 1B", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/15XFtRsRwfc3CuKrI1id3TLcQHhsmKZ_T/view", downloadUrl: "https://drive.google.com/uc?export=download&id=15XFtRsRwfc3CuKrI1id3TLcQHhsmKZ_T" },
              { name: "LK 1C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1NjC8Et6Ilobe_xrEdlvEcteNmx4BzrgX/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1NjC8Et6Ilobe_xrEdlvEcteNmx4BzrgX" },
              { name: "LK 1D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1EbwdLce4gIKLp-Ef2LXaC9SxxtZu49Ns/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1EbwdLce4gIKLp-Ef2LXaC9SxxtZu49Ns" },
              { name: "LK 1E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1YyWEKj2ayfc92nrRw5-pFKCiF6AzcYhY/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1YyWEKj2ayfc92nrRw5-pFKCiF6AzcYhY" },
            ],
          },
          {
            title: "Topik 2: Peran Guru Sebagai Teladan",
            desc: "Menganalisis peran guru sebagai teladan, mengembangkan kompetensi sosial emosional diri, serta merancang pembelajaran berbasis PSE.",
            files: [
              { name: "LK 2.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/19baHg7DYz15XRc9u8Q5Ckd0aS0SLEC3K/view", downloadUrl: "https://drive.google.com/uc?export=download&id=19baHg7DYz15XRc9u8Q5Ckd0aS0SLEC3K" },
              { name: "LK 2.2", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1IHY7tJDLSKcrRCWPjxyPwQv3R2nlw9mm/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1IHY7tJDLSKcrRCWPjxyPwQv3R2nlw9mm" },
              { name: "LK 2.3", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1kbpUlQ2dMgWUhwOP4ap1EX_nSBr6vnBs/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1kbpUlQ2dMgWUhwOP4ap1EX_nSBr6vnBs" },
              { name: "LK 2E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Dtj6bUXnwabe_vFzIkQuOVIjFR-FJqf9/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Dtj6bUXnwabe_vFzIkQuOVIjFR-FJqf9" },
            ],
          },
          {
            title: "Topik 3: Experiential Learning untuk Pembelajaran Sosial Emosional",
            desc: "Merancang, mempraktikkan, dan mengevaluasi pembelajaran sosial emosional berbasis experiential learning melalui kolaborasi dengan guru dan orang tua.",
            files: [
              { name: "LK 3A", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/182Yx3ortpXFXwkR_tfhCsQXiQotOrKl_/view", downloadUrl: "https://drive.google.com/uc?export=download&id=182Yx3ortpXFXwkR_tfhCsQXiQotOrKl_" },
              { name: "LK 3B", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1MzHPRU2v5r5v7nhNGwVgHlZSBkj05Cbg/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1MzHPRU2v5r5v7nhNGwVgHlZSBkj05Cbg" },
              { name: "LK 3C", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1KwMNSzXMU4iUf3Kb0nNCmWXX4-UDA6u3/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1KwMNSzXMU4iUf3Kb0nNCmWXX4-UDA6u3" },
              { name: "LK 3D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/19mwBM2Yg5qatCf4-QlYWLLywroadaPGU/view", downloadUrl: "https://drive.google.com/uc?export=download&id=19mwBM2Yg5qatCf4-QlYWLLywroadaPGU" },
            ],
          },
          {
            title: "Topik 4: School Wellbeing",
            desc: "Menganalisis dan mengembangkan pembelajaran sosial emosional untuk menciptakan school well-being di lingkungan sekolah.",
            files: [
              { name: "LK 4.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1UBVxu3sEHjLM53REVxzJtzXkKmgBUSx7/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1UBVxu3sEHjLM53REVxzJtzXkKmgBUSx7" },
              { name: "LK 4.2", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/15HlwdAS8qTPJtZ9yPoN-2_s_6GP0Sz2e/view", downloadUrl: "https://drive.google.com/uc?export=download&id=15HlwdAS8qTPJtZ9yPoN-2_s_6GP0Sz2e" },
              { name: "LK 4.3", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1WSupQ5Tim_IAXLjwW_9-MezeGeKcArjV/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1WSupQ5Tim_IAXLjwW_9-MezeGeKcArjV" },
              { name: "LK 4D", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1l_fQ6c4JA_7KqhxYI150Gev2A8JjSSwi/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1l_fQ6c4JA_7KqhxYI150Gev2A8JjSSwi" },
              { name: "LK 4E", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1JSl_YTSPSjtNemh6uz_5pCaJpXJOpzEz/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1JSl_YTSPSjtNemh6uz_5pCaJpXJOpzEz" },
            ],
          },
          {
            title: "Refleksi",
            desc: "Refleksi proses dan hasil pembelajaran untuk mengevaluasi pemahaman dan menentukan tindak lanjut.",
            files: [
              { name: "Refleksi", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1qCbzcHgc2Mbh1RDC1iq5hz6myQcb0ZBN/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1qCbzcHgc2Mbh1RDC1iq5hz6myQcb0ZBN" },
            ],
          },
        ],
      },
      {
        id: "s2-4",
        name: "Praktik Pengalaman Lapangan (PPL) Mandiri",
        icon: "fa-school",
        topics: [
          {
            title: "Topik 1: Orientasi",
            desc: "Penyusunan arsitektur portofolio digital berbasis artefak bukti belajar autentik.",
            files: [
              { name: "LK 1 Orientasi", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1ayz4n0zQV3_F4V_bL52npb4vlqEjjTQN/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1ayz4n0zQV3_F4V_bL52npb4vlqEjjTQN" },
            ],
          },
          {
            title: "Topik 2: Observasi",
            desc: "Penyusunan narasi reflektif 5 siklus ALACT terhadap pengalaman pembelajaran paling bermakna.",
            files: [
              { name: "LK 2 Observasi", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1kNN3QyR7-9vvDndhbdgvCTmYqDJjYFt1/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1kNN3QyR7-9vvDndhbdgvCTmYqDJjYFt1" },
            ],
          },
          {
            title: "Topik 3: Praktik Terbimbing",
            desc: "Presentasi hasil karya inovasi dan refleksi diri di hadapan dosen pembimbing dan penguji.",
            files: [
              { name: "LK 3", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1ZIoqmB-gWxtrGjlroTAHyN43u3rP4s1G/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1ZIoqmB-gWxtrGjlroTAHyN43u3rP4s1G" },
              { name: "Modul Ajar Praktik Mengajar Terbimbing", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1At6z_coHedpZB-v0r8nxZSZuAlaVodqF/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1At6z_coHedpZB-v0r8nxZSZuAlaVodqF" },
            ],
          },
          {
            title: "Topik 4: Pembelajaran Mandiri dan Non Mengajar",
            desc: "Presentasi hasil karya inovasi dan refleksi diri di hadapan dosen pembimbing dan penguji.",
            files: [
              { name: "LK 4.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Fp5C1nD1zYoyHxD4bSSylb2to1axFyBf/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Fp5C1nD1zYoyHxD4bSSylb2to1axFyBf" },
              { name: "LK 4.2", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Fp5C1nD1zYoyHxD4bSSylb2to1axFyBf/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Fp5C1nD1zYoyHxD4bSSylb2to1axFyBf" },
              { name: "LK 4.3", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/15jGP4OOtA-vOsv9GuUFIDLhHCIg7GjAG/view", downloadUrl: "https://drive.google.com/uc?export=download&id=15jGP4OOtA-vOsv9GuUFIDLhHCIg7GjAG" },
              { name: "LK 4.4", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Ae72_BCaLqpKGTtwyJAFj2Nvv3beAqAo/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Ae72_BCaLqpKGTtwyJAFj2Nvv3beAqAo" },
              { name: "Modul Ajar Siklus 1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1r6AhyhWh3vzF7fMhYZ8v-o6G7wl48orq/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1r6AhyhWh3vzF7fMhYZ8v-o6G7wl48orq" },
              { name: "Modul Ajar Siklus 2", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/125kWvyBYyzRFEChjjEFDo6Q-EbTJm7Ew/view", downloadUrl: "https://drive.google.com/uc?export=download&id=125kWvyBYyzRFEChjjEFDo6Q-EbTJm7Ew" },
              { name: "Modul Ajar Siklus 3", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1-3uLvBNKeHYB43VXVCOnm3IxQr8i9Q3R/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1-3uLvBNKeHYB43VXVCOnm3IxQr8i9Q3R" },
              { name: "Modul Ajar Siklus 4", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1lPhnWbwD1W5SKLao_xkt46PRNkJy1f4d/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1lPhnWbwD1W5SKLao_xkt46PRNkJy1f4d" },
            ],
          },
          {
            title: "Refleksi",
            desc: "Refleksi proses dan hasil pembelajaran untuk mengevaluasi pemahaman dan menentukan tindak lanjut.",
            files: [
              { name: "Refleksi", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1B4JHZGnPIebKAmAuugyKDFaIDqg3TRl0/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1B4JHZGnPIebKAmAuugyKDFaIDqg3TRl0" },
            ],
          },
        ],
      },
      {
        id: "s2-5",
        name: "Proyek Kepemimpinan",
        icon: "fa-users-cog",
        topics: [
          {
            title: "Bab 1: Visi Guru Profesional",
            desc: "Investigasi potensi masalah dan kebutuhan riil masyarakat atau sekolah sasaran program pengabdian.",
            files: [
              { name: "Tugas 1.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1o-YOtFaSEkhbAsIMnWMJqSvdG3u5iTEg/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1o-YOtFaSEkhbAsIMnWMJqSvdG3u5iTEg" },
              { name: "Tugas 2.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1Qcu0s-gc8GRqNZuvkjez7fdKfUlKxT50/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1Qcu0s-gc8GRqNZuvkjez7fdKfUlKxT50" },
            ],
          },
          {
            title: "Bab 2: Perencanaan Projek Kepemimpinan",
            desc: "Penyusunan proposal, Work Breakdown Structure (WBS), alokasi sumber daya, dan mitigasi risiko.",
            files: [
              { name: "Tugas 4.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1MDyNbKwkLuumWgpHzwp1DgYhhx6u40dh/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1MDyNbKwkLuumWgpHzwp1DgYhhx6u40dh" },
              { name: "Tugas 5.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/14WcmWNWLfUehSdU7Y-Wt0FFP0F37SQ_o/view", downloadUrl: "https://drive.google.com/uc?export=download&id=14WcmWNWLfUehSdU7Y-Wt0FFP0F37SQ_o" },
              { name: "Tugas 6.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/15-HQXzmt8YHIxzqjE3wpeeLRLDzY_FpY/view", downloadUrl: "https://drive.google.com/uc?export=download&id=15-HQXzmt8YHIxzqjE3wpeeLRLDzY_FpY" },
            ],
          },
          {
            title: "Bab 3: Projek Monitoring, Evaluasi, Laporan Akhir, Refleksi",
            desc: "Implementasi aksi lapangan dan pengukuran ketercapaian target serta keberlanjutan program.",
            files: [
              { name: "Tugas 8.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1rgfNfA6rb8sa01QAF2ZfyL9wTh1m1oU1/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1rgfNfA6rb8sa01QAF2ZfyL9wTh1m1oU1" },
              { name: "Tugas 9.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/18PQWgIlcJ5UvBrwuLiM77Mz_LA05WXF9/view", downloadUrl: "https://drive.google.com/uc?export=download&id=18PQWgIlcJ5UvBrwuLiM77Mz_LA05WXF9" },
              { name: "Tugas 10.1", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1tsP6-NvVkBk_XrVTd-r4BgHHGBOnk0zN/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1tsP6-NvVkBk_XrVTd-r4BgHHGBOnk0zN" },
            ],
          },
          {
            title: "Refleksi",
            desc: "Refleksi proses dan hasil pembelajaran untuk mengevaluasi pemahaman dan menentukan tindak lanjut.",
            files: [
              { name: "Refleksi", type: "PDF / Dokumen", viewUrl: "https://drive.google.com/file/d/1RwySV7QvPz508xd4V0baFa7WxHsZOOhU/view", downloadUrl: "https://drive.google.com/uc?export=download&id=1RwySV7QvPz508xd4V0baFa7WxHsZOOhU" },
            ]
          },
        ],
      },
    ],
  },
};

let currentSemester = "sem1";

// --- Mobile Menu Toggle ---
document.addEventListener("DOMContentLoaded", () => {
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // --- Typing Effect (Home Page) ---
  const typingElement = document.getElementById("typed-text");

  if (typingElement) {
    const textToType = "Mahasiswa Calon Guru 2026";
    let typeIndex = 0;

    function type() {
      if (typeIndex < textToType.length) {
        typingElement.innerHTML += textToType.charAt(typeIndex);
        typeIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(deleteText, 1800);
      }
    }

    function deleteText() {
      if (typeIndex > 0) {
        typingElement.innerHTML = textToType.substring(0, typeIndex - 1);
        typeIndex--;
        setTimeout(deleteText, 100);
      } else {
        setTimeout(type, 900);
      }
    }

    setTimeout(type, 600);
  }

  // --- Scroll Animations ---
  initAnimations();

  // --- Artefak Page Initialization ---
  if (document.getElementById("course-container")) {
    initArtefakPage();
  }
});

// --- Scroll & Back-to-Top Logic ---
window.addEventListener("scroll", () => {
  const btn = document.getElementById("backToTop");
  const nav = document.getElementById("navbar");

  if (btn) {
    if (window.scrollY > 300) {
      btn.classList.remove("opacity-0", "invisible");
      btn.classList.add("opacity-100", "visible");
    } else {
      btn.classList.add("opacity-0", "invisible");
      btn.classList.remove("opacity-100", "visible");
    }
  }

  if (nav) {
    if (window.scrollY > 30) {
      nav.classList.add("scrolled", "shadow-lg");
    } else {
      nav.classList.remove("scrolled", "shadow-lg");
    }
  }
});

const backToTopBtn = document.getElementById("backToTop");
if (backToTopBtn) {
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --- Intersection Observer (Fade-In Effect) ---
function initAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 },
  );

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });
}

// --- Refleksi Accordion Toggle ---
function toggleRefleksiDetail(id) {
  const el = document.getElementById(id);
  if (!el) return;

  if (el.classList.contains("hidden")) {
    // Tutup detail lain
    document.querySelectorAll('[id^="r"]').forEach((node) => {
      if (node.id.length <= 3) node.classList.add("hidden");
    });
    el.classList.remove("hidden");
  } else {
    el.classList.add("hidden");
  }
}

// --- Artefak Logic for artefak.html ---
function initArtefakPage() {
  // Cek query parameter URL (misal: ?sem=sem2)
  const urlParams = new URLSearchParams(window.location.search);
  const semParam = urlParams.get("sem");
  if (semParam && (semParam === "sem1" || semParam === "sem2")) {
    currentSemester = semParam;
  }

  // Pastikan state awal (daftar matakuliah) tercatat di history
  // sehingga Back dari detail kembali ke sini, bukan ke halaman sebelumnya
  window.history.replaceState({ view: "courses", semKey: currentSemester }, "", window.location.href);

  // Tangkap tombol Back/Forward browser
  window.addEventListener("popstate", function (e) {
    if (e.state && e.state.view === "courses") {
      // Kembali ke daftar matakuliah
      showCoursesView();
      renderSemester(e.state.semKey || currentSemester);
    } else if (e.state && e.state.view === "detail") {
      // Maju ke detail (jika user menekan Forward)
      const semKey = e.state.semKey || currentSemester;
      const courseId = e.state.courseId;
      const course = artefakData[semKey]?.courses.find((c) => c.id === courseId);
      if (course) openCourseTopicsRender(course, semKey);
    }
  });

  renderSemester(currentSemester);
}

function switchSemester(semKey) {
  currentSemester = semKey;
  // Update URL tanpa reload, catat state "courses" agar popstate tahu ini daftar matakuliah
  const newUrl = window.location.pathname + "?sem=" + semKey;
  window.history.pushState({ view: "courses", semKey: semKey }, "", newUrl);

  // Kembali ke view daftar mata kuliah jika sedang di detail
  showCoursesView();
  renderSemester(semKey);
}

function renderSemester(semKey) {
  const data = artefakData[semKey];
  if (!data) return;

  // Update Header
  const titleEl = document.getElementById("artefak-title");
  const badgeEl = document.getElementById("semester-badge");
  const descEl = document.getElementById("semester-desc");

  if (titleEl) titleEl.innerText = "Artefak " + data.title;
  if (badgeEl) badgeEl.innerText = data.title;
  if (descEl) descEl.innerText = data.description;

  // Update Tab Buttons (jika ada)
  const tabSem1 = document.getElementById("tab-sem1");
  const tabSem2 = document.getElementById("tab-sem2");
  if (tabSem1 && tabSem2) {
    if (semKey === "sem1") {
      tabSem1.className =
        "px-6 py-2.5 rounded-xl font-semibold bg-cPrimary text-white shadow-md transition-all";
      tabSem2.className =
        "px-6 py-2.5 rounded-xl font-semibold bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 transition-all";
    } else {
      tabSem2.className =
        "px-6 py-2.5 rounded-xl font-semibold bg-cAccent text-white shadow-md transition-all";
      tabSem1.className =
        "px-6 py-2.5 rounded-xl font-semibold bg-white text-gray-600 border border-gray-200 hover:bg-gray-100 transition-all";
    }
  }

  // Render Kartu Mata Kuliah
  const container = document.getElementById("course-container");
  if (!container) return;

  container.innerHTML = "";
  data.courses.forEach((course) => {
    const card = document.createElement("div");
    card.className =
      "bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-cSecondary transition-all cursor-pointer flex flex-col items-center text-center group transform hover:-translate-y-1";
    card.onclick = () => openCourseTopics(course, semKey);

    card.innerHTML = `
            <div class="w-16 h-16 bg-cBg rounded-2xl flex items-center justify-center text-cSecondary group-hover:bg-cSecondary group-hover:text-white transition-colors mb-4 shadow-inner">
                <i class="fas ${course.icon} text-2xl"></i>
            </div>
            <h4 class="font-bold text-cPrimary text-lg group-hover:text-cAccent transition-colors">${course.name}</h4>
            <p class="text-xs text-gray-400 mt-2">Klik untuk melihat rincian topik & artefak</p>
            <div class="mt-4 text-xs font-semibold text-cSecondary flex items-center gap-1 group-hover:text-cAccent">
                <span>Buka Detail</span>
                <i class="fas fa-arrow-right text-[10px]"></i>
            </div>
        `;
    container.appendChild(card);
  });
}

// Render isi detail matakuliah (tanpa push history) — dipakai juga oleh popstate
function openCourseTopicsRender(course, semKey) {
  const courseSection = document.getElementById("section-courses");
  const detailSection = document.getElementById("section-detail");

  if (courseSection && detailSection) {
    courseSection.classList.add("hidden");
    detailSection.classList.remove("hidden");
    window.scrollTo({ top: detailSection.offsetTop - 80, behavior: "smooth" });
  }

  // Set judul info
  const titleEl = document.getElementById("detail-course-title");
  const badgeEl = document.getElementById("detail-semester-badge");
  const iconEl = document.getElementById("detail-course-icon");

  if (titleEl) titleEl.innerText = course.name;
  if (badgeEl) badgeEl.innerText = artefakData[semKey].title;
  if (iconEl) iconEl.className = `fas ${course.icon} text-3xl`;

  // Render Topik
  const topicsList = document.getElementById("detail-topics-list");
  if (!topicsList) return;

  // Prioritaskan topik milik mata kuliah tersebut, fallback ke semester jika ada
  const topicsData =
    course.topics && course.topics.length > 0
      ? course.topics
      : artefakData[semKey]?.topics || [];
  topicsList.innerHTML = "";

  if (topicsData.length === 0) {
    topicsList.innerHTML = `
      <div class="text-center py-10 text-gray-400">
        <i class="fas fa-folder-open text-4xl mb-3"></i>
        <p>Belum ada topik yang ditambahkan untuk mata kuliah ini.</p>
      </div>
    `;
    return;
  }

  topicsData.forEach((topic, index) => {
    const id = `topik-${course.id || semKey}-${index}`;
    const div = document.createElement("div");
    div.className =
      "border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-gray-300 transition-colors shadow-sm";

    // Ambil daftar file khusus milik topik ini (masing-masing topik memiliki link file sendiri)
    const files = topic.files || [];

    // Generate HTML kartu masing-masing file
    const filesHtml = files
      .map((file, fileIdx) => {
        const safeFileName = (file.name || `Artefak ${fileIdx + 1}`).replace(/'/g, "\\'");
        const safeTopicTitle = (topic.title || "").replace(/'/g, "\\'");
        const safeViewUrl = (file.viewUrl || "#").replace(/'/g, "\\'");
        //const safeDownloadUrl = (file.downloadUrl || "#").replace(/'/g, "\\'");

        // Membuka popup dokumen langsung di tab yang sama (tidak berpindah tab)
        const viewAction = `previewFileModal('${safeFileName}', '${safeTopicTitle}', '${safeViewUrl}')`;

        const downloadAction =
          file.downloadUrl && file.downloadUrl !== "#"
            ? `triggerFileDownload('${file.downloadUrl}', '${safeFileName}')`
            : `alertBox('${safeFileName} - ${safeTopicTitle}', 'download')`;

        return `
          <div class="bg-white p-3.5 rounded-xl border border-gray-200 hover:border-cSecondary/60 hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
            <div class="flex items-center gap-3 min-w-0">
              <div class="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 text-base shadow-inner group-hover:bg-red-500 group-hover:text-white transition-colors">
                <i class="fas fa-file-pdf"></i>
              </div>
              <div class="min-w-0">
                <h6 class="font-semibold text-cPrimary text-sm truncate" title="${file.name}">${file.name}</h6>
                <span class="text-[11px] text-gray-400 block">${file.type || "Dokumen Artefak"}</span>
              </div>
            </div>
            <div class="flex items-center gap-2 self-end sm:self-auto flex-shrink-0">
              <button onclick="${viewAction}" class="px-3 py-1.5 bg-cSecondary/10 hover:bg-cSecondary text-cSecondary hover:text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer" title="Lihat Berkas (Tetap di Halaman Ini)">
                <i class="fas fa-eye text-xs"></i>
                <span>Lihat</span>
              </button>
              <button onclick="${downloadAction}" class="px-3 py-1.5 bg-cAccent hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer" title="Unduh Berkas">
                <i class="fas fa-download text-xs"></i>
                <span>Unduh</span>
              </button>
            </div>
          </div>
        `;
      })
      .join("");

    div.innerHTML = `
            <button onclick="toggleTopicAccordion('${id}')" class="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 focus:outline-none transition-colors">
                <div class="flex items-center gap-3 text-left pr-4">
                    <span class="w-7 h-7 rounded-full bg-cPrimary/10 text-cPrimary text-xs font-bold flex items-center justify-center flex-shrink-0">${index + 1}</span>
                    <span class="font-bold text-cPrimary text-base sm:text-lg">${topic.title}</span>
                </div>
                <i id="icon-${id}" class="fas fa-chevron-down text-gray-400 transition-transform duration-300 flex-shrink-0"></i>
            </button>
            <div id="${id}" class="hidden px-6 py-5 border-t border-gray-100 bg-cBg/50">
                <p class="text-gray-600 text-sm mb-4 leading-relaxed">${topic.desc}</p>
                
                <div class="mt-4">
                    <div class="flex items-center justify-between mb-3">
                        <span class="text-xs font-bold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                            <i class="fas fa-folder-open text-cSecondary"></i> Berkas Artefak (${files.length} Dokumen)
                        </span>
                        <span class="text-[11px] text-gray-400 hidden sm:inline">Klik 'Lihat' untuk membuka popup di tab ini</span>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        ${filesHtml}
                    </div>
                </div>
            </div>
        `;
    topicsList.appendChild(div);
  });
}

// Fungsi utama yang dipanggil dari kartu matakuliah (push history + render)
function openCourseTopics(course, semKey) {
  // Catat state "detail matakuliah" ke browser history
  // agar tombol Back browser kembali ke daftar matakuliah, bukan ke halaman sebelumnya
  const detailUrl = window.location.pathname + "?sem=" + semKey + "&course=" + course.id;
  window.history.pushState({ view: "detail", semKey: semKey, courseId: course.id }, "", detailUrl);
  openCourseTopicsRender(course, semKey);
}

function showCoursesView() {
  const courseSection = document.getElementById("section-courses");
  const detailSection = document.getElementById("section-detail");

  if (courseSection && detailSection) {
    detailSection.classList.add("hidden");
    courseSection.classList.remove("hidden");
    window.scrollTo({ top: courseSection.offsetTop - 80, behavior: "smooth" });
  }
}

function toggleTopicAccordion(id) {
  const detail = document.getElementById(id);
  const icon = document.getElementById(`icon-${id}`);

  if (!detail) return;

  if (detail.classList.contains("hidden")) {
    detail.classList.remove("hidden");
    if (icon) icon.classList.add("rotate-180");
  } else {
    detail.classList.add("hidden");
    if (icon) icon.classList.remove("rotate-180");
  }
}

// --- Format URL Google Drive untuk Embed di Popup Modal Iframe ---
function formatDrivePreviewUrl(url) {
  if (!url || url === "#") return "";
  // Jika link Google Drive /view -> ubah menjadi /preview agar langsung tampil di dalam modal
  if (url.includes("drive.google.com/file/d/")) {
    return url.replace(/\/view(\?.*)?$/, "/preview");
  }
  return url;
}

// --- Popup Modal Pratinjau Berkas (Tampil Langsung di Tab yang Sama Tanpa Berpindah Tab) ---
function previewFileModal(fileName, topicTitle, fileUrl = "#", downloadUrl = "#") {
  const existingModal = document.getElementById("file-preview-modal");
  if (existingModal) existingModal.remove();

  const isAvailable =
    fileUrl && fileUrl !== "#" && !fileUrl.includes("/file/d/#/");
  const embedUrl = isAvailable ? formatDrivePreviewUrl(fileUrl) : "";

  const modal = document.createElement("div");
  modal.id = "file-preview-modal";
  modal.className =
    "fixed inset-0 z-[110] flex items-center justify-center bg-black/65 backdrop-blur-sm p-2 sm:p-4 animate-[fadeInPage_0.2s_ease-out_forwards]";

  let bodyContent = "";

  if (isAvailable) {
    bodyContent = `
      <div class="relative w-full h-full bg-gray-100 flex items-center justify-center">
        <iframe src="${embedUrl}" class="w-full h-full border-0 rounded-b-3xl" allow="autoplay"></iframe>
      </div>
    `;
  } else {
    bodyContent = `
      <div class="flex flex-col items-center justify-center h-full p-6 sm:p-10 text-center bg-gradient-to-b from-gray-50 to-white">
        <div class="w-20 h-20 rounded-3xl bg-cSecondary/10 text-cSecondary flex items-center justify-center text-3xl mb-5 shadow-inner">
          <i class="fas fa-file-invoice"></i>
        </div>
        <span class="text-xs uppercase font-bold text-gray-400 tracking-wider mb-1 block">Pratinjau Berkas</span>
        <h4 class="text-xl font-bold text-cPrimary mb-2 leading-snug">${fileName}</h4>
        <p class="text-xs text-cSecondary font-semibold mb-4 bg-cSecondary/10 px-3 py-1 rounded-full inline-block">${topicTitle}</p>
        <p class="text-sm text-gray-500 max-w-md mb-6 leading-relaxed">
          Tautan pratinjau untuk dokumen ini siap disematkan. Masukkan tautan Google Drive atau file PDF di <code>assets/js/main.js</code> pada properti <code>viewUrl</code> untuk langsung menampilkan dokumen di dalam jendela popup ini.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <button onclick="document.getElementById('file-preview-modal').remove()" class="px-6 py-2.5 bg-cSecondary hover:bg-cPrimary text-white rounded-xl text-sm font-medium transition-colors shadow-md shadow-cSecondary/20 cursor-pointer">
            Tutup Jendela
          </button>
        </div>
      </div>
    `;
  }

  const downloadBtn =
    downloadUrl && downloadUrl !== "#"
      ? `<button onclick="triggerFileDownload('${downloadUrl}', '${fileName}')" class="px-3.5 py-2 bg-cAccent hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer" title="Unduh Berkas">
          <i class="fas fa-download text-xs"></i>
          <span>Unduh</span>
         </button>`
      : "";

  modal.innerHTML = `
    <div class="bg-white w-full max-w-5xl h-[88vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
      <!-- Modal Header -->
      <div class="px-5 py-3.5 bg-white border-b border-gray-200 flex items-center justify-between gap-4 flex-shrink-0">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0 text-base border border-red-100 shadow-inner">
            <i class="fas fa-file-pdf"></i>
          </div>
          <div class="min-w-0">
            <h3 class="font-bold text-cPrimary text-sm sm:text-base truncate leading-tight">${fileName}</h3>
            <p class="text-xs text-gray-400 truncate">${topicTitle}</p>
          </div>
        </div>
        <div class="flex items-center gap-2 flex-shrink-0">
          ${downloadBtn}
          <button onclick="document.getElementById('file-preview-modal').remove()" class="w-9 h-9 rounded-xl bg-gray-100 hover:bg-red-50 hover:text-red-500 text-gray-500 flex items-center justify-center transition-colors text-base ml-1 cursor-pointer" title="Tutup Jendela (ESC)">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>

      <!-- Modal Body (Isi Dokumen di Tab yang Sama) -->
      <div class="flex-1 w-full overflow-hidden">
        ${bodyContent}
      </div>
    </div>
  `;

  // Klik area luar modal untuk menutup
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // Tekan tombol ESC untuk menutup
  const handleEsc = (e) => {
    if (e.key === "Escape") {
      modal.remove();
      document.removeEventListener("keydown", handleEsc);
    }
  };
  document.addEventListener("keydown", handleEsc);

  document.body.appendChild(modal);
}

// --- Handler Unduh Berkas ---
function triggerFileDownload(url, fileName) {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName || "dokumen.pdf";
  link.target = "_blank";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// --- Custom Modal Box untuk Unduh Dokumen (Jika file belum ada) ---
function alertBox(docTitle = "Tautan Dokumen", actionType = "download") {
  const isDownload = actionType === "download";
  const icon = isDownload ? "fa-download" : "fa-eye";
  const badgeColor = isDownload ? "bg-emerald-50 text-cAccent" : "bg-blue-50 text-cSecondary";
  const actionText = isDownload ? "Unduh Berkas" : "Pratinjau Berkas";
  const infoText = isDownload
    ? `File ini siap diunduh segera setelah Anda menautkan file dokumen PDF di folder <code>assets/pdf/</code> atau tautan Google Drive.`
    : `Pratinjau dokumen ini siap dihubungkan langsung ke URL Google Drive atau penampil file portofolio Anda.`;

  const modal = document.createElement("div");
  modal.className =
    "fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-[fadeInPage_0.2s_ease-out_forwards]";
  modal.innerHTML = `
        <div class="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl max-w-sm w-full text-center border border-gray-100">
            <div class="w-16 h-16 ${badgeColor} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl shadow-inner">
                <i class="fas ${icon}"></i>
            </div>
            <span class="text-xs uppercase font-bold text-gray-400 tracking-wider mb-1 block">${actionText}</span>
            <h3 class="font-bold text-lg text-cPrimary mb-2 leading-snug">${docTitle}</h3>
            <p class="text-sm text-gray-500 mb-6 leading-relaxed">
                ${infoText}
            </p>
            <button onclick="this.closest('.fixed').remove()" class="w-full py-2.5 bg-cSecondary hover:bg-cPrimary text-white rounded-xl font-medium transition-colors shadow-md shadow-cSecondary/20 cursor-pointer">
                Tutup Jendela
            </button>
        </div>
    `;
  document.body.appendChild(modal);
}
