function App() {
  const sultans = [
    {
      id: 1, 
      img: "https://upload.wikimedia.org/wikipedia/id/thumb/0/04/Lukisan_Pangeran_Mangkubumi_aka_Sultan_Hamengkubuwono_I.jpg/250px-Lukisan_Pangeran_Mangkubumi_aka_Sultan_Hamengkubuwono_I.jpg", namaAsli: 'Raden Mas Sujana', 
      gelar: '"Pangeran Mangkubumi"', 
      urutan: "I", 
      tahunHidup: "6 Agustus 1717 - 4 Maret 1792 (umur 74)", 
      tahunMemerintah: "1755 - 1792"
    }, {
      id: 2, 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Hamengkubuwono_II.jpg/500px-Hamengkubuwono_II.jpg", 
      namaAsli: 'Raden Mas Sundoro', 
      gelar: '"Sultan Sepuh"',
      urutan: "II", 
      tahunHidup: "7 Maret 1750 - 3 Januari 1828 (umur 77)", 
      tahunMemerintah: {
        periode1: "1792 - 1810",
        periode2: "1811 - 1812",
        periode3: "1826 - 1828",
      }
    }, {id: 3, 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Official_Portrait_of_Sultan_Hamengkubowono_III.jpg/250px-Official_Portrait_of_Sultan_Hamengkubowono_III.jpg", 
      namaAsli: 'Raden Mas Surojo', gelar: '"Sultan Anom"',urutan: "III", tahunHidup: "20 Februari 1769 - 3 November 1814 (umur 45)", tahunMemerintah: {
      periode1: "1810-1811",
      periode2: "1812-1814"
      }
    }, {
      id: 4, 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Official_Portrait_of_Sultan_Hamengkubowono_IV.jpg/250px-Official_Portrait_of_Sultan_Hamengkubowono_IV.jpg", 
      namaAsli: 'Raden Mas Ibnu Jarot', 
      gelar: '"Sultan Cilik"',
      urutan: "IV", 
      tahunHidup: "3 April 1804 - 6 Desember 1822 (umur 18)", 
      tahunMemerintah: "1814 - 1822"
    }, {
      id: 5, 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Official_Portrait_of_Sultan_Hamengkubowono_V.jpg/250px-Official_Portrait_of_Sultan_Hamengkubowono_V.jpg", 
      namaAsli: 'Raden Mas Gathot Menol', 
      gelar: '"Sultan Kanak"',
      urutan: "V", 
      tahunHidup: "24 Januari 1820 - 5 Juni 1855 (umur 35)", 
      tahunMemerintah: {
        peridoe1: "1822 - 1826",
        periode2: "1828 - 1855"
      }
    }, {
      id: 6, 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Official_Portrait_of_Sultan_Hamengkubowono_VI.jpg/250px-Official_Portrait_of_Sultan_Hamengkubowono_VI.jpg", 
      namaAsli: 'Raden Mas Mustojo', 
      gelar: '',
      urutan: "VI", 
      tahunHidup: "10 Agustus 1821 - 20 Juli 1877 (umur 55)", 
      tahunMemerintah: "1855 - 1877"
    }, {
      id: 7, 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Portrait_of_Sultan_Hamengkubowono_VII.jpg/250px-Portrait_of_Sultan_Hamengkubowono_VII.jpg", 
      namaAsli: 'Raden Mas Murtejo', 
      gelar: '"Sultan Ngabehi"',
      urutan: "VII", 
      tahunHidup: "4 Februari 1839 - 30 Desember 1931 (umur 92)", 
      tahunMemerintah: "1877 - 1921"
    }, {
      id: 8, 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Official_portrait_of_Sultan_Sri_Sultan_Hamengkubowono_VIII.jpg/250px-Official_portrait_of_Sultan_Sri_Sultan_Hamengkubowono_VIII.jpg", 
      namaAsli: 'Raden Mas Sujadi', 
      gelar: '"Sultan Budaya"',
      urutan: "VIII", 
      tahunHidup: "3 Maret 1880 - 22 Oktober 1939 (umur 59)", 
      tahunMemerintah: "1921 - 1939"
    }, {
      id: 9, 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Official_portrait_of_Sultan_Sri_Sultan_Hamengkubowono_IX.jpg/250px-Official_portrait_of_Sultan_Sri_Sultan_Hamengkubowono_IX.jpg", 
      namaAsli: 'Raden Mas Dorodjatun', 
      gelar: '',
      urutan: "IX", 
      tahunHidup: "12 Agustus 1912 - 2 Oktober 1988 (umur 76)", 
      tahunMemerintah: "1939 - 1988"
    }, {
      id: 10, 
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Hamengkubuwono_x.jpg/250px-Hamengkubuwono_x.jpg", 
      namaAsli: 'Raden Mas Herjuno Darpito', 
      gelar: '',
      urutan: "X", 
      tahunHidup: "2 April 1946 - ", 
      tahunMemerintah: "1988 - "
    }, 
  ]

  return (
    <>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}>
        <div style={{
          marginLeft: "auto",
          marginRight: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          color: "black"
        }}>
          {sultans.map((sultans) => (
            <div key={sultans.id}
              style={{
                alignItems: "center",
                padding: "15px",
                background: "#ededed",
                borderRadius: "15px",
                textAlign: "center"
              }}>
              
              <h2>Hamengkubuwana {sultans.urutan}</h2>
              {sultans.img && (
                <img 
                  src={sultans.img} 
                  alt={`Hamengkubuwana ${sultans.urutan}`} 
                  style={{ width: "200px", borderRadius: "10px", margin: "10px 0" }}
                />
              )}
              <h3>{sultans.namaAsli}</h3>
              {sultans.gelar && <p><i>{sultans.gelar}</i></p>}
              <p><b>Hidup:</b> {sultans.tahunHidup}</p>
              <div>
                <b>Memerintah:</b>
                {typeof sultans.tahunMemerintah === "string" ? (
                  <p>{sultans.tahunMemerintah}</p>
                ) : (
                  Object.values(sultans.tahunMemerintah).map((periode, idx) => (
                    <p key={idx}>{periode}</p>
                  ))
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
  
}

export default App