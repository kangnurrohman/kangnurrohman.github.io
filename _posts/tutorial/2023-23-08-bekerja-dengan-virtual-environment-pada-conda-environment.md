---
title: "Bekerja dengan Virtual Environment pada Conda Environment"
date: 2023-08-23T00:00:00+00:00
update: 2023-08-23T00:00:00+00:00
author: Kang Nur
layout: post
image: "/assets/images/post/bekerja-dengan-virtual-environment-pada-conda-environment/gambar0.jpg"
permalink: /bekerja-dengan-virtual-environment-pada-conda-environment/
description: "Ketika kita bekerja dengan tim, tidak semua orang pada tim kita menggunakan package dengan versi yang sama."
categories: Tutorial
tags: [conda, tutorial]
published: true
---

<figure>
<img src="/assets/images/post/bekerja-dengan-virtual-environment-pada-conda-environment/gambar0.jpg">
</figure>

<h2>Mengapa menggunakan virtual environment?</h2>

<p>Ketika kita bekerja dengan tim, tidak semua orang pada tim kita menggunakan package dengan versi yang sama. Alhasil, ketika bekerja dengan versi package yang berbeda maka biasanya terjadi masalah ketika bekerja secara kolaborasi. Untuk mengatasi masalah ini, solusinya adalah dengan menggunakan virtual environment.</p>

<h2>Apa itu virtual environment?</h2>

<p>Sederhananya, virtual environment adalah sebuah ruang khusus pada setiap proyek kita yang bertujuan untuk memisahkan proyek dari ruang utama. Untuk memudahkan memahami definisi tersebut mari kita analogikan</p>

<p>Katakan dalam sebuah rumah ada ruang utama untuk berkumpul dengan ayah, ibu, kakak, dan adik. Namun, anggota keluarga ini memiliki hobi yang berbeda-beda. Contohnya, ayah hobinya melukis, ibu merajut, adik menggambar, dan kakak menulis. Jika kegiatan hobi anggota keluarga dilakukan di ruang utama, maka tidak akan efektif. Untuk mengatasi permasalahan ini solusinya adalah setiap anggota keluarga membutuhkan ruang khusus untuk kegiatan hobi mereka. Dalam kasus ini dibuat empat ruang hobi yaitu: ruang melukis, merajut, menggambar, dan menulis. Setelah dibuat ruang hobi sendiri-sendiri maka kegiatan hobi pun menjadi efektif dan tidak terganggu.</p>

<h2>Bagaimana bekerja dengan virtual environment pada conda environment?</h2>

<p>Sebagai seorang data analyst/scientist conda environment adalah salah satu package management yang sudah tidak asing lagi. Disini, kita mencoba bekerja dengan virtual environment pada lingkungan conda. Mari kita berpetualang;</p>

<p>Oh ya, ketika membuat virtual environment kita menggunakan bash ya.</p>

<ol>
<li>

<p><strong>Membuat virtual environment</strong></p>

<p>Untuk membuat virtual environment, berikut kodenya:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

    conda create --name &lt;name_env&gt;

  </code>
  </pre>
</div>

<p>Mari kita praktikkan kode tersebut:</p>

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard(this)">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code id="code" class="bash">

   conda create --name data_science_projects

  </code>
  </pre>
</div>

<p>Dengan mempraktikkan kode tersebut, maka kita sudah mempunyai virtual environment dengan nama <code>data_science_projects</code>.</p>

</li>

<li>

<p><strong>Mengecek virtual environment yang ada</strong></p>

<p>Setelah membuat virtual environment, kita harus memastikan bahwa virtual environment berhasil kita buat, berikut kodenya:</p>

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard(this)">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code id="code" class="bash">

   conda env list

  </code>
  </pre>
</div>

<p>Hasil dari kode tersebut adalah:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

    # conda environments:
    #
    base                  *  C:\Users\Kang Nur\miniconda3
    data_science_projects    C:\Users\Kang Nur\miniconda3\envs\data_science_projects

  </code>
  </pre>
