---
title: "Relasi dan Fungsi"
date: 2023-12-06T00:00:00+00:00
update: 2023-12-13T00:00:00+00:00
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
