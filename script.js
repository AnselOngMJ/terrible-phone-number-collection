let countries = [
    {
        "name": "Abkhazia",
        "code": "7 (840, 940)"
    },
    {
        "name": "Afghanistan",
        "code": "93"
    },
    {
        "name": "Åland",
        "code": "358 (18)"
    },
    {
        "name": "Albania",
        "code": "355"
    },
    {
        "name": "Algeria",
        "code": "213"
    },
    {
        "name": "American Samoa",
        "code": "1 (684)"
    },
    {
        "name": "Andorra",
        "code": "376"
    },
    {
        "name": "Angola",
        "code": "244"
    },
    {
        "name": "Anguilla",
        "code": "1 (264)"
    },
    {
        "name": "Antigua and Barbuda",
        "code": "1 (268)"
    },
    {
        "name": "Argentina",
        "code": "54"
    },
    {
        "name": "Armenia",
        "code": "374"
    },
    {
        "name": "Aruba",
        "code": "297"
    },
    {
        "name": "Ascension",
        "code": "247"
    },
    {
        "name": "Australia",
        "code": "61"
    },
    {
        "name": "Austria",
        "code": "43"
    },
    {
        "name": "Azerbaijan",
        "code": "994"
    },
    {
        "name": "Bahamas",
        "code": "1 (242)"
    },
    {
        "name": "Bahrain",
        "code": "973"
    },
    {
        "name": "Bangladesh",
        "code": "880"
    },
    {
        "name": "Barbados",
        "code": "1 (246)"
    },
    {
        "name": "Belarus",
        "code": "375"
    },
    {
        "name": "Belgium",
        "code": "32"
    },
    {
        "name": "Belize",
        "code": "501"
    },
    {
        "name": "Benin",
        "code": "229"
    },
    {
        "name": "Bermuda",
        "code": "1 (441)"
    },
    {
        "name": "Bhutan",
        "code": "975"
    },
    {
        "name": "Bolivia",
        "code": "591"
    },
    {
        "name": "Bonaire",
        "code": "599 (7)"
    },
    {
        "name": "Bosnia and Herzegovina",
        "code": "387"
    },
    {
        "name": "Botswana",
        "code": "267"
    },
    {
        "name": "Brazil",
        "code": "55"
    },
    {
        "name": "British Indian Ocean Territory (Diego Garcia)",
        "code": "246"
    },
    {
        "name": "British Virgin Islands",
        "code": "1 (284)"
    },
    {
        "name": "Brunei Darussalam",
        "code": "673"
    },
    {
        "name": "Bulgaria",
        "code": "359"
    },
    {
        "name": "Burkina Faso",
        "code": "226"
    },
    {
        "name": "Burundi",
        "code": "257"
    },
    {
        "name": "Cape Verde",
        "code": "238"
    },
    {
        "name": "Cambodia",
        "code": "855"
    },
    {
        "name": "Cameroon",
        "code": "237"
    },
    {
        "name": "Canada",
        "code": "1"
    },
    {
        "name": "Caribbean Netherlands",
        "code": "599 (3, 4, 7)"
    },
    {
        "name": "Cayman Islands",
        "code": "1 (345)"
    },
    {
        "name": "Central African Republic",
        "code": "236"
    },
    {
        "name": "Chad",
        "code": "235"
    },
    {
        "name": "Chile",
        "code": "56"
    },
    {
        "name": "China",
        "code": "86"
    },
    {
        "name": "Christmas Island",
        "code": "61 (89164)"
    },
    {
        "name": "Cocos (Keeling) Islands",
        "code": "61 (89162)"
    },
    {
        "name": "Colombia",
        "code": "57"
    },
    {
        "name": "Comoros",
        "code": "269"
    },
    {
        "name": "Congo",
        "code": "242"
    },
    {
        "name": "Congo, Democratic Republic of the",
        "code": "243"
    },
    {
        "name": "Cook Islands",
        "code": "682"
    },
    {
        "name": "Costa Rica",
        "code": "506"
    },
    {
        "name": "Ivory Coast (Côte d'Ivoire)",
        "code": "225"
    },
    {
        "name": "Croatia",
        "code": "385"
    },
    {
        "name": "Cuba",
        "code": "53"
    },
    {
        "name": "Curaçao",
        "code": "599 (9)"
    },
    {
        "name": "Cyprus",
        "code": "357"
    },
    {
        "name": "Czech Republic",
        "code": "420"
    },
    {
        "name": "Denmark",
        "code": "45"
    },
    {
        "name": "Djibouti",
        "code": "253"
    },
    {
        "name": "Dominica",
        "code": "1 (767)"
    },
    {
        "name": "Dominican Republic",
        "code": "1 (809, 829, 849)"
    },
    {
        "name": "Easter Island",
        "code": "56"
    },
    {
        "name": "Ecuador",
        "code": "593"
    },
    {
        "name": "Egypt",
        "code": "20"
    },
    {
        "name": "El Salvador",
        "code": "503"
    },
    {
        "name": "Ellipso (Mobile Satellite service)",
        "code": "881 (2, 3)"
    },
    {
        "name": "EMSAT (Mobile Satellite service)",
        "code": "882 (13)"
    },
    {
        "name": "Equatorial Guinea",
        "code": "240"
    },
    {
        "name": "Eritrea",
        "code": "291"
    },
    {
        "name": "Estonia",
        "code": "372"
    },
    {
        "name": "Eswatini",
        "code": "268"
    },
    {
        "name": "Ethiopia",
        "code": "251"
    },
    {
        "name": "Falkland Islands",
        "code": "500"
    },
    {
        "name": "Faroe Islands",
        "code": "298"
    },
    {
        "name": "Fiji",
        "code": "679"
    },
    {
        "name": "Finland",
        "code": "358"
    },
    {
        "name": "France",
        "code": "33"
    },
    {
        "name": "French Antilles",
        "code": "596"
    },
    {
        "name": "French Guiana",
        "code": "594"
    },
    {
        "name": "French Polynesia",
        "code": "689"
    },
    {
        "name": "Gabon",
        "code": "241"
    },
    {
        "name": "Gambia",
        "code": "220"
    },
    {
        "name": "Georgia",
        "code": "995"
    },
    {
        "name": "Germany",
        "code": "49"
    },
    {
        "name": "Ghana",
        "code": "233"
    },
    {
        "name": "Gibraltar",
        "code": "350"
    },
    {
        "name": "Global Mobile Satellite System (GMSS)",
        "code": "881"
    },
    {
        "name": "Globalstar (Mobile Satellite Service)",
        "code": "881 (8, 9)"
    },
    {
        "name": "Greece",
        "code": "30"
    },
    {
        "name": "Greenland",
        "code": "299"
    },
    {
        "name": "Grenada",
        "code": "1 (473)"
    },
    {
        "name": "Guadeloupe",
        "code": "590"
    },
    {
        "name": "Guam",
        "code": "1 (671)"
    },
    {
        "name": "Guatemala",
        "code": "502"
    },
    {
        "name": "Guernsey",
        "code": "44 (1481, 7781, 7839, 7911)"
    },
    {
        "name": "Guinea",
        "code": "224"
    },
    {
        "name": "Guinea-Bissau",
        "code": "245"
    },
    {
        "name": "Guyana",
        "code": "592"
    },
    {
        "name": "Haiti",
        "code": "509"
    },
    {
        "name": "Honduras",
        "code": "504"
    },
    {
        "name": "Hong Kong",
        "code": "852"
    },
    {
        "name": "Hungary",
        "code": "36"
    },
    {
        "name": "Iceland",
        "code": "354"
    },
    {
        "name": "ICO Global (Mobile Satellite Service)",
        "code": "881 (0, 1)"
    },
    {
        "name": "India",
        "code": "91"
    },
    {
        "name": "Indonesia",
        "code": "62"
    },
    {
        "name": "Inmarsat SNAC",
        "code": "870"
    },
    {
        "name": "International Freephone Service (UIFN)",
        "code": "800"
    },
    {
        "name": "International Networks",
        "code": "882, 883"
    },
    {
        "name": "International Premium Rate Service",
        "code": "979"
    },
    {
        "name": "International Shared Cost Service (ISCS)",
        "code": "808"
    },
    {
        "name": "Iran",
        "code": "98"
    },
    {
        "name": "Iraq",
        "code": "964"
    },
    {
        "name": "Ireland",
        "code": "353"
    },
    {
        "name": "Iridium (Mobile Satellite service)",
        "code": "881 (6, 7)"
    },
    {
        "name": "Isle of Man",
        "code": "44 (1624, 7524, 7624, 7924)"
    },
    {
        "name": "Israel",
        "code": "972"
    },
    {
        "name": "Italy",
        "code": "39"
    },
    {
        "name": "Jamaica",
        "code": "1 (658, 876)"
    },
    {
        "name": "Jan Mayen",
        "code": "47 (79)"
    },
    {
        "name": "Japan",
        "code": "81"
    },
    {
        "name": "Jersey",
        "code": "44 (1534)"
    },
    {
        "name": "Jordan",
        "code": "962"
    },
    {
        "name": "Kazakhstan",
        "code": "7 (6, 7) (997 assigned but now abandoned)"
    },
    {
        "name": "Kenya",
        "code": "254"
    },
    {
        "name": "Kiribati",
        "code": "686"
    },
    {
        "name": "Korea, North",
        "code": "850"
    },
    {
        "name": "Korea, South",
        "code": "82"
    },
    {
        "name": "Kosovo",
        "code": "383"
    },
    {
        "name": "Kuwait",
        "code": "965"
    },
    {
        "name": "Kyrgyzstan",
        "code": "996"
    },
    {
        "name": "Laos",
        "code": "856"
    },
    {
        "name": "Latvia",
        "code": "371"
    },
    {
        "name": "Lebanon",
        "code": "961"
    },
    {
        "name": "Lesotho",
        "code": "266"
    },
    {
        "name": "Liberia",
        "code": "231"
    },
    {
        "name": "Libya",
        "code": "218"
    },
    {
        "name": "Liechtenstein",
        "code": "423"
    },
    {
        "name": "Lithuania",
        "code": "370"
    },
    {
        "name": "Luxembourg",
        "code": "352"
    },
    {
        "name": "Macau",
        "code": "853"
    },
    {
        "name": "Madagascar",
        "code": "261"
    },
    {
        "name": "Malawi",
        "code": "265"
    },
    {
        "name": "Malaysia",
        "code": "60"
    },
    {
        "name": "Maldives",
        "code": "960"
    },
    {
        "name": "Mali",
        "code": "223"
    },
    {
        "name": "Malta",
        "code": "356"
    },
    {
        "name": "Marshall Islands",
        "code": "692"
    },
    {
        "name": "Martinique",
        "code": "596"
    },
    {
        "name": "Mauritania",
        "code": "222"
    },
    {
        "name": "Mauritius",
        "code": "230"
    },
    {
        "name": "Mayotte",
        "code": "262 (269, 639)"
    },
    {
        "name": "Mexico",
        "code": "52"
    },
    {
        "name": "Micronesia, Federated States of",
        "code": "691"
    },
    {
        "name": "Moldova",
        "code": "373"
    },
    {
        "name": "Monaco",
        "code": "377"
    },
    {
        "name": "Mongolia",
        "code": "976"
    },
    {
        "name": "Montenegro",
        "code": "382"
    },
    {
        "name": "Montserrat",
        "code": "1 (664)"
    },
    {
        "name": "Morocco",
        "code": "212"
    },
    {
        "name": "Mozambique",
        "code": "258"
    },
    {
        "name": "Myanmar",
        "code": "95"
    },
    {
        "name": "Namibia",
        "code": "264"
    },
    {
        "name": "Nauru",
        "code": "674"
    },
    {
        "name": "Nepal",
        "code": "977"
    },
    {
        "name": "Netherlands",
        "code": "31"
    },
    {
        "name": "Nevis",
        "code": "1 (869)"
    },
    {
        "name": "New Caledonia",
        "code": "687"
    },
    {
        "name": "New Zealand",
        "code": "64"
    },
    {
        "name": "Nicaragua",
        "code": "505"
    },
    {
        "name": "Niger",
        "code": "227"
    },
    {
        "name": "Nigeria",
        "code": "234"
    },
    {
        "name": "Niue",
        "code": "683"
    },
    {
        "name": "Norfolk Island",
        "code": "672 (3)"
    },
    {
        "name": "North Macedonia",
        "code": "389"
    },
    {
        "name": "Northern Cyprus",
        "code": "90 (392)"
    },
    {
        "name": "Northern Ireland",
        "code": "44 (28)"
    },
    {
        "name": "Northern Mariana Islands",
        "code": "1 (670)"
    },
    {
        "name": "Norway",
        "code": "47"
    },
    {
        "name": "Oman",
        "code": "968"
    },
    {
        "name": "Pakistan",
        "code": "92"
    },
    {
        "name": "Palau",
        "code": "680"
    },
    {
        "name": "Palestine",
        "code": "970"
    },
    {
        "name": "Panama",
        "code": "507"
    },
    {
        "name": "Papua New Guinea",
        "code": "675"
    },
    {
        "name": "Paraguay",
        "code": "595"
    },
    {
        "name": "Peru",
        "code": "51"
    },
    {
        "name": "Philippines",
        "code": "63"
    },
    {
        "name": "Pitcairn Islands",
        "code": "64"
    },
    {
        "name": "Poland",
        "code": "48"
    },
    {
        "name": "Portugal",
        "code": "351"
    },
    {
        "name": "Puerto Rico",
        "code": "1 (787, 939)"
    },
    {
        "name": "Qatar",
        "code": "974"
    },
    {
        "name": "Réunion",
        "code": "262"
    },
    {
        "name": "Romania",
        "code": "40"
    },
    {
        "name": "Russia",
        "code": "7"
    },
    {
        "name": "Rwanda",
        "code": "250"
    },
    {
        "name": "Saba",
        "code": "599 (4)"
    },
    {
        "name": "Saint Barthélemy",
        "code": "590"
    },
    {
        "name": "Saint Helena",
        "code": "290"
    },
    {
        "name": "Saint Kitts and Nevis",
        "code": "1 (869)"
    },
    {
        "name": "Saint Lucia",
        "code": "1 (758)"
    },
    {
        "name": "Saint Martin (France)",
        "code": "590"
    },
    {
        "name": "Saint Pierre and Miquelon",
        "code": "508"
    },
    {
        "name": "Saint Vincent and the Grenadines",
        "code": "1 (784)"
    },
    {
        "name": "Samoa",
        "code": "685"
    },
    {
        "name": "San Marino",
        "code": "378"
    },
    {
        "name": "São Tomé and Príncipe",
        "code": "239"
    },
    {
        "name": "Saudi Arabia",
        "code": "966"
    },
    {
        "name": "Senegal",
        "code": "221"
    },
    {
        "name": "Serbia",
        "code": "381"
    },
    {
        "name": "Seychelles",
        "code": "248"
    },
    {
        "name": "Sierra Leone",
        "code": "232"
    },
    {
        "name": "Singapore",
        "code": "65"
    },
    {
        "name": "Sint Eustatius",
        "code": "599 (3)"
    },
    {
        "name": "Sint Maarten (Netherlands)",
        "code": "1 (721)"
    },
    {
        "name": "Slovakia",
        "code": "421"
    },
    {
        "name": "Slovenia",
        "code": "386"
    },
    {
        "name": "Solomon Islands",
        "code": "677"
    },
    {
        "name": "Somalia",
        "code": "252"
    },
    {
        "name": "South Africa",
        "code": "27"
    },
    {
        "name": "South Georgia and the South Sandwich Islands",
        "code": "500"
    },
    {
        "name": "South Ossetia",
        "code": "7 (850, 929)"
    },
    {
        "name": "South Sudan",
        "code": "211"
    },
    {
        "name": "Spain",
        "code": "34"
    },
    {
        "name": "Sri Lanka",
        "code": "94"
    },
    {
        "name": "Sudan",
        "code": "249"
    },
    {
        "name": "Suriname",
        "code": "597"
    },
    {
        "name": "Svalbard",
        "code": "47 (79)"
    },
    {
        "name": "Sweden",
        "code": "46"
    },
    {
        "name": "Switzerland",
        "code": "41"
    },
    {
        "name": "Syria",
        "code": "963"
    },
    {
        "name": "Taiwan",
        "code": "886"
    },
    {
        "name": "Tajikistan",
        "code": "992"
    },
    {
        "name": "Tanzania",
        "code": "255"
    },
    {
        "name": "Thailand",
        "code": "66"
    },
    {
        "name": "Thuraya (Mobile Satellite service)",
        "code": "882 (16)"
    },
    {
        "name": "East Timor (Timor-Leste)",
        "code": "670"
    },
    {
        "name": "Togo",
        "code": "228"
    },
    {
        "name": "Tokelau",
        "code": "690"
    },
    {
        "name": "Tonga",
        "code": "676"
    },
    {
        "name": "Transnistria",
        "code": "373 (2, 5)"
    },
    {
        "name": "Trinidad and Tobago",
        "code": "1 (868)"
    },
    {
        "name": "Tristan da Cunha",
        "code": "290 (8)"
    },
    {
        "name": "Tunisia",
        "code": "216"
    },
    {
        "name": "Turkey",
        "code": "90"
    },
    {
        "name": "Turkmenistan",
        "code": "993"
    },
    {
        "name": "Turks and Caicos Islands",
        "code": "1 (649)"
    },
    {
        "name": "Tuvalu",
        "code": "688"
    },
    {
        "name": "Uganda",
        "code": "256"
    },
    {
        "name": "Ukraine",
        "code": "380"
    },
    {
        "name": "United Arab Emirates",
        "code": "971"
    },
    {
        "name": "United Kingdom",
        "code": "44"
    },
    {
        "name": "United States",
        "code": "1"
    },
    {
        "name": "Uruguay",
        "code": "598"
    },
    {
        "name": "US Virgin Islands",
        "code": "1 (340)"
    },
    {
        "name": "Uzbekistan",
        "code": "998"
    },
    {
        "name": "Vanuatu",
        "code": "678"
    },
    {
        "name": "Vatican City State (Holy See)",
        "code": "39 (06698),assigned 379"
    },
    {
        "name": "Venezuela",
        "code": "58"
    },
    {
        "name": "Vietnam",
        "code": "84"
    },
    {
        "name": "Wake Island, USA",
        "code": "1 (808)"
    },
    {
        "name": "Wallis and Futuna",
        "code": "681"
    },
    {
        "name": "Yemen",
        "code": "967"
    },
    {
        "name": "Zambia",
        "code": "260"
    },
    {
        "name": "Zanzibar",
        "code": "255 (24)"
    },
    {
        "name": "Zimbabwe",
        "code": "263"
    }
]