</div>

<p>Nah, jika di list tersebut ada nama virtual environment yang kita buat, maka kita berhasil membuat virtual environment.</p>

<p>Oh iya, disitu ada base. Lalu apakah base ini? Seperti yang kita analogikan di awal tadi, bahwa base ini adalah ruang utama di sebuah rumah dan selain base adalah ruang-ruang hobi anggota keluarga.</p>

</li>

<li>

<p><strong>Menjadikan virtual environment tertentu sebagai default</strong></p>

<p>Pada dasarnya, base adalah environment default. Namun, bagaimana caranya kita ingin menjadikan virtual environment tertentu menjadi default? Untuk menjadikan virtual environment tertentu sebagai default, berikut kodenya:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

    conda activate &lt;name_env&gt;

  </code>
  </pre>
</div>

<p>Mari kita praktikkan kode tersebut:</p>

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard(this)">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code id="code" class="bash">

   conda activate data_science_projects

  </code>
  </pre>
</div>

<p>Setelah kita praktikkan kodenya, maka virtual environment defaultnya berubah.</p>

<p>Dari:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

    (base) C:\Users\Kang Nur&gt;

  </code>
  </pre>
</div>

<p>Menjadi:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

    (data_science_projects) C:\Users\Kang Nur&gt;

  </code>
  </pre>
</div>

<p>Jika ingin mengembalikan ke environment base, berikut kodenya:</p>

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard(this)">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code id="code" class="bash">

   conda deactivate

  </code>
  </pre>
</div>

</li>

<li>

<p><strong>Menginstall package pada virtual environment</strong></p>

<p>Pada virtual environment yang barusan kita buat, masih belum ada package apapun yang terinstall. Oleh karena itu belum bisa dipakai untuk membuat sebuah proyek, kita harus menginstall packagenya terlebih dahulu, berikut kodenya:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

    conda install --name &lt;name_env&gt; &lt;package&gt;

  </code>
  </pre>
</div>

<p>Jika kita ingin menginstall beserta versi packagenya, berikut kodenya:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

    conda install --name &lt;name_env&gt; &lt;package&gt;=&lt;version&gt;

  </code>
  </pre>
</div>

<p>Mari kita praktikkan kedua kode tersebut, kita menginstall python dengan versi 3.5 terlebih dahulu, karena python adalah package yang paling penting.</p>

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard(this)">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code id="code" class="bash">

   conda install --name data_science_projects python=3.5

  </code>
  </pre>
</div>

<p>Setiap kita menginstall sebuah package, maka ada dependensi yang mengikuti, berikut dependensi dari python 3.5.</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

        package                |            build
    ---------------------------|-----------------
    certifi-2020.6.20          |     pyhd3eb1b0_3         155 KB
    pip-10.0.1                 |           py35_0         1.6 MB
    python-3.5.6               |       he025d50_0        14.5 MB
    setuptools-40.2.0          |           py35_0         497 KB
    wincertstore-0.2           |   py35hfebbdb8_0          14 KB
    ------------------------------------------------------------
                                          Total:        16.7 MB

  </code>
  </pre>
</div>

<p>Kemudian, kita praktikkan menginstall package tanpa versi. Katakan kita membutuhkan package untuk mengolah angka, maka kita membutuhkan numpy, berikut kodenya:</p>

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard(this)">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code id="code" class="bash">

   conda install --name data_science_projects numpy

  </code>
  </pre>
</div>

<p>Setelah mempraktikkan dua kode tersebut, kita mempunyai dua package, yaitu python dan numpy.</p>

</li>

<li>

<p><strong>Melihat package yang terinstall pada virtual environment</strong></p>

<p>Untuk memastikan bahwa dua package tersebut sudah terinstall di virtual environment kita, berikut kodenya:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

   conda list --name &lt;name_env&gt;

  </code>
  </pre>
