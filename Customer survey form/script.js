document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
    const submitButton = document.getElementById('submit');
    const resetButton = document.getElementById('reset');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        if (form.checkValidity()) {
            const formData = new FormData(form);
            const popupContent = Array.from(formData.entries())
                .map(([key, value]) => `<b>${key}:</b> ${value}`)
                .join('<br>');

            const popup = window.open('', 'Form Data', 'width=400,height=300');
            popup.document.write(popupContent);
            form.reset();
        }
    });

    resetButton.addEventListener('click', function() {
        form.reset();
    });
});