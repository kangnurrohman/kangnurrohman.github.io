---
title: "Teori Himpunan"
date: 2023-11-29T00:00:00+00:00
update: 2023-12-02T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /teori-himpunan/
image: "/assets/images/post/teori-himpunan/gambar0.png"
description:
  "Mungkin kita sudah pernah belajar himpunan sejak bangku SMP, namun tahukah kamu himpunan ini adalah teori yang
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
        <a class="table-of-contents-link" href="teori-himpunan/#apa-itu-kardinalitas">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu kardinalitas?
        </a>
        <a class="table-of-contents-link" href="teori-himpunan/#apa-saja-jenis-himpunan">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa saja jenis himpunan?
        </a>
        <a class="table-of-contents-link" href="teori-himpunan/#apa-saja-operasi-himpunan">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa saja operasi himpunan?
        </a>
        <a class="table-of-contents-link" href="teori-himpunan/#apa-saja-hukum-hukum-himpunan">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa saja hukum-hukum himpunan?
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
        <p>$$A = \{Kebo-Keboan, Seblang, Puter\ Kayun\}$$</p>
      </li>
      <li>
        <p><strong>Himpunan makanan Banyuwangi</strong></p>
        <p>$$B = \{Rujak \ Soto, Sego\ Tempong, Sego\ Cawuk\}$$</p>
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
        <p>$$A=\{x|x \ adalah \ bilangan \ ganjil \ dan \ x&lt;10\}$$</p>
        <p>Cara membacanya: "Himpunan $$A$$ adalah himpunan semua bilangan bulat $$x$$, dimana $$x$$ merupakan bilangan ganjil dan
          kurang dari 10."</p>
        <p>Atau : $$A=\{x|x\in\mathbb{Z},x\in P,x&lt;10\}$$</p>
        <p>Atau: $$A=\{1,3,5,7,9\}$$</p>
      </li>
      <li>
        <p><strong>Himpunan huruf konsonan</strong></p>
        <p>$$B=\{z|z \ adalah \ huruf \ konsonan\}$$</p>
        <p>Cara membacanya: "Himpunan $$B$$ adalah himpunan semua huruf $$z$$, dimana $$z$$ merupakan huruf konsonan."</p>
        <p>Atau: $$B=\{z|z\in \ Huruf \ Konsonan\}$$</p>
        <p>Atau: $$B=\{b,c,d,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z\}$$</p>
      </li>
      <li>
        <p><strong>Himpunan angka prima</strong></p>
        <p>$$C=\{p|p \ adalah \ angka \ prima\}$$</p>
        <p>Cara membacanya: "Himpunan $$C$$ adalah himpunan semua angka $$p$$, dimana $$p$$ merupakan bilangan prima."</p>
        <p>Atau: $$C=\{p|p\in \mathbb{N},p \ adalah \ angka \ prima\}$$</p>
        <p>Atau: $$C=\{2,3,5,7,...\}$$</p>
      </li>
      <li>
        <p><strong>Himpunan bilangan genap negatif</strong></p>
        <p>$$D=\{y|y \ adalah \ bilangan \ genap \ dan \ y&lt;0\}$$</p>
        <p>Cara membacanya: "Himpunan $$D$$ adalah himpunan semua bilangan bulat $$y$$, dimana $$y$$ merupakan bilangan genap dan
          kurang dari 0."</p>
        <p>Atau: $$D=\{y|y\in \mathbb{Z} , y \ genap, y&lt;0\}$$</p>
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
        <p><strong>Himpunan A dan B dengan <em>intersect</em></strong></p>
        <p>Misalkan $$A=\{1,2,3,4\}$$ dan $$B=\{3,4,5,6\}$$.</p>
        <p>Diagram venn akan memiliki dua lingkaran yang tumpang tindih masing-masing.</p>
        <p>Elemen yang tumpang tindih merupakan elemen yang ada di kedua himpunan <em>(intersect)</em>.</p>
        <figure>
          <div id="venn-diagram-intersect"></div>
          <figcaption>Gambar 1. diagram venn berbentuk <em>intersect</em> </figcaption>
        </figure>
      </li>
      <li>
        <p><strong>Himpunan A dan B dengan <em>disjoint</em></strong></p>
        <p>Misalkan $$A=\{1,2,3\}$$ dan $$B=\{4,5,6\}$$.</p>
        <p>Diagram venn akan memiliki dua lingkaran yang tidak tumpang tindih <em>(disjoint)</em>.</p>
        <p>Elemen yang berada di dalam satu lingkaran tetapi tidak di lingkaran lain adalah elemen unik dari
          masing-masing himpunan.</p>
        <figure>
          <div id="venn-diagram-disjoint"></div>
          <figcaption>Gambar 2. diagram venn berbentuk <em>disjoint</em> </figcaption>
        </figure>
      </li>
      <li>
        <p><strong>Himpunan A, B, dan C dengan <em>intersect</em> tiga himpunan:</strong></p>
        <p>Misalkan $$A={1,2,3}$$, $$B={3,4,5}$$, dan $$C={5,6,7}$$.</p>
        <p>Diagram Venn akan memiliki tiga lingkaran yang tumpang tindih.</p>
        <p>Elemen yang tumpang tindih bagian utama merupakan elemen yang ada di semua himpunan.</p>
        <figure>
          <div id="venn-diagram-intersect-three"></div>
          <figcaption>Gambar 3. diagram venn berbentuk <em>intersect</em> tiga himpunan </figcaption>
        </figure>
      </li>
    </ul>
  </li>
