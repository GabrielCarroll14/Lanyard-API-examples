// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", async () => {
                            
    // Fetch the API data
    const response = await fetch("https://api.lanyard.rest/v1/users/"); // Add your user id after the 'users/'
    const json = await response.json();
    const data = json.data;

    // Get the element that the status will be put in
    const discordNameElement = document.getElementById('discordName');
    const box = document.getElementById('status');

    // Add conditional statments so when in dnd it comes accross as 'user is in dnd' instead on 'user is dnd'
    if (data.discord_status == 'dnd') {
        discordNameElement.textContent = data.discord_user.display_name + " is in do-not-disturb";
    }

    // If its not in dnd mode just do the usual thing
    else {
        discordNameElement.textContent = data.discord_user.display_name + " is " + data.discord_status;
    }
});