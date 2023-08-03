import { useState } from 'react';

function App() {
  const [hora1, setHora1] = useState('');
  const [hora2, setHora2] = useState('');
  const [resultado, setResultado] = useState('');

  const handle = (event: any, inputNumber: number) => {
    const v = event.target.value;
    const regex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/.test(v);
    if (regex || v === '') {
      if (inputNumber === 1) {
        setHora1(v);
      } else if (inputNumber === 2) {
        setHora2(v);
      }
    }
  };

  const somarHoras = () => {
    const hora1F = horasMinutos(hora1);
    const hora2F = horasMinutos(hora2);
    const totalMinutes = hora1F + hora2F;
    const resultHour = Math.floor(totalMinutes / 60);
    const resultMinute = totalMinutes % 60;
    setResultado(`${formatNumber(resultHour)}:${formatNumber(resultMinute)}`);
  };

  const subtrairHoras = () => {
    const time1 = horasMinutos(hora1);
    const time2 = horasMinutos(hora2);
    const totalMinutes = time1 - time2;
    const resultHour = Math.floor(totalMinutes / 60);
    const resultMinute = totalMinutes % 60;
    setResultado(`${formatNumber(resultHour)}:${formatNumber(resultMinute)}`);
  };

  const horasMinutos = (time: any) => {
    const [hora, minuto] = time.split(':').map(Number);
    return hora * 60 + minuto;
  };

  const formatNumber = (num: any) => {
    return num.toString().padStart(2, '0');
  };

  return (
    <>
      <div>
        <label>
          Hora 1:
          <input type="text" onChange={(e) => handle(e, 1)} />
        </label>
      </div>
      <div>
        <label>
          Hora 2:
          <input type="text" onChange={(e) => handle(e, 2)} />
        </label>
      </div>
      <div>
        <button onClick={somarHoras}>Somar</button>
        <button onClick={subtrairHoras}>Subtrair</button>
      </div>
      <div>
        <label>Resultado:</label>
        <span>{resultado}</span>
      </div>
    </>
  );
}

export default App;