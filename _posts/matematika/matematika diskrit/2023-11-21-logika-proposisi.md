---
title: "Logika Proposisi"
date: 2023-11-21T00:00:00+00:00
update: 2023-12-02T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /logika-proposisi/
image: "/assets/images/post/logika-proposisi/gambar0.png"
description:
  "Sebelum membahas Logika Proposisi kita bahas dulu secara singkat logika itu sendiri. Mungkin kita sudah sering
  mendengar kata 'Logika' di kehidupan sehari-hari."
categories: Matematika
tags: [matematika, matematika diskrit]
published: true
---

<div class="w-100">
  <div class="table-of-contents">
    <h1 class="table-of-contents-title" onclick="toggleContent('daftar-isi')" style="cursor:pointer;">
      <i class="fas fa-list-ul table-of-contents-icon"></i>
      <i id="arrow-daftar-isi" class="arrow arrow-right fas fa-chevron-right" style="float: right;"></i>
      Daftar Isi
    </h1>
    <ul class="content table-of-contents-list" id="daftar-isi">
      <li class="table-of-contents-item">
        <a class="table-of-contents-link" href="logika-proposisi/#apa-itu-logika">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu logika?
        </a>
        <a class="table-of-contents-link" href="logika-proposisi/#apa-itu-logika-proposisi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu logika proposisi?
        </a>
        <a class="table-of-contents-link" href="logika-proposisi/#apa-itu-pernyataan-gabungan">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu pernyataan gabungan?
        </a>
        <a class="table-of-contents-link" href="logika-proposisi/#apa-itu-tautologi-dan-kontradiksi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu tautologi dan kontradiksi?
        </a>
        <a class="table-of-contents-link" href="logika-proposisi/#apa-itu-kesetaraan-logika">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu kesetaraan logis?
        </a>
        <a class="table-of-contents-link" href="logika-proposisi/#apa-itu-aljabar-proposisi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu aljabar proposisi?
        </a>
        <a class="table-of-contents-link" href="logika-proposisi/#apa-itu-implikasi-dan-biimplikasi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu implikasi dan biimplikasi?
        </a>
        <a class="table-of-contents-link" href="logika-proposisi/#apa-itu-argumentasi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu argumentasi?
        </a>
        <a class="table-of-contents-link" href="logika-proposisi/#apa-itu-kuantor-logika">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu kuantor logika?
        </a>
      </li>
    </ul>
  </div>
</div>

<h2 id="apa-itu-logika">Apa itu logika?</h2>
<p>Sebelum membahas Logika Proposisi kita bahas dulu secara singkat logika itu sendiri. Mungkin kita sudah sering
 mendengar kata "Logika" di kehidupan sehari-hari. Logika adalah ilmu yang mempelajari tentang cara berpikir dan
 bernalar yang benar. Logika membahas prinsip-prinsip dasar dalam membuat argumen yang valid dan memastikan kesesuaian
 antara premis (pernyataan yang dijadikan dasar argumen) dengan kesimpulan yang diambil. Tujuan utama logika adalah
 untuk mengembangkan metode berpikir yang dapat digunakan untuk mencari kesimpulan yang benar berdasarkan informasi yang
 ada.</p>

<h2 id="apa-itu-logika-proposisi">Apa itu logika proposisi?</h2>
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
<h2 id="apa-itu-pernyataan-gabungan">Apa itu pernyataan gabungan?</h2>
<p>Pernyataan gabungan atau <em>compound statement</em> adalah penggabungan dua atau lebih pernyataan menggunakan kata
 hubung <code>dan</code>, <code>atau</code>, <code>tidak</code>. Pada matematika/pemrograman sering disebut operator
 logika.</p>
<h3>Apa saja macam-macam pernyataan gabungan?</h3>
<p>Ada banyak sekali macam-macam pernyataan gabungan, antara lain:</p>

<ol>
 <li>
  <p><strong>Konjungsi $$(∧)$$</strong></p>
  <p>Konjungsi digunakan untuk menggabungkan dua pernyataan dengan kata penghubung <code>dan</code>. Suatu pernyataan $$p∧q$$ dikatakan benar jika kedua pernyataan $$p$$ dan $$q$$ benar.</p>
  <p>Contohnya:</p>
  <p>$$p$$ : "Hari ini adalah senin"</p>
  <p>$$q$$ : "Cuaca sedang hujan"</p>
  <p>$$p∧q$$ : akan benar jika hari ini adalah hari senin dan cuaca sedang hujan.</p>
  <p>Dalam pemrograman, konjungsi $$(∧)$$ sering disebut dengan operator logika AND atau <code>&amp;&amp;</code>. Jika
   kondisi pada pernyataan dalam suatu blok kode tidak kondisi <code>True</code> maka kode tidak dijalankan.</p>
  <p>Contoh pada bahasa python:</p>
  
 <div class="code-container">
  <pre>
  <code class="python">

    p = True # hari ini adalah senin
    q = True # cuaca sedang hujan

    if p and q:
        print("Lebih baik tidur")
    else:
        print("Lebih baik bekerja")

  </code>
  </pre>
