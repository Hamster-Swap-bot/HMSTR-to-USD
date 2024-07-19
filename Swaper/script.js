document.getElementById('convert').addEventListener('click', function() {
    const inrAmount = document.getElementById('inr').value;
    if (!inrAmount || inrAmount <= 0) {
        document.getElementById('result').innerText = "Please enter a valid amount.";
        return;
    }

    const conversionRate = 60 / 1080800; // 1,000,000 INR = 60 USD
    const usdAmount = (inrAmount * conversionRate).toFixed(2);
    document.getElementById('result').innerText = `${inrAmount} INR = ${usdAmount} USD`;
});
