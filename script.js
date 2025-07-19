// وقتی روی دکمه انتخاب پلن کلیک شد، فرم ثبت سفارش نمایش داده شود و پلن انتخابی را نشان دهد
document.querySelectorAll('.plan button').forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.getAttribute('data-plan');
    const price = button.getAttribute('data-price');
    document.getElementById('planSelected').value = `${plan} - ${price} تومان`;
    document.getElementById('orderSection').style.display = 'block';
    window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'});
  });
});

// وقتی فرم ارسال شد، پرداخت فیک انجام و به صفحه تشکر منتقل شود
document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = this.name.value.trim();
  const phone = this.phone.value.trim();
  const plan = this.planSelected.value.trim();

  if(!name || !phone || !plan) {
    alert('لطفاً همه فیلدها را پر کنید.');
    return;
  }

  // شبیه‌سازی پرداخت موفق
  alert('پرداخت شما با موفقیت انجام شد!');

  // ذخیره داده‌ها در localStorage برای نمایش در صفحه تشکر (اختیاری)
  localStorage.setItem('orderName', name);
  localStorage.setItem('orderPhone', phone);
  localStorage.setItem('orderPlan', plan);

  // انتقال به صفحه تشکر
  window.location.href = 'thanks.html';
});
