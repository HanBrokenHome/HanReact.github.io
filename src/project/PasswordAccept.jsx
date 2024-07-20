import React, { useState } from 'react';
import Button from '../components/button';
import Input, { Label } from '../components/input';

const PasswordAcc = () => {
    // Set Password
    const [inp, setInp] = useState('');
    const handleInpChange = (e) => {
        setInp(e.target.value);
    };

    // Confirm Password
    const [confirm, setConfirm] = useState('');
    const handleConfirmChange = (e) => {
        setConfirm(e.target.value);
    };

    // State Penyimpanan Teks
    const [error, setError] = useState('');

    // Fungsi Perkondisian
    const handleSubmit = (event) => {
        event.preventDefault(); // Mencegah form dari pengiriman default

        if (confirm !== inp) {
            setError('Masukkan password yang sama');
        } else {
            setError('');
            // Tambahkan logika pengiriman form atau tindakan lainnya di sini
            alert('Password cocok! Form dikirim.');
        }
    };

    return (
        <div className="w-[200px] border h-[80vh] shadow-xl rounded p-4">
            <h1 className="text-2xl font-sans font-bold text-center">Password Acc</h1>
            <form onSubmit={handleSubmit}>
                <Label NamaLabel="Password" />
                <Input type="password" onChange={handleInpChange} value={inp} />
                <Label NamaLabel="Konfirmasi Password" />
                <Input type="password" onChange={handleConfirmChange} value={confirm} />
                <Button Title="Confirm" type="submit" />
                {error && <p className="text-red-600 font-bold mt-2">"Sigma"</p>}
            </form>
        </div>
    );
};

export default PasswordAcc;
