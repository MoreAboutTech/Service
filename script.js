document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const message = this.message.value.trim();
  const formMessage = document.getElementById('formMessage');

  // Validasi sederhana
  if (name.length < 3) {
    formMessage.textContent = 'Nama harus minimal 3 karakter.';
    formMessage.style.color = 'red';
    return;
  }
  if (!/^\d{10,15}$/.test(phone)) {
    formMessage.textContent = 'Nomor telepon harus 10-15 digit angka.';
    formMessage.style.color = 'red';
    return;
  }
  if (message.length < 10) {
    formMessage.textContent = 'Pesan harus minimal 10 karakter.';
    formMessage.style.color = 'red';
    return;
  }


  // Simulasi pengiriman form
  formMessage.textContent = 'Mengirim pesan...';
  formMessage.style.color = '#004aad';

  setTimeout(() => {
    formMessage.textContent = 'Terima kasih, pesan Anda telah kami terima. Teknisi kami akan segera menghubungi Anda.';
    formMessage.style.color = 'green';
    this.reset();
  }, 1500);
});

