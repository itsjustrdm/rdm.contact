async function updateAvatar() {
    try {
        const response = await fetch('avatars.json');
        const avatars = await response.json();
        
        // Log available avatars
        console.log('Available avatars:', avatars);
        
        // Select random avatar from the list
        const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)];
        console.log('Selected avatar:', randomAvatar);
        
        // Update the avatar image
        const avatarImg = document.getElementById('avatar-image');
        if (avatarImg) {
            avatarImg.src = `images/avatars/${randomAvatar}`;
            avatarImg.srcset = `images/avatars/${randomAvatar} 2x`;
            console.log('Avatar updated successfully');
        } else {
            console.error('Avatar image element not found');
        }
        
    } catch (error) {
        console.error('Error loading avatar:', error);
    }
}

// Update on page load
document.addEventListener('DOMContentLoaded', updateAvatar);

// Optional: Update every 30 seconds
// Uncomment the next line if you want the avatar to change periodically
// setInterval(updateAvatar, 30000);