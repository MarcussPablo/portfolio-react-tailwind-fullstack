// utils/pixPayload.js

export function crc16(payload) {
  const polinomio = 0x1021;
  let crc = 0xffff;

  for (let i = 0; i < payload.length; i++) {
    crc ^= payload.charCodeAt(i) << 8;
    for (let j = 0; j < 8; j++) {
      crc = (crc & 0x8000 ? (crc << 1) ^ polinomio : crc << 1) & 0xffff;
    }
  }
  return crc.toString(16).toUpperCase().padStart(4, "0");
}

function formatTLV(id, value) {
  const len = value.length.toString().padStart(2, "0");
  return `${id}${len}${value}`;
}

export function generatePixPayload({ pixKey, merchantName, city, amount }) {
  // Merchant Account Info (ID 26)
  const gui = formatTLV("00", "BR.GOV.BCB.PIX");
  const key = formatTLV("01", pixKey);
  const merchantAccountInfo = formatTLV("26", gui + key);

  // Amount
  const transactionAmount = amount
    ? formatTLV("54", Number(amount).toFixed(2))
    : "";

  // Campos fixos Pix
  const payload =
    formatTLV("00", "01") + // Payload Format Indicator
    formatTLV("52", "0000") + // Merchant Category Code
    formatTLV("53", "986") + // Moeda (BRL)
    transactionAmount +
    formatTLV("58", "BR") + // País
    formatTLV("59", merchantName) + // Nome
    formatTLV("60", city) + // Cidade
    merchantAccountInfo +
    formatTLV("62", formatTLV("05", "***")); // Additional Data Field Template

  // Adiciona CRC16
  const fullPayload = payload + "6304";
  const crc = crc16(fullPayload);

  return fullPayload + crc;
}


//123456