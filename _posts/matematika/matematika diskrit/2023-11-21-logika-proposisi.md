---
title: "Logika Proposisi"
date: 2023-11-21T00:00:00+00:00
update: 2023-11-22T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /logika-proposisi/
image: "/assets/images/post/logika-proposisi/gambar0.png"
description: "Matematika diskrit adalah cabang matematika yang mempelajari objek-objek yang terpisah secara individual."
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
        <a class="table-of-contents-link" href="logika-proposisi/#what-is-logic">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu Logika?
        </a>
        <a class="table-of-contents-link" href="logika-proposisi/#what-is-propositional-logic">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu logika proposisi?
        </a>
        <a class="table-of-contents-link" href="logika-proposisi/#what-is-a-compound-statement">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu pernyataan gabungan?
        </a>
        <a class="table-of-contents-link" href="logika-proposisi/#what-is-tautology-and-contradiction">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu tautologi dan kontradiksi?
        </a>
        <a class="table-of-contents-link" href="logika-proposisi/#what-is-logical-equivalence">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu kesetaraan logis?
        </a>
      </li>
    </ul>
  </div>
</div>

<h2 id="what-is-logic">Apa itu logika?</h2>
<p>Sebelum membahas Logika Proposisi kita bahas dulu secara singkat logika itu sendiri. Mungkin kita sudah sering
 mendengar kata "Logika" di kehidupan sehari-hari. Logika adalah ilmu yang mempelajari tentang cara berpikir dan
 bernalar yang benar. Logika membahas prinsip-prinsip dasar dalam membuat argumen yang valid dan memastikan kesesuaian
 antara premis (pernyataan yang dijadikan dasar argumen) dengan kesimpulan yang diambil. Tujuan utama logika adalah
 untuk mengembangkan metode berpikir yang dapat digunakan untuk mencari kesimpulan yang benar berdasarkan informasi yang
 ada.</p>

<h2 id="what-is-propositional-logic">Apa itu logika proposisi?</h2>
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
<h2 id="what-is-a-compound-statement">Apa itu pernyataan gabungan?</h2>
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

 <h2 id="what-is-tautology-and-contradiction">Apa itu tautologi dan kontradiksi?</h2>
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

<h2 id="what-is-logical-equivalence">Apa itu kesetaraan logis?</h2>
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