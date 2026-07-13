async function convert() {
  const amount = parseFloat(document.getElementById("audInput").value);
  const currency = document.getElementById("currencySelect").value;
  const resultDiv = document.getElementById("result");

  if (!amount || !currency) {
    resultDiv.textContent = "";
    return;
  }

  try {
    const res = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/aud.json");
    const data = await res.json();

    const rate = data.aud[currency.toLowerCase()];
    const converted = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} AUD ≈ ${converted} ${currency}`;
  } catch {
    resultDiv.textContent = "Conversion unavailable.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("audInput").addEventListener("input", convert);
  document.getElementById("currencySelect").addEventListener("change", convert);
});
