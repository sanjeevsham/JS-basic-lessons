import { myFunction } from "./money.js";
import { getOptions } from "./handlrers.js";
import { currencies } from "./currencies.js";
const primaryCurrency = document.getElementById('primary');
const secondaryCurrency = document.getElementById('secondary');
primaryCurrency.innerHTML = getOptions(currencies);
secondaryCurrency.innerHTML = getOptions(currencies);
document.getElementById('amount').addEventListener('change', myFunction);
