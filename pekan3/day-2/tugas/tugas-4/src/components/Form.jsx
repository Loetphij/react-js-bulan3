import React from "react";
import useForm from "../hooks/useForm";

export default function Form() {
    const { values, handleChange } = useForm({
        name:'',
        email:''
    })

    return(
        <div className="form">
            <h2 style={{ textDecoration: 'none '}}>Form Input</h2>

            <form>
                <div>
                    <label>Nama:  </label>
                    <input 
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        placeholder="Masukkan nama.." />
                </div>

                <div>
                    <label>Email:  </label>
                    <input 
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="Masukkan email.." />
                </div>
            </form>
            <div className="inputted">
                <h3>Data yang telah di input</h3>
                <p><strong>Nama:</strong> {values.name || '-'}</p>
                <p><strong>Email:</strong> {values.email || '-'}</p>
            </div>
        </div>
    )
}