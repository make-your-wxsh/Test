// scripts/script.js

// 모든 네비게이션 링크 선택
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // 기본 링크 동작 방지
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // 부드러운 스크롤링
        });
    });
});
