---
title: "Perbedaan Signed dan Unsigned pada Tipe Data Integer"
date: 2023-08-25T00:00:00+00:00
update: 2023-08-25T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /perbedaan-signed-dan-unsigned-pada-tipe-data-integer/
image: "/assets/images/post/perbedaan-signed-dan-unsigned-pada-tipe-data-integer/gambar0.png"
description: "Ketika kita melakukan analisis data menggunakan pandas, sering kali menjumpai tipe data integer berbentuk int8, int16 atau uint8"
categories: Data Science
tags: [analisis data, teknologi]
published: true
---
<p>Ketika kita melakukan analisis data menggunakan pandas, sering kali menjumpai tipe data integer berbentuk <code>int8</code>, <code>int16</code> atau <code>uint8</code>. Apa maksudnya itu? Mari kita bahas secara detail:</p>
<ol>
<li><p><strong>Signed Integer</strong></p>
<ul>
<li><p><em>Signed Integer</em> adalah tipe data integer yang merepresentasikan nilai positif dan negatif, maksudnya bisa terdiri atau menyimpan bilang positif atau negatif.</p>
</li>
<li><p>Contoh tipe data <em>signed integer</em> adalah <code>int8</code>, <code>int16</code>, <code>int32</code>, dan <code>int64</code>. Angka di belakang <code>int</code> menandakan berapa banyak bit yang digunakan untuk merepresentasikan angka tersebut.</p>
</li>
</ul>
</li>
</ol>
<p>  Sebagai contoh, kita memiliki data dengan tipe data <code>int8</code>, artinya tipe data tersebut dapat menyimpan nilai dari -127 hingga 127. Dari mana perhitungannya? Mari kita hitung.</p>
<p>  Rumus untuk menghitung penyimpanan data tersebut adalah:</p>
<div class="formula-container">
  <span class="formula">$$2^{(n-1)} -1$$</span>
</div>
<p>  Dimana:</p>
<ul>
<li><p><code>n</code> adalah jumlah bit yang digunakan untuk merepresentasikan bilangan bulat.</p>
</li>
<li><p>Tanda bit pada eksponen digunakan untuk menunjukkan tanda positif atau negatif, sehingga kita mengurangkan satu dari eksponen.</p>
</li>
</ul>
<p>  Pada contoh kita tadi yaitu <code>int8</code>, maka nilai maksimum yang dapat direpresentasikan adalah</p>
<div class="formula-container">
  <span class="formula">$$2^{8-1} -1 = 2^7-1=128-1=127$$</span>
</div>
<p>  Artinya, tipe data integer <code>int8</code> dapat menyimpan atau mepresentasikan bilangan bulat dari -127 hingga 127.</p>
<ol start="2">
<li><p><strong>Unsigned Integer</strong></p>
<ul>
<li><p>Lawan dari <em>signed integer</em> adalah <em>unsigned integer</em>. Tipe data ini hanya dapat merepresentasikan atau menyimpan nilai positif.</p>
</li>
<li><p>Contoh tipe data <em>unsigned integer</em> adalah <code>uint8</code>, <code>uint16</code>, <code>uint32</code>, dan <code>uint64</code>. tanda <code>u</code> dalam <code>uint</code> menandakan bahwa tipe data ini adalah <em>unsigned</em>, yang berarti tanda bit tidak digunakan, dan semua bit berisi nilai positif.</p>
</li>
</ul>
</li>
</ol>
<p>  Sebagai contoh, kita memiliki data dengan tipe data <code>uint8</code>, artinya tipe data tersebut dapat menyimpan nilai dari 0 hingga 255. Dari mana perhitungannya? Mari kita hitung.</p>
<p>Rumus untuk menghitung penyimpanan data tersebut adalah:</p>
<div class="formula-container">
  <span class="formula">$$2^{(n)} -1$$</span>
</div>
<p>Dimana:</p>
<ul>
<li><p><code>n</code> adalah jumlah bit yang digunakan untuk merepresentasikan bilangan bulat.</p>
</li>
<li><p>Berbeda dengan rumus <em>signed integer</em>, rumus <em>unsigned integer</em> tidak memiliki tanda bit dikarenakan hanya merepresentasikan nilai positif. Artinya tidak ada pengurangan satu seperti pada tipe data <em>signed</em>.</p>
</li>
</ul>
<p>  Pada contoh kita tadi yaitu <code>uint8</code>, maka nilai maksimum yang dapat direpresentasikan adalah:</p>
<div class="formula-container">
  <span class="formula">$$2^{8} -1 = 256 -1 = 255$$</span>
</div>
<p>Artinya, tipe data integer <code>uint8</code> dapat menyimpan atau mepresentasikan bilangan bulat dari 0 hingga 255.</p>

