/**
 * Quick tools for this page
 *
 * Woah - after doing react for a while, this feels odd, bad and just messy
 */
$(function() {
  $("#json-pretty-print").on("submit", function(e) {
    e.preventDefault();
    let parsed;

    try {
      parsed = JSON.parse($("textarea", this).val());
    } catch (e) {
      errorModal("Invalid JSON", "Can not prettify invalid JSON.");
      return false;
    }

    $("#json-pretty-print-results").text(JSON.stringify(parsed, null, "\t"));
  });
});

function errorModal(header, content) {
  $("#error-header").text(header);
  $("#error-content").text(content);
  $("#error-modal").modal("show");
}
