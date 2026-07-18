const SHEET_NAME = "Commandes";
const HEADERS = [
  "Date",
  "Référence",
  "Produit",
  "Prix unitaire (DH)",
  "Quantité",
  "Total (DH)",
  "Nom",
  "Téléphone",
  "Ville et adresse",
  "Source",
  "Landing page",
  "Statut",
];

function doPost(event) {
  const lock = LockService.getScriptLock();

  try {
    const payload = JSON.parse(event.postData.contents || "{}");
    const properties = PropertiesService.getScriptProperties();

    if (!payload.secret || payload.secret !== properties.getProperty("WEBHOOK_SECRET")) {
      return jsonResponse({ ok: false, error: "Accès refusé" });
    }

    lock.waitLock(10000);
    const spreadsheet = SpreadsheetApp.openById(properties.getProperty("SPREADSHEET_ID"));
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
    }

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
      sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold").setBackground("#203f34").setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }

    sheet.appendRow([
      new Date(payload.createdAt || Date.now()),
      safeCell(payload.reference),
      safeCell(payload.product),
      Number(payload.price),
      Number(payload.quantity),
      Number(payload.total),
      safeCell(payload.customerName),
      safeCell(payload.phone),
      safeCell(payload.address),
      safeCell(payload.source),
      safeCell(payload.page),
      safeCell(payload.status || "Nouvelle"),
    ]);

    return jsonResponse({ ok: true, reference: payload.reference });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error && error.message ? error.message : error) });
  } finally {
    if (lock.hasLock()) lock.releaseLock();
  }
}

function safeCell(value) {
  const output = String(value == null ? "" : value);
  return /^[=+\-@]/.test(output) ? "'" + output : output;
}

function jsonResponse(value) {
  return ContentService.createTextOutput(JSON.stringify(value)).setMimeType(ContentService.MimeType.JSON);
}
