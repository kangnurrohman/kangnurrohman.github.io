---
title: "Teori Himpunan"
date: 2023-11-29T00:00:00+00:00
update: 2023-12-06T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /teori-himpunan/
image: "/assets/images/post/matematika/matematika-diskrit/teori-himpunan/gambar0.png"
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
        <a class="table-of-contents-link" href="teori-himpunan/#apa-itu-prinsip-dualitas">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu prinsip dualitas?
        </a>
        <a class="table-of-contents-link" href="teori-himpunan/#apa-itu-prinsip-inklusi-eksklusi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu prinsip inklusi-eksklusi?
        </a>
        <a class="table-of-contents-link" href="teori-himpunan/#apa-itu-partisi">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu partisi?
        </a>
        <a class="table-of-contents-link" href="teori-himpunan/#apa-itu-himpunan-ganda-multiset">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Apa itu himpunan ganda <em>(multiset)</em>?
        </a>
        <a class="table-of-contents-link" href="teori-himpunan/#bagaimana-membuktikan-proposisi-perihal-himpunan">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Bagaimana membuktikan proposisi perihal himpunan?
        </a>
        <a class="table-of-contents-link" href="teori-himpunan/#penggunaan-himpunan-pada-teori-bahasa-formal">
          <i class="fas fa-angle-right table-of-contents-icon"></i> Penggunaan himpunan pada teori bahasa formal
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
<p>Sebelum membahas lebih lanjut, setiap pembahasan pada operasi himpunan, akan dipraktikkan menggunakan kode python.
  Oleh karena itu, silakan dicoba pada kode editor masing-masing untuk melihat keluarannya.</p>

  <div class="code-container">
  <button class="copy-button">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code class="python">

    # Himpunan Semesta
    universal_set = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}

    # Himpunan A dan B
    set_a = {1, 2, 3, 4, 5}
    set_b = {3, 4, 5, 6, 7}

  </code>
  </pre>
</div>
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
        <p><strong>Contoh</strong> : Jika $$A=\{1,2,3,4,5\}$$ dan $$B=\{3,4,5,6,7\},$$ maka $$A\cup B=\{1,2,3,4,5,6,7\}.$$</p>
      </li>
    </ul>
  </li>
  <p> Kode python:</p>
  <div class="code-container">
  <button class="copy-button">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code class="python">

    # Union (gabungan) dari A dan B
    union_result = set_a.union(set_b)
    print("Union (A ∪ B):", union_result)

  </code>
  </pre>
</div>
</ol>

<ol start="2">
  <li>
    <p><strong>Irisan <em>(intersection)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Irisan dari dua himpunan $$A$$ dan $$B$$ adalah himpunan yang berisi semua elemen yang
          dimiliki oleh kedua himpunan $$A$$ dan $$B.$$</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$A\cap B= \{x|x\in A \ dan \ x\in B\}$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$A=\{1,2,3,4,5\}$$ dan $$B=\{3,4,5,6,7\},$$ maka $$A\cap B = \{3,4,5\}.$$</p>
      </li>
    </ul>
  </li>
  <p> Kode python:</p>
  <div class="code-container">
  <button class="copy-button">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code class="python">

    # Intersection (irisan) dari A dan B
    intersection_result = set_a.intersection(set_b)
    print("Intersection (A ∩ B):", intersection_result)

  </code>
  </pre>
</div>
</ol>

<ol start="3">
  <li>
    <p><strong>Komplemen <em>(complement)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Komplemen dari himpunan $$A$$ adalah himpunan yang berisi semua elemen di himpunan
          semesta $$U$$ tetapi tidak termasuk di dalam $$A.$$</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$\bar{A}=\{x|x\in U, x\notin A\}$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$U=\{1,2,3,4,5,6,7,8,9,10\}$$ dan $$A=\{1,2,3,4,5\},$$ maka $$\bar{A}=\{6,7,8,9,10\}.$$
        </p>
      </li>
    </ul>
  </li>
  <p> Kode python:</p>
  <div class="code-container">
  <button class="copy-button">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code class="python">

    # Complement (komplemen) dari A terhadap himpunan semesta
    complement_a = universal_set.difference(set_a)
    print("Complement (A'): ", complement_a)

  </code>
  </pre>
</div>
</ol>

