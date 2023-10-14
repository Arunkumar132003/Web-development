import React, { useState } from "react";
const interestingFacts = [
  {
    heading: "Honey Never Spoils",
    fact:
      "Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible. Honey's natural composition makes it resistant to bacteria and spoilage."
  },
  {
    heading: "Octopuses Have Three Hearts",
    fact:
      "Octopuses are fascinating creatures with three hearts. Two hearts pump blood to the gills, while the third heart pumps it to the rest of the body."
  },
  {
    heading: "Bananas Are Berries, but Strawberries Aren't",
    fact:
      "In botanical terms, bananas are classified as berries, while strawberries are not. Berries are defined as fruits produced from the ovary of a single flower with seeds embedded in the flesh."
  },
  {
    heading:
      "Cleopatra Lived Closer to the Moon Landing Than the Building of the Pyramids",
    fact:
      "Cleopatra, the last Pharaoh of Egypt, lived around 30 BC, while the Great Pyramid of Giza was built around 2600 BC. The Moon landing occurred in 1969."
  },
  {
    heading: "The Eiffel Tower Can Be 15 cm Taller During the Summer",
    fact:
      "When a substance is heated up, its particles move more and it takes up a larger volume. So, the iron structure of the Eiffel Tower expands in the heat of the summer."
  },
  {
    heading: "The Shortest War in History Lasted 38 Minutes",
    fact:
      "The Anglo-Zanzibar War, fought between the United Kingdom and the Sultanate of Zanzibar on August 27, 1896, holds the record for the shortest war in history. It ended just 38 minutes after it began."
  },
  {
    heading: "A Group of Flamingos Is Called a 'Flamboyance'",
    fact:
      "When a group of flamingos gather together, it's appropriately called a 'flamboyance' of flamingos."
  },
  {
    heading: "The World's Largest Desert is Antarctica",
    fact:
      "While deserts are typically associated with hot, arid regions, a desert is defined by its low precipitation levels. Antarctica, with its frigid temperatures and low precipitation, qualifies as the largest desert on Earth."
  },
  {
    heading: "The Great Wall of China Is Not Visible from Space",
    fact:
      "Contrary to popular belief, the Great Wall of China is not easily visible from space with the naked eye. It's a myth that has been debunked by astronauts."
  },
  {
    heading: "The Earth Has More Than One Moon",
    fact:
      "In addition to our primary moon, Earth has small, natural satellites known as 'mini-moons' or 'moonlets.' They are often temporary and orbit the Earth for brief periods before escaping back into space."
  },
  {
    heading: "The World's Largest Flower Is a Parasitic Plant",
    fact:
      "The Rafflesia arnoldii, native to Southeast Asia, holds the title of the world's largest flower. It's a parasitic plant that produces flowers that can be over three feet in diameter."
  },
  {
    heading: "The Coldest Inhabited Place on Earth Is in Russia",
    fact:
      "The Siberian town of Oymyakon, Russia, holds the record for the coldest inhabited place on Earth. Temperatures there can drop below -50 degrees Celsius (-58 degrees Fahrenheit)."
  },
  {
    heading: "A Day on Mars Is Almost the Same as a Day on Earth",
    fact:
      "A day on Mars, known as a 'sol,' is only about 37 minutes longer than a day on Earth. Mars rotates at a slightly slower pace than our planet."
  },
  {
    heading: "The Loudest Animal on Earth Is the Sperm Whale",
    fact:
      "The clicking sounds produced by male sperm whales, called 'codas,' can be incredibly loud and are used for communication. They are considered the loudest sounds produced by any animal."
  },
  {
    heading: "A Day on Venus Is Longer Than a Year on Venus",
    fact:
      "Venus has an extremely slow rotation on its axis, taking approximately 243 Earth days to complete one rotation. In contrast, it only takes about 225 Earth days for Venus to orbit the Sun."
  },
  {
    heading: "Cows Have Best Friends",
    fact:
      "Research has shown that cows form close bonds with other cows and can become stressed when separated from their 'best friends.' They have a social hierarchy and prefer the company of certain companions."
  },
  {
    heading: "A Lightning Bolt Is Five Times Hotter Than the Sun",
    fact:
      "A lightning bolt can reach temperatures of approximately 54,000 degrees Fahrenheit (30,000 degrees Celsius), which is about five times hotter than the surface of the Sun."
  },
  {
    heading: "A Single Tree Can Absorb One Ton of Carbon Dioxide",
    fact:
      "Healthy trees are excellent at absorbing carbon dioxide (CO2) from the atmosphere during photosynthesis. On average, a mature tree can absorb up to one ton of CO2 over its lifetime."
  },
  {
    heading: "The World's Largest Known Organism Is a Fungus",
    fact:
      "The Armillaria ostoyae, a type of fungus, holds the record for the largest known organism on Earth. It covers an area of over 2,385 acres (965 hectares) in Oregon's Malheur National Forest."
  },
  {
    heading: "The Smallest Bone in the Human Body Is in the Ear",
    fact:
      "The stapes bone, located in the human ear, is the smallest bone in the body. It measures just a few millimeters in length and plays a crucial role in hearing."
  },
  {
    heading: "The Oldest Known Recorded Music Dates Back to the 9th Century",
    fact:
      "The oldest known recorded music is a composition called the 'Seikilos Epitaph,' which dates back to the 1st century AD. It is inscribed with lyrics and musical notation on a tombstone in Turkey."
  },
  {
    heading: "The First Computer Mouse Was Made of Wood",
    fact:
      "The first computer mouse, invented by Douglas Engelbart in 1964, was made of wood and had two metal wheels. It was used in the early days of computing to control a graphical user interface."
  },
  {
    heading: "A Cat's Purr Has Therapeutic Benefits",
    fact:
      "The sound of a cat's purring has been shown to have therapeutic effects, including stress reduction and improved healing of bones and tissues. It's one of the reasons why cats are cherished as pets."
  }
];
const Fact = () => {
  let [factHead, setFactHead] = useState("Honey Never Spoils");
  let [content, setContent] = useState(
    "Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible. Honey's natural composition makes it resistant to bacteria and spoilage."
  );

  function generateFact() {
    var nums = Math.floor(Math.random() * interestingFacts.length);
    setFactHead(interestingFacts[nums].heading);
    setContent(interestingFacts[nums].fact);
  }

  return (
    <div id="container">
      <div id="facts">
        <h3 id="fact-head">{factHead}</h3>
        <p id="content">{content}</p>
      </div>
      <button id="btn" onClick={generateFact}>
        NEW FACT
      </button>
    </div>
  );
};
export default Fact;
