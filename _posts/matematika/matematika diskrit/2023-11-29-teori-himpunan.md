---
title: "Teori Himpunan"
date: 2023-11-29T00:00:00+00:00
update: 2023-11-29T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /teori-himpunan/
image: "/assets/images/post/teori-himpunan/gambar0.png"
description: "Mungkin kita sudah pernah belajar himpunan sejak bangku SMP, namun tahukah kamu himpunan ini adalah teori yang
  fundamental di bidang Ilmu Komputer."
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
        <a class="table-of-contents-link" href="teori-himpunan/#apa-itu-himpunan">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu himpunan?
        </a>
      </li>
    </ul>
  </div>
</div>


<h2 id="apa-itu-himpunan">Apa itu himpunan?</h2>
<p>Mungkin kita sudah pernah belajar himpunan sejak bangku SMP, namun tahukah kamu himpunan ini adalah teori yang
  fundamental di bidang Ilmu Komputer. Himpunan adalah kumpulan objek atau elemen yang memiliki karakteristik tertentu.
  Setiap objek atau elemen dalam himpunan bersifat unik; artinya, tidak ada duplikasi elemen dalam himpunan. Objek atau
  elemen dalam himpunan juga tidak memiliki urutan tertentu; artinya, tidak peduli dalam urutan mana elemen-elemen
  tersebut ditulis. Himpunan biasanya dinotasikan dengan kurung kurawal $$\{\}$$. Dalam pemrograman komputer, himpunan
  sering disebut struktur data <strong><em>set</em></strong>.</p>
<p>Contoh pada bahasa python:</p>
<div class="code-container">
  <pre>
  <code class="python">

    A = {1, 2, 3} # Himpunan A
    B = {3, 4, 5} # Himpunan B

  </code>
  </pre>
</div>

<h3>Cara penulisan himpunan</h3>
<p>Ada berbagai macam cara ketika kita mau menyajikan atau menuliskan himpunan. Berikut cara-caranya:</p>
<ol>
  <li>
    <p><strong>Enumerasi</strong></p>
    <p>Penulisan himpunan dengan enumerasi adalah dengan menyebutkan elemen-elemen himpunan tersebut secara eksplisit.
    </p>
    <ul>
      <li>
        <p><strong>Himpunan tradisi Banyuwangi</strong></p>
        <p>$$A = \{Kebo-Keboan, Seblang, Puter\space Kayun\}$$</p>
      </li>
      <li>
        <p><strong>Himpunan makanan Banyuwangi</strong></p>
        <p>$$B = \{Rujak \space Soto, Sego\space Tempong, Sego\space Cawuk\}$$</p>
      </li>
    </ul>
    <p> Keanggotaan</p>
    <ul>
      <li><p>$$x \in A$$ : $$x$$ anggota dari himpunan $$A$$</p>
    </li>
      <li><p>$$x \notin A $$: $$x$$ bukan anggota dari himpunan $$A$$</p>
    </li>
    </ul>
  </li>
</ol>


