const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

/*
1- Tanımlamalarımızı yapıyoruz.

2- Yükleme zamanımızı belirtiyoruz "load = 0" ve 0'dan 100'e gidecek.

3- Fonskiyon oluşturuyoruz ve içerisinde Yükleme aralığımızı arttıyoruz 
"load++"

4- Bu fonksiyonu çalıştıracağımız bir değer belirtiyoruz. "setInterval(blurring, 30)" burada 30 milisaniyeyi temsil etmektedir.

5- Load sonsuza kadar gittiği için 100 e geldiğinde durmak istediğimizden bir karşılaştırma yapıyoruz.

6- "if(load > 99)" bu koşulu karşılıyorsa "clearInterval(int)" ile saydırmayı durduruyoruz.

7- Şimdi Load'ı ".innerText" ile sayfamıza yazdırıyoruz. Dinamik olarak arttığını göreceğiz.

8- Load opaklığını 1'den 0'a düşürmek istiyoruz ancak opaklık 1-0 arasında olduğu için 100-0 arasına dönüştürmemiz gerekmekte.

9- "const scale" ile hazırladığımız fonksiyon ile sayıları Opaklığı 100 ile 0 arasında oluşturabileceğiz.

10- bg'ye de css olarak filter içerisinden blur uyguluyoruz. Bunun aralığınıda 30 ile 0 arasında
Ancak tabiki yazdığımız "scale" fonksiyonu ile 30-0 aralığını 100-0 aralığına dönüştürüyoruz.
*/
