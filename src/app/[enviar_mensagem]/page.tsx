export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          Obrigado pelo contato!
        </h1>
        <p className="text-xl mb-6 text-gray-600">
          Recebemos sua mensagem e entraremos em contato em breve.
        </p>
        <div className="mb-8">
          <a
            href="/"
            className="inline-block w-full text-[#552020] bg-zinc-200  font-bold py-3 px-4 rounded hover:bg-[#700000] hover:text-white
        transition duration-500 mb-4"
          >
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </div>
  );
}
