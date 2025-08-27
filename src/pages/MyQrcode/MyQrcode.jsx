import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { generatePixPayload } from "../../Utils/pixPayload";
import { Helmet } from "react-helmet";


const ddds = {
  AC: "68",
  AL: "82",
  AM: "92",
  AP: "96",
  BA: "71",
  BA2: "73",
  BA3: "74",
  BA4: "75",
  BA5: "77",
  CE: "85",
  CE2: "88",
  DF: "61",
  ES: "27",
  ES2: "28",
  GO: "62",
  GO2: "64",
  MA: "98",
  MA2: "99",
  MG: "31",
  MG2: "32",
  MG3: "33",
  MG4: "34",
  MG5: "35",
  MG6: "37",
  MG7: "38",
  MS: "67",
  MT: "65",
  MT2: "66",
  PA: "91",
  PA2: "93",
  PA3: "94",
  PB: "83",
  PE: "81",
  PE2: "87",
  PI: "86",
  PI2: "89",
  PR: "41",
  PR2: "42",
  PR3: "43",
  PR4: "44",
  PR5: "45",
  PR6: "46",
  RJ: "21",
  RJ2: "22",
  RJ3: "24",
  RN: "84",
  RO: "69",
  RR: "95",
  RS: "51",
  RS2: "53",
  RS3: "54",
  RS4: "55",
  SC: "47",
  SC2: "48",
  SC3: "49",
  SE: "79",
  SP: "11",
  SP2: "12",
  SP3: "13",
  SP4: "14",
  SP5: "15",
  SP6: "16",
  SP7: "17",
  SP8: "18",
  SP9: "19",
  TO: "63"
};

// const ddds = {
//   AC: "68", AL: "82", AM: "92", ... // completar conforme necessário
// };

const isValidCPF = (str) => /^\d{11}$/.test(str);
const isValidCNPJ = (str) => /^\d{14}$/.test(str);
const isValidPhone = (str) => /^\d{8,9}$/.test(str); // número sem DDD
const isValidRandom = (str) => /^[a-zA-Z0-9-]{32,36}$/.test(str); // UUID

function formatDisplayKey(type, value, state) {
  if (!value) return "";

  if (type === "cpf") return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  if (type === "cnpj") return value.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
  if (type === "telefone" && state) {
    // const ddd = ddds[state];
    const ddd = "XX"; // placeholder
    return value.replace(/(\d{5})(\d{4})/, (_, p1, p2) => `+55 (${ddd}) ${p1}-${p2}`);
  }
  return value; // chave aleatória ou não formatada
}

