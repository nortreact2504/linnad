import { useState } from 'react'
import './App.css'
import Linn  from './Linn'
import LinnadeMenyy from './LinnadeMenyy'

import pariisImg from './assets/paris__7_by_joeclaffeyjr_dfgnddo.png'
import londonImg from './assets/london_pictures_iii_by_jenisei_d1z6dkf.jpg'
import berliinImg from './assets/evening_in_gendarmenmarkt_by_rikitza_d7mm0zy.png'

const pariis = {
  nimi: 'Pariis',
  pilt: pariisImg,
  kirjeldus: 'Pariis on Prantsusmaa pealinn ja üks maailma kuulsamaid linnu. See on tuntud oma ajalooliste monumentide, kunstigaleriide ja kultuurilise mitmekesisuse poolest.'
}

const london = {
  nimi: 'London',
  pilt: londonImg,
  kirjeldus: 'London on Ühendkuningriigi pealinn ja üks maailma suurimaid linnu. See on tuntud oma ajaloo, kultuuri ja mitmekesise rahvuse poolest.'
}

const berliin = {
  nimi: 'Berliin',
  pilt: berliinImg,
  kirjeldus: 'Berliin on Saksamaa pealinn ja üks Euroopa kõige mitmekesisemaid linnu. See on tuntud oma ajaloost, kunstist ja kultuurist.'
}

const linnad = [pariis, london, berliin]

function App() {
  const [count, setCount] = useState(0)
  const [linnIndex, setLinnIndex] = useState(0)

  const jargmineLinn = () => {
    if (linnIndex < linnad.length - 1) {
      setLinnIndex(linnIndex + 1)
    }
  }

  const eelmineLinn = () => {
    if (linnIndex > 0) {
      setLinnIndex(linnIndex - 1)
    }
  }

  // const valiLinn = (index) => {
  //   console.log('valitud linn', index)
  //   setLinnIndex(index)
  // }

  return (
    <div>
      <h1>Minu lemmiklinnad</h1>
      <LinnadeMenyy 
        linnad={linnad} 
        linnIndex={linnIndex} 
        valiLinn={setLinnIndex} 
      />
      <Linn linn={linnad[linnIndex]} />
      <button onClick={eelmineLinn}>Eelmine</button>
      <button onClick={jargmineLinn}>Järgmine</button>
    </div>
  )
}

export default App
