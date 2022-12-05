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
Proses analisis data melibatkan pengumpulan, pemrosesan, penjelajahan, dan penggunaan data untuk menemukan sebuah pola (pattern) dan wawasan (insight). Ada berbagai proses analisis data, seperti: Proses Standar Analisis Data, Proses KDD, Proses SEMMA, dan yang lebih sering didengar yaitu proses CRISP-DM. Berikut untuk penjelasan lebih detailnya:

<ol>
<li>Proses Standar Analisis Data</li>
   
   Pada proses ini, analisis data merujuk pada investigasi, menemukan insight, dan penarikan kesimpulan berdasarkan data. Tujuan utamanya adalah mengumpulkan, memfilter, membersihkan, mentransformasikan, mengeksplorasi, mendeskripsikan, memvisualisasikan dan mengkomunikasikan insight berdasarkan data untuk tujuan pengambilan keputusan. Berikut tahap-tahap dari proses standar analisis data:

   <ol>
   <li>Collecting Data: Mengumpulkan data dari berbagai sumber.</li>
   <li>Preprocessing Data: Memfilter, membersihkan dan mentransformasikan data ke dalam bentuk yang dibutuhkan.</li>
   <li>Analyzing and Finding Insights: Mengeksplorasi, mendeskripsikan (menggambarkan) dan memvisualisasikan data untuk menemukan pola dan kesimpulan.</li>
   <li>Insight Interpretations: memahami insight dan menemukan dampak (impact) pada masing-masing variabel.</li>
   <li>Storytelling: Mengkomunikasikan hasil analisis dalam bentuk cerita (story) sehingga orang awam dapat memahaminya.</li>
   </ol>

<figure>
<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar2.svg"></center>
<figcaption>Gambar 1. analisis data</figcaption>
</figure>

<li>Proses KDD</li>

    KDD merupakan akronim dari Knowledge Discovery in Databases / Data mining. Data mining merujuk pada proses pencarian pengetahuan dari pola (pattern) yang menarik. Tujuan utama KDD adalah untuk mengekstrak pola yang tersembunyi dari database, data warehouse dan sumber data lainnya. Berikut tahap-tahap dari proses KDD:

    <ol>
    <li>Data Cleaning: Membersihkan noise pada data, mengatasi dan mendeteksi missing value (nilai yang hilang) dan data outlier (pencilan).</li>
    <li>Data Integration: Menggabungkan dan mengintegrasikan data dari berbagai sumber dengan metode ETL (Extract, Transform, Load).</li>
    <li>Data Selection: Data yang sekiranya relevan sesuai kebutuhan analisis dikumpulkan kembali.</li>
    <li>Data Transformation: Data dibentuk (direkayasa) sesuai kebutuhan analisis.</li>
    <li>Data Mining: Menemukan pola yang berguna dan yang tersembunyi.</li>
    <li>Pattern Evaluation: Mengevaluasi pola yang diekstrak.</li>
    <li>Knowledge Presentation: Setelah pola dievaluasi, pengetahuan (informasi) divisualisasikan dan dipresentasikan kepada stackholder untuk tujuan pengambilan keputusan (decision-making).</li>
    </ol>

<figure>
<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar3.svg"></center>
<figcaption>Gambar 2. Proses KDD</figcaption>
</figure>

<li>Proses SEMMA</li>

    SEMMA merupakan akronim dari Sample, Explore, Modify, Model dan Assess. Metode ini dikembangkan oleh SAS. Berikut tahap-tahap dari proses SAS:

    <ol>
    <li>Sample</li>
      Pada tahap ini, mengidentifikasi database yang berbeda kemudian menggabungkannya. Setelah itu, memilih sampel data untuk digunakan proses pemodelan.
    <li>Explore</li>
       Pada tahap ini, memahami data, mencari korelasi dari masing-masing variable, memvisualisasikan data, dan menginterpretasikan.
    <li>Modify</li>
       Pada tahap ini, sebelum data dimodelkan perlu dilakukan modifikasi. Modifikasi ini melibatkan penanganan pada missing value (data yang hilang), mendeteksi outlier, mentransformasikan fitur, dan membuat fitur tambahan baru.
    <li>Model</li>
       Pada tahap ini, fokus utama adalah memilih dan menerapkan berbagai teknik pemodelan, seperti: Regresi Linear, Regresi Logistik, Decision Tree, KNN, SVM, Neural Netwok, dll.
    <li>Assess</li>
       Pada tahap terakhir, model yang dibuat performanya dievaluasi dengan evaluation measure, seperti: Confusion Matrix, ROC-AUC, Precision-Recall, dll.
    </ol>

<figure>
<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar4.svg"></center>
<figcaption>Gambar 3. Proses SEMMA</figcaption>
</figure>

<li>Proses CRISP-DM</li>

    CRISP-DM adalah akronim dari Cross-Industry Process for Data Mining. CRISP-DM adalah prosesnya baik, strukturnya baik dan telah terbukti dengan baik untuk proyek machine learning, data mining, dan bisnis intelijen. Berikut tahap-tahap dari CRISP-DM:

    <ol>
    <li>Business Understanding</li>
    Pada tahap pertama, memahami skenario dan keperluan bisnis untuk mendesain tujuan analitik dan tujuan awal.
    <li>Data Understading</li>
    Pada tahap ini, memahami data, melakukan pengecekan terhadap kualitas data, dan menemukan insight awal.
    <li>Data Preparation</li>
    Pada tahap ini, menyiapkan data untuk dianalisis. Tahap ini melibatkan penanganan terhadap missing values, mendeteksi dan menangani outlier, normalisasi data, dan feature engineering. Tahap ini paling banyak memakan waktu.
    <li>Modeling</li>
    Pada tahap ini adalah proses mendesain model untuk tujuan prediksi. Data analis/scientist harus memutuskan teknik pemodelan berdasarkan data.
    <li>Evaluation</li>
    Setelah data dimodelkan, selanjutnya melakukan evaluasi terhadap kinerja model menggunakan evaluation measures, seperti: MSE, RMSE, R-Square, akurasi, presisi, recall, F1-Score, dll.
    <li>Deployment</li>
    Tahap terakhir adalah melakukan deploy ke production environment. Tahap ini melibatkan data scientist, software engineering, DevOps, dan bisnis profesional.
    </ol>

<figure>
<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar5.svg"></center>
<figcaption>Gambar 4. Proses CRISP-DM</figcaption>
</figure>

Kesimpulan:

Manakah proses analisis data yang terbaik? Untuk menjawab ini seorang data analis/scientist harus tau dulu tujuan utamanya. Berdasarkan tahap-tahap dari proses analis data dapat disimpulkan:

    <ol>
    <li>Proses standar data analisis tujuan utamanya adalah mencari insight dan membuat interpretasi dalam bentuk cerita (story).</li>
    <li>Proses KDD tujuan utamanya adalah mencari pola (pattern) berdasarkan data dan memvisualisasikannya.</li>
    <li>Proses SEMMA tujuan utamanya adakah membangun model atau pemodelan data.</li>
    <li>Proses CRISP-DM tujuan utamanya adalah memahami dan mengembangkan bisnis.</li>
    </ol>

</ol>

#### **Referensi :**
[1] <a style="color:green" href="https://www.amazon.com/Python-Data-Analysis-collection-visualization-ebook/dp/B0859CVGB4">Python Data Analysis (Third Edition)</a>