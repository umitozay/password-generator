/**
 * Generates a secure random password.
 * @param {number} length - Length of the password.
 * @return {string} - The generated password.
 */
function generateSecurePassword(length = 12) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    const values = new Uint32Array(length);
    window.crypto.getRandomValues(values);
    
    for (let i = 0; i < length; i++) {
        password += charset[values[i] % charset.length];
    }
    return password;
}

console.log("Secure Password Generated: ", generateSecurePassword(16));
