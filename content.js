chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === "clicked_browser_action")  {
        var firstLink = $("a[href^='http']").eq(0).attr("href");

        console.log(firstLink)

        chrome.runtime.sendMessage({"message": "open_new_tab", "url": firstLink});
      }
    }
);