<ol start="4">
  <li>
    <p><strong>Selisih <em>(difference)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Selisih dari himpunan $$A$$ dan $$B$$ adalah himpunan yang berisi elemen-elemen yang
          terdapat di $$A$$ tetapi tidak ada di $$B.$$</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$A-B=\{x|x\in A\ dan\ x\notin B\}$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$A=\{1,2,3,4,5\}$$ dan $$B=\{3,4,5,6,7\},$$ maka $$A-B=\{1,2\}.$$</p>
      </li>
    </ul>
  </li>
  <p> Kode python:</p>
  <div class="code-container">
  <button class="copy-button">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code class="python">

    # Difference (selisih dengan setiap elemen dalam set_a) dari A terhadap B
    difference_result = set_a.difference(set_b)
    print("Difference (A - B):", difference_result)

  </code>
  </pre>
</div>
</ol>

<ol start="5">
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
        <p><strong>Contoh</strong> : $$A=\{1,2,3,4,5\}$$ dan $$B=\{3,4,5,6,7\},$$ maka $$A\oplus B=\{1,2,6,7\}.$$</p>
      </li>
    </ul>
  </li>
  <p> Kode python:</p>
  <div class="code-container">
  <button class="copy-button">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code class="python">

    # Symmetric Difference (elemen yang hanya ada di satu himpunan) dari A dan B
    symmetric_difference_result = set_a.symmetric_difference(set_b)
    print("Symmetric Difference (A Δ B):", symmetric_difference_result)

  </code>
  </pre>
</div>
</ol>

<ol start="6">
  <li>
    <p><strong>Perkalian kartesian <em>(cartesian product)</em></strong></p>
    <ul>
      <li>
        <p><strong>Definisi</strong> : Perkalian kartesian dari dua himpunan $$A$$ dan $$B$$ adalah himpunan dari semua pasangan
          terurut, di mana $$a\in A$$ dan $$b\in B.$$</p>
      </li>
      <li>
        <p><strong>Notasi</strong> : $$A\times b=\{(a,b)|a\in A\ dan\ b\in B\}$$</p>
      </li>
      <li>
        <p><strong>Contoh</strong> : Jika $$A=\{1,2,3,4,5\}$$ dan $$B=\{3,4,5,6,7\},$$ maka $$A\times B=\{(1, 3), (1, 4), (1, 5),
          (1, 6), (1, 7), (2, 3), (2, 4), (2, 5), (2, 6), (2, 7), (3, 3), (3, 4), (3, 5), (3, 6), (3, 7), (4, 3), (4,
          4), (4, 5), (4, 6), (4, 7), (5, 3), (5, 4), (5, 5), (5, 6), (5, 7)\}.$$</p>
      </li>
    </ul>
  </li>
  <p> Kode python:</p>
  <div class="code-container">
  <button class="copy-button">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code class="python">

    # Cartesian Product (perkalian kartesian) dari A dan B
    cartesian_product_result = [(x, y) for x in set_a for y in set_b]
    print("Cartesian Product (A × B):", cartesian_product_result)

  </code>
  </pre>
</div>
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
        <p><strong>Notasi</strong> : $$A\cap (B\cup C)=(A\cap B)\cup (A\cap C)$$ dan $$A\cup (B\cap C)=(A\cup B)\cap(A\cup C)$$
        </p>
      </li>
      <li>
        <p><strong>Arti</strong> : Distribufitas irisan terhadap gabungan dan sebaliknya.</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Hukum 0/1</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$\bar{\phi}=U$$ dan $$\bar{U}=\phi$$</p>
      </li>
      <li>
        <p><strong>Arti</strong> : komplemen himpunan kosong adalah himpunan semesta, dan komplemen himpunan semesta adalah himpunan kosong.</p>
      </li>
    </ul>
  </li>
</ol>

<h2 id="apa-itu-prinsip-dualitas">Apa itu prinsip dualitas?</h2>
<p>Prinsip dualitas adalah ketika ada dua konsep yang berbeda dapat saling dipertukarkan, tetapi tetap memberikan
  jawaban yang benar.</p>
<p>Dualitas seringkali memberikan perspektif yang berbeda atau sudut pandang alternatif terhadap suatu fenomena atau
  struktur matematika.</p>
<p>Sebagai contoh dalam kehidupan sehari-hari ada <strong>senang</strong> dan <strong>sedih</strong>. Kehidupan
  seringkali dipenuhi dengan momen senang dan sedih. Konsep dualitas di sini mencerminkan bahwa kedua perasaan ini
  adalah bagian alami dari kehidupan manusia dan satu tidak bisa ada tanpa yang lain.</p>
<h3>Prinsip dualitas dalam teori himpunan</h3>
<p>Anggaplah terdapat suatu kesetaraan <em>(identity)</em> yang melibatkan himpunan serta operasi-operasi himpunan
  seperti $$\cap$$, $$\cup$$, dan komplemen. Jika kita membentuk $$S^*$$ dari $$S$$ dengan menukar:</p>
