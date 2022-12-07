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
1. Proses Standar Analisis Data
  
  Pada proses ini, analisis data merujuk pada investigasi, menemukan insight, dan penarikan kesimpulan berdasarkan data. Tujuan utamanya adalah mengumpulkan, memfilter, membersihkan, mentransformasikan, mengeksplorasi, mendeskripsikan, memvisualisasikan dan mengkomunikasikan *insight* berdasarkan data untuk tujuan pengambilan keputusan. Berikut tahap-tahap dari proses standar analisis data: 
  
  1. Collecting Data: Mengumpulkan data dari berbagai sumber.
    
  2. Preprocessing Data: Memfilter, membersihkan dan mentransformasikan data ke dalam bentuk yang dibutuhkan.
    
  3. Analyzing and Finding Insights: Mengeksplorasi, mendeskripsikan (menggambarkan) dan memvisualisasikan data untuk menemukan pola dan kesimpulan.
    
  4. Insight Interpretations: memahami insight dan menemukan dampak (impact) pada masing-masing variabel.Storytelling: Mengkomunikasikan hasil analisis dalam bentuk cerita (story) sehingga orang awam dapat memahaminya.</li>
    

<figure>

<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar2.svg"></center>

<figcaption>Gambar 1. analisis data</figcaption>

</figure>

2. Proses KDD
  
  KDD merupakan akronim dari Knowledge Discovery in Databases / Data mining. Data mining merujuk pada proses pencarian pengetahuan dari pola (pattern) yang menarik. Tujuan utama KDD adalah untuk mengekstrak pola yang tersembunyi dari database, data warehouse dan sumber data lainnya. Berikut tahap-tahap dari proses KDD:
  
  1. Data Cleaning: Membersihkan noise pada data, mengatasi dan mendeteksi missing value (nilai yang hilang) dan data outlier (pencilan).
    
  2. Data Integration: Menggabungkan dan mengintegrasikan data dari berbagai sumber dengan metode ETL (Extract, Transform, Load).
    
  3. Data Selection: Data yang sekiranya relevan sesuai kebutuhan analisis dikumpulkan kembali.
    
  4. Data Transformation: Data dibentuk (direkayasa) sesuai kebutuhan analisis.
    
  5. Data Mining: Menemukan pola yang berguna dan yang tersembunyi.
    
  6. Pattern Evaluation: Mengevaluasi pola yang diekstrak.
    
  7. Knowledge Presentation: Setelah pola dievaluasi, pengetahuan (informasi) divisualisasikan dan dipresentasikan kepada stackholder untuk tujuan pengambilan keputusan (decision-making).
    

<figure>

<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar3.svg"></center>

<figcaption>Gambar 2. Proses KDD</figcaption>

</figure>

3. Proses SEMMA
  
  SEMMA merupakan akronim dari Sample, Explore, Modify, Model dan Assess. Metode ini dikembangkan oleh SAS. Berikut tahap-tahap dari proses SAS:
  
  1. Sample
    Pada tahap ini, mengidentifikasi database yang berbeda kemudian menggabungkannya. Setelah itu, memilih sampel data untuk digunakan proses pemodelan.
    
  2. Explore
    Pada tahap ini, memahami data, mencari korelasi dari masing-masing variable, memvisualisasikan data, dan menginterpretasikan.
    
  3. Modify
    Pada tahap ini, sebelum data dimodelkan perlu dilakukan modifikasi. Modifikasi ini melibatkan penanganan pada missing value (data yang hilang), mendeteksi outlier, mentransformasikan fitur, dan membuat fitur tambahan baru.
    
  4. Model
    Pada tahap ini, fokus utama adalah memilih dan menerapkan berbagai teknik pemodelan, seperti: Regresi Linear, Regresi Logistik, Decision Tree, KNN, SVM, Neural Netwok, dll.
    
  5. Assess
    Pada tahap terakhir, model yang dibuat performanya dievaluasi dengan evaluation measure, seperti: Confusion Matrix, ROC-AUC, Precision-Recall, dll.
    

<figure>

<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar4.svg"></center>

<figcaption>Gambar 3. Proses SEMMA</figcaption>

</figure>

3. Proses CRISP-DM
  CRISP-DM adalah akronim dari Cross-Industry Process for Data Mining. CRISP-DM adalah prosesnya baik, strukturnya baik dan telah terbukti dengan baik untuk proyek machine learning, data mining, dan bisnis intelijen. Berikut tahap-tahap dari CRISP-DM:
  
  1. Business Understanding
    Pada tahap pertama, memahami skenario dan keperluan bisnis untuk mendesain tujuan analitik dan tujuan awal.
    
  2. Data Understanding
    Pada tahap ini, memahami data, melakukan pengecekan terhadap kualitas data, dan menemukan insight awal.
    
  3. Data Preparation
    Pada tahap ini, menyiapkan data untuk dianalisis. Tahap ini melibatkan penanganan terhadap missing values, mendeteksi dan menangani outlier, normalisasi data, dan feature engineering. Tahap ini paling banyak memakan waktu.
    
  4. Modeling
    Pada tahap ini adalah proses mendesain model untuk tujuan prediksi. Data analis/scientist harus memutuskan teknik pemodelan berdasarkan data.
    
  5. Evaluation
    Setelah data dimodelkan, selanjutnya melakukan evaluasi terhadap kinerja model menggunakan evaluation measures, seperti: MSE, RMSE, R-Square, akurasi, presisi, recall, F1-Score, dll.
    
  6. Deployment
    Tahap terakhir adalah melakukan deploy ke production environment. Tahap ini melibatkan data scientist, software engineering, DevOps, dan bisnis profesional.
    

<figure>

<center><img src="/assets/images/post/berbagai-proses-analisis-data/gambar5.svg"></center>

<figcaption>Gambar 4. Proses CRISP-DM</figcaption>

</figure>

Kesimpulan:

Manakah proses analisis data yang terbaik? Untuk menjawab ini seorang data analis/scientist harus tau dulu tujuan utamanya. Berdasarkan tahap-tahap dari proses analis data dapat disimpulkan:

1. Proses standar data analisis tujuan utamanya adalah mencari insight dan membuat interpretasi dalam bentuk cerita (story).
  
2. Proses KDD tujuan utamanya adalah mencari pola (pattern) berdasarkan data dan memvisualisasikannya.
  
3. Proses SEMMA tujuan utamanya adalah membangun model atau pemodelan data.
  
4. Proses CRISP-DM tujuan utamanya adalah memahami dan mengembangkan bisnis.
  

**Referensi :**

[Python Data Analysis (Third Edition)](https://www.amazon.com/Python-Data-Analysis-collection-visualization-ebook/dp/B0859CVGB4)