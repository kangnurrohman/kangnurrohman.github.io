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

   conda create --name project_data_science

  </code>
  </pre>
</div>

<p>Dengan mempraktikkan kode tersebut, maka kita sudah mempunyai virtual environment dengan nama <code>project_data_science</code>.</p>

</li>