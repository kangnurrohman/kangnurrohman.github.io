---
title: "Relasi dan Fungsi"
date: 2023-12-06T00:00:00+00:00
update: 2023-12-15T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /relasi-dan-fungsi/
image: "/assets/images/post/relasi-dan-fungsi/gambar0.png"
description:
  "Sebelum membahas tentang relasi dan fungsi, di sini kita akan belajar sedikit tentang matriks yang nantinya digunakan
  untuk salah satu representasi matriks."
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
        <a class="table-of-contents-link" href="relasi-dan-fungsi/#pengantar-matriks">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Pengantar matriks
        </a>
        <a class="table-of-contents-link" href="relasi-dan-fungsi/#apa-itu-relasi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu relasi?
        </a>
        <a class="table-of-contents-link" href="relasi-dan-fungsi/#apa-saja-jenis-representasi-relasi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa saja jenis representasi relasi?
        </a>
        <a class="table-of-contents-link" href="relasi-dan-fungsi/#apa-saja-sifat-sifat-relasi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa saja sifat-sifat relasi?
        </a>
        <a class="table-of-contents-link" href="relasi-dan-fungsi/#apa-itu-relasi-inversi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu relasi inversi?
        </a>
        <a class="table-of-contents-link" href="relasi-dan-fungsi/#apa-itu-kombinasi-relasi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu kombinasi relasi?
        </a>
        <a class="table-of-contents-link" href="relasi-dan-fungsi/#apa-itu-komposisi-relasi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu komposisi relasi?
        </a>
        <a class="table-of-contents-link" href="relasi-dan-fungsi/#apa-itu-relasi-n-ray">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu relasi n-ray?
        </a>
        <a class="table-of-contents-link" href="relasi-dan-fungsi/#apa-itu-fungsi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu fungsi?
        </a>
        <a class="table-of-contents-link" href="relasi-dan-fungsi/#apa-itu-komposisi-fungsi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu komposisi fungsi?
        </a>
        <a class="table-of-contents-link" href="relasi-dan-fungsi/#apa-saja-beberapa-fungsi-khusus">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa saja beberapa fungsi khusus?
        </a>
      </li>
    </ul>
  </div>
</div>

<h2 id="pengantar-matriks">Pengantar matriks</h2>
<p>Sebelum membahas tentang relasi dan fungsi, di sini kita akan belajar sedikit tentang matriks yang nantinya digunakan
 untuk salah satu representasi matriks. Matriks adalah kumpulan elemen yang disusun dalam bentuk baris dan kolom.
 Sebagai contoh, sebuah matriks $$2\times3$$ memiliki dua baris dan tiga kolom. Matriks acap kali dinotasikan dalam bentuk
 berikut:</p>
<p>$$A = \left[\begin{array}{rrrr}
 a_{11} &amp; a_{12} &amp; \cdots &amp; a_{1n} \\
 a_{21} &amp; a_{22} &amp; \cdots &amp; a_{2n} \\
 \vdots &amp; \vdots &amp; \ddots &amp; \vdots \\
 a_{m1} &amp; a_{m2} &amp; \cdots &amp; a_{mn}
 \end{array}\right]$$</p>
<p>Di mana $$a_{ij}$$ adaah elemen matriks yang terletak pada baris ke-$$i$$ dan kolom ke-$$j$$, dan $$m\times n$$ menunjukkan ukuran
 matriks dengan $$m$$ baris dan $$n$$ kolom.</p>
<p>Di pengantar matriks kali ini, saya akan menjelaskan dua jenis matriks saja, yaitu: Matriks bujur sangkar dan matriks
 <em>zero-one</em>.
</p>
<ol>
 <li>
  <p><strong>Matriks bujur sangkar</strong></p>
  <p>Matriks bujur sangkar adalah matriks yang memiliki jumlah baris dan kolom yang sama. Dengan kata lain, matriks
   bujur sangkar memiliki ukuran $$n\times n$$, di mana $$n$$ adalah jumlah baris dan jumlah kolom. Notasi umum untuk matriks
   bujur sangkar adalah:</p>
  <p>$$B = \left[\begin{array}{rrrr}
   b_{11} &amp; b_{12} &amp; \cdots &amp; b_{1n} \\
   b_{21} &amp; b_{22} &amp; \cdots &amp; b_{2n} \\
   \vdots &amp; \vdots &amp; \ddots &amp; \vdots \\
   b_{n1} &amp; b_{n2} &amp; \cdots &amp; b_{nn}
   \end{array}\right]$$</p>
 </li>
 <li>
  <p><strong>Matriks <em>zero-one</em></strong></p>
  <p>Matriks <em>zero-one</em> adalah jenis matriks di mana setiap elemennya hanya dapat bernilai 0 atau 1. Matriks ini
   umumnya digunakan untuk merepresentasikan graf atau hubungan biner di antara himpunan objek atau elemen. Contoh
   matriks <em>zero-one</em> dengan ukuran $$m\times n$$ adalah sebagai berikut:</p>
  <p>$$M = \left[\begin{array}{rrrr}
   0 &amp; 1 &amp; \cdots &amp; 0 \\
   1&amp; 0 &amp; \cdots &amp; 1 \\
   \vdots &amp; \vdots &amp; \ddots &amp; \vdots \\
   0 &amp; 1 &amp; \cdots &amp; 1
   \end{array}\right]$$</p>
  <p>Dalam matriks ini, setiap elemen hanya bisa berisi 0 atau 1, dan matriks tersebut dapat digunakan untuk menyajikan
   koneksi atau relasi biner antara objek atau simpul dalam suatu sistem.</p>
 </li>
 <li>
    <p><strong>Matriks satuan</strong></p>
    <p>Matriks satuan, juga dikenal sebagai matriks identitas, adalah suatu jenis matriks yang memiliki elemen 1 di
      sepanjang diagonal utama dan elemen 0 di luar diagonal utama. Matriks identitas sering disimbolkan dengan $$I$$ atau
      $$I_{n}$$​, tergantung pada konteks ordo matriks tersebut. Dalam notasi umum, matriks identitas ordo $$n$$ adalah sebagai
      berikut:</p>
    <p>$$I_{n} = \left[\begin{array}{rrrr}
      1 &amp; 0 &amp; \cdots &amp; 0 \\
      0&amp; 1 &amp; \cdots &amp; 0 \\
      \vdots &amp; \vdots &amp; \ddots &amp; \vdots \\
      0 &amp; 0 &amp; \cdots &amp; 1
      \end{array}\right]$$</p>
    <p>Misalnya, jika kita bicara tentang matriks identitas ordo 3, itu akan terlihat seperti ini:</p>
    <p>$$I_{3} = \left[\begin{array}{rrr}
      1 &amp; 0 &amp; 0 \\
      0&amp; 1 &amp; 0 \\
      0 &amp; 0 &amp; 1
      \end{array}\right]$$</p>
    <p>Matriks identitas memiliki sifat khusus yang penting. Jika $$A$$ adalah matriks ordo $$m\times n,$$ maka $$A⋅I_{n}=A$$ dan
      $$I_{m}​⋅A=A$$. Artinya, perkalian matriks identitas dengan matriks lain tidak mengubah matriks tersebut.</p>
    <p>Matriks identitas memiliki peran penting dalam berbagai bidang matematika, terutama dalam operasi matriks dan
      dalam sistem persamaan linier.</p>
  </li>
  <li>
      <p><strong>Matriks simetris</strong></p>
      <p>Matriks simetris adalah jenis matriks yang sama dengan transpose-nya. Dengan kata lain, sebuah matriks
        dikatakan simetris jika elemen-elemen yang terletak di sepanjang diagonal utama dan di atas diagonal utama sama
        dengan elemen-elemen yang berada di bawah diagonal utama.</p>
      <p>Secara formal, matriks $$A$$ dikatakan simetris jika $$A=A^{T},$$ di mana $$A^{T}$$ adalah matriks transpose dari $$A$$. Untuk
        matriks simetris, elemen-elemen pada posisi $$(i,j)$$ dan $$(j,i)$$ akan sama untuk setiap $$i$$ dan $$j.$$</p>
      <p>Contoh matrix simetris dengan ordo $$3\times 3:$$</p>
      <p>$$A = \left[\begin{array}{rrr}
        1 &amp; 2 &amp; 3 \\
        2 &amp; 4 &amp; 5 \\
        3 &amp; 5 &amp; 6
        \end{array}\right]$$</p>
      <p>Dalam matriks ini, $$A^{T}$$ juga sama dengan $$A$$, sehingga matriks ini dikategorikan sebagai matriks simetris.</p>
      <p>Matriks simetris memiliki sifat-sifat khusus dan sering muncul dalam berbagai konteks matematika dan aplikasi
        ilmu pengetahuan, seperti dalam teori matriks, analisis numerik, dan mekanika struktur.</p>
    </li>
</ol>

<h2 id="apa-itu-relasi">Apa itu relasi?</h2>
<p>Relasi adalah hubungan antara dua himpunan, di mana setiap elemen dari himpunan pertama (domain) dihubungkan dengan
 satu atau lebih elemen dari himpunan kedua (kodomain). Secara formal, dinotasikan dengan:</p>
