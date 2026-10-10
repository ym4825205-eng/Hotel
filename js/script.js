document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = window.location.href;
    const navLinks = document.querySelectorAll('nav a, header a');
   
    navLinks.forEach(link => {
        if (link.href === currentLocation) {
            link.style.color = "#c5a059";
     link.style.fontWeight = "bold";
            link.style.borderBottom = "2px solid #c5a059";
        }
    }) 
    const scrollTopBtn = document.createElement("button");
    scrollTopBtn.innerHTML = "↑";
    scrollTopBtn.id = "scrollTopBtn";
    document.body.appendChild(scrollTopBtn);
  Object.assign(scrollTopBtn.style, {
        position: "fixed",
        bottom: "25px",
        left: "25px",
        display: "none",
        zIndex: "9999",
        width: "45px",
        height: "45px",
        borderRadius: "50%",
        backgroundColor: "#c5a059",  
        color: "#ffffff",
        border: "none",
        fontSize: "20px",
        cursor: "pointer",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        transition: "background-color 0.3s ease"
    });

    window.addEventListener("scroll", function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });
    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // --- 3. التعامل مع النماذج (الحجز وتواصل معنا) ---
    const forms = document.querySelectorAll("form");
    forms.forEach(form => {
        form.addEventListener("submit", function(e) {
            e.preventDefault(); // منع إعادة تحميل الصفحة التقليدي
            alert("شكراً لاختياركم فندقنا! تم إرسال طلبكم بنجاح وسنتواصل معكم قريباً.");
            form.reset(); // تفريغ حقول النموذج بعد الإرسال
        });
    });

});
