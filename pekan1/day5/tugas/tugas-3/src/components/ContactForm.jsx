import { useState } from 'react'
import styles from './ContactForm.module.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Terima kasih telah mengisi, ${formData.firstName || "Teman"}!`)
  }

  return (
    <div className={styles.page}>
      <div className={styles.card}>
        <h2 className={styles.title}>Formulir Kontak</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Nama Depan:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Masukkan nama depan..."
            />
          </div>

          <div className={styles.formGroup}>
            <label>Nama Belakang:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Masukkan nama belakang..."
            />
          </div>

          <div className={styles.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="contoh@email.com"
            />
          </div>

          <button type="submit" className={styles.button}>Submit</button>
        </form>

        <p className={styles.currentData}>
          Current data: {JSON.stringify(formData)}
        </p>
      </div>
    </div>
  )
}

export default ContactForm