<ol start="2">
  <li>
    <p><strong>Simbol-simbol Baku</strong></p>
    <p>Penulisan himpunan dengan simbol baku adalah dengan melibatkan beberapa notasi standar.</p>
    <ul>
      <li>
        <p><strong>Himpunan bilangan bulat</strong></p>
        <p>$$\mathbb{Z} = \{...,-3,-2,-1,0,1,2,3,...\}$$</p>
      </li>
      <li>
        <p><strong>Himpunan bilangan rasional</strong></p>
        <p>$$\mathbb{Z} = \{\frac{a}{b}|a \in \mathbb{Z},b \notin \mathbb{Z} ,b \neq 0 \}$$</p>
      </li>
      <li>
        <p><strong>Himpunan bilangan real</strong></p>
        <p>$$\mathbb{R}^+=\{ x \in \mathbb{R} | x \geq 0 \}$$</p>
      </li>
      <li>
        <p><strong>Himpunan bilangan kompleks</strong></p>
        <p>$$\mathbb{C}=\{ a + bi | a,b \in \mathbb{R} \}$$</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Deskripsi</strong></p>
    <p>Penulisan himpunan dengan deskripsi dilakukan dengan memberikan kriteria atau kondisi yang harus dipenuhi oleh
      elemen-elemen himpunan. Bentuk ini juga dikenal dengan notasi predikat.</p>
    <ul>
      <li>
        <p><strong>Himpunan bilangan ganjil</strong></p>
        <p>$$A=\{x|x \space adalah \space bilangan \space ganjil \space dan \space x&lt;10\}$$</p>
        <p>Cara membacanya: "Himpunan $$A$$ adalah himpunan semua bilangan bulat $$x$$, dimana $$x$$ merupakan bilangan ganjil dan
          kurang dari 10."</p>
        <p>Atau : $$A=\{x|x\in\mathbb{Z},x\in P,x&lt;10\}$$</p>
        <p>Atau: $$A=\{1,3,5,7,9\}$$</p>
      </li>
      <li>
        <p><strong>Himpunan huruf konsonan</strong></p>
        <p>$$B=\{z|z \space adalah \space huruf \space konsonan\}$$</p>
        <p>Cara membacanya: "Himpunan $$B$$ adalah himpunan semua huruf $$z$$, dimana $$z$$ merupakan huruf konsonan."</p>
        <p>Atau: $$B=\{z|z\in \space Huruf \space Konsonan\}$$</p>
        <p>Atau: $$B=\{b,c,d,f,...\}$$</p>
      </li>
      <li>
        <p><strong>Himpunan angka prima</strong></p>
        <p>$$C=\{p|p \space adalah \space angka \space prima\}$$</p>
        <p>Cara membacanya: "Himpunan $$C$$ adalah himpunan semua angka $$p$$, dimana $$p$$ merupakan bilangan prima."</p>
        <p>Atau: $$C=\{p|p\in \mathbb{N},p \space adalah \space angka \space prima\}$$</p>
        <p>Atau: $$C=\{2,3,5,7,...\}$$</p>
      </li>
      <li>
        <p><strong>Himpunan bilangan genap</strong></p>
        <p>$$D=\{y|y \space adalah \space bilangan \space genap \space dan \space y&lt;0\}$$</p>
        <p>Cara membacanya: "Himpunan $$D$$ adalah himpunan semua bilangan bulat $$y$$, dimana $$y$$ merupakan bilangan genap dan
          kurang dari 0."</p>
        <p>Atau: $$D=\{y|y\in \mathbb{Z} , y \space genap, y&lt;0\}$$</p>
        <p>Atau: $$D=\{-2,-4,-6,-8,...\}$$</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Diagram Venn</strong></p>
    <p>Diagram venn adalah representasi grafis dari himpunan yang menggunakan lingkaran untuk memperlihatkan hubungan
      antar himpunan.</p>
    <ul>
      <li>
        <p><strong>Himpunan A dan B dengan interseksi</strong></p>
        <p>Misalkan $$A=\{1,2,3,4\}$$ dan $$B=\{3,4,5,6\}$$.</p>
        <p>Diagram venn akan memiliki dua lingkaran yang tumpang tindih masing-masing.</p>
        <p>Elemen yang berada di tumpang tindih merupakan elemen yang ada di kedua himpunan (interseksi).</p>
      </li>
      <li>
        <p><strong>Himpunan A dan B yang saling lepas</strong></p>
        <p>Misalkan $$A=\{1,2,3\}$$ dan $$B=\{4,5,6\}$$.</p>
        <p>Diagram venn akan memiliki dua lingkaran yang tidak tumpang tindih.</p>
        <p>Elemen yang berada di dalam satu lingkaran tetapi tidak di lingkaran lain adalah elemen unik dari
          masing-masing himpunan.</p>
      </li>
    </ul>
  </li>
</ol>