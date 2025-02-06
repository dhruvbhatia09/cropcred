function openBlog(url) {
    window.location.href = url;
}

// loan webpage
function toggleContent(header) {
    const content = header.nextElementSibling;
    const plus = header.querySelector('.plus');

    // Toggle the display of the content
    if (content.style.display === "block") {
        content.style.display = "none";
        plus.textContent = "+";
    } else {
        content.style.display = "block";
        plus.textContent = "-";
    }
}
// loan webpage

//emi calculator
document.getElementById('calculateBtn').addEventListener('click', function () {
    const principal = parseFloat(document.getElementById('principal').value);
    const annualRate = parseFloat(document.getElementById('rate').value);
    const tenure = parseInt(document.getElementById('tenure').value);

    if (!principal || !annualRate || !tenure || principal <= 0 || annualRate <= 0 || tenure <= 0) {
        alert('Please enter valid values for all fields.');
        return;
    }

    const monthlyRate = annualRate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
                (Math.pow(1 + monthlyRate, tenure) - 1);
    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;

    document.getElementById('monthlyEmi').innerText = emi.toFixed(2);
    document.getElementById('principalAmount').innerText = principal.toFixed(2);
    document.getElementById('totalInterest').innerText = totalInterest.toFixed(2);
    document.getElementById('totalAmount').innerText = totalAmount.toFixed(2);

    document.getElementById('results').style.display = 'block';
});
//emi calculator