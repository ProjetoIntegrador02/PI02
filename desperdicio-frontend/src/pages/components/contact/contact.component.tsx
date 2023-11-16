export function Contact({ setActiveStep }: { setActiveStep: React.Dispatch<React.SetStateAction<number>>}) {
  return (
    <>
      <h1 style={{ fontSize: 48, textAlign: "center" }}>Dados para contato</h1>
      <p style={{ fontSize: 18, textAlign: "center" }}>
        Para prosseguir, precisamos de algumas informações:
      </p>

      <form style={{ maxWidth: 800, margin: '0 auto'}}>
        <label style={{ display: "flex", flexDirection: "column", marginTop: 20}}>
          Nome:
          <input
            type="text"
            placeholder="Insira seu nome"
            onChange={(e) => null}
            style={{
              backgroundColor: "#F3F3F3",
              border: "none",
              padding: 16,
              fontSize: 16,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </label>

          <label style={{ display: "flex", flexDirection: "column", marginTop: 20}}>
          E-mail:
          <input
            type="email"
            placeholder="Digite seu email"
            onChange={(e) => null}
            style={{
              backgroundColor: "#F3F3F3",
              border: "none",
              padding: 16,
              fontSize: 16,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </label>

          <label style={{ display: "flex", flexDirection: "column", marginTop: 20}}>
          Celular:
          <input
            type="text"
            placeholder="Seu telefone para contato"
            onChange={(e) => null}
            style={{
              backgroundColor: "#F3F3F3",
              border: "none",
              padding: 16,
              fontSize: 16,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </label>

        <p style={{ textAlign: 'center', fontSize: 14}}>Ao enviar você estará concordando com a nossa política de prividade e os termos de uso da nossa plataforma.</p>


        <button onClick={(e) => {
          e.preventDefault();
          setActiveStep(3)
        }}
      style={{ backgroundColor: '#0097F5', color: 'white', width: '100%', border: 'none', padding: 16, fontSize: 16, marginTop: 10, borderRadius: 5}}>Concluir</button>
      </form>
    </>
  );
}
