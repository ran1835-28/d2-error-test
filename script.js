// SAFARI-COMPATIBLE EXPORT FUNCTIONS
function exportFavoritesCSV() {
    if (favorites.length === 0) return;

    // Add UTF-8 BOM so Excel & Safari render Arabic text properly
    const csvContent = "\uFEFFType,Text,Source,DateSaved\n" + 
        favorites.map(f => `"${f.type}","${f.text.replace(/"/g, '""')}","${f.source}","${f.dateSaved}"`).join("\n");

    // Use octet-stream MIME type to force Safari to treat it as a downloadable file rather than an inline page
    const blob = new Blob([csvContent], { type: 'application/octet-stream;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = "alhikmah_saved_manuscripts.csv";
    link.target = "_blank"; // Prevents Safari from hanging on current page
    
    document.body.appendChild(link);
    link.click();
    
    // Delayed cleanup so Safari finish handoff to Downloads manager
    setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, 1000);
}

function exportFavoritesJSON() {
    if (favorites.length === 0) return;

    const jsonStr = JSON.stringify(favorites, null, 2);
    
    // Use octet-stream MIME type to force Safari to save the file
    const blob = new Blob([jsonStr], { type: 'application/octet-stream;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement("a");
    link.href = url;
    link.download = "alhikmah_saved_manuscripts.json";
    link.target = "_blank"; // Prevents Safari from hanging on current page
    
    document.body.appendChild(link);
    link.click();
    
    // Delayed cleanup for Safari compatibility
    setTimeout(() => {
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }, 1000);
}
