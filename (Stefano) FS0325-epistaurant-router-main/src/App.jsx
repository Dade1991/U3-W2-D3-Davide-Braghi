import './App.css'
// bootstrap è installata come dipendenza, ma al momento
// il suo foglio di stile minifizzato non è ancora importato da nessuna parte!
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/CustomNavbar'
import Home from './components/Home'
import ReservationForm from './components/ReservationForm'
import ReservationList from './components/ReservationList'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import PastaDetails from './components/PastaDetails'

// react-router-dom è una libreria che ci permetterà di "simulare"
// un'esperienza di navigazione multi-pagina anche nella nostra S.P.A.
// per farlo avremo bisogno di suddividere i contenuti da mostrare in "rotte"
// (routes), così da mostrare/nascondere elementi a seconda dell'URL in cui
// finiamo. Non è una vera "navigazione" in quanto non chiederemo MAI contenuti
// diversi al server, la pagina HTML che mostreremo sarà ovviamente sempre la stessa
// "index.html"

// si parte installando il pacchetto "react-router-dom" che ci metterà a disposizione
// 3 componenti fondamentali: BrowserRouter, Routes, Route

// BrowserRouter è un guscio "virtuale" che permetterà a tutti i suoi contenuti
// di usufruire delle funzionalità di react-router-dom; per non sbagliare
// lo apriamo in cima al nostro App e lo chiudiamo alla fine del nostro App.

// Routes sarà un guscio "virtuale" per i nostri Route. Genericamente inseriremo
// un Routes dove vi sarà del contenuto che dovrà variare a seconda dell'URL.

function App() {
  // App ha bisogno di una variabile di stato per poter informare ReservationList
  // che ReservationForm ha inviato una nuova prenotazione

  const [trigger, setTrigger] = useState(false)

  const toggleTrigger = () => {
    // questa funzione INVERTE il valore di trigger
    setTrigger(!trigger)
  }

  return (
    <BrowserRouter>
      {/* <CustomNavbar tema="light" /> */}
      <CustomNavbar tema="dark" />
      {/* poiché non sappiamo ancora come gestire il routing in una SPA
      di React, la sezione "prenotazioni esistenti" verrà momentaneamente inserita
      qui, sopra il form di prenotazione :( */}

      {/* apro qui il mio blocco Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/prenota"
          element={<ReservationForm toggleTrigger={toggleTrigger} />}
        />
        <Route path="/admin" element={<ReservationList trigger={trigger} />} />

        <Route path="/menu" element={<Menu />} />

        {/* rotta per il componente PastaDetails */}
        <Route path="/details/:pastaid" element={<PastaDetails />} />

        {/* con questa ultima Route gestiamo tutti i path non "catturati"
        dalle Route precedenti */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