<p>$$\cup \to \cap$$</p>
<p>$$\cap \to \cup$$</p>
<p>$$\phi \to U$$</p>
<p>$$U\to \phi$$</p>
<p>dan mempertahankan operasi komplemen seperti semula, maka prinsip kesetaraan $$S^*$$ juga berlaku dan dikenal sebagai
  dual dari prinsip kesetaraan $$S$$.</p>
<ol>
  <li>
    <p><strong>Identitas</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$A\cup \phi=A$$ dan $$A\cap U=A$$</p>
      </li>
      <li>
        <p><strong>Dualnya</strong> : $$A\cap U=A$$ dan $$A\cup \phi=A$$</p>
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
        <p><strong>Dualnya</strong> : $$A\cup U=U$$ dan $$A\cap \phi=\phi$$</p>
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
        <p><strong>Dualnya</strong> : $$A\cup \bar{A}=U$$ dan $$A\cap \bar{A}=\phi$$</p>
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
        <p><strong>Dualnya</strong> : $$A\cup A=A$$ dan $$A\cap A=A$$</p>
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
        <p><strong>Dualnya</strong> : $$A\cup(A\cap B)=A$$ dan $$A\cup(A\cap B)=A$$</p>
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
        <p><strong>Dualnya</strong> : $$A\cup B=B\cup A$$ dan $$A\cap B=B\cap A$$</p>
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
        <p><strong>Dualnya</strong> : $$A\cup (B\cup C)=(A\cup B)\cup C$$ dan $$A\cap (B\cap C)=(A\cap B)\cap C$$</p>
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
        <p><strong>Dualnya</strong> : $$\bar{(A\cup B)}=\bar{A}\cap \bar{B}$$ dan $$\bar{(A\cap B)}= \bar{A}\cup \bar{B}$$</p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Distributif</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$A\cap (B\cup C)=(A\cap B)\cup (A\cap C)$$ dan $$A\cup (B\cap C)=(A\cup B)\cap(A\cup C)$$
        </p>
      </li>
      <li>
        <p><strong>Dualnya</strong> : $$A\cup (B\cap C)=(A\cup B)\cap(A\cup C)$$ dan $$A\cap (B\cup C)=(A\cap B)\cup (A\cap C)$$
        </p>
      </li>
    </ul>
  </li>
  <li>
    <p><strong>Hukum 0/1</strong></p>
    <ul>
      <li>
        <p><strong>Notasi</strong> : $$\bar{\phi}=U$$ dan $$\bar{U}=\phi$$</p>
      </li>
      <li>
        <p><strong>Duanya</strong> : $$\bar{U}=\phi$$ dan $$\bar{\phi}=U$$</p>
      </li>
    </ul>
  </li>
</ol>

<h2 id="apa-itu-prinsip-inklusi-eksklusi">Apa itu prinsip inklusi-eksklusi?</h2>
<p>Prinsip inklusi-eksklusi adalah suatu metode dalam teori himpunan yang digunakan untuk menghitung jumlah elemen
 digabungkan beberapa himpunan dengan mempertimbangkan pengulangan elemen-elemen tersebut. Metode ini berguna ketika
 kita memiliki beberapa himpunan yang tumpang tindih <em>(overlapping)</em> dan ingin menghitung total elemen unik dalam
 gabungan semua himpunan tersebut.</p>
<p>Prinsip inklusi-eksklusi dapat dinyatakan dengan rumus sebagai berikut:</p>
<p>$$|A_{1}\cup A_{2}\cup \cdots\cup A_{n}|=\sum_{i=1}^{n}|A_{i}|-\sum_{1\leq i<j\leq n} |A_{i}\cap A_{j}|+ \sum_{1\leq i<j<k\leq n}|A_{i}\cap A_{j}\cap A_{k}|+\cdots+(-1)^{n-1}|A_{1}\cap A_{2}\cap\cdots\cap A_{n}|$$
</p>
<p>Dimana:</p>
<ul>
 <li>
  <p>$$|A_{1}\cup A_{2}\cup \cdots\cup A_{n}|$$ = Jumlah elemen dalam gabungan dari $$n$$ himpunan.</p>
 </li>
 <li>
  <p>$$\sum_{i=1}^{n}|A_{i}|$$ = Jumlah elemen dalam setiap himpunan $$A_{i}$$ secara individual.</p>
 </li>
 <li>
  <p>$$\sum_{1\leq i<j\leq n}|A_{i}\cap A_{j}|$$ = Pengurangan elemen-elemen yang tumpang tindih antara setiap pasangan
    himpunan. </p>
 </li>
 <li>
  <p>$$\sum_{1\leq i<j<k\leq n} |A_{i}\cap A_{j}\cap A_{k}|$$ = Penjumlahan elemen-elemen yang tumpang tindih antara
    setiap kombinasi dari tiga himpunan yang terlibat dalam operasi irisan (triplet himpunan). </p>
 </li>
 <li>
  <p>$$\cdots$$ = Melanjutkan pola untuk himpunan-himpunan yang lebih banyak.</p>
 </li>
 <li>
  <p>Simbol $$\cup$$ menunjukkan gabungan, dan simbol $$\cap$$ menunjukkan irisan.</p>
 </li>