<p>$$R\subseteq (A\times B)$$</p>
<p>Dimana, relasi $$R$$ dari himpunan $$A$$ ke himpunan $$B$$ dinyatakan sebagai subset dari $$A\times B$$, yang berisi
 pasangan-pasangan terurut $$(a,b)$$ di mana $$a$$ adalah elemen dari $$A$$ dan $$b$$ adalah elemen dari $$B$$ $$((a,b)\in R).$$</p>
<p>Contoh:</p>
<p>Misalkan kita memiliki dua himpunan:</p>
<p>$$A=\{1,2,3\}$$ dan $$B=\{x,y,z\}$$</p>
<p>Kita bisa mendefinisikan relasi $$R$$ dari $$A$$ ke $$B$$ sebagai berikut:</p>
<p>$$R=\{(1,x),(2,y),(2,z),(3,x)\}$$</p>
<p>Dalam hal ini, setiap elemen dari $$A$$ memiliki hubungan dengan elemen-elemen tertentu dari $$B$$. Sebagai contoh, $$1$$
 terhubung dengan $$x$$, $$2$$ terhubung dengan $$y$$ dan $$z$$, dan $$3$$ terhubung dengan $$x.$$</p>
<p>Jika digambarkan dengan diagram panah sebagai berikut:</p>

<figure>
<img src="/assets/images/post/relasi-dan-fungsi/gambar1.png">
<figcaption>Gambar 1. Hubungan antara himpunan $$A$$ dan $$B$$ </figcaption>
</figure>

<h3>Relasi pada sebuah himpunan</h3>
<p>Relasi pada sebuah himpunan adalah relasi yang khusus, di mana melibatkan hubungan antar elemen-elemen dalam himpunan
 tersebut. Dalam notasi matematis :</p>
<p>$$R\subseteq A\times A$$</p>
<p>Dimana, Relasi $$R$$ pada himpunan $$A$$ adalah suatu himpunan bagian dari $$A\times A.$$ Dengan kata lain, $$R$$ terdiri dari
 pasangan terurut $$(a,b)$$ di mana $$a$$ dan $$b$$ adalah elemen-elemen dari $$A.$$</p>
<p>Contoh:</p>
<p>Misalkan $$A=\{1,2,3\}$$, dan kita ingin mendefinisikan relasi $$R$$ yang menunjukkan bahwa dua elemen dalam $$A$$ memiliki
 selisih yang merupakan bilangan genap. Maka, $$R$$ dapat didefinisikan sebagai berikut:</p>
<p>$$R=\{(1,3),(2,2),(3,1)\}$$</p>
<p>Dalam hal ini, setiap pasangan terurut $$(a,b)$$ dalam $$R$$ memenuhi kriteria bahwa $$a−b$$ adalah bilangan genap. Misalnya,
 pasangan $$(1,3)$$ dipilih karena $$1−3=−2$$, yang merupakan bilangan genap.</p>
<p>Notasi matematis yang lebih formal dapat ditulis sebagai berikut:</p>
<p>$$R=\{(a,b)\in A\times A ∣ a−b\ adalah\ bilangan\ genap\}$$</p>
<p>Definisi ini mengindikasikan bahwa $$R$$ adalah himpunan pasangan terurut dari $$A\times A$$ di mana selisih antara
 elemen-elemen dalam pasangan tersebut adalah bilangan genap.</p>

