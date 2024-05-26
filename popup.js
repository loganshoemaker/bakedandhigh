document.getElementById('send').addEventListener('click', async () => {
  console.log('in event listener');

  // sends message to be caught in service worker
  chrome.runtime.sendMessage({message: "messageSent"}, function (response) {
    console.log(response);
  });
});
