const productos = [
  {
    id: 1,
    nombre: "Holiday Santa Freddy",
    descripcion:
      "Imagine a Christmas when Freddy replaces the jolly old Santa. If you enjoyed FNAF and need a Funko action figure, check out this Five Nights at Freddy's Holiday Santa Freddy Funko Action Figure. Picture Freddy donning a Santa hat, sneaking around to place presents under the tree, or perhaps lurking in the shadows for a festive scare. This unique blend of holiday cheer and video game horror is excellent for fans who enjoy a dash of fright with their Christmas lights.",
    stock: 10,
    precio: "$452500",
    categoria: "funko",
    imagen: "/img/holiday-freddy.jpg",
  },

  {
    id: 2,
    nombre: "Curse of Dreadbear",
    descripcion:
      "Finding the best way to show off your fandom of the best media out there is easier than ever with this FNAF Curse of Dreadbear Jack-o-Bonnie Action Figure. From top to bottom, this figurine has all the awesome details and style that you are looking for in a POP! figurine. Whether it sits on your desk, office, or car, you will love seeing this and showing it off every day!",
    stock: 20,
    precio: "$899500",
    categoria: "funko",
    imagen: "/img/dreadbear.jpg",
  },

  {
    id: 3,
    nombre: "holiday-bonnie",
    descripcion:
      "Prepare to jingle some bells and rattle some cages with the Five Nights at Freddy's Holiday Elf Bonnie Funko Action Figure! Decked out in elfish flair, Bonnie's ready to take a break from the usual frights and delight with some holiday lights. This figure is the perfect crossover between the chilling corridors of Freddy's and the merry vibes of the holiday season, making it a quirky addition to any Five Nights at Freddy's fan's collection. ",
    stock: 10,
    precio: "$1866874",
    categoria: "funko",
    imagen: "/img/holiday-bonnie.jpg",
  },

  {
    id: 4,
    nombre: "Holiday-Chica",
    descripcion:
      "Prepare to jingle some bells and jump-scare some friends with the Holiday Snow Chica Funko Action Figure! This special Christmas edition brings Five Nights at Freddy's into your festive season. A unique blend of horror and holiday spirit, this Chica action figure is all set to be the star of your video game action figures collection.",
    stock: 2,
    precio: "$552900",
    categoria: "funko",
    imagen: "/img/holiday-chica.jpg",
  },

  {
    id: 5,
    nombre: "Help Wanted - Dreadbear",
    descripcion:
      "Being a bear, you would think that Dreadbear would be a little plusher and squishier. His almost disintegrated form is far different from the thick fur and hide that you would expect from a bear, even a scare bear!",
    stock: 15,
    precio: "$546867",
    categoria: "funko",
    imagen: "/img/dreadbear-military.jpg",
  },

  {
    id: 6,
    nombre: "Tie-Dye-Foxy",
    descripcion:
      "What is better than a smart and adorable fox? Pirates? Okay, well what is better than a pirate fox!? Add in a splash of bright color and a haunted spirit and you've got a story that is going to captivate any audience. Find out what is next in store for the most popular animatronic in Five Nights at Freddy's with this Pop! Tie-Die Foxy Action Figure.",
    stock: 15,
    precio: "$678769",
    categoria: "funko",
    imagen: "/img/tie-dye-foxy.jpg",
  },

  {
    id: 7,
    nombre: "Security Breach - Sun",
    descripcion:
      "Step into the mysterious realm of Five Nights at Freddy's Security Breach with the POP! Action Figure: Five Nights at Freddy's Security Breach - Sun. From the thrilling horror game series, this Sun action figure is a must-have for fans of scary video games and chilling adventures. With its enigmatic presence and intricate details, it brings the eerie atmosphere of Five Nights at Freddy's.",
    stock: 15,
    precio: "$234436",
    categoria: "funko",
    imagen: "/img/sun.jpg",
  },

  {
    id: 8,
    nombre: "Grim-Foxy",
    descripcion:
      "Being a fox, you are expected to have certain attributes. From wit to stealth, people always seem to think that they know what to expect from you. You know what they don’t expect? A huge pirate hook! MWAHAHAHA!",
    stock: 15,
    precio: "$324789",
    categoria: "funko",
    imagen: "/img/grim-foxy.jpg",
  },

  {
    id: 9,
    nombre: "Security Breach - Moon",
    descripcion:
      "Enter the eerie world of Five Nights at Freddy's Security Breach with the POP! Action Figure: Five Nights at Freddy's Security Breach - Moon. From the popular horror game series, this Moon action figure is a must-have for fans of scary video games and thrilling adventures. With its haunting presence and intricate details, it brings the eerie atmosphere of Five Nights at Freddy's to life",
    stock: 15,
    precio: "$789234",
    categoria: "funko",
    imagen: "/img/moon.jpg",
  },

  {
    id: 10,
    nombre: "glitchtrap",
    descripcion:
      "Finding the best way to show off your fandom of the best media out there is easier than ever with this Five Nights at Freddy's - Glitchtrap Action Figure. From top to bottom, this figurine has all the awesome details and style that you are looking for in a POP figurine. Whether it sits on your desk, office, or car, you will love seeing this and showing it off every day!",
    stock: 15,
    precio: "$789324",
    categoria: "funko",
    imagen: "/img/glitchtrap.jpg",
  },

  {
    id: 11,
    nombre: "fightline-premier-set",
    descripcion: "This is a Five Nights at Freddy's FightLine Premier Set.",
    stock: 15,
    precio: "$789324",
    categoria: "Set",
    imagen: "/img/fightline-premier-set.jpg",
  },

  {
    id: 12,
    nombre: "Bonnie-and-Baby",
    descripcion:
      "Step into the haunting world of Five Nights at Freddy's when you welcome these Funko SNAPS! Bonnie and Baby Vinyl Figures home! As two of the totally spooky characters from the FNaF universe, Bonnie and Baby are ready to bring spine-chilling excitement to any toy collection.",
    stock: 15,
    precio: "$789324",
    categoria: "Set",
    imagen: "/img/five-nights-at-freddys-snaps-2-pack-bonnie-and-baby.jpg",
  },

  {
    id: 13,
    nombre: "freddy-with-room",
    descripcion:
      "Discover an immersive new way to enjoy the eerie world of Five Nights at Freddy's with this Funko SNAPS! Glamrock Freddy with Dressing Room Playset! The must-have playset includes two face pieces, a torso, a bottom, a detachable head, and accessories to customize the 3.5 Freddy figure.",
    stock: 15,
    precio: "$789324",
    categoria: "Set",
    imagen: "/img/freddy-with-room.jpg",
  },

  {
    id: 14,
    nombre: "storage-carrying-case",
    descripcion:
      "Introducing the ultimate hideout for Freddy and his animatronic crew—SNAPS Five Nights at Freddy's Carrying Case! With its spooktacular design resembling Freddy Fazbear's Pizza, this case is a must-have for FNaF SNAPS collectors.",
    stock: 15,
    precio: "$789324",
    categoria: "Set",
    imagen: "/img/storage-carrying-case.jpg",
  },

  {
    id: 15,
    nombre: "Storage Room with Chica Playset",
    descripcion:
      "The number-one rule for working security at Freddy Fazbear's is always be on your guard. You cannot afford to slip up even once when you're patrolling the quiet hallways or scanning the security cameras. Even if the room you're in seems empty, don't be so sure, because a beaked animatronic could be waiting just around the corner. ",
    stock: 15,
    precio: "$789324",
    categoria: "Set",
    imagen: "/img/storage-room-with-chica.jpg",
  },

  {
    id: 16,
    nombre: "Nightmare Bonnie",
    descripcion: "Ready for the biggest concert of your life?",
    stock: 15,
    precio: "$789324",
    categoria: "Set",
    imagen: "/img/nightmare-bonnie.jpg",
  },

  {
    id: 17,
    nombre: "Balloon Foxy Vinyl Figure",
    descripcion:
      "Did you survive Balloon World? When the lights go down and you have few defenses against murderous animatronics, what are you going to do? Clearly you have to up your game and outtthink your adversaries. Be the fox, or the fox is going to get you! ",
    stock: 15,
    precio: "$789324",
    categoria: "Set",
    imagen: "/img/balloon-foxy.jpg",
  },

  {
    id: 18,
    nombre: "Vanny Vinyl Figure",
    descripcion: "Help Wanted - Glitchtrap",
    stock: 15,
    precio: "$789324",
    categoria: "Set",
    imagen: "/img/vanny.jpg",
  },

  {
    id: 19,
    nombre: "Deluxe Bonnie",
    descripcion: "Help Wanted - Glitchtrap",
    stock: 15,
    precio: "$789324",
    categoria: "Set",
    imagen: "/img/deluxe-bonnie.jpg",
  },

  {
    id: 20,
    nombre: "Foxy Vinyl Figure",
    descripcion:
      "Some might assume that because Freddy's name is on the menu at Freddy Fazbears that he must be the kids' favorite animatronic. Well, would you be surprised to know that it is all about Foxy instead? Is it the pirate hook or the snazzy eye patch? Maybe the grin that Foxy has while stalking the halls after hours? Who knows!? Either way, if you're looking for an amazing addition to your FNAF collection, this Funko Snap! Five Nights at Freddy's Foxy vinyl is a guaranteed winner!",
    stock: 15,
    precio: "$789324",
    categoria: "Set",
    imagen: "/img/snaps-foxy.jpg",
  },
];

const obtenerProductos = new Promise((resolve) => {
  //Simulamos un retraso de Red (por ejemplo el que tendria la consulta a una Api)
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default obtenerProductos;
