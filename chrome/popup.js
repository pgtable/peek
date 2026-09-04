const RULESET_ID = "ruleset_1";

const power = document.getElementById("power");
const state = document.getElementById("state");

function render(enabled) {
  power.classList.toggle("on", enabled);
  power.setAttribute("aria-pressed", String(enabled));
  state.textContent = enabled ? "views not counted" : "off, visits are counted";
  state.classList.toggle("on", enabled);
}

function isEnabled(callback) {
  chrome.declarativeNetRequest.getEnabledRulesets((ids) => {
    callback(ids.includes(RULESET_ID));
  });
}

isEnabled(render);

power.addEventListener("click", () => {
  isEnabled((enabled) => {
    const details = enabled
      ? { disableRulesetIds: [RULESET_ID] }
      : { enableRulesetIds: [RULESET_ID] };
    chrome.declarativeNetRequest.updateEnabledRulesets(details, () => render(!enabled));
  });
});
