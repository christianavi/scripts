function ext() {

    var ads = [
        ".searchCenterTopAds", ".searchRightBottomAds", ".searchCenterBottomAds",
        "#taw", "#bottomads",
        ".b_ad", ".b_adBottom"
    ]

    console.log("[Vanilla] Attempting to remove ads from " + window.location.host) 
    for (let i = 0; i < ads.length; i++) {
        if (ads[i]) {
            try {
                document.querySelector(ads[i]).style.display = "none"
                console.log("[Vanilla] " + ads[i] + " is cleared.")
            } catch (error) {
                console.error(error);
            }
        }       
    }
    console.log("[Vanilla] Success.")
}

export { ext };