</ul>
<p>Pola ini dilanjutkan hingga $$n-$$himpunan dengan menggunakan aturan inklusi-eksklusi, dengan tanda positif dan
 negatif
 secara bergantian. Tanda negatif digunakan untuk memperhitungkan pengurangan elemen yang tumpang tindih, dan tanda
 positif digunakan untuk menambahkan elemen-elemen yang mungkin telah dikurangkan berlebihan.</p>
<p><strong>Studi kasus</strong>:</p>
<p>Sebuah kelas memiliki 30 siswa yang mengambil mata pelajaran Matematika, 25 siswa yang mengambil mata pelajaran
 Bahasa Inggris, dan 20 siswa yang mengambil keduanya. Jika setiap siswa mengambil setidaknya satu mata pelajaran,
 berapa jumlah total siswa yang ada di kelas tersebut?</p>
<ul>
 <li>
  <p><strong>Ditanya</strong></p>
  <p>Berapa jumlah total siswa yang ada di kelas tersebut $$(|M\cup E|)$$ ?</p>
 </li>
 <li>
  <p><strong>Diketahui</strong></p>
  <ul>
   <li>
    <p>$$|M|$$ = Jumlah siswa yang mengambil matematika 30 siswa.</p>
   </li>
   <li>
    <p>$$|E|$$ = Jumlah siswa yang mengambil bahasa inggris 25 siswa.</p>
   </li>
   <li>
    <p>$$|M\cap E|$$ = Jumlah siswa yang mengambil keduanya 20 siswa.</p>
   </li>
  </ul>
 </li>
 <li>
  <p><strong>Dijawab</strong></p>
  <ul>
   <li>
    <p>$$|M\cup E|=|M|+|E|-|M\cap E|$$</p>
   </li>
   <li>
    <p>$$|M\cup E|=30+25-20$$</p>
   </li>
   <li>
    <p>$$|M\cup E|=35$$</p>
   </li>
  </ul>
 </li>
</ul>
<p>Jadi, terdapat 35 siswa secara total di kelas tersebut.</p>
<p>Di sebuah sekolah, terdapat 80 siswa yang mengikuti klub Matematika, 60 siswa yang mengikuti klub Sains, dan 40 siswa
 yang mengikuti kedua-duanya. Jika jumlah total siswa di sekolah tersebut adalah 150, berapa banyak siswa yang tidak
 mengikuti klub Matematika atau Sains?</p>
<ul>
 <li>
  <p><strong>Ditanya</strong></p>
  <p>Berapa banyak siswa yang tidak mengikuti klub Matematika atau Sains $$(|\bar{M}\cup \bar{S}|)$$ ?</p>
 </li>
 <li>
  <p><strong>Diketahui</strong></p>
  <ul>
   <li>
    <p>$$|M|$$ = Jumlah siswa yang mengikuti klub matematika 80 siswa.</p>
   </li>
   <li>
    <p>$$|S|$$ = Jumlah siswa yang mengikuti klub sains 60 siswa.</p>
   </li>
   <li>
    <p>$$|M\cap S|$$ = Jumlah siswa yang mengikuti keduanya 40 siswa.</p>
   </li>
   <li>
    <p>$$|U|$$ = Jumlah total siswa di sekolah 150 siswa.</p>
   </li>
  </ul>
 </li>
 <li>
  <p><strong>Dijawab</strong></p>
  <ul>
   <li>
    <p>$$|\bar{M}\cup \bar{S}|=|U|-|M\cup S|$$</p>
   </li>
   <li>
    <p>$$|M\cup S|=|M|+|S|-|M\cap S|$$</p>
   </li>
   <li>
    <p>$$|M\cup S|=80+60-40=100$$</p>
   </li>
   <li>
    <p>$$|\bar{M}\cup \bar{S}|=150-100=50$$</p>
   </li>
  </ul>
 </li>