<h2 id="apa-saja-jenis-representasi-relasi">Apa saja jenis representasi relasi?</h2>
<ol>
  <li>
    <p><strong>Diagram panah <em>(arrow diagram)</em></strong></p>
    <p>Representasi relasi menggunakan diagram panah adalah representasi visual yang menunjukkan hubungan antar
      elemen-elemen dari dua himpunan dengan menggunakan panah.</p>
    <p>Jika $$R$$ adalah relasi dari himpunan $$A$$ ke $$B$$ dengan pasangan terurut $$(a,b),$$ maka setiap panah dari $$a$$ ke $$b$$ dalam
      diagram panah mewakili elemen $$R.$$</p>
    <p><strong>Contoh:</strong></p>
    <p>Himpunan: $$A=\{1,2,3\}$$ dan $$B=\{2,3,4\}$$</p>
    <p>Relasi: $$R=\{(1,2),(2,3),(1,4),(2,4)\}$$</p>
    <p>Maka diagram panahnya:</p>
    <figure>
      <img src="/assets/images/post/relasi-dan-fungsi/gambar2.png">
      <figcaption>Gambar 2. Representasi relasi dengan diagram panah </figcaption>
    </figure>
  </li>
  <li>
    <p><strong>Tabel <em>(table)</em></strong></p>
    <p>Representasi relasi menggunakan tabel adalah representasi tabular yang menunjukkan pasangan-pasangan terurut dari
      suatu relasi.</p>
    <p>Jika $$R$$ adalah relasi dari himpunan $$A$$ ke $$B$$ dengan pasangan terurut $$(a,b),$$ maka tabel $$R$$ akan memiliki dua kolom,
      satu untuk elemen $$A$$ dan satu untuk elemen $$B$$, dengan setiap baris berisi pasangan terurut $$a$$ dan $$b.$$</p>
    <p><strong>Contoh:</strong></p>
    <p>Himpunan: $$A=\{1,2,3\}$$ dan $$B=\{2,3,4\}$$</p>
    <p>Relasi: $$R=\{(1,2),(2,3),(1,4)\}$$</p>
    <p>Maka tabelnya:</p>
    <table>
      <thead>
        <tr>
          <th>Elemen $$A$$</th>
          <th>Elemen $$B$$</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>2</td>
          <td>3</td>
        </tr>
        <tr>
          <td>1</td>
          <td>4</td>
        </tr>
      </tbody>
    </table>
  </li>
  <li>
    <p><strong>Matriks <em>(matrix)</em></strong></p>
    <p>Representasi relasi menggunakan matriks relasi adalah representasi tabel dalam bentuk matriks, di mana baris dan
      kolom mewakili elemen-elemen dari himpunan, dan elemen di posisi $$(i,j)$$ menunjukkan apakah terdapat relasi antara
      $$a_{i}$$​ dan $$b_{j}​.$$</p>
    <p>Jika $$R$$ adalah relasi dari himpunan $$A$$ ke $$B$$ dengan pasangan terurut $$(a,b),$$ maka matriks $$R$$ akan memiliki $$1$$ di posisi
      $$(i,j)$$ jika $$a_{i}$$ terhubung dengan $$b_{j}$$ dan $$0$$ sebaliknya.</p>
    <p><strong>Notasinya:</strong></p>
    <p>$$M =\begin{array}{c c}
      &amp; \begin{array}{c c c} b_{1} &amp; b_{2} &amp; \cdots &amp; b_{n} \\ \end{array} \\
      \begin{array}{c c c}a_{1}\\a_{2}\\\vdots\\ \ a_{m} \end{array} &amp;
      \left[
      \begin{array}{c c c}
      m_{11} &amp; m_{12} &amp; \cdots &amp; m_{1n}\\
      m_{21} &amp; m_{22} &amp; \cdots &amp; m_{2n} \\
      \vdots &amp; \vdots &amp; \vdots &amp; \vdots \\
      m_{m1} &amp; m_{m1} &amp; \cdots &amp; m_{mn}
      \end{array}
      \right]
      \end{array} \longrightarrow m_{ij} = \Biggl\{_{0,\ (a_{i},b_{j}) \ \notin \ R}^{1,\:(a_{i},b_{j}) \ \in \ R}$$</p>
    <p><strong>Contoh:</strong></p>
    <p>Himpunan: $$A=\{1,2,3\}$$ dan $$B=\{2,3,4\}$$</p>
    <p>Relasi: $$R=\{(1,2),(2,3),(1,4),(3,2)\}$$</p>
    <p>Maka matriksnya:</p>
    <p>$$M =\begin{array}{c c}
      &amp; \begin{array}{c c c} 2 &amp; 3 &amp; 4 \\ \end{array} \\
      \begin{array}{c c c} 1 \\ 2 \\ 3 \\ \end{array} &amp;
      \left[
      \begin{array}{c c c}
      1 &amp; 0 &amp; 1 \\
      0 &amp; 1 &amp; 0 \\
      1 &amp; 0 &amp; 0 \\
      \end{array}
      \right]
      \end{array}$$</p>
  </li>
  <li>
    <p><strong>Graf berarah <em>(directed graph)</em></strong></p>
    <p>Graf berarah adalah representasi visual yang menggunakan simpul/vertex dan panah untuk menunjukkan hubungan arah
      antar elemen-elemen dari himpunan.</p>
    <p>Jika $$R$$ adalah relasi dari himpunan $$A$$ ke $$B$$ dengan pasangan terurut $$(a,b),$$ maka setiap simpul akan mewakili elemen
      dari $$A$$ dan $$B$$, dan setiap panah akan menunjukkan arah hubungan antar mereka.</p>
    <p>Dan pada graf berarah pada sebuah himpunan: Jika $$R$$ adalah relasi dari himpunan $$A$$ dengan pasangan terurut $$(a,b),$$
      maka setiap simpul pada graf berarah mewakili elemen $$a$$ dari $$A,$$ dan panah mengindikasikan arah hubungan antara $$a$$
      dan $$b$$ sesuai dengan pasangan terurut dalam relasi $$R.$$</p>
    <p><strong>Contoh:</strong></p>
    <p>Himpunan: $$A=\{1,2,3\}$$</p>
    <p>Relasi: $$R=\{(1,1),(1,2),(2,3),(3,1)\}$$</p>
    <p>Maka graf berarahnya:</p>
    <figure>
      <img src="/assets/images/post/relasi-dan-fungsi/gambar3.png">
      <figcaption>Gambar 3. Representasi relasi dengan graf berarah </figcaption>
    </figure>
  </li>
  <li>
    <p><strong>Diagram kartesian <em>(cartesian diagram)</em></strong></p>
    <p>Representasi relasi menggunakan diagram kartesian adalah representasi visual dari pasangan terurut pada koordinat
      kartesian.</p>
    <p>Jika $$R$$ adalah relasi dari himpunan $$A$$ ke $$B$$ dengan pasangan terurut $$(a,b),$$ maka setiap titik pada diagram kartesian
      mewakili pasangan terurut $$a$$ dan $$b.$$</p>
    <p><strong>Contoh:</strong></p>
    <p>Himpunan: $$A=\{1,2,3\}$$ dan $$B=\{2,3,4\}$$</p>
    <p>Relasi: $$R=\{(1,2),(2,3),(1,4)\}$$</p>
    <p>Maka diagram kartesiannya:</p>
    <figure>
      <img src="/assets/images/post/relasi-dan-fungsi/gambar4.png">
      <figcaption>Gambar 4. Representasi relasi dengan diagram kartesian </figcaption>
    </figure>
  </li>
</ol>

<h2 id="apa-saja-sifat-sifat-relasi">Apa saja sifat-sifat relasi?</h2>
<ol>
  <li>
    <p><strong>Refleksif <em>(Reflexive)</em></strong></p>
    <p><strong>Definisi:</strong> Suatu relasi $$R$$ pada himpunan $$A$$ dikatakan refleksif jika setiap elemen $$a$$ dari $$A$$ berada
      dalam relasi dengan dirinya sendiri, yaitu $$aRa.$$</p>
    <p><strong>Notasi:</strong> $$\forall a\in A:aRa$$</p>
    <p><strong>Contoh</strong>:</p>
    <ul>
      <li>
        <p>Misal $$A=\{1,2,3\}$$ dan $$R=\{(1,1),(2,2),(3,3)\},$$ relasi ini dikatakan refleksif.</p>
      </li>
      <li>
        <p>Matriks $$R$$:</p>
        <p>$$M =\begin{array}{c c}
          &amp; \begin{array}{c c c} 1 &amp; 2 &amp; 3 \\ \end{array} \\
          \begin{array}{c c c} 1 \\ 2 \\ 3 \\ \end{array} &amp;
          \left[
          \begin{array}{c c c}
          1 &amp; 0 &amp; 0 \\
          0 &amp; 1 &amp; 0 \\
          0 &amp; 0 &amp; 1 \\
          \end{array}
          \right]
          \end{array}$$</p>
        <p>Jika direpresentasikan relasi menggunakan matriks, membentuk matriks satuan.</p>
      </li>
      <li>
        <p>Graf berarah:</p>
        <figure>
          <img src="/assets/images/post/relasi-dan-fungsi/gambar5.png">
          <figcaption>Gambar 5. Representasi relasi graf berarah dari refleksif </figcaption>
        </figure>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Menghantar <em>(Transitive)</em></strong></p>
    <p><strong>Definisi:</strong> Relasi $$R$$ pada himpunan $$A$$ dikatakan transitif jika dari $$aRb$$ dan $$bRc$$ selalu menghasilkan
      $$aRc.$$</p>
    <p><strong>Notasi:</strong> $$\forall a,b,c\in A: (aRb\land bRc)\to aRc$$</p>
    <p><strong>Contoh:</strong></p>
    <ul>
      <li>
        <p>Misal $$A=\{1,2,3,4\}$$ dan $$R=\{(1,2),(2,3),(1,3)\},$$ relasi ini dikatakan transitif. Mari kita buktikan dengan
          tabel.</p>
      </li>
      <li>
        <p>Tabel pasangan berbentuk:</p>
        <table>
          <thead>
            <tr>
              <th>$$(a,b)$$</th>
              <th>$$(b,c)$$</th>
              <th>$$(a,c)$$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$$(1,2)$$</td>
              <td>$$(2,3)$$</td>
              <td>$$(1,3)$$</td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>
        <p>Matrix $$R$$:</p>
        <p>$$M =\begin{array}{c c}
          &amp; \begin{array}{c c c} 1 &amp; 2 &amp; 3 &amp; 4 \\ \end{array} \\
          \begin{array}{c c c} 1 \\ 2 \\ 3 \\ 4 \\ \end{array} &amp;
          \left[
          \begin{array}{c c c c}
          0 &amp; 1 &amp; 1 &amp; 0 \\
          0 &amp; 0 &amp; 1 &amp; 0 \\
          0 &amp; 0 &amp; 0 &amp; 0 \\
          0 &amp; 0 &amp; 0 &amp; 0 \\
          \end{array}
          \right]
          \end{array}$$</p>
      </li>
      <li>
        <p>Graf berarah</p>
        <figure>
          <img src="/assets/images/post/relasi-dan-fungsi/gambar6.png">
          <figcaption>Gambar 6. Representasi relasi graf berarah dari transitif </figcaption>
        </figure>
      </li>
      <li>
        <p>Relasi $$R=\{(1,1),(2,2),(3,3),(4,4)\}$$ Juga dianggap transitif karena tidak ada hubungan 2 relasi elemen yang
          saling terhubung</p>
      </li>
      <li>
        <p>Relasi $$R=\{(1,2),(3,4)\}$$ Juga dianggap transitif karena tidak bisa dihubungkan.</p>
      </li>
      <li>
        <p>Relasi $$R=\{(3,4)\}$$ Juga dianggap selalu transitif karena cuman berisi satu relasi.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Setangkup <em>(Symmetric)</em></strong></p>
    <p><strong>Definisi:</strong> Relasi $$R$$ pada himpunan $$A$$ dikatakan simetris jika dari $$aRb$$ menghasilkan $$bRa.$$</p>
    <p><strong>Notasi:</strong> $$\forall a,b\in A: aRb \to bRa$$</p>
    <p><strong>Contoh:</strong></p>
    <ul>
      <li>
        <p>Misal $$A=\{1,2,3,4\}$$ dan $$R=\{(1,2),(2,1),(3,4),(4,3)\},$$ relasi ini dikatakan simetris. Karena $$(1,2)$$ dan
          $$(2,1)\in R,$$ begitu juga $$(3,4)$$ dan $$(4,3)\in R.$$</p>
      </li>
      <li>
        <p>Tabel pasangan berbentuk:</p>
        <table>
          <thead>
            <tr>
              <th>$$(a,b)$$</th>
              <th>$$(b,a)$$</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$$(1,2)$$</td>
              <td>$$(2,1)$$</td>
            </tr>
            <tr>
              <td>$$(3,4)$$</td>
              <td>$$(4,3)$$</td>
            </tr>
          </tbody>
        </table>
      </li>
      <li>
        <p>Matrix $$R$$:</p>
        <p>$$M =\begin{array}{c c}
          &amp; \begin{array}{c c c} 1 &amp; 2 &amp; 3 &amp; 4\\ \end{array} \\
          \begin{array}{c c c} 1 \\ 2 \\ 3 \\ 4 \\ \end{array} &amp;
          \left[
          \begin{array}{c c c}
          0 &amp; 1 &amp; 0 &amp; 0 \\
          1 &amp; 0 &amp; 0 &amp; 0 \\
          0 &amp; 0 &amp; 0 &amp; 1 \\
          0 &amp; 0 &amp; 1 &amp; 0 \\
          \end{array}
          \right]
          \end{array}$$</p>
        <p>Jika direpresentasikan relasi menggunakan matriks, membentuk matriks simetris.</p>
      </li>
      <li>
        <p>Graf berarah</p>
        <figure>
          <img src="/assets/images/post/relasi-dan-fungsi/gambar7.png">
          <figcaption>Gambar 7. Representasi relasi graf berarah dari setangkup/simetris </figcaption>
        </figure>
      </li>
      <li>
        <p>Relasi $$R=\{(1,1),(2,2),(3,3),(4,4)\}$$ Juga dianggap simetris.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Tolak setangkup <em>(Antisymmetric)</em></strong></p>
    <p><strong>Definisi:</strong> Relasi $$R$$ pada himpunan $$A$$ dikatakan antisimetris jika dari $$aRb$$ dan $$bRa$$ selalu
      menghasilkan $$a=b.$$</p>
    <p><strong>Notasi:</strong> $$\forall a,b\in A: (aRb \land bRa) \to a=b$$</p>
    <p><strong>Contoh:</strong></p>
    <ul>
      <li>
        <p>Jika $$A=\{1,2,3,4\}$$ dan $$R=\{(1,1),(1,2),(1,3)\},$$ relasi ini bersifat antisimetris, karena $$(1,1)\in R$$ dan $$1=1.$$
          Relasi ini dikatakan juga tidak simetris karena $$(1,2)\in R$$ namun $$(2,1)\notin R,$$ begitu juga $$(1,3)\in R$$ namun
          $$(3,1)\notin R.$$</p>
      </li>
      <li>
        <p>Matriks $$R$$:</p>
        <p>$$M =\begin{array}{c c}
          &amp; \begin{array}{c c c} 1 &amp; 2 &amp; 3 &amp; 4\\ \end{array} \\
          \begin{array}{c c c} 1 \\ 2 \\ 3 \\ 4 \\ \end{array} &amp;
          \left[
          \begin{array}{c c c}
          1 &amp; 1 &amp; 1 &amp; 0 \\
          0 &amp; 0 &amp; 0 &amp; 0 \\
          0 &amp; 0 &amp; 0 &amp; 0 \\
          0 &amp; 0 &amp; 0 &amp; 0 \\
          \end{array}
          \right]
          \end{array}$$</p>
      </li>
      <li>
        <p>Graf berarah</p>
        <figure>
          <img src="/assets/images/post/relasi-dan-fungsi/gambar8.png">
          <figcaption>Gambar 8. Representasi relasi graf berarah dari tolak setangkup/antisimetris </figcaption>
        </figure>
      </li>
    </ul>
  </li>
</ol>

<h2 id="apa-itu-relasi-inversi">Apa itu relasi inversi?</h2>
<p>Relasi invers dari suatu relasi $$R$$ pada himpunan $$A$$ dan $$B$$ adalah relasi yang membalik arah panah dari $$R$$. Jika $$(a,b)$$
  adalah anggota dari $$R$$ dengan $$a$$ berasal dari $$A$$ dan $$b$$ berasal dari $$B$$, maka $$(b,a)$$ adalah anggota dari relasi inversnya,
  disimbolkan sebagai $$R^{-1}$$.</p>
<p><strong>Notasi:</strong></p>
<p>Jika $$R$$ adalah relasi pada himpunan $$A$$ dan $$B$$, maka relasi invers $$R^{-1}$$ dinotasikan sebagai:</p>
<p>$$R^{-1}=\{(b,a)|(a,b)\in R\}$$</p>
<p><strong>Contoh:</strong></p>
<ul>
  <li>
    <p>Misalkan kita memiliki himpunan $$A=\{1,2,3\}$$ dan himpunan $$B=\{a,b\}$$, serta relasi $$R$$ sebagai berikut:</p>
    <p>$$R=\{(1,a),(2,b),(3,a)\}$$</p>
    <p>Maka, relasi inversnya $$R^{-1}$$ adalah:</p>
    <p>$$R^{-1}=\{(a,1),(b,3),(a,3)\}$$</p>
  </li>
  <li>
    <p><strong>Representasi relasi dengan matriks</strong></p>
    <p>Jika kita menyajikan $$R$$ dan $$R^{-1}$$ dalam bentuk matriks, dengan baris mewakili himpunan $$A$$ dan kolom mewakili
      himpunan $$B$$, maka dapat ditulis sebagai berikut:</p>
    <p>$$M_{R} =\begin{array}{c c}
      &amp; \begin{array}{c c c} a &amp; b \\ \end{array} \\
      \begin{array}{c c c} 1 \\ 2 \\ 3 \\ \end{array} &amp;
      \left[
      \begin{array}{c c c}
      1 &amp; 0 \\
      0 &amp; 1 \\
      1 &amp; 0 \\
      \end{array}
      \right]
      \end{array}$$</p>
    <p>Sekarang, untuk mendapatkan matriks $$M_{R^{-1}}$$ yang merepresentasikan invers $$R^{-1}$$, kita membalikkan posisi
      baris dan kolom pada matriks $$M_{R}$$. Maka, matriks $$R^{-1}$$ akan menjadi:</p>
    <p>$$M_{R^{-1}} =\begin{array}{c c}
      &amp; \begin{array}{c c c} 1 &amp; 2 &amp; 3 \\ \end{array} \\
      \begin{array}{c c c} a \\ b \\ \end{array} &amp;
      \left[
      \begin{array}{c c c}
      1 &amp; 0 &amp; 1 \\
      0 &amp; 1 &amp; 0 \\
      \end{array}
      \right]
      \end{array}$$</p>
    <p>Dengan matriks $$M_{R^{-1}}$$, kita dapat melihat bahwa elemen di kolom ke-$$i$$ dan baris ke-$$j$$ menunjukkan apakah
      terdapat relasi invers dari elemen $$a_{i}$$ di himpunan A ke elemen $$b_{j}$$ di himpunan $$B$$.</p>
    <p>Untuk kode pythonnya:</p>
    <div class="code-container">
    <button class="copy-button">
      <i class="fas fa-copy"></i> Salin
    </button>
    <pre>
    <code class="python">

      import numpy as np

      # Matriks Relasi
      MR = np.array([[1, 0],
                    [0, 1],
                    [1, 0]])

      # Matriks Invers (transpose)
      MR_T = np.transpose(MR)

      print("Matriks MR:")
      print(MR)
      print("\nTransposenya (MR_T):")
      print(MR_T)

    </code>
    </pre>

  </div>      
  </li>
</ul>

<h2 id="apa-itu-kombinasi-relasi">Apa itu kombinasi relasi?</h2>
<p>Kombinasi relasi melibatkan penggabungan, irisan, selisih, dan beda setangkup dari dua relasi. Mari kita gunakan
  notasi matematis untuk setiap operasi:</p>
<p>Misal kita mempunyai himpunan $$A=\{1,2,3\}$$ dan himpunan $$B=\{x,y,z\}$$, serta relasi $$R$$ sebagai berikut:</p>
<p>$$R_{1}=\{(1,x),(2,y),(3,z)\}$$</p>
<p>$$R_{2}=\{(3,z),(1,y)\}$$</p>
<ul>
  <li>
    <p><strong>Gabungan $$(\cup)$$</strong></p>
    <p><strong>Notasi:</strong> $$R_{1}\cup R_{2}=\{(a,b)|(a,b)\in R_{1}\ atau\ (a,b)\in R_{2}\}$$</p>
    <p><strong>Contoh:</strong> $$R_{1}\cup R_{2}=\{(1,x),(2,y),(3,z),(1,y)\}$$</p>
  </li>
  <li>
    <p><strong>Irisan $$(\cap)$$</strong></p>
    <p><strong>Notasi:</strong> $$R_{1}\cap R_{2}=\{(a,b)|(a,b)\in R_{1}\ dan\ (a,b)\in R_{2}\}$$</p>
    <p><strong>Contoh:</strong> $$R_{1}\cap R_{2}=\{(3,z)\}$$</p>
  </li>
  <li>
    <p><strong>Selisih $$(-)$$</strong></p>
    <p><strong>Notasi:</strong> $$R_{1}-R_{2}=\{(a,b)|(a,b)\in R_{1}\ atau\ (a,b)\notin R_{2}\}$$</p>
    <p><strong>Contoh:</strong> $$R_{1}-R_{2}=\{(1,x),(2,y)\}$$</p>
  </li>
  <li>
    <p><strong>Beda setangkup $$(\bigoplus)$$</strong></p>
    <p><strong>Notasi:</strong> $$R_{1}\bigoplus R_{2}=(R_{1}-R_{2})\cup(R_{2}-R{1})$$</p>
    <p><strong>Contoh:</strong> $$R_{1}\bigoplus R_{2}=\{(1,x),(2,y),(1,y)\}$$</p>
  </li>
</ul>
<p>Mari dua relasi di atas kita buat matriksnya, kemudian kita melakukan gabungan dan irisan dengan notasi sebagai
  berikut:</p>
<p>$$M_{R_{1}\cup R_{2}}=M_{R_{1}\lor R_{2}}$$ dan $$M_{R_{1}\cap R_{2}}=M_{R_{1}\land R_{2}}$$</p>
<p>$$M_{R^{1}} =\begin{array}{c c}
  &amp; \begin{array}{c c c} x &amp; y &amp; z \\ \end{array} \\
  \begin{array}{c c c} 1 \\ 2 \\ 3 \\ \end{array} &amp;
  \left[
  \begin{array}{c c c}
  1 &amp; 0 &amp; 0 \\
  0 &amp; 1 &amp; 0 \\
  0 &amp; 0 &amp; 1 \\
  \end{array}
  \right]
  \end{array}$$</p>
<p>$$M_{R^{2}} =\begin{array}{c c}
  &amp; \begin{array}{c c c} x &amp; y &amp; z \\ \end{array} \\
  \begin{array}{c c c} 1 \\ 2 \\ 3 \\ \end{array} &amp;
  \left[
  \begin{array}{c c c}
  0 &amp; 1 &amp; 0 \\
  0 &amp; 0 &amp; 0 \\
  0 &amp; 0 &amp; 1 \\
  \end{array}
  \right]
  \end{array}$$</p>
<p>Maka:</p>
<p>$$M_{R_{1}\cup R_{2}}=M_{R_{1}\lor R_{2}} =\begin{array}{c c}
  &amp; \begin{array}{c c c} x &amp; y &amp; z \\ \end{array} \\
  \begin{array}{c c c} 1 \\ 2 \\ 3 \\ \end{array} &amp;
  \left[
  \begin{array}{c c c}
  1 &amp; 1 &amp; 0 \\
  0 &amp; 1 &amp; 0 \\
  0 &amp; 0 &amp; 1 \\
  \end{array}
  \right]
  \end{array}$$</p>
<p>$$M_{R_{1}\cap R_{2}}=M_{R_{1}\land R_{2}} =\begin{array}{c c}
  &amp; \begin{array}{c c c} x &amp; y &amp; z \\ \end{array} \\
  \begin{array}{c c c} 1 \\ 2 \\ 3 \\ \end{array} &amp;
  \left[
  \begin{array}{c c c}
  0 &amp; 0 &amp; 0 \\
  0 &amp; 0 &amp; 0 \\
  0 &amp; 0 &amp; 1 \\
  \end{array}
  \right]
  \end{array}$$</p>

<h2 id="apa-itu-komposisi-relasi">Apa itu komposisi relasi?</h2>
<p>Komposisi relasi adalah operasi gabungan dua relasi untuk membentuk relasi baru. Jika $$R$$ adalah relasi dari $$A$$ ke $$B$$ dan
  $$S$$ adalah relasi dari $$B$$ ke $$C$$, maka komposisi relasi $$R$$ dan $$S$$ adalah relasi $$T$$ dari $$A$$ ke $$C$$.</p>
<p><strong>Notasi:</strong></p>
<p>$$T=R\circ S$$</p>
<p>$$T=\{(a,c)|a\in A, c\in C, untuk\ beberapa\ b\in B,(a,b)\in R,dan\ (b,c)\in S\}$$</p>
<p><strong>Contoh:</strong></p>
<ul>
  <li>
    <p>Misalkan kita mempunyai himpunan:</p>
    <p>$$A=\{1,2,3\},\ B=\{x,y,z\},\ C=\{p,q\}$$</p>
    <p>Relasi $$R$$ dari $$A$$ ke $$B$$:</p>
    <p>$$R=\{(1,x),(2,y),(3,z)\}$$</p>
    <p>Serta relasi $$S$$ dari $$B$$ ke $$C$$:</p>
    <p>$$S=\{(x,p),(y,q),(z,p)\}$$</p>
    <p>Maka, komposisi relasi $$T=R\circ S$$ adalah:</p>
    <p>$$T=\{(1,p),(2,q),(3,p)\}$$</p>
  </li>
  <li>
    <p>Jika kita ingin mengkomposisikan dua matriks relasi $$R_{1}$$ dan $$R_{2}$$, kita menggunakan aturan perkalian matriks.
      Berikut notasinya:</p>
    <p>$$M_{R_{2}\circ R_{1}}=M_{R_{1}}\cdot M_{R_{2}}$$</p>
    <p>Misal kita mempunyai matriks sebagai berikut:</p>
    <p>$$M_{R_{1}} = \left[\begin{array}{rrr}
      0 &amp; 0 &amp; 1 \\
      1 &amp; 1 &amp; 0 \\
      0 &amp; 0 &amp; 0
      \end{array}\right]$$</p>
    <p>$$M_{R_{2}} = \left[\begin{array}{rrr}
      0 &amp; 1 &amp; 0 \\
      1 &amp; 0 &amp; 1 \\
      1 &amp; 0 &amp; 0 \\
      \end{array}\right]$$</p>
    <p>$$M_{R_{2}\circ R_{1}} = \left[\begin{array}{rrr}
      0 &amp; 0 &amp; 1 \\
      1 &amp; 1 &amp; 0 \\
      0 &amp; 0 &amp; 0 \\
      \end{array}\right] \times \left[\begin{array}{rrr}
      0 &amp; 1 &amp; 0 \\
      1 &amp; 0 &amp; 1 \\
      1 &amp; 0 &amp; 0 \\
      \end{array}\right]$$</p>
    <p>$$M_{R_{2}\circ R_{1}} = \left[\begin{array}{rrr}
      (0∧0)∨(0∧1)∨(1∧1) &amp; (0∧1)∨(0∧0)∨(1∧0) &amp; (0∧0)∨(0∧1)∨(1∧0) \\
      (1∧0)∨(1∧1)∨(0∧1) &amp; (1∧1)∨(1∧0)∨(0∧0) &amp; (1∧0)∨(1∧1)∨(0∧0) \\
      (0∧0)∨(0∧1)∨(0∧0) &amp; (0∧1)∨(0∧0)∨(0∧0) &amp; (0∧0)∨(0∧1)∨(0∧0)
      \end{array}\right]$$</p>
    <p>$$M_{R_{2}\circ R_{1}} = \left[\begin{array}{rrr}
      0∨0∨1 &amp; 0∨0∨0 &amp; 0∨0∨0 \\
      0∨1∨0 &amp; 1∨0∨0 &amp; 0∨1∨0 \\
      0∨0∨0 &amp; 0∨0∨0 &amp; 0∨0∨0 \\
      \end{array}\right]$$</p>
    <p>$$M_{R_{2}\circ R_{1}} = \left[\begin{array}{rrr}
      1 &amp; 0 &amp; 0 \\
      1 &amp; 1 &amp; 1 \\
      0 &amp; 0 &amp; 0 \\
      \end{array}\right]$$</p>
    <p>Untuk kode pythonnya:</p>
    <div class="code-container">
    <button class="copy-button">
      <i class="fas fa-copy"></i> Salin
    </button>
    <pre>
    <code class="python">

      import numpy as np

      # Matriks R1
      R1 = np.array([[0, 0, 1],
                    [1, 1, 0],
                    [0, 0, 0]])

      # Matriks R2
      R2 = np.array([[0, 1, 0],
                    [1, 0, 1],
                    [1, 0, 0]])

      # Komposisi matriks R1 dan R2
      komposisi_matriks = np.dot(R1, R2)

      print("Matriks R1:")
      print(R1)
      print("\nMatriks R2:")
      print(R2)
      print("\nHasil Komposisi (R1 ∘ R2):")
      print(komposisi_matriks)

    </code>
    </pre>

  </div>
  </li>
</ul>

<h2 id="apa-itu-relasi-n-ray">Apa itu relasi n-ray?</h2>
<p>Relasi n-ray <em>(baca: ener)</em> adalah jenis relasi matematika yang melibatkan lebih dari dua himpunan, biasanya
  terdiri dari $$n$$ himpunan, dengan $$n$$ lebih besar dari 2 $$(n&gt;2)$$. Relasi ini dapat didefinisikan sebagai himpunan tupel
  nilai yang diambil dari himpunan-himpunan tersebut. Secara formal, relasi n-ary dapat direpresentasikan sebagai
  himpunan tupel $$(a_{1},a_{2},\dots,a_{n})$$, di mana setiap $$a_{i}$$ adalah elemen dari himpunan yang sesuai.</p>
<p><strong>Notasi:</strong></p>
<p>Jika $$A_{1},A_{2},\dots,A_{n}$$ adalah himpunan-himpunan, maka relasi n-ray $$R$$ dapat diwakili sebagai himpunan semua
  n-tuple $$(a_{1},a_{2},\dots,a_{n})$$ di mana $$a_{i}\in A_{i}$$ untuk $$i=1,2,\dots,n$$. Notasi matematisnya:</p>
<p>$$R\subseteq A_{1}\times A_{2}\times\dots\times A_{n}$$</p>
<p><strong>Contoh:</strong></p>
<p>Misal kita mempunyai himpunan:</p>
<p>$$Nama=\{Ainur,Badrus,Caca,Danang,Anwar\}$$</p>
<p>$$Mata\ Kuliah=\{Matematika, Fisika, Biologi\}$$</p>
<p>$$ilai=\{A,B,C\}$$</p>
<p>$$Semester =\{Ganjil, Genap\}$$</p>
<p>$$Tahun\ Ajaran=\{2021,2022\}$$</p>
<p>Mari kita buat relasi 5-ray Mahasiswa:</p>
<p>$$Mahasiswa\subseteq Nama\times Mata\ Kuliah\times Nilai\times Semester\times Tahun\ Ajaran$$</p>
<p>
  $$Mahasiswa=\{\\(Ainur,Matematika,A,Ganjil,2021),\\(Badrus,Fisika,B,Genap,2021),\\(Caca,Biologi,C,Ganjil,2022),\\(Danang,Matematika,B,Genap,2021),\\
  (Anwar,Biologi,B,Genap,2022)\\\}$$</p>
<p>Relasi Mahasiswa di atas juga dapat disajikan dalam bentuk tabel:</p>
<table>
  <thead>
    <tr>
      <th>Nama</th>
      <th>Mata Kuliah</th>
      <th>Nilai</th>
      <th>Semester</th>
      <th>Tahun Ajaran</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Ainur</td>
      <td>Matematika</td>
      <td>A</td>
      <td>Ganjil</td>
      <td>2021</td>
    </tr>
    <tr>
      <td>Badrus</td>
      <td>Fisika</td>
      <td>B</td>
      <td>Genap</td>
      <td>2021</td>
    </tr>
    <tr>
      <td>Caca</td>
      <td>Biologi</td>
      <td>C</td>
      <td>Ganjil</td>
      <td>2022</td>
    </tr>
    <tr>
      <td>Danang</td>
      <td>Matematika</td>
      <td>B</td>
      <td>Genap</td>
      <td>2021</td>
    </tr>
    <tr>
      <td>Anwar</td>
      <td>Biologi</td>
      <td>B</td>
      <td>Genap</td>
      <td>2022</td>
    </tr>
  </tbody>
</table>

<h2 id="apa-itu-basis-data">Apa itu basis data?</h2>
<p>Basis Data adalah kumpulan informasi yang terorganisir secara terstruktur untuk diakses, dikelola, dan diperbarui
  dengan efisien. Basis data biasanya terdiri dari tabel-tabel yang saling terhubung. Dalam basis data, n-ray digunakan
  pada relasi atau hubungan antara tabel. Misalnya, n-ray 1 (one-to-one) jika setiap baris di tabel pertama berhubungan
  dengan satu baris di tabel kedua, n-ray $$n$$ (many-to-many) jika satu baris di tabel pertama dapat berhubungan dengan
  banyak baris di tabel kedua.</p>
<h3>Operator dalam basis data</h3>
<p>Operator dalam basis data mengacu pada berbagai operasi yang dapat dilakukan pada data atau tabel dalam suatu sistem
  manajemen basis data (DBMS). Beberapa operator umum dalam basis data melibatkan manipulasi, penyaringan, dan
  penggabungan data. Di bawah ini merupakan jenis-jenis operator dalam basis data. Sebelum menjelaskan lebih detail,
  mari kita buat dahulu dua tabel untuk dipraktikkan di setiap contoh operator.</p>
<p><strong>Tabel Mahasiswa</strong></p>
<table>
  <thead>
    <tr>
      <th>NIM</th>
      <th>Nama</th>
      <th>Mata_Kuliah</th>
      <th>Nilai</th>
      <th>Semester</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>361551</td>
      <td>Ainur</td>
      <td>Matematika</td>
      <td>85</td>
      <td>2</td>
    </tr>
    <tr>
      <td>361552</td>
      <td>Ika</td>
      <td>Fisika</td>
      <td>78</td>
      <td>2</td>
    </tr>
    <tr>
      <td>361553</td>
      <td>Novi</td>
      <td>Kimia</td>
      <td>92</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
<p><strong>Tabel Mahasiswa_Info</strong></p>
<table>
  <thead>
    <tr>
      <th>NIM</th>
      <th>Nama</th>
      <th>Jenis_Kelamin</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>361551</td>
      <td>Ainur</td>
      <td>Laki-laki</td>
    </tr>
    <tr>
      <td>361552</td>
      <td>Ika</td>
      <td>Perempuan</td>
    </tr>
    <tr>
      <td>361553</td>
      <td>Novi</td>
      <td>Perempuan</td>
    </tr>
  </tbody>
</table>
<ol>
  <li>
    <p><strong>Seleksi $$(\sigma)$$</strong></p>
    <p>Seleksi digunakan untuk memilih baris tertentu berdasarkan kondisi tertentu.</p>
    <p><strong>Contoh:</strong></p>
    <p>Misal kita mempunyai query seperti ini: $$\sigma Nilai&gt;80^{(Mahasiswa)}$$</p>
    <p>Query tersebut dibaca: "Pilih semua mahasiswa yang mendapatkan nilai di atas 80 dari tabel Mahasiswa". Hasilnya:
    </p>
    <table>
      <thead>
        <tr>
          <th><strong>NIM</strong></th>
          <th><strong>Nama</strong></th>
          <th><strong>Mata_Kuliah</strong></th>
          <th><strong>Nilai</strong></th>
          <th><strong>Semester</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>361551</td>
          <td>Ainur</td>
          <td>Matematika</td>
          <td>85</td>
          <td>2</td>
        </tr>
        <tr>
          <td>361553</td>
          <td>Novi</td>
          <td>Kimia</td>
          <td>92</td>
          <td>1</td>
        </tr>
      </tbody>
    </table>
    <p>Untuk kode SQL nya:</p>
    <div class="code-container">
    <button class="copy-button">
      <i class="fas fa-copy"></i> Salin
    </button>
    <pre>
    <code class="sql">

      SELECT * FROM Mahasiswa WHERE Nilai &gt; 80;

    </code>
    </pre>

  </div>    
  </li>
  <li>
    <p><strong>Proyeksi $$(\pi)$$</strong></p>
    <p>Proyeksi digunakan untuk memilih kolom tertentu dari sebuah tabel. Jika ada baris yang nilainya sama, maka yang
      diambil hanya satu data.</p>
    <p><strong>Contoh:</strong></p>
    <p>Misal kita mempunyai query seperti ini: $$\pi NIM, Nama, Nilai^{(Mahasiswa)}$$</p>
    <p>Query tersebut dibaca: "Pilih hanya kolom NIM, Nama, dan Nilai dari tabel Mahasiswa". Hasilnya:</p>
    <table>
      <thead>
        <tr>
          <th><strong>NIM</strong></th>
          <th><strong>Nama</strong></th>
          <th><strong>Nilai</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>361551</td>
          <td>Ainur</td>
          <td>85</td>
        </tr>
        <tr>
          <td>361552</td>
          <td>Ika</td>
          <td>78</td>
        </tr>
        <tr>
          <td>361553</td>
          <td>Novi</td>
          <td>92</td>
        </tr>
      </tbody>
    </table>
    <p>Untuk kode SQL nya:</p>
    <div class="code-container">
    <button class="copy-button">
      <i class="fas fa-copy"></i> Salin
    </button>
    <pre>
    <code class="sql">

      SELECT NIM, NAMA, Nilai FROM Mahasiswa;

    </code>
    </pre>

  </div>
  </li>
  <li>
    <p><strong>Join $$(\tau)$$</strong></p>
    <p>Join digunakan untuk menggabungkan baris dari dua atau lebih tabel berdasarkan kondisi tertentu.</p>
    <p><strong>Contoh:</strong></p>
    <p>Misal kita mempunyai query seperti ini: $$\tau NIM^{(Mahasiswa, Mahasiswa\_Info)}$$</p>
    <p>Query tersebut dibaca: "Gabungkan tabel Mahasiswa dan Mahasiswa_Info berdasarkan NIM". Hasilnya:</p>
    <table>
      <thead>
        <tr>
          <th><strong>NIM</strong></th>
          <th><strong>Nama</strong></th>
          <th><strong>Mata_Kuliah</strong></th>
          <th><strong>Nilai</strong></th>
          <th><strong>Semester</strong></th>
          <th><strong>Jenis_Kelamin</strong></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>361551</td>
          <td>Ainur</td>
          <td>Matematika</td>
          <td>85</td>
          <td>2</td>
          <td>Laki-laki</td>
        </tr>
        <tr>
          <td>361552</td>
          <td>Ika</td>
          <td>Fisika</td>
          <td>78</td>
          <td>2</td>
          <td>Perempuan</td>
        </tr>
        <tr>
          <td>361553</td>
          <td>Novi</td>
          <td>Kimia</td>
          <td>92</td>
          <td>1</td>
          <td>Perempuan</td>
        </tr>
      </tbody>
    </table>
    <p>Untuk kode SQL nya:</p>
    <div class="code-container">
    <button class="copy-button">
      <i class="fas fa-copy"></i> Salin
    </button>
    <pre>
    <code class="sql">

      SELECT * FROM Mahasiswa JOIN Mahasiswa_Info ON Mahasiswa.NIM = Mahasiswa_Info.NIM;

    </code>
    </pre>

  </div>
  </li>
</ol>

<h2 id="apa-itu-fungsi">Apa itu fungsi?</h2>
<p>Fungsi disebut juga pemetaan atau transformasi adalah relasi khusus di antara dua himpunan, di mana setiap elemen
  dari himpunan pertama (domain) dihubungkan/dipetakan dengan satu elemen di himpunan kedua (kodomain). Dengan kata
  lain, jika $$(a,b)\in f$$ dan $$(a,c)\in f$$, maka $$b=c$$. Jika satu elemen dari himpunan pertama memiliki lebih dari satu relasi
  ke elemen kedua, itu bukanlah fungsi.</p>
<p><strong>Notasi:</strong></p>
<p>$$f:A\to B$$</p>
<p>Di mana:</p>
<ul>
  <li>
    <p>$$f$$ adalah simbol fungsi.</p>
  </li>
  <li>
    <p>$$A$$ adalah himpunan pertama yang disebut sebagai domain fungsi.</p>
  </li>
  <li>
    <p>$$B$$ adalah himpunan kedua, yang disebut sebagai kodomain fungsi.</p>
  </li>
</ul>
<p>Notasi di atas menjelaskan bahwa setiap elemen di himpunan $$A$$ memiliki nilai yang unik di himpunan $$B$$. Inilah yang
  membuat fungsi dikatakan sebagai relasi yang khusus. Selain itu dapat dinotasikan $$f(a)=b$$, di mana $$a$$ adalah elemen dari
  himpunan $$A$$ yang dihubungkan dengan elemen $$b$$ dari himpunan $$B$$. Sebagai catatan, $$b$$ disebut bayangan <em>(image)</em> dari
  $$a$$, sedangkan $$a$$ disebut pra-bayangan <em>(pre-image)</em> dari $$b$$.</p>
<p><strong>Contoh:</strong></p>
<ul>
  <li>
    <p>Misal kita mempunyai himpunan:</p>
    <p>$$A=\{1,2,3\}$$, $$B=\{x,y,z\}$$</p>
    <p>Relasi $$f$$ dari $$A$$ ke $$B$$:</p>
    <p>$$f=\{(1,x),(2,y),(3,z)\}$$</p>
    <p>Relasi $$f$$ dari $$A$$ ke $$B$$ di atas disebut fungsi, karena setiap elemen dari $$A$$ dipetakan secara unik ke $$B$$.</p>
    <p>Oh iya, dalam fungsi ada yang dinamakan dengan jelajah <em>(range)</em> dari $$f$$, yaitu himpunan yang berisi semua
      nilai pemetaan $$f$$ atau himpunan bagian <em>(proper subset)</em> dari $$B$$. Pada contoh di atas jelajah dari $$f$$ adalah
      $$\{x,y,z\}$$.</p>
  </li>
  <li>
    <p>Kita buat relasi $$f$$ dari $$A$$ ke $$B$$ lagi pakai himpunan di atas:</p>
    <p>$$f=\{(1,x),(2,z)\}$$</p>
    <p>Relasi $$f$$ dari $$A$$ ke $$B$$ di atas tidak bisa disebut fungsi. Karena, tidak semua elemen $$A$$ dipetakan ke $$B$$. Ingat
      baik-baik definisi fungsi ya 😁.</p>
  </li>
  <li>
    <p>Kita buat relasi $$f$$ dari $$A$$ ke $$B$$ lagi pakai himpunan di atas:</p>
    <p>$$f=\{(1,x),(1,y),(2,z),(3,x)\}$$</p>
    <p>Relasi $$f$$ dari $$A$$ ke $$B$$ di atas tidak bisa disebut fungsi. Karena, pada elemen $$A$$ dipetakan lebih dari satu ke elemen
      $$B$$. Pahami baik-baik konsep fungsi 😎.</p>
  </li>
</ul>

<h3>Spesifikasi fungsi</h3>
<ol>
  <li>
    <p><strong>Himpunan pasangan terurut</strong></p>
    <p>Fungsi dapat direpresentasikan dalam bentuk himpunan pasangan terurut, di mana setiap pasangan terdiri dari
      elemen-elemen dari dua himpunan, yaitu domain dan kodomain. Setiap elemen domain dipetakan ke elemen dalam
      kodomain secara unik.</p>
    <p><strong>Contoh:</strong></p>
    <p>Jika $$f$$ adalah fungsi yang memetakan bilangan bulat $$(\mathbb{Z})$$ ke bilangan genap $$(\mathbb{E})$$, maka
      $$f=\{(1,2),(2,4),(3,6),\cdots\}$$ adalah himpunan pasangan terurut yang merepresentasikan fungsi tersebut.</p>
  </li>
  <li>
    <p><strong>Formula pengisian nilai <em>(assignment)</em></strong></p>
    <p>Fungsi dapat direpresentasikan dengan cara formula pengisian nilai atau <em>assignment</em>, di mana diberikan
      formula matematis yang menggambarkan bagaimana nilai <em>output</em> muncul berdasarkan nilai <em>input</em>.</p>
    <p><strong>Contoh:</strong></p>
    <p>Pada fungsi linear $$f(x)=mx+b$$ memiliki formula pengisian nilai $$f(x)$$, di mana $$m$$ adalah kemiringan garis dan $$b$$ adalah
      perpotongan sumbu $$y$$.</p>
  </li>
  <li>
    <p><strong>Kata-kata/deskripsi</strong></p>
    <p>Fungsi dapat dijabarkan menggunakan kata-kata, yaitu dengan mendeskripsikan secara verbal hubungan antara
      elemen-elemen dalam domain dan kodomain.</p>
    <p><strong>Contoh:</strong></p>
    <p>Misalkan $$g$$ adalah fungsi yang menggambarkan peningkatan gaji berdasarkan pengalaman kerja. Deskripsi atau kata-kata
      fungsinya adalah: "Fungsi $$g$$ memetakan setiap tahun pengalaman kerja $$(x)$$ ke gaji $$(g(x))$$, di mana gaji meningkat
      seiring dengan bertambahnya pengalaman."</p>
  </li>
  <li>
    <p><strong>Kode program</strong></p>
    <p>Fungsi dapat diimplementasikan ke dalam bahasa pemrograman. Kode program ini menjelaskan cara nilai
      <em>output</em> keluar berdasarkan nilai <em>input</em>.
    </p>
    <p><strong>Contoh:</strong></p>
    <p>Mari kita gunakan bahasa pemrogaman Python untuk membuat fungsi kuadrat:</p>
    <div class="code-container">
    <pre>
    <code class="python">

      def kuadrat(x):
        return x**2

    </code>
    </pre>

  </div>
    <p>Fungsi ini mengambil $$x$$ dan mengembalikan $$x^{2}$$ sebagai <em>output</em>.</p>
  </li>
  <li>
    <p><strong>Kurva/grafik kartesian</strong></p>
    <p>Fungsi dapat direpresentasikan secara visual menggunakan grafik kartesian dalam bentuk kurva atau garis pada
      sistem koordinat kartesian. Setiap titik pada grafik merepresentasikan pasangan nilai <em>input</em> dan
      <em>output</em> fungsi.
    </p>
    <p><strong>Contoh:</strong></p>
    <p>Grafik fungsi kuadrat $$f(x)=x^{2}$$ membentuk parabola yang membuka ke atas pada bidang kartesian. Titik-titik pada
      parabola ini merepresentasikan pasangan <em>input</em> dan <em>output</em> dari fungsi kuadrat.</p>
    <p>Berikut grafik kartesian dari $$f(x)=x^{2}$$</p>
    <figure>
          <img src="/assets/images/post/relasi-dan-fungsi/gambar9.png">
          <figcaption>Gambar 9. Grafik kartesian dari fungsi kuadrat </figcaption>
        </figure>
    <p>Oh iya,
      grafik ini saya buat dengan bahasa python dengan bantuan library <code>numpy</code> dan <code>matplotlib</code>,
      berikut kodenya:</p>
<div class="code-container">
<button class="copy-button">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code class="python">

    import matplotlib.pyplot as plt
    import numpy as np

    # Fungsi kuadrat
    def quadratic_function(x):
      return x**2

    # Generate nilai x dari -10 hingga 10 dengan selang 0.1
    x_values = np.arange(-10, 10.1, 0.1)

    # Hitung nilai y untuk setiap x menggunakan fungsi kuadrat
    y_values = quadratic_function(x_values)

    # Plot grafik
    plt.plot(x_values, y_values, label='f(x) = x^2')

    # Menambahkan label dan judul
    plt.xlabel('Nilai x')
    plt.ylabel('Nilai f(x)')
    plt.title('Grafik Fungsi Kuadrat')

    # Menambahkan grid
    plt.grid(True)

    # Menampilkan legenda
    plt.legend()

    # Menampilkan grafik
    plt.show()

  </code>
  </pre>
</div>
  </li>
</ol>

<h3>Sifat-sifat fungsi</h3>
<ol>
  <li>
    <p><strong>Satu ke satu atau injektif <em>(injective)</em></strong></p>
    <p>Suatu fungsi dikatakan bersifat injektif jika setiap elemen dalam domain dipetakan ke elemen yang berbeda dalam
      kodomain. Dengan kata lain, tidak ada dua atau lebih elemen berbeda dalam domain yang dipetakan ke elemen yang
      sama dalam kodomain.</p>
    <p><strong>Notasi:</strong> $$a,b\in A, f(a)\neq f(b)\ hanya\ jika\ a\neq b; f(a)=f(b)\ hanya\ jika\ a=b$$</p>
    <p><strong>Contoh:</strong></p>
    <p>Misal kita mempunyai himpunan:</p>
    <p>$$A=\{1,2,3\}$$, $$B=\{x,y,z\}$$</p>
    <ul>
      <li>
        <p>Relasi $$f$$ dari $$A$$ ke $$B$$</p>
        <p>$$f=\{(1,x),(2,y),(3,z)\}$$</p>
        <p>Relasi ini dikatakan fungsi yang bersifat injektif, dikarenakan tidak ada elemen yang sama yang dipetakan
          dalam himpunan $$B$$.</p>
      </li>
      <li>
        <p>Relasi $$f$$ dari $$A$$ ke $$B$$</p>
        <p>$$f=\{(1,x),(2,x),(3,z)\}$$</p>
        <p>Relasi ini dikatakan fungsi yang tidak bersifat injektif, dikarenakan ada elemen yang sama yang dipetakan
          dalam himpunan $$B$$, yaitu elemen $$(x)$$.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Pada <em>(onto)</em> atau surjektif <em>(surjective)</em></strong></p>
    <p>Suatu fungsi dikatakan bersifat surjektif jika setiap elemen dalam kodomain memiliki setidaknya satu elemen dalam
      domain yang dipetakan.</p>
    <p><strong>Contoh:</strong></p>
    <p>Misal kita mempunyai himpunan:</p>
    <p>$$A=\{1,2,3\}, B=\{x,y,z\}$$</p>
    <ul>
      <li>
        <p>Relasi $$f$$ dari $$A$$ ke $$B$$</p>
        <p>$$f=\{(1,x),(2,y),(3,z)\}$$</p>
        <p>Relasi ini dikatakan fungsi yang bersifat surjektif, dikarenakan semua elemen dari himpunan $$B$$ dipetakan pada
          elemen dari himpunan $$A$$.</p>
      </li>
      <li>
        <p>Relasi $$f$$ dari $$A$$ ke $$B$$</p>
        <p>$$f=\{(1,x),(2,x),(3,z)\}$$</p>
        <p>Relasi ini dikatakan fungsi yang tidak bersifat surjektif, dikarenakan ada elemen pada himpunan $$B$$ yang tidak
          dipetakan pada elemen dari himpunan $$A$$, yaitu elemen $$(z)$$.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Berkoresponden satu ke satu atau bijeksi <em>(bijection)</em></strong></p>
    <p>Suatu fungsi dikatakan bersifat bijeksi jika fungsi tersebut bersifat injektif <strong>dan</strong> surjektif.
    </p>
    <p><strong>Contoh:</strong></p>
    <p>Misal kita mempunyai himpunan:</p>
    <p>$$A=\{1,2,3\}$$, $$B=\{x,y,z\}$$</p>
    <p>Relasi $$f$$ dari $$A$$ ke $$B$$</p>
    <p>$$f=\{(1,x),(2,y),(3,z)\}$$</p>
    <p>Relasi ini dikatakan fungsi yang bersifat bijeksi, karena bersifat injektif dan surjektif.</p>
  </li>
  <li>
    <p><strong>Fungsi inversi</strong></p>
    <p>Fungsi inversi adalah fungsi yang memetakan setiap elemen dalam kodomain ke elemen yang sesuai dalam domain.
      Dengan kata lain, jika $$f$$ memetakan $$a$$ ke $$b$$, maka fungsi invers $$f^{-1}$$ memetakan $$b$$ kembali ke $$a$$. Oh iya, fungsi
      invers hanya ada jika fungsi $$f$$ bersifat injektif <strong>dan</strong> surjektif ya.</p>
    <p><strong>Notasi:</strong> $$a\in A,b\in B,f(a)=b\to f^{-1}(b)=(a)$$</p>
    <p><strong>Contoh:</strong></p>
    <p>Misal kita mempunyai himpunan:</p>
    <p>$$A=\{1,2,3\}$$, $$B=\{x,y,z\}$$</p>
    <p>Relasi $$f$$ dari $$A$$ ke $$B$$</p>
    <p>$$f=\{(1,x),(2,y),(3,z)\}$$</p>
    <p>Maka relasi inversnya adalah</p>
    <p>$$f^{-1}=\{(x,1),(y,2),(z,3)\}$$</p>
  </li>
</ol>

<h2 id="apa-itu-komposisi-fungsi">Apa itu komposisi fungsi?</h2>
<p>Komposisi fungsi adalah operasi matematika yang digunakan untuk menggabungkan dua atau lebih fungsi untuk membentuk
  fungsi baru.</p>
<p><strong>Notasi:</strong></p>
<p>Jika $$g:A\to B$$ dan $$f:B\to C$$, maka komposisi fungsi $$f$$ dengan $$g$$ dinyatakan sebagai: $$(f\circ g)(x)=f(g(x))$$</p>
<p><strong>Contoh:</strong></p>
<p>Misal kita punya himpunan:</p>
<p>$$A=\{1,2,3\}$$, $$B=\{x,y,z\}$$, $$C=\{i,j,k\}$$</p>
<p>relasi $$g$$ dari $$A$$ ke $$B$$: $$g=\{(1,x),(2,y),(3,z)\}$$</p>
<p>relasi $$f$$ dari $$B$$ ke $$C$$: $$f=\{(x,i),(y,j),(z,k)\}$$</p>
<p>Maka, $$f\circ g=\{(1,i),(2,j),(3,k)\}$$</p>
<p>Komposisi fungsi sendiri tidak komutatif. Artinya, urutan fungsi dalam komposisi mempengaruhi hasilnya. Secara
  formal, jika $$g:A\to B$$ dan $$f:B\to C$$, maka:</p>
<p>$$(f\circ g)(x)\neq(f\circ g)(x)$$</p>
<p>Artinya, $$f\circ g$$ tidak sama dengan $$g\circ f$$.</p>
<p><strong>Contoh:</strong></p>
<p>Misal kita memiliki dua fungsi:</p>
<p>$$f(x)=2x$$ dan $$g(x)=x^{2}$$</p>
<p>Kemudian kita bentuk komposisi $$f\circ g$$ dan $$g\circ f$$:</p>
<p>$$(f\circ g)(x)=f(g(x))=f(x^{2})=2x^{2}$$</p>
<p>$$g\circ f(x)=g(f(x))=g(2x)=(2x)^{2}=4x^{2}$$</p>
<p>Dengan demikian, $$f\circ g$$ tidak sama dengan $$g\circ f$$ dalam contoh ini. Oleh karena itu, komposisi fungsi tidak
  bersifat komutatif secara umum, kecuali jika $$f$$ = $$g$$.</p>

<h2 id="apa-saja-beberapa-fungsi-khusus">Apa saja beberapa fungsi khusus?</h2>
<ol>
  <li>
    <p><strong>Floor</strong></p>
    <p>Fungsi <em>floor</em> digunakan untuk membulatkan nilai ke bawah.</p>
    <p><strong>Notasi:</strong> \lfloor x\rfloor=max\{n\in \mathbb{Z}|n\le x\}</p>
    <p><strong>Contoh:</strong> \lfloor3.8 \rfloor=3,\ \lfloor-2.5\rfloor=-3</p>
    <p><strong>Kode python:</strong></p>
    <pre><code class="fenced-code-block language-python">import math
x = 3.8
hasil = math.floor(x)
print(hasil)</code></pre>
  </li>
  <li>
    <p><strong>Ceiling</strong></p>
    <p>Fungsi <em>ceiling</em> digunakan untuk membulatkan nilai ke atas.</p>
    <p><strong>Notasi:</strong> \lceil x\rceil=min\{n\in \mathbb{Z}|n\ge x\}</p>
    <p><strong>Contoh:</strong> \lceil 3.2\rceil=4,\ \lceil -1.6 \rceil=-1</p>
    <p><strong>Kode python:</strong></p>
    <pre><code class="fenced-code-block language-python">import math
x = 3.2
hasil = math.ceil(x)
print(hasil)</code></pre>
  </li>
  <li>
    <p><strong>Modulo</strong></p>
    <p>Fungsi <em>modulo</em> digunakan untuk menghitung sisa bagi.</p>
    <p><strong>Notasi:</strong> a\ mod\ b=a-b\lfloor\frac{a}{b}\rfloor</p>
    <p><strong>Contoh:</strong> 17\ mod\ 5=2,\ -14\ mod\ 3=1</p>
    <p><strong>Kode python:</strong></p>
    <pre><code class="fenced-code-block language-python">a = 17
b = 5
hasil = a % b
print(hasil)</code></pre>
  </li>
  <li>
    <p><strong>Faktorial</strong></p>
    <p>Faktorial dari suatu bilangan n(n!) adalah hasil perkalian semua bilangan positif dari 1 hinggan n. Penerapan
      pada bidang komputer, digunakan dalam perhitungan kombinatorika, algoritma</p>
    <p><strong>Notasi:</strong> n!=n\times (n-1)\times\cdots\times2\times1</p>
    <p><strong>Contoh:</strong> 5!=5\times4\times3\times2\times1=120</p>
    <p><strong>Kode python:</strong></p>
    <pre><code class="fenced-code-block language-python">import math

n = 5
hasil = math.factorial(n)
print(hasil)</code></pre>
  </li>
  <li>
    <p><strong>Eksponensial</strong></p>
    <p>Eksponensial adalah fungsi matematika yang menghitung pertumbuhan eksponesial. Nilai e adalah konstanta Euler.
      Apa itu konstanta euler?. Konstanta euler adalah suatu bilangan irrasional yang memiliki nilai kira-kira 2.71828.
      Konstanta ini memiliki peran penting dalam banyak cabang matematika, fisika, dan rekayasa.</p>
    <p><strong>Notasi:</strong></p>
    <ul>
      <li>
        <p>Eksponen positif: a_{n}=a\times a\times \cdots\times a</p>
      </li>
      <li>
        <p>Eksponen negatif: a^{-n}=\frac{1}{a^{n}}</p>
      </li>
    </ul>
    <p> <strong>Contoh</strong></p>
<ul>
  <li>
    <p>Eksponen positif: 2^{3}=2\times 2\times 2=8</p>
  </li>
  <li>
    <p>Eksponen negatif: 2^{-3}=\frac{1}{2^{3}}=\frac{1}{8}</p>
  </li>
</ul>
<p> <strong>Kode python:</strong></p>

    <div class="code-container">
    <button class="copy-button">
      <i class="fas fa-copy"></i> Salin
    </button>
      <pre>
      <code class="python">

      # Perpangkatan dengan eksponen positif
      base_pos = 2
      exponent_pos = 3
      result_pos = base_pos ** exponent_pos
      print(f"{base_pos}^{exponent_pos} = {result_pos}")

      </code>
      </pre>
    </div>

    <div class="code-container">
    <button class="copy-button">
      <i class="fas fa-copy"></i> Salin
    </button>
      <pre>
      <code class="python">

      # Perpangkatan dengan eksponen negatif
      base_neg = 2
      exponent_neg = -3
      result_neg = base_neg ** exponent_neg
      print(f"{base_neg}^{exponent_neg} = {result_neg}")

      </code>
      </pre>
    </div>

  </li>
</ol>

<ol start="6">
  <li>
    <p><strong>Logaritmik</strong></p>
    <p>Fungsi logaritma adalah kebalikan dari fungsi eksponensial. Logaritma sering digunakan dalam analisis
      kompleksitas algoritma.</p>
    <p><strong>Notasi:</strong> ^{b}log\ x=y\leftrightarrow b^{y}=x</p>
    <p><strong>Contoh:</strong> ^{2}log(8)=3 \leftrightarrow 2^{3} = 8</p>
    <p><strong>Kode python:</strong></p>
    <div class="code-container">
    <button class="copy-button">
      <i class="fas fa-copy"></i> Salin
    </button>
      <pre>
      <code class="python">

      import math

      x = 8
      base = 2
      result = math.log(x, base)
      print(result)

      </code>
      </pre>
    </div>
  </li>
</ol>