</ol>

<h2 id="apa-itu-kardinalitas">Apa itu kardinalitas?</h2>
<p>Kardinalitas adalah ukuran atau jumlah elemen dalam sebuah himpunan.</p>
<ul>
  <li>
    <p><strong>Notasi</strong> : Jika $$A$$ adalah suatu himpunan, maka kardinalitasnya dinotasikan dengan $$|A|$$ atau $$n(A)$$, di
      mana $$|A|$$ menyatakan jumlah elemen dalam himpunan $$A$$.</p>
  </li>
  <li>
    <p><strong>Contoh</strong> :</p>
    <ul>
      <li>
        <p>$$A = \{1,2,3,4\}$$, maka $$|A|=4$$</p>
      </li>
      <li>
        <p>$$P = \{p|p \in \mathbb{N},1<p\leq20,p \ prima\}$$ atau $$P=\{2,3,5,7,11,13,17,19\}$$ , maka $$|A|=8$$
        </p>
      </li>
      <li>
        <p>$$G=\{g|g\in \mathbb{Z}, -10<g\leq10, g \ genap\}$$ atau $$G=\{-10,-8,-6,-4,-2,0,2,4,6,8,10\}$$, maka $$|G|=11$$
        </p>
      </li>
      <li>
        <p>$$R=\{r|r\in \mathbb{Q}, 0<r\leq1\}$$, maka $$|A|=tak \ hingga$$
        </p>
      </li>
    </ul>
  </li>
</ul>