</ul>
<p>Jadi, terdapat 50 siswa yang tidak mengikuti klub matematika atau sains.</p>
<p>Di suatu sekolah, terdapat 120 siswa yang mengambil pelajaran Matematika, 90 siswa yang mengambil pelajaran Fisika,
 60 siswa yang mengambil pelajaran Kimia, 40 siswa yang mengambil Matematika dan Fisika, 30 siswa yang mengambil
 Matematika dan Kimia, 20 siswa yang mengambil Fisika dan Kimia, dan 10 siswa yang mengambil ketiga pelajaran sekaligus.
 Berapa jumlah total siswa yang mengambil salah satu atau ketiganya dari pelajaran Matematika, Fisika, atau Kimia?</p>
<ul>
 <li>
  <p><strong>Ditanya</strong></p>
  <p>Berapa jumlah total siswa yang mengambil salah satu atau ketiganya dari pelajaran Matematika, Fisika, atau Kimia
   $$(|M\cup F\cup K\cup|)$$ ?</p>
 </li>
 <li>
  <p><strong>Diketahui</strong></p>
  <ul>
   <li>
    <p>$$|M|$$ = Jumlah siswa yang mengambil pelajaran matematika 120 siswa.</p>
   </li>
   <li>
    <p>$$|F|$$ = Jumlah siswa yang mengambil pelajaran fisika 90 siswa.</p>
   </li>
   <li>
    <p>$$|K|$$ = Jumlah siswa yang mengambil pelajaran kimia 60 siswa.</p>
   </li>
   <li>
    <p>$$|M\cap F|$$ = Jumlah siswa yang mengambil matematika dan fisika 40 siswa.</p>
   </li>
   <li>
    <p>$$|M\cap K|$$ = Jumlah siswa yang mengambil matematika dan kimia 30 siswa.</p>
   </li>
   <li>
    <p>$$|F\cap K|$$ = Jumlah siswa yang mengambil fisika dan kimia 20 siswa.</p>
   </li>
   <li>
    <p>$$|M\cap F\cap K|$$ = Jumlah siswa yang mengambil ketiga pelajaran sekaligus 10 siswa.</p>
   </li>
  </ul>
 </li>
 <li>
  <p><strong>Dijawab</strong></p>
  <ul>
   <li>
    <p>$$|M\cup F\cup K\cup| = |M|+|F|+|K|-|M\cap F|-|M\cap K|-|F\cap K|+|M\cap F\cap K|$$</p>
   </li>
   <li>
    <p>$$|M\cup F\cup K\cup|=20+90+60-40-30-20+10$$</p>
   </li>
   <li>
    <p>$$|M\cup F\cup K\cup|=190$$</p>
   </li>
  </ul>
 </li>
</ul>
<p>Jadi, terdapat 190 siswa yang mengambil salah satu atau ketiganya dari pelajaran matematika, fisika, atau kimia.</p>

<h2 id="apa-itu-partisi">Apa itu partisi?</h2>
<p>Partisi pada himpunan adalah pembagian himpunan ke dalam beberapa sub-himpunan yang disebut bagian, sedemikian
 sehingga setiap elemen himpunan terletak tepat dalam satu bagian. Dengan kata lain, partisi mengelompokkan
 elemen-elemen himpunan sedemikian rupa sehingga setiap elemen hanya terdapat dalam satu kelompok (bagian).</p>
<p>Secara formal, partisi dari himpunan $$A$$ adalah himpunan bagian $$P$$ dari $$A$$ sedemikian sehingga:</p>
<ol>
 <li>
  <p>$$P$$ tidak boleh kosong, artinya tidak ada bagian yang kosong.</p>
 </li>
 <li>
  <p>Gabungan dari semua bagian $$P$$ sama dengan himpunan asal $$A$$, yaitu $$\cup_{B\in P}B=A$$.</p>
 </li>
 <li>
  <p>Setiap dua bagian yang berbeda harus saling lepas (tidak ada irisan), artinya jika $$B_{1}$$ dan $$B_{2}$$ adalah dua
   bagian yang berbeda, maka $$B_{1}\cap B_{2}=\phi$$.</p>
 </li>
</ol>
<p><strong>Contoh</strong>:</p>
<p>Partisi dari himpunan $$A=\{1,2,3,4\}$$ dapat diberikan sebagai berikut:</p>
<ol>
 <li>
  <p>$$P_{1}=\{\{1,2\},\{3\},\{4\}\}$$</p>
 </li>
 <li>
  <p>$$P_{2}=\{\{1,2,3\},\{4\}\}$$</p>
 </li>
 <li>
  <p>$$P_{3}=\{\{1\},\{2,3\},\{4\}\}$$</p>
 </li>
