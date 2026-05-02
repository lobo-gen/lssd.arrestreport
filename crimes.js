const crimesData = {{
  "Crimes against the Person": [
    {"title":"(1) 01","crime":"Intimidation","classification":"Misdemeanor","code":"422 PC"},
    {"title":"(1) 02","crime":"Assault","classification":"Misdemeanor","code":"240 PC"},
    {"title":"(1) 03","crime":"Assault with a Deadly Weapon","classification":"Felony","code":"245 PC"},
    {"title":"(1) 04","crime":"Mutual Combat","classification":"Misdemeanor","code":"415(1) PC"},
    {"title":"(1) 05","crime":"Battery","classification":"Misdemeanor","code":"242 PC"},
    {"title":"(1) 06","crime":"Aggravated Battery","classification":"Felony","code":"243(d) PC"},
    {"title":"(1) 07","crime":"Attempted Murder","classification":"Felony","code":"217 PC"},
    {"title":"(1) 08","crime":"Manslaughter","classification":"Felony","code":"192 PC"},
    {"title":"(1) 09","crime":"Murder","classification":"Felony","code":"187 PC"},
    {"title":"(1) 10","crime":"False Imprisonment","classification":"Misdemeanor","code":"236 PC"},
    {"title":"(1) 11","crime":"Kidnapping","classification":"Felony","code":"207 PC"},
    {"title":"(1) 12","crime":"Mayhem","classification":"Felony","code":"205 PC"},
    {"title":"(1) 13","crime":"Vehicular Murder","classification":"Felony","code":"191.5 PC"},
    {"title":"(1) 14","crime":"Vehicular Assault","classification":"Felony","code":"245(a)(1) PC"}
  ],
  "Crimes against Property": [
    {"title":"(2) 01","crime":"Arson","classification":"Felony","code":"451 PC"},
    {"title":"(2) 02","crime":"Trespassing","classification":"Misdemeanor","code":"602 PC"},
    {"title":"(2) 03","crime":"Aggravated Trespass","classification":"Felony","code":"601 PC"},
    {"title":"(2) 04","crime":"Possession Of Burglary Tools","classification":"Misdemeanor","code":"466 PC"},
    {"title":"(2) 05","crime":"Robbery","classification":"Felony","code":"211 PC"},
    {"title":"(2) 06","crime":"Extortion","classification":"Felony","code":"518 PC"},
    {"title":"(2) 07","crime":"Petty Theft","classification":"Misdemeanor","code":"484 PC"},
    {"title":"(2) 08","crime":"Grand Theft","classification":"Felony","code":"487 PC"},
    {"title":"(2) 09","crime":"Receiving Stolen Property","classification":"Misdemeanor","code":"496 PC"},
    {"title":"(2) 10","crime":"Vandalism","classification":"Misdemeanor","code":"594 PC"}
  ],
  "Crimes against Public Decency": [
    {"title":"(3) 01","crime":"Lewd Conduct","classification":"Misdemeanor","code":"647 PC"},
    {"title":"(3) 02","crime":"Indecent Exposure","classification":"Misdemeanor","code":"314 PC"},
    {"title":"(3) 03","crime":"Prostitution","classification":"Misdemeanor","code":"647(b) PC"},
    {"title":"(3) 04","crime":"Soliciting Prostitution","classification":"Misdemeanor","code":"653(f) PC"},
    {"title":"(3) 05","crime":"Pimping","classification":"Felony","code":"655.23 PC"},
    {"title":"(3) 06","crime":"Sexual Assault","classification":"Misdemeanor","code":"241(e) PC"},
    {"title":"(3) 07","crime":"Sexual Battery","classification":"Felony","code":"243(e) PC"},
    {"title":"(3) 08","crime":"Rape","classification":"Felony","code":"261 PC"},
    {"title":"(3) 09","crime":"Stalking","classification":"Felony","code":"646 PC"},
    {"title":"(3) 10","crime":"Gaming","classification":"Misdemeanor","code":"330 PC"}
  ],
  "Crimes against Public Peace": [
    {"title":"(5) 01","crime":"Disturbing The Peace","classification":"Misdemeanor","code":"415 PC"},
    {"title":"(5) 02","crime":"Unlawful Assembly","classification":"Misdemeanor","code":"408 PC"},
    {"title":"(5) 03","crime":"Incitement to Riot","classification":"Felony","code":"404 PC"},
    {"title":"(5) 04","crime":"Public Intoxication","classification":"Misdemeanor","code":"647(f) PC"}
  ],
  "Crimes against Public Health": [
    {"title":"(6) 01","crime":"Possession of a Controlled Substance","classification":"Misdemeanor","code":"11350 HSC"},
    {"title":"(6) 02","crime":"Possess. Controlled Substance for Sale","classification":"Felony","code":"11351 HSC"},
    {"title":"(6) 03","crime":"Possession of Drug Paraphernalia","classification":"Misdemeanor","code":"11364 HSC"},
    {"title":"(6) 04","crime":"Manufacture of a Controlled Substance","classification":"Felony","code":"11379 HSC"},
    {"title":"(6) 05","crime":"Sale of a Controlled Substance","classification":"Felony","code":"11352 HSC"},
    {"title":"(6) 06","crime":"Under Influence of a Controlled Substance","classification":"Misdemeanor","code":"11550 HSC"}
  ],
  "Vehicular Offenses": [
    {"title":"(7) 01","crime":"Driving Without a Valid License","classification":"Misdemeanor","code":"500 PC"},
    {"title":"(7) 02","crime":"Evading a Police Officer","classification":"Misdemeanor","code":"2800.1 PC"},
    {"title":"(7) 03","crime":"Felony Reckless Evading","classification":"Felony","code":"2800.2 PC"},
    {"title":"(7) 04","crime":"Flying Without a License","classification":"Misdemeanor","code":"500(b) PC"},
    {"title":"(7) 05","crime":"Vehicular Endangerment","classification":"Misdemeanor","code":"23103.5 PC"},
    {"title":"(7) 06","crime":"Hit and Run (property damage)","classification":"Misdemeanor","code":"20002 PC"},
    {"title":"(7) 07","crime":"Hit And Run (Injury)","classification":"Felony","code":"20001 PC"},
    {"title":"(7) 08","crime":"Reckless Operation of an Aircraft","classification":"Felony","code":"505(b) PC"},
    {"title":"(7) 09","crime":"Reckless Operation of a Vehicle","classification":"Misdemeanor","code":"505 PC"},
    {"title":"(7) 10","crime":"Driving While Impaired","classification":"Misdemeanor","code":"502 PC"},
    {"title":"(7) 11","crime":"Street Racing","classification":"Misdemeanor","code":"510 PC"},
    {"title":"(7) 12","crime":"Possession of Nitrous Oxide","classification":"Misdemeanor","code":"510(n) PC"}
  ],
  "Control of Lethal Equipment": [
    {"title":"(8) 01","crime":"Possession of a Prohibited Weapon","classification":"Misdemeanor","code":"16470 PC"},
    {"title":"(8) 02","crime":"Possession of an Unlicensed Firearm","classification":"Misdemeanor","code":"25850 PC"},
    {"title":"(8) 03","crime":"Possession of an Illegal Firearm","classification":"Felony","code":"30510 PC"},
    {"title":"(8) 04","crime":"Possession of an Assault Weapon","classification":"Felony","code":"30605 PC"},
    {"title":"(8) 05","crime":"Unlicensed Distribution of a Weapon","classification":"Felony","code":"26500 PC"},
    {"title":"(8) 06","crime":"Possessing Destructive Devices","classification":"Felony","code":"18710 PC"},
    {"title":"(8) 07","crime":"Possess. Weaponry w/ Intent to Sell","classification":"Felony","code":"30600 PC"},
    {"title":"(8) 08","crime":"Possess. Destructive Devices w/ Intent to Sell","classification":"Felony","code":"18730 PC"},
    {"title":"(8) 09","crime":"Brandishing a Firearm","classification":"Misdemeanor","code":"417 PC"},
    {"title":"(8) 10","crime":"Unlawful Discharge of a Firearm","classification":"Felony","code":"246 PC"},
    {"title":"(8) 11","crime":"Discharging a Firearm from a Vehicle","classification":"Felony","code":"26100 PC"}
  ]
}};
