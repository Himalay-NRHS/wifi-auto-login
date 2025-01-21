// Load saved credentials when popup opens
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await chrome.storage.sync.get(['username', 'password']);
        if (data.username) {
            document.getElementById('username').value = data.username;
        }
        if (data.password) {
            document.getElementById('password').value = data.password;
        }
    } catch (error) {
        console.error('Error loading saved credentials:', error);
    }
});

document.getElementById('setup-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        showStatus('Please enter both username and password', 'error');
        return;
    }

    try {
        await chrome.storage.sync.set({ 
            username,
            password,
            lastLogin: null // Reset last login time when credentials are updated
        });
        
        showStatus('Credentials saved successfully!', 'success');
        setTimeout(() => window.close(), 1500);
    } catch (error) {
        showStatus('Error saving credentials', 'error');
        console.error('Error saving credentials:', error);
    }
});

function showStatus(message, type) {
    const status = document.getElementById('status');
    status.textContent = message;
    status.style.display = 'block';
    status.style.backgroundColor = type === 'success' ? '#dff0d8' : '#f2dede';
    status.style.color = type === 'success' ? '#3c763d' : '#a94442';
}