</ol>
<p>Contoh di atas adalah partisi dari himpunan $$A$$ karena memenuhi syarat-syarat di atas. Pada setiap kasus, setiap elemen
 dari himpunan $$A$$ terdapat dalam satu dan hanya satu bagian dari partisi tersebut.</p>
<p><strong>Studi kasus sehari-hari</strong></p>
<p>Misalkan kita memiliki himpunan $$X$$ yang berisi semua buku-buku yang tersedia di perpustakaan suatu sekolah. Kita ingin
 mengorganisir buku-buku tersebut ke dalam beberapa kategori sehingga setiap buku hanya terletak di satu kategori. Ini
 adalah contoh penerapan konsep partisi.</p>
<p><strong>Himpunan asal</strong>:</p>
<p>$$X=\{Buku\ 1, Buku\ 2, Buku\ 3,\cdots,Buku\ N\}$$</p>
<p><strong>Partisi berdasarkan kategori</strong></p>
<p>Kita dapat membuat partisi berdasarkan kategori buku, misalnya:</p>
<p>$$P_{1}=\{Buku-buku\ Matematika\},$$</p>
<p>$$P_{2}=\{Buku-buku\ Fisika\},$$</p>
<p>$$P_{3}=\{Buku-buku\ Sejarah\},$$</p>
<p>$$\vdots$$</p>
<p>$$P_{k}=\{Buku-buku\ kategori\ ke-k\}$$</p>
<p>Setiap buku akan masuk ke dalam satu kategori, Gabungan dari semua kategori akan mencakup semua buku di perpustakaan.
</p>
<p><strong>Manfaat konsep partisi</strong>:</p>
<ul>
 <li>
  <p>Memudahkan pencarian buku karena buku-buku yang sejenis ditempatkan bersama.</p>
 </li>
 <li>
  <p>Meningkatkan keteraturan perpustakaan.</p>
 </li>
 <li>
  <p>Memfasilitasi manajemen dan pemeliharaan koleksi buku.</p>
 </li>
</ul>
<p>Dengan menerapkan konsep partisi, perpustakaan dapat diorganisir dengan lebih baik dan pengunjung dapat dengan mudah
 menemukan buku-buku yang mereka cari.</p>

 <h2 id="apa-itu-himpunan-ganda-multiset">Apa itu himpunan ganda <em>(multiset)</em>?</h2>
<p>Himpunan ganda, atau yang lebih dikenal sebagai <em>multiset</em>, adalah bentuk khusus dari himpunan di mana
 elemen-elemen tertentu dapat muncul lebih dari satu kali. Dalam himpunan konvensional, setiap elemen hanya dapat muncul
 sekali atau tidak muncul sama sekali, tetapi dalam <em>multiset</em>, elemen-elemen dapat memiliki
 <strong>multiplisitas</strong> yang berbeda, artinya elemen-elemen tersebut dapat muncul lebih dari satu kali.</p>
<p>Sebagai contoh <em>multiset</em> berikut:</p>
<p>$$\{1,2,2,3,3,3,4\}$$</p>
<p>Di sini, elemen 2 muncul dua kali, elemen 3 muncul tiga kali, dan elemen- elemen lain muncul satu kali. Dalam
 <em>multiset</em>, urutan elemen tidak penting; yang penting adalah jumlah kemunculan masing-masing elemen.</p>
<p>Sifat-sifat <em>multiset</em> melibatkan penghitungan berdasarkan kemunculan elemen, dan operasi-operasi seperti
 penambahan, pengurangan, dan penggabungan multiset memperhitungkan jumlah elemen yang sama. Sebagai contoh, jika kita
 mengurangkan <em>multiset</em> $$\{1,2,2,3,3,3,4\}$$ dengan multiset $$\{2,3,3,5\}$$, hasilnya akan menjadi $$\{1,2,3,4\}$$.</p>
<p><em>Multiset</em> sering digunakan dalam konteks di mana kita perlu melacak jumlah kemunculan setiap elemen, seperti
 dalam analisis statistik, pengolahan kata, atau struktur data tertentu. <em>Multiset</em> dapat diimplementasikan
 menggunakan berbagai struktur data, seperti <em>list</em> atau tabel hash.</p>

<h3>Bagaimana menghitung kardinalitas pada
 <em>multiset</em>?</h3>
