---
title: "Life Cycles pada Proyek Data Analytics"
date: 2023-08-25T00:00:00+00:00
update: 2023-08-25T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /life-cycle-pada-proyek-data-analytics/
image: "/assets/images/post/life-cycle-pada-proyek-data-analytics/gambar0.png"
description: "Life cycle pada proyek data analytics adalah serangkaian tahapan atau langkah-langkah untuk mengelola data dari data berbentuk raw (data mentah) hingga siap diimplementasikan."
categories: Data Science
tags: [analisis data, teknologi]
published: true
---
<figure>
<img src="/assets/images/post/life-cycle-pada-proyek-data-analytics/gambar0.png">
</figure>

<h2>Apa itu life cycle pada proyek data analytics?</h2>
<p>Life cycle pada proyek data analytics adalah serangkaian tahapan atau langkah-langkah untuk mengelola data dari data berbentuk <em>raw</em> (data mentah) hingga siap diimplementasikan. Tujuannya untuk membantu data analyst memastikan proses analisis data berjalan secara sistematis dan efektif. Ada empat tahap yang akan dibahas disini, yaitu:</p>
<ol>
<li><h3><strong>Business Understanding</strong></h3>
<p><em>Business understanding</em> adalah pemahaman terhadap data, masalah yang ingin diselesaikan dan tujuan yang akan dicapai menggunakan analisis data. Biasanya pada tahap ini melibatkan seseorang yang memiliki <strong><em>domain expertise</em></strong>, yaitu seseorang yang telah memiliki pengetahuan mendalam pada bidang tertentu, contoh dalam bidang keuangan, kesehatan, manufaktur, energi, dll.</p>
<p>Pada tahap ini pula data analyst sering berkomunikasi dengan business analyst yang menjadi jembatan antara sisi bisnis dan teknis untuk memastikan bahwa analisis data yang dilakukan benar-benar sesuai dengan goal bisnis dan memberikan nilai tambah. Mengapa begitu? dikarenakan business analyst memiliki pemahaman yang mendalam tentang kebutuhan bisnis, tujuan, masalah, proses, dll.</p>
</li>
<li><h3>ETL Pipeline</h3>
<figure>
<img src="/assets/images/post/life-cycle-pada-proyek-data-analytics/gambar1.png">
<figcaption>Gambar 1. ETL Pipeline </figcaption>
</figure>
<p>ETL merupakan singkatan dari <em>Extract</em>, <em>Transform</em>, dan <em>Load</em> yang mengacu pada serangkaian proses yang digunakan untuk mengambil data dari <em>resources</em> yang ada <em>(extract)</em>, mengubahnya menjadi bentuk sesuai kebutuhan bisnis <em>(transform)</em> dan mengekspor ke penyimpanan data <em>(load)</em> untuk dilakukan analisis lebih lanjut. Berikut detailnya:</p>
<ol>
<li><p><strong>Extract Data</strong></p>
<p>Tahap ini melibatkan pengambilan data dari berbagai resources yang tersedia. Ada banyak sekali <em>resouces</em> data yang bisa diambil seperti dari database, text file (CSV, TSV, JSON), API, cloud, data streaming, dll.</p>
</li>
<li><p><strong>Transform Data</strong></p>
<p>Tujuan tahap ini adalah untuk merubah bentuk atau format data sesuai kebutuhan bisnis, sering disebut <em>data preparation</em>, <em>data preprocessing</em> dan istilah lainnya. Banyak sekali sesuatu yang dilakukan ditahap ini, seperti:</p>
<ul>
<li><p><em>Remove duplicate</em>: Menghapus data yang serupa.</p>
</li>
<li><p><em>Remove irrelevant</em>: Menghapus data yang tidak relevan pada kebutuhan bisnis.</p>
</li>
<li><p><em>Fix error</em>: memperbaiki data jika terjadi kesalahan.</p>
</li>
<li><p><em>Fill missing values</em>: Mengisi data yang hilang dengan metode tertentu.</p>
</li>
<li><p><em>Fix data types</em>: Memperbaiki format data yang tidak sesuai.</p>
</li>
</ul>
</li>
<li><p><strong>Load Data</strong></p>
<p>Setelah dilakukan transformasi data, kemudian data disimpan pada <em>data department</em> seperti <em>data warehouse</em>, <em>data lake</em>, <em>cloud storage</em> atau bahkan bisa langsung digunakan untuk pembuatan model pada machine learning</p>
</li>
</ol>
</li>
</ol>
<p>  Oh iya, tahap ETL Pipeline adalah tahap yang paling banyak menghabiskan waktu dan <em>effort</em> diperkirakan 70% dari proyek analisis data atau 2/3.</p>
<ol start="3">
<li><h3>Exploratory Data Analysis</h3>
<p>EDA atau <em>Exploratory Data Analysis</em> adalah tahap yang digunakan untuk mengeksplorasi, memahami, dan menggali informasi lebih dalam dari data. Tujuannya untuk mengidentifikasi distribusi data, menemukan pola dan korelasi, mendeteksi anomali, dan memilih metode analisis yang tepat.</p>
<p>Sebagai contoh, seorang data analyst bekerja di sebuah e-commerce, dan mendapatkan pertanyaan seperti berikut:</p>
<p>"Bagaimana pola pembelian pelanggan?"</p>
<p>Untuk menjawab pertanyaan ini, data analyst menjawab dengan melakukan identifikasi pola pembelian pelanggan pada data transaksi. Setelah itu membuat visualisasi seperti histogram atau bar chart untuk melihat distribusi jumlah transaksi per pelanggan. Dari sini data analyst melihat pelanggan yang sering, jarang atau cuman sekali berbelanja.</p>
</li>
<li><h3>Conclusion</h3>
<p>Ini adalah tahap terakhir pada siklus proyek data analytics. Tahap ini adalah menggambarkan hasil akhir dari analisis data dan untuk menyampaikan <em>insight</em> kepada klien atau stackholder untuk mengarahkan tindakan selanjutnya. Jika seorang data analyst tidak dapat menyampaikan conclusion apapun, maka analisis data dianggap gagal atau tidak berguna. Berikut ringkasan pertanyaan untuk membuat sebuah <em>conclusion</em>.</p>
<ol>
<li><p>Apa temuan utama dari analisis data?</p>
</li>
<li><p>Bagaimana hasil analisis data terhadap implikasi bisnis?</p>
</li>
<li><p>Apa rekomendasi yang harus diambil untuk langkah-langkah selanjutnya?</p>
</li>
<li><p>Apa saja batasan atau limitasi selama proses analisis data?</p>
</li>
<li><p>Apakah sudah tepat menggunakan jenis visualisasi ?</p>
</li>
</ol>
</li>
</ol>
<h4>Penutup</h4>
<p>Dalam mengerjakan proyek analisis data, <em>life cycle</em> ini memberikan sebuah langkah yang bagi seorang data analyst. Dan juga, seorang data analyst dapat membuat sebuah solusi untuk memecahkan masalah atau mencapai tujuan dengan sistematis, dari data didapat hingga disajikan.</p>


#### **Referensi :**
<div class="endnote">
    <ol>
      <li>Shearer, C. (2000). The CRISP-DM Model: The New Blueprint for Data Mining. Journal of Data Warehousing, 5, 13-22.</li>
      <li>Kimball, Ralph et al. (2011). <a style="color:green" href="https://www.wiley.com/en-ae/The+Data+Warehouse+Lifecycle+Toolkit,+2nd+Edition-p-9780470149775">The Data Warehouse Lifecycle Toolkit, 2nd Edition.</a> Wiley.</li>
      <li>Data, MIT. (2016). Secondary Analysis of Electronic Health Records. <a style="color:green" href="http://dx.doi.org/10.1007/978-3-319-43742-2">10.1007/978-3-319-43742-2.</a> </li>
    </ol>
  </div>