<h2 id="apa-saja-jenis-himpunan">Apa saja jenis himpunan?</h2>
<p>Ada beberapa jenis himpunan, dan masing-masing memiliki karakteristik. Berikut adalah beberapa jenis himpunan:</p>
<ol>
  <li>
    <p><strong>Himpunan semesta</strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Merupakan himpunan dari semua objek yang berbeda.</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$U$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : $$U=\{1,2,3,4,5\}$$</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Himpunan kosong</strong></p>
    <p><strong>Definisi</strong> : Merupakan himpunan yang tidak memiliki elemen.</p>
    <p><strong>Notasi</strong> : $$\phi$$ atau $$\{\}$$</p>
    <p><strong>Contoh</strong> : $$P=\{y|y<y\}$$, maka $$|P|=0$$
    </p>
  </li>
  <li>
    <p><strong>Himpunan singleton</strong></p>
    <p><strong>Definisi</strong> : Merupakan himpunan yang hanya memiliki satu elemen.</p>
    <p><strong>Notasi</strong> : $$\{a\}$$</p>
    <p><strong>Contoh</strong> : $$P=\{2\}$$, maka $$|P|=1$$</p>
  </li>
  <li>
    <p><strong>Himpunan bagian <em>(subset)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Himpunan B dikatakan sebagai <em>subset</em> dari $$A$$ jika setiap elemen dari $$B$$
          juga merupakan elemen dari $$A$$.</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$B\subseteq A$$ atau $$B \subset A$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$A=\{1,2,3\}$$ dan $$B=\{1,2\}$$, maka $$B \subseteq A$$, karena setiap elemen di $$B$$ (1
          dan 2) juga terdapat di $$A$$.</p>
      </li>
    </ul>
  </li>
  <p> Ada dua jenis himpunan bagian, <em>proper subset</em> dan <em>improper subset</em> :</p>
<p> <strong>Proper subset</strong></p>
<ul>
  <li>
    <p><strong>Definisi</strong> : Himpunan $$B$$ dikatakan sebagai <em>proper subset</em> dari $$A$$ jika setiap elemen dari $$B$$
      juga elemen dari $$A$$, dan $$B$$ bukanlah himpunan yang sama dengan $$A$$.</p>
  </li>
  <li>
    <p><strong>Notasi</strong> : $$B\subset A$$ dengan $$B\ne A$$</p>
  </li>
  <li>
    <p><strong>Contoh</strong> : Jika $$A=\{1,2,3\}$$ dan $$B=\{1,2\}$$, maka $$B\subset A$$, karena $$B$$ adalah subset dari $$A$$ dan $$B$$
      tidak sama dengan $$A$$.</p>
  </li>
</ul>
<p> <strong>Improper subset</strong></p>
<ul>
  <li>
    <p><strong>Definisi</strong> : Himpunan $$B$$ dikatakan sebagai <em>improper subset</em> dari $$A$$ jika setiap elemen dari
      $$B$$ juga terdapat di $$A$$. Dalam hal ini, $$B$$ memang setara dengan $$A$$.</p>
  </li>
  <li>
    <p><strong>Notasi</strong> : $$B\subseteq A$$</p>
  </li>
  <li>
    <p><strong>Contoh</strong> : Jika $$A=\{1,2,3\}$$ dan $$B=\{1,2,3\}$$, maka $$B\subseteq A$$, karena setiap elemen di $$B$$ juga
      terdapat di $$A$$. Dalam hal ini, $$B$$ adalah himpunan yang sama dengan $$A$$.</p>
  </li>
</ul>
</ol>