<p>Kardinalitas pada <em>multiset</em> mengacu pada jumlah elemen yang ada dalam himpunan tersebut, termasuk pengulangan
 elemen. Berbeda dengan himpunan konvensional yang tidak memperhatikan pengulangan, multiset mencatat berapa kali setiap
 elemen muncul.</p>
<p>Untuk menghitung kardinalitas sebuah <em>multiset</em>, kita cukup menjumlahkan jumlah kemunculan setiap elemen dalam
 multiset tersebut. Misalkan $$|A|$$ menyatakan kardinalitas multiset $$A$$, dan $$n(a)$$ menyatakan jumlah kemunculan elemen $$a$$
 dalam <em>multiset</em>. Maka,</p>
<p>$$|A|=\sum_{a\in A^{n(a)}}$$</p>
<p>Kita cukup menjumlahkan jumlah kemunculan masing-masing elemen dalam multiset untuk mendapatkan kardinalitas total.
</p>
<p><strong>Contoh</strong></p>
<p>Misalkan $$A=\{a,a,b,c,b,a\}$$</p>
<p>∣$$A∣=n(a)+n(b)+n(c)=3+2+1=6$$</p>
<p>Jadi, kardinalitas <em>multiset</em> $$A$$ adalah 6.</p>

<h2 id="bagaimana-membuktikan-proposisi-perihal-himpunan">Bagaimana membuktikan proposisi perihal himpunan?
</h2>

<p>Pembuktian proposisi perihal himpunan melibatkan langkah-langkah logis dan argumentasi yang benar untuk menunjukkan
  kebenaran pernyataan tersebut. Berikut adalah beberapa metode yang dapat digunakan dalam pembuktian proposisi:</p>
<ol>
  <li>
    <p><strong>Pembuktian dengan tabel kebenaran</strong></p>
    <p>Pada metode ini, kita menggunakan tabel kebenaran untuk menguji kebenaran proposisi dengan memeriksa semua
      kemungkinan nilai kebenaran dari elemen tersebut yang terlibat.</p>
    <p><strong>Contoh</strong> :</p>
    <p><strong>Proposisi</strong> : $$A\cap (B\cup C)=(A\cap B)\cup(A\cap C)$$</p>
    <p><strong>Pembuktian</strong> :</p>
    <table>
      <thead>
        <tr>
          <th>$$A$$</th>
          <th>$$B$$</th>
          <th>$$C$$</th>
          <th>$$B\cup C$$</th>
          <th>$$A\cap(B\cup C)$$</th>
          <th>$$A\cap B$$</th>
          <th>$$A\cap C$$</th>
          <th>$$(A\cap B)\cup(A\cap C)$$</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
        </tr>
        <tr>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
        <tr>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
        </tr>
      </tbody>
    </table>
    <p>Di mana:</p>
    <ul>
      <li>
        <p>$$1\in dari\ himpunan\ ini$$</p>
      </li>
      <li>
        <p>$$0\notin dari\ himpunan\ ini$$</p>
      </li>
    </ul>
  </li>
  <p> <strong>Hasil</strong> :</p>
<p> Pada contoh di atas, kita membuktikan bahwa kedua proposisi tersebut sama. Karena kolom $$A\cap(B\cup C)$$ dan kolom
  $$(A\cap B)\cup(A\cap C)$$ sama, maka $$A\cap (B\cup C)=(A\cap B)\cup(A\cap C).$$</p>
</ol>

