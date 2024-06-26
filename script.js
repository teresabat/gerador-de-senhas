document.addEventListener('DOMContentLoaded' , () => {
    const passwordDisplay = document.getElementById('password-display');
    const generateButton = document.getElementById('generate-button');

    generateButton.addEventListener('click' , () => {
        const password = generatePassword(12);
        passwordDisplay.value = password;
    });

    function generatePassword(lenght){
        const charset ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
        let password ='';
        for (let i = 0; i < lenght; i++){
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }
});