<ol start="5">
  <li>
    <p><strong>Himpunan yang sama</strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Dua himpunan $$A$$ dan $$B$$ dianggap setara jika setiap elemen dari $$A$$ juga merupakan
          elemen dari $$B$$ dan sebaliknya.</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$A=B\leftrightarrow A\subseteq B \ dan \ B \subseteq A$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$A=\{1,2,2,3,3\}$$ dan $$B=\{3,2,1,1\}$$, maka $$A=B$$, karena keduanya memiliki elemen
          yang sama, meskipun urutannya berbeda dan jumlah elemennya tidak sama.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Himpunan yang ekuivalen</strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Dua himpunan $$A$$ dan $$B$$ dikatakan ekuivalen, jika dan hanya jika jumlah elemennya
          sama.</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$|A| = |B|$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$X=\{1,2,3\}$$ dan $$Y=\{a,b,c\}$$, maka $$|X|=|Y|$$, karena keduanya memiliki jumlah
          elemen yang sama.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Himpunan saling lepas <em>(disjoint)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Dua himpunan $$A$$ dan $$B$$ dikatakan saling lepas <em>(disjoint)</em> jika tidak
          memiliki elemen yang sama.</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$A\cup B=\phi$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$X=\{1,2,3\}$$ dan $$Y=\{4,5,6\}$$, maka $$X\cup Y=\phi$$, karena keduanya tidak memiliki
          elemen yang sama.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Himpunan kuasa <em>(powerset)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong>: Himpunan kuasa $$(\mathcal{P}(A))$$ dari suatu himpunan $$A$$ adalah himpunan dari semua
          himpunan bagian yang mungkin dari $$A$$, termasuk himpunan kosong dan $$A$$ itu sendiri. Dan untuk jumlah elemennya
          $$2^{|A|}$$, di mana $$|A|$$ adalah kardinalitas atau jumlah elemen dari $$A$$.</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$\mathcal{P}(A)$$ atau $$2^A$$. Jika $$|A|=n$$, maka $$|\mathcal{P}(A)|=n(\mathcal{P}(A))=2^n$$
        </p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$A=\{a,b\}$$, maka $$\mathcal{P}(A)=2^A=\{\phi,\{a\},\{b\},\{a,b\}\}$$, dan
          $$|\mathcal{P}(A)|=2^2=4$$</p>
      </li>
    </ul>
  </li>
</ol>

<h2 id="apa-saja-operasi-himpunan">Apa saja operasi himpunan?</h2>
<ol>
  <li>
    <p><strong>Gabungan <em>(union)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Gabungan dari dua himpunan $$A$$ dan $$B$$ adalah himpunan yang berisi semua elemen yang
          termasuk dalam $$A$$ atau $$B$$ atau keduanya.</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$A\cup B=\{x|x\in A \ atau\ x\in B\}$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$A=\{1,2,3\}$$ dan $$B=\{3,4,5\}$$, maka $$A\cup B=\{1,2,3,4,5\}$$.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Irisan <em>(intersection)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Irisan dari dua himpunan $$A$$ dan $$B$$ adalah himpunan yang berisi semua elemen yang
          dimiliki oleh kedua himpunan $$A$$ dan $$B$$.</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$A\cap B= \{x|x\in A \ dan \ x\in B\}$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$A=\{1,2,3\}$$ dan $$B=\{3,4,5\}$$, maka $$A\cap B = \{3\}$$.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Komplemen <em>(complement)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Komplemen dari himpunan $$A$$ adalah himpunan yang berisi semua elemen di himpunan
          semesta $$U$$ tetapi tidak termasuk di dalam $$A$$.</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$\bar{A}=\{x|x\in U, x\notin A\}$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$U=\{1,2,3,4,5\}$$ dan $$A=\{1,2,3\}$$, maka $$\bar{A}=\{4,5\}$$.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Selisih <em>(difference)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Selisih dari himpunan $$A$$ dan $$B$$ adalah himpunan yang berisi elemen-elemen yang
          terdapat di $$A$$ tetapi tidak ada di $$B$$.</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$A-B=\{x|x\in A\ dan\ x\notin B\}$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$A=\{1,2,3\}$$ dan $$B=\{3,4,5\}$$, maka $$A-B=\{1,2\}$$.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Beda setangkup <em>(symmetric difference)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Beda setangkup dari dua himpunan $$A$$ dan $$B$$ adalah himpunan yang berisi
          elemen-elemen yang hanya terdapat di $$A$$ atau hanya terdapat di $$B$$, tetapi tidak keduanya.</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$A\oplus B=(A\cup B)-(A\cap B)=(A-B)\cup(B-A)$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : $$A=\{1,2,3\}$$ dan $$B=\{3,4,5\}$$, maka $$A\oplus B=\{1,2,4,5\}$$.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Perkalian kastesian <em>(cartesian product)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Perkalian kartesian dari dua himpunan $$A$$ dan $$B$$ adalah himpunan dari semua pasangan
          terurut, di mana $$a\in A$$ dan $$b\in B$$.</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$A\times b=\{(a,b)|a\in A\ dan\ b\in B\}$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$A=\{1,2\}$$ dan $$B=\{a,b\}$$, maka $$A\times B=\{(1,a),(1,b),(2,a),(2,b)\}$$.</p>
      </li>
    </ul>
  </li>
