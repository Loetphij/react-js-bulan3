## Memahami Perbedaan JSX dengan HTML

1. Tuliskan penjelasan singkat mengenai perbedaan antara JSX dan HTML.
=> JSX adalah ekstensi sintaks JavaScript untuk menulis kode seperti HTML langsung di dalam file JavaScript supaya logika JavaScript dapat digabungkan dengan tampilan UI, namun dengan aturan yg lebih. Sedangkan HTML hanya digunakan untuk membuat struktur dasar atau kerangka web yg statis 


2. Sertakan contoh kode sederhana yang menunjukkan perbedaan tersebut.
=>  JSX :
    function App() {
    return (
        <div className="box">
        <h1>Hello JSX</h1>
        <p>Ini ditulis dengan JSX di React</p>
        <img src="foto.jpg" alt="foto" />
        </div>
    );
    }
    export default App;

    HTML :

    <!DOCTYPE html>
    <html>
    <head>
        <title>Contoh HTML</title>
    </head>
    <body>
        <div class="box">
        <h1>Hello HTML</h1>
        <p>Ini ditulis dengan HTML biasa</p>
        <img src="foto.jpg">
        </div>
    </body>
    </html>

## Menjelaskan Konsep Virtual DOM

Buatlah ringkasan singkat tentang apa itu Virtual DOM dan bagaimana cara kerjanya di React.
=> Virtual DOM adalah representasi ringan dari DOM yg disimpan dalam memori. Cara kerjanya : 
    1. Render 
    2. Pembaruan ketika state atau props dari sebuah komponen berubah 
    3. Perbandingan (Diffing) 
    4. Pembaruan DOM 

## Menjelaskan Perbedaan SPA vs MPA

1. Tuliskan penjelasan mengenai perbedaan antara dan Multi Page Application (MPA).
=> **SPA** adalah aplikasi web yang memuat satu halaman HTML dan secara dinamis memperbarui kontennya tanpa perlu memuat ulang seluruh halaman saat pengguna berinteraksi dengan aplikasi. Sedangkan **MPA** adalah aplikasi web tradisional yang memuat beberapa halaman HTML saat pengguna menavigasi aplikasi.

2. Berikan minimal 2 kelebihan dan 2 kekurangan dari masing-masing arsitektur.
=> Single Page Application (SPA) :
    # Kelebihan
        - Pengalaman pengguna lebih mulus, tidak reload halaman penuh
        - Pengembangan lebih efisien

    # Kekurangan 
        - Waktu Initial Load lebih lama
        - Pengembangan lebih kompleks

    Multi Page Application (MPA) :
    # Kelebihan :
    - Waktu Initial Load yang Lebih Cepat
    - Lebih kompatibel

    # Kekurangan :
    - Pengalaman Pengguna Kurang Mulus
    - Interaksi Lebih Lambat