export default function MyQrcode() {
  const [pixType, setPixType] = useState("");
  const [pixKey, setPixKey] = useState("");
  const [state, setState] = useState("");
  const [amount, setAmount] = useState("");
  const [showQr, setShowQr] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = (e) => {
    e.preventDefault();
    setError("");

    let finalPixKey = "";

    if (pixType === "telefone") {
      if (!state) return setError("Selecione o estado.");
      if (!isValidPhone(pixKey)) return setError("Número inválido. Use 8 ou 9 dígitos.");
      finalPixKey = `+55${/*ddds[state]*/"XX"}${pixKey}`;
    } else if (pixType === "cpf") {
      if (!isValidCPF(pixKey)) return setError("CPF inválido.");
      finalPixKey = pixKey;
    } else if (pixType === "cnpj") {
      if (!isValidCNPJ(pixKey)) return setError("CNPJ inválido.");
      finalPixKey = pixKey;
    } else if (pixType === "aleatoria") {
      if (!isValidRandom(pixKey)) return setError("Chave aleatória inválida.");
      finalPixKey = pixKey;
    } else {
      return setError("Selecione o tipo de chave Pix.");
    }

    setPixKey(finalPixKey);
    setShowQr(true);
  };

  const payload = generatePixPayload({
    pixKey,
    merchantName: "Marcus Lins",
    city: "Sao Paulo",
    amount: amount || null,
  });

  const displayKey = formatDisplayKey(pixType, pixKey, state);

  return (
    <>
      <Helmet>
        <title>Gerador de QR Code Pix Gratuito | Marcus Lins</title>
        <meta
          name="description"
          content="Gere QR Codes Pix gratuitamente para CPF, CNPJ, telefone ou chave aleatória. Ferramenta rápida, segura e online para pagamentos e recebimentos."
        />
        <meta property="og:title" content="Gerador de QR Code Pix Gratuito" />
        <meta
          property="og:description"
          content="Crie QR Codes Pix grátis em segundos. Compatível com todos os bancos do Brasil. Gerador de QR Code Pix gratuito e confiável."
        />
        <meta property="og:url" content="https://marcuslins.com.br/qrcode" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-start p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-6">Gerador de QR Code Pix Gratuito</h1>

        <form onSubmit={handleGenerate} className="flex flex-col gap-4 mb-6 w-full max-w-md">
          {/* Tipo de chave */}
          <select
            value={pixType}
            onChange={(e) => { setPixType(e.target.value); setPixKey(""); setState(""); setShowQr(false); }}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Selecione o tipo de chave</option>
            <option value="cpf">CPF</option>
            <option value="cnpj">CNPJ</option>
            <option value="telefone">Telefone</option>
            <option value="aleatoria">Chave Aleatória</option>
          </select>

          {/* Estado para telefone */}
          {pixType === "telefone" && (
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Selecione o estado</option>
              {/* Object.entries(ddds).map(([uf, ddd]) => (<option key={uf} value={uf}>{uf} ({ddd})</option>)) */}
              <option value="SP">SP (11)</option>
            </select>
          )}

          {/* Input para chave */}
          <input
            type="text"
            placeholder={pixType === "telefone" ? "Digite o número (sem DDD)" : "Digite a chave Pix"}
            value={pixKey}
            onChange={(e) => setPixKey(e.target.value.replace(/\s+/g, ""))}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Valor */}
          <input
            type="number"
            placeholder="Valor (opcional)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p>*Deixar o valor vazio caso queira que o valor inicial seja R$: 0,00</p>

          {/* Preview da chave formatada */}
          {displayKey && (
            <div className="px-4 py-2 bg-gray-100 border rounded-md text-gray-700 text-center">
              <strong>Chave formatada:</strong> {displayKey}
            </div>
          )}

          {/* Botão */}
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Gerar QR
          </button>
        </form>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        {showQr && (
          <div className="flex flex-col items-center gap-4">
            <QRCodeCanvas
              value={payload}
              size={200}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />

            <div className="flex gap-4 mt-4">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
              >
                Imprimir
              </button>

              <button
                onClick={() => {
                  const canvas = document.querySelector("canvas");
                  const link = document.createElement("a");
                  link.download = "qrcode-pix.png";
                  link.href = canvas.toDataURL();
                  link.click();
                }}
                className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition"
              >
                Baixar PNG
              </button>
            </div>
          </div>
        )}

        {/* Conteúdo explicativo SEO */}
        <div className="max-w-3xl mx-auto p-4 mt-6">
          <h2>Como usar o gerador de QR Code Pix</h2>
          <p>
            Utilize nosso <strong>gerador de QR Code Pix gratuito</strong> para criar códigos de pagamento ou recebimento em segundos. Suporte a CPF, CNPJ, número de telefone e chave aleatória.
          </p>
          <h2>Passo a passo</h2>
          <ol className="list-decimal list-inside">
            <li>Selecione o tipo de chave Pix (CPF, CNPJ, telefone ou aleatória).</li>
            <li>Preencha o número ou chave correspondente.</li>
            <li>Para telefone, selecione o estado para formatar corretamente o DDD.</li>
            <li>Adicione um valor (opcional) ou deixe vazio.</li>
            <li>Clique em <strong>"Gerar QR"</strong> e visualize o código.</li>
            <li>Você pode baixar o QR Code como PNG ou imprimir diretamente.</li>
          </ol>

          <h2>Vantagens do gerador de QR Code Pix gratuito</h2>
          <ul className="list-disc list-inside">
            <li>Rápido e fácil de usar</li>
            <li>Compatível com todos os bancos do Brasil</li>
            <li>Suporte a todos os tipos de chave Pix</li>
            <li>Sem custo e totalmente online</li>
            <li>Visualização da chave formatada para maior segurança</li>
          </ul>

          <h2>Dicas importantes</h2>
          <p>
            - Sempre confira se o QR Code gerado corresponde à chave correta.<br/>
            - Para telefone, utilize o DDD do estado correto (+55).<br/>
            - Este gerador é seguro e não armazena suas chaves.
          </p>
        </div>
      </div>
    </>
  );
}