let Engine = Matter.Engine,
    Events = Matter.Events,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite;

let engine = Engine.create();

let render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        background: "white",
        wireframes: false
    }
});

let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true, render: { fillStyle: "black" } });

Composite.add(engine.world, [ground]);

for (let i = 0; i < 12; i++)  {
    let wall = Bodies.rectangle(8 + i * (55 + 16.25), 555, 16.25, 50, { label: "wall", isStatic: true, render: { fillStyle: "black" } });
    if (i === 0 || i === 11) {
        wall = Bodies.rectangle(8 + i * (55 + 16.25), 300, 16.25, 600, { label: "wall", isStatic: true, render: { fillStyle: "black" } });
    }
    Composite.add(engine.world, [wall]);
}

for (let i = 0; i < 11; i++)  {
    for (let j = 0; j < 8; j++) {
        let offset = j % 2 === 1 ? (55 + 16.25) / 2 : 0;
        if (!offset && i === 0) {
            continue;
        }
        let peg = Bodies.circle(8 + i * (55 + 16.25) + offset, 500 - j * 50, 8, { isStatic: true, render: { fillStyle: "black" } });
        Composite.add(engine.world, [peg]);
    }
}

Render.run(render);

let runner = Runner.create();

Runner.run(runner, engine);

document.querySelector("#generate").addEventListener("click", () => {
    let circle = Bodies.circle(100 + Math.random() * 600, 50, 10, { label: "drop", restitution: 0.5, friction: 0.5, density: 1, render: { strokeStyle: "black", lineWidth: 1 } });
    Composite.add(engine.world, [circle]);
});

