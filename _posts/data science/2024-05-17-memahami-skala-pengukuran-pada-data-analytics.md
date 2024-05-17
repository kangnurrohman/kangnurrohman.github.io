---
title: "Memahami Skala Pengukuran pada Data Analytics"
date: 2024-05-17T00:00:00+00:00
update: 2024-05-17T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /memahami-skala-pengukuran-pada-data-analytics/
image: "/assets/images/post/data-science/memahami-skala-pengukuran-pada-data-analytics/gambar0.png"
description: "Skala pengukuran adalah cara untuk mengklasifikasikan atau mengelompokkan data berdasarkan sifat atau karakteristiknya."
categories: Data Analyst
tags: [analisis data]
published: true
---

<p>Skala pengukuran adalah cara untuk mengklasifikasikan atau mengelompokkan data berdasarkan sifat atau karakteristiknya. Memahami skala pengukuran artinya membantu <em>data analyst</em> menentukan metode analisis yang tepat dan bagaimana hasil tersebut dapat diinterpretasikan. Skala pengukuran dibagi dalam dua kategori yaitu Diskrit (Nominal dan Ordinal) dan kontinu (Interval dan Ratio). Masing-masing skala ini memiliki karakteristik unik yang berimplikasi cara data tersebut diperlakukan dan dianalisis. Berikut detail masing-masing skala pengukuran.</p>
<h3 class="atx" id="kategori-diskrit">Kategori Diskrit</h3>
<p>Karakteristik diskrit yaitu nilai-nilainya terbatas jumlahnya, datanya diperoleh dari proses penghitungan <em>(counting),</em> dan nilainya berupa bilangan bulat artinya tidak memiliki pecahan.</p>
<ol>
<li><p><strong>Nominal</strong></p>
<p>Skala nominal adalah skala pengukuran yang paling sederhana. Skala ini digunakan untuk mengklasifikan data ke dalam kategori tanpa urutan status, tingkatan atau peringkat. Maksudnya sebagai contoh ada warna biru dan hijau, warna biru tidak lebih tinggi atau rendah dari hijau, artinya kedua warna memiliki tingkatan yang sama. Data nominal hanya mencakup label atau nama untuk mengidentifikasi kategori yang berbeda.</p>
<p><strong>Contoh:</strong></p>
<ul>
<li><p>Jenis kelamin (Laki-laki dan perempuan).</p>
</li>
<li><p>Warna mata (Biru, Hijau dan Coklat).</p>
</li>
<li><p>Kategori produk (Elektronik, Pakaian, dan Makanan).</p>
</li>
</ul>
</li>
<li><p><strong>Ordinal</strong></p>
<p>Skala ordinal mengklasifikasikan data ke dalam kategori yang memiliki urutan atau tingkatan, namun jarak antara kategori tersebut tidak ditentukan atau tidak sama.</p>
<p><strong>Contoh:</strong></p>
<ul>
<li><p>Peringkat kepuasan pelanggan (Sangat Tidak Puas, Tidak Puas, Netral, Puas, Sangat Puas).</p>
</li>
<li><p>Tingkat pendidikan (SMA, Sarjana, Magister, Doktor).</p>
</li>
<li><p>Urutan hasil lomba (Juara 1, Juara 2, Juara 3).</p>
</li>
</ul>
</li>
</ol>
<h3 class="atx" id="kategori-kontinu">Kategori Kontinu</h3>
<p>Karakteristik kontinu yaitu memiliki rentang nilai yang tidak tehingga, datanya diperoleh dari proses pengukuran <em>(measuring)</em>, dan nilainya mencakup nilai pecahan yang dapat dibagi tanpa batas.</p>
<ol>
<li><p><strong>Interval</strong></p>
<p>Skala interval memiliki urutan dan jarak yang sama antara nilai, tetapi tidak memiliki titik nol yang absolut. Skala interval dapat memiliki angka negatif karena titik nolnya bukan titik absolut.</p>
<p><strong>Contoh:</strong></p>
<ul>
<li>Suhu dalam derajat celcius, reamur atau fahrenheit $(-1°C,\ 25°C, \ -8°F, -40°R)$.</li>
<li>Tahun $(2000, 2001, 2002,...)$.</li>
<li>Skor $(85, 100, 155, ...)$.</li>
</ul>
</li>
<li><p><strong>Ratio</strong></p>
<p>Sama seperti skala interval, skala ratio memiliki urutan dan jarak yang sama antara nilai-nilai. Bedanya, skala ratio memiliki titik nol absolut. Artinya, skala ratio tidak memiliki angka negatif. Semua nilai analah nol atau lebih besar dari nol.</p>
<p><strong>Contoh:</strong></p>
<ul>
<li><p>Berat badan (60 kg, 40kg, 50kg).</p>
</li>
<li><p>Tinggi badan (150 cm, 170 cm, 165 cm).</p>
</li>
<li><p>Pendapatan (Rp. 10 Juta, Rp. 3 Juta, Rp. Juta Rupiah).</p>
</li>
</ul>
</li>
</ol>
<p>Agar lebih jelas, mari kita ambil contoh data dalam sebuah organisasi yang menggambarkan skala pengukuran:</p>
<table>
<thead>
<tr>
<th>Nama</th>
<th>Jenis Kelamin<br>(Nominal)</th>
<th>Jabatan<br>(Ordinal)</th>
<th>Tahun Kelahiran<br>(Interval)</th>
<th>Pendapatan Bulanan<br>(Ratio)</th>
</tr>
</thead>
<tbody><tr>
<td>Alimuddin</td>
<td>Pria</td>
<td>Manajer Area</td>
<td>1975</td>
<td>Rp. 15 Juta</td>
</tr>
<tr>
<td>Andreas</td>
<td>Pria</td>
<td>Asst. Manajer</td>
<td>1985</td>
<td>Rp. 10 Juta</td>
</tr>
<tr>
<td>Yuri</td>
<td>Wanita</td>
<td>Supervisor</td>
<td>1990</td>
<td>Rp. 9 Juta</td>
</tr>
<tr>
<td>Ainur</td>
<td>Pria</td>
<td>Staff IT</td>
<td>1997</td>
<td>Rp. 5 Juta</td>
</tr>
</tbody></table>


#### **Referensi :**

<div class="endnote">
    <ol>
      <li>Stevens, S. S. (1946). <a style="color:green" href="https://psychology.okstate.edu/faculty/jgrice/psyc3120/Stevens_FourScales_1946.pdf">On the Theory of Scales of Measurement.</a> Science, 103(2684), 677–680. <a style="color:green" href="http://www.jstor.org/stable/1671815">http://www.jstor.org/stable/1671815.</a></li>
      <li>Jamieson S. (2004). <a style="color:green" href="https://eprints.gla.ac.uk/59552/1/59552.pdf">Likert scales: how to (ab)use them.</a> Medical education, 38(12), 1217–1218. <a style="color:green" href="https://doi.org/10.1111/j.1365-2929.2004.02012.x">https://doi.org/10.1111/j.1365-2929.2004.02012.x.</a></li>
      <li>Nolan, S.A. Heinzen, T.E. 2011. <a style="color:green" href="https://psikologi.unmuha.ac.id/wp-content/uploads/2020/02/Essentials-of-Statistics-for-the-Behavioral-Science-7th-Gravetter-Wallnau.pdf">Statistics for the Behavioral Sciences.</a> Worth Publishers. </li>
    </ol>
  </div>

   