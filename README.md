# GoIT JavaScript Homework 11 - HTTP İstekleri ve Görsel Arama Uygulaması

Bu proje, GoIT Full Stack Developer eğitimi JavaScript modülünün on birinci ödevidir. Bu çalışmada; **HTTP protokolü**, **REST API** etkileşimi, asenkron veri çekme (`fetch`), hata yönetimi (`catch`) ve dinamik arayüz güncellemeleri üzerine odaklanılmıştır.

## 📁 Proje Yapısı

Proje, modern **Vite** derleyicisi kullanılarak yapılandırılmış ve Pixabay API üzerinden çalışan interaktif bir görsel arama motoru olarak geliştirilmiştir:

```text
goit-js-hw-11/
├── src/
│   ├── main.js          # Uygulama mantığı ve API istekleri
│   ├── index.html       # Arama formu ve galeri yapısı
│   └── css/
│       └── styles.css   # Makete uygun arayüz tasarımı
├── package.json         # Bağımlılıklar (iziToast, SimpleLightbox, css-loader)
└── vite.config.js       # Vite yapılandırması