</div>

  <p>Contoh pada bahasa R:</p>
  <div class="code-container">
  <pre>
  <code class="r">

    p &lt;- TRUE # hari ini adalah senin
    q &lt;- TRUE # cuaca sedang hujan

    if (p &amp; q) {
      print("Lebih baik tidur")
    } else {
      print("Lebih baik bekerja")
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
 <li>
  <p><strong>Disjungsi</strong> $$(∨)$$</p>
  <p>Disjungsi digunakan untuk menggabungkan dua pernyataan dengan kata penghubung <code>atau</code>. Suatu pernyataan $$p∨q$$ dikatakan benar jika salah satu pernyataan $$p$$ dan $$q$$ benar.</p>
  <p>Contohnya:</p>
  <p>Dalam sebuah perlombaan, tim bisa mendapat piala jika salah satu anggotanya mendapatkan nilai lebih dari atau sama
   dengan 80.</p>
  <p>$$p$$ : "Andi mendapat nilai 80"</p>
  <p>$$q$$ : "Lutfi mendapat nilai 70"</p>
  <p>$$p∨q$$ : bernilai benar walapun Lutfi nilainya di bawah 80. Jadi tim ini mendapatkan piala.</p>
  <p>Dalam pemrograman, disjungsi $$(∨)$$ sering disebut dengan operator logika OR atau <code>||</code>. Jika kondisi pada
   pernyataan dalam suatu blok kode kondisinya <code>True</code> maka kode dijalankan.</p>
  <p>Contoh pada bahasa python:</p>
  <div class="code-container">
    <pre>
    <code class="python">

      p = 80 # nilai andi
      q = 70 # nilai lutfi

      if p &gt;= 80 or q &gt;= 80:
        print("Tim mendapatkan piala")
      else:
        print("Tim tidak mendapatkan piala")

    </code>
    </pre>

  </div>

  <p>Contoh pada bahasa R:</p>
  <div class="code-container">
  <pre>
  <code class="r">

    p &lt;- 80 # nilai andi
    q &lt;- 70 # nilai lutfi

    if (p &gt;= 80 || q &gt;= 80) {
      print("Tim mendapatkan piala")
    } else {
      print("Tim tidak mendapatkan piala")
    }

  </code>
  </pre>
</div>

  <p><strong>Tabel kebenaran disjungsi $$(∨)$$</strong></p>
  <table>
   <thead>
    <tr>
     <th>$$p$$</th>
     <th>$$q$$</th>
     <th>$$p∨q$$</th>
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
     <td>T</td>
    </tr>
    <tr>
     <td>F</td>
     <td>T</td>
     <td>T</td>
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
    <p>$$p∧q$$ adalah hasil dari konjungsi. Kondisi $$(T)$$ jika salah satu dari $$p$$ dan $$q$$ benar.</p>
   </li>
  </ul>
 </li>
 <li>
  <p><strong>Negasi</strong> $$(¬)$$</p>
  <p>Negasi digunakan untuk membuat sebuah ingkaran pada pernyataan. $$¬p$$ adalah benar jika pernyataan $$p$$ salah.</p>
  <p>Contohnya:</p>
  <p>$$p$$ : "Hari ini adalah hari minggu"</p>
  <p>$$¬p$$ : "Hari ini bukan hari minggu"</p>
  <p>Dalam pemrograman, negasi $$(¬)$$ sering disebut dengan operator logika NOT atau <code>!</code>. Jika kondisi pada
   pernyataan dalam suatu blok kode kondisinya <code>True</code> maka kondisinya dirubah menjadi <code>False</code>, dan
   sebaliknya.</p>
  <p>Contoh pada bahasa python:</p>
  <div class="code-container">
  <pre>
  <code class="python">

    p = True # hari ini adalah hari minggu

    if not (p):
      print("hari ini hari minggu")
    else:
      print("hari ini tidak hari minggu")

  </code>
  </pre>
</div>

  <p>Contoh pada bahasa R:</p>

  <div class="code-container">
  <pre>
  <code class="r">

    p &lt;- TRUE  # hari ini adalah hari minggu

    if (!p) {
      print("hari ini hari minggu")
    } else {
      print("hari ini tidak hari minggu")
    }

  </code>
  </pre>
</div>

  <p><strong>Tabel kebenaran negasi</strong> $$(¬)$$</p>
  <table>
   <thead>
    <tr>
     <th>$$p$$</th>
     <th>$$¬p$$</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>T</td>
     <td>F</td>
    </tr>
    <tr>
     <td>F</td>
     <td>T</td>
    </tr>
   </tbody>
  </table>
  <p>Keterangan:</p>
  <ul>
   <li>
    <p>$$p$$ adalah pernyataan asli.</p>
   </li>
   <li>
    <p>$$¬p$$ adalah hasil ingkaran dari pernyataan asli. Kondisi <em>True</em> menjadi <em>False</em>, dan sebaliknya.</p>
   </li>
  </ul>
 </li>
 <li>
  <p><strong>Jointdenial (Not OR/NOR) $$(¬∨)$$</strong></p>
  <p>Jointdenial atau yang sering dikenal dengan NOR (Not OR) digunakan untuk menegasikan dari pernyataan disjungsi
   (OR). Dalam hal ini, kita menggunakan negasi $$(¬)$$ pada operasi OR. Misalnya, $$¬(p∨q)$$ akan menjadi hasil
   negasi dari operasi $$p∨q$$.</p>
  <p>Contohnya:</p>
  <p>$$p$$ : "Hari ini hari minggu"</p>
  <p>$$q$$ : "Saya menonton gandrung"</p>
  <p>$$¬(p∨q)$$ : Hari ini bukan hari minggu dan saya tidak menonton gandrung.</p>
  <p>Contoh pada bahasa python:</p>

  <div class="code-container">
  <pre>
  <code class="python">

    p = True  # Hari ini hari minggu
    q = True  # Saya menonton gandrung

    if not (p or q):
      print("Hari ini hari minggu dan saya melihat gandrung")
    else:
      print("Hari ini bukan hari minggu dan saya tidak melihat gandrung")

  </code>
  </pre>
</div>

  <p>Contoh pada bahasa R:</p>

  <div class="code-container">
  <pre>
  <code class="r">

    p &lt;- TRUE  # Hari ini hari minggu
    q &lt;- TRUE  # Saya menonton gandrung

    if (!(p || q)) {
      print("Hari ini hari minggu dan saya melihat gandrung")
    } else {
      print("Hari ini bukan hari minggu dan saya tidak melihat gandrung")
    }

  </code>
  </pre>
</div>

  <p><strong>Tabel kebenaran Jointdenial (Not OR/NOR) $$(¬∨)$$</strong></p>
  <table>
   <thead>
    <tr>
     <th>$$p$$</th>
     <th>$$q$$</th>
     <th>$$p∨q$$</th>
     <th>$$¬(p∨q)$$</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>T</td>
     <td>T</td>
     <td>T</td>
     <td>F</td>
    </tr>
    <tr>
     <td>T</td>
     <td>F</td>
     <td>T</td>
     <td>F</td>
    </tr>
    <tr>
     <td>F</td>
     <td>T</td>
     <td>T</td>
     <td>F</td>
    </tr>
    <tr>
     <td>F</td>
     <td>F</td>
     <td>F</td>
     <td>T</td>
    </tr>
   </tbody>
  </table>
  <p>Keterangan:</p>
  <ul>
   <li>
    <p>$$p$$ dan $$q$$ merepresentasikan dua pernyataan yang ingin digabungkan.</p>
   </li>
   <li>
    <p>$$¬(p∨q)$$ adalah hasil dari operasi NOR. Kondisi $$¬(p∨q)$$ bernilai <em>True</em> jika kondisi $$(p∨q)$$ bernilai
     <em>False</em>, dan sebaliknya.</p>
   </li>
  </ul>
 </li>
 <li>
  <p><strong>Not AND/NAND $$(¬∧)$$</strong></p>
  <p>NAND (Not AND) digunakan untuk menegasikan dari pernyataan konjungsi (AND). Dalam hal ini, kita menggunakan negasi $$(¬)$$ pada operasi AND. Misalnya, $$¬(p∧q)$$ akan menjadi hasil negasi dari operasi $$p∧q$$.</p>
  <p>Contohnya:</p>
  <p>$$p$$ : "Hari ini hari minggu"</p>
  <p>$$q$$ : "Saya tidak menonton gandrung"</p>
  <p>$$¬(p∧q)$$ : Hari ini bukan hari minggu dan saya menonton gandrung.</p>
  <p>Contoh pada bahasa python:</p>
  <div class="code-container">
  <pre>
  <code class="python">

    p = True  # Hari ini adalah hari Minggu
    q = False  # Saya tidak menonton gandrung

    if not (p and q):
      print("Hari ini bukan hari Minggu dan saya menonton gandrung.")
    else:
      print("Hari ini mungkin hari Minggu, atau saya tidak menonton gandrung.")

  </code>
  </pre>
</div>

  <p>Contoh pada bahasa R:</p>

  <div class="code-container">
  <pre>
  <code class="r">

    p &lt;- TRUE  # Hari ini adalah hari Minggu
    q &lt;- FALSE  # Saya tidak menonton gandrung

    if (!(p &amp; q)) {
      print("Hari ini bukan hari Minggu dan saya menonton gandrung.")
    } else {
      print("Hari ini mungkin hari Minggu, atau saya tidak menonton gandrung.")
    }

  </code>
  </pre>
</div>

  <p><strong>Tabel kebenaran not AND/NAND $$(¬∧)$$</strong></p>
  <table>
   <thead>
    <tr>
     <th>$$p$$</th>
     <th>$$q$$</th>
     <th>$$(p∧q)$$</th>
     <th>$$¬(p∧q)$$</th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>T</td>
     <td>T</td>
     <td>T</td>
     <td>F</td>
    </tr>
    <tr>
     <td>T</td>
     <td>F</td>
     <td>F</td>
     <td>T</td>
    </tr>
    <tr>
     <td>F</td>
     <td>T</td>
     <td>F</td>
     <td>T</td>
    </tr>
    <tr>
     <td>F</td>
     <td>F</td>
     <td>F</td>
     <td>T</td>
    </tr>
   </tbody>
  </table>
  <p>Keterangan:</p>
  <ul>
   <li>
    <p>$$p$$ dan $$q$$ merepresentasikan dua pernyataan yang ingin digabungkan.</p>
   </li>
   <li>
    <p>$$¬(p∧q)$$ adalah hasil dari operasi NAND. Kondisi $$¬(p∧q)$$ bernilai <em>True</em> jika kondisi $$(p∧q)$$ bernilai
     <em>False</em>, dan sebaliknya.</p>
   </li>
  </ul>
 </li>
<li>
    <p><strong>eXclusive OR/XOR $$(⊕)$$</strong></p>
    <p>eXclusive OR (XOR) adalah gabungan pernyataan yang bernilai <em>True</em> jika salah satu $$p$$ atau $$q$$ bernilai
      <em>True</em> (tidak kedua-duanya). Dengan kata lain, XOR akan bernilai benar jika kondisi kedua pernyatan
      berbeda.</p>
    <p>Contohnya:</p>
    <p>$$p$$ : "Mobil tersebut berwarna hitam"</p>
    <p>$$q$$ : "Mobil tersebut tidak berwarna putih"</p>
    <p>$$p⊕q$$ : keluaran dari $$p$$ dan $$q$$ akan bernilai <em>True</em>, karena salah satu pernyataan tersebut tidak bernilai
      <em>True.</em></p>
    <p>Dalam pemrograman, XOR $$(⊕)$$ sering disebut dengan operator bitwise XOR, terkadang disimbolkan dengan
      <code>^</code>. Jika kondisi pada pernyataan dalam suatu blok kode salah satu kondisinya <code>True</code>, maka
      kode dijalankan.</p>
    <p>Contoh pada bahasa python:</p>

    <div class="code-container">
      <pre>
      <code class="python">

      p = True  # Mobil tersebut berwarna hitam
      q = False  # Mobil tersebut berwarna putih

      if p ^ q:
        print("Mobil tersebut dapat berwarna hitam ⊕ putih.")
      else:
        print("Mobil tersebut dapat berwarna hitam dan putih, atau mungkin tidak sama sekali.")

      </code>
      </pre>
    </div>

    <p>Contoh pada bahasa R:</p>
    <div class="code-container">
      <pre>
      <code class="r">

      p &lt;- TRUE  # Mobil tersebut berwarna hitam
      q &lt;- FALSE  # Mobil tersebut berwarna putih

      if (xor(p, q)) {
        print("Mobil tersebut dapat berwarna hitam ⊕ putih.")
      } else {
        print("Mobil tersebut dapat berwarna hitam dan putih, atau mungkin tidak sama sekali.")
      }

      </code>
      </pre>
    </div>

    <p><strong>Tabel kebenaran eXclusive OR/XOR $$(⊕)$$</strong></p>
    <table>
      <thead>
        <tr>
          <th>$$p$$</th>
          <th>$$q$$</th>
          <th>$$p⊕q$$</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>T</td>
          <td>T</td>
          <td>F</td>
        </tr>
        <tr>
          <td>T</td>
          <td>F</td>
          <td>T</td>
        </tr>
        <tr>
          <td>F</td>
          <td>T</td>
          <td>T</td>
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
        <p>$$p⊕q$$ adalah hasil dari XOR. Kondisi $$(T)$$ jika salah satu dari $$p$$ dan $$q$$ (tidak keduanya) benar.</p>
      </li>
    </ul>

  </li>
  <li>
    <p><strong>eXclusive NOR/XNOR $$(≡/↔)$$</strong></p>
    <p>eXclusive NOR (XNOR) digunakan untuk menegasikan dari pernyataan XOR. Dimana, XNOR bernilai <em>True</em> jika
      kedua pernyataan nilainya sama (baik kedua pernyataan bernilai <em>True</em> atau <em>False</em>).</p>
    <p>Contohnya:</p>
    <p>$$p$$ : "Kamar tidur ini dilengkapi dengan lampu tidur"</p>
    <p>$$q$$ : "Suasana kamar tidur ini tenang"</p>
    <p>$$p≡q$$ : keluaran dari $$p$$ dan $$q$$ akan bernilai <em>True</em>, karena kedua pernyataan tersebut bernilai <em>True</em>.
    </p>
    <p>Contoh pada bahasa python:</p>
    <div class="code-container">
      <pre>
      <code class="python">

      p = True  # Kamar tidur ini dilengkapi dengan lampu tidur yang menyala
      q = True  # Suasana kamar tidur ini tenang

      if not (p ^ q):
        print("Kamar tidur ini dilengkapi dengan lampu tidur yang menyala ↔ suasana tenang.")
      else:
        print("Kamar tidur ini mungkin dilengkapi dengan lampu tidur yang menyala dan suasana tenang, atau tidak sama sekali.")

      </code>
      </pre>
    </div>

<p>Contoh pada bahasa R:</p>

<div class="code-container">
      <pre>
      <code class="r">

      p &lt;- TRUE # Kamar tidur ini dilengkapi dengan lampu tidur yang menyala
      q &lt;- TRUE # Suasana kamar tidur ini tenang

      if (!xor(p, q)) {
        print("Kamar tidur ini dilengkapi dengan lampu tidur yang menyala ↔ suasana tenang.")
      } else {
        print("Kamar tidur ini mungkin dilengkapi dengan lampu tidur yang menyala dan suasana tenang, atau tidak sama sekali.")
      }

      </code>
      </pre>
    </div>

<p><strong>Tabel kebenaran eXclusive NOR/XNOR $$(≡/↔)$$</strong></p>
<table>
<thead>
<tr>
<th>$$p$$</th>
<th>$$q$$</th>
<th>$$p≡q$$</th>
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
<td>T</td>
</tr>
</tbody>
</table>
<p>Keterangan:</p>
<ul>
<li>
<p>$$p$$ dan $$q$$ merepresentasikan dua pernyataan yang ingin digabungkan.</p>
</li>
<li>
<p>$$p≡q$$ adalah hasil dari XNOR. Kondisi $$(T)$$ jika pernyataan $$p$$ dan $$q$$ pernyataannya sama.</p>
</li>
</ul>
  </li>
</ol>

 <h2 id="apa-itu-tautologi-dan-kontradiksi">Apa itu tautologi dan kontradiksi?</h2>
  <p>Tautologi dan kontradiksi adalah konsep dari logika proposisi yang merujuk pada dua jenis pernyataan khusus yang
    dipandang dari nilai kebenarannya.</p>
  <ol>
    <li>
      <p><strong>Tautologi $$(p∨¬p)$$</strong></p>
      <p>Tautologi adalah konsep proposisi yang nilai/kondisinya selalu benar tidak peduli bagaimana nilai/kondisi
        pernyatannya, intinya kayak cewek dah selalu benar 😂.</p>
      <p>Contohnya:</p>
      <p>$$p$$ : "Hari ini adalah hari kerja"</p>
      <p>$$¬p$$ : "Hari ini bukan hari kerja"</p>
      <p>$$p∨¬p$$ : keluarannya akan selalu bernilai <em>True</em> tidak peduli pernyataan tersebut <em>True</em> atau
        <em>False</em>.</p>
      <p>Dalam pemrograman, konsep tautologi dapat dijumpai pada ekspresi logika yang selalu benar, tidak peduli nilai
        variabel-variabel yang ada.</p>
      <p>Contoh pada bahasa python:</p>
      <div class="code-container">
      <pre>
        <code class="python">

    x = 8 # variabelnya dirubah bentuk apapun akan selalu True nilainya

    if x &gt; 0 or x &lt;= 0:
      print("Pernyataan ini selalu dijalankan.")
    else:
      print("Pernyataan ini tidak akan pernah dijalankan.")

  </code>
  </pre>
</div>
      <p>Contoh pada bahasa R:</p>
      <div class="code-container">
  <pre>
  <code class="r">

    x &lt;- 8  # Variabelnya dirubah bentuk apapun akan selalu TRUE nilainya

    if (x &gt; 0 || x &lt;= 0) {
      print("Pernyataan ini selalu dijalankan.")
    } else {
      print("Pernyataan ini tidak akan pernah dijalankan.")
    }

  </code>
  </pre>
</div>
      <p><strong>Tabel kebenaran tautologi $$(p∨¬p)$$</strong></p>
      <table>
        <thead>
          <tr>
            <th>$$p$$</th>
            <th>$$¬p$$</th>
            <th>$$p∨¬p$$</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>T</td>
            <td>F</td>
            <td>T</td>
          </tr>
          <tr>
            <td>F</td>
            <td>T</td>
            <td>T</td>
          </tr>
        </tbody>
      </table>
      <p>Keterangan:</p>
      <ul>
      <li>
        <p>$$p$$ : adalah pernyataan</p>
      </li>
      <li>
        <p>$$¬p$$ : adalah negasi dari $$p$$</p>
      </li>
      <li>
        <p>$$(p∨¬p)$$ : adalah hasil dari disjungsi antara $$p$$ dan negasi $$p$$. Dapat kita lihat, tidak peduli pernyataannya
          <em>True</em> atau <em>False</em>, nilainya selalu <em>True</em>.</p>
      </li>
    </ul>
    </li>
    <li>
      <p><strong>Kontradiksi $$(p∧¬p)$$</strong></p>
      <p>Kebalikan dari tautologi, kontradiksi adalah konsep proposisi yang nilai/kondisinya selalu salah tidak peduli
        bagaimana nilai/kondisi pernyatannya, ini seperti cowok yang selalu salah di mata cewek 😎🔥.</p>
      <p>Contohnya:</p>
      <p>$$p$$ : "Kamu baik hati"</p>
      <p>$$¬p$$ : "Kamu tidak baik hati"</p>
      <p>$$p∧¬p$$ : Pernyataan tersebut adalah kontradiksi. Karena sifat baik hati dan tidak baik hati saling bertentangan.
      </p>
      <p>Dalam pemrograman, konsep kontradiksi dapat dijumpai pada ekspresi logika yang selalu salah, tidak peduli nilai
        variabel-variabel yang ada.</p>
      <p>Contoh pada bahasa python:</p>
      <div class="code-container">
  <pre>
  <code class="python">

    x = 6 # Variabelnya dirubah bentuk apapun akan selalu TRUE nilainya

    if x == 10 and x != 10:
      print("Pernyataan ini selalu salah.")
    else:
      print("Pernyataan ini tidak akan pernah benar.")

  </code>
  </pre>
</div>
      <p>Contoh pada bahasa R:</p>
      <div class="code-container">
  <pre>
  <code class="r">

    x &lt;- 6 # Variabelnya dirubah bentuk apapun akan selalu FALSE nilainya

    if (x == 10 &amp; x != 10) {
      print("Pernyataan ini selalu salah.")
    } else {
      print("Pernyataan ini tidak akan pernah benar.")
    }

  </code>
  </pre>
</div>
      <p><strong>Tabel kebenaran kontradiksi $$(p∧¬p)$$</strong></p>
      <table>
        <thead>
          <tr>
            <th>$$p$$</th>
            <th>$$¬p$$</th>
            <th>$$p∧¬p$$</th>
          </tr>
        </thead>
        <tbody>
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
        </tbody>
      </table>
      <p>Keterangan:</p>
      <ul>
      <li>
        <p>$$p$$ : adalah pernyataan</p>
      </li>
      <li>
        <p>$$¬p$$ : adalah negasi dari p</p>
      </li>
      <li>
        <p>$$p∧¬p$$ : adalah hasil dari konjungsi antara $$p$$ dan negasi $$p$$. Dapat kita lihat, tidak peduli pernyataannya
          <em>True</em> atau <em>False</em>, nilainya selalu <em>False</em>.</p>
      </li>
    </ul>
    </li>
  </ol>

<h2 id="apa-itu-kesetaraan-logika">Apa itu kesetaraan logis?</h2>
<p>Kesetaraan logis $$(≡)$$ adalah konsep dari logika proposisi yang merujuk pada dua pernyataan yang memiliki nilai/kondisi
  yang setara/ekuivalen.</p>
<p>Contohnya:</p>
<p>$$p$$ : "Nilai mahasiswa 60"</p>
<p>$$q$$ : "Nilai lulus 85"</p>
<p>$$p≡q$$ : "Mahasiswa tidak lulus karena nilainya tidak sama dengan nilai lulus", artinya kondisinya <em>False</em>.</p>
<p>Dalam pemrograman, kesetaraan logis $$(≡)$$ sering digunakan untuk membandingkan dua ekspresi atau pernyataan apakah
  keduanya memiliki nilai yang sama. Kesetaraan logis dalam pemrograman disimbolkan dengan <code>==</code> atau
  <code>===</code>.</p>
<p>Contoh pada bahasa python:</p>
<div class="code-container">
  <pre>
  <code class="python">

    p = 85 # nilai mahasiswa
    q = 60 # nilai lulus

    if p == q:
        print("Mahasiswa lulus dengan nilai yang tepat.")
    else:
        print("Mahasiswa tidak lulus atau mendapat nilai yang berbeda.")

  </code>
  </pre>
</div>

<p>Contoh pada bahasa R:</p>
<div class="code-container">
  <pre>
  <code class="r">

    p &lt;- 85  # nilai mahasiswa
    q &lt;- 60  # nilai lulus

    if (p == q) {
      print("Mahasiswa lulus dengan nilai yang tepat.")
    } else {
      print("Mahasiswa tidak lulus atau mendapat nilai yang berbeda.")
    }

  </code>
  </pre>
</div>

<p><strong>Tabel kebenaran kesetaraan logis $$(≡)$$</strong></p>
<table>
  <thead>
    <tr>
      <th>$$p$$</th>
      <th>$$q$$</th>
      <th>$$¬p$$</th>
      <th>$$¬q$$</th>
      <th>$$(p∨q)$$</th>
      <th>$$¬(p∨q)$$</th>
      <th>$$¬p∨¬q$$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>T</td>
      <td>T</td>
      <td>F</td>
      <td>F</td>
      <td>T</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>T</td>
      <td>F</td>
      <td>F</td>
      <td>T</td>
      <td>T</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>T</td>
      <td>T</td>
      <td>F</td>
      <td>T</td>
      <td>F</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>T</td>
      <td>T</td>
      <td>F</td>
      <td>T</td>
      <td>T</td>
    </tr>
  </tbody>
</table>
<p>Keterangan:</p>
<ul>
  <li>
    <p>$$p$$ dan $$q$$ :mewakili pernyataan</p>
  </li>
  <li>
    <p>$$¬p$$ dan $$¬q$$ : negasi dari $$p$$ dan $$q$$</p>
  </li>
  <li>
    <p>$$(p∨q)$$ : Disjungsi (atau) logis dari $$p$$ dan $$q$$</p>
  </li>
  <li>
    <p>$$¬(p∨q)$$ : Negasi dari disjungsi $$p$$ dan $$q$$</p>
  </li>
  <li>
    <p>$$¬p∨¬q$$ : Disjungsi dari negasi $$p$$ dan negasi $$q$$</p>
  </li>
</ul>
<p>Jadi, $$¬(p∨q)$$ ekuivalen $$(≡)$$ dengan $$¬p∨¬q$$</p>

<h2 id="apa-itu-aljabar-proposisi">Apa itu aljabar proposisi?</h2>
<p>Aljabar proposisi adalah serangkaian aturan atau hukum yang digunakan untuk menyederhanakan, menggabungkan, dan
  memanipulasi ekspresi logika proposisi. Hukum-hukum pada aljabar proposisi ini mirip dengan hukum-hukum aljabar pada
  matematika, namun diterapkan pada logika proposisi. Berikut hukum-hukum pada aljabar proposisi:</p>
<table>
  <thead>
    <tr>
      <th>No</th>
      <th>Hukum</th>
      <th>Operator</th>
      <th>Ekspresi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Idempoten</td>
      <td>Konjungsi $$(∧)$$</td>
      <td>$$p ∧ p = p$$</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Disjungsi $$(∨)$$</td>
      <td>$$p ∨ p = p$$</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Asosiatif</td>
      <td>Konjungsi $$(∧)$$</td>
      <td>$$(p∧q)∧r=p∧(q∧r)$$</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Disjungsi $$(∨)$$</td>
      <td>$$(p ∨ q) ∨ r = p ∨ (q ∨ r)$$</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Komutatif</td>
      <td>Konjungsi $$(∧)$$</td>
      <td>$$p ∧ q = q ∧ p$$</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Disjungsi $$(∨)$$</td>
      <td>$$p ∨ q = q ∨ p$$</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Distribusi</td>
      <td>Konjungsi $$(∧)$$</td>
      <td>$$p ∧ (q ∨ r) = (p ∧ q) ∨ (p ∧ r)$$</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Disjungsi $$(∨)$$</td>
      <td>$$p ∨ (q ∧ r) = (p ∨ q) ∧ (p ∨ r)$$</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Identitas</td>
      <td>Konjungsi $$(∧)$$</td>
      <td>$$p ∧ t = p$$</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Disjungsi $$(∨)$$</td>
      <td>$$p ∨ t = p$$</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Komplemen</td>
      <td>Konjungsi $$(∧)$$</td>
      <td>$$p ∧ ¬p = f$$</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Disjungsi $$(∨)$$</td>
      <td>$$p ∨ ¬p = f$$</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Absorbsi</td>
      <td>Konjungsi $$(∧)$$</td>
      <td>$$p ∧ (p ∨ q) = p$$</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Disjungsi $$(∨)$$</td>
      <td>$$p ∨ (p ∧ q) = p$$</td>
    </tr>
    <tr>
      <td>8</td>
      <td>De morgans</td>
      <td>Konjungsi $$(∧)$$</td>
      <td>$$¬(p∧q)≡(¬p)∨(¬q)$$</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td>Disjungsi $$(∨)$$</td>
      <td>$$¬(p∨q)≡(¬p)∧(¬q)$$</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Involution</td>
      <td>Negasi $$(¬)$$</td>
      <td>$$¬(¬p) = p$$</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Implikasi</td>
      <td>$$→$$</td>
      <td>$$p → q=¬p ∨ q$$</td>
    </tr>
    <tr>
      <td>11</td>
      <td>Biimplikasi</td>
      <td>$$↔$$</td>
      <td>$$p ↔ q =(p → q) ∧ (q → p)$$</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Kontraposisi</td>
      <td>$$→$$</td>
      <td>$$p → q = ¬q → ¬p$$</td>
    </tr>
  </tbody>
</table>
<p>Penjelasan:</p>
<ol>
  <li>
    <p><strong>Hukum Idempoten</strong></p>
    <ul>
      <li>
        <p><strong>Berbunyi</strong> : Jika melakukan operasi pada suatu proposisi yang sama, maka hasilnya akan tetap
          sama dengan proposisi tersebut.</p>
      </li>
      <li>
        <p><strong>Kegunaan</strong> : Menyederhanakan, mereduksi, mengurangi kompleksitas ekspresi logika dan
          mempermudah analisis.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Hukum Asosiatif</strong></p>
    <ul>
      <li>
        <p><strong>Berbunyi</strong> : Jika kita menggabungkan tiga proposisi, maka urutan pengelompokan dalam operasi
          tersebut tidak memengaruhi hasil akhir dari operasi tersebut. Sehingga, kita dapat mengelompokkan
          proposisi-proposisi tersebut sesuai keinginan tanpa mengubah kebenaran logis dari pernyataan tersebut.</p>
      </li>
      <li>
        <p><strong>Kegunaan</strong> : Mempermudah analisis dan manipulasi ekspresi logika karena pengelompokkan yang
          lebih fleksibel.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Hukum Komutatif</strong></p>
    <ul>
      <li>
        <p><strong>Berbunyi</strong> : Jika menukar dua proposisi, maka tidak mengubah kebenaran logis dari pernyataan
          tersebut.</p>
      </li>
      <li>
        <p><strong>Kegunaan</strong> : Dalam pemrograman komputer, dapat digunakan untuk optimasi struktur data,
          sehingga meningkatkan kinerja. Contohnya, operasi pertukaran nilai pada dua variabel dapat dioptimalkan dengan
          menggunakan hukum komutatif.</p>
        <p>Contoh pada bahasa python:</p>
        <div class="code-container">
  <pre>
  <code class="python">

    p = 8
    q = 6

    # Sebelum menggunakan hukum komutatif
    temp = p
    p = q
    q = temp

    # Setelah menggunakan hukum komutatif
    p, q = q, p

  </code>
  </pre>
</div>

</li>
</ul>

  </li>
  <li>
    <p><strong>Hukum Distribusi</strong></p>
    <ul>
      <li>
        <p><strong>Berbunyi</strong> : Jika menukar atau mengelompokkan proposisi pada operasi konjungsi dan disjungsi,
          maka tidak memengaruhi kebenaran logis dari pernyataan tersebut.</p>
      </li>
      <li>
        <p><strong>Kegunaan</strong> : Dalam pemrograman komputer, dapat digunakan untuk optimasi kondisi logika atau
          ekspresi. Ini dapat meningkatkan efisiensi dan <em>code readibility</em>.</p>
        <p>Contoh pada bahasa python:</p>
        <div class="code-container">
  <pre>
  <code class="python">

    p = True
    q = False
    r = True

    # Sebelum menggunakan hukum distribusi
    if (p and q) or (p and r):
    # Blok kode
    pass

    # Setelah menggunakan hukum distribusi
    if p and (q or r):
    # Blok kode
    pass

  </code>
  </pre>
</div>

<p>Contoh pada bahasa R:</p>

<div class="code-container">
  <pre>
  <code class="r">

    p &lt;- TRUE
    q &lt;- FALSE
    r &lt;- TRUE

    # Sebelum menggunakan hukum distribusi
    if ((p &amp; q) | (p &amp; r)) {
      # Blok kode
    }

    # Setelah menggunakan hukum distribusi
    if (p &amp; (q | r)) {
      # Blok kode
    }

  </code>
  </pre>
</div>

</li>
</ul>

  </li>
  <li>
    <p><strong>Hukum Identitas</strong></p>
    <ul>
      <li>
        <p><strong>Berbunyi</strong> : Jika mengkonjungsikan/mendisjungsikan antara suatu proposisi dan proposisi yang
          sama, maka akan selalu menghasilkan proposisi tersebut.</p>
      </li>
      <li>
        <p><strong>Kegunaan</strong> : Dalam pemrograman komputer, dapat digunakan untuk optimasi pemilihan kondisi.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Hukum Komplemen</strong></p>
    <ul>
      <li>
        <p><strong>Berbunyi</strong> : Jika menukar dua proposisi, yaitu proposisi dan negasi dari proposisi tersebut,
          maka tidak mengubah kebenaran logis dari pernyataan tersebut.</p>
      </li>
      <li>
        <p><strong>Kegunaan</strong> : Dalam pemrograman komputer, dapat digunakan untuk membantu memilih kondisi
          alternatif.</p>
        <p>Contoh pada bahasa python:</p>
        <div class="code-container">
  <pre>
  <code class="python">

    variable = True
    value = True

    # Sebelum menggunakan hukum komplemen
    if variable != value:
      # Blok kode A
      pass
    else:
      # Blok kode B jika variable == value
      pass

    # Setelah menggunakan hukum komplemen
    if not variable != value:
      # Blok kode B jika variable == value
      pass
    else:
      # Blok kode A
      pass

  </code>
  </pre>
</div>

<p>Contoh pada bahasa R:</p>
<div class="code-container">
  <pre>
  <code class="r">

    variable &lt;- TRUE
    value &lt;- TRUE

    # Sebelum menggunakan hukum komplemen
    if (variable != value) {
      # Blok kode A
    } else {
      # Blok kode B jika variable == value
    }

    # Setelah menggunakan hukum komplemen
    if (!(variable != value)) {
      # Blok kode B jika variable == value
    } else {
      # Blok kode A
    }

  </code>
  </pre>
</div>

</li>
</ul>

  </li>
  <li>
    <p><strong>Hukum Absorbsi</strong></p>
    <ul>
      <li>
        <p><strong>Berbunyi</strong> : Jika menggabungkan suatu proposisi $$p$$ dengan hasil dari disjungsi/konjungsi antara
          $$p$$ dan proposisi lain $$q$$, maka operasi tersebut akan menghasilkan proposisi $$p$$.</p>
      </li>
      <li>
        <p><strong>Kegunaan</strong> : Dalam pemrograman komputer, dapat digunakan untuk optimasi pemilihan kondisi.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Hukum De morgans</strong></p>
    <ul>
      <li>
        <p><strong>Berbunyi</strong> : Jika negasi dari konjungsi/disjungsi dua proposisi, maka sama dengan
          konjungsi/disjungsi dari negasi masing-masing proposisi.</p>
      </li>
      <li>
        <p><strong>Kegunaan</strong> : Dalam pemrograman komputer, dapat digunakan manipulasi struktur data yang
          melibatkan kondisi logika.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Hukum Involution</strong></p>
    <ul>
      <li>
        <p><strong>Berbunyi</strong> : Jika menggunakan dua kali operasi negasi pada suatu proposisi, maka akan
          mengembalikan proposisi aslinya.</p>
      </li>
      <li>
        <p><strong>Kegunaan</strong> : Dalam pemrograman komputer, dapat digunakan untuk menyederhanakan operasi negasi
          (not) pada suatu variabel boolean.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Hukum Implikasi</strong></p>
    <ul>
      <li>
        <p><strong>Berbunyi</strong> : Jika proposisi $$p$$ benar, maka proposisi $$q$$ juga benar; namun, jika $$p$$ salah, tidak
          ada klaim yang dibuat tentang kebenaran atau ketidakbenaran $$q$$.</p>
      </li>
      <li>
        <p><strong>Kegunaan</strong> : Dalam pemrograman komputer, dapat digunakan untuk mengevaluasi dan menyederhanakn
          kondisi logika.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Hukum Biimplikasi</strong></p>
    <ul>
      <li>
        <p><strong>Berbunyi</strong> : Jika proposisi $$p$$ benar, maka proposisi $$q$$ juga benar. Dan jika proposisi $$p$$ salah,
          maka proposisi $$q$$ juga salah.</p>
      </li>
      <li>
        <p><strong>Kegunaan</strong> : Dalam pemrograman komputer, dapat digunakan untuk menyederhanakan dan memahami
          kondisi logika.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Hukum Kontraposisi</strong></p>
    <ul>
      <li>
        <p><strong>Berbunyi</strong> : Jika kesimpulan dari suatu implikasi salah $$¬q$$, maka hipotesisnya juga harus salah
          $$¬p$$.</p>
      </li>
      <li>
        <p><strong>Kegunaan</strong> : Dalam pemrograman komputer, dapat digunakan untuk menyederhanakan dan memahami
          kondisi logika yang melibatkan implikasi.</p>
      </li>
    </ul>
  </li>
</ol>

<h2 id="apa-itu-implikasi-dan-biimplikasi">Apa itu implikasi dan biimplikasi?</h2>
<p>Implikasi dan biimplikasi adalah dua konsep penting pada logika proposisi, berikut penjelasan secara detail:</p>
<ol>
  <li>
    <p><strong>Implikasi</strong></p>
    <p>Implikasi menyatakan hubungan antara dua proposisi, di mana satu proposisi disebut sebagai "konsekuensi" atau
      "hasil" dari proposisi lainnya. Biasanya notasinya ditandai dengan $$(→)$$.</p>
    <p><strong>Tabel kebenaran implikasi</strong></p>
    <table>
      <thead>
        <tr>
          <th>$$p$$</th>
          <th>$$q$$</th>
          <th>$$p→q$$</th>
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
          <td>T</td>
        </tr>
        <tr>
          <td>F</td>
          <td>F</td>
          <td>T</td>
        </tr>
      </tbody>
    </table>
    <p>Studi kasus:</p>
    <p>$$p$$ : "Anda memiliki kartu anggota gym".</p>
    <p>$$q$$ : "Anda dapat mengakses fasilitas olahraga di tempat gym"</p>
    <ol>
      <li>
        <p>Jika anda memiliki kartu anggota gym $$(T)$$ dan anda dapat mengakses fasilitas olahraga di tempat gym $$(T)$$. Maka,
          Implikasi $$p→q$$ $$(T)$$.</p>
      </li>
      <li>
        <p>Jika anda memiliki kartu anggota gym $$(T)$$, namun anda tidak dapat mengakses fasilitas olahraga di tempat gym
          $$(F)$$. Maka, Implikasi $$p→q$$ $$(F)$$. Harusnya sebagai member bebas mengakses fasilitas tempat olahraga gym.</p>
      </li>
      <li>
        <p>Jika anda tidak memiliki kartu anggota gym $$(F)$$, tapi anda dapat mengakses fasilitas olahraga di tempat gym
          $$(T)$$. Maka, implikasi $$p→q$$ $$(T)$$. Dapat mengakses sebagai pengguna biasa bukan sebagai anggota atau member.</p>
      </li>
      <li>
        <p>Jika anda tidak memiliki kartu anggota gym $$(F)$$, dan anda tidak dapat mengakses fasilitas olahraga di tempat
          gym $$(F)$$. Maka, implikasi $$p→q$$ $$(T)$$. Bisa jadi tempat gym tersebut dikhususkan untuk member.</p>
      </li>
    </ol>
  </li>
<p><strong>Konvers, invers, dan kontraposisi</strong></p>
<p>Tiga konsep ini adalah konsep penting yang harus dipahami pada implikasi, mari kita bahas lebih dalam menggunakan
  studi kasus di atas:</p>
<ol>
  <li>
    <p><strong>Konvers</strong></p>
    <ul>
      <li>
        <p>Konvers dari sebuah implikasi $$p→q$$ adalah $$q→p$$.</p>
      </li>
      <li>
        <p>Artinya, jika kita memiliki pernyataan "Jika $$p,$$ maka $$q$$" maka konversnya adalah "jika $$q$$, maka $$p$$".</p>
      </li>
    </ul>
  </li>
  <p> <strong>Studi kasus</strong></p>
<ul>
  <li>
    <p>Implikasi : "Jika anda memiliki kartu anggota gym $$(p)$$, maka anda dapat mengakses fasilitas olahraga di tempat gym
      $$(q)$$."</p>
  </li>
  <li>
    <p>Konvers : "Jika Anda dapat mengakses fasilitas olahraga di tempat gym $$(q)$$, maka Anda memiliki kartu anggota gym
      $$(p)$$."</p>
  </li>
</ul>
</ol>

<ol start="2">
  <li>
    <p><strong>Invers</strong></p>
    <ul>
      <li>
        <p>Invers dari sebuah implikasi $$p→q$$ adalah $$¬p→¬q$$.</p>
      </li>
      <li>
        <p>Artinya, jika kita memiliki pernyataan "Jika $$p$$, maka $$q$$" maka inversnya adalah "jika buka $$p$$, maka buka $$q$$".</p>
      </li>
    </ul>
  </li>
  <p> <strong>Studi kasus</strong></p>
<ul>
  <li>
    <p>Implikasi : "Jika anda memiliki kartu anggota gym $$(p)$$, maka anda dapat mengakses fasilitas olahraga di tempat gym
      $$(q)$$."</p>
  </li>
  <li>
    <p>Invers : "Jika anda tidak memiliki kartu anggota gym $$(¬p)$$, maka anda tidak dapat mengakses fasilitas olahraga di
      tempat gym $$(¬q)$$."</p>
  </li>
</ul>
</ol>
<ol start="3">
  <li>
    <p><strong>Kontraposisi</strong></p>
    <ul>
      <li>
        <p>Kontraposisi dari sebuah implikasi $$p→q$$ adalah $$¬q→¬p$$.</p>
      </li>
      <li>
        <p>Artinya, jika kita memiliki pernyataan "Jika $$p$$, maka $$q$$" maka konversnya adalah "jika $$¬q$$, maka $$¬p$$".</p>
      </li>
    </ul>
  </li>
  <p> <strong>Studi kasus</strong></p>
<ul>
  <li>
    <p>Implikasi : "Jika anda memiliki kartu anggota gym $$(p)$$, maka anda dapat mengakses fasilitas olahraga di tempat gym
      $$(q)$$."</p>
  </li>
  <li>
    <p>Kontraposisi : "Jika anda tidak dapat mengakses fasilitas olahraga di tempat gym $$(¬q)$$, maka Anda tidak memiliki
      kartu anggota gym $$(¬p)$$."</p>
  </li>
</ul>
</ol>

<p><strong>Tabel kebenaran konvers, invers, dan kontraposisi</strong></p>
<table>
  <thead>
    <tr>
      <th>$$p$$</th>
      <th>$$q$$</th>
      <th>$$¬p$$</th>
      <th>$$¬q$$</th>
      <th>$$p→q$$</th>
      <th>$$q→p$$</th>
      <th>$$¬p→¬q$$</th>
      <th>$$¬q→¬p$$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>T</td>
      <td>T</td>
      <td>F</td>
      <td>F</td>
      <td>T</td>
      <td>T</td>
      <td>T</td>
      <td>T</td>
    </tr>
    <tr>
      <td>T</td>
      <td>F</td>
      <td>F</td>
      <td>T</td>
      <td>F</td>
      <td>T</td>
      <td>T</td>
      <td>F</td>
    </tr>
    <tr>
      <td>F</td>
      <td>T</td>
      <td>T</td>
      <td>F</td>
      <td>T</td>
      <td>F</td>
      <td>F</td>
      <td>T</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>T</td>
      <td>T</td>
      <td>T</td>
      <td>T</td>
      <td>T</td>
      <td>T</td>
    </tr>
  </tbody>
</table>
<p>Jadi dapat disimpulkan dari tabel kebenaran diatas bahwa:</p>
<ul>
  <li>
    <p>Konvers dan invers tidak selalu memiliki nilai kebenaran yang sama dengan implikasi.</p>
  </li>
  <li>
    <p>Sedangkan kontraposisi menunjukkan bahwa nilai kebenarannya selalu sama dengan implikasi (ekuivalen).</p>
  </li>
</ul>

  <li>
    <p><strong>Biimplikasi</strong></p>
    <p>Biimplikasi menyatakan hubungan timbal balik antara dua proposisi. Biasanya notasinya ditandai dengan $$(↔)$$.</p>
    <p><strong>Tabel kebenaran biimplikasi</strong></p>
    <table>
      <thead>
        <tr>
          <th>$$p$$</th>
          <th>$$q$$</th>
          <th>$$p↔q$$</th>
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
          <td>T</td>
        </tr>
      </tbody>
    </table>
    <p>Studi kasus:</p>
    <p>$$p$$ : "Anda memiliki smartphone".</p>
    <p>$$q$$ : "Anda mengirim whatsapp".</p>
    <ol>
      <li>
        <p>Jika anda memiliki smartphone $$(T)$$ dan anda dapat mengirim whatshapp $$(T)$$. Maka, biimplikasi $$p↔q$$ benar.</p>
      </li>
      <li>
        <p>Jika anda memiliki smartphone $$(T)$$, namun anda tidak dapat mengirim whatshapp $$(F)$$. Maka, biimplikasi $$p↔q$$
          salah.</p>
      </li>
      <li>
        <p>Jika anda tidak memiliki smartphone $$(F)$$, namun anda dapat mengirim whatshapp $$(T)$$. Maka, biimplikasi $$p↔q$$
          salah.</p>
      </li>
      <li>
        <p>Jika anda tidak memiliki smartphone $$(F)$$ dan anda tidak dapat mengirim whatshapp $$(F)$$. Maka, biimplikasi $$p↔q$$
          benar.</p>
      </li>
    </ol>
  </li>
</ol>

<h2 id="apa-itu-argumentasi">Apa itu argumentasi?</h2>
<p>Argumentasi adalah serangkaian proposisi atau pernyataan yang disusun dengan cara tertentu. Serangkaian Proposisi ini
  ada yang disebut dengan premis atau asumsi dan ada proposisi yang disebut dengan kesimpulan atau konklusi. Dalam
  argumentasi, premis dan kesimpulan adalah dua komponen utama. Berikut detailnya:</p>
<ol>
  <li>
    <p><strong>Premis</strong></p>
    <p>Proposisi ini digunakan untuk sebagai dasar atau landasan dari argumen. Premis memberikan informasi awal yang
      digunakan untuk mendukung kesimpulan.</p>
  </li>
  <li>
    <p><strong>Kesimpulan</strong></p>
    <p>Sedangkan proposisi ini dihasilkan atau disimpulkan dari premis-premis yang diberikan. Kesimpulan adalah inti
      dari argumentasi. Argumentasi dianggap valid jika implikasi dari premis-premisnya terhadap konklusi atau
      kesimpulannya merupakan suatu tautologi. Semua hipotesa benar maka kesimpulan juga benar. Biasanya
      kesimpulan dinotasikan menggunakan $$(∴)$$ dibaca maka/oleh karena itu.</p>
  </li>
</ol>
<p>Contoh argumen dan menguji validitas argumen:</p>
<ul>
  <li>
    <p>Premis 1 : "Jika hari ini adalah hari senin $$(P)$$, maka saya berangkat bekerja $$(Q)$$."</p>
  </li>
  <li>
    <p>Premis 2 : "Hari ini adalah Senin $$(P)$$."</p>
  </li>
  <li>
    <p>Kesimpulan: "Oleh karena itu, saya pergi bekerja $$(Q)$$."</p>
  </li>
</ul>
<p>Mari kita buat tabel kebenarannya untuk menguji validitas argumen:</p>
<table>
  <thead>
    <tr>
      <th>$$P$$</th>
      <th>$$Q$$</th>
      <th>$$P→Q$$</th>
      <th>$$(P→Q)∧P$$</th>
      <th>$$∴Q$$</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>T</td>
      <td>T</td>
      <td>T</td>
      <td>T</td>
      <td>T</td>
    </tr>
    <tr>
      <td>T</td>
      <td>F</td>
      <td>F</td>
      <td>F</td>
      <td>T</td>
    </tr>
    <tr>
      <td>F</td>
      <td>T</td>
      <td>T</td>
      <td>F</td>
      <td>T</td>
    </tr>
    <tr>
      <td>F</td>
      <td>F</td>
      <td>T</td>
      <td>F</td>
      <td>T</td>
    </tr>
  </tbody>
</table>
<p>Mari kita lihat validitas argumen ini:</p>
<p>Karena tabel kebenaran yang dihasilkan berupa tautologi, maka argumen tersebut <strong>valid</strong>.</p>

<h3>Apa saja cara penarikan kesimpulan?</h3>
<p>Penarikan kesimpulan adalah pola argumentasi logis yang digunakan untuk mendapatkan kesimpulan dari premis yang
  diberikan. Berikut teknik-teknik penarikan kesimpulan:</p>
<ol>
  <li>
    <p><strong>Conjunction</strong></p>
    <ul>
      <li>
        <p><strong>Aturan</strong> : $$P$$ dan $$Q$$, sehingga $$P∧Q$$.</p>
      </li>
      <li>
        <p><strong>Contoh</strong> :</p>
        <ul>
          <li>
            <p>$$P$$ : "Hari ini adalah hari senin"</p>
          </li>
          <li>
            <p>$$Q$$ : "Cuacanya cerah"</p>
          </li>
          <li>
            <p>$$∴ P∧Q$$ : "Hari ini adalah senin dan cuacanya cerah."</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Addition</strong></p>
    <ul>
      <li>
        <p><strong>Aturan</strong> : $$P$$, sehingga $$P∨Q$$.</p>
      </li>
      <li>
        <p><strong>Contoh</strong>:</p>
        <ul>
          <li>
            <p>$$P$$ : "Saya suka teh."</p>
          </li>
          <li>
            <p>$$∴P∨Q$$ : "Saya suka teh atau kopi."</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Modus Ponens</strong></p>
    <ul>
      <li>
        <p><strong>Aturan</strong> : $$P→Q$$ dan $$P$$, sehingga $$Q$$.</p>
      </li>
      <li>
        <p><strong>Contoh</strong>:</p>
        <ul>
          <li>
            <p>$$P→Q$$ : "Jika hujan, maka jalanan menjadi basah."</p>
          </li>
          <li>
            <p>$$P$$ : "Hujan"</p>
          </li>
          <li>
            <p>$$∴ Q$$ : "Jalanan menjadi basah."</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Constructive Dilemma</strong></p>
    <ul>
      <li>
        <p><strong>Aturan</strong> : $$(P→Q)∧(R→S)$$ dan $$P∨R$$, sehingga $$Q∨S$$.</p>
      </li>
      <li>
        <p><strong>Contoh</strong>:</p>
        <ul>
          <li>
            <p>$$(P→Q)∧(R→S)$$ : "Jika hujan, maka saya akan tetap dirumah." dan "Jika cuaca cerah, maka saya akan pergi
              bersepeda."</p>
          </li>
          <li>
            <p>$$P∨R$$ : "Hari ini hujan atau cuaca."</p>
          </li>
          <li>
            <p>$$∴Q∨S$$ : "Hari ini saya akan tetap di rumah atau pergi bersepeda."</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Hypothetical syllogism</strong></p>
    <ul>
      <li>
        <p><strong>Aturan</strong> : $$P→Q$$ dan $$Q→R$$, sehingga $$P→R$$.</p>
      </li>
      <li>
        <p><strong>Contoh</strong> :</p>
        <ul>
          <li>
            <p>$$P→Q$$ : "Jika saya belajar, maka saya akan lulus."</p>
          </li>
          <li>
            <p>$$Q→R$$ : "Jika saya lulus, maka saya akan mendapatkan gelar."</p>
          </li>
          <li>
            <p>$$∴P→R$$ : "Jika saya belajar, maka saya akan mendapatkan gelar."</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Simplification</strong></p>
    <ul>
      <li>
        <p><strong>Aturan</strong> : $$P∧Q$$, sehingga $$P$$.</p>
      </li>
      <li>
        <p><strong>Contoh</strong> :</p>
        <ul>
          <li>
            <p>$$P∧Q$$ : "Hari ini adalah senin dan cuacanya cerah."</p>
          </li>
          <li>
            <p>$$∴P$$ : "Hari ini adalah hari senin."</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Disjunctive syllogism</strong></p>
    <ul>
      <li>
        <p><strong>Aturan</strong>: $$P∨Q$$ dan $$¬P$$, sehingga $$Q$$.</p>
      </li>
      <li>
        <p><strong>Contoh</strong>:</p>
        <ul>
          <li>
            <p>$$P∨Q$$ : "Saya suka teh atau kopi."</p>
          </li>
          <li>
            <p>$$¬P$$ : "Saya tidak suka teh."</p>
          </li>
          <li>
            <p>$$∴Q$$ : "Saya suka kopi."</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Modus tollens</strong></p>
    <ul>
      <li>
        <p><strong>Aturan</strong> : $$P→Q$$ dan $$¬Q$$, sehingga $$¬P$$.</p>
      </li>
      <li>
        <p><strong>Contoh</strong>:</p>
        <ul>
          <li>
            <p>$$P→Q$$ : "Jika saya belajar, maka saya akan lulus."</p>
          </li>
          <li>
            <p>$$¬Q$$ : "Saya tidak lulus."</p>
          </li>
          <li>
            <p>$$∴¬P$$ : "Saya tidak belajar."</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Destrutive dilemma</strong></p>
    <ul>
      <li>
        <p><strong>Aturan</strong> : $$(P→Q)∧(R→S)$$ dan $$¬Q∨¬S$$, sehingga $$¬P∨¬R$$.</p>
      </li>
      <li>
        <p><strong>Contoh</strong> :</p>
        <ul>
          <li>
            <p>$$(P→Q)∧(R→S)$$ : "Jika saya belajar, maka saya akan lulus ujian." dan "Jika saya hadir di kelas, maka saya
              akan mendapatkan pemahaman yang baik."</p>
          </li>
          <li>
            <p>$$¬Q∨¬S$$ : "Saya tidak akan lulus ujian atau saya tidak akan mendapatkan pemahaman yang baik."</p>
          </li>
          <li>
            <p>$$∴¬P∨¬R$$ : "Saya tidak akan belajar atau saya tidak akan hadir di kelas."</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Absorption</strong></p>
    <ul>
      <li>
        <p><strong>Aturan</strong> : $$(P→Q)$$, sehingga $$P→(P∧Q)$$.</p>
      </li>
      <li>
        <p><strong>Contoh</strong> :</p>
        <ul>
      <li>
        <p>$$(P→Q)$$ : "Jika hujan, maka saya membawa payung."</p>
      </li>
      <li>
        <p>$$∴P→(P∧Q)$$ : "Jika hujan, maka hujan dan saya membawa payung."</p>
      </li>
      </ul>
      </li>
    </ul>
  </li>
</ol>

<h2 id="apa-itu-kuantor-logika">Apa itu kuantor logika?</h2>
<p>Kuantor logika adalah konsep dalam logika matematika yang digunakan untuk menyatakan sejumlah elemen dalam suatu
  himpunan atau domain tertentu. Ada dua jenis kuantor, yaitu kuantor universal dan kuantor eksistensial.</p>
<ol>
  <li>
    <p><strong>Kuantor Universal $$(∀)$$</strong></p>
    <ul>
      <li>
        <p><strong>Konsep</strong> : Kuantor ini digunakan untuk menyatakan bahwa suatu penyataan berlaku untuk semua
          elemen dalam suatu himpunan atau domain tertentu.</p>
      </li>
      <li>
        <p><strong>Dalam bahasa sehari-hari</strong> : "Untuk setiap" atau "Bagi semua".</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : "Untuk setiap siswa, mereka suka belajar". Artinya, semua siswa tanpa terkecuali
          suka belajar.</p>
      </li>
      <li>
        <p><strong>Kalimat matematisnya</strong> : $$∀x,P(x)$$</p>
        <ul>
          <li>
            <p>$$∀$$ adalah simbol kuantor universal yang berarti "untuk setiap".</p>
          </li>
          <li>
            <p>$$x$$ adalah variabel yang mewakili setiap siswa.</p>
          </li>
          <li>
            <p>$$P(x)$$ adalah predikat yang menyatakan bahwa siswa $$x$$ suka belajar.</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Kuantor Eksistensial $$(∃)$$</strong></p>
    <ul>
      <li>
        <p><strong>Konsep</strong> : Kuantor ini digunakan untuk menyatakan bahwa setidaknya satu elemen dalam suatu
          himpunan atau domain tertentu.</p>
      </li>
      <li>
        <p><strong>Dalam bahasa sehari-hari</strong> : "Ada" atau "Terdapat".</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : "Ada siswa yang suka bermain sepak bola". Artinya, setidaknya ada satu siswa yang
          suka bermain sepak bola.</p>
      </li>
      <li>
        <p><strong>Kalimat matematisnya</strong> : $$∃x,P(x)$$</p>
        <ul>
          <li>
            <p>$$∃$$ adalah simbol kuantor eksistensial yang berarti "ada" atau "terdapat".</p>
          </li>
          <li>
            <p>$$x$$ adalah variabel yang mewakili setiap siswa.</p>
          </li>
          <li>
            <p>$$P(x)$$ adalah predikat yang menyatakan bahwa siswa $$x$$ suka bermain sepak bola.</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
<p><strong>Negasi Kuantor</strong></p>
<p>Negasi dari kuantor dapat diartikan sebagai ingkaran dari pernyataan kuantor tersebut. Berikut adalah cara
  menegasikan untuk kuantor universal $$(∀)$$ dan kuantor eksistensial $$(∃)$$:</p>
<ol>
  <li>
    <p><strong>Negasi Kuantor Universal $$(∀)$$</strong></p>
    <ul>
      <li>
        <p><strong>Pernyataan</strong> : $$∀x,P(x)$$</p>
      </li>
      <li>
        <p><strong>Negasi</strong> : $$¬∀x,P(x)$$ / $$∃x,¬P(x)$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> :</p>
        <ul>
          <li>
            <p><strong>Pernyataan awal</strong> : "Semua siswa suka matematika." $$∀x,P(x)$$</p>
          </li>
          <li>
            <p><strong>Pernyataan negasi</strong> :"Ada seorang siswa yang tidak suka matematika." $$∃x,¬P(x)$$</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Negasi Kuantor Eksistensial $$(∃)$$</strong></p>
    <ul>
      <li>
        <p><strong>Pernyataan</strong> : $$∃x,P(x)$$</p>
      </li>
      <li>
        <p><strong>Negasi</strong> : $$¬∃x,P(x)$$ / $$∀x,¬P(x)$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong>:</p>
        <ul>
          <li>
            <p><strong>Pernyataan awal</strong> : "Ada mahasiswa yang belajar fisika." $$∃x,P(x)$$</p>
          </li>
          <li>
            <p><strong>Pernyataan negasi</strong> : "Semua mahasiswa tidak belajar fisika." $$∀x,¬P(x)$$</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
<p><strong>Mengkombinasikan kuantor dengan simbol lain</strong></p>
<p>Kuantor ini dapat juga dikombinasikan dengan simbol lain, seperti konjungsi, disjungsi, negasi, implikasi, dan
  biimplikasi. Mari kita buat kalimat menggunakan kuantor logika dengan mengkombinasikan simbol lain.</p>
<ol>
  <li>
    <p><strong>Konjungsi $$(∧)$$</strong></p>
    <ul>
      <li>
        <p><strong>Kalimat</strong> : "Siswa laki-laki dan siswa perempuan mengikuti pelajaran matematika".</p>
      </li>
      <li>
        <p><strong>Kalimat matematisnya</strong> : $$∀x,(L(x)∧P(x)∧M(x))$$</p>
        <ul>
          <li>
            <p>$$L(x)$$ : $$x$$ adalah siswa laki-laki.</p>
          </li>
          <li>
            <p>$$P(x)$$ : $$x$$ adalah siswa perempuan.</p>
          </li>
          <li>
            <p>$$M(x)$$ : $$x$$ mengikuti pelajaran matematika.</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Disjungsi $$(∨)$$</strong></p>
    <ul>
      <li>
        <p><strong>Kalimat</strong> : "Siswa dapat memilih untuk belajar fisika atau kimia".</p>
      </li>
      <li>
        <p><strong>Kalimat matematisnya</strong> : $$∀x,(F(x)∨K(x))$$</p>
        <ul>
          <li>
            <p>$$F(x)$$ : $$x$$ belajar fisika.</p>
          </li>
          <li>
            <p>$$K(x)$$ : $$x$$ belajar kimia.</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Negasi $$(¬)$$</strong></p>
    <ul>
      <li>
        <p><strong>Kalimat</strong> : "Tidak ada siswa yang tidak menyukai olahraga".</p>
      </li>
      <li>
        <p><strong>Kalimat matematisnya</strong> : $$¬∃x,(¬S(x)∧O(x))$$</p>
        <ul>
          <li>
            <p>$$S(x)$$ : $$x$$ adalah siswa.</p>
          </li>
          <li>
            <p>$$O(x)$$ : $$x$$ menyukai olahraga.</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Implikasi $$(→)$$</strong></p>
    <ul>
      <li>
        <p><strong>Kalimat</strong> : "Jika semua siswa belajar dengan giat, maka hasilnya akan baik".</p>
      </li>
      <li>
        <p><strong>Kalimat matematisnya</strong> : $$∀x,(B(x)→H(x))$$</p>
        <ul>
          <li>
            <p>$$B(x)$$ : Siswa $$x$$ belajar dengan giat.</p>
          </li>
          <li>
            <p>$$H(x)$$ : Hasil belajar siswa $$x$$ baik.</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Biimplikasi $$(↔)$$</strong></p>
    <ul>
      <li>
        <p><strong>Kalimat</strong> : "Ada seorang siswa yang jago matematika jika dan hanya jika mereka mengikuti
          kursus kursus".</p>
      </li>
      <li>
        <p><strong>Kalimat matematisnya</strong> : $$∃x,(S(x)↔K(x))$$</p>
        <ul>
          <li>
            <p>$$S(x)$$ : $$x$$ adalah siswa.</p>
          </li>
          <li>
            <p>$$K(x)$$ : $$x$$ mengikuti kursus.</p>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ol>
