import { myFunction } from "./money";
import { getOptions } from "./handlrers";
import { currencies } from "./currencies";
const primaryCurrency = document.getElementById('primary');
const secondaryCurrency = document.getElementById('secondary');
primaryCurrency.innerHTML = getOptions(currencies);
secondaryCurrency.innerHTML = getOptions(currencies);
document.getElementById('amount').addEventListener('change', myFunction);
