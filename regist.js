function validateForm() {
    let nik = document.querySelector('.nik').value.trim();
    if (nik === '') {
        alert('NIK harus diisi.');
        return false;
    }

    let firstName = document.querySelector('.nama-depan').value.trim();
    let lastName = document.querySelector('.nama-belakang').value.trim();
    if (firstName === '' || lastName === '') {
        alert('Nama Lengkap harus diisi.');
        return false;
    }

    let genderMale = document.querySelector('.laki-laki').checked;
    let genderFemale = document.querySelector('.perempuan').checked;
    if (!genderMale && !genderFemale) {
        alert('Jenis Kelamin harus dipilih.');
        return false;
    }

    let birthPlace = document.querySelector('.tempat-lahir').value.trim();
    if (birthPlace === '') {
        alert('Tempat Lahir harus diisi.');
        return false;
    }

    let birthDate = document.querySelector('.tanggal-lahir').value;
    let currentDate = new Date();
    let maximumBirthDate = new Date('2006-12-31');
    if (birthDate === '' || new Date(birthDate) > maximumBirthDate || new Date(birthDate) > currentDate) {
        alert('Tanggal Lahir harus diisi dengan format yang benar (minimal tahun 2006).');
        return false;
    }

    let bloodType = document.querySelector('.golongan-darah').value;
    if (bloodType === '' || bloodType.length > 2) {
        alert('Golongan Darah harus dipilih.');
        return false;
    }

    let religion = document.querySelector('.agama').value;
    if (religion === '' || religion.length > 9) {
        alert('Agama harus dipilih.');
        return false;
    }

    let maritalStatus = document.querySelector('.status').value;
    if (maritalStatus === '' || maritalStatus.length > 11) {
        alert('Status Perkawinan harus dipilih.');
        return false;
    }

    let citizenship = document.querySelector('.kewarganegaraan').value;
    if (citizenship === '' || citizenship.length > 3) {
        alert('Kewarganegaraan harus dipilih.');
        return false;
    }

    let occupation = document.querySelector('.pekerjaan').value.trim();
    if (occupation === '') {
        alert('Pekerjaan harus diisi.');
        return false;
    }

    let address = document.querySelector('.alamat').value.trim();
    if (address === '') {
        alert('Alamat harus diisi.');
        return false;
    }

    let rt = document.querySelector('.rt').value.trim();
    if (rt === '') {
        alert('RT harus diisi.');
        return false;
    }

    let rw = document.querySelector('.rw').value.trim();
    if (rw === '') {
        alert('RW harus diisi.');
        return false;
    }

    let kelurahan = document.querySelector('.kelurahan').value.trim();
    if (kelurahan === '') {
        alert('Kelurahan/Desa harus diisi.');
        return false;
    }

    let kecamatan = document.querySelector('.kecamatan').value.trim();
    if (kecamatan === '') {
        alert('Kecamatan harus diisi.');
        return false;
    }

    let kota = document.querySelector('.kota').value.trim();
    if (kota === '') {
        alert('Kota/Kabupaten harus diisi.');
        return false;
    }

    let provinsi = document.querySelector('.provinsi').value.trim();
    if (provinsi === '') {
        alert('Provinsi harus diisi.');
        return false;
    }

    let kkFile = document.querySelector('.kk').files[0];
    if (!validateFile(kkFile, ['image/png', 'image/jpeg'], 10)) {
        alert('Kartu Keluarga harus diunggah dengan format .png atau .jpg dan ukuran maksimal 10MB.');
        return false;
    }

    let fotoFile = document.querySelector('.foto').files[0];
    if (!validateFile(fotoFile, ['image/png', 'image/jpeg'], 10, 0.12)) {
        alert('Foto Diri harus diunggah dengan format .png atau .jpg, ukuran minimal 120KB, dan ukuran maksimal 10MB.');
        return false;
    }

    let suratRtFile = document.querySelector('.surat-rt').files[0];
    if (!validateFile(suratRtFile, ['image/png', 'image/jpeg'], 10)) {
        alert('Surat Pengantar RT harus diunggah dengan format .png atau .jpg dan ukuran maksimal 10MB.');
        return false;
    }

    let suratRwFile = document.querySelector('.surat-rw').files[0];
    if (!validateFile(suratRwFile, ['image/png', 'image/jpeg'], 10)) {
        alert('Surat Pengantar RW harus diunggah dengan format .png atau .jpg dan ukuran maksimal 10MB.');
        return false;
    }

    let suratDomisiliFile = document.querySelector('.surat-domisili').files[0];
    if (!validateFile(suratDomisiliFile, ['image/png', 'image/jpeg'], 10)) {
        alert('Surat Keterangan Domisili harus diunggah dengan format .png atau .jpg dan ukuran maksimal 10MB.');
        return false;
    }

    let ttdFile = document.querySelector('.ttd').files[0];
    if (!validateFile(ttdFile, ['image/png', 'image/jpeg'], 10)) {
        alert('Tanda Tangan harus diunggah dengan format .png atau .jpg dan ukuran maksimal 10MB.');
        return false;
    }

    return true;
}

function validateFile(file, allowedTypes, maxSizeInMB, minSizeInMB) {
    if (!file) {
        return false;
    }
    if (allowedTypes.indexOf(file.type) === -1) {
        return false;
    }
    let maxSize = maxSizeInMB * 1024 * 1024;
    if (file.size > maxSize) {
        return false;
    }
    if (minSizeInMB && file.size < minSizeInMB * 1024 * 1024) {
        return false;
    }
    return true;
}

let submitButton = document.querySelector('.submit');
submitButton.addEventListener('click', function (event) {
    event.preventDefault();
    if (validateForm()) {
        alert('Form berhasil terkirim!');
        location.reload()
    }
});
