---
title: "Bekerja dengan Conda Environment"
date: 2023-08-23T00:00:00+00:00
update: 2023-08-23T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /bekerja-dengan-virtual-environment-pada-conda-environment/
description: ""
categories: Tutorial
tags: [conda, tutorial]
published: true
---

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
    project_data_science     C:\Users\Kang Nur\miniconda3\envs\data_science_projects

  </code>
  </pre>
</div>

<p>Nah, jika di list tersebut ada nama virtual environment yang kita buat, maka kita berhasil membuat virtual environment.</p>

<p>Oh iya, disitu ada base. Lalu apakah base ini? Seperti yang kita analogikan di awal tadi, bahwa base ini adalah ruang utama di sebuah rumah dan selain base adalah ruang-ruang hobi anggota keluarga.</p>

</li>

<li>

<p><strong>Menjadikan virtual environment tertentu sebagai default</strong></p>

<p>Pada dasarnya, base adalah environment default. Namun,bagaimana caranya kita ingin menjadikan virtual environment tertentu menjadi default? Untuk menjadikan virtual environment tertentu sebagai default, berikut kodenya:</p>

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

   conda activate project_data_science

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

    (project_data_science) C:\Users\Kang Nur&gt;

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