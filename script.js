document.addEventListener('DOMContentLoaded', () => {
    const talkButton = document.getElementById('talk-btn');
    const TARGET_URL = 'https://opal.google/app/1iyHDgLAi9x3_otpZAP3eJeoJko09NNMx';

    if (talkButton) {
        talkButton.addEventListener('click', () => {
            // Redirect to the specified Finance Advisor URL
            window.location.href = TARGET_URL;
        });
    }
});
