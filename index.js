const url = "/DANIEL MULENDA - RESUME 2026.pdf"; // Path to your PDF
pdfjsLib.getDocument(url).promise.then(pdf => {
  pdf.getPage(1).then(page => {
    const canvas = document.getElementById("pdf-canvas");
    const context = canvas.getContext("2d");
    const scale = window.innerWidth < 600 ? 0.8 : 1.5;
    const viewport = page.getViewport({ scale: scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    page.render({ canvasContext: context, viewport: viewport });
  });
});