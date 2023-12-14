---
title: "Relasi dan Fungsi"
date: 2023-12-06T00:00:00+00:00
update: 2023-12-14T00:00:00+00:00
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
      dalam relasi dengan dirinya sendiri, yaitu $$aRa$$.</p>
    <p><strong>Notasi:</strong> $$\forall a\in A:aRa$$</p>
    <p><strong>Contoh</strong>:</p>
    <ul>
      <li>
        <p>Misal $$A=\{1,2,3\}$$ dan $$R=\{(1,1),(2,2),(3,3)\},$$ relasi ini dikatakan refleksif.</p>
      </li>
      <li>
        <p>Matriks R:</p>
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
        <p>Matrix R:</p>
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
        <p>Misal $$A=\{1,2,3,4\}$$ dan $$R=\{(1,2),(2,1),(3,4),(4,3)\},$$ relasi ini dikatakan simetris. Karena $$(1,2)$$ dan $$(2,1)\in R$$, begitu juga $$(3,4)$$ dan $$(4,3)\in R.$$</p>
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
        <p>Matrix R:</p>
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
    <p><strong>Definisi;</strong> Relasi $$R$$ pada himpunan $$A$$ dikatakan antisimetris jika dari $$aRb$$ dan $$bRa$$ selalu
      menghasilkan $$a=b.$$</p>
    <p><strong>Notasi:</strong> $$\forall a,b\in A: (aRb \land bRa) \to a=b$$</p>
    <p><strong>Contoh:</strong></p>
    <ul>
      <li>Jika $$A=\{1,2,3,4\}$$ dan $$R=\{(1,1),(1,2),(1,3)\},$$ relasi ini bersifat antisimetris, karena $$(1,1)\in R$$ dan $$1=1.$$ Relasi ini
        dikatakan juga tidak simetris karena $$(1,2)\in R$$ namun $$(2,1)\notin R$$, begitu juga $$(1,3)\in R$$ namun $$(3,1)\notin R.$$
      </li>
      <li>
        <p>Matriks R:</p>
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
