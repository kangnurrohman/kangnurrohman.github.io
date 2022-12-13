---
title: "Berbagai Proses Analisis Data"
date: 2022-12-05T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /berbagai-proses-analisis-data/
image: "/assets/images/post/berbagai-proses-analisis-data/gambar1.jpg"
description: "Proses analisis data melibatkan pengumpulan, pemrosesan, penjelajahan, dan penggunaan data untuk menemukan sebuah pola"
categories: Analisis Data
tags: [analisis data, teknologi]
---
<p>Proses analisis data melibatkan pengumpulan, pemrosesan, penjelajahan, dan penggunaan data untuk menemukan sebuah pola <em>(pattern)</em> dan wawasan <em>(insight)</em>. Ada berbagai proses analisis data, seperti: <strong>Proses Standar Analisis Data</strong>, <strong>Proses KDD</strong>, <strong>Proses SEMMA</strong>, dan yang lebih sering didengar yaitu <strong>Proses CRISP-DM</strong>. Berikut untuk penjelasan lebih detailnya:</p>
<ol>
<li><p><strong>Proses Standar Analisis Data</strong></p>
<p>Pada proses ini, analisis data merujuk pada investigasi, menemukan insight, dan penarikan kesimpulan berdasarkan data. Tujuan utamanya adalah mengumpulkan, memfilter, membersihkan, mentransformasikan, mengeksplorasi, mendeskripsikan, memvisualisasikan dan mengkomunikasikan <em>insight</em> berdasarkan data untuk tujuan pengambilan keputusan. Berikut tahap-tahap dari proses standar analisis data:&nbsp;</p>
<ol>
<li><p><strong><em>Collecting Data:</em></strong> Mengumpulkan data dari berbagai sumber.</p>
</li>
<li><p><strong><em>Preprocessing Data:</em></strong> Memfilter, membersihkan dan mentransformasikan data ke dalam bentuk yang dibutuhkan.</p>
</li>
<li><p><strong><em>Analyzing and Finding Insights:</em></strong> Mengeksplorasi, mendeskripsikan (menggambarkan) dan memvisualisasikan data untuk menemukan pola dan kesimpulan.</p>
</li>
<li><p><strong><em>Insight Interpretations:</em></strong> memahami insight dan menemukan dampak <em>(impact)</em> pada masing-masing variabel.</p>
</li>
<li><p><strong><em>Storytelling:</em></strong> Mengkomunikasikan hasil analisis dalam bentuk cerita <em>(story)</em> sehingga orang awam dapat memahaminya.</p>
</li>
</ol>
</li>
</ol>
<figure>

<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar2.svg"></center>

<figcaption>Gambar 1. analisis data</figcaption>

</figure>

<ol start="2">
<li><p><strong>Proses KDD</strong></p>
<p>KDD merupakan akronim dari <em>Knowledge Discovery in Databases</em> / <em>Data mining</em>. <em>Data mining</em> merujuk pada proses pencarian pengetahuan dari pola <em>(pattern)</em> yang menarik. Tujuan utama KDD adalah untuk mengekstrak pola yang tersembunyi dari <em>database, data warehouse</em> dan sumber data lainnya. Berikut tahap-tahap dari proses KDD:</p>
<ol>
<li><p><strong><em>Data Cleaning:</em></strong> Membersihkan <em>noise</em> pada data, mengatasi dan mendeteksi <em>missing value</em> (nilai yang hilang) dan <em>data outlier</em> (pencilan).</p>
</li>
<li><p><strong><em>Data Integration:</em></strong> Menggabungkan dan mengintegrasikan data dari berbagai sumber dengan metode ETL <em>(Extract, Transform, Load)</em>.</p>
</li>
<li><p><strong><em>Data Selection:</em></strong> Data yang sekiranya relevan sesuai kebutuhan analisis dikumpulkan kembali.</p>
</li>
<li><p><strong><em>Data Transformation:</em></strong> Data dibentuk (direkayasa) sesuai kebutuhan analisis.</p>
</li>
<li><p><strong><em>Data Mining:</em></strong> Menemukan pola yang berguna dan yang tersembunyi.</p>
</li>
<li><p><strong><em>Pattern Evaluation:</em></strong> Mengevaluasi pola yang diekstrak.</p>
</li>
<li><p><em>Knowledge Presentation:</em> Setelah pola dievaluasi, pengetahuan (informasi) divisualisasikan dan dipresentasikan kepada stakeholder untuk tujuan pengambilan keputusan <em>(decision-making)</em>.</p>
</li>
</ol>
</li>
</ol>
<figure>

<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar3.svg"></center>

<figcaption>Gambar 2. Proses KDD</figcaption>

</figure>

