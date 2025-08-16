// Static list of files inside ./assets (from your tree output)
const files = [
  "academic-allstar.jpg",
  "ai-bootcamp.pdf",
  "android-chrome-192x192.png",
  "android-chrome-256x256.png",
  "apple-touch-icon.png",
  "banner.png",
  "battle-of-the-brains-description.pdf",
  "bootcamp-description.pdf",
  "bootcamp-feedback.pdf",
  "browserconfig.xml",
  "class-certificate.pdf",
  "college-resume.pdf",
  "collin-college.pdf",
  "eshan.ico",
  "eshan.JPG",
  "favicon-16x16.png",
  "favicon-32x32.png",
  "favicon.ico",
  "handlers-certificate.pdf",
  "intern.pdf",
  "mstile-150x150.png",
  "nhs-documentation-3.pdf",
  "njhs-cert.pdf",
  "presidents-award.pdf",
  "resume-full.pdf",
  "resume-old.pdf",
  "safari-pinned-tab.svg",
  "site.webmanifest",
  "spanish-cert.pdf",
  "text-mining.pdf",
  "tutoring-flyer.pdf",
  "tutoring-flyer.png",
  "utd-letter.pdf",
  "vehicle_classification.zip"
];

function renderFiles() {
  const container = document.getElementById("file-list");
  container.innerHTML = files.map(f => {
    const ext = f.split(".").pop().toLowerCase();
    let icon = "📄";
    if (["png","jpg","jpeg","gif","svg","ico"].includes(ext)) icon = "🖼️";
    if (["pdf"].includes(ext)) icon = "📕";
    if (["zip","rar"].includes(ext)) icon = "🗜️";
    if (["xml","webmanifest"].includes(ext)) icon = "📝";

    return `
      <div class="file-card" onclick="window.open('assets/${f}', '_blank')">
        <h3>${icon} ${f}</h3>
        <div class="file-meta">${ext.toUpperCase()} file</div>
      </div>
    `;
  }).join("");
}

renderFiles();