</div>

<p>Mari kita praktikkan kode tersebut:</p>

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard(this)">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code id="code" class="bash">

   conda list --name data_science_projects

  </code>
  </pre>
</div>

<p>Hasil dari kode tersebut adalah:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

    # packages in environment at C:\Users\Kang Nur\miniconda3\envs\data_science_projects:
    #
    # Name                    Version                   Build  Channel
    blas                      1.0                         mkl
    certifi                   2020.6.20          pyhd3eb1b0_3
    icc_rt                    2022.1.0             h6049295_2
    intel-openmp              2023.1.0         h59b6b97_46319
    mkl                       2018.0.3                      1
    mkl_fft                   1.0.6            py35hdbbee80_0
    mkl_random                1.0.1            py35h77b88f5_1
    numpy                     1.15.2           py35ha559c80_0
    numpy-base                1.15.2           py35h8128ebf_0
    pip                       10.0.1                   py35_0
    python                    3.5.6                he025d50_0
    setuptools                40.2.0                   py35_0
    tbb                       2021.8.0             h59b6b97_0
    tbb4py                    2018.0.5         py35he980bc4_0
    vc                        14.2                 h21ff451_1
    vs2015_runtime            14.27.29016          h5e58377_2
    wheel                     0.37.1             pyhd3eb1b0_0
    wincertstore              0.2              py35hfebbdb8_0

  </code>
  </pre>
</div>

<p>Pada list tersebut telah terinstall dua package yaitu numpy dan python, seperti yang sudah dibahas di nomor 4, selain dua package yang sudah diinstall adalah dependensi atau package pendukung.</p>

</li>

<li>

<p><strong>Mengintegrasikan virtual environment dengan jupyter notebook</strong></p>

<p>Untuk menulis kode pada conda environment, biasanya seorang data analyst/scientist menggunakan jupyter notebook. Namun, virtual environment yang sudah kita buat belum terintegrasi dengan jupyter notebook. Untuk mengintegrasikan, berikut kodenya:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

   conda install --name &lt;name_env&gt; nb_conda_kernels

  </code>
  </pre>
</div>

<p>Mari kita praktikkan kode tersebut:</p>

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard(this)">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code id="code" class="bash">

   conda install --name data_science_projects nb_conda_kernels

  </code>
  </pre>
</div>

<p>Untuk memastikan package <code>nb_conda_kernels</code> sudah terinstall pada virtual environment kita, mari kita ulangi langkah nomor 5. Berikut hasilnya:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

   nb_conda_kernels          2.3.1           py311haa95532_0

  </code>
  </pre>
</div>

<p>Kemudian kita cek juga di jupyter notebook:</p>

<figure>
<img src="/assets/images/post/bekerja-dengan-virtual-environment-pada-conda-environment/gambar1.jpg">
<figcaption>Gambar 1. cek virtual environment di jupyter notebook </figcaption>
</figure>

<p>Jika sudah ada virtual environment yang sudah kita buat seperti pada gambar 1, maka kita berhasil mengintegrasikan virtual environment dengan jupyter notebook.</p>

</li>

<li>

<p><strong>Membuat virtual environment sekaligus menginstall package yang dibutuhkan</strong></p>

<p>Dalam dunia nyata, biasanya kita tidak menginstall package satu-satu. Akan tetapi, kita membuat virtual environment sekaligus menginstall package-package yang kita butuhkan sekaligus. Sebagai contoh, kita mengerjakan proyek peramalan harga saham, maka kita membuat file konfigurasi yang berisi nama virtual environment beserta package-package yang dibutuhkan untuk peramalan harga saham, berikut contohnya:</p>

<p>Oh iya, untuk nama file defaultnya adalah <code>environments</code> dan ekstensi filenya adalah <code>.yml</code>.</p>

