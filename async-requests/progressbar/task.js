const buttonSend = document.getElementById('send');
const fileInput = document.getElementById('file');
const progress = document.getElementById( 'progress' );

function sendRequest() {
 
  let fileToUpload = fileInput.files[0];
  let formData = new FormData();    
  let xhr = new XMLHttpRequest();

  formData.append('file1', fileToUpload);

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
  xhr.upload.addEventListener('progress', loadProgress);
  xhr.addEventListener('load', finishLoading); 
  xhr.send(formData);
}

buttonSend.addEventListener('click', sendRequest);

function loadProgress(e) {
  let total = e.total;
  let loaded = e.loaded;
  let partLoaded = (loaded / total).toFixed(2);

  progress.value = +partLoaded;
}

function finishLoading() {
  if (this.status < 400) {
    console.log('Файл успешно загружен');
    progress.value = '0.0';
  }
  console.log(`Ошибка: ${this.status} ${this.statusText}`);
}