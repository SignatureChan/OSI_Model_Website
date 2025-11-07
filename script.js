// Simple text you can edit
    const info = {
      "Application": "Handles network services for applications. Example: web browsers, email.",
      "Presentation": "Translates and formats data. Handles encryption/decryption.",
      "Session": "Manages communication sessions between devices.",
      "Transport": "Ensures data is sent correctly using TCP/UDP protocols.",
      "Network": "Routes data packets between devices using IP addresses.",
      "DataLink": "Packages data into frames and detects errors. Uses MAC addresses.",
      "Physical": "Transmits raw bits via cables, Wi-Fi, or other physical media."
    };

    function showInfo(layer) {
      document.getElementById('layerDesc').innerText = info[layer];
    }