document.getElementById('Subscribe').addEventListener('click', function() {
  // Create custom toast content
  const toastContent = document.createElement('div');
  toastContent.className = "flex flex-col items-center justify-center p-6 w-80 rounded-lg shadow-lg bg-white";

  const msg = document.createElement('p');
  msg.textContent = "Thank you for subscribing!";
  msg.className = "text-black text-center text-lg mb-4 font-semibold";
  toastContent.appendChild(msg);

  // Create Toastify instance
  const toast = Toastify({
    node: toastContent,
    duration: 2500,
    gravity: "top", 
    position: "center",
    stopOnFocus: true,
   
    style: {
      top: "50%",
      transform: "translateY(-50%)",
      left: "50%",
      transform: "translate(-50%, -50%)",
      
    },
  });

  // Add OK button
  const okBtn = document.createElement('button');
  okBtn.textContent = "OK";
  okBtn.className = "px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition";
  okBtn.addEventListener('click', () => {
    toast.hideToast(); 
  });
  toastContent.appendChild(okBtn);

  
  toast.showToast();
});