</ol>

<h2 id="apa-saja-hukum-hukum-himpunan">Apa saja hukum-hukum himpunan?</h2>
<ol>
  <li>
    <p><strong>Identitas</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$A\cup \phi=A$$ dan $$A\cap U=A$$</p>
      </li>
      <li>
        <p><strong>Arti</strong> : Gabungan dengan himpunan kosong adalah himpunan itu sendiri, dan irisan dengan
          himpunan universal adalah himpunan itu sendiri.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Null/Dominasi</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$A\cap \phi=\phi$$ dan $$A\cup U=U$$</p>
      </li>
      <li>
        <p><strong>Arti</strong> : Irisan dengan himpunan kosong adalah himpunan kosong, dan gabungan dengan himpunan
          universal adalah himpunan universal.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Komplemen</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$A\cap \bar{A}= \phi$$ dan $$A\cup \bar{A}=U$$</p>
      </li>
      <li>
        <p><strong>Arti</strong> : Irisan dengan komplemen adalah himpunan kosong, dan gabungan dengan komplemen adalah
          himpunan universal.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Idempoten</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$A\cap A=A$$ dan $$A\cup A=A$$</p>
      </li>
      <li>
        <p><strong>Arti</strong> : Irisan atau gabungan dengan dirinya sendiri adalah himpunan itu sendiri.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Involusi</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$\bar{(\bar{A})} = A$$</p>
      </li>
      <li>
        <p><strong>Arti</strong> : Komplemen dari komplemen adalah himpunan itu sendiri.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Absorpsi</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$A\cap (A\cup B)=A$$ dan $$A\cap (A\cup B)=A$$</p>
      </li>
      <li>
        <p><strong>Arti</strong> : Irisan dengan gabungan atau gabungan dengan irisan menghasilkan himpunan yang lebih
          besar.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Komutatif</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$A\cap B=B\cap A$$ dan $$A\cup B=B\cup A$$</p>
      </li>
      <li>
        <p><strong>Arti</strong> : Urutan himpunan dalam operasi irisan atau gabungan tidak mempengaruhi hasil.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Asosiatif</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$A\cap (B\cap C)=(A\cap B)\cap C$$ dan $$A\cup (B\cup C)=(A\cup B)\cup C$$</p>
      </li>
      <li>
        <p><strong>Arti</strong> : Hubungan antara tiga himpunan dalam operasi irisan atau gabungan tidak bergantung
          pada cara pengelompokan.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>De Morgan</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$\bar{(A\cap B)}= \bar{A}\cup \bar{B}$$ dan $$\bar{(A\cup B)}= \bar{A}\cap \bar{B}$$</p>
      </li>
      <li>
        <p><strong>Arti</strong> : Komplemen dari irisan adalah gabungan dari komplemen, dan sebaliknya.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Distributif</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$A\cap (B\cup C)=(A\cap B)\cup (A\cap C)$$ dan A\cup $$(B\cap C)=(A\cup B)\cap(A\cup C)$$
        </p>
      </li>
      <li>
        <p><strong>Arti</strong> : Distribufitas irisan terhadap gabungan dan sebaliknya.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Hukum 0\1</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$A\cap \bar{A}=\phi$$ dan $$A\cup \bar{A} = U$$</p>
      </li>
      <li>
        <p><strong>Arti</strong> : Irisan antara himpunan $$A$$ dan komplemennya adalah himpunan kosong, dan gabungan antara himpunan $$A$$ dan komplemennya adalah himpunan universal.</p>
      </li>
    </ul>
  </li>
</ol>
