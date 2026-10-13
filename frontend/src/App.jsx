import React from "react";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Cargando...");
  const [server, setServer] = useState("");

  useEffect(() => {
    fetch("/api/hello")
     .then((res) => res.json())
     .then((data) => {
        setMessage(data.message);
        setServer(data.server);
      })
     .catch((err) => setMessage("Fallo en la llamada a la API"));
  }, []);

  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
      color: "white",
      fontFamily: '"Inter", sans-serif',
      textAlign: "center",
      padding: "2rem",
    },
    heading: {
      fontSize: "3rem",
      marginBottom: "1rem",
      letterSpacing: "1px",
    },
    message: {
      fontSize: "1.5rem",
      background: "rgba(255,255,255,0.1)",
      padding: "1rem 2rem",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      backdropFilter: "blur(5px)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.heading}>🚀 React + FastAPI + HAProxy</h1>
      <p style={styles.message}>{message}</p>
      {server && <p>Atendido por: <strong>{server}</strong></p>}
    </div>
  );
}

export default App;