Events.on(engine, "collisionEnd", () => {
    let phoneNumber = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let balls = Composite.allBodies(engine.world).filter(body => body.label === "drop" && body.position.y > 530);
    let walls = Composite.allBodies(engine.world).filter(body => body.label === "wall");
    for (let ball of balls) {
        for (let i = 0; i < walls.length - 1; i++) {
            if (ball.position.x > walls[i].position.x && ball.position.x < walls[i + 1].position.x) {
                phoneNumber[i]++;
            }
        }
    }
    document.querySelector("#phoneNumber").textContent = phoneNumber.join('');
});

document.querySelector("#reset").addEventListener("click", () => {
    let balls = Composite.allBodies(engine.world).filter(body => body.label === "drop");
    for (let ball of balls) {
        Composite.remove(engine.world, ball);
    }
});

while (countries.length) {
    let country = countries.splice(Math.floor(Math.random() * countries.length - 1), 1)[0];
    let option = document.createElement("option");
    option.textContent = country.name;
    option.value = country.code;
    document.querySelector("select").appendChild(option);
}

document.querySelector("select").addEventListener("change", () => {
    document.querySelector("#code").textContent = "+" + document.querySelector("select").value;
});

document.querySelector("#confirm").addEventListener("click", () => {
    alert(`Your phone number is ${document.querySelector("#code").textContent} ${document.querySelector("#phoneNumber").textContent}`);
});