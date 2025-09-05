// mal 8 eylül ve mal yusuf tekin
const startDate = new Date("June 20, 2025, 16:00:00").getTime();
const targetDate = new Date("September 8, 2025 09:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  //kafam çok karıştı
  const total = targetDate - startDate;
  const passed = now - startDate;
  const remaining = targetDate - now;

  //EN BÜYÜK BEŞİKTAŞ
  let progress = (passed/total) * 100;
  if (progress < 0) progress = 0;
  if (progress > 100) progress = 100;


  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "HAYIIIIIIIR";
    clearInterval(timer);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  //aptal çubuk için:
  const bar = document.getElementById("progress-bar");
  bar.style.width = progress + "%";
  bar.innerText = Math.floor(progress) + "%";
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

const images = [
  "https://as1.ftcdn.net/jpg/01/24/52/72/1000_F_124527256_XeXO1Q7xiE39ZcnuCOHTCotlj7p1FYwc.jpg",
  "https://www.shutterstock.com/image-illustration/sad-3d-man-sitting-on-600nw-93355207.jpg",
  "https://i.pinimg.com/1200x/25/04/01/2504015269ebff579cb76da2a1505fa2.jpg",
  "https://i.pinimg.com/736x/5b/50/f9/5b50f9d4df75160d2e0a43e3d9bc1aeb.jpg",
  "https://i.pinimg.com/736x/b0/2c/08/b02c08c1f26ee57a0802b1c6322dc5bf.jpg"
];


    function spawnImage() {
      // ELEMAN
      const img = document.createElement("img");
      img.src = images[Math.floor(Math.random() * images.length)];
      img.classList.add("random-img");

      // random
      const maxX = window.innerWidth - 185; // ======RESİM GENİŞLİĞİYLE EŞİT OLMALI!!!!1
      const maxY = window.innerHeight - 185;
      img.style.left = Math.random() * maxX + "px";
      img.style.top = Math.random() * maxY + "px";

      document.body.appendChild(img);

      // KAYBOL
      setTimeout(() => {
        img.style.opacity = "0";
        setTimeout(() => img.remove(), 500);
      }, 2700);
    }

    // 10 SANİYEDE BİR DİYORUM!!1!11
    setInterval(spawnImage, 4500);