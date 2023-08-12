---
title: "Bekerja dengan Conda Environment"
date: 2023-08-11T00:00:00+00:00
author: Kang Nur
layout: post
permalink: /bekerja-dengan-conda-environment/
published: true
---

<h2>Cara bekerja dengan conda environment</h2>

<div class="code-container">
  <pre>
  <code id="code" class="bash">
   conda create --name &lt;name_env&gt; &lt;package&gt;=&lt;version&gt;
  </code>
  </pre>
</div>

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard(this)">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code id="code" class="bash">
   conda create --name project_data_science python=3.5
  </code>
  </pre>
</div>

<div class="code-container">
  <pre>
  <code id="code" class="bash">
      package                 |            build
   ---------------------------|-----------------
   certifi-2020.6.20          |     pyhd3eb1b0_3         155 KB
   pip-10.0.1                 |           py35_0         1.6 MB
   python-3.5.6               |       he025d50_0        14.5 MB
   setuptools-40.2.0          |           py35_0         497 KB
   wincertstore-0.2           |   py35hfebbdb8_0          14 KB
   ------------------------------------------------------------
                                          Total:        16.7 MB
  </code>
  </pre>
</div>

<div class="code-container">
  <button class="copy-button" onclick="copyToClipboard(this)">
    <i class="fas fa-copy"></i> Salin
  </button>
  <pre>
  <code id="code" class="bash">
   conda env list
  </code>
  </pre>
</div>

<div class="code-container">
  <pre>
  <code id="code" class="bash">
   # conda environments:
   #
   base                  *  C:\Users\Kang Nur\miniconda3
   project_data_science     C:\Users\Kang Nur\miniconda3\envs\project_data_science
  </code>
  </pre>
</div>