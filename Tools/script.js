// --- 🧮 AGE CALCULATOR ---
function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const resultElement = document.getElementById('ageResult');
    if (!dobInput) { resultElement.innerHTML = "Please select a date."; return; }
    const birthDate = new Date(dobInput);
    const today = new Date();
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();
    if (days < 0) { months--; days += new Date(today.getFullYear(), today.getMonth(), 0).getDate(); }
    if (months < 0) { years--; months += 12; }
    resultElement.innerHTML = `You are: ${years} years, ${months} months, and ${days} days old.`;
}

// --- 📝 WORD & CHARACTER COUNTER ---
function updateCounts() {
    const text = document.getElementById('textInput').value;
    document.getElementById('charCount').textContent = text.length;
    const trimmedText = text.trim();
    if (trimmedText === '') { document.getElementById('wordCount').textContent = 0; return; }
    document.getElementById('wordCount').textContent = trimmedText.split(/\s+/).length;
}

// --- 🎨 QR CODE GENERATOR ---
var qrcode = null;
function generateQRCode() {
    const text = document.getElementById('qrInput').value;
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = "";
    if (text.trim() === '') { qrcodeContainer.innerHTML = "Please enter text or a URL."; return; }
    qrcode = new QRCode(qrcodeContainer, { text: text, width: 128, height: 128 });
}

// --- 📝 CASE CONVERTER ---
function convertCase(caseType) {
    const inputElement = document.getElementById('caseInput');
    let text = inputElement.value;
    let newText = '';
    switch (caseType) {
        case 'upper': newText = text.toUpperCase(); break;
        case 'lower': newText = text.toLowerCase(); break;
        case 'sentence': newText = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, c => c.toUpperCase()); break;
        case 'title': newText = text.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '); break;
    }
    inputElement.value = newText;
}

// --- 🔧 JSON VALIDATOR & FORMATTER ---
function formatJSON() {
    const input = document.getElementById('jsonInput');
    const result = document.getElementById('jsonResult');
    result.classList.remove('json-success', 'json-error');
    if (input.value.trim() === '') { result.textContent = 'Please enter JSON data.'; result.classList.add('json-error'); return; }
    try {
        const jsonObj = JSON.parse(input.value);
        input.value = JSON.stringify(jsonObj, null, 4);
        result.textContent = '✅ Valid JSON! Formatted successfully.';
        result.classList.add('json-success');
    } catch (error) {
        result.textContent = `❌ Invalid JSON: ${error.message}`;
        result.classList.add('json-error');
    }
}
function clearJSON() {
    document.getElementById('jsonInput').value = '';
    const result = document.getElementById('jsonResult');
    result.textContent = 'Ready to validate...';
    result.classList.remove('json-success', 'json-error');
}

// --- 💰 LOAN / EMI CALCULATOR ---
function calculateEMI() {
    const principal = parseFloat(document.getElementById('loanAmount').value);
    const annualRate = parseFloat(document.getElementById('interestRate').value);
    const years = parseFloat(document.getElementById('loanTenure').value);
    const resultsDiv = document.getElementById('emiResults');
    if (isNaN(principal) || isNaN(annualRate) || isNaN(years) || principal <= 0 || annualRate <= 0 || years <= 0) {
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = `<p style="color: red;">Please enter valid positive numbers.</p>`;
        return;
    }
    const monthlyRate = annualRate / 12 / 100;
    const numberOfMonths = years * 12;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) / (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
    const totalPayment = emi * numberOfMonths;
    const totalInterest = totalPayment - principal;
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = `<div class="emi-results-display"><p>Monthly EMI: <strong>৳ ${emi.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</strong></p><hr><p>Total Interest: <span>৳ ${totalInterest.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></p><p>Total Payment: <span>৳ ${totalPayment.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></p></div>`;
}

// --- 🖼️ YOUTUBE THUMBNAIL DOWNLOADER ---
function getThumbnails() {
    const url = document.getElementById('youtubeUrl').value;
    const resultsDiv = document.getElementById('thumbnailResults');
    const videoId = extractVideoID(url);
    if (!videoId) { resultsDiv.style.display = 'block'; resultsDiv.innerHTML = `<p style="color: red; padding: 10px;">Invalid YouTube URL.</p>`; return; }
    const resolutions = { 'Max': 'maxresdefault.jpg', 'SD': 'sddefault.jpg', 'HQ': 'hqdefault.jpg', 'MQ': 'mqdefault.jpg' };
    let html = '<div class="thumbnail-grid">';
    for (const [quality, file] of Object.entries(resolutions)) {
        const thumbUrl = `https://img.youtube.com/vi/${videoId}/${file}`;
        html += `<div class="thumbnail-item"><p><strong>${quality}</strong></p><a href="${thumbUrl}" target="_blank"><img src="${thumbUrl}" alt="${quality} thumbnail"></a><a href="${thumbUrl}" class="btn btn-success btn-sm" target="_blank" download>Download</a></div>`;
    }
    html += '</div>';
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = html;
}
function extractVideoID(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^"&?\/ ]{11})/;
    return url.match(regex) ? url.match(regex)[1] : null;
}