<ol start="2">
  <li>
    <p><strong>Pembuktian dengan aljabar himpunan</strong></p>
    <p>Pada metode ini, kita menggunakan hukum-hukum aljabar himpunan untuk membuktikan proposisi.</p>
    <p><strong>Contoh</strong> :</p>
    <p><strong>Proposisi</strong> : $$A\cap (B\cup C)=(A\cap B)\cup(A\cap C)$$</p>
    <p><strong>Pembuktian (hukum distributif)</strong> :</p>
    <p>$$A\cap (B\cup C)=(A\cap B)\cup(A\cap C)$$</p>
    <p>Misal : $$A=\{1,2,3\},$$ $$B=\{2,3,4\},$$ dan $$C=\{3,4,5\}$$</p>
    <p>$$A\cap (B\cup C)=\{1,2,3\}\cap(\{2,3,4\}\cup\{3,4,5\})$$</p>
    <p>$$A\cap (B\cup C) = \{1,2,3\}\cap \{2,3,4,5\}$$</p>
    <p>$$A\cap (B\cup C) = \{2,3\}$$</p>
    <p>$$(A\cap B)\cup(A\cap C)=(\{1,2,3\}\cap\{2,3,4\})\cup(\{1,2,3\}\cap\{3,4,5\})$$</p>
    <p>$$(A\cap B)\cup(A\cap C)=\{2,3\}\cup\{3\}$$</p>
    <p>$$(A\cap B)\cup(A\cap C)=\{2,3\}$$</p>
    <p><strong>Hasil</strong> :</p>
    <p>Pada contoh di atas, kita membuktikan bahwa kedua proposisi tersebut sama. Karena hasil dari $$A\cap(B\cup C)$$ dan
      $$(A\cap B)\cup(A\cap C)$$ sama, maka $$A\cap (B\cup C)=(A\cap B)\cup(A\cap C).$$</p>
  </li>
  <li>
    <p><strong>Pembuktian dengan definisi</strong></p>
    <p>Pada metode ini, kita menggunakan definisi formal dari himpunan dan operasi-operasi himpunan.</p>
    <p><strong>Contoh</strong> :</p>
    <p><strong>Proposisi</strong> : $$A\cup \phi=A$$</p>
    <p><strong>Pembuktian</strong> :</p>
    <p>$$A\cup \phi=\{x|x\in A\ atau\ x\in \phi\}$$</p>
    <p><strong>Hasil</strong> :</p>
    <p>Karena $$\phi$$ adalah himpunan kosong, maka elemen-elemen dalam $$A\cup \phi$$ hanya akan menjadi elemen-elemen dalam $$A$$.
      Oleh karena itu, $$A\cup \phi=A.$$</p>
  </li>
</ol>

<h2 id="penggunaan-himpunan-pada-teori-bahasa-formal">Penggunaan himpunan pada teori bahasa formal</h2>
<p>Teori himpunan memiliki aplikasi yang luas, termasuk dalam teori bahasa. Dalam konteks ini, alfabet, string, dan
  bahasa dapat direpresentasikan menggunakan konsep-konsep himpunan. Berikut contoh penggunaan himpunan dalam teori
  bahasa:</p>
<ol>
  <li>
    <p><strong>Alfabet</strong></p>
    <p>Alfabet dalam teori bahasa adalah himpunan simbol-simbol atau karakter yang dapat digunakan untuk membentuk
      string atau kata. Misalnya, jika kita memiliki alfabet bahasa Inggris, kita dapat menggambarkan sebagai himpunan:
    </p>
    <p>$$\sum=\{a,b,c,d,\cdots,z\}$$</p>
    <p>Pada <em>Natural Language Processing</em> (NLP), alfabet dapat berupa himpunan huruf latin, angka, atau karakter
      khusus yang digunakan dalam suatu bahasa.</p>
  </li>
  <li>
    <p><strong>String</strong></p>
    <p>String dalam bahasa dapat direpresentasikan sebagai himpunan substring atau urutan simbol dari alfabet. Misalnya,
      kita memiliki string "cat", kita dapat menggambarkannya sebagai himpunan substring:</p>
    <p>$$\{c,a,t,ca,at,cat\}$$</p>
    <p>Pada NLP, himpunan string dapat digunakan untuk merepresentasikan kumpulan
      kata atau kalimat dalam suatu teks. Misalnya, himpunan string yang berisi kalimat-kalimat dari dokumen.</p>
  </li>
  <li>
    <p><strong>Bahasa</strong></p>
    <p>Bahasa dalam teori bahasa adalah himpunan string atau kata-kata yang dapat dihasilkan oleh suatu aturan atau tata
      bahasa. Misalnya, jika kita memiliki bahasa yang terdiri dari string-string yang hanya mengandung huruf "a" dan
      "b" dengan panjang tertentu, kita dapat menggambarkannya sebagai himpunan:</p>
    <p>$$L\{\in,a,b,aa,ab,ba,b,aaa,\cdots\}$$</p>
    <p>Di sini, $$\in$$ adalah himpunan kosong.</p>
    <p>Pada NLP, Sebuah bahasa dapat direpresentasikan sebagai himpunan string
      yang valid dalam bahasa tersebut. Contohnya, himpunan kalimat-kalimat yang valid dalam bahasa Inggris.</p>
  </li>
</ol>
<p>Dalam teori bahasa, operasi himpunan seperti gabungan, irisan, dan komplemen dapat diaplikasikan untuk string atau
  bahasa. Misalnya, jika $$L_{1}$$​ dan $$L_{2}$$​ adalah dua bahasa, kita dapat membentuk gabungan $$L_{1}\cup L_{2}$$​, irisan
  $$L_{1}\cap L_{2}$$​, atau komplemen $$\bar{L_{1}}$$ dari bahasa $$L_{1}​.$$</p>
