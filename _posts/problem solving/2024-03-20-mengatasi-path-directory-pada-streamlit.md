---
title: "Mengatasi Path Directory pada Streamlit"
date: 2024-03-20T00:00:00+00:00
update: 2024-03-20T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /mengatasi-path-directory-pada-streamlit/
image: "/assets/images/post/problem-solving/mengatasi-path-directory-pada-streamlit/gambar0.png"
description: "Streamlit adalah framework bersifat open-source yang digunakan untuk membuat web apps secara cepat dan interaktif, biasanya untuk mendeploy model machine learning."
categories: Problem Solving
tags: [problem solving, streamlit, tips dan trik]
published: true
---

<p>Streamlit adalah <em>framework</em> bersifat <em>open-source</em> yang digunakan untuk membuat web apps secara cepat dan interaktif, biasanya untuk mendeploy model <em>machine learning</em>. Streamlit bisa dijalankan di lokal komputer kita atau di <em>deploy</em> di cloud salah satunya di <a href="https://share.streamlit.io/">https://share.streamlit.io/</a>. Namun, ketika saya menjalankan di lokal dan di cloud saya menemukan masalah pada <em>path directory</em> ketika membaca file lain. Berikut struktur direktori saya:</p>
<div class="code-container">
  <pre>
  <code>

    ├── To-the-Moon
    │   └── Streamlit
    │       └── Calories-Burned-Calculator
    │           ├── app.py
    │           ├── calculator.ipynb
    │           ├── data.csv
    │           ├── model.sav
    │           └── requirements.txt

  </code>
  </pre>
</div>
<p>Ketika saya menjalankan streamlit di lokal, untuk mengakses <code>model.sav</code> cukup dengan <code>pickle.load(open('model.sav', 'rb'))</code> karena memang masih satu direktori dengan <code>app.py</code>. Namun, ketika dijalankan di <a href="https://share.streamlit.io/">https://share.streamlit.io/</a>, web-apps tidak bisa dijalankan . Berikut error yang muncul:</p>
<div class="code-container">
  <pre>
  <code>

    File "/mount/src/data-science-portfolio/To-the-Moon/Streamlit/Calories-Burned-Calculator/app.py", line 10, in &lt;module&gt;
        model = pickle.load(open('model.sav', 'rb'))
    FileNotFoundError: [Errno 2] No such file or directory: 'model.sav'

  </code>
  </pre>
</div>
<p>Error tersebut menunjukkan bahwa file <code>model.sav</code> tidak ditemukan. di lingkungan <a href="https://share.streamlit.io/">https://share.streamlit.io/</a> untuk mengakses <code>model.sav</code> harus dari folder utama yakni <code>To-the-Moon/Streamlit/Calories-Burned-Calculator/model.sav</code>. Untuk mengatasi masalah ini, ada satu teknik yang unik yaitu menggunakan fungsi <code>platform.processor()</code>. Fungsi ini digunakan untuk mendapatkan informasi tentang prosesor yang digunakan oleh sistem. Berikut contoh kodenya:</p>
<div class="code-container">
  <pre>
  <code class="python">

    if platform.processor() != '':
     model = pickle.load(open('model.sav', 'rb'))
    else:
     model = pickle.load(open('To-the-Moon/Streamlit/Calories-Burned-Calculator/model.sav', 'rb'))

  </code>
  </pre>
</div>

<p>Pada pengujian tersebut apabila aplikasi dijalankan di lokal maka fungsi <code>platform.processor()</code> menampilkan prosesor komputer, artinya nilai tidak kosong, sedangkan di <a href="https://share.streamlit.io/">https://share.streamlit.io/</a> mengembalikan nilai kosong.</p>
<p>Hanya dengan fungsi <code>platform.processor()</code> kita bisa mengatasi masalah <em>path directory</em> pada streamlit di lingkungkan lokal maupun cloud.</p>