// --- ⌨️ TYPING SPEED TEST ---
const textToTypeElement = document.getElementById('textToType');
const restartBtn = document.getElementById('restartBtn');
const timerElement = document.getElementById('timer');
const wpmElement = document.getElementById('wpm');
const accuracyElement = document.getElementById('accuracy');
const paragraphs = [ "The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet. Learning to type is a valuable skill in today's digital world.", "Never underestimate the power of a good book. Reading can transport you to different worlds and introduce you to fascinating characters. It is a journey of the mind.", "Technology has revolutionized the way we live and work. From smartphones to artificial intelligence, innovation continues to shape our future and create new possibilities.", "The sun always shines brightest after the rain. This simple phrase reminds us that challenges are often followed by opportunities for growth and renewal. Stay positive." ];
let timer; let timeLeft = 60; let currentIndex = 0; let errors = 0; let totalTyped = 0; let isTestActive = false;

function initializeTest() {
    clearInterval(timer); isTestActive = false; timeLeft = 60; currentIndex = 0; errors = 0; totalTyped = 0;
    const randomParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    textToTypeElement.innerHTML = '';
    randomParagraph.split('').forEach(char => { const charSpan = document.createElement('span'); charSpan.innerText = char; textToTypeElement.appendChild(charSpan); });
    if(textToTypeElement.children.length > 0) {
        textToTypeElement.children[0].classList.add('current');
    }
    timerElement.innerHTML = `<strong>Time:</strong> ${timeLeft}s`;
    wpmElement.innerHTML = '<strong>WPM:</strong> 0';
    accuracyElement.innerHTML = '<strong>Accuracy:</strong> 100%';
    restartBtn.innerText = 'Start Test';
    document.removeEventListener('keydown', handleKeyPress); // Remove old listener before adding new
    document.addEventListener('keydown', handleKeyPress);
}
function handleKeyPress(event) {
    if (!textToTypeElement || !isTestActive && event.key.length !== 1) return; // Don't start on Shift, etc.
    if (!isTestActive) { isTestActive = true; restartBtn.innerText = 'Restart Test'; startTimer(); }
    const charSpans = textToTypeElement.children;
    if (currentIndex >= charSpans.length) return;
    const typedChar = event.key;
    if (typedChar.length > 1) return; // Ignore control keys
    
    totalTyped++;
    const expectedChar = charSpans[currentIndex].innerText;
    if (typedChar === expectedChar) { charSpans[currentIndex].classList.add('correct'); } else { charSpans[currentIndex].classList.add('incorrect'); errors++; }
    charSpans[currentIndex].classList.remove('current');
    currentIndex++;
    if (currentIndex === charSpans.length) { endTest(); return; }
    charSpans[currentIndex].classList.add('current');
    const accuracy = totalTyped > 0 ? Math.round(((totalTyped - errors) / totalTyped) * 100) : 100;
    accuracyElement.innerHTML = `<strong>Accuracy:</strong> ${accuracy}%`;
}
function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerHTML = `<strong>Time:</strong> ${timeLeft}s`;
        const timeElapsedMinutes = (60 - timeLeft) / 60;
        const correctChars = totalTyped - errors;
        const wpm = timeElapsedMinutes > 0 ? Math.round((correctChars / 5) / timeElapsedMinutes) : 0;
        wpmElement.innerHTML = `<strong>WPM:</strong> ${wpm}`;
        if (timeLeft <= 0) { endTest(); }
    }, 1000);
}
function endTest() {
    clearInterval(timer);
    isTestActive = false;
    document.removeEventListener('keydown', handleKeyPress);
    restartBtn.innerText = 'Try Again';
}
restartBtn.addEventListener('click', initializeTest);
document.addEventListener('DOMContentLoaded', function() {
    if(textToTypeElement) { // Make sure the element exists before initializing
        initializeTest();
    }
});
