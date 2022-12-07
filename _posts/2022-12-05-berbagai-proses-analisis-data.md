---
title: "Berbagai Proses Analisis Data"
date: 2022-12-05T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /berbagai-proses-analisis-data/
image: "/assets/images/post/berbagai-proses-analisis-data/gambar1.jpg"
description: "Proses data analisis adalah ... ."
categories: Analisis Data
tags: [analisis data, teknologi]
---
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
<li><p>Insight Interpretations: memahami insight dan menemukan dampak (impact) pada masing-masing variabel.Storytelling: Mengkomunikasikan hasil analisis dalam bentuk cerita (story) sehingga orang awam dapat memahaminya.</p></li><p></p>

</ol>
</li>
</ol>
<figure>

<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar2.svg"></center>

<figcaption>Gambar 1. analisis data</figcaption>

</figure>

<ol start="2">
<li><p>Proses KDD</p>
<p>KDD merupakan akronim dari Knowledge Discovery in Databases / Data mining. Data mining merujuk pada proses pencarian pengetahuan dari pola (pattern) yang menarik. Tujuan utama KDD adalah untuk mengekstrak pola yang tersembunyi dari database, data warehouse dan sumber data lainnya. Berikut tahap-tahap dari proses KDD:</p>
<ol>
<li><p>Data Cleaning: Membersihkan noise pada data, mengatasi dan mendeteksi missing value (nilai yang hilang) dan data outlier (pencilan).</p>
</li>
<li><p>Data Integration: Menggabungkan dan mengintegrasikan data dari berbagai sumber dengan metode ETL (Extract, Transform, Load).</p>
</li>
<li><p>Data Selection: Data yang sekiranya relevan sesuai kebutuhan analisis dikumpulkan kembali.</p>
</li>
<li><p>Data Transformation: Data dibentuk (direkayasa) sesuai kebutuhan analisis.</p>
</li>
<li><p>Data Mining: Menemukan pola yang berguna dan yang tersembunyi.</p>
</li>
<li><p>Pattern Evaluation: Mengevaluasi pola yang diekstrak.</p>
</li>
<li><p>Knowledge Presentation: Setelah pola dievaluasi, pengetahuan (informasi) divisualisasikan dan dipresentasikan kepada stackholder untuk tujuan pengambilan keputusan (decision-making).</p>
</li>
</ol>
</li>
</ol>
<figure>

<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar3.svg"></center>

<figcaption>Gambar 2. Proses KDD</figcaption>

</figure>

<ol start="3">
<li><p>Proses SEMMA</p>
<p>SEMMA merupakan akronim dari Sample, Explore, Modify, Model dan Assess. Metode ini dikembangkan oleh SAS. Berikut tahap-tahap dari proses SAS:</p>
<ol>
<li><p>Sample
Pada tahap ini, mengidentifikasi database yang berbeda kemudian menggabungkannya. Setelah itu, memilih sampel data untuk digunakan proses pemodelan.</p>
</li>
<li><p>Explore
Pada tahap ini, memahami data, mencari korelasi dari masing-masing variable, memvisualisasikan data, dan menginterpretasikan.</p>
</li>
<li><p>Modify
Pada tahap ini, sebelum data dimodelkan perlu dilakukan modifikasi. Modifikasi ini melibatkan penanganan pada missing value (data yang hilang), mendeteksi outlier, mentransformasikan fitur, dan membuat fitur tambahan baru.</p>
</li>
<li><p>Model
Pada tahap ini, fokus utama adalah memilih dan menerapkan berbagai teknik pemodelan, seperti: Regresi Linear, Regresi Logistik, Decision Tree, KNN, SVM, Neural Netwok, dll.</p>
</li>
<li><p>Assess
Pada tahap terakhir, model yang dibuat performanya dievaluasi dengan evaluation measure, seperti: Confusion Matrix, ROC-AUC, Precision-Recall, dll.</p>
</li>
</ol>
</li>
</ol>
<figure>

<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar4.svg"></center>

<figcaption>Gambar 3. Proses SEMMA</figcaption>

</figure>

<ol start="3">
<li><p>Proses CRISP-DM
CRISP-DM adalah akronim dari Cross-Industry Process for Data Mining. CRISP-DM adalah prosesnya baik, strukturnya baik dan telah terbukti dengan baik untuk proyek machine learning, data mining, dan bisnis intelijen. Berikut tahap-tahap dari CRISP-DM:</p>
<ol>
<li><p>Business Understanding
Pada tahap pertama, memahami skenario dan keperluan bisnis untuk mendesain tujuan analitik dan tujuan awal.</p>
</li>
<li><p>Data Understanding
Pada tahap ini, memahami data, melakukan pengecekan terhadap kualitas data, dan menemukan insight awal.</p>
</li>
<li><p>Data Preparation
Pada tahap ini, menyiapkan data untuk dianalisis. Tahap ini melibatkan penanganan terhadap missing values, mendeteksi dan menangani outlier, normalisasi data, dan feature engineering. Tahap ini paling banyak memakan waktu.</p>
</li>
<li><p>Modeling
Pada tahap ini adalah proses mendesain model untuk tujuan prediksi. Data analis/scientist harus memutuskan teknik pemodelan berdasarkan data.</p>
</li>
<li><p>Evaluation
Setelah data dimodelkan, selanjutnya melakukan evaluasi terhadap kinerja model menggunakan evaluation measures, seperti: MSE, RMSE, R-Square, akurasi, presisi, recall, F1-Score, dll.</p>
</li>
<li><p>Deployment
Tahap terakhir adalah melakukan deploy ke production environment. Tahap ini melibatkan data scientist, software engineering, DevOps, dan bisnis profesional.</p>
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
<li><p>Proses standar data analisis tujuan utamanya adalah mencari insight dan membuat interpretasi dalam bentuk cerita (story).</p>
</li>
<li><p>Proses KDD tujuan utamanya adalah mencari pola (pattern) berdasarkan data dan memvisualisasikannya.</p>
</li>
<li><p>Proses SEMMA tujuan utamanya adalah membangun model atau pemodelan data.</p>
</li>
<li><p>Proses CRISP-DM tujuan utamanya adalah memahami dan mengembangkan bisnis.</p>
</li>
</ol>
<p><strong>Referensi :</strong></p>
<p><a href="https://www.amazon.com/Python-Data-Analysis-collection-visualization-ebook/dp/B0859CVGB4">Python Data Analysis (Third Edition)</a></p>
