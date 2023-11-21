---
title: "Logika Preposisi"
date: 2023-11-21T00:00:00+00:00
update: 2023-11-21T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /logika-preposisi/
image: "/assets/images/post/logika-preposisi/gambar0.png"
description: "Matematika diskrit adalah cabang matematika yang mempelajari objek-objek yang terpisah secara individual."
categories: Matematika
tags: [matematika, matematika diskrit]
published: true
---

<h2>Apa itu logika?</h2>
<p>Sebelum membahas Logika Proposisi kita bahas dulu secara singkat logika itu sendiri. Mungkin kita sudah sering
 mendengar kata "Logika" di kehidupan sehari-hari. Logika adalah ilmu yang mempelajari tentang cara berpikir dan
 bernalar yang benar. Logika membahas prinsip-prinsip dasar dalam membuat argumen yang valid dan memastikan kesesuaian
 antara premis (pernyataan yang dijadikan dasar argumen) dengan kesimpulan yang diambil. Tujuan utama logika adalah
 untuk mengembangkan metode berpikir yang dapat digunakan untuk mencari kesimpulan yang benar berdasarkan informasi yang
 ada.</p>

<h2>Apa itu logika proposisi?</h2>
<p>Setelah mengetahui definisi logika, selanjutnya kita bahas logika proposisi. Logika proposisi sering disebut logika
 matematika atau logika deduktif adalah matematika diskrit yang mempelajari tentang berkaitan pernyataan yang dapat
 dianggap benar <em>(true)</em> atau salah <em>(false)</em>, namun tidak keduanya. Pernyataan tersebut dapat berbentuk
 tunggal (atomik) maupun gabungan <em>(compound)</em>. Pernyataan sering disimbolkan dengan huruf-huruf kecil, seperti:
 <code>p,q,r,s</code>.</p>

<p>Contoh pernyataan berbentuk proposisi:</p>
<table>
 <thead>
  <tr>
   <th>Pernyataan</th>
   <th>Proposisi?</th>
   <th>True/False</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>Bumi berputar mengelilingi matahari</td>
   <td>Yes</td>
   <td>True</td>
  </tr>
  <tr>
   <td>Semua manusia bisa terbang</td>
   <td>Yes</td>
   <td>False</td>
  </tr>
  <tr>
   <td>Sungai Nil terletak di Amerika</td>
   <td>Yes</td>
   <td>False</td>
  </tr>
  <tr>
   <td>Saturnus memiliki cincin</td>
   <td>Yes</td>
   <td>True</td>
  </tr>
 </tbody>
</table>
<p>Pada pembahasan ini, akan membahas beberapa konsep dari logika proposisi, antara lain: Pernyataan Gabungan, Tautologi
 dan Kontradiksi, Kesetaraan Logis, Aljabar Proposisi, Implikasi dan Biimplikasi, Argumentasi, dan Kuantor Pernyataan.
</p>
<p>Selain itu, setiap pembahasan akan dipraktikkan menggunakan Python dan R.</p>
<h2>Apa itu pernyataan gabungan?</h2>
<p>Pernyataan gabungan atau <em>compound statement</em> adalah penggabungan dua atau lebih pernyataan menggunakan kata
 hubung <code>dan</code>, <code>atau</code>, <code>tidak</code> dalam matematika/pemrograman sering disebut operator
 logika.</p>
<h3>Apa saja macam-macam pernyataan gabungan?</h3>
<p>Ada banyak sekali macam-macam pernyataan gabungan, antara lain:</p>

<ol>
 <li>
  <p><strong>Konjungsi $$(∧)$$</strong></p>
  <p>Konjungsi digunakan untuk menggabungkan dua pernyataan dengan kata penghubung <code>dan</code>. Suatu pernyataan
   p∧q dikatakan benar jika kedua pernyataan $$p$$ dan $$q$$ benar.</p>
  <p>Contohnya:</p>
  <p>$$p$$ : "Hari ini adalah senin"</p>
  <p>$$q$$ : "cuaca hujan"</p>
  <p>$$p∧q$$ : akan benar jika hari ini adalah hari senin dan cuaca hujan.</p>
  <p>Dalam pemrograman, konjungsi $$(∧)$$ sering disebut dengan operator logika AND atau <code>&amp;&amp;</code>. Jika
   kondisi pada pernyataan dalam suatu blok kode tidak kondisi <code>True</code> maka kode tidak dijalankan.</p>
  <p>Contoh pada bahasa python:</p>
  
 <div class="code-container">
  <pre>
  <code class="python">

    hari_senin = True
    cuaca_hujan = True

    if hari_senin and cuaca_hujan:
      print("Lebih baik tidur")
    else:
      print("Mungkin lebih baik bekerja")

  </code>
  </pre>
</div>

  <p>Contoh pada bahasa R:</p>
  <div class="code-container">
  <pre>
  <code class="r">

    hari_senin &lt;- TRUE
    cuaca_hujan &lt;- TRUE

    if (hari_senin &amp; cuaca_hujan) {
      print("Lebih baik tidur")
    } else {
      print("Mungkin lebih baik bekerja")
    }

  </code>
  </pre>
</div>
  <p><strong>Tabel kebenaran konjungsi $$(∧)$$</strong></p>
  <table>
   <thead>
    <tr>
     <th>$$p$$</th>
     <th>$$q$$</th>
     <th>$$p∧q$$</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>T</td>
     <td>T</td>
     <td>T</td>
    </tr>
    <tr>
     <td>T</td>
     <td>F</td>
     <td>F</td>
    </tr>
    <tr>
     <td>F</td>
     <td>T</td>
     <td>F</td>
    </tr>
    <tr>
     <td>F</td>
     <td>F</td>
     <td>F</td>
    </tr>
   </tbody>
  </table>
  <p>Keterangan:</p>
  <ul>
   <li>
    <p>$$p$$ dan $$q$$ merepresentasikan dua pernyataan yang ingin digabungkan.</p>
   </li>
   <li>
    <p>$$p∧q$$ adalah hasil dari konjungsi. Kondisi $$(T)$$ hanya jika kedua $$p$$ dan $$q$$ benar.</p>
   </li>
  </ul>
 </li>