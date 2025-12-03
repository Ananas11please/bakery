document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.querySelector('.order-form');
    const phoneInput = document.querySelector('input[type="tel"]');
    const dateInput = document.querySelector('input[type="date"]');
    
    // Валидация формы
    function validateForm(event) {
        const errors = [];
        
        
        // Проверка даты
        if (!dateInput.value) {
            errors.push('• Выберите дату получения заказа');
        } else {
            const selectedDate = new Date(dateInput.value);
            const today = new Date();
            
            if (selectedDate < today) {
                errors.push('• Дата не может быть в прошлом');
            }
        }
        
        // Проверка имени
        const nameInput = document.querySelector('input[type="text"]');
        if (!nameInput.value.trim()) {
            errors.push('• Укажите ваше имя');
        }
        
        // Если есть ошибки, показываем их
        if (errors.length > 0) {
            event.preventDefault();
            alert('Пожалуйста, исправьте ошибки:\n\n' + errors.join('\n'));
            return false;
        }
        
        // Показываем сообщение об успешной отправке
        alert('✅ Ваш заказ принят! Мы свяжемся с вами в течение часа для уточнения деталей.');
        return true;
    }
    
    // Событие отправки формы
    orderForm.addEventListener('submit', validateForm);
});