<p>nb: sebisa mungkin file konfigurasi ditempatkan satu direktori dengan proyek.</p>

<div class="code-container">
  <pre>
  <code id="code" class="yaml">

    name: peramalan_harga_saham
    channels:
        - anaconda
    dependencies:
    # essential
        - python
        - nb_conda_kernels # mengaktifkan kernel jupyter notebook
        - pip # package manager
    # package forecasting
        - pandas # manipulasi data
        - numpy # operasi matematika dan numerik
        - matplotlib # visualisasi data
        - seaborn # visualisasi data
        - scikit-learn # machine learning
        - statsmodels # analisis statistik dan peramalan
        - prophet # peramalan

  </code>
  </pre>
</div>

<p>Untuk menjalankan file konfigurasi tersebut, berikut kodenya:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

   conda env create -f &lt;nama_file&gt;.yml

  </code>
  </pre>
</div>

<p>Mari kita praktikkan kode tersebut:</p>

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard(this)">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code id="code" class="bash">

   conda env create -f environments.yml

  </code>
  </pre>
</div>

<p>Untuk memastikan virtual environment yang kita buat, mari kita ulangi langkah nomor 2:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

    (base) C:\Users\Kang Nur> conda env list
    # conda environments:
    #
    base                  *  C:\Users\Kang Nur\miniconda3
    peramalan_harga_saham    C:\Users\Kang Nur\miniconda3\envs\peramalan_harga_saham
    data_science_projects    C:\Users\Kang Nur\miniconda3\envs\data_science_projects

  </code>
  </pre>
</div>

<p>Kita telah berhasil membuat satu lagi virtual environment untuk proyek peramalan harga saham, dan virtual environment tersebut sudah siap dipakai karena sudah teinstall package-package yang dibutuhkan, tanpa kita menginstall package satu-satu.</p>

</li>

<li>

<p><strong>Menghapus virtual environment</strong></p>

<p>Kadang kala kita ingin menghapus sebuah virtual environment dikarenakan kesalahan menginstall package, atau tidak diperlukan lagi atau alasan lain, berikut kodenya:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

   conda env remove --name &lt;nama_env&gt;

  </code>
  </pre>
</div>

<p>Mari kita praktikkan kode tersebut dengan menghapus virtual environment <code>data_science_projects</code>.</p>

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard(this)">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code id="code" class="bash">

   conda env remove --name data_science_projects

  </code>
  </pre>
</div>

<p>Untuk memastikan bahwa virtual environment <code>data_science_projects</code> sudah terhapus, mari ulangi kembali langkah nomor 2:</p>

<div class="code-container">
  <pre>
  <code id="code" class="bash">

    (base) C:\Users\Kang Nur> conda env list
    # conda environments:
    #
    base                  *  C:\Users\Kang Nur\miniconda3
    peramalan_harga_saham    C:\Users\Kang Nur\miniconda3\envs\peramalan_harga_saham

  </code>
  </pre>
</div>

<p>Virtual environment tinggal dua, environment default dan environment <code>peramalan_harga_saham</code>.</p>

</li>

</ol>

<h2>Penutup</h2>

<p>Dengan menggunakan virtual environment, seorang data analyst/scientist dapat menghindari permasalahan version dan konflik pada package yang berbeda pada saat berkolaborasi dengan tim. Dan juga dengan membuat ruang-ruang khusus pada setiap proyek kita, membuat pekerjaan kita menjadi rapi.</p>

<h2>Apa selanjutnya?</h2>

<ol>

<li>

<p>Pembaca diharapkan memahami pentingnya penggunaan virtual environment dalam proyek data analysis/science.</p>

</li>

<li>

<p>Pembaca dapat melakukan melakukan langkah-langkah yang sudah dibahas pada proyek data analysis/science yang lain sehingga pembaca lebih mahir dalam menggunakan virtual environment.</p>

</li>

</ol>