<ol start="3">
<li><p><strong>Proses SEMMA</strong></p>
<p>SEMMA merupakan akronim dari <em>Sample, Explore, Modify, Model</em> dan <em>Assess</em>. Metode ini dikembangkan oleh SAS. Berikut tahap-tahap dari proses SAS:</p>
<ol>
<li><p><strong><em>Sample</em></strong></p>
<p>Pada tahap ini, mengidentifikasi <em>database</em> yang berbeda kemudian menggabungkannya. Setelah itu, memilih sampel data untuk digunakan proses pemodelan.</p>
</li>
<li><p><strong><em>Explore</em></strong></p>
<p>Pada tahap ini, memahami data, mencari korelasi dari masing-masing variable, memvisualisasikan data, dan menginterpretasikan.</p>
</li>
<li><p><strong><em>Modify</em></strong></p>
<p>Pada tahap ini, sebelum data dimodelkan perlu dilakukan modifikasi. Modifikasi ini melibatkan penanganan pada <em>missing value</em> (data yang hilang), mendeteksi <em>outlier</em>, mentransformasikan fitur, dan membuat fitur tambahan baru.</p>
</li>
<li><p><strong><em>Model</em></strong></p>
<p>Pada tahap ini, fokus utama adalah memilih dan menerapkan berbagai teknik pemodelan, seperti: Regresi Linear, Regresi Logistik, Decision Tree, KNN, SVM, Neural Netwok, dll.</p>
</li>
<li><p><strong><em>Assess</em></strong></p>
<p>Pada tahap terakhir, model yang dibuat performanya dievaluasi dengan evaluation measure, seperti: Confusion Matrix, ROC-AUC, Precision-Recall, dll.</p>
</li>
</ol>
</li>
</ol>
<figure>

<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar4.svg"></center>

<figcaption>Gambar 3. Proses SEMMA</figcaption>

</figure>

<ol start="4">
<li><p><strong><em>Proses CRISP-DM</em></strong>
CRISP-DM adalah akronim dari <em>Cross-Industry Process for Data Mining</em>. CRISP-DM adalah prosesnya baik, strukturnya baik dan telah terbukti dengan baik untuk proyek <em>machine learning, data mining</em>, dan bisnis intelijen. Berikut tahap-tahap dari CRISP-DM:</p>
<ol>
<li><p><strong><em>Business Understanding</em></strong></p>
<p>Pada tahap pertama, memahami skenario dan keperluan bisnis untuk mendesain tujuan analitik dan tujuan awal.</p>
</li>
<li><p><strong><em>Data Understanding</em></strong></p>
<p>Pada tahap ini, memahami data, melakukan pengecekan terhadap kualitas data, dan menemukan insight awal.</p>
</li>
<li><p><strong><em>Data Preparation</em></strong></p>
<p>Pada tahap ini, menyiapkan data untuk dianalisis. Tahap ini melibatkan penanganan terhadap <em>missing values</em>, mendeteksi dan menangani <em>outlier</em>, normalisasi data, dan <em>feature engineering</em>. Tahap ini paling banyak memakan waktu.</p>
</li>
<li><p><strong><em>Modeling</em></strong></p>
<p>Pada tahap ini adalah proses mendesain model untuk tujuan prediksi. Data analis/scientist harus memutuskan teknik pemodelan berdasarkan data.</p>
</li>
<li><p><strong><em>Evaluation</em></strong></p>
<p>Setelah data dimodelkan, selanjutnya melakukan evaluasi terhadap kinerja model menggunakan evaluation measures, seperti: MSE, RMSE, R-Square, akurasi, presisi, recall, F1-Score, dll.</p>
</li>
<li><p><strong><em>Deployment</em></strong></p>
<p>Tahap terakhir adalah melakukan deploy ke <em>production environment</em>. Tahap ini melibatkan <em>data scientist, software engineering, DevOps</em>, dan bisnis profesional.</p>
</li>
</ol>
</li>
</ol>
<figure>

<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar5.svg"></center>

<figcaption>Gambar 4. Proses CRISP-DM</figcaption>

</figure>

<p>Kesimpulan:</p>
<p>Manakah proses analisis data yang terbaik? Untuk menjawab ini seorang data analis/scientist harus tau dulu tujuan utamanya. Berdasarkan tahap-tahap dari proses analis data dapat disimpulkan:</p>
<ol>
<li><p><strong>Proses standar data analisis</strong> tujuan utamanya adalah mencari insight dan membuat interpretasi dalam bentuk cerita (story).</p>
</li>
<li><p><strong>Proses KDD</strong> tujuan utamanya adalah mencari pola (pattern) berdasarkan data dan memvisualisasikannya.</p>
</li>
<li><p><strong>Proses SEMMA</strong> tujuan utamanya adalah membangun model atau pemodelan data.</p>
</li>
<li><p><strong>Proses CRISP-DM</strong> tujuan utamanya adalah memahami dan mengembangkan bisnis.</p>
</li>
</ol>
<p><strong>Referensi :</strong></p>
<p>[1] <a href="https://www.amazon.com/Python-Data-Analysis-collection-visualization-ebook/dp/B0859CVGB4">Python Data Analysis (Third Edition)